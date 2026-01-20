-- Add unique constraint on email to prevent duplicate submissions
ALTER TABLE opt_in_submissions 
ADD CONSTRAINT unique_email UNIQUE (email);

-- Update the submit_opt_in function to handle duplicate email gracefully with upsert logic
CREATE OR REPLACE FUNCTION public.submit_opt_in(
  p_first_name TEXT,
  p_last_name TEXT,
  p_email TEXT,
  p_phone TEXT,
  p_marketing_consent BOOLEAN,
  p_privacy_policy_accepted BOOLEAN,
  p_terms_accepted BOOLEAN
)
RETURNS UUID
SECURITY INVOKER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  v_id UUID;
  v_existing_id UUID;
  v_normalized_email TEXT;
BEGIN
  -- Normalize email early
  v_normalized_email := lower(trim(p_email));

  -- Validate required consents
  IF NOT COALESCE(p_privacy_policy_accepted, false) THEN
    RAISE EXCEPTION 'Privacy policy acceptance is required';
  END IF;
  
  IF NOT COALESCE(p_terms_accepted, false) THEN
    RAISE EXCEPTION 'Terms of service acceptance is required';
  END IF;
  
  -- Validate first name
  IF p_first_name IS NULL OR length(trim(p_first_name)) < 1 THEN
    RAISE EXCEPTION 'First name is required';
  END IF;
  
  IF length(p_first_name) > 100 THEN
    RAISE EXCEPTION 'First name too long (max 100 characters)';
  END IF;
  
  -- Validate last name
  IF p_last_name IS NULL OR length(trim(p_last_name)) < 1 THEN
    RAISE EXCEPTION 'Last name is required';
  END IF;
  
  IF length(p_last_name) > 100 THEN
    RAISE EXCEPTION 'Last name too long (max 100 characters)';
  END IF;
  
  -- Validate email format and length
  IF p_email IS NULL OR length(trim(p_email)) < 1 THEN
    RAISE EXCEPTION 'Email is required';
  END IF;
  
  IF length(p_email) > 255 THEN
    RAISE EXCEPTION 'Email too long (max 255 characters)';
  END IF;
  
  IF p_email !~ '^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  
  -- Validate phone if provided
  IF p_phone IS NOT NULL AND length(p_phone) > 20 THEN
    RAISE EXCEPTION 'Phone number too long (max 20 characters)';
  END IF;
  
  -- Check if email already exists
  SELECT id INTO v_existing_id
  FROM opt_in_submissions
  WHERE email = v_normalized_email;
  
  IF v_existing_id IS NOT NULL THEN
    -- Email already subscribed - update the record instead
    UPDATE opt_in_submissions
    SET 
      first_name = trim(p_first_name),
      last_name = trim(p_last_name),
      phone = CASE WHEN p_phone IS NOT NULL AND length(trim(p_phone)) > 0 THEN trim(p_phone) ELSE phone END,
      marketing_consent = COALESCE(p_marketing_consent, marketing_consent),
      updated_at = now()
    WHERE id = v_existing_id
    RETURNING id INTO v_id;
    
    RETURN v_id;
  END IF;
  
  -- Insert new record
  INSERT INTO opt_in_submissions (
    first_name, last_name, email, phone,
    marketing_consent, privacy_policy_accepted, terms_accepted
  ) VALUES (
    trim(p_first_name), trim(p_last_name), v_normalized_email, 
    CASE WHEN p_phone IS NOT NULL AND length(trim(p_phone)) > 0 THEN trim(p_phone) ELSE NULL END,
    COALESCE(p_marketing_consent, false), p_privacy_policy_accepted, p_terms_accepted
  ) RETURNING id INTO v_id;
  
  RETURN v_id;
END;
$$;

-- Grant execute permission to anonymous and authenticated users
GRANT EXECUTE ON FUNCTION public.submit_opt_in TO anon, authenticated;
-- Create table for opt-in form submissions
CREATE TABLE public.opt_in_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    marketing_consent BOOLEAN NOT NULL DEFAULT false,
    privacy_policy_accepted BOOLEAN NOT NULL DEFAULT false,
    terms_accepted BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.opt_in_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (anyone can submit an opt-in form)
CREATE POLICY "Anyone can submit opt-in forms" 
ON public.opt_in_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading own submissions (if they provide email match)
CREATE POLICY "Service role can read all submissions" 
ON public.opt_in_submissions 
FOR SELECT 
USING (false);

-- Create function to update timestamps if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_opt_in_submissions_updated_at
BEFORE UPDATE ON public.opt_in_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Allowed origins for CORS - restrict to actual domains
const ALLOWED_ORIGINS = [
  'https://neuralprenuer.com',
  'https://www.neuralprenuer.com',
  'https://neuralprenuer-ai-agents.lovable.app',
  'https://id-preview--6adb47e2-1722-45bf-82c3-fcb66d2669a5.lovable.app',
];

// Add development origin only in development environment
if (Deno.env.get("DENO_ENV") !== "production") {
  ALLOWED_ORIGINS.push('http://localhost:5173');
  ALLOWED_ORIGINS.push('http://localhost:3000');
}

function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = origin && ALLOWED_ORIGINS.some(allowed => origin === allowed || origin.endsWith('.lovable.app'))
    ? origin 
    : ALLOWED_ORIGINS[0];
  
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };
}

interface OptInEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get('origin');
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email }: OptInEmailRequest = await req.json();

    // Validate input
    if (!firstName || !lastName || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create Supabase client with service role to verify submission exists
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Verify the submission exists in database before sending email
    // This prevents abuse by only allowing emails to verified opt-in submissions
    const { data: submission, error: queryError } = await supabase
      .from("opt_in_submissions")
      .select("id, email, first_name, last_name, updated_at")
      .eq("email", email.toLowerCase().trim())
      .eq("first_name", firstName.trim())
      .eq("last_name", lastName.trim())
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (queryError || !submission) {
      console.error("Submission verification failed:", queryError);
      return new Response(
        JSON.stringify({ error: "Invalid submission - email not allowed" }),
        { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Rate limiting: Check if email was sent recently (within 1 hour)
    const lastUpdate = new Date(submission.updated_at);
    const timeSinceUpdate = Date.now() - lastUpdate.getTime();
    const MIN_INTERVAL = 60 * 60 * 1000; // 1 hour in milliseconds

    if (timeSinceUpdate < MIN_INTERVAL && timeSinceUpdate > 5000) {
      // More than 5 seconds old but less than 1 hour - likely a re-send attempt
      return new Response(
        JSON.stringify({ error: "Email already sent recently. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "NeuralPreneur <contact@updates.neuralprenuer.com>",
      to: [email],
      subject: "Welcome to NeuralPreneur AI Insights!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0;">Welcome to NeuralPreneur!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1f2937;">Hi ${firstName} ${lastName}! 👋</h2>
            
            <p>Thank you for subscribing to our AI insights newsletter! You're now part of an exclusive community of forward-thinking professionals.</p>
            
            <h3 style="color: #4f46e5;">Here's what you can expect:</h3>
            <ul style="padding-left: 20px;">
              <li>🤖 Weekly AI industry updates and trends</li>
              <li>📊 Exclusive case studies and success stories</li>
              <li>💡 Practical tips for implementing AI in your business</li>
              <li>🎯 Early access to new resources and tools</li>
            </ul>
            
            <p>Stay tuned for your first newsletter packed with valuable insights!</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                Best regards,<br>
                <strong>The NeuralPreneur Team</strong>
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
            <p>You received this email because you signed up at NeuralPreneur.</p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Opt-in confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-opt-in-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...getCorsHeaders(req.headers.get('origin')) },
      }
    );
  }
};

serve(handler);

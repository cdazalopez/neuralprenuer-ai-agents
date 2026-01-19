import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OptInEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email }: OptInEmailRequest = await req.json();

    const emailResponse = await resend.emails.send({
      from: "NeuralPreneur <onboarding@resend.dev>",
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, CheckCircle, Shield, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/seo-data";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  marketingConsent: boolean;
  privacyPolicyAccepted: boolean;
  termsAccepted: boolean;
};

const OptInPage = () => {
  const { register, handleSubmit, reset, watch, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: {
      marketingConsent: false,
      privacyPolicyAccepted: false,
      termsAccepted: false,
    }
  });

  const privacyAccepted = watch("privacyPolicyAccepted");
  const termsAccepted = watch("termsAccepted");

  const onSubmit = async (data: FormData) => {
    if (!data.privacyPolicyAccepted || !data.termsAccepted) {
      toast({
        title: "Required consent missing",
        description: "Please accept the Privacy Policy and Terms of Service to continue.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Use the server-side validated function instead of direct insert
      const { error } = await supabase.rpc('submit_opt_in', {
        p_first_name: data.firstName.trim(),
        p_last_name: data.lastName.trim(),
        p_email: data.email.trim().toLowerCase(),
        p_phone: data.phone?.trim() || null,
        p_marketing_consent: data.marketingConsent,
        p_privacy_policy_accepted: data.privacyPolicyAccepted,
        p_terms_accepted: data.termsAccepted,
      });

      if (error) throw error;

      // Send confirmation email
      try {
        await supabase.functions.invoke('send-opt-in-confirmation', {
          body: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
          },
        });
      } catch (emailError) {
        // Log only in development to prevent info leakage in production
        if (import.meta.env.DEV) {
          console.error('Email sending error:', emailError);
        }
        // Don't fail the submission if email fails
      }

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our community. Check your email for a confirmation.",
      });
      
      reset();
    } catch (error) {
      // Log only in development to prevent info leakage in production
      if (import.meta.env.DEV) {
        console.error('Opt-in submission error:', error);
      }
      toast({
        title: "Error submitting form",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const benefits = [
    "Exclusive AI insights and tips",
    "Early access to new services",
    "Industry updates and trends",
    "Special offers and promotions"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Join Our Community | ${siteConfig.name}`}
        description="Subscribe to receive exclusive AI insights, tips, and updates from Neuralprenuer AI. Stay ahead with the latest in AI automation."
        canonical={`${siteConfig.url}/opt-in`}
        keywords="AI newsletter, AI updates, subscribe, AI insights, automation tips"
      />
      
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <UserPlus className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join Our Community</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Stay Ahead with <span className="text-gradient-neural">AI Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Subscribe to receive exclusive updates, tips, and insights on how AI can transform your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">What You'll Get</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Your Privacy Matters</h3>
                      <p className="text-sm text-muted-foreground">
                        We respect your privacy and will never share your information with third parties. 
                        You can unsubscribe at any time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Opt-in Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  Subscribe Now
                </CardTitle>
                <CardDescription>
                  Fill out the form below to join our community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="mt-2" 
                        {...register("firstName", { required: "First name is required" })}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="mt-2" 
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="mt-2" 
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      className="mt-2" 
                      {...register("phone")}
                    />
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="space-y-4 border-t border-border pt-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="marketingConsent"
                        checked={watch("marketingConsent")}
                        onCheckedChange={(checked) => setValue("marketingConsent", checked as boolean)}
                      />
                      <Label htmlFor="marketingConsent" className="text-sm leading-relaxed cursor-pointer">
                        I agree to receive marketing communications, including newsletters, promotional offers, and AI insights from {siteConfig.name}. (Optional)
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="privacyPolicyAccepted"
                        checked={privacyAccepted}
                        onCheckedChange={(checked) => setValue("privacyPolicyAccepted", checked as boolean)}
                      />
                      <Label htmlFor="privacyPolicyAccepted" className="text-sm leading-relaxed cursor-pointer">
                        I have read and agree to the{" "}
                        <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">
                          Privacy Policy
                        </Link>
                        . *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="termsAccepted"
                        checked={termsAccepted}
                        onCheckedChange={(checked) => setValue("termsAccepted", checked as boolean)}
                      />
                      <Label htmlFor="termsAccepted" className="text-sm leading-relaxed cursor-pointer">
                        I have read and agree to the{" "}
                        <Link to="/terms-of-service" className="text-primary hover:underline" target="_blank">
                          Terms of Service
                        </Link>
                        . *
                      </Label>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    * Required fields. You can unsubscribe at any time by clicking the unsubscribe link in our emails.
                  </p>
                  
                  <Button 
                    type="submit" 
                    variant="neural" 
                    className="w-full" 
                    disabled={isSubmitting || !privacyAccepted || !termsAccepted}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OptInPage;
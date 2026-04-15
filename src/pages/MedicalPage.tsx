import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import SEO from "@/components/SEO";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ShieldCheck, CalendarCheck, BellRing } from "lucide-react";
import neuralHero from "@/assets/neural-hero.jpg";
import logo from "@/assets/neuralpreneur-logo.png";
import { medicalPricing } from "@/lib/pricing-data";

const MedicalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI for Medical Practices | Neuralpreneur AI"
        description="HIPAA-conscious AI receptionists for private medical practices. Answer every call, schedule appointments, handle refills, and cut no-shows by 30%."
        canonical="https://neuralpreneur-ai-agents.lovable.app/medical"
        keywords="medical AI, HIPAA AI receptionist, patient scheduling AI, medical practice automation"
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${neuralHero})` }}></div>
          <div className="absolute inset-0 bg-gradient-neural-muted animate-pulse"></div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Neuralpreneur AI" className="w-72 md:w-96 h-auto" />
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Your Front Desk Is Drowning.{" "}
              <span className="bg-gradient-neural bg-clip-text text-transparent">
                Your Patients Are Hanging Up.
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We build HIPAA-conscious AI receptionists for private medical practices that answer every call,
              schedule appointments, handle refill and referral requests, and cut no-shows by 30% — so your
              staff can actually take care of the patients in front of them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/booking">
                <Button variant="hero" className="group">
                  <Calendar className="w-5 h-5" />
                  Get My Free AI Opportunity Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                BAA-backed, HIPAA-conscious stack
              </div>
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-accent" />
                Integrates with your EHR scheduling
              </div>
              <div className="flex items-center gap-2">
                <BellRing className="w-4 h-4 text-primary" />
                Cuts no-shows with smart reminders
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <Pricing tiers={medicalPricing.tiers} bundle={medicalPricing.bundle} />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MedicalPage;

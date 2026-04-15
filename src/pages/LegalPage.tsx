import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import SEO from "@/components/SEO";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap, Languages, Plug } from "lucide-react";
import neuralHero from "@/assets/neural-hero.jpg";
import logo from "@/assets/neuralpreneur-logo.png";
import { legalPricing } from "@/lib/pricing-data";

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI for Law Firms | Neuralpreneur AI"
        description="AI intake and lead-response systems for Texas law firms. Respond to every lead in under 60 seconds, run structured intake, and book signed cases."
        canonical="https://neuralpreneur-ai-agents.lovable.app/legal"
        keywords="legal AI, law firm AI, AI intake, legal receptionist, law firm automation"
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
              The Lead You Paid $450 For{" "}
              <span className="bg-gradient-neural bg-clip-text text-transparent">
                Is Calling Your Competitor Right Now.
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We build AI intake and lead-response systems for Texas law firms that respond to every lead
              in under 60 seconds, run structured intake, and book signed cases onto the calendar — so the
              leads you paid for actually become clients.
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
                <Zap className="w-4 h-4 text-primary" />
                Responds in under 60 seconds, day or night
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-accent" />
                Handles intake in English and Spanish
              </div>
              <div className="flex items-center gap-2">
                <Plug className="w-4 h-4 text-primary" />
                Integrates with Clio, MyCase, Filevine, Lawmatics
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <Pricing tiers={legalPricing.tiers} bundle={legalPricing.bundle} />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default LegalPage;

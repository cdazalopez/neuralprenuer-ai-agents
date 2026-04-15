import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig, organizationSchema } from "@/lib/seo-data";
import { homeServicesPricing } from "@/lib/pricing-data";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Neuralpreneur AI — AI Agents for Home Service Companies"
        description="We build AI receptionists and lead-response agents for HVAC, plumbing, roofing, and electrical companies in Texas. Live in 14 days. Flat fee."
        canonical={siteConfig.url}
        keywords="AI receptionist, home service AI, HVAC AI, plumbing AI, roofing AI, lead response AI"
        structuredData={organizationSchema}
      />
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="pricing">
          <Pricing tiers={homeServicesPricing.tiers} bundle={homeServicesPricing.bundle} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;

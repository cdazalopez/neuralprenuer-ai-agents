import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig, organizationSchema } from "@/lib/seo-data";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${siteConfig.name} - AI Consulting for Small Businesses`}
        description={siteConfig.description}
        canonical={siteConfig.url}
        keywords="AI consulting, AI agent development, small business AI, business automation, AI strategy"
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

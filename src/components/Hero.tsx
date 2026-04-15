import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, MessageSquare, FileCheck } from "lucide-react";
import neuralHero from "@/assets/neural-hero.jpg";
import logo from "@/assets/neuralpreneur-logo.png";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${neuralHero})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-neural-muted animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Neuralpreneur AI"
            className="w-72 md:w-96 h-auto"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Texas Home Service Pros:{" "}
          <span className="bg-gradient-neural bg-clip-text text-transparent">
            Stop Losing $40,000 a Year
          </span>{" "}
          to Missed Calls.
        </h1>

        <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          We build AI receptionists and lead-response agents for HVAC, plumbing, roofing, and electrical
          companies — so every call gets answered, every lead gets followed up within 60 seconds, and
          your techs stay booked solid. Live in 14 days. Flat fee.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/booking">
            <Button variant="hero" className="group">
              <Calendar className="w-5 h-5" />
              Get My Free AI Opportunity Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button variant="ghost" size="lg" onClick={scrollToServices}>
            See How It Works
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Answers 100% of after-hours calls
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-accent" />
            Books jobs into ServiceTitan, Jobber &amp; Housecall Pro
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-primary" />
            Follows up on every quote until it closes
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-accent rounded-full animate-bounce opacity-40" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-primary rounded-full animate-bounce opacity-50" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import neuralHero from "@/assets/neural-hero.jpg";
import logo from "@/assets/neuralprenuer-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Neural network background image */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${neuralHero})` }}
      ></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-neural-muted animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo Image */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Neuralprenuer AI - Intelligent Solutions. Real Results." 
            className="w-72 md:w-96 h-auto"
          />
        </div>
        
        <p className="text-2xl md:text-3xl font-light italic mb-8 text-muted-foreground">
          Intelligent Solutions. Real Results.
        </p>
        
        <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Empowering small businesses with custom AI agents and intelligent automation 
          that drive measurable growth and efficiency.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/booking">
            <Button variant="hero" className="group">
              <Calendar className="w-5 h-5" />
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="ghost" size="lg">
              View Our Services
            </Button>
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            AI-Powered Solutions
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            Small Business Focused
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Custom Agent Design
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-accent rounded-full animate-bounce opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-primary rounded-full animate-bounce opacity-50" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Zap } from "lucide-react";
import neuralHero from "@/assets/neural-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Neural network background image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${neuralHero})` }}
      ></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-neural-muted animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Brain className="w-8 h-8 text-primary animate-pulse" />
          <Zap className="w-6 h-6 text-accent" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent leading-tight">
          Neuralprenuer
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Empowering small businesses with intelligent AI solutions and custom agents. 
          Transform your operations with cutting-edge artificial intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" className="group">
            Start Your AI Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            View Our Services
          </Button>
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
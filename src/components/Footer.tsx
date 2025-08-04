import { Brain, Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-neural rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-bold bg-gradient-neural bg-clip-text text-transparent">
                Neuralprenuer
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering small businesses with intelligent AI solutions and custom agents. 
              Transform your operations with cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">AI Agent Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Strategy Consulting</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Process Automation</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Predictive Analytics</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Team Training</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@neuralprenuer.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>Mon - Fri: 9AM - 6PM EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Neuralprenuer. All rights reserved. | Transforming businesses with AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
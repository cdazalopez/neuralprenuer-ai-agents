import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/neuralprenuer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Neuralprenuer AI Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold">
              <span className="text-primary">Neuralprenuer</span><span className="text-accent">AI</span>
            </span>
            </div>
            <p className="text-lg italic text-primary mb-4">
              Intelligent Solutions. Real Results.
            </p>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering small businesses with custom AI agents and intelligent automation 
              that drive measurable growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li 
                className="hover:text-primary transition-colors cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                AI Agent Development
              </li>
              <li 
                className="hover:text-primary transition-colors cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Strategy Consulting
              </li>
              <li 
                className="hover:text-primary transition-colors cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Process Automation
              </li>
              <li 
                className="hover:text-primary transition-colors cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Predictive Analytics
              </li>
              <li 
                className="hover:text-primary transition-colors cursor-pointer"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Team Training
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@neuralprenuer.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 832.560.3116</span>
              </li>
              <li>Mon - Fri: 9AM - 6PM EST</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 NeuralprenuerAI. All rights reserved. | Intelligent Solutions. Real Results.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
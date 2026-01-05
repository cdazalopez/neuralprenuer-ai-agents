import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/neuralprenuer-logo.png";
import { siteConfig } from "@/lib/seo-data";

const Footer = () => {
  const services = [
    { label: "AI Agent Development", href: "/services/ai-agent-development" },
    { label: "Strategy Consulting", href: "/services/ai-strategy-consulting" },
    { label: "Process Automation", href: "/services/process-automation" },
    { label: "Predictive Analytics", href: "/services/predictive-analytics" },
    { label: "Team Training", href: "/services/team-training" },
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Neuralprenuer AI" className="h-32 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering small businesses with custom AI agents and intelligent automation 
              that drive measurable growth and efficiency.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href}
                    className="hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NeuralprenuerAI. All rights reserved.</p>
          <p className="mt-2 md:mt-0 italic">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

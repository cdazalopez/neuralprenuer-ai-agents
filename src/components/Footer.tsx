import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
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
                href="https://x.com/neuralprenuer" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/neuralprenuer.ai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 cursor-pointer group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors pointer-events-none" />
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
        
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
            <p>&copy; {new Date().getFullYear()} NeuralprenuerAI. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/opt-in" className="hover:text-primary transition-colors">
                Subscribe
              </Link>
            </div>
            <p className="italic">{siteConfig.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

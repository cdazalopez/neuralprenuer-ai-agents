import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Bot, Lightbulb, Settings, TrendingUp, Users, Zap } from "lucide-react";
import logo from "@/assets/neuralprenuer-logo.png";
import { servicesData } from "@/lib/seo-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
  Zap
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Technologies", href: "/technologies" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Neuralprenuer AI" className="h-14 w-auto object-contain" />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "text-primary font-medium" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 transition-colors ${
                  isActive("/services") 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                    <div className="p-2">
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 rounded-md transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        All Services
                      </Link>
                    </div>
                    <div className="border-t border-border">
                      {servicesData.map((service) => {
                        const IconComponent = iconMap[service.icon];
                        return (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="w-8 h-8 bg-gradient-neural rounded-md flex items-center justify-center flex-shrink-0">
                              {IconComponent && <IconComponent className="w-4 h-4 text-background" />}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{service.title}</div>
                              <div className="text-xs text-muted-foreground line-clamp-1">{service.shortDescription}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link 
                key={link.href}
                to={link.href}
                className={`transition-colors ${
                  isActive(link.href) 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="neural" size="sm">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border/50 mt-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/"
                onClick={() => setIsOpen(false)}
                className={`py-2 transition-colors ${
                  location.pathname === "/" 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full flex items-center justify-between py-2 transition-colors ${
                    isActive("/services") 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {servicesOpen && (
                  <div className="pl-4 space-y-1 mt-2">
                    <Link
                      to="/services"
                      onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      All Services
                    </Link>
                    {servicesData.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link 
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 transition-colors ${
                    isActive(link.href) 
                      ? "text-primary font-medium" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="neural" className="w-full mt-2">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

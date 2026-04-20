import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Calendar, Wrench, HeartPulse, Scale } from "lucide-react";
import logo from "@/assets/neuralpreneur-logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  const industries = [
    { label: t("nav.homeServices"), href: "/", icon: Wrench },
    { label: t("nav.medical"), href: "/medical", icon: HeartPulse },
    { label: t("nav.legal"), href: "/legal", icon: Scale },
  ];

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Neuralpreneur AI" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${location.pathname === "/" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
            >
              {t("nav.home")}
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  ["/medical", "/legal"].some((p) => location.pathname.startsWith(p))
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIndustriesOpen(!industriesOpen)}
              >
                {t("nav.industries")}
                <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-0 pt-2 w-60">
                  <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
                    {industries.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <Link
                          key={ind.href}
                          to={ind.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-colors"
                          onClick={() => setIndustriesOpen(false)}
                        >
                          <div className="w-8 h-8 bg-gradient-neural rounded-md flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-background" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{ind.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors ${isActive(link.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link to="/booking">
              <Button variant="neural" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                {t("nav.cta")}
              </Button>
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border/50 mt-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsOpen(false)} className={`py-2 transition-colors ${location.pathname === "/" ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}>
                {t("nav.home")}
              </Link>

              <div>
                <button
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="w-full flex items-center justify-between py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("nav.industries")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? "rotate-180" : ""}`} />
                </button>
                {industriesOpen && (
                  <div className="pl-4 space-y-1 mt-2">
                    {industries.map((ind) => (
                      <Link
                        key={ind.href}
                        to={ind.href}
                        onClick={() => { setIsOpen(false); setIndustriesOpen(false); }}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {ind.label}
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
                  className={`py-2 transition-colors ${isActive(link.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2">
                <LanguageSwitcher />
              </div>

              <Link to="/booking" onClick={() => setIsOpen(false)} className="w-full">
                <Button variant="neural" className="w-full mt-2 gap-2">
                  <Calendar className="w-4 h-4" />
                  {t("nav.cta")}
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

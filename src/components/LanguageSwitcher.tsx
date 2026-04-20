import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className = "" }: Props) => {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage?.startsWith("es") ? "es" : "en";

  const setLang = (lng: "en" | "es") => {
    if (lng !== current) i18n.changeLanguage(lng);
  };

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-border/60 bg-background/40 backdrop-blur-sm px-1 py-1 text-xs ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <Globe className="w-3.5 h-3.5 text-muted-foreground ml-1.5" />
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-0.5 rounded-full font-semibold tracking-wide transition-colors ${
          current === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={current === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-2 py-0.5 rounded-full font-semibold tracking-wide transition-colors ${
          current === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={current === "es"}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;

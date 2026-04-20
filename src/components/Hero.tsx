import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, MessageSquare, FileCheck, ShieldCheck, CalendarCheck, BellRing, Zap, Languages, Plug } from "lucide-react";
import neuralHero from "@/assets/neural-hero.jpg";
import logo from "@/assets/neuralpreneur-logo.png";

const Hero = () => {
  const { t } = useTranslation();

  const slides = [
    {
      label: t("hero.slides.home.label"),
      headlinePart1: t("hero.slides.home.h1"),
      headlineAccent: t("hero.slides.home.accent"),
      headlinePart2: t("hero.slides.home.h2"),
      subhead: t("hero.slides.home.sub"),
      bullets: [
        { icon: Phone, text: t("hero.slides.home.b1") },
        { icon: MessageSquare, text: t("hero.slides.home.b2") },
        { icon: FileCheck, text: t("hero.slides.home.b3") },
      ],
    },
    {
      label: t("hero.slides.medical.label"),
      headlinePart1: t("hero.slides.medical.h1"),
      headlineAccent: t("hero.slides.medical.accent"),
      headlinePart2: t("hero.slides.medical.h2"),
      subhead: t("hero.slides.medical.sub"),
      bullets: [
        { icon: ShieldCheck, text: t("hero.slides.medical.b1") },
        { icon: CalendarCheck, text: t("hero.slides.medical.b2") },
        { icon: BellRing, text: t("hero.slides.medical.b3") },
      ],
    },
    {
      label: t("hero.slides.legal.label"),
      headlinePart1: t("hero.slides.legal.h1"),
      headlineAccent: t("hero.slides.legal.accent"),
      headlinePart2: t("hero.slides.legal.h2"),
      subhead: t("hero.slides.legal.sub"),
      bullets: [
        { icon: Zap, text: t("hero.slides.legal.b1") },
        { icon: Languages, text: t("hero.slides.legal.b2") },
        { icon: Plug, text: t("hero.slides.legal.b3") },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [direction, setDirection] = useState<'up' | 'down'>('up');

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setDirection(index > current ? 'up' : 'down');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 80);
      }, 500);
    },
    [isTransitioning, current]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('up');
      goTo((current + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = slides[current];

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const exitTransform = direction === 'up' ? '-translate-y-8' : 'translate-y-8';
  const enterTransform = direction === 'up' ? 'translate-y-8' : '-translate-y-8';

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
          <img src={logo} alt="Neuralpreneur AI" className="w-72 md:w-96 h-auto" />
        </div>

        <div
          className={`transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isTransitioning
              ? `opacity-0 ${exitTransform} scale-[0.97] blur-sm`
              : `opacity-100 translate-y-0 scale-100 blur-0`
          }`}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              {slide.label}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            {slide.headlinePart1}{" "}
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              {slide.headlineAccent}
            </span>{" "}
            {slide.headlinePart2}
          </h1>

          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {slide.subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/booking">
              <Button variant="hero" className="group">
                <Calendar className="w-5 h-5" />
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="ghost" size="lg" onClick={scrollToServices}>
              {t("hero.secondary")}
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            {slide.bullets.map((bullet, i) => {
              const Icon = bullet.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${i === 1 ? "text-accent" : "text-primary"}`} />
                  {bullet.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide indicators with labels */}
        <div className="flex justify-center gap-8 mt-12">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`flex flex-col items-center gap-2.5 transition-all duration-500 group cursor-pointer ${
                i === current ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
              aria-label={`Go to ${s.label}`}
            >
              <span className={`text-[11px] font-semibold tracking-widest uppercase transition-colors duration-500 ${
                i === current ? "text-primary" : "text-muted-foreground group-hover:text-foreground/60"
              }`}>
                {s.label}
              </span>
              <div className="relative h-0.5 w-12 rounded-full bg-muted-foreground/20 overflow-hidden">
                {i === current && (
                  <div
                    className="absolute inset-y-0 left-0 bg-primary rounded-full animate-[progress_7s_linear]"
                    key={current}
                    style={{ width: '100%' }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-accent rounded-full animate-bounce opacity-40" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-20 w-3 h-3 bg-primary rounded-full animate-bounce opacity-50" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;

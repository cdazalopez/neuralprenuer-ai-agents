import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, MessageSquare, FileCheck, ShieldCheck, CalendarCheck, BellRing, Zap, Languages, Plug } from "lucide-react";
import neuralHero from "@/assets/neural-hero.jpg";
import logo from "@/assets/neuralpreneur-logo.png";

const slides = [
  {
    label: "Home Services",
    headlinePart1: "Texas Home Service Pros:",
    headlineAccent: "Stop Losing $40,000 a Year",
    headlinePart2: "to Missed Calls.",
    subhead:
      "We build AI receptionists and lead-response agents for HVAC, plumbing, roofing, and electrical companies — so every call gets answered, every lead gets followed up within 60 seconds, and your techs stay booked solid. Live in 14 days. Flat fee.",
    bullets: [
      { icon: Phone, text: "Answers 100% of after-hours calls" },
      { icon: MessageSquare, text: "Books jobs into ServiceTitan, Jobber & Housecall Pro" },
      { icon: FileCheck, text: "Follows up on every quote until it closes" },
    ],
  },
  {
    label: "Medical Practices",
    headlinePart1: "Your Front Desk Is Drowning.",
    headlineAccent: "Your Patients Are Hanging Up.",
    headlinePart2: "",
    subhead:
      "We build HIPAA-conscious AI receptionists for private medical practices that answer every call, schedule appointments, handle refill and referral requests, and cut no-shows by 30% — so your staff can actually take care of the patients in front of them.",
    bullets: [
      { icon: ShieldCheck, text: "BAA-backed, HIPAA-conscious stack" },
      { icon: CalendarCheck, text: "Integrates with your EHR scheduling" },
      { icon: BellRing, text: "Cuts no-shows with smart reminders" },
    ],
  },
  {
    label: "Law Firms",
    headlinePart1: "The Lead You Paid $450 For",
    headlineAccent: "Is Calling Your Competitor Right Now.",
    headlinePart2: "",
    subhead:
      "We build AI intake and lead-response systems for Texas law firms that respond to every lead in under 60 seconds, run structured intake, and book signed cases onto the calendar — so the leads you paid for actually become clients.",
    bullets: [
      { icon: Zap, text: "Responds in under 60 seconds, day or night" },
      { icon: Languages, text: "Handles intake in English and Spanish" },
      { icon: Plug, text: "Integrates with Clio, MyCase, Filevine, Lawmatics" },
    ],
  },
];

const Hero = () => {
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
                Get My Free AI Opportunity Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="ghost" size="lg" onClick={scrollToServices}>
              See How It Works
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

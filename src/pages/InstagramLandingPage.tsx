import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useLeadConnectorEmbed } from "@/hooks/use-leadconnector-embed";
import {
  Calendar,
  Phone,
  MessageSquare,
  CalendarCheck,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";
import logo from "@/assets/neuralpreneur-logo.png";

const scrollToBooking = () => {
  document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const InstagramLandingPage = () => {
  useLeadConnectorEmbed();

  useEffect(() => {
    document.body.style.background = "hsl(var(--background))";
  }, []);

  const benefits = [
    { icon: Sparkles, title: "Custom AI Agents", desc: "Voice, chat, and SMS agents built around your workflows." },
    { icon: Zap, title: "Process Automation", desc: "Automate repetitive tasks across your tools and team." },
    { icon: CalendarCheck, title: "Smart Scheduling & CRM", desc: "AI that books, follows up, and keeps your pipeline moving." },
    { icon: ShieldCheck, title: "Strategy & Training", desc: "AI roadmaps and team training built for real adoption." },
  ];

  const outcomes = [
    "Save 15+ hours per week on busywork",
    "Capture and convert more leads",
    "Make smarter decisions with data",
    "Scale operations without scaling headcount",
  ];

  const steps = [
    { n: "01", title: "Book a free 30-min call", desc: "Tell us about your business and biggest bottleneck." },
    { n: "02", title: "We design your AI workflow", desc: "Custom agents tailored to your industry and tools." },
    { n: "03", title: "Launch in days, not months", desc: "Watch leads, calls, and bookings run themselves." },
  ];

  return (
    <>
      <SEO
        title="Free AI Consultation | Neuralpreneur"
        description="Book a free 30-minute consultation to see how AI voice agents, SMS automation, and smart scheduling can grow your business."
        canonical="https://www.neuralpreneur.com/start"
        keywords="AI agents, voice AI, business automation, free consultation"
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-neural-muted opacity-60 animate-pulse" />
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 container mx-auto px-6 pt-16 pb-20 text-center">
            <img src={logo} alt="Neuralpreneur AI" className="w-56 md:w-72 h-auto mx-auto mb-8" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Free 30-Min Consultation
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto mb-6">
              Custom AI That{" "}
              <span className="bg-gradient-neural bg-clip-text text-transparent">
                Grows Your Business
              </span>{" "}
              On Autopilot
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              From voice agents and chatbots to workflow automation, predictive analytics,
              and team training — we design AI solutions tailored to your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" onClick={scrollToBooking} className="group">
                <Calendar className="w-5 h-5" />
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" />
                30 min · Zero pressure · Microsoft Teams
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="ml-1">Trusted by growing businesses</span>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI solutions tailored to how you work
              </h2>
              <p className="text-muted-foreground">
                We design, build, and deploy AI that fits your business — not the other way around.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-neural flex items-center justify-center mb-4 group-hover:shadow-glow-neural transition-shadow">
                    <b.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-neural-muted opacity-40" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                  Real Outcomes
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Imagine your business{" "}
                  <span className="bg-gradient-neural bg-clip-text text-transparent">
                    running itself
                  </span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  No more juggling missed calls, late replies, or chasing no-shows. Our
                  AI agents handle the busywork so you can focus on growth.
                </p>
                <Button variant="neural" onClick={scrollToBooking}>
                  <Zap className="w-5 h-5" />
                  Get My Free Strategy Call
                </Button>
              </div>
              <ul className="space-y-4">
                {outcomes.map((o, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                From overwhelmed to automated in 3 steps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="text-5xl font-bold bg-gradient-neural bg-clip-text text-transparent mb-4">
                    {s.n}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section id="book" className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-neural-muted opacity-40" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                  Book Your Spot
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Pick a time that works for you
              </h2>
              <p className="text-muted-foreground">
                30 minutes. Zero obligation. You'll leave with a clear AI roadmap for your business.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl overflow-hidden p-2 sm:p-6 shadow-glow-neural">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/booking/bRTPfumxS3ImA9tm2U33"
                  style={{ width: "100%", height: "1100px", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id="bRTPfumxS3ImA9tm2U33_ig_landing"
                  title="Book a Free Consultation"
                />
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Prefer to text or call?{" "}
              <a href="tel:+19362029970" className="text-primary hover:underline font-medium">
                +1 936.202.9970
              </a>
            </p>
          </div>
        </section>

        {/* FOOTER MINI */}
        <footer className="py-8 bg-background border-t border-border">
          <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Neuralpreneur AI LLC · All rights reserved
          </div>
        </footer>
      </main>
    </>
  );
};

export default InstagramLandingPage;

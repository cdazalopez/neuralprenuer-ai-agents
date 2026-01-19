import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Video, Clock, CheckCircle } from "lucide-react";

const BookingPage = () => {
  const calendlyUrl = "https://calendly.com/carlos-neuralprenuer/30min";

  const benefits = [
    {
      icon: Video,
      title: "Microsoft Teams Meeting",
      description: "Get a Teams link automatically sent to your email"
    },
    {
      icon: Clock,
      title: "30-Minute Demo",
      description: "Quick but comprehensive overview of our AI solutions"
    },
    {
      icon: CheckCircle,
      title: "No Commitment",
      description: "Free consultation with no strings attached"
    }
  ];

  return (
    <>
      <SEO
        title="Book a Demo | Neuralprenuer AI Agents"
        description="Schedule a free 30-minute demo call to discover how AI agents can transform your business operations. Book directly with Microsoft Teams integration."
        canonical="https://neuralprenuer-ai-agents.lovable.app/booking"
        keywords="book demo, AI consultation, schedule meeting, Microsoft Teams, AI agents demo"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Book Your Demo</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Schedule a <span className="text-gradient-neural">Free Consultation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Book a 30-minute demo to see how our AI agents can automate your workflows 
                and boost your productivity. We'll send you a Microsoft Teams link.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Calendly Embed */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a demo"
                  className="bg-white"
                />
              </div>
            </div>

            {/* Alternative CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Prefer to reach out directly?
              </p>
              <Button variant="outline" asChild>
                <a href="/contact">Contact Us Instead</a>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BookingPage;

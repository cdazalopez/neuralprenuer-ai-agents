import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Zap, FileCheck, Star, Truck, MessageSquare, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Voice Receptionist",
    description: "Answers every call 24/7 and books jobs straight into your scheduling software.",
  },
  {
    icon: Zap,
    title: "60-Second Lead Responder",
    description: "Texts every web, Google, and Angi lead in under a minute to lock them in.",
  },
  {
    icon: FileCheck,
    title: "Quote Follow-Up Bot",
    description: "Chases every open quote on day 1, 3, 7, 14, and 30 until it closes.",
  },
  {
    icon: Star,
    title: "Review Request Machine",
    description: "Automatically requests Google reviews from every happy customer.",
  },
  {
    icon: Truck,
    title: "Dispatch Assistant",
    description: "Optimizes tech routing and customer ETAs.",
  },
  {
    icon: MessageSquare,
    title: "Missed-Call Text-Back",
    description: "Instantly texts anyone whose call you miss so they never contact a competitor.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            How We Keep Your Phones Ringing &amp; Techs Booked
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Six AI-powered products built specifically for home service companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-neural transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-accent transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-background" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/booking">
                    <Button variant="outline" className="w-full group-hover:bg-primary/10">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, HeartPulse, Wrench } from "lucide-react";

const industries = [
  {
    title: "Law / Attorney's Offices",
    icon: Scale,
    solutions: [
      "Passive Time-Sensing Agent",
      "Document Review",
      "Contract Lifecycle Management",
      "Research Lag",
    ],
  },
  {
    title: "Medical",
    icon: HeartPulse,
    solutions: [
      "Denial Management",
      "AI Assisted Eligibility and Benefits",
      "Automated Patient Account Creation",
    ],
  },
  {
    title: "HVAC / Electrician / Plumber",
    icon: Wrench,
    solutions: [
      "Never miss a potential client",
      "Scheduling automation",
      "Quote follow-up",
      "After service follow-up",
    ],
  },
];

const Industries = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            Some of the Industries We Cover
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored AI solutions built for the unique challenges of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
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
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;

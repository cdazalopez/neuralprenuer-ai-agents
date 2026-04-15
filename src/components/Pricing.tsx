import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

export interface PricingTier {
  title: string;
  setup: string;
  monthly: string;
  description: string;
  features?: string[];
  highlighted?: boolean;
}

interface PricingProps {
  heading?: string;
  subheading?: string;
  tiers: PricingTier[];
  bundle: PricingTier;
}

const Pricing = ({ heading = "Simple, Flat-Fee Pricing", subheading = "No per-minute charges. No surprises. Just results.", tiers, bundle }: PricingProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-neural transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {tier.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">{tier.setup}</span>
                  <span className="text-muted-foreground ml-1">setup</span>
                </div>
                <div>
                  <span className="text-2xl font-semibold text-primary">{tier.monthly}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <CardDescription className="mt-2 text-muted-foreground">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {tier.features && (
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                <Link to="/booking">
                  <Button variant="outline" className="w-full group-hover:bg-primary/10">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bundle */}
        <Card className="border-primary/50 bg-gradient-to-br from-card to-primary/5 shadow-glow-neural max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Recommended</span>
            </div>
            <CardTitle className="text-2xl md:text-3xl">{bundle.title}</CardTitle>
            <div className="mt-4 flex items-baseline justify-center gap-4">
              <div>
                <span className="text-3xl font-bold">{bundle.setup}</span>
                <span className="text-muted-foreground ml-1">setup</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-primary">{bundle.monthly}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
            </div>
            <CardDescription className="mt-2">{bundle.description}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link to="/booking">
              <Button variant="hero" size="lg" className="group">
                Get Started
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;

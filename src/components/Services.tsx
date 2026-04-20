import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Zap, FileCheck, Star, Truck, MessageSquare, ArrowRight } from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Phone, key: "reception" },
    { icon: Zap, key: "lead" },
    { icon: FileCheck, key: "quote" },
    { icon: Star, key: "review" },
    { icon: Truck, key: "dispatch" },
    { icon: MessageSquare, key: "missed" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            {t("services.heading")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.sub")}
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
                    {t(`services.items.${service.key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {t(`services.items.${service.key}.desc`)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/booking">
                    <Button variant="outline" className="w-full group-hover:bg-primary/10">
                      {t("services.cta")}
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

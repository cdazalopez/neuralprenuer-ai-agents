import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Award, Users2, ArrowRight } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Target, label: t("about.stats.tech"), value: "15+" },
    { icon: Users2, label: t("about.stats.industries"), value: "8+" },
    { icon: Award, label: t("about.stats.partners"), value: "3+" },
    { icon: CheckCircle, label: t("about.stats.consult"), value: "100%" }
  ];

  const points = [
    { title: t("about.p1Title"), text: t("about.p1") },
    { title: t("about.p2Title"), text: t("about.p2") },
    { title: t("about.p3Title"), text: t("about.p3") },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
              {t("about.heading")}
            </h2>
            <p className="text-lg italic text-primary mb-4">
              {t("about.tagline")}
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t("about.intro")}
            </p>

            <div className="space-y-6 mb-8">
              {points.map((p, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-neural rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button variant="neural" size="lg">
                {t("about.cta")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-neural transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="text-3xl font-bold mb-2 text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Award, Users2 } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Target, label: "AI Technologies", value: "15+" },
    { icon: Users2, label: "Industries Covered", value: "8+" },
    { icon: Award, label: "Certified Partners", value: "3+" },
    { icon: CheckCircle, label: "Free Consultations", value: "100%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
              Why Choose Neuralprenuer AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not just AI consultants – we're your partners in digital transformation. 
              Our mission is to make advanced AI accessible and profitable for small businesses.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-neural rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Small Business Expertise</h3>
                  <p className="text-muted-foreground">We understand the unique challenges and constraints of small businesses, delivering solutions that fit your budget and scale.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-neural rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="text-muted-foreground">We leverage the latest AI technologies and industry best practices to deliver solutions that drive real business value.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-neural rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">End-to-End Support</h3>
                  <p className="text-muted-foreground">From strategy to implementation and ongoing support, we're with you every step of your AI journey.</p>
                </div>
              </div>
            </div>
            
            <Button variant="neural" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
          
          {/* Stats Grid */}
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
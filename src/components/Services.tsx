import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Lightbulb, Settings, TrendingUp, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Custom AI agents tailored to your business needs, from customer service bots to automated workflows.",
      features: ["24/7 Customer Support", "Automated Workflows", "Natural Language Processing"]
    },
    {
      icon: Lightbulb,
      title: "AI Strategy Consulting",
      description: "Strategic guidance to identify AI opportunities and create implementation roadmaps for your business.",
      features: ["Business Analysis", "ROI Planning", "Implementation Strategy"]
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that save time and reduce costs.",
      features: ["Workflow Optimization", "Data Processing", "Task Automation"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Harness data-driven insights to make informed decisions and predict future trends.",
      features: ["Market Analysis", "Demand Forecasting", "Performance Metrics"]
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Comprehensive AI literacy training to empower your team with the skills for the AI-driven future.",
      features: ["Hands-on Workshops", "Best Practices", "Ongoing Support"]
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Quick proof-of-concept development to test AI solutions before full implementation.",
      features: ["Fast Deployment", "MVP Development", "Iterative Testing"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neural bg-clip-text text-transparent">
            Our AI Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed specifically for small businesses ready to embrace the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-neural transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-accent transition-all duration-300">
                  <service.icon className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
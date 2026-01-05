import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Lightbulb, Settings, TrendingUp, Users, Zap } from "lucide-react";
import { servicesData, siteConfig, organizationSchema } from "@/lib/seo-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
  Zap
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`AI Services for Small Business | ${siteConfig.name}`}
        description="Comprehensive AI consulting services including agent development, process automation, predictive analytics, and team training. Transform your business with intelligent solutions."
        canonical={`${siteConfig.url}/services`}
        keywords="AI services, AI consulting, business automation, AI agent development, small business AI"
        structuredData={organizationSchema}
      />
      
      <Navigation />
      
      <main>
        <PageHeader
          subtitle="Our Services"
          title="AI Solutions for Your Business"
          description="Comprehensive AI services designed specifically for small businesses ready to embrace the future of intelligent automation."
        />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <Card 
                    key={index} 
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-neural transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-accent transition-all duration-300">
                        {IconComponent && <IconComponent className="w-6 h-6 text-background" />}
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to={`/services/${service.slug}`}>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-primary/10"
                        >
                          Learn More
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
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss which AI solutions are right for your business.
            </p>
            <Link to="/contact">
              <Button variant="neural" size="lg">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;

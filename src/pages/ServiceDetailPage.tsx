import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle, Bot, Lightbulb, Settings, TrendingUp, Users, Zap } from "lucide-react";
import { servicesData, siteConfig, getServiceSchema } from "@/lib/seo-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
  Zap
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const service = servicesData.find(s => s.slug === slug);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }
  
  const IconComponent = iconMap[service.icon];
  
  // Get related services (exclude current)
  const relatedServices = servicesData.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${service.title} | ${siteConfig.name}`}
        description={service.fullDescription}
        canonical={`${siteConfig.url}/services/${service.slug}`}
        keywords={service.keywords}
        structuredData={getServiceSchema(service)}
      />
      
      <Navigation />
      
      <main>
        <PageHeader
          subtitle="Service"
          title={service.title}
          description={service.shortDescription}
        />
        
        {/* Service Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-neural rounded-xl flex items-center justify-center">
                    {IconComponent && <IconComponent className="w-8 h-8 text-background" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Overview</h2>
                    <p className="text-muted-foreground">What we offer</p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  {service.fullDescription}
                </p>
                
                {/* Benefits */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-border/50">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Use Cases */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6">Common Use Cases</h3>
                  <div className="space-y-3">
                    {service.useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        {useCase}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Get Started</h3>
                    <p className="text-muted-foreground mb-6">
                      Ready to implement {service.title.toLowerCase()} for your business? Let's discuss your specific needs.
                    </p>
                    <Link to="/contact">
                      <Button variant="neural" className="w-full mb-4">
                        Schedule Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button variant="outline" className="w-full">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        View All Services
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService, index) => {
                const RelatedIcon = iconMap[relatedService.icon];
                return (
                  <Link key={index} to={`/services/${relatedService.slug}`}>
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-neural transition-all duration-300 hover:-translate-y-1 h-full">
                      <CardContent className="p-6">
                        <div className="w-10 h-10 bg-gradient-neural rounded-lg flex items-center justify-center mb-4">
                          {RelatedIcon && <RelatedIcon className="w-5 h-5 text-background" />}
                        </div>
                        <h3 className="font-semibold mb-2">{relatedService.title}</h3>
                        <p className="text-sm text-muted-foreground">{relatedService.shortDescription}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;

import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { technologyCategories, getAllTechnologies } from "@/lib/technologies-data";
import { siteConfig } from "@/lib/seo-data";

const TechnologiesPage = () => {
  const allTechnologies = getAllTechnologies();

  const technologiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "AI Technologies",
    "description": "Comprehensive list of AI technologies used by Neuralprenuer AI",
    "numberOfItems": allTechnologies.length,
    "itemListElement": allTechnologies.map((tech, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tech.name,
      "description": tech.description
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`AI Technologies We Use | ${siteConfig.name}`}
        description="Explore the 15+ AI technologies we leverage to transform small businesses. From conversational AI to predictive analytics, discover how each technology can benefit your business."
        canonical={`${siteConfig.url}/technologies`}
        keywords="AI technologies, machine learning, NLP, chatbots, predictive analytics, computer vision, RPA, business AI"
        structuredData={technologiesSchema}
      />
      
      <Navigation />
      
      <main>
        <PageHeader
          subtitle="Our Technology Stack"
          title="15+ AI Technologies"
          description="We leverage cutting-edge AI technologies to deliver intelligent solutions that drive real business results for small businesses."
        />

        {/* Quick Stats */}
        <section className="py-12 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {technologyCategories.map((category) => (
                <div key={category.id} className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {category.technologies.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {category.name.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technology Categories */}
        {technologyCategories.map((category, categoryIndex) => (
          <section 
            key={category.id} 
            className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/10'}`}
          >
            <div className="container mx-auto px-6">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-neural bg-clip-text text-transparent">
                  {category.name}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.technologies.map((tech) => (
                  <Card 
                    key={tech.id}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-neural transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="p-6 border-b border-border/50">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-neural rounded-xl flex items-center justify-center flex-shrink-0">
                            <tech.icon className="w-7 h-7 text-background" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                            <p className="text-muted-foreground">{tech.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-secondary/20">
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3">
                            How It Works
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {tech.howItWorks}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3">
                              Key Benefits
                            </h4>
                            <ul className="space-y-2">
                              {tech.benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary mb-3">
                              Use Cases
                            </h4>
                            <ul className="space-y-2">
                              {tech.useCases.slice(0, 3).map((useCase, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" />
                                  {useCase}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Leverage These Technologies?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss which AI technologies are right for your business and how we can implement them for maximum impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="neural" size="lg">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TechnologiesPage;

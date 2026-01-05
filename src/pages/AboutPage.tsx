import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Target, Award, Users2, Sparkles, Shield, Clock } from "lucide-react";
import { siteConfig, organizationSchema } from "@/lib/seo-data";

const AboutPage = () => {
  const stats = [
    { icon: Target, label: "AI Technologies", value: "15+" },
    { icon: Users2, label: "Industries Covered", value: "8+" },
    { icon: Award, label: "Certified Partners", value: "3+" },
    { icon: CheckCircle, label: "Free Consultations", value: "100%" }
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We stay at the forefront of AI technology to bring you cutting-edge solutions that drive real results."
    },
    {
      icon: Users2,
      title: "Small Business Focus",
      description: "We understand the unique challenges of small businesses and deliver solutions that fit your scale and budget."
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "We're not just vendors – we're your long-term partners in digital transformation and growth."
    },
    {
      icon: Clock,
      title: "Results-Driven",
      description: "Every solution we implement is measured by the tangible value it delivers to your business."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`About Us | ${siteConfig.name}`}
        description="Learn about Neuralprenuer AI - your trusted partner in AI consulting and agent design for small businesses. Discover our mission, values, and expertise."
        canonical={`${siteConfig.url}/about`}
        keywords="AI consulting company, about Neuralprenuer AI, AI experts, small business technology partner"
        structuredData={organizationSchema}
      />
      
      <Navigation />
      
      <main>
        <PageHeader
          subtitle="About Us"
          title="Your AI Partner for Growth"
          description="We're dedicated to making advanced AI accessible and profitable for small businesses."
        />
        
        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="bg-gradient-neural bg-clip-text text-transparent">Neuralprenuer AI</span>?
                </h2>
                <p className="text-lg italic text-primary mb-4">
                  {siteConfig.tagline}
                </p>
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
                
                <Link to="/contact">
                  <Button variant="neural" size="lg">
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
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
        
        {/* Our Values */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-neural rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-background" />
                    </div>
                    <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with intelligent AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="neural" size="lg">
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Explore Services
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

export default AboutPage;

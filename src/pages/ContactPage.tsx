import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { siteConfig, organizationSchema } from "@/lib/seo-data";

const ContactPage = () => {
  const contactSchema = {
    ...organizationSchema,
    "@type": "LocalBusiness",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Contact Us | ${siteConfig.name}`}
        description="Get in touch with Neuralprenuer AI for a free consultation. Let us help transform your business with custom AI solutions."
        canonical={`${siteConfig.url}/contact`}
        keywords="contact AI consulting, AI consultation, get in touch, small business AI help"
        structuredData={contactSchema}
      />
      
      <Navigation />
      
      <main>
        <PageHeader
          subtitle="Contact Us"
          title="Let's Start a Conversation"
          description="Schedule a free consultation to discuss how AI can revolutionize your operations."
        />
        
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
              {/* Contact Form */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full lg:min-h-[988px]">
                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/7HpiXRMMtLQH0GtB4pEG"
                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '5px' }}
                    id="inline-7HpiXRMMtLQH0GtB4pEG"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Free Consult"
                    data-height="988"
                    data-layout-iframe-id="inline-7HpiXRMMtLQH0GtB4pEG"
                    data-form-id="7HpiXRMMtLQH0GtB4pEG"
                    title="Free Consult"
                  />
                </CardContent>
              </Card>
              
              {/* Contact Information */}
              <div className="flex flex-col gap-6 h-full justify-between lg:min-h-[988px]">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-muted-foreground">{siteConfig.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">{siteConfig.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Social Media Links */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://x.com/neuralprenuer" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 group"
                        aria-label="X (Twitter)"
                      >
                        <svg className="w-6 h-6 text-muted-foreground group-hover:text-background transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/neuralprenuer.ai/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 group"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-background transition-colors pointer-events-none" />
                      </a>
                      <a 
                        href={`mailto:${siteConfig.email}`}
                        className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 group"
                        aria-label="Email"
                      >
                        <Mail className="w-6 h-6 text-muted-foreground group-hover:text-background transition-colors" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;

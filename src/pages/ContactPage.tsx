import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { siteConfig, organizationSchema } from "@/lib/seo-data";
import { useLeadConnectorEmbed } from "@/hooks/use-leadconnector-embed";

const ContactPage = () => {
  useLeadConnectorEmbed();

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
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full lg:min-h-[1100px]">
                <CardHeader>
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/7HpiXRMMtLQH0GtB4pEG"
                    style={{ width: '100%', height: '1100px', border: 'none', borderRadius: '5px', overflow: 'hidden' }}
                    id="inline-7HpiXRMMtLQH0GtB4pEG"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Free Consult"
                    data-height="1100"
                    data-layout-iframe-id="inline-7HpiXRMMtLQH0GtB4pEG"
                    data-form-id="7HpiXRMMtLQH0GtB4pEG"
                    title="Free Consult"
                  />
                </CardContent>
              </Card>
              
              {/* Contact Information */}
              <div className="flex flex-col h-full lg:min-h-[1100px]">
                {/* Main Info Card */}
                <Card className="border-border/50 bg-gradient-to-br from-card via-card to-secondary/30 backdrop-blur-sm flex-1">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-neural bg-clip-text text-transparent">
                        Contact Information
                      </h3>
                      <p className="text-muted-foreground">
                        Reach out through any of these channels
                      </p>
                    </div>
                    
                    {/* Contact Details */}
                    <div className="space-y-6 flex-1">
                      {/* Email */}
                      <a 
                        href={`mailto:${siteConfig.email}`}
                        className="group flex items-center gap-5 p-5 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300"
                      >
                        <div className="w-14 h-14 bg-gradient-neural rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-glow-neural transition-shadow">
                          <Mail className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {siteConfig.email}
                          </p>
                        </div>
                      </a>
                      
                      {/* Phone */}
                      <a 
                        href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                        className="group flex items-center gap-5 p-5 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300"
                      >
                        <div className="w-14 h-14 bg-gradient-neural rounded-xl flex items-center justify-center shrink-0 group-hover:shadow-glow-neural transition-shadow">
                          <Phone className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {siteConfig.phone}
                          </p>
                        </div>
                      </a>
                      
                      {/* Location */}
                      <div className="flex items-center gap-5 p-5 rounded-xl bg-secondary/50 border border-border/50">
                        <div className="w-14 h-14 bg-gradient-neural rounded-xl flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Location</p>
                          <p className="font-semibold text-foreground">{siteConfig.location}</p>
                        </div>
                      </div>
                      
                      {/* Hours */}
                      <div className="flex items-center gap-5 p-5 rounded-xl bg-secondary/50 border border-border/50">
                        <div className="w-14 h-14 bg-gradient-neural rounded-xl flex items-center justify-center shrink-0">
                          <Clock className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Business Hours</p>
                          <p className="font-semibold text-foreground">{siteConfig.hours}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="mt-8 pt-8 border-t border-border/50">
                      <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                      <div className="flex gap-4">
                        <a 
                          href="https://x.com/neuralprenuer" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-secondary/80 rounded-xl flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 group border border-border/50 hover:border-primary/50"
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
                          className="w-14 h-14 bg-secondary/80 rounded-xl flex items-center justify-center hover:bg-gradient-neural hover:shadow-glow-neural transition-all duration-300 group border border-border/50 hover:border-primary/50"
                          aria-label="Instagram"
                        >
                          <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-background transition-colors" />
                        </a>
                      </div>
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

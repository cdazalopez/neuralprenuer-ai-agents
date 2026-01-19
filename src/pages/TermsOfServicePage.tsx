import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/lib/seo-data";
import { FileText } from "lucide-react";

const TermsOfServicePage = () => {
  const lastUpdated = "January 19, 2026";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Terms of Service | ${siteConfig.name}`}
        description="Terms of Service for Neuralprenuer AI. Read our terms and conditions for using our website and services."
        canonical={`${siteConfig.url}/terms-of-service`}
        keywords="terms of service, terms and conditions, user agreement, legal terms"
      />
      
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to {siteConfig.name}. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground mb-4">
                {siteConfig.name} provides AI consulting, development, and automation services for businesses. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>AI Agent Development</li>
                <li>AI Strategy Consulting</li>
                <li>Process Automation</li>
                <li>Predictive Analytics</li>
                <li>Team Training</li>
                <li>Rapid Prototyping</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Not use our services to transmit harmful code or malware</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of {siteConfig.name} or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
              </p>
              <p className="text-muted-foreground mb-4">
                For custom work created for clients, intellectual property rights will be specified in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                We understand the importance of confidentiality in business relationships. Any confidential information shared during consultations or project work will be treated with strict confidence and will not be disclosed to third parties without your consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                For paid services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Payment terms will be outlined in individual service agreements</li>
                <li>All fees are due as specified in the applicable agreement</li>
                <li>Late payments may be subject to interest charges</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Free Consultations</h2>
              <p className="text-muted-foreground mb-4">
                We offer free initial consultations to discuss your business needs. These consultations:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Are provided for informational purposes only</li>
                <li>Do not create a binding agreement for services</li>
                <li>Are subject to our scheduling availability</li>
                <li>May be recorded for quality assurance (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Implied warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or completeness of information</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We do not guarantee that our services will be uninterrupted, error-free, or that any defects will be corrected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, {siteConfig.name.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or business information</li>
                <li>Business interruption</li>
                <li>Personal injury or property damage</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Our total liability for any claims arising from your use of our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify, defend, and hold harmless {siteConfig.name}, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in Montgomery County, Texas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                In the event of any dispute, controversy, or claim arising out of or relating to these Terms:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>The parties will first attempt to resolve the dispute through good-faith negotiation</li>
                <li>If negotiation fails, the parties may agree to mediation</li>
                <li>Any remaining disputes may be resolved through binding arbitration or litigation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
              <p className="text-muted-foreground mb-4">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">14. Entire Agreement</h2>
              <p className="text-muted-foreground mb-4">
                These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and {siteConfig.name} regarding your use of our services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 mt-4">
                <p className="font-semibold mb-2">{siteConfig.name}</p>
                <p className="text-muted-foreground">Email: {siteConfig.email}</p>
                <p className="text-muted-foreground">Phone: {siteConfig.phone}</p>
                <p className="text-muted-foreground">Location: {siteConfig.location}</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
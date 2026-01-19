import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { siteConfig } from "@/lib/seo-data";
import { Shield } from "lucide-react";

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 19, 2026";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`Privacy Policy | ${siteConfig.name}`}
        description="Privacy Policy for Neuralprenuer AI. Learn how we collect, use, and protect your personal information."
        canonical={`${siteConfig.url}/privacy-policy`}
        keywords="privacy policy, data protection, personal information, CCPA, privacy rights"
      />
      
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last Updated: {lastUpdated}</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                {siteConfig.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. By using our services, you consent to the data practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personally identifiable information that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Fill out a contact form or opt-in form</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Request a consultation or demo</li>
                <li>Communicate with us via email, phone, or other means</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This information may include your name, email address, phone number, company name, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you access our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Device information (browser type, operating system)</li>
                <li>IP address and general location data</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you information about our services, including marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To analyze website usage and trends</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-muted-foreground mb-4">
                If you are located in the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the specific information and context:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>Consent:</strong> You have given us permission to do so</li>
                <li><strong>Contract:</strong> Processing is necessary to perform a contract with you</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
                <li><strong>Legitimate Interest:</strong> Processing is in our legitimate business interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. California Privacy Rights (CCPA/CPRA)</h2>
              <p className="text-muted-foreground mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you</li>
                <li><strong>Right to Delete:</strong> You can request deletion of your personal information, subject to certain exceptions</li>
                <li><strong>Right to Correct:</strong> You can request correction of inaccurate personal information</li>
                <li><strong>Right to Opt-Out:</strong> You can opt out of the sale or sharing of your personal information</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise these rights, please contact us at {siteConfig.email}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. CAN-SPAM Act Compliance</h2>
              <p className="text-muted-foreground mb-4">
                We comply with the CAN-SPAM Act. If you subscribe to our emails, we will:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Not use false or misleading subjects or email addresses</li>
                <li>Identify the message as an advertisement in some reasonable way</li>
                <li>Include our physical mailing address</li>
                <li>Honor opt-out/unsubscribe requests within 10 business days</li>
                <li>Allow users to unsubscribe by using the link at the bottom of each email</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                We may use third-party service providers to help us operate our business and deliver services. These providers may have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
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

export default PrivacyPolicyPage;
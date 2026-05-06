import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const LegalPrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy | Neuralpreneur AI"
        description="Neuralpreneur AI Privacy Policy, including SMS data handling and opt-in disclosures for the NuroLegal client intake platform."
        canonical="https://www.neuralpreneur.com/legal/privacy"
      />
      <Navigation />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-[760px] leading-relaxed">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: April 28, 2026</p>

          <p className="mb-8">
            Neuralpreneur AI LLC ("Neuralpreneur AI", "we", "us", or "our") operates the NuroLegal client intake platform (the "Service"), used by US law firms (collectively, "Partner Firms") to receive and respond to inbound client inquiries by SMS text message. This Privacy Policy explains how we collect, use, disclose, and protect information when you interact with the Service, including via SMS.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">1. Information We Collect</h2>
          <p className="mb-6">
            When you text a Partner Firm's published phone number, we collect: your mobile phone number; the content of your messages; timestamp and carrier metadata; the name, contact information, case type, and urgency you provide during intake; and the Partner Firm whose number you contacted. When you visit this website, we collect standard server logs (IP address, browser type, pages viewed, timestamps).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">2. How We Use Information</h2>
          <p className="mb-6">
            We use the information you provide to: (a) deliver the SMS intake conversation; (b) route your inquiry to the appropriate attorney at the Partner Firm; (c) send you confirmations and follow-up messages related to your inquiry; (d) maintain logs for legal, compliance, and quality-assurance purposes; and (e) improve the Service in aggregated, de-identified form.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">3. SMS Messaging — Mandatory Disclosure</h2>
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-md p-5 my-6">
            <p>
              <strong>SMS Data Sharing.</strong> No mobile information collected through the NuroLegal SMS program — including your mobile phone number, opt-in status, and SMS conversation content — will not be shared, sold, rented, or transferred to any third party or affiliate for marketing or promotional purposes. SMS opt-in data and consent are excluded from any other data-sharing categories described elsewhere in this policy. Information sharing with subcontractors strictly necessary to deliver the SMS service (such as our SMS carrier Twilio and the Partner Firm whose number you contacted) is permitted; those subcontractors are bound by confidentiality obligations and may not use the data for their own marketing.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">4. Who Receives Your Information</h2>
          <p className="mb-6">
            Your intake information is shared with the Partner Firm whose phone number you contacted, so that an attorney at that firm can follow up. We also share information with the limited set of service providers required to operate the Service (cloud infrastructure, SMS carrier, AI inference). We do not sell your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">5. Your Choices</h2>
          <p className="mb-6">
            You may reply STOP at any time to opt out of all SMS messages from the number you texted. You may reply HELP at any time to receive help information. You may also contact the Partner Firm directly to request deletion of your intake record, subject to applicable legal-record retention obligations.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">6. Data Retention</h2>
          <p className="mb-6">
            SMS conversation logs and intake records are retained for the period required by applicable law and the Partner Firm's record-retention policy, after which they are deleted or de-identified.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">7. Security</h2>
          <p className="mb-6">
            We use industry-standard administrative, technical, and physical safeguards to protect your information, including encryption in transit, encryption at rest, access controls, and audit logging.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">8. Children</h2>
          <p className="mb-6">
            The Service is not directed to children under 13. We do not knowingly collect information from children under 13. If you believe a child has provided us with information, please contact us.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">9. Changes to this Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. The "Last updated" date above reflects the most recent revision. Material changes will be communicated on this page.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">10. Contact</h2>
          <p className="mb-6">
            Questions about this Privacy Policy? Contact Neuralpreneur AI LLC at{" "}
            <a href="mailto:privacy@neuralpreneur.com" className="text-primary hover:underline">privacy@neuralpreneur.com</a>.
          </p>

          <p className="mt-12 text-sm text-muted-foreground">
            See also: <Link to="/legal/sms-terms" className="text-primary hover:underline">SMS Terms of Service</Link> ·{" "}
            <Link to="/legal/sms-opt-in" className="text-primary hover:underline">SMS Opt-In Disclosure</Link>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPrivacyPage;

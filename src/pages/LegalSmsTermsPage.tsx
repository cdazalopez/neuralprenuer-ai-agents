import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const LegalSmsTermsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SMS Terms of Service | Neuralpreneur AI"
        description="SMS Terms of Service for the NuroLegal client intake platform operated by Neuralpreneur AI LLC."
        canonical="https://www.neuralpreneur.com/legal/sms-terms"
      />
      <Navigation />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-[760px] leading-relaxed">
          <h1 className="text-4xl font-bold mb-2">SMS Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: April 28, 2026</p>

          <p className="mb-8">
            These SMS Terms of Service ("SMS Terms") govern your use of the NuroLegal SMS messaging program, operated by Neuralpreneur AI LLC ("Neuralpreneur AI") on behalf of US law firms ("Partner Firms"). By texting a Partner Firm's published phone number, you agree to these SMS Terms.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">1. Program Description</h2>
          <p className="mb-6">
            NuroLegal provides AI-assisted client intake messaging on behalf of Partner Firms. After you text a Partner Firm's published phone number, you will receive a series of intake messages from the NuroLegal AI assistant to collect basic information about your legal inquiry, followed by a confirmation that an attorney at the Partner Firm will follow up.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">2. How to Opt In</h2>
          <p className="mb-6">
            You opt in by texting the Partner Firm's published phone number. The phone number is published on the Partner Firm's official website (Contact page and footer), Google Business Profile, and printed intake materials, as well as on the SMS opt-in disclosure page at{" "}
            <Link to="/legal/sms-opt-in" className="text-primary hover:underline">https://www.neuralpreneur.com/legal/sms-opt-in</Link>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">3. Message Frequency</h2>
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-md p-5 my-6">
            <p>Message frequency varies based on your interaction with the AI intake assistant and any follow-up from the Partner Firm. Typical intake conversations involve 5–15 messages.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">4. Message and Data Rates</h2>
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-md p-5 my-6">
            <p>Message and data rates may apply. Check with your wireless carrier for details.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">5. How to Opt Out (STOP)</h2>
          <p className="mb-6">
            You can cancel the SMS service at any time by replying STOP to any message. After replying STOP, you will receive a final confirmation message and will not receive any further messages from that number. You may resubscribe at any time by replying START. Additional opt-out keywords supported: STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, REVOKE, OPTOUT.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">6. How to Get Help (HELP)</h2>
          <p className="mb-6">
            Reply HELP to any message, contact the Partner Firm directly, or email{" "}
            <a href="mailto:support@neuralpreneur.com" className="text-primary hover:underline">support@neuralpreneur.com</a>.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">7. Carrier Disclaimer</h2>
          <p className="mb-6">
            Carriers (including AT&amp;T, T-Mobile, Verizon, and others) are not liable for delayed or undelivered messages. Service availability depends on the carrier and your device.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">8. Privacy</h2>
          <p className="mb-6">
            Use of the NuroLegal SMS service is governed by our{" "}
            <Link to="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link>. Mobile information collected through the SMS program is not shared with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">9. Eligibility</h2>
          <p className="mb-6">
            You must be at least 18 years old, or the legal age of majority in your jurisdiction, to use the NuroLegal SMS service.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">10. Not Legal Advice</h2>
          <p className="mb-6">
            Messages sent through the Service are for intake purposes only and do not constitute legal advice. No attorney-client relationship is formed by texting the Partner Firm's intake number. An attorney-client relationship is established only after a written engagement agreement is signed with the Partner Firm.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">11. Changes</h2>
          <p className="mb-6">
            We may update these SMS Terms from time to time. Material changes will be reflected on this page with an updated "Last updated" date.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">12. Contact</h2>
          <p className="mb-6">
            Neuralpreneur AI LLC, operator of NuroLegal. Email:{" "}
            <a href="mailto:support@neuralpreneur.com" className="text-primary hover:underline">support@neuralpreneur.com</a>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalSmsTermsPage;

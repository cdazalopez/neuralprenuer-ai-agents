import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const LegalSmsOptInPage = () => {
  const sampleMessages = [
    "[Firm Name] (via NuroLegal): Hi, I'm Maria, the intake assistant. To get started, can you share your name? Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out, HELP for help.",
    "[Firm Name] (via NuroLegal): Thanks. To connect you with the right attorney, can you briefly describe your legal situation?",
    "[Firm Name] (via NuroLegal): I've shared your information with an attorney. Someone will follow up shortly. Reply STOP to opt out, HELP for help.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SMS Opt-In | NuroLegal Client Intake by Neuralpreneur AI"
        description="Opt in to NuroLegal client intake SMS messages. Text the law firm's published phone number to begin."
        canonical="https://www.neuralpreneur.com/legal/sms-opt-in"
      />
      <Navigation />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-6 max-w-[760px] leading-relaxed">
          <h1 className="text-4xl font-bold mb-6">SMS Client Intake — Opt-In Disclosure</h1>

          <p className="mb-8">
            NuroLegal is an SMS client intake service operated by Neuralpreneur AI LLC for US law firms ("Partner Firms"). Prospective clients can text a Partner Firm's published phone number to start a guided intake conversation in English or Spanish.
          </p>

          <div className="bg-secondary/40 border border-border rounded-lg p-6 my-6">
            <p className="font-bold mb-3">How to opt in:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Find your law firm's published intake phone number on their website's Contact page or Google Business Profile.</li>
              <li>Text any message to that number to begin. The NuroLegal AI assistant will reply within seconds.</li>
              <li>Or, if you are already speaking with a Partner Firm, they can provide the number directly.</li>
            </ul>
            <p><strong>What you'll receive:</strong> A short series of intake questions (typically 5–15 messages) followed by a confirmation that an attorney will follow up.</p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Sample messages you may receive</h2>
          <div className="space-y-3 my-6">
            {sampleMessages.map((msg, i) => (
              <div key={i} className="bg-muted rounded-2xl px-4 py-3 font-mono text-sm">
                {msg}
              </div>
            ))}
          </div>

          <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-r-md p-5 my-8">
            <p className="font-bold mb-3">Required Disclosures</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Program:</strong> NuroLegal client intake on behalf of the law firm whose number you contacted.</li>
              <li><strong>Message frequency:</strong> Frequency varies based on your interaction. Typical intake involves 5–15 messages.</li>
              <li><strong>Cost:</strong> Message and data rates may apply.</li>
              <li><strong>Opt-out:</strong> Reply STOP at any time to cancel. You will receive one confirmation message.</li>
              <li>
                <strong>Help:</strong> Reply HELP for help, or email{" "}
                <a href="mailto:support@neuralpreneur.com" className="text-primary hover:underline">support@neuralpreneur.com</a>.
              </li>
              <li><strong>Carriers:</strong> Carriers (AT&amp;T, T-Mobile, Verizon, and others) are not liable for delayed or undelivered messages.</li>
              <li>
                <strong>Privacy:</strong> Mobile information will not be shared with third parties for marketing. See{" "}
                <Link to="/legal/privacy" className="text-primary hover:underline">Privacy Policy</Link> and{" "}
                <Link to="/legal/sms-terms" className="text-primary hover:underline">SMS Terms</Link>.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-3">Consent</h2>
          <p className="mb-6">
            By texting a Partner Firm's published intake phone number, you provide express written consent to receive SMS messages from that law firm via the NuroLegal platform regarding your legal inquiry. Consent is not a condition of purchase. You may opt out at any time by replying STOP.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3">For Law Firms</h2>
          <p className="mb-6">
            NuroLegal is provided to US law firms under a separate platform agreement. Each Partner Firm uses a dedicated phone number; messages are attributed to the law firm. To inquire about partnering, email{" "}
            <a href="mailto:hello@neuralpreneur.com" className="text-primary hover:underline">hello@neuralpreneur.com</a>.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalSmsOptInPage;

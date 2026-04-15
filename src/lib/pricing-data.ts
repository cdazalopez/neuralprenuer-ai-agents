import { PricingTier } from "@/components/Pricing";

export const homeServicesPricing: { tiers: PricingTier[]; bundle: PricingTier } = {
  tiers: [
    {
      title: "The AI Front Desk",
      setup: "$4,500",
      monthly: "$497",
      description: "24/7 voice agent that answers every call and books jobs.",
    },
    {
      title: "The 60-Second Lead Responder",
      setup: "$3,500",
      monthly: "$297",
      description: "Responds to every inbound lead in under 60 seconds.",
    },
    {
      title: "The Quote Follow-Up Bot",
      setup: "$2,500",
      monthly: "$197",
      description: "Chases every open quote automatically until it closes.",
    },
  ],
  bundle: {
    title: "Bundle: The AI Operating System",
    setup: "$9,500",
    monthly: "$897",
    description: "All three products combined — the complete AI front office for your home service company.",
  },
};

export const medicalPricing: { tiers: PricingTier[]; bundle: PricingTier } = {
  tiers: [
    {
      title: "AI Patient Access Agent",
      setup: "$6,500",
      monthly: "$697",
      description: "Answers every patient call, schedules appointments, and handles triage routing.",
    },
    {
      title: "No-Show Rescue System",
      setup: "$3,500",
      monthly: "$397",
      description: "Smart reminders and rebooking automation that cuts no-shows by 30%.",
    },
    {
      title: "Intake & Referral Automator",
      setup: "$4,500",
      monthly: "$497",
      description: "Automates new patient intake, refill requests, and referral processing.",
    },
  ],
  bundle: {
    title: "Bundle: The AI Practice OS",
    setup: "$13,500",
    monthly: "$1,297",
    description: "All three products combined — the complete AI front office for your medical practice.",
  },
};

export const legalPricing: { tiers: PricingTier[]; bundle: PricingTier } = {
  tiers: [
    {
      title: "AI Intake & Lead Response Agent",
      setup: "$5,500",
      monthly: "$597",
      description: "Responds to every lead in under 60 seconds, runs structured intake, and books signed cases.",
    },
    {
      title: "After-Hours Legal Receptionist",
      setup: "$4,500",
      monthly: "$497",
      description: "24/7 AI receptionist that never lets a potential client slip away.",
    },
    {
      title: "Case Status & Client Update Bot",
      setup: "$3,500",
      monthly: "$297",
      description: "Keeps clients informed with automated case status updates.",
    },
  ],
  bundle: {
    title: "Bundle: The AI Firm OS",
    setup: "$11,500",
    monthly: "$1,097",
    description: "All three products combined — the complete AI front office for your law firm.",
  },
};

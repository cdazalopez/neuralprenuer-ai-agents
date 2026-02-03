export const siteConfig = {
  name: "Neuralprenuer AI",
  tagline: "Intelligent Solutions. Real Results.",
  description: "Transform your small business with custom AI agents and intelligent automation. Expert AI consulting, automation, and strategy services.",
  url: "https://neuralprenuer.com",
  phone: "+1 936.297.4110",
  email: "contact@neuralprenuer.com",
  location: "Conroe, TX",
  hours: "Mon - Fri: 9AM - 6PM EST"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/neuralprenuer-logo.svg`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Conroe",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "sameAs": []
};

export const servicesData = [
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    shortDescription: "Custom AI agents tailored to your business needs, from customer service bots to automated workflows.",
    fullDescription: "Transform your customer interactions and internal processes with intelligent AI agents designed specifically for your business. Our custom AI agents leverage cutting-edge natural language processing and machine learning to understand context, learn from interactions, and deliver human-like responses 24/7.",
    icon: "Bot",
    features: ["24/7 Customer Support", "Automated Workflows", "Natural Language Processing"],
    benefits: [
      "Reduce customer response time by up to 80%",
      "Handle unlimited simultaneous conversations",
      "Seamless integration with existing systems",
      "Continuous learning and improvement",
      "Multi-channel deployment (web, mobile, social)"
    ],
    useCases: [
      "Customer service chatbots",
      "Lead qualification agents",
      "Appointment scheduling assistants",
      "FAQ and knowledge base automation",
      "Order status and tracking bots"
    ],
    keywords: "AI agent development, custom chatbot, customer service automation, conversational AI, NLP solutions"
  },
  {
    slug: "ai-strategy-consulting",
    title: "AI Strategy Consulting",
    shortDescription: "Strategic guidance to identify AI opportunities and create implementation roadmaps for your business.",
    fullDescription: "Navigate the complex AI landscape with confidence. Our strategic consulting services help you identify the highest-impact AI opportunities, develop comprehensive implementation roadmaps, and ensure your AI investments deliver measurable ROI.",
    icon: "Lightbulb",
    features: ["Business Analysis", "ROI Planning", "Implementation Strategy"],
    benefits: [
      "Identify quick-win AI opportunities",
      "Develop phased implementation plans",
      "Minimize risk with proven methodologies",
      "Align AI initiatives with business goals",
      "Build internal AI capabilities"
    ],
    useCases: [
      "AI readiness assessments",
      "Technology stack recommendations",
      "Vendor evaluation and selection",
      "Change management planning",
      "AI governance frameworks"
    ],
    keywords: "AI strategy consulting, AI roadmap, digital transformation, AI implementation, business intelligence"
  },
  {
    slug: "process-automation",
    title: "Process Automation",
    shortDescription: "Streamline operations with intelligent automation solutions that save time and reduce costs.",
    fullDescription: "Eliminate repetitive tasks and optimize your workflows with intelligent process automation. We combine RPA, AI, and workflow orchestration to create seamless automated processes that increase efficiency, reduce errors, and free your team to focus on high-value work.",
    icon: "Settings",
    features: ["Workflow Optimization", "Data Processing", "Task Automation"],
    benefits: [
      "Reduce manual processing time by 70%+",
      "Eliminate human error in routine tasks",
      "Scale operations without adding headcount",
      "Improve compliance and audit trails",
      "24/7 automated processing"
    ],
    useCases: [
      "Invoice processing automation",
      "Data entry and validation",
      "Report generation",
      "Email routing and response",
      "Document management workflows"
    ],
    keywords: "process automation, RPA, workflow automation, business process optimization, intelligent automation"
  },
  {
    slug: "predictive-analytics",
    title: "Predictive Analytics",
    shortDescription: "Harness data-driven insights to make informed decisions and predict future trends.",
    fullDescription: "Turn your data into a competitive advantage with predictive analytics. Our AI-powered analytics solutions uncover hidden patterns, forecast trends, and provide actionable insights that drive smarter business decisions and improved outcomes.",
    icon: "TrendingUp",
    features: ["Market Analysis", "Demand Forecasting", "Performance Metrics"],
    benefits: [
      "Anticipate customer behavior",
      "Optimize inventory and resources",
      "Identify revenue opportunities",
      "Reduce operational costs",
      "Make data-driven decisions"
    ],
    useCases: [
      "Sales forecasting",
      "Customer churn prediction",
      "Inventory optimization",
      "Pricing optimization",
      "Risk assessment"
    ],
    keywords: "predictive analytics, AI analytics, business intelligence, data insights, forecasting"
  },
  {
    slug: "team-training",
    title: "Team Training",
    shortDescription: "Comprehensive AI literacy training to empower your team with the skills for the AI-driven future.",
    fullDescription: "Prepare your workforce for the AI revolution with comprehensive training programs. From AI fundamentals to hands-on tool usage, we equip your team with the knowledge and skills to leverage AI effectively, drive adoption, and maintain competitive advantage.",
    icon: "Users",
    features: ["Hands-on Workshops", "Best Practices", "Ongoing Support"],
    benefits: [
      "Build internal AI capabilities",
      "Accelerate tool adoption",
      "Reduce resistance to change",
      "Create AI champions in your organization",
      "Stay current with AI developments"
    ],
    useCases: [
      "AI fundamentals workshops",
      "Tool-specific training",
      "Prompt engineering courses",
      "AI ethics and governance",
      "Executive AI briefings"
    ],
    keywords: "AI training, workforce development, AI literacy, corporate training, upskilling"
  },
  {
    slug: "rapid-prototyping",
    title: "Rapid Prototyping",
    shortDescription: "Quick proof-of-concept development to test AI solutions before full implementation.",
    fullDescription: "Validate AI concepts quickly and cost-effectively with our rapid prototyping services. We build functional prototypes in weeks, not months, allowing you to test ideas, gather feedback, and make informed decisions before committing to full-scale development.",
    icon: "Zap",
    features: ["Fast Deployment", "MVP Development", "Iterative Testing"],
    benefits: [
      "Validate ideas before major investment",
      "Accelerate time-to-market",
      "Reduce development risk",
      "Gather real user feedback early",
      "Iterate based on data, not assumptions"
    ],
    useCases: [
      "AI proof-of-concept development",
      "MVP for AI products",
      "Feasibility testing",
      "User experience validation",
      "Technology evaluation"
    ],
    keywords: "rapid prototyping, MVP development, proof of concept, AI development, agile development"
  }
];

export const getServiceSchema = (service: typeof servicesData[0]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.title,
  "description": service.fullDescription,
  "provider": {
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url
  },
  "serviceType": service.title,
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
});

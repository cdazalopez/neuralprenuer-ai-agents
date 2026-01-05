import { 
  MessageSquare, 
  Brain, 
  Mic, 
  Languages, 
  Workflow, 
  Bot, 
  FileSearch, 
  Zap,
  BarChart3,
  Eye,
  TrendingUp,
  Shield,
  Palette,
  FileText,
  Video,
  Stethoscope,
  ShoppingCart,
  Building2,
  LucideIcon
} from "lucide-react";

export interface Technology {
  id: string;
  name: string;
  icon: LucideIcon;
  category: string;
  description: string;
  howItWorks: string;
  benefits: string[];
  useCases: string[];
  keywords: string;
}

export interface TechnologyCategory {
  id: string;
  name: string;
  description: string;
  technologies: Technology[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "language-conversation",
    name: "Language & Conversation AI",
    description: "Technologies that understand, generate, and interact using natural human language.",
    technologies: [
      {
        id: "chatbots",
        name: "Conversational AI & Chatbots",
        icon: MessageSquare,
        category: "Language & Conversation AI",
        description: "Intelligent virtual assistants that engage in human-like conversations to support customers, answer questions, and complete tasks 24/7.",
        howItWorks: "These systems use natural language understanding (NLU) to interpret user intent, maintain conversation context, and generate appropriate responses using large language models.",
        benefits: [
          "24/7 customer support availability",
          "Instant response times",
          "Handle unlimited simultaneous conversations",
          "Consistent brand voice and messaging",
          "Seamless escalation to human agents"
        ],
        useCases: [
          "Customer service automation",
          "Lead qualification and capture",
          "Appointment scheduling",
          "FAQ handling",
          "Order status inquiries"
        ],
        keywords: "chatbot, conversational AI, virtual assistant, customer service bot"
      },
      {
        id: "nlp",
        name: "Natural Language Processing",
        icon: Brain,
        category: "Language & Conversation AI",
        description: "Technology that enables computers to understand, interpret, and generate human language in meaningful ways.",
        howItWorks: "NLP combines computational linguistics with machine learning to analyze text structure, extract meaning, identify sentiment, and generate contextually appropriate responses.",
        benefits: [
          "Understand customer feedback at scale",
          "Automate document processing",
          "Extract insights from unstructured text",
          "Enable voice-to-text capabilities",
          "Power intelligent search"
        ],
        useCases: [
          "Sentiment analysis of reviews",
          "Email classification and routing",
          "Contract analysis",
          "Social media monitoring",
          "Content summarization"
        ],
        keywords: "NLP, natural language processing, text analysis, sentiment analysis"
      },
      {
        id: "voice-ai",
        name: "Voice AI & Speech Recognition",
        icon: Mic,
        category: "Language & Conversation AI",
        description: "Technology that converts spoken language into text and enables voice-controlled interfaces and applications.",
        howItWorks: "Speech recognition uses acoustic and language models to convert audio signals into text, while voice synthesis creates natural-sounding speech from text.",
        benefits: [
          "Hands-free operation",
          "Accessibility for all users",
          "Faster input than typing",
          "Natural user interfaces",
          "Multi-language support"
        ],
        useCases: [
          "Voice assistants",
          "Meeting transcription",
          "Voice-controlled systems",
          "Call center automation",
          "Accessibility tools"
        ],
        keywords: "voice AI, speech recognition, speech-to-text, voice assistant"
      },
      {
        id: "translation",
        name: "AI Translation & Localization",
        icon: Languages,
        category: "Language & Conversation AI",
        description: "Neural machine translation that provides accurate, context-aware translations across languages while preserving meaning and tone.",
        howItWorks: "Modern AI translation uses transformer models trained on billions of sentence pairs to understand context and produce fluent, accurate translations.",
        benefits: [
          "Reach global markets instantly",
          "Maintain brand consistency across languages",
          "Real-time translation capabilities",
          "Cost-effective localization",
          "Continuous improvement"
        ],
        useCases: [
          "Website localization",
          "Customer support in multiple languages",
          "Document translation",
          "Real-time chat translation",
          "Content marketing expansion"
        ],
        keywords: "AI translation, machine translation, localization, multilingual"
      }
    ]
  },
  {
    id: "automation-workflow",
    name: "Automation & Workflow",
    description: "AI-powered tools that automate repetitive tasks and optimize business processes.",
    technologies: [
      {
        id: "rpa",
        name: "Robotic Process Automation",
        icon: Workflow,
        category: "Automation & Workflow",
        description: "Software robots that automate repetitive, rule-based tasks by mimicking human interactions with digital systems.",
        howItWorks: "RPA bots are programmed to follow defined workflows, interacting with applications through the user interface to complete tasks like data entry, form filling, and system updates.",
        benefits: [
          "Eliminate manual data entry errors",
          "24/7 processing capability",
          "Fast implementation",
          "No changes to existing systems",
          "Significant cost savings"
        ],
        useCases: [
          "Invoice processing",
          "Data migration",
          "Report generation",
          "Employee onboarding",
          "Order processing"
        ],
        keywords: "RPA, robotic process automation, workflow automation, business automation"
      },
      {
        id: "intelligent-agents",
        name: "Intelligent AI Agents",
        icon: Bot,
        category: "Automation & Workflow",
        description: "Autonomous AI systems that can plan, reason, and execute complex multi-step tasks with minimal human intervention.",
        howItWorks: "AI agents combine large language models with tool use capabilities, allowing them to break down complex goals, use external tools, and adapt their approach based on results.",
        benefits: [
          "Handle complex, multi-step tasks",
          "Adapt to changing conditions",
          "Learn from interactions",
          "Work across multiple systems",
          "Scale without limits"
        ],
        useCases: [
          "Research and analysis tasks",
          "Customer journey automation",
          "Sales outreach automation",
          "Content creation pipelines",
          "Data gathering and reporting"
        ],
        keywords: "AI agents, autonomous agents, intelligent automation, agentic AI"
      },
      {
        id: "document-processing",
        name: "Intelligent Document Processing",
        icon: FileSearch,
        category: "Automation & Workflow",
        description: "AI that automatically extracts, classifies, and processes information from documents regardless of format.",
        howItWorks: "IDP combines OCR, NLP, and machine learning to read documents, understand their structure, extract key data, and validate information accuracy.",
        benefits: [
          "Process documents 10x faster",
          "Handle any document format",
          "Reduce manual review time",
          "Improve data accuracy",
          "Enable searchable archives"
        ],
        useCases: [
          "Invoice and receipt processing",
          "Contract data extraction",
          "Insurance claims processing",
          "Healthcare records management",
          "Compliance document review"
        ],
        keywords: "document processing, IDP, OCR, document automation"
      },
      {
        id: "workflow-optimization",
        name: "AI Workflow Optimization",
        icon: Zap,
        category: "Automation & Workflow",
        description: "AI systems that analyze business processes, identify bottlenecks, and recommend or implement optimizations.",
        howItWorks: "These systems use process mining and machine learning to analyze workflow patterns, predict outcomes, and suggest improvements based on data-driven insights.",
        benefits: [
          "Identify hidden inefficiencies",
          "Optimize resource allocation",
          "Reduce process cycle times",
          "Improve throughput",
          "Data-driven decisions"
        ],
        useCases: [
          "Supply chain optimization",
          "Customer journey optimization",
          "Sales process improvement",
          "Manufacturing efficiency",
          "Service delivery optimization"
        ],
        keywords: "workflow optimization, process optimization, business process improvement"
      }
    ]
  },
  {
    id: "analytics-intelligence",
    name: "Analytics & Intelligence",
    description: "AI technologies that analyze data to provide insights, predictions, and decision support.",
    technologies: [
      {
        id: "predictive-analytics",
        name: "Predictive Analytics",
        icon: TrendingUp,
        category: "Analytics & Intelligence",
        description: "Machine learning models that analyze historical data to forecast future trends, behaviors, and outcomes.",
        howItWorks: "Predictive models use statistical algorithms and machine learning to identify patterns in historical data and apply them to predict future events with probability scores.",
        benefits: [
          "Anticipate customer needs",
          "Optimize inventory levels",
          "Reduce churn and increase retention",
          "Improve financial planning",
          "Enable proactive decision-making"
        ],
        useCases: [
          "Sales forecasting",
          "Customer churn prediction",
          "Demand forecasting",
          "Risk assessment",
          "Maintenance prediction"
        ],
        keywords: "predictive analytics, forecasting, machine learning, data science"
      },
      {
        id: "computer-vision",
        name: "Computer Vision",
        icon: Eye,
        category: "Analytics & Intelligence",
        description: "AI that enables computers to interpret and understand visual information from images and videos.",
        howItWorks: "Computer vision uses deep learning models trained on millions of images to detect objects, recognize patterns, read text, and understand visual content.",
        benefits: [
          "Automate visual inspection",
          "Enable image-based search",
          "Improve security monitoring",
          "Extract data from images",
          "Power augmented reality"
        ],
        useCases: [
          "Quality control inspection",
          "Inventory tracking",
          "Security and surveillance",
          "Receipt and document scanning",
          "Product image analysis"
        ],
        keywords: "computer vision, image recognition, visual AI, object detection"
      },
      {
        id: "business-intelligence",
        name: "AI-Powered Business Intelligence",
        icon: BarChart3,
        category: "Analytics & Intelligence",
        description: "Intelligence tools enhanced with AI to automatically discover insights, generate reports, and answer business questions.",
        howItWorks: "AI BI tools use natural language queries, automated insight discovery, and machine learning to make data analysis accessible to non-technical users.",
        benefits: [
          "Ask questions in plain English",
          "Automatic insight discovery",
          "Real-time dashboards",
          "Democratize data access",
          "Faster time to insights"
        ],
        useCases: [
          "Executive dashboards",
          "Sales performance analysis",
          "Marketing ROI tracking",
          "Operational metrics monitoring",
          "Financial reporting"
        ],
        keywords: "business intelligence, BI, data analytics, reporting, dashboards"
      },
      {
        id: "anomaly-detection",
        name: "Anomaly Detection",
        icon: Shield,
        category: "Analytics & Intelligence",
        description: "AI systems that identify unusual patterns, outliers, or anomalies in data that may indicate problems or opportunities.",
        howItWorks: "These systems learn normal behavior patterns and flag deviations, using statistical methods and machine learning to distinguish true anomalies from normal variation.",
        benefits: [
          "Early fraud detection",
          "Proactive issue identification",
          "Quality assurance automation",
          "Security threat detection",
          "Equipment failure prevention"
        ],
        useCases: [
          "Fraud prevention",
          "Network security",
          "Manufacturing quality control",
          "Financial transaction monitoring",
          "Equipment health monitoring"
        ],
        keywords: "anomaly detection, fraud detection, outlier detection, security AI"
      }
    ]
  },
  {
    id: "content-creative",
    name: "Content & Creative",
    description: "AI tools that generate, enhance, and personalize content across various media types.",
    technologies: [
      {
        id: "content-generation",
        name: "AI Content Generation",
        icon: FileText,
        category: "Content & Creative",
        description: "Large language models that create original written content including articles, emails, product descriptions, and marketing copy.",
        howItWorks: "These models are trained on vast amounts of text to understand language patterns and generate coherent, contextually relevant content based on prompts.",
        benefits: [
          "Scale content production",
          "Maintain consistent quality",
          "Overcome writer's block",
          "Personalize at scale",
          "Reduce content costs"
        ],
        useCases: [
          "Blog posts and articles",
          "Product descriptions",
          "Email marketing",
          "Social media content",
          "SEO content"
        ],
        keywords: "content generation, AI writing, copywriting AI, content automation"
      },
      {
        id: "image-generation",
        name: "AI Image Generation",
        icon: Palette,
        category: "Content & Creative",
        description: "Generative AI that creates original images from text descriptions or modifies existing images intelligently.",
        howItWorks: "Diffusion models and GANs learn visual patterns from millions of images and can generate new images based on text prompts or transform existing visuals.",
        benefits: [
          "Create custom visuals instantly",
          "Reduce design costs",
          "Unlimited creative variations",
          "Consistent brand imagery",
          "Rapid prototyping"
        ],
        useCases: [
          "Marketing visuals",
          "Product mockups",
          "Social media graphics",
          "Website imagery",
          "Advertising creatives"
        ],
        keywords: "image generation, AI art, generative AI, visual content"
      },
      {
        id: "video-ai",
        name: "AI Video Creation",
        icon: Video,
        category: "Content & Creative",
        description: "AI tools that automate video creation, editing, and enhancement from text scripts or existing footage.",
        howItWorks: "These systems combine text-to-video generation, AI avatars, automated editing, and enhancement to streamline video production workflows.",
        benefits: [
          "Create videos from text",
          "Automate video editing",
          "Generate AI presenters",
          "Scale video production",
          "Reduce production costs"
        ],
        useCases: [
          "Training videos",
          "Product demos",
          "Social media videos",
          "Personalized video messages",
          "Marketing videos"
        ],
        keywords: "video AI, video generation, AI video editing, video automation"
      }
    ]
  },
  {
    id: "industry-specific",
    name: "Industry-Specific AI",
    description: "AI solutions tailored for specific industries and specialized use cases.",
    technologies: [
      {
        id: "healthcare-ai",
        name: "Healthcare AI",
        icon: Stethoscope,
        category: "Industry-Specific AI",
        description: "AI applications designed for healthcare including patient engagement, administrative automation, and clinical decision support.",
        howItWorks: "Healthcare AI combines medical knowledge bases with machine learning to assist with patient communication, scheduling, billing, and care coordination.",
        benefits: [
          "Improve patient engagement",
          "Reduce administrative burden",
          "Enhance care coordination",
          "Streamline billing processes",
          "Enable 24/7 patient support"
        ],
        useCases: [
          "Patient appointment scheduling",
          "Symptom checking chatbots",
          "Medical billing automation",
          "Patient follow-up automation",
          "Health records management"
        ],
        keywords: "healthcare AI, medical AI, patient engagement, healthcare automation"
      },
      {
        id: "retail-ai",
        name: "Retail & E-commerce AI",
        icon: ShoppingCart,
        category: "Industry-Specific AI",
        description: "AI solutions for retail including personalization, inventory management, pricing optimization, and customer service.",
        howItWorks: "Retail AI analyzes customer behavior, purchase history, and market data to personalize experiences, optimize operations, and predict demand.",
        benefits: [
          "Personalized recommendations",
          "Dynamic pricing optimization",
          "Inventory optimization",
          "Improved customer service",
          "Increased conversion rates"
        ],
        useCases: [
          "Product recommendations",
          "Inventory forecasting",
          "Price optimization",
          "Customer service chatbots",
          "Visual search"
        ],
        keywords: "retail AI, e-commerce AI, recommendation engine, personalization"
      },
      {
        id: "professional-services",
        name: "Professional Services AI",
        icon: Building2,
        category: "Industry-Specific AI",
        description: "AI tools for professional service firms including legal, accounting, consulting, and real estate automation.",
        howItWorks: "These solutions apply AI to document review, research automation, client communication, and knowledge management specific to professional services.",
        benefits: [
          "Accelerate research",
          "Automate document review",
          "Improve client communication",
          "Enhance knowledge management",
          "Increase billable efficiency"
        ],
        useCases: [
          "Contract review and analysis",
          "Legal research automation",
          "Client intake automation",
          "Proposal generation",
          "Compliance monitoring"
        ],
        keywords: "legal AI, professional services automation, consulting AI"
      }
    ]
  }
];

export const getAllTechnologies = (): Technology[] => {
  return technologyCategories.flatMap(category => category.technologies);
};

export const getTechnologyBySlug = (slug: string): Technology | undefined => {
  return getAllTechnologies().find(tech => tech.id === slug);
};

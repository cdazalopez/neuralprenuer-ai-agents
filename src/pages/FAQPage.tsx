import { Link } from "react-router-dom";
import { useState } from "react";
import { jsPDF } from "jspdf";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, HelpCircle, Briefcase, DollarSign, Clock, Cpu, Building2, Rocket, Download } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  questions: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "General Business",
    icon: Briefcase,
    questions: [
      {
        question: "What is Neuralprenuer AI?",
        answer: "Neuralprenuer AI is an AI consulting and agent design firm specifically focused on helping small businesses harness the power of artificial intelligence. We provide practical, results-driven AI solutions that transform operations and drive sustainable growth."
      },
      {
        question: "Where is Neuralprenuer AI located?",
        answer: "We are based in Conroe, Texas, but we serve clients nationwide through virtual consultations and remote implementation."
      },
      {
        question: "Do you work with businesses outside of Texas?",
        answer: "Yes! While we're based in Conroe, TX, we work with small businesses across the United States through virtual meetings, remote implementation, and digital collaboration tools."
      },
      {
        question: "What are your business hours?",
        answer: "We are available Monday through Friday, 9:00 AM to 6:00 PM Central Time. You can book consultations through our online booking system for times that work best for you."
      }
    ]
  },
  {
    id: "services",
    title: "Our Services",
    icon: Cpu,
    questions: [
      {
        question: "What services does Neuralprenuer AI offer?",
        answer: "We offer six core AI services: AI Agent Development (custom AI assistants), AI Strategy Consulting (comprehensive roadmaps), Process Automation (streamlining operations), Predictive Analytics (data-driven insights), AI Team Training (employee empowerment), and Rapid Prototyping (quick proof-of-concept development)."
      },
      {
        question: "What is AI Agent Development?",
        answer: "AI Agent Development involves creating custom AI assistants that can handle various business tasks autonomously. These agents can manage customer inquiries, schedule appointments, process orders, and handle routine communications 24/7 without human intervention."
      },
      {
        question: "What is Process Automation?",
        answer: "Process Automation uses AI to streamline repetitive tasks and workflows in your business. This includes automating data entry, document processing, email responses, inventory management, and other time-consuming manual processes."
      },
      {
        question: "What is Predictive Analytics?",
        answer: "Predictive Analytics uses AI and machine learning to analyze your business data and forecast future trends. This helps you make data-driven decisions about inventory, staffing, marketing, and business strategy."
      }
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Investment",
    icon: DollarSign,
    questions: [
      {
        question: "How much do your services cost?",
        answer: "Our pricing is customized based on your specific needs, business size, and project scope. We offer flexible engagement models including project-based pricing, monthly retainer arrangements, and hourly consulting rates. Contact us for a free consultation to discuss your needs."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes! We offer a free initial consultation to discuss your business needs, understand your challenges, and explore how AI can help. This is a no-obligation conversation to see if we're a good fit for your project."
      },
      {
        question: "Do you offer payment plans?",
        answer: "We understand cash flow is important for small businesses. We offer flexible payment arrangements for larger projects, including milestone-based payments and monthly payment plans. Let's discuss what works best for your situation."
      }
    ]
  },
  {
    id: "process",
    title: "Process & Timeline",
    icon: Clock,
    questions: [
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary: Rapid Prototypes take 2-4 weeks, Process Automation 4-8 weeks, AI Agent Development 6-12 weeks, Comprehensive AI Strategy 4-6 weeks, and Team Training Programs 1-4 weeks. We'll provide specific timelines during your consultation."
      },
      {
        question: "What does the engagement process look like?",
        answer: "Our typical engagement follows these steps: Free Consultation, Discovery & Assessment, Proposal & Planning, Development & Implementation, Training & Handoff, and Ongoing Support. We structure our process to minimize disruption to your daily operations."
      },
      {
        question: "How involved do I need to be during the project?",
        answer: "We handle the technical heavy lifting, but your input is valuable. You'll be involved in initial discovery and goal-setting, reviewing progress at key milestones, testing and providing feedback, and final approval before launch."
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: "Yes! We offer ongoing support and maintenance packages to ensure your AI solutions continue to perform optimally. This includes monitoring, updates, troubleshooting, and optimization as your business grows."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What AI technologies do you work with?",
        answer: "We work with Large Language Models (ChatGPT, Claude, Gemini), Natural Language Processing, Machine Learning, Computer Vision, Robotic Process Automation (RPA), and Voice AI for phone systems and voice assistants."
      },
      {
        question: "Will AI replace my employees?",
        answer: "Our goal is to augment your team, not replace them. AI handles repetitive, time-consuming tasks so your employees can focus on higher-value work that requires human creativity, empathy, and judgment. Most clients find that AI makes their existing team more productive."
      },
      {
        question: "How secure is the data used in AI systems?",
        answer: "Data security is a top priority. We implement industry-standard security practices including encrypted data transmission and storage, secure API integrations, access controls and authentication, compliance with relevant regulations, and regular security audits."
      },
      {
        question: "Can AI integrate with my existing software?",
        answer: "Yes, in most cases. We specialize in integrating AI solutions with common business tools including CRM systems (Salesforce, HubSpot), e-commerce platforms (Shopify, WooCommerce), accounting software (QuickBooks, Xero), communication tools (Slack, Microsoft Teams), and custom/legacy systems."
      }
    ]
  },
  {
    id: "industry",
    title: "Industry & Use Cases",
    icon: Building2,
    questions: [
      {
        question: "What industries do you serve?",
        answer: "We serve small businesses across various industries including retail and e-commerce, professional services (law, accounting, consulting), healthcare and wellness, real estate, hospitality and restaurants, manufacturing and logistics, home services, and many more."
      },
      {
        question: "Is my business too small for AI?",
        answer: "Not at all! AI solutions are more accessible than ever for businesses of all sizes. We specialize in finding right-sized solutions that deliver value without overwhelming your resources. Even solo entrepreneurs can benefit from AI automation."
      },
      {
        question: "What results can I expect from implementing AI?",
        answer: "Results vary by project, but our clients typically see significant time savings on routine tasks, improved customer response times, reduced operational errors, better data-driven decision making, increased team productivity, and enhanced customer satisfaction."
      }
    ]
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    questions: [
      {
        question: "How do I get started with Neuralprenuer AI?",
        answer: "Getting started is easy: Book a Free Consultation through our website, tell us about your business challenges and goals, receive a custom proposal tailored to your needs, and begin your AI transformation journey."
      },
      {
        question: "What should I prepare for the initial consultation?",
        answer: "Come prepared to discuss your biggest business challenges, time-consuming or repetitive tasks in your operations, your goals for the next 6-12 months, your current technology tools and systems, and any previous experience with AI or automation."
      },
      {
        question: "What if I'm not sure AI is right for my business?",
        answer: "That's exactly what our free consultation is for! We'll help you understand if and how AI can benefit your specific situation. There's no pressure – we only recommend solutions when we're confident they'll deliver value for your business."
      }
    ]
  }
];

const FAQPage = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = () => {
    setIsGenerating(true);
    
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 20;
      const maxWidth = pageWidth - margin * 2;
      let yPosition = 20;

      // Title
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text("Neuralprenuer AI", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 10;
      
      doc.setFontSize(16);
      doc.text("Frequently Asked Questions", pageWidth / 2, yPosition, { align: "center" });
      yPosition += 15;

      // Contact info
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text("Phone: +1 936.202.9970 | Email: contact@neuralprenuer.com", pageWidth / 2, yPosition, { align: "center" });
      doc.text("Website: neuralprenuer.com", pageWidth / 2, yPosition + 5, { align: "center" });
      yPosition += 20;

      // Loop through categories
      faqCategories.forEach((category) => {
        // Check if we need a new page
        if (yPosition > 260) {
          doc.addPage();
          yPosition = 20;
        }

        // Category title
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(79, 70, 229); // Primary color
        doc.text(category.title, margin, yPosition);
        yPosition += 8;
        doc.setTextColor(0, 0, 0);

        // Questions
        category.questions.forEach((faq) => {
          if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
          }

          // Question
          doc.setFontSize(11);
          doc.setFont("helvetica", "bold");
          const questionLines = doc.splitTextToSize(`Q: ${faq.question}`, maxWidth);
          doc.text(questionLines, margin, yPosition);
          yPosition += questionLines.length * 5 + 2;

          // Answer
          doc.setFontSize(10);
          doc.setFont("helvetica", "normal");
          const answerLines = doc.splitTextToSize(`A: ${faq.answer}`, maxWidth);
          doc.text(answerLines, margin, yPosition);
          yPosition += answerLines.length * 4.5 + 8;
        });

        yPosition += 5;
      });

      // Footer on last page
      const pageCount = doc.internal.pages.length - 1;
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(128, 128, 128);
        doc.text(
          `Page ${i} of ${pageCount} | Generated ${new Date().toLocaleDateString()}`,
          pageWidth / 2,
          doc.internal.pageSize.getHeight() - 10,
          { align: "center" }
        );
      }

      doc.save("Neuralprenuer-AI-FAQ.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category =>
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Frequently Asked Questions | Neuralprenuer AI"
        description="Find answers to common questions about our AI consulting services, pricing, process, and how we help small businesses succeed with artificial intelligence."
        canonical="https://neuralprenuer.com/faq"
        structuredData={faqSchema}
      />
      <Navigation />
      
      <PageHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about our AI services and how we help small businesses succeed."
      />

      {/* Download PDF Button */}
      <div className="container mx-auto px-6 pt-8 flex justify-center">
        <Button 
          onClick={generatePDF} 
          variant="outline" 
          size="lg" 
          className="gap-2"
          disabled={isGenerating}
        >
          <Download className="w-5 h-5" />
          {isGenerating ? "Generating..." : "Download FAQ as PDF"}
        </Button>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className={categoryIndex > 0 ? "mt-12" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-neural rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-background" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.id}-${index}`}
                        className="border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm px-6 data-[state=open]:shadow-glow-neural transition-all duration-300"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-4 hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-border/50">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're here to help! Book a free consultation and let's discuss how AI can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <Button variant="neural" size="lg" className="gap-2">
                    <Calendar className="w-5 h-5" />
                    Book a Free Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;

import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import MarketsSection from "@/components/MarketsSection";
import SubmitSection from "@/components/SubmitSection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { organizationSchema, localBusinessSchema, faqSchema } from "@/lib/seo/schemas";

const homeFaqs = [
  {
    question: "What types of properties do you acquire?",
    answer: "We focus on 15-150 unit multifamily and mixed-use (residential + retail) assets in Greater Boston. We consider both stabilized and value-add opportunities across Cambridge, Somerville, and the surrounding metro area.",
  },
  {
    question: "What markets do you operate in?",
    answer: "Our portfolio is concentrated in Cambridge and Greater Boston, Massachusetts. We target neighborhoods with strong rental demand, proximity to transit, and long-term appreciation fundamentals.",
  },
  {
    question: "How do I submit a property for consideration?",
    answer: "Use our confidential property submission form on the Sell Your Property page. Patrick and Tim review every submission personally and respond within 48 business hours.",
  },
  {
    question: "What makes Barrett & Johnson different from other buyers?",
    answer: "We are direct buyers and long-term owner-operators — not transactional flippers or institutional funds. Patrick and Tim are personally involved in every acquisition, improvement, and management decision. No brokers, no committees.",
  },
];

const Index = () => {
  return (
    <>
      <SEOHead
        {...PAGE_META.home}
        schema={[organizationSchema(), localBusinessSchema(), faqSchema(homeFaqs)]}
      />
      <HeroSection />
      <ThesisSection />
      <ProcessSection />
      <PortfolioSection />
      <MarketsSection />
      <SubmitSection />
      <FAQSection faqs={homeFaqs} />
      <PartnersSection />
    </>
  );
};

export default Index;

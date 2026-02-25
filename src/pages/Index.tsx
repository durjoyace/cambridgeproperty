import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import MarketsSection from "@/components/MarketsSection";
import SubmitSection from "@/components/SubmitSection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { organizationSchema, localBusinessSchema, faqSchema } from "@/lib/seo/schemas";

const homeFaqs = [
  {
    question: "What types of properties do you acquire?",
    answer: "We focus on 15-150 unit multifamily and mixed-use (residential + retail) assets in Greater Boston. Our development history also includes hotel and hospitality projects — Patrick developed the $45M, 67-key 907 Main Hotel in Central Square. We consider both stabilized and value-add opportunities across Cambridge, Somerville, and the surrounding metro.",
  },
  {
    question: "What markets do you operate in?",
    answer: "Our portfolio is concentrated in Cambridge and Greater Boston. Patrick has 20 years of development experience across Central Square, Harvard Square, North Cambridge, and Somerville — and authored the Central Square Overlay zoning amendments adopted by the City Council in 2017. We target neighborhoods we know block by block.",
  },
  {
    question: "How do I submit a property for consideration?",
    answer: "Use our confidential property submission form on the Sell Your Property page, or contact us directly at acquisitions@barrettjohnson.com or (617) 778-3521. Patrick and Tim review every submission personally and respond within 48 business hours.",
  },
  {
    question: "What makes Barrett & Johnson different from other buyers?",
    answer: "We are direct buyers and long-term owner-operators with a 20-year track record in Cambridge — not transactional flippers or institutional funds. Patrick is a zoning attorney who has navigated Cambridge's regulatory process on over a dozen projects. Tim is a CPM who maintains sub-4-hour average maintenance response times across the portfolio. No brokers, no committees — two principals who close directly.",
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
      <TestimonialsSection />
      <FAQSection faqs={homeFaqs} />
      <PartnersSection />
    </>
  );
};

export default Index;

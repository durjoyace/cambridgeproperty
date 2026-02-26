import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import OperatorFramework from "@/components/OperatorFramework";
import CapitalAlignment from "@/components/CapitalAlignment";
import TestimonialsSection from "@/components/TestimonialsSection";
import PressProof from "@/components/PressProof";
import SubmitSection from "@/components/SubmitSection";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { organizationSchema, localBusinessSchema, faqSchema } from "@/lib/seo/schemas";

const homeFaqs = [
  {
    question: "What types of properties do you acquire?",
    answer: "We focus on multifamily, mixed-use, and urban retail assets in the $5M–$50M range across Massachusetts and select U.S. markets. Our development track record includes a $45M boutique hotel and 50+ unit residential projects. We consider both stabilized and value-add opportunities in entitlement-complex markets.",
  },
  {
    question: "How do you partner with capital?",
    answer: "We structure partnerships on a deal-by-deal basis — JV, preferred equity, or direct co-investment. Principals invest alongside every partner. No blind pool, no fund lifecycle constraints. Quarterly reporting and audited financials available on request.",
  },
  {
    question: "How do I submit a property for consideration?",
    answer: "Use our confidential submission form on the Direct Acquisition page, or contact us directly at acquisitions@barrettjohnson.com or (617) 778-3521. Patrick and Tim review every submission personally and respond within 48 business hours.",
  },
  {
    question: "What makes Barrett & Johnson different from institutional buyers?",
    answer: "We are direct principals — not a fund, not a REIT, not an intermediary. Patrick is a zoning attorney with 20 years of entitlement experience across Greater Boston. Tim is a CPM who has operated every asset in our portfolio since we founded the firm in 2010. The transactions too complex or too small for funds are the foundation of our platform. No committees, no analyst coverage — two principals who execute directly.",
  },
];

const Index = () => {
  return (
    <>
      <SEOHead
        {...PAGE_META.home}
        schema={[organizationSchema(), localBusinessSchema(), faqSchema(homeFaqs)]}
      />
      {/* 1. Conviction */}
      <HeroSection />
      {/* 2. Scale Proof + Portfolio Proof */}
      <PortfolioSection />
      {/* 3. Operator Framework (named methodology + risk) */}
      <OperatorFramework />
      {/* 4. Capital Alignment */}
      <CapitalAlignment />
      {/* 4.5. Social Proof */}
      <TestimonialsSection label="What Partners & Tenants Say" />
      {/* 5. Public Record */}
      <PressProof />
      {/* 6. Acquisition Channel */}
      <SubmitSection />
      {/* 7. FAQ */}
      <FAQSection faqs={homeFaqs} />
    </>
  );
};

export default Index;

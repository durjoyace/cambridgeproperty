import HeroSection from "@/components/HeroSection";
import ThesisSection from "@/components/ThesisSection";
import OperatorFramework from "@/components/OperatorFramework";
import PortfolioSection from "@/components/PortfolioSection";
import CapitalAlignment from "@/components/CapitalAlignment";
import SubmitSection from "@/components/SubmitSection";
import FAQSection from "@/components/FAQSection";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { organizationSchema, localBusinessSchema, faqSchema } from "@/lib/seo/schemas";

const homeFaqs = [
  {
    question: "What does Thane & Reeve actually do?",
    answer:
      "We are a Northeast real estate firm organized around three disciplines: Capital (acquisitions and syndications), Development (ground-up, entitlement-first), and Management (asset and property operations). We hold what we own and we run what we own. No layer of the business is outsourced to someone whose incentives diverge from ours.",
  },
  {
    question: "Why the name?",
    answer:
      "In Anglo-Saxon England, a thane was the landholder and a reeve was the steward who ran the estate. Historians call the reeve the first English specialist in estate management. We took both names because every real estate business is, in the end, two roles stitched together — and we refuse to separate them.",
  },
  {
    question: "How is capital structured?",
    answer:
      "Deal-by-deal LP/GP. No blind pool, no cross-collateralization. Patrick and Tim invest meaningful personal capital in every transaction. Terms are transparent and readable — structure, preferred return, GP commitment, hold period, and reporting cadence are all on paper before anyone wires.",
  },
  {
    question: "What kind of deals do you underwrite?",
    answer:
      "We are deliberately catholic about asset class and geography, and deliberately narrow about how we underwrite. Stabilized and value-add multifamily, mixed-use, specialty commercial (self-storage, last-mile industrial), selective adaptive reuse, and ground-up in submarkets where we have information advantage. We walk from deals that other firms will do.",
  },
  {
    question: "Who are the principals?",
    answer:
      "Patrick Barrett (Founder & Managing Partner) and Timothy Johnson (Partner). Between them: fifteen years of institutional operating and asset management experience, reshaped into a single firm. Based in Boston, operating across the Boston–NYC corridor.",
  },
  {
    question: "How do I bring you a property?",
    answer:
      "Use the direct acquisition form, or write to acquisitions@thaneandreeve.com. Every submission is read by a principal — not an analyst, not a broker. You hear back from us within 48 business hours either way.",
  },
];

const Index = () => {
  return (
    <>
      <SEOHead
        {...PAGE_META.home}
        schema={[organizationSchema(), localBusinessSchema(), faqSchema(homeFaqs)]}
      />
      {/* I. The wordmark, the tagline, the thesis */}
      <HeroSection />
      {/* II. Our thesis, in one sentence */}
      <ThesisSection />
      {/* III. Three disciplines, one balance sheet */}
      <OperatorFramework />
      {/* IV. Portfolio + track record */}
      <PortfolioSection />
      {/* V. Alignment — who we serve, how we structure */}
      <CapitalAlignment />
      {/* VI. Direct acquisition */}
      <SubmitSection />
      {/* VII. Questions from partners */}
      <FAQSection faqs={homeFaqs} />
    </>
  );
};

export default Index;

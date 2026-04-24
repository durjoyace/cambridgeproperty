import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/FAQSection";
import { PAGE_META } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import DivisionPage, { DivisionPageContent } from "@/components/layout/DivisionPage";

const content: DivisionPageContent = {
  division: "Management",
  subtitle: "Asset & property operations. The reeve's work.",
  tone: "ink",
  thesis:
    "The operating arm. Everything the firm owns, we run — because the reeve's work is where returns are actually made.",
  narrative: [
    "Thane & Reeve Management oversees asset strategy, property-level operations, leasing, capex, and investor reporting across the firm's portfolio. Our view is straightforward: most underperformance in real estate is operational, not strategic. A good thesis dies in bad operations.",
    "Holding the operating function in-house is how we stay accountable to our own underwriting. The team that holds the asset at year seven is the team that bought it at year one. The reporting is written to the standard Tim held his prior LPs to. The deals are the ones we would have been proud to inherit.",
    "Technology and process: AppFolio enterprise platform, institutional-grade monthly financials, real-time maintenance tracking, under-four-hour portfolio-wide response averages, and a resident experience that consistently outperforms third-party-managed comps in the same submarkets.",
  ],
  focusLabel: "Services",
  focusItems: [
    "Asset management & business plan execution",
    "Property management · 24/7 operations",
    "Leasing strategy & tenant relations",
    "Capital planning & capex execution",
    "Investor reporting & distributions",
    "AppFolio-powered systems & controls",
  ],
  head: {
    title: "Timothy Johnson",
    role: "Partner, CPM",
    email: "management@thaneandreeve.com",
  },
  sisters: [
    { division: "Capital", href: "/capital", tag: "Acquisitions · syndications" },
    { division: "Development", href: "/development", tag: "Ground-up · entitlement-first" },
  ],
};

const managementFaqs = [
  {
    question: "What technology powers the platform?",
    answer:
      "The entire portfolio runs on AppFolio's enterprise platform — online rent collection, real-time maintenance tracking, resident portals, and institutional-grade financial reporting. Every door benefits from the same systems used by the largest operators in the country.",
  },
  {
    question: "How do you handle emergency maintenance?",
    answer:
      "24/7 response through AppFolio. Residents submit urgent requests at any time; a vetted vendor network ensures rapid response. Portfolio-wide average: under four hours, across categories.",
  },
  {
    question: "What is your reporting cadence?",
    answer:
      "Monthly institutional-grade financial reports — income statements, balance sheets, rent rolls, variance analysis. Real-time owner access through AppFolio. Quarterly LP letters in our house voice; annual audited financials.",
  },
  {
    question: "Do you manage third-party assets?",
    answer:
      "Our management platform exists to run what Thane & Reeve owns. We will consider third-party engagements in rare cases where an asset sits in a submarket we already operate and the relationship is aligned with the firm's standards.",
  },
];

export default function Management() {
  return (
    <>
      <SEOHead
        {...PAGE_META.management}
        schema={[
          serviceSchema(
            "Thane & Reeve Management",
            "Institutional-grade asset and property management for the firm's Northeast portfolio. AppFolio-powered operations, transparent reporting, principal accountability.",
            "/management",
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Management", url: "/management" },
          ]),
          faqSchema(managementFaqs),
        ]}
      />
      <DivisionPage content={content} />
      <FAQSection faqs={managementFaqs} label="Operations" title="Questions from owners & partners" />
    </>
  );
}

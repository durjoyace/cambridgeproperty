import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schemas";
import DivisionPage, { DivisionPageContent } from "@/components/layout/DivisionPage";

const content: DivisionPageContent = {
  division: "Development",
  subtitle: "Ground-up. Entitlement-first. Built to hold.",
  tone: "paper",
  thesis:
    "The build arm. We develop real estate where we have a genuine information advantage — on submarket, on entitlement, or on use.",
  narrative: [
    "Thane & Reeve Development takes projects from raw land through certificate of occupancy. Our preference is off-market, entitlement-led sites where we can create value before a shovel is in the ground. We do not speculate; we build what we intend to hold. That posture shapes every decision from site selection through spec.",
    "Patrick Barrett brings twenty years of entitlement and land-use experience to this work — including the $45M ground-up development of the 907 Main hotel through Cambridge's complex review process, authorship of the Central Square Overlay zoning amendments adopted by Council in 2017, and the 17 Story Street preservation project unanimously approved by the Historical Commission. Entitlement is the moat. We underwrite to it.",
  ],
  focusLabel: "Focus areas",
  focusItems: [
    "Mixed-use infill",
    "Purpose-built rental",
    "Specialty commercial (self-storage, last-mile industrial, car wash)",
    "Selective adaptive reuse",
    "Historic preservation + new construction",
    "Hospitality (prior: 907 Main · The Lark Cambridge)",
  ],
  head: {
    title: "Patrick Barrett",
    role: "Partner",
    email: "development@thaneandreeve.com",
  },
  sisters: [
    { division: "Capital", href: "/capital", tag: "Acquisitions · syndications" },
    { division: "Management", href: "/management", tag: "Asset & property operations" },
  ],
};

export default function Development() {
  return (
    <>
      <SEOHead
        {...PAGE_META.development}
        schema={[
          serviceSchema(
            "Thane & Reeve Development",
            "Ground-up real estate development across the Northeast — entitlement-led, purpose-built, built to hold.",
            "/development",
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Development", url: "/development" },
          ]),
        ]}
      />
      <DivisionPage content={content} />
    </>
  );
}

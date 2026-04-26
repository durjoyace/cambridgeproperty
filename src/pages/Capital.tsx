import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo/schemas";
import DivisionPage, { DivisionPageContent } from "@/components/layout/DivisionPage";
import hotel907 from "@/assets/907-main.jpg";

const content: DivisionPageContent = {
  division: "Capital",
  subtitle: "Acquisitions. Syndications. The principal's side of the table.",
  tone: "ink",
  thesis:
    "The deal-making arm. We find, underwrite, structure, and syndicate real estate investments on behalf of the firm and its limited partners.",
  narrative: [
    "Thane & Reeve Capital is where transactions originate. We source through relationships, not brokers' inboxes. We underwrite as though we were the buyer of last resort. And we raise on a deal-by-deal basis from a closed list of aligned investors — family offices, high-net-worth principals, and institutional capital that values transparency over scale.",
    "Every transaction closes on its own documents. No blind pool. No cross-collateralization. No surprise capital calls. The GP invests meaningful personal capital in every deal — because if we wouldn't put our money alongside yours, we shouldn't be asking you to put yours in.",
  ],
  focusLabel: "Deal types",
  focusItems: [
    "Stabilized acquisitions",
    "Value-add recapitalizations",
    "Sale-leasebacks",
    "Structured JV equity",
    "Direct co-investments",
    "Deal-by-deal syndications",
  ],
  head: {
    title: "Patrick Barrett",
    role: "Founder & Managing Partner",
    email: "capital@thaneandreeve.com",
  },
  sisters: [
    { division: "Development", href: "/development", tag: "Ground-up · entitlement-first" },
    { division: "Management", href: "/management", tag: "Asset & property operations" },
  ],
  figure: {
    src: hotel907,
    alt: "907 Main — The Lark Cambridge, Thane & Reeve Capital flagship transaction",
    caption: "907 Main — The Lark Cambridge",
    context:
      "Central Square · 67 keys · $45M ground-up · $37.75M institutional debt · 2024",
    plate: "Plate III.",
  },
};

export default function Capital() {
  return (
    <>
      <SEOHead
        {...PAGE_META.capital}
        schema={[
          serviceSchema(
            "Thane & Reeve Capital",
            "Acquisitions, syndications, and structured equity for institutional-quality real estate in the Northeast.",
            "/capital",
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Capital", url: "/capital" },
          ]),
        ]}
      />
      <DivisionPage content={content} />
    </>
  );
}

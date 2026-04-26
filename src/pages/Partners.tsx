import { ArrowRight, CheckCircle } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PageHeader } from "@/components/brand/PageHeader";

const vendorCategories = [
  { name: "General contractors", description: "Full-scope renovation and construction for multifamily and mixed-use." },
  { name: "Architects", description: "Design and permitting across unit renovations, additions, and common areas." },
  { name: "Plumbing", description: "Emergency service, repiping, and fixture upgrades across the portfolio." },
  { name: "Electrical", description: "Panel upgrades, code compliance, and EV-charging infrastructure." },
  { name: "HVAC", description: "System installation, seasonal maintenance, and efficiency retrofits." },
  { name: "Legal", description: "Real estate transactions, landlord-tenant, and regulatory compliance." },
  { name: "Insurance", description: "Property and liability coverage tailored to multifamily portfolios." },
  { name: "Environmental", description: "Lead, asbestos, and Phase I / II assessments for acquisitions." },
];

const partnerBenefits = [
  "Consistent project volume across a held portfolio",
  "Long-term relationships — not one-off work orders",
  "Professional billing, prompt payment",
  "Direct access to ownership — no layers in between",
];

const partnerCriteria = [
  "Licensed and insured in the Commonwealth",
  "Northeast service-area availability",
  "Competitive pricing with transparent estimates",
  "Responsive communication and reliable scheduling",
];

const howItWorks = [
  { step: "i.", title: "Introduce", description: "Send company info, license details, and areas of specialization." },
  { step: "ii.", title: "Qualify", description: "We verify credentials, check references, and assess fit with the portfolio." },
  { step: "iii.", title: "Engage", description: "Approved vendors enter the preferred network and receive opportunities." },
];

export default function Partners() {
  const heroRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.partners}
        schema={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Vendor Network", url: "/partners" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-20 bg-paper" ref={heroRef}>
        <div className="container mx-auto px-6 md:px-12" data-reveal>
          <PageHeader label="Vendor Network" descriptor="Service partners" />

          <div className="max-w-4xl">
            <p className="font-serif italic text-base md:text-lg text-brass mb-6">
              The firm's vendor network
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.12] text-ink tracking-tight mb-6">
              The people we call when the building needs something done.
            </h1>
            <p className="font-sans text-lg md:text-xl leading-[1.7] text-ink/70 font-light max-w-2xl">
              Thane &amp; Reeve Management runs the firm's portfolio in-house. The
              vendor network behind it — contractors, architects, trades, and
              professional services — has been assembled over fifteen years of
              direct ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-serif italic text-base md:text-lg text-brass mb-6">
                Why work with us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 tracking-tight leading-[1.2]">
                A held portfolio. A stable call list.
              </h2>
              <p className="font-sans text-base leading-[1.8] text-ink/70 font-light mb-8 max-w-md">
                Thane &amp; Reeve is a hands-on ownership group — not a management
                company with thousands of revolving-door units. Our vendors get
                consistent, predictable work with direct access to the principals.
              </p>
              <div className="flex flex-col gap-4">
                {partnerBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-brass shrink-0 mt-1" />
                    <span className="font-sans text-sm text-ink/75 font-light">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-ink/10 border border-ink/10">
              {[
                { value: "75+", label: "Doors serviced" },
                { value: "8", label: "Vendor categories" },
                { value: "15 yrs", label: "Operating history" },
                { value: "100%", label: "In-house management" },
              ].map((s) => (
                <div key={s.label} className="bg-paper p-8 text-center">
                  <div className="font-serif text-3xl text-ink mb-2 tracking-tight">{s.value}</div>
                  <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <p className="font-serif italic text-base md:text-lg text-brass mb-6">
            What we look for
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight mb-10 leading-[1.2]">
            We hold our vendors to the standard we hold ourselves.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {partnerCriteria.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 bg-paper-warm border-l-2 border-brass p-5"
              >
                <CheckCircle size={14} className="text-brass shrink-0 mt-1" />
                <span className="font-serif italic text-ink/85 text-base">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor categories */}
      <section className="bg-paper-warm py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="mb-14">
            <p className="font-serif italic text-base md:text-lg text-brass mb-4">
              Specializations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight leading-[1.2]">
              Vendor categories.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {vendorCategories.map((c) => (
              <div key={c.name} className="bg-paper p-6 md:p-8">
                <div className="font-serif text-lg md:text-xl text-ink mb-3 tracking-tight">
                  {c.name}
                </div>
                <p className="font-sans text-sm text-ink/65 font-light leading-[1.7]">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <p className="font-serif italic text-base md:text-lg text-brass mb-6">
            How it works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink tracking-tight mb-12 leading-[1.2]">
            Three steps — intentionally simple.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="bg-paper-warm p-8 md:p-10 border border-ink/10">
                <div className="font-serif italic text-3xl text-brass mb-5">{item.step}</div>
                <h3 className="font-serif text-xl md:text-2xl text-ink mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-ink/70 font-light leading-[1.75]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-paper mb-6 tracking-tight">
            Join the network.
          </h2>
          <p className="font-serif italic text-paper/75 text-lg leading-[1.7] mb-10">
            Contractor, architect, or service provider across the Northeast? We are
            always open to quality additions.
          </p>
          <a
            href="mailto:partners@thaneandreeve.com"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-paper text-ink hover:bg-brass hover:text-paper transition-colors duration-300"
          >
            Apply to partner <ArrowRight size={13} />
          </a>
        </div>
      </section>
    </>
  );
}

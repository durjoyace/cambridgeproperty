import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Users,
  Wrench,
  BarChart3,
  Handshake,
  Shield,
  Laptop,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import FAQSection from "@/components/FAQSection";
import { PAGE_META } from "@/lib/seo/metadata";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schemas";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { COMPANY_STATS } from "@/lib/data/stats";

const managementFaqs = [
  {
    question: "What property management technology do you use?",
    answer: "Our entire portfolio runs on AppFolio's enterprise platform — online rent collection, real-time maintenance tracking, tenant portals, and institutional-grade financial reporting. Every door benefits from the same systems used by the largest operators in the country.",
  },
  {
    question: "How do you handle emergency maintenance?",
    answer: "24/7 emergency response through AppFolio. Tenants submit urgent requests at any time, and our vetted vendor network ensures rapid response. Average maintenance response time across the portfolio: under 4 hours.",
  },
  {
    question: "What is your reporting cadence?",
    answer: "Monthly institutional-grade financial reports including income statements, balance sheets, rent rolls, and variance analysis. Owners have real-time access through our AppFolio portal. Quarterly investor summaries and audited financials available on request.",
  },
];

const platformStats = [
  { value: String(COMPANY_STATS.totalDoors), label: "Doors Under Management", sub: `${COMPANY_STATS.residentialUnits} Residential · ${COMPANY_STATS.retailDoors} Retail` },
  { value: "<4hr", label: "Avg. Maintenance Response", sub: "Portfolio-wide, all categories" },
  { value: `${COMPANY_STATS.yearsInOperation}`, label: "Years Operating", sub: `Vertically integrated since ${COMPANY_STATS.foundingYear}` },
  { value: "100%", label: "Principal-Managed", sub: "No third-party delegation" },
];

const capabilities = [
  {
    icon: Users,
    title: "Tenant Relations & Retention",
    description:
      "Proactive communication, responsive service, and a tenant-first approach that drives retention and reduces turnover costs. Every interaction reflects principal-level accountability.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Capital Planning",
    description:
      "Strategic capital improvement planning paired with sub-4-hour day-to-day maintenance response. We protect asset value through disciplined preventive care and vetted vendor relationships.",
  },
  {
    icon: BarChart3,
    title: "Institutional Reporting",
    description:
      "Monthly financials, budget tracking, variance analysis, and full NOI transparency. The same reporting discipline institutional LPs expect, applied to every door we manage.",
  },
  {
    icon: Handshake,
    title: "Vendor Network",
    description:
      "A vetted network of contractors, architects, and service providers built since 2010. Competitive bidding, quality oversight, and direct principal involvement on every project.",
  },
  {
    icon: Shield,
    title: "Compliance & Risk",
    description:
      "Proactive regulatory compliance across Massachusetts landlord-tenant law, building codes, environmental requirements, and fair housing standards. Risk management, not risk avoidance.",
  },
  {
    icon: Laptop,
    title: "AppFolio Enterprise Platform",
    description:
      "Online rent collection, tenant portals, maintenance tracking, and real-time reporting. Enterprise-grade infrastructure applied to every asset in the portfolio.",
  },
];

export default function Management() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.management}
        schema={[
          serviceSchema(
            "Vertically Integrated Operations Platform",
            `Full-service property operations for ${COMPANY_STATS.totalDoors} doors across Cambridge and Greater Boston. Principal-managed, AppFolio-powered.`,
            "/management"
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Operations Platform", url: "/management" },
          ]),
          faqSchema(managementFaqs),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Operations Platform</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Vertically
              <br />
              <span className="text-gold">Integrated</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              We own what we operate and operate what we own. No third-party management,
              no delegation to property managers. Tim Johnson, CPM runs the operations
              platform that supports every asset in the portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40">
            {platformStats.map((s, i) => (
              <div key={i} className="bg-charcoal-mid p-8 md:p-10 flex flex-col">
                <div className="font-display text-3xl md:text-4xl font-semibold text-gold mb-2 tracking-tight">{s.value}</div>
                <div className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream mb-1">{s.label}</div>
                <div className="font-sans text-[10px] text-cream-muted/50 font-light">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="divider-gold" />
            <span className="section-label">Platform Capabilities</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-charcoal-mid border border-border/40 p-8 md:p-10 hover:border-gold/15 transition-all duration-500 shadow-card"
                >
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/40 transition-colors duration-300">
                    <Icon size={20} className="text-gold/60 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-cream mb-3">{service.title}</h3>
                  <p className="font-sans text-sm text-cream-muted/80 font-light leading-[1.7]">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operator Discipline Block */}
      <section className="py-20 bg-charcoal-mid">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-charcoal border border-gold/10 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-4">
                  Why This Matters
                </div>
                <p className="font-sans text-base md:text-lg text-cream leading-[1.7] font-light">
                  Third-party property managers optimize for fees. Owner-operators
                  optimize for asset value. When the principal who underwrote the
                  acquisition also manages the building, every operational decision
                  is a capital allocation decision.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Ownership", desc: "Principals on every asset" },
                  { label: "Technology", desc: "AppFolio enterprise" },
                  { label: "Response", desc: "< 4hr avg. maintenance" },
                  { label: "Reporting", desc: "Institutional-grade monthly" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="font-sans text-xs font-medium text-cream mb-1">{item.label}</div>
                    <div className="font-sans text-[10px] text-cream-muted/50 font-light">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={managementFaqs} label="Operations FAQ" />

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Have a Property to Discuss?
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            Whether you're considering a sale, a partnership, or want to understand
            how we operate — our principals are available directly.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
          >
            Direct Acquisition <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}

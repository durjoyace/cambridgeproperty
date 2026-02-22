import { Link } from "react-router-dom";
import {
  ArrowRight,
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
    question: "What property management software do you use?",
    answer: "Our entire portfolio runs on AppFolio's enterprise property management platform. This enables online rent collection, real-time maintenance tracking, tenant portals, and institutional-grade financial reporting for every property we manage.",
  },
  {
    question: "How do you handle emergency maintenance?",
    answer: "We have a 24/7 emergency maintenance response system through AppFolio. Tenants can submit urgent requests at any time, and our vetted vendor network ensures rapid response for critical issues like plumbing emergencies, heating failures, or safety concerns.",
  },
  {
    question: "What is your reporting frequency?",
    answer: "We provide institutional-grade monthly financial reports including income statements, balance sheets, rent rolls, and variance analysis. Owners have real-time access to property performance through our AppFolio owner portal.",
  },
];

const stats = [
  { value: String(COMPANY_STATS.totalDoors), label: "Total Doors", sub: "Owned & Managed" },
  { value: String(COMPANY_STATS.residentialUnits), label: "Residential Units", sub: "Across Portfolio" },
  { value: String(COMPANY_STATS.retailDoors), label: "Retail Doors", sub: "Commercial Tenants" },
  { value: COMPANY_STATS.ownerOperated, label: "AppFolio-Powered", sub: "Enterprise Systems" },
];

const services = [
  {
    icon: Users,
    title: "Tenant Relations",
    description:
      "Proactive communication, responsive maintenance requests, and a tenant-first approach that drives retention and reduces turnover costs.",
  },
  {
    icon: Wrench,
    title: "Maintenance & CapEx",
    description:
      "Strategic capital improvement planning paired with responsive day-to-day maintenance. We protect asset value through disciplined preventive care.",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description:
      "Institutional-grade monthly reporting, budget tracking, and variance analysis. Full transparency into NOI, occupancy, and operating costs.",
  },
  {
    icon: Handshake,
    title: "Vendor Management",
    description:
      "A vetted network of contractors, architects, and service providers built over 15+ years. Competitive bidding and quality oversight on every project.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description:
      "Proactive regulatory compliance across Massachusetts landlord-tenant law, building codes, environmental requirements, and fair housing standards.",
  },
  {
    icon: Laptop,
    title: "Technology (AppFolio)",
    description:
      "Enterprise-grade property management powered by AppFolio. Online rent collection, tenant portals, maintenance tracking, and real-time reporting.",
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
            "Property Management Services",
            `Full-service property management for ${COMPANY_STATS.totalDoors} doors across Cambridge and Greater Boston.`,
            "/management"
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Property Management", url: "/management" },
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
            <span className="section-label">Operations</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Property
              <br />
              <span className="text-gold">Management</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              63 residential and 12 retail doors under direct, hands-on management — powered by enterprise-grade AppFolio systems and 15+ years of ownership experience.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40">
            {stats.map((s, i) => (
              <div key={i} className="bg-charcoal-mid p-8 md:p-10 flex flex-col items-center text-center">
                <div className="font-display text-4xl md:text-5xl font-semibold text-gold mb-2 tracking-tight">{s.value}</div>
                <div className="font-sans text-xs tracking-[0.15em] uppercase text-cream mb-1">{s.label}</div>
                <div className="font-sans text-xs text-cream-muted/60 font-light">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad bg-charcoal">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="section-label">Our Services</span>
              <div className="divider-gold" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream tracking-tight">
              Full-Service Management
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
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

      {/* AppFolio Section */}
      <section className="py-24 bg-charcoal-mid">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Technology</span>
            <div className="divider-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Powered by <span className="text-gold">AppFolio</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-cream-muted font-light leading-[1.8] mb-8">
            Our entire portfolio runs on AppFolio's enterprise property management platform — enabling online rent collection, real-time maintenance tracking, tenant portals, and institutional-grade financial reporting. Every door in our portfolio benefits from the same systems used by the largest operators in the country.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {["Online Rent Collection", "Tenant Portals", "Maintenance Tracking", "Financial Reporting"].map((feature) => (
              <div key={feature} className="border border-border/40 p-4 bg-charcoal">
                <div className="font-sans text-xs text-cream tracking-wide">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={managementFaqs} label="Management FAQ" />

      {/* CTA */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-6 tracking-tight">
            Have a Property to Discuss?
          </h2>
          <p className="font-sans text-sm text-cream-muted font-light leading-[1.8] mb-10">
            Whether you're considering a sale, joint venture, or management partnership — we'd love to hear from you.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          >
            Sell Your Property <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}

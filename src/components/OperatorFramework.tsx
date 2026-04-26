import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Three disciplines, one balance sheet, one team.
 * From the pitch deck strategy slide: Acquire / Develop / Manage.
 * Rendered as paper cards with ink detail.
 */
const disciplines = [
  {
    numeral: "i.",
    title: "Acquire",
    lead: "Stabilized and value-add assets where basis is right, operations are fixable, and long-term demand drivers are intact.",
    tag: "Deal-by-deal — not blind pool.",
    href: "/capital",
  },
  {
    numeral: "ii.",
    title: "Develop",
    lead: "Ground-up in submarkets where we have information advantage. Entitlement-first, off-market sourcing, institutional capital structure.",
    tag: "We build what we intend to hold.",
    href: "/development",
  },
  {
    numeral: "iii.",
    title: "Manage",
    lead: "Everything we own, we run. Asset management, property operations, leasing strategy, capital planning, and investor reporting under one roof.",
    tag: "Operations is where real returns live.",
    href: "/management",
  },
];

export default function OperatorFramework() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="relative bg-paper-warm py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-5xl mx-auto" data-reveal>
          <p className="font-serif italic text-base md:text-lg text-brass mb-6">
            What we actually do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-ink max-w-3xl mb-4">
            Three disciplines, one balance sheet, one team underwriting every decision.
          </h2>
        </div>

        {/* Three cards */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {disciplines.map((d) => (
            <Link
              key={d.title}
              to={d.href}
              className="group bg-paper p-8 md:p-10 hover:bg-paper-warm transition-colors duration-300 focus-visible:outline-none focus-visible:bg-paper-warm"
              data-reveal
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-serif italic text-2xl text-brass">{d.numeral}</span>
                <ArrowUpRight
                  className="text-ink/30 group-hover:text-brass transition-colors duration-300"
                  size={18}
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-5 tracking-tight">
                {d.title}
              </h3>
              <p className="font-sans text-sm md:text-base leading-[1.75] text-ink/70 font-light mb-6">
                {d.lead}
              </p>
              <p className="font-serif italic text-sm text-brass border-t border-ink/10 pt-5">
                {d.tag}
              </p>
            </Link>
          ))}
        </div>

        {/* Footnote */}
        <p className="max-w-5xl mx-auto mt-10 font-serif italic text-ink/65 text-sm md:text-base text-center">
          The parent brand sits quietly above; the division carries the conversation.
        </p>
      </div>
    </section>
  );
}

import type { CaseStudy } from "@/lib/data/case-studies";

interface Props {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: Props) {
  return (
    <div className="group bg-charcoal-mid border border-border/40 overflow-hidden hover:border-gold/15 transition-all duration-500 shadow-card">
      {/* Image or placeholder */}
      {study.image ? (
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
            loading="lazy"
            width={600}
            height={400}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid via-charcoal-mid/20 to-transparent" />
        </div>
      ) : (
        <div className="relative h-48 bg-gradient-to-br from-charcoal-light to-charcoal flex items-center justify-center">
          <div className="text-center">
            <div className="font-display text-4xl font-semibold text-gold/10 tracking-tight">{study.units}</div>
            <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/25 mt-1">Units</div>
          </div>
          <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/30 bg-charcoal/70 backdrop-blur-sm px-3 py-1.5">
            {study.assetType}
          </span>
          <span className="absolute top-5 right-5 font-sans text-[9px] tracking-[0.25em] uppercase text-cream-muted/60 border border-border/40 bg-charcoal/70 backdrop-blur-sm px-3 py-1.5">
            {study.status}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="p-8 md:p-10">
        <div className="mb-4">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-cream mb-1.5">{study.title}</h3>
          <p className="font-sans text-xs text-cream-muted/70">
            {study.location} &middot; {study.units} Units &middot; {study.strategy}
          </p>
        </div>
        <p className="font-sans text-sm text-cream-muted leading-[1.7] font-light mb-6">
          {study.description}
        </p>

        {/* Highlights */}
        <div className="mb-8">
          <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3">Key Highlights</div>
          <ul className="space-y-2">
            {study.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-gold/40 mt-2 shrink-0" />
                <span className="font-sans text-xs text-cream-muted/80 font-light leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/40">
          {study.metrics.map((m, j) => (
            <div key={j}>
              <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/60 mb-1.5">{m.label}</div>
              <div className="font-sans text-xs text-cream font-light">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import type { CaseStudy } from "@/lib/data/case-studies";

interface Props {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: Props) {
  return (
    <div className="group bg-paper border border-ink/10 overflow-hidden hover:border-ink/25 transition-all duration-500">
      {study.image ? (
        <div className="relative h-64 md:h-72 overflow-hidden bg-paper-warm">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
            loading="lazy"
            width={600}
            height={400}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.22em] uppercase text-ink bg-paper/90 backdrop-blur-sm px-3 py-1.5 border border-ink/15">
            {study.assetType}
          </span>
        </div>
      ) : (
        <div className="relative h-48 bg-paper-warm flex items-center justify-center">
          <div className="text-center">
            <div className="font-serif text-4xl text-brass/40 tracking-tight">{study.units}</div>
            <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-ink/40 mt-1">Units</div>
          </div>
          <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.22em] uppercase text-ink bg-paper/90 backdrop-blur-sm px-3 py-1.5 border border-ink/15">
            {study.assetType}
          </span>
          <span className="absolute top-5 right-5 font-sans text-[9px] tracking-[0.22em] uppercase text-brass border border-brass/30 bg-paper/90 backdrop-blur-sm px-3 py-1.5">
            {study.statusDetail || study.status}
          </span>
        </div>
      )}

      <div className="p-8 md:p-10">
        <div className="mb-4">
          <h3 className="font-serif text-xl md:text-2xl text-ink mb-2 tracking-tight leading-snug">
            {study.title}
          </h3>
          <p className="font-sans text-xs text-ink/55">
            {study.location} &middot; {study.units} units &middot; {study.strategy}
          </p>
        </div>
        <p className="font-serif text-sm text-ink/80 leading-[1.65] mb-6">
          {study.description}
        </p>

        <div className="mb-8">
          <div className="font-sans text-[10px] tracking-[0.22em] uppercase text-brass mb-3">
            Key highlights
          </div>
          <ul className="space-y-2">
            {study.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-brass mt-1.5 select-none" aria-hidden>&bull;</span>
                <span className="font-sans text-sm text-ink/75 font-light leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {study.performanceSnapshot && (
          <div className="mb-6 p-5 bg-paper-warm border-l-2 border-brass">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={12} className="text-brass" />
              <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-brass">
                Performance snapshot
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {study.performanceSnapshot.map((pm, j) => (
                <div key={j}>
                  <div className="font-serif text-lg md:text-xl text-ink mb-1 tracking-tight">
                    {pm.value}
                  </div>
                  <div className="font-sans text-[9px] tracking-[0.12em] uppercase text-ink/55 mb-0.5">
                    {pm.label}
                  </div>
                  {pm.context && (
                    <div className="font-sans text-[10px] text-ink/55 font-light">
                      {pm.context}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-ink/15 mb-6">
          {study.metrics.map((m, j) => (
            <div key={j}>
              <div className="font-sans text-[9px] tracking-[0.22em] uppercase text-ink/55 mb-1.5">
                {m.label}
              </div>
              <div className="font-serif italic text-sm text-ink/85">{m.value}</div>
            </div>
          ))}
        </div>

        <Link
          to={`/portfolio/${study.slug}`}
          className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.22em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-brass hover:text-brass transition-colors duration-300"
        >
          Read the case <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}

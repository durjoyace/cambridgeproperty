import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const labelMap: Record<string, string> = {
  capital: "Capital",
  development: "Development",
  management: "Management",
  "case-studies": "Case Studies",
  "sell-your-property": "Direct Acquisition",
  partners: "Partners",
  about: "About",
  contact: "Contact",
  insights: "Insights",
  press: "Press",
  portfolio: "Portfolio",
};

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="pt-28 pb-4">
      <div className="container mx-auto">
        <ol className="flex items-center gap-2 font-sans text-[10px] tracking-[0.15em] uppercase">
          <li>
            <Link to="/" className="text-ink/65 hover:text-brass transition-colors duration-300">
              Home
            </Link>
          </li>
          {segments.map((segment, i) => (
            <li key={segment} className="flex items-center gap-2">
              <ChevronRight size={10} className="text-ink/40" aria-hidden />
              {i === segments.length - 1 ? (
                <span className="text-brass" aria-current="page">{labelMap[segment] || segment}</span>
              ) : (
                <Link
                  to={`/${segments.slice(0, i + 1).join("/")}`}
                  className="text-ink/65 hover:text-brass transition-colors duration-300"
                >
                  {labelMap[segment] || segment}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

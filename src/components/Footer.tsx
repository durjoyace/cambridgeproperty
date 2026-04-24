import { Link, useLocation } from "react-router-dom";
import { LogIn } from "lucide-react";
import NewsletterCapture from "@/components/NewsletterCapture";
import { Wordmark } from "@/components/brand/Wordmark";

const navLinks = [
  { label: "Capital", href: "/capital" },
  { label: "Development", href: "/development" },
  { label: "Management", href: "/management" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Insights", href: "/insights" },
  { label: "Direct Acquisition", href: "/sell-your-property" },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isHashLink = href.startsWith("/#");

  const cls =
    "font-sans text-[10px] tracking-[0.18em] uppercase text-paper/55 hover:text-paper transition-colors duration-300 focus-visible:text-paper focus-visible:outline-none";

  if (isHashLink && pathname === "/") {
    return (
      <a href={href.slice(1)} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={cls}>
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-16 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <Link to="/" className="block" aria-label="Thane &amp; Reeve — home">
            <Wordmark size="sm" tone="paper" withTagline />
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 max-w-xl justify-end">
            {navLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
            <a
              href="https://barrettjohnson.appfolio.com/connect/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-[10px] tracking-[0.18em] uppercase text-paper/55 hover:text-paper transition-colors duration-300 focus-visible:text-paper focus-visible:outline-none"
            >
              <LogIn size={11} />
              Resident Portal
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-paper/15">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-8">
            <div className="w-full md:max-w-xs">
              <NewsletterCapture />
            </div>
            <p className="font-serif italic text-paper/70 text-sm md:text-right max-w-sm">
              &ldquo;The ampersand is not a flourish. It is the promise that ownership and
              stewardship never get uncoupled.&rdquo;
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-sans text-xs text-paper/50 font-light tracking-wide">
              &copy; {year} Thane &amp; Reeve Holdings LLC. All rights reserved.
            </p>
            <p className="font-sans text-xs text-paper/50 font-light tracking-wide">
              Patrick Barrett · Timothy Johnson · Boston
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

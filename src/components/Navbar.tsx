import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";

const navLinks = [
  { label: "Capital", href: "/capital" },
  { label: "Development", href: "/development" },
  { label: "Management", href: "/management" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

function NavAnchor({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  const isHashLink = href.startsWith("/#");

  if (isHashLink) {
    const hash = href.slice(1);
    if (pathname === "/") {
      return (
        <a href={hash} className={className} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-xl border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link to="/" className="group" aria-label="Thane &amp; Reeve — home">
          <Wordmark size="sm" tone="ink" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <NavAnchor
              key={link.href}
              href={link.href}
              className="link-rule font-sans text-[11px] tracking-[0.18em] uppercase text-ink/65 hover:text-ink transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
            >
              {link.label}
            </NavAnchor>
          ))}
          <NavAnchor
            href="/sell-your-property"
            className="font-sans text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 border border-ink/30 text-ink hover:bg-ink hover:text-paper transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
          >
            Direct Acquisition
          </NavAnchor>
          <a
            href="https://barrettjohnson.appfolio.com/connect/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/45 hover:text-brass transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
            title="Resident Portal"
            aria-label="Resident Portal — tenant login"
          >
            <LogIn size={15} />
          </a>
        </nav>

        <button
          className="md:hidden text-ink/70 hover:text-brass transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden bg-paper/95 backdrop-blur-xl border-t border-ink/10 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <NavAnchor
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.2em] uppercase text-ink/70 hover:text-ink transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavAnchor>
          ))}
          <NavAnchor
            href="/sell-your-property"
            className="font-sans text-xs tracking-[0.18em] uppercase px-6 py-4 border border-ink/30 text-ink hover:bg-ink hover:text-paper transition-all duration-300 text-center focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
            onClick={() => setMobileOpen(false)}
          >
            Direct Acquisition
          </NavAnchor>
          <a
            href="https://barrettjohnson.appfolio.com/connect/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.18em] uppercase text-ink/55 hover:text-brass transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
            onClick={() => setMobileOpen(false)}
          >
            <LogIn size={14} />
            Resident Portal
          </a>
        </nav>
      )}
    </header>
  );
}

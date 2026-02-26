import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

const navLinks = [
  { label: "Development", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Press", href: "/press" },
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
    const hash = href.slice(1); // e.g. "#thesis"
    if (pathname === "/") {
      // On homepage: smooth scroll
      return (
        <a href={hash} className={className} onClick={onClick}>
          {children}
        </a>
      );
    }
    // On inner page: navigate to homepage with hash
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight group">
          <span className="font-display text-lg font-semibold tracking-wide text-cream">
            Barrett &amp; Johnson
          </span>
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold/70 group-hover:text-gold transition-colors duration-300">
            Real Estate Developers &amp; Operators
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavAnchor
              key={link.href}
              href={link.href}
              className="relative font-sans text-[11px] tracking-[0.15em] uppercase text-cream-muted/70 hover:text-cream transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold/40 hover:after:w-full after:transition-all after:duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              {link.label}
            </NavAnchor>
          ))}
          <NavAnchor
            href="/sell-your-property"
            className="font-sans text-[11px] tracking-[0.15em] uppercase px-6 py-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          >
            Direct Acquisition
          </NavAnchor>
          <a
            href="https://barrettjohnson.appfolio.com/connect/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-muted/60 hover:text-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            title="Resident Portal"
            aria-label="Resident Portal — tenant login"
          >
            <LogIn size={15} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cream-muted hover:text-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <NavAnchor
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.18em] uppercase text-cream-muted/70 hover:text-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavAnchor>
          ))}
          <NavAnchor
            href="/sell-your-property"
            className="font-sans text-xs tracking-[0.15em] uppercase px-6 py-4 border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 text-center focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            onClick={() => setMobileOpen(false)}
          >
            Direct Acquisition
          </NavAnchor>
          <a
            href="https://barrettjohnson.appfolio.com/connect/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-cream-muted/50 hover:text-gold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
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

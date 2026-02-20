import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Approach", href: "#thesis" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Markets", href: "#markets" },
  { label: "Work With Us", href: "#submit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-gold/10 shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-wide text-cream">
            Barrett &amp; Johnson
          </span>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
            Cambridge Property Owners &amp; Developers
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.15em] uppercase text-cream-muted hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#submit"
            className="font-sans text-xs tracking-[0.15em] uppercase px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-200"
          >
          Work With Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cream-muted hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal/98 backdrop-blur-md border-t border-gold/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-sans text-xs tracking-[0.18em] uppercase text-cream-muted hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#submit"
            onClick={() => setMobileOpen(false)}
            className="font-sans text-xs tracking-[0.15em] uppercase px-5 py-3 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all text-center"
          >
            Submit Property
          </a>
        </div>
      )}
    </header>
  );
}

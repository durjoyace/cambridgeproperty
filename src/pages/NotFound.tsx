import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";

const helpfulLinks = [
  { label: "View Our Portfolio", href: "/portfolio" },
  { label: "Sell Your Property", href: "/sell-your-property" },
  { label: "Property Management", href: "/management" },
  { label: "Case Studies", href: "/case-studies" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Barrett & Johnson"
        description="The page you're looking for doesn't exist or has been moved."
      />
      <div className="min-h-screen flex items-center justify-center bg-charcoal">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="font-display text-8xl md:text-9xl font-semibold text-gold/15 mb-6 tracking-tight">404</div>
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="font-sans text-sm text-cream-muted/70 font-light leading-[1.7] mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          >
            Return Home <ArrowRight size={13} />
          </Link>

          <div className="mt-12 pt-8 border-t border-border/20">
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-muted/60 mb-4">
              Or try one of these pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-sans text-xs text-cream-muted/50 hover:text-gold transition-colors duration-300 focus-visible:text-gold focus-visible:outline-none"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

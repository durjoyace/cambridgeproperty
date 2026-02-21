import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
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
          className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold"
        >
          Return Home <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

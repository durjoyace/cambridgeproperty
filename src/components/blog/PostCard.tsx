import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog-posts";

interface Props {
  post: BlogPost;
}

export default function PostCard({ post }: Props) {
  return (
    <Link
      to={`/insights/${post.slug}`}
      className="group bg-charcoal-mid border border-border/40 overflow-hidden hover:border-gold/15 transition-all duration-500 shadow-card block"
    >
      {/* Image or fallback */}
      <div className="h-48 overflow-hidden relative">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
            loading="lazy"
            width={600}
            height={300}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-charcoal-light to-charcoal flex items-center justify-center">
            <span className="font-display text-6xl font-semibold text-gold/[0.06] tracking-tight select-none">
              B&J
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-mid/80 via-transparent to-transparent" />
        <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.25em] uppercase text-gold border border-gold/30 bg-charcoal/70 backdrop-blur-sm px-3 py-1.5">
          {post.category}
        </span>
      </div>
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-4 mb-4">
          <time className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted/50">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-cream-muted/20">|</span>
          <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted/50 flex items-center gap-1">
            <Clock size={10} /> {post.readTime}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
        <p className="font-sans text-sm text-cream-muted leading-[1.7] font-light mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-border/40">
          <span className="font-sans text-xs text-cream-muted/60 font-light">{post.author}</span>
          <span className="font-sans text-xs tracking-[0.15em] uppercase text-gold/60 group-hover:text-gold transition-colors duration-300 flex items-center gap-1.5">
            Read More <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

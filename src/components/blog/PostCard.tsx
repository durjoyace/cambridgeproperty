import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog-posts";

interface Props {
  post: BlogPost;
}

export default function PostCard({ post }: Props) {
  return (
    <Link
      to={`/insights/${post.slug}`}
      className="group bg-paper border border-ink/10 overflow-hidden hover:border-ink/25 transition-all duration-500 block"
    >
      <div className="h-48 overflow-hidden relative bg-paper-warm">
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
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-serif italic text-7xl text-brass/25 select-none">
              &amp;
            </span>
          </div>
        )}
        <span className="absolute top-5 left-5 font-sans text-[9px] tracking-[0.22em] uppercase text-ink bg-paper/90 backdrop-blur-sm px-3 py-1.5 border border-ink/15">
          {post.category}
        </span>
      </div>
      <div className="p-7 md:p-8">
        <div className="flex items-center gap-4 mb-4 font-sans text-[10px] tracking-[0.2em] uppercase text-ink/55">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-ink/30">·</span>
          <span className="flex items-center gap-1">
            <Clock size={10} /> {post.readTime}
          </span>
        </div>
        <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-brass transition-colors duration-300 leading-snug tracking-tight">
          {post.title}
        </h3>
        <p className="font-sans text-sm text-ink/70 leading-[1.7] font-light mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-5 border-t border-ink/10">
          <span className="font-serif italic text-sm text-ink/65">{post.author}</span>
          <span className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink/55 group-hover:text-brass transition-colors duration-300 flex items-center gap-1.5">
            Read <ArrowUpRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

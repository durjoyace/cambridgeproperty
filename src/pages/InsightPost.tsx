import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { getPostBySlug, blogPosts } from "@/lib/data/blog-posts";

export default function InsightPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/insights/${post.slug}`}
        ogType="article"
        schema={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            url: `/insights/${post.slug}`,
            datePublished: post.date,
            author: post.author,
            ...(post.image && { image: post.image }),
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Insights", url: "/insights" },
            { name: post.title, url: `/insights/${post.slug}` },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Article */}
      <article className="pt-8 md:pt-10 pb-20 bg-paper">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          {/* Back link */}
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-ink/65 hover:text-brass transition-colors duration-300 mb-10 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
          >
            <ArrowLeft size={12} /> All insights
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brass border border-brass/30 px-3 py-1.5 inline-block mb-6">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.14] tracking-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-ink/65">
              <span className="font-sans text-xs">{post.author}</span>
              <span className="text-ink/25" aria-hidden>·</span>
              <time className="font-sans text-xs">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-ink/25" aria-hidden>·</span>
              <span className="font-sans text-xs flex items-center gap-1.5">
                <Clock size={11} /> {post.readTime}
              </span>
            </div>
          </header>

          {/* Article body */}
          <div
            className="prose-editorial"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-ink">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-paper mb-5 tracking-tight">
            Have a property to discuss?
          </h2>
          <p className="font-serif italic text-paper/70 text-lg leading-[1.7] mb-10">
            Our principals review every submission personally and respond within
            48 business hours.
          </p>
          <Link
            to="/sell-your-property"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.24em] uppercase px-10 py-4 bg-paper text-ink hover:bg-brass hover:text-paper transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
          >
            Submit a property <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-paper-warm py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <p className="font-serif italic text-base md:text-lg text-brass mb-10">
              More insights
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/insights/${p.slug}`}
                  className="group block bg-paper border border-ink/10 p-8 hover:border-ink/25 transition-all duration-500 focus-visible:ring-2 focus-visible:ring-brass/60 focus-visible:outline-none"
                >
                  <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-brass mb-3 block">
                    {p.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-ink mb-2 group-hover:text-brass transition-colors duration-300 leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-ink/65 font-light">
                    {p.author} &middot; {p.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

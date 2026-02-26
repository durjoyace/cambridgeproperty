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

      <article className="pt-8 pb-20 bg-charcoal">
        <div className="container mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 font-sans text-[10px] tracking-[0.15em] uppercase text-cream-muted/50 hover:text-gold transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={12} /> All Insights
          </Link>

          {/* Article header */}
          <div className="mb-12">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-3 py-1.5 inline-block mb-6">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-cream leading-[1.15] tracking-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-cream-muted/50">
              <span className="font-sans text-xs">{post.author}</span>
              <span className="text-cream-muted/40">|</span>
              <time className="font-sans text-xs">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-cream-muted/40">|</span>
              <span className="font-sans text-xs flex items-center gap-1">
                <Clock size={11} /> {post.readTime}
              </span>
            </div>
          </div>

          {/* Article body */}
          <div
            className="prose-bj"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 md:p-10 bg-charcoal-mid border border-border/40 text-center">
            <p className="font-display text-xl font-semibold text-cream mb-3">
              Have a Property to Discuss?
            </p>
            <p className="font-sans text-sm text-cream-muted font-light leading-[1.7] mb-6 max-w-md mx-auto">
              Our principals review every submission personally and respond within 48 business hours.
            </p>
            <Link
              to="/sell-your-property"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase px-10 py-5 bg-gold text-primary-foreground font-medium hover:bg-gold-light transition-all duration-300 shadow-gold focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            >
              Submit Your Property <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-pad bg-charcoal-mid">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="divider-gold" />
              <span className="section-label">More Insights</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/insights/${p.slug}`}
                  className="group bg-charcoal border border-border/40 p-8 hover:border-gold/15 transition-all duration-500 shadow-card block"
                >
                  <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold/60 mb-3 block">
                    {p.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-cream mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-cream-muted/60 font-light">
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

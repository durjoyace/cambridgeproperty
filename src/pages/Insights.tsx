import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SEOHead from "@/components/seo/SEOHead";
import PostCard from "@/components/blog/PostCard";
import { PAGE_META } from "@/lib/seo/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/seo/schemas";
import { blogPosts } from "@/lib/data/blog-posts";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Insights() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <>
      <SEOHead
        {...PAGE_META.insights}
        schema={[
          itemListSchema(
            blogPosts.map((p) => ({
              name: p.title,
              url: `/insights/${p.slug}`,
              description: p.excerpt,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Insights", url: "/insights" },
          ]),
        ]}
      />
      <Breadcrumbs />

      {/* Hero */}
      <section className="pt-8 pb-20 bg-charcoal" ref={sectionRef}>
        <div className="container mx-auto" data-reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="divider-gold" />
            <span className="section-label">Insights</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-[1.1] tracking-tight">
              Market
              <br />
              <span className="text-gold">Perspectives</span>
            </h1>
            <p className="font-sans text-sm md:text-base leading-[1.8] text-cream-muted font-light lg:max-w-sm lg:ml-auto">
              Acquisition strategy, market analysis, and property management insights from two principals with 15+ years of hands-on experience in Greater Boston real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-pad bg-charcoal-mid">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

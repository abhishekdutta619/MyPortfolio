import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { getUnifiedPosts, formatDate } from "@/lib/blog";

export default async function BlogPreview() {
  const posts = (await getUnifiedPosts()).slice(0, 2);

  return (
    <section id="blog" className="py-24 md:py-32 border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Notes on building things properly."
          action={
            <Link
              href="/blog"
              className="flex items-center gap-1 text-sm text-accent-teal hover:underline"
            >
              All posts <ArrowRight size={14} />
            </Link>
          }
        />

        <div className="grid md:grid-cols-2 gap-5">
          {posts.map((post) =>
            post.external ? (
              <a
                key={post.slug}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border bg-surface p-6 hover:border-accent-teal/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-mono text-xs text-text-faint">{formatDate(post.date)}</p>
                  <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest2 text-text-faint">
                    dev.to <ArrowUpRight size={12} />
                  </span>
                </div>
                <h3 className="font-display text-lg text-text mb-2 group-hover:text-accent-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{post.excerpt}</p>
              </a>
            ) : (
              <Link
                key={post.slug}
                href={post.href}
                className="group rounded-lg border border-border bg-surface p-6 hover:border-accent-teal/40 transition-colors"
              >
                <p className="font-mono text-xs text-text-faint mb-2">{formatDate(post.date)}</p>
                <h3 className="font-display text-lg text-text mb-2 group-hover:text-accent-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{post.excerpt}</p>
              </Link>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

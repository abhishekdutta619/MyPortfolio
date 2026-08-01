import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 2);

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
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-lg border border-border bg-surface p-6 hover:border-accent-teal/40 transition-colors"
            >
              <p className="font-mono text-xs text-text-faint mb-2">
                {formatDate(post.date)}
              </p>
              <h3 className="font-display text-lg text-text mb-2 group-hover:text-accent-teal transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

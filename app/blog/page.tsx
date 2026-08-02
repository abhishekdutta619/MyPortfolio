import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { getUnifiedPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on front-end architecture, accessibility, and building things properly.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndex() {
  const posts = await getUnifiedPosts();

  return (
    <>
      <Header />
      <main className="py-24 md:py-32">
        <Container className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest2 text-accent-teal mb-3">
            Writing
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-text mb-14">
            All posts
          </h1>

          <div className="space-y-8">
            {posts.map((post) =>
              post.external ? (
                <a
                  key={post.slug}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <p className="font-mono text-xs text-text-faint">{formatDate(post.date)}</p>
                    <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest2 text-text-faint">
                      dev.to <ArrowUpRight size={12} />
                    </span>
                  </div>
                  <h2 className="font-display text-xl text-text mb-2 group-hover:text-accent-teal transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed">{post.excerpt}</p>
                </a>
              ) : (
                <Link key={post.slug} href={post.href} className="group block">
                  <p className="font-mono text-xs text-text-faint mb-1.5">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="font-display text-xl text-text mb-2 group-hover:text-accent-teal transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed">{post.excerpt}</p>
                </Link>
              )
            )}

            {posts.length === 0 && (
              <p className="text-sm text-text-muted">
                No posts yet — check back soon.
              </p>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

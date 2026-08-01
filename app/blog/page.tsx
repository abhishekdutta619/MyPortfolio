import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { getAllPosts, formatDate } from "@/lib/blog";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: `Writing — ${profile.name}`,
  description: "Notes on front-end architecture, accessibility, and building things properly.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

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
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <p className="font-mono text-xs text-text-faint mb-1.5">
                  {formatDate(post.date)}
                </p>
                <h2 className="font-display text-xl text-text mb-2 group-hover:text-accent-teal transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

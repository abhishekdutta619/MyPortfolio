import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="py-24 md:py-32">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent-teal transition-colors mb-10"
          >
            <ArrowLeft size={15} /> All posts
          </Link>

          <p className="font-mono text-xs text-text-faint mb-3">
            {formatDate(post.date)}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-medium text-text mb-4 text-balance">
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full border border-border px-2.5 py-1 text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <article
            className="prose prose-invert max-w-none
              prose-headings:font-display prose-headings:font-medium
              prose-p:text-text-muted prose-li:text-text-muted
              prose-strong:text-text
              prose-a:text-accent-teal prose-a:no-underline hover:prose-a:underline
              prose-code:text-accent-amber prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-surface prose-pre:border prose-pre:border-border"
          >
            <MDXRemote source={post.content} />
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}

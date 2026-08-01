import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getDevToPosts } from "./devto";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) ?? [],
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    content,
  };
}

export function formatDate(dateStr: string): string {
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Unified feed: local MDX posts (written here, rendered on-site) merged with
// dev.to posts (written there, linked out for the full read). Sorted by date
// across both sources so it reads as one coherent blog, not two lists stapled
// together.
export interface UnifiedPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  href: string;
  external: boolean;
}

export async function getUnifiedPosts(): Promise<UnifiedPost[]> {
  const local: UnifiedPost[] = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    tags: p.tags,
    href: `/blog/${p.slug}`,
    external: false,
  }));

  const devto: UnifiedPost[] = (await getDevToPosts()).map((p) => ({
    slug: `devto-${p.id}`,
    title: p.title,
    date: p.publishedAt.slice(0, 10), // normalize to YYYY-MM-DD to match local post dates
    excerpt: p.excerpt,
    tags: p.tags,
    href: p.url,
    external: true,
  }));

  return [...local, ...devto].sort((a, b) => (a.date < b.date ? 1 : -1));
}

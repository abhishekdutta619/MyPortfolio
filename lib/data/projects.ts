// real projects (real repos, real architecture), all honestly marked as
// Structure/layout/interaction patterns are real; the specific numbers,


export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  badges: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "simply-dwell-design",
    title: "Simply Dwell Design",
    category: "Content Platform · Headless CMS · Full-Stack",
    description:
      "A home-decor content site with a from-scratch, no-code publishing pipeline — a custom GitHub OAuth flow running as Cloudflare edge functions, a hand-built markdown CMS, and content that goes from draft to live in about two minutes with zero hosting cost.",
    stack: ["Astro", "React", "TypeScript", "Cloudflare Pages Functions", "Vitest"],
    badges: ["~2 min publish", "$0/mo hosting"],
    // No `github` field: source is private, so the Code link is omitted
    // rather than pointed at a 404.
    demo: "https://www.simplydwelldesign.com/", // verify this resolves before launch
    featured: true,
  },
  {
    slug: "momentlog",
    title: "MomentLog AI",
    category: "AI Personal Journal",
    description:
      "An AI-powered journal and life-assistant platform. Moments (the core data layer) accumulate over time, and a background AI worker turns them into a searchable personal memory system; semantic search, auto-summaries, mood/task/goal tracking layered on top. A journal save returns immediately; AI processing runs async in a separate FastAPI worker with no public API surface of its own, so the save is never blocked waiting on it.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Prisma"],
    badges: ["Auth: done", "In active development"],
    github: "https://github.com/abhishekdutta619/MomentLog-AI",
    // No demo -- per its own README, only Auth is marked done; the rest of
    // the MVP (Moments, AI search, tasks, goals) is still in progress or
    // planned.
  },
  {
    slug: "cloudsuite",
    title: "CloudSuite",
    category: "Multi-Tenant SaaS Platform",
    description:
      "A multi-tenant SaaS platform built around database-enforced tenant isolation (Postgres Row-Level Security, connection-pool-safe via transaction-scoped session variables), subscription billing, and a modular \"chassis\" architecture that lets new customer-facing products plug in without touching core infrastructure.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Drizzle", "Turborepo"],
    badges: ["Row-Level Security", "In active development"],
    github: "https://github.com/abhishekdutta619/cloudsuite-monorepo",
    // No demo -- the project's own roadmap (in its README) has this at
    // Phase 1 of 7, "in progress." Not linking a live demo that doesn't
    // exist rather than pointing to something fake or dead.
  },
  {
    slug: "sustainable-marketplace",
    title: "Sustainable Marketplace",
    category: "Multi-Vendor E-Commerce",
    description:
      "A multi-vendor marketplace with a sustainability layer (eco scores, carbon tracking, green rewards) and an AI layer (smart search, eco-scoring, shopping assistant) built on top. Solo build, staged across three independently-demoable cut lines: MVP, sustainability features, then AI.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "pgvector", "Prisma", "Redis"],
    badges: ["Phase 0 — Planning"],
    github: "https://github.com/abhishekdutta619/sustainable-marketplace",
    // No demo -- per its own README, this is at Phase 0 (Planning &
    // Architecture) of a 3-phase roadmap. Not linking a live URL that
    // doesn't exist.
  },
];

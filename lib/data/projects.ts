// PLACEHOLDER CONTENT — confirmed earlier in planning (see README).
// Structure/layout/interaction patterns are real; the specific numbers,
// links, and product details are not. Replace before launch.

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
    title: "MomentLog",
    category: "Daily Journal — Web App",
    description:
      "A minimal daily journaling app focused on responsive layout and rich-text state handling — fast enough to use every day without friction.",
    stack: ["React", "Node.js", "MongoDB"],
    badges: [],
    github: "https://github.com/", // placeholder
    demo: "https://example.com/", // placeholder
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    category: "Personal Finance — Web App",
    description:
      "A personal finance tracker with category filtering and chart-based visualization — built to make a month of spending legible at a glance, not just logged.",
    stack: ["React", "Chart.js", "Node.js"],
    badges: [],
    github: "https://github.com/", // placeholder
    demo: "https://example.com/", // placeholder
  },
];

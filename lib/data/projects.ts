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
    slug: "kanbanflow",
    title: "KanbanFlow",
    category: "Full-Stack SaaS · Enterprise",
    description:
      "A team task manager built to hold up under real usage — drag-and-drop boards, role-based permissions, and an activity log that survives audits, not just demos.",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "MongoDB"],
    badges: ["99/100 Lighthouse", "-70% bundle size"],
    github: "https://github.com/", // placeholder
    demo: "https://example.com/", // placeholder
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

# Abhishek Kumar Dutta — Portfolio

**Live:** [abhishekkumardutta.vercel.app](https://abhishekkumardutta.vercel.app)

A personal portfolio and case-study site for a front-end engineer, built with Next.js. Design system, content, and copy are all custom — no template, no page builder.

## Tech stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS, custom design tokens (color/type/spacing)
- **Motion:** Framer Motion — scroll-reveal on every section, respects `prefers-reduced-motion`
- **Content:** MDX for blog posts (`content/blog/*.mdx`), merged in a unified feed with live posts pulled from the [dev.to API](https://developers.forem.com/api)
- **Fonts:** Space Grotesk (display) / Inter (body) / JetBrains Mono (metrics/labels), self-hosted via `next/font`
- **Icons:** `simple-icons` for accurate, official brand marks in the skills section
- **Images:** `next/image` throughout, with a custom `imageSizes` config tuned to the site's actual display sizes rather than Next's defaults
- **Forms:** Web3Forms (no backend required)

## Features

- **Hero** with a "performance readout" motif — real, quantified achievements from actual work history rendered as inline metric chips, not decoration
- **About / Skills / Experience** — timeline-based experience section, skills grouped by category with real brand icons
- **Projects** — a featured case study plus a grid of real, linked repositories (not demo placeholders):
  - **Simply Dwell Design** *(featured)* — a home-decor content platform with a from-scratch, no-code publishing pipeline: custom GitHub OAuth running as Cloudflare edge functions, a hand-built markdown CMS, draft-to-live in ~2 minutes at $0/mo hosting
  - **MomentLog AI** — an AI-powered journal/life-assistant platform; journal writes return immediately while a separate async worker handles semantic search and summarization
  - **CloudSuite** — a multi-tenant SaaS platform built around database-enforced tenant isolation (Postgres Row-Level Security)
  - **Sustainable Marketplace** — a multi-vendor e-commerce platform with a sustainability-scoring and AI layer
- **Testimonials** — real LinkedIn recommendations, laid out as a single featured quote or a grid depending on how many exist at any given time
- **Blog** — MDX posts written directly in this repo, merged with live dev.to posts into one chronological feed; dev.to posts link out, local posts render on-site
- **Contact** — working form (Web3Forms) plus a "Let's talk" popup styled as a phone-frame drop-down, showing direct contact info without cluttering the main page
- **Accessibility** — every text/background color pair verified against WCAG AA by computed contrast ratio (not eyeballed), visible focus rings site-wide, semantic landmarks, accessible modal (focus trap, Escape to close, focus restored on close)
- **SEO** — full OpenGraph/Twitter metadata, `Person` JSON-LD, auto-generated sitemap and robots.txt, a generated OG share image
- **Security headers** — CSP, X-Frame-Options, COOP, and related headers, with an explicit dev/production split (dev needs `unsafe-eval` for Fast Refresh; production doesn't)

## Run it locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. First run downloads the Google Fonts at build time — requires an internet connection.

## Design system reference

| Token | Value | Use |
|---|---|---|
| `bg` | `#0A0C10` | Page background |
| `surface` | `#12151B` | Cards, chips |
| `border` | `#232830` | Hairlines, dividers |
| `text` | `#EDEFF2` | Primary text |
| `text-muted` | `#8891A0` | Secondary text |
| `text-faint` | `#78818D` | Tertiary text (dates, captions) — WCAG AA verified |
| `accent-teal` | `#52C7B8` | Interactive elements (links, CTAs, positive metrics) |
| `accent-amber` | `#E8A33D` | Metric emphasis (negative/reduction metrics) |

## Notes

- `lib/data/profile.ts` — LinkedIn URL is still a placeholder; everything else (email, phone, GitHub, location) is real
- The three non-featured projects (MomentLog AI, CloudSuite, Sustainable Marketplace) are honestly represented as in-progress, matching each repo's own README/roadmap at the time this site was built — check their repos directly for current status

## Deploying

Deploys cleanly to Vercel with no configuration:

```bash
npx vercel
```

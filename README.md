# Abhishek Kumar Dutta — Portfolio

Phase 1 of 5: **Foundation.** Project scaffold, design system, layout shell, and hero section.

## Run it locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. First run will download the Google Fonts (Space Grotesk, Inter,
JetBrains Mono) at build time — this requires an internet connection.

## What's in Phase 1

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Design tokens: color, type, spacing — see `tailwind.config.ts`
- Font system: Space Grotesk (display) / Inter (body) / JetBrains Mono (metrics/labels) — see `lib/fonts/index.ts`
- Header (sticky, mobile menu) and Footer — `components/layout/`
- Hero section with the "performance readout" motif — `components/hero/`
- Accessibility defaults: visible focus rings, `prefers-reduced-motion` respected globally

## Design system reference

| Token | Value | Use |
|---|---|---|
| `bg` | `#0A0C10` | Page background |
| `surface` | `#12151B` | Cards, chips |
| `border` | `#232830` | Hairlines, dividers |
| `text` | `#EDEFF2` | Primary text |
| `text-muted` | `#8891A0` | Secondary text |
| `accent-teal` | `#52C7B8` | Interactive elements (links, CTAs, positive metrics) |
| `accent-amber` | `#E8A33D` | Metric emphasis (negative/reduction metrics) |

## Placeholders to replace before launch

These are intentionally fake/generic and marked with comments in the code:

- `lib/data/profile.ts` — `email`, `links.github`, `links.linkedin` are placeholders
- `public/resume/` — add your real résumé PDF here, matching the filename referenced in `profile.ts`
- `public/images/` — empty, will hold project screenshots and headshot from Phase 3 onward

## Roadmap

1. ✅ Foundation — scaffold, design system, Hero
2. About, Skills, Experience timeline, Testimonials, Contact form
3. Projects — KanbanFlow case study (placeholder data), MomentLog, Expense Tracker
4. Blog (MDX), motion/scroll-reveal pass, accessibility audit, résumé PDF wiring
5. Deploy to Vercel, SEO metadata, domain setup

## Deploying

This project has zero server-side requirements beyond what Next.js provides, so it deploys
cleanly to Vercel with no configuration:

```bash
npx vercel
```

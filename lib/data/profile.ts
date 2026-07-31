export const profile = {
  name: "Abhishek Kumar Dutta",
  shortName: "Abhishek",
  brandName: "Abhishek Dutta", // used by the Logo component; full legal name stays in metadata/footer copyright
  title: "Front-End Engineer",
  eyebrow: "Front-End Engineer — 6+ Years",
  tagline: "I build interfaces that scale, and I can show you the numbers.",
  subhead:
    "Leading front-end architecture for cloud-native SaaS products — from performance budgets and accessibility to team mentorship and delivery.",
  email: "hello@abhishekdutta.dev", // placeholder — replace with real address
  location: "India",
  links: {
    github: "https://github.com/", // placeholder
    linkedin: "https://linkedin.com/in/", // placeholder
    resumePdf: "/resume/abhishek-kumar-dutta-resume.pdf", // placeholder — add real file in Phase 4
  },
};

// Real, quantified achievements pulled directly from the resume.
// This is the data source for the "performance readout" motif used
// in the hero strip and, later, inline with each experience bullet.
export const impactMetrics = [
  { value: "-30%", label: "page load time", source: "lazy loading rollout" },
  { value: "+12%", label: "user engagement", source: "flagship UI redesign" },
  { value: "-10%", label: "bounce rate", source: "flagship UI redesign" },
  { value: "+15%", label: "client engagement", source: "UI/UX enhancements" },
  { value: "+20%", label: "data handling perf.", source: "JSON parsing rework" },
  { value: "+25%", label: "website traffic", source: "SEO initiative" },
] as const;

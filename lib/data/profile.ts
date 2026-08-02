export const profile = {
  name: "Abhishek Kumar Dutta",
  shortName: "AD",
  brandName: "Abhishek Dutta", // used by the Logo component; full legal name stays in metadata/footer copyright
  title: "Front-End Engineer",
  yearsExperience: "6+",
  tagline: "I build interfaces that scale, and I can show you the numbers.",
  subhead:
    "Leading front-end architecture for cloud-native SaaS products — from performance budgets and accessibility to team mentorship and delivery.",
  availability:
    "Open to Front-End Architect and Technical Lead roles at cloud-native SaaS companies.",
  email: "abhishekdutta121091@gmail.com",
  phone: "+918951920989", // shown formatted as +91 89519 20989 in the popup
  location: "Bilaspur",
  country: "India",
  links: {
    github: "https://github.com/abhishekdutta619",
    linkedin: "https://www.linkedin.com/in/abhishek-kumar-dutta-a6b4a386/",
    resumePdf: "/resume/abhishek-kumar-dutta-resume.pdf",
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

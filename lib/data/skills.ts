// What the work produces, not just the tools used to produce it.
// Shown above the raw tech list so the section leads with value.
export const whatIBuild = [
  "Responsive interfaces",
  "Component architecture",
  "Design systems",
  "Accessible UI (WCAG)",
  "Performance-tuned apps",
  "Cloud-ready SaaS products",
] as const;

export const skillGroups = [
  {
    label: "Core",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Sass"],
  },
  {
    label: "Frameworks",
    items: ["React", "Redux", "Angular", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "FastAPI", "MongoDB", "Azure"],
  },
  {
    label: "Testing",
    items: ["Jest", "Jasmine", "Postman"],
  },
  {
    label: "Tooling",
    items: ["Webpack", "Vite", "Gulp", "Figma", "VS Code"],
  },
  {
    label: "Other",
    items: ["REST APIs", "GitHub Actions", "SVN", "WinSCP"],
  },
] as const;

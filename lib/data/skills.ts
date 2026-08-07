import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siSass,
  siReact,
  siRedux,
  siAngular,
  siTailwindcss,
  siBootstrap,
  siNodedotjs,
  siPython,
  siFastapi,
  siMongodb,
  siJest,
  siJasmine,
  siPostman,
  siWebpack,
  siVite,
  siGulp,
  siFigma,
  siGithubactions,
  siPostgresql,
  siPrisma,
  siDrizzle,
  siDocker,
  siGit,
} from "simple-icons";


// What the work produces, not just the tools used to produce it.
// Shown above the raw tech list so the section leads with value.
export const whatIBuild = [
  "Responsive interfaces",
  "Component architecture",
  "Design systems",
  "Accessible UI (WCAG)",
  "Performance-tuned apps",
  "Cloud-Native Enterprise Products",
] as const;

export interface SkillItem {
  name: string;
  icon?: { path: string; hex: string; title: string };
  svg?: string;
}

export interface SkillGroup {
  label: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Core",
    items: [
      { name: "HTML5", icon: siHtml5 },
      { name: "CSS3", icon: siCss },
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "Sass", icon: siSass },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "React", icon: siReact },
      { name: "Redux", icon: siRedux },
      { name: "Angular", icon: siAngular },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "Bootstrap", icon: siBootstrap },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Python", icon: siPython },
      { name: "FastAPI", icon: siFastapi },
      { name: "MongoDB", icon: siMongodb },
      { name: "Azure", svg: "/icons/azure.svg" }, // no brand icon available in simple-icons for Azure
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Prisma", icon: siPrisma },
      { name: "Drizzle", icon: siDrizzle },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Jest", icon: siJest },
      { name: "Jasmine", icon: siJasmine },
      { name: "Postman", icon: siPostman },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "Webpack", icon: siWebpack },
      { name: "Vite", icon: siVite },
      { name: "Gulp", icon: siGulp },
      { name: "Docker", icon: siDocker },
      { name: "Figma", icon: siFigma },
      { name: "VS Code", svg: "/icons/vscode.svg" }, // no brand icon available in simple-icons for VS Code
      { name: "Git", icon: siGit }, // no brand icon available in simple-icons for Git
    ],
  },
  {
    label: "Other",
    items: [
      { name: "REST APIs", svg: "/icons/restapi.svg" }, // not a brand, no icon expected
      { name: "GitHub Actions", icon: siGithubactions },
      { name: "TortoiseSVN", svg: "/icons/tortoisesvn.svg" }, // no brand icon available in simple-icons for TortoiseSVN
      { name: "WinSCP", svg: "/icons/winscp.svg" }, // no brand icon available in simple-icons for WinSCP
    ],
  },
];

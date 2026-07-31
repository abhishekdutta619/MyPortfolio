export interface ExperienceRole {
  company: string;
  title: string;
  period: string;
  current?: boolean;
  summary: string[];
  achievements: { text: string; metric?: { value: string; label: string } }[];
}

export const experience: ExperienceRole[] = [
  {
    company: "ImmplyCloud India Private Limited",
    title: "Software Developer",
    period: "Nov 2022 — Present",
    current: true,
    summary: [
      "Build cross-browser web interfaces with React, Angular, and modern HTML5/CSS3/JavaScript.",
      "Own responsive design principles across platforms for consistent interaction on any screen size.",
    ],
    achievements: [
      {
        text: "Cut page load time with a lazy-loading rollout, improving customer satisfaction and retention.",
        metric: { value: "-30%", label: "load time" },
      },
      {
        text: "Led a flagship product redesign — collaborative prototyping and usability testing drove engagement up and bounce down.",
        metric: { value: "+12%", label: "engagement" },
      },
      {
        text: "Same redesign, measured the other way: fewer visitors left without acting.",
        metric: { value: "-10%", label: "bounce rate" },
      },
    ],
  },
  {
    company: "Immply India Technology Private Limited",
    title: "UI Developer",
    period: "Sep 2021 — Oct 2022",
    summary: [
      "Developed and optimized interfaces for a client platform in an agile environment.",
      "Integrated RESTful APIs using test-driven development for backend communication.",
      "Ran peer code reviews, holding features to WCAG accessibility standards.",
    ],
    achievements: [
      {
        text: "Drove UI/UX improvements that measurably increased client engagement.",
        metric: { value: "+15%", label: "client engagement" },
      },
      {
        text: "Investigated and resolved escalated production bugs across the platform.",
      },
      {
        text: "Mentored junior developers on WordPress and clean JavaScript practices.",
      },
    ],
  },
  {
    company: "Tecversa IT Solutions",
    title: "Software Engineer",
    period: "Jan 2019 — Feb 2021",
    summary: [
      "Designed single-page applications with Angular and React, applying virtual DOM concepts.",
      "Built and maintained UIs across audit, banking, insurance, and finance domains.",
    ],
    achievements: [
      {
        text: "Reworked JSON parsing for more effective data handling.",
        metric: { value: "+20%", label: "data perf." },
      },
      {
        text: "Migrated a legacy interface to React, improving long-term scalability and maintainability.",
      },
      {
        text: "Built data-driven SEO initiatives that grew organic visibility.",
        metric: { value: "+25%", label: "traffic" },
      },
    ],
  },
  {
    company: "EXL TechnoSolutions Private Limited",
    title: "Tag Developer",
    period: "Jan 2018 — Jan 2019",
    summary: [
      "Implemented and maintained media and third-party tags via Google Tag Manager.",
      "Coded tag deployments and upgrades with HTML, CSS, JavaScript, and jQuery.",
    ],
    achievements: [
      {
        text: "Built custom tags to capture the analytics events the organization actually needed.",
      },
      {
        text: "Caught a conversion-tracking tag failing to fire on purchase pages — a gap that was quietly skewing revenue reporting.",
      },
    ],
  },
];

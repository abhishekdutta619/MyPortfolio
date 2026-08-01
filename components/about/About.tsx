import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import PhotoFrame from "@/components/shared/AboutPhotoFrame";
import Reveal from "@/components/shared/Reveal";

const capabilities = [
  "Front-end architecture",
  "Team leadership & mentorship",
  "Code review ownership",
  "Sprint planning",
  "Cross-functional PM collaboration",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <Container>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20">
          <div>
            <Reveal delay={0.1}>
              <PhotoFrame 
                src="/images/headshot-about.png" 
                className="aspect-square w-full max-w-[450px]" 
                sizes="450px" 
              />
            </Reveal>
          </div>

          <div className="space-y-6">
            <SectionHeading eyebrow="About" title="Six years of turning specs into shipped, scalable UI." />
            <p className="text-text-muted leading-relaxed">
              I&apos;m a front-end engineer who builds cloud-ready, scalable web
              applications with React, Angular, and TypeScript — and who spends
              as much time on how a codebase stays healthy as on what ships next.
              That means owning front-end architecture, running code reviews that
              actually catch problems, and driving sprint planning that holds up
              under real deadlines.
            </p>
            <p className="text-text-muted leading-relaxed">
              I work closely with product managers to break epics into work that
              ships on time without quietly accumulating technical debt. Strong
              on performance optimization, accessibility, and reusable UI
              systems — the parts of front-end work that don&apos;t show up in a
              demo but decide whether a product holds up a year later.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {capabilities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-text-muted"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

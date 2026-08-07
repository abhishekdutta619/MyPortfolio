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
              I&apos;m a software engineer who builds scalable, 
              enterprise-grade web applications across the full 
              stack with React, Angular, TypeScript, and Node.js, 
              Spending as much time on code health and data flow 
              as on what ships next. That means owning architectural 
              decisions, running code reviews that catch systemic bugs, 
              and driving sprint planning that holds up under real-world 
              enterprise deadlines.
            </p>
            <p className="text-text-muted leading-relaxed">
              I work closely with product managers and cross-functional 
              teams to break complex requirements into reliable, shippable 
              features. From performance budgets and database efficiency to 
              WCAG accessibility and team mentorship, I focus on the 
              structural foundations that ensure a product scales gracefully 
              over years, not just months.
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

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import SkillIcon from "@/components/shared/SkillIcon";
import { whatIBuild, skillGroups } from "@/lib/data/skills";

export default function Skills() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <Container>
        <SectionHeading eyebrow="What I Build" title="Value first, tech stack second." />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {whatIBuild.map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <div className="rounded-lg border border-border bg-surface px-5 py-4 text-sm text-text">
                {item}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-text-faint mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-1.5 rounded-md bg-surface border border-border px-2.5 py-1 text-xs text-text-muted"
                  >
                    {(item.icon || item.svg) && <SkillIcon item={item} />}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

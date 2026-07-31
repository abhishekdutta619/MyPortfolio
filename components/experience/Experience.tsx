import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import MetricChip from "@/components/shared/MetricChip";
import { experience } from "@/lib/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <Container>
        <SectionHeading eyebrow="Experience" title="Six years, four roles, one throughline." />

        <div className="space-y-0">
          {experience.map((role, i) => (
            <div
              key={role.company}
              className="relative pl-8 md:pl-10 pb-14 last:pb-0 border-l border-border last:border-transparent"
            >
              {/* timeline node */}
              <span
                className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${
                  role.current ? "bg-accent-teal" : "bg-text-faint"
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="font-display text-lg text-text">{role.title}</h3>
                <span className="font-mono text-xs text-text-faint">{role.period}</span>
              </div>
              <p className="text-sm text-accent-teal mb-4">{role.company}</p>

              <ul className="space-y-2 mb-4">
                {role.summary.map((line) => (
                  <li key={line} className="text-sm text-text-muted leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                {role.achievements.map((a) => (
                  <div key={a.text} className="flex flex-wrap items-start gap-3">
                    {a.metric && (
                      <MetricChip value={a.metric.value} label={a.metric.label} />
                    )}
                    <p className="text-sm text-text-muted leading-relaxed flex-1 min-w-[200px]">
                      {a.text}
                    </p>
                  </div>
                ))}
              </div>

              {i === 0 && (
                <span className="inline-block mt-4 font-mono text-[10px] uppercase tracking-widest2 text-accent-teal border border-accent-teal/30 rounded-full px-2.5 py-1">
                  Current
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

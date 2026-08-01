import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What it's like to work together." />

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <div className="rounded-lg border border-border bg-surface p-6 flex flex-col h-full">
                <Quote size={18} className="text-accent-teal mb-4" />
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="mt-5 pt-4 border-t border-border/60">
                  <p className="text-sm text-text">{t.name}</p>
                  <p className="text-xs text-text-faint">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

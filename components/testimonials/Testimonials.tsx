import { Quote, Linkedin } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { testimonials, type Testimonial } from "@/lib/data/testimonials";

function AttributionLink({ t }: { t: Testimonial }) {
  if (!t.linkedInUrl) return null;
  return (
    <a
      href={t.linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.name}'s LinkedIn profile`}
      className="text-text-faint hover:text-[#0A66C2] transition-colors"
    >
      <Linkedin size={16} />
    </a>
  );
}

export default function Testimonials() {
  const isSingle = testimonials.length === 1;

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What it's like to work together." />

        {isSingle ? (
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <Quote size={26} className="text-accent-teal mx-auto mb-6" />
              <blockquote className="text-lg md:text-xl text-text leading-relaxed text-balance">
                {testimonials[0].quote.split("\n\n").map((para, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : ""}>
                    {para}
                  </p>
                ))}
              </blockquote>
              <div className="mt-7 flex items-center justify-center gap-2.5">
                <div>
                  <p className="text-sm text-text font-medium">{testimonials[0].name}</p>
                  <p className="text-xs text-text-faint">{testimonials[0].role}</p>
                </div>
                <AttributionLink t={testimonials[0]} />
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.08}>
                <div className="rounded-lg border border-border bg-surface p-6 flex flex-col h-full">
                  <Quote size={18} className="text-accent-teal mb-4" />
                  <blockquote className="text-sm text-text-muted leading-relaxed flex-1">
                    {t.quote.split("\n\n").map((para, j) => (
                      <p key={j} className={j > 0 ? "mt-3" : ""}>
                        {para}
                      </p>
                    ))}
                  </blockquote>
                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text">{t.name}</p>
                      <p className="text-xs text-text-faint">{t.role}</p>
                    </div>
                    <AttributionLink t={t} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

import { ReactNode } from "react";
import Reveal from "@/components/shared/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  action,
  className = "",
}: {
  eyebrow: string;
  title: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`mb-12 flex items-end justify-between flex-wrap gap-4 ${className}`}>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest2 text-accent-teal mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-text text-balance">
          {title}
        </h2>
      </div>
      {action}
    </Reveal>
  );
}

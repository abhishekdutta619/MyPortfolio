export default function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`mb-12 ${className}`}>
      <p className="font-mono text-xs uppercase tracking-widest2 text-accent-teal mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-medium text-text text-balance">
        {title}
      </h2>
    </div>
  );
}

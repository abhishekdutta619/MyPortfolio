export default function MetricChip({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const isPositive = value.trim().startsWith("+");

  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2">
      <span
        className={`font-mono text-sm font-medium ${
          isPositive ? "text-accent-teal" : "text-accent-amber"
        }`}
      >
        {value}
      </span>
      <span className="text-xs text-text-muted whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

import { User } from "lucide-react";

// PLACEHOLDER: once a real photo is uploaded, replace the icon fallback
// below with next/image, e.g.:
//
//   import Image from "next/image";
//   <Image src="/images/headshot.jpg" alt={profile.name} fill className="object-cover" />
//
// Only needs updating here — both Hero and About pull from this one file.
export default function PhotoFrame({
  className = "",
  iconSize = 48,
}: {
  className?: string;
  iconSize?: number;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface flex items-center justify-center overflow-hidden ${className}`}
    >
      <User size={iconSize} className="text-text-faint" strokeWidth={1.5} />
    </div>
  );
}

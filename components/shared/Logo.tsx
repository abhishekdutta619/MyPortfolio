import { profile } from "@/lib/data/profile";

export default function Logo({
  full = false,
  className = "",
}: {
  /** Full brand name ("Abhishek Dutta.") vs compact ("Abhishek.") for tight spaces like the nav */
  full?: boolean;
  className?: string;
}) {
  return (
    <span className={`font-display tracking-tight ${className}`}>
      {full ? profile.brandName : profile.shortName}
      <span className="text-accent-teal">.</span>
    </span>
  );
}

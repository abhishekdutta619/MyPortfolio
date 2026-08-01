import Image from "next/image";
import { profile } from "@/lib/data/profile";

export default function PhotoFrameHero({
  src,
  className = "",
  sizes = "(max-width: 768px) 100vw, 320px",
}: {
  src: string;
  className?: string;
  sizes?: string;
}) {
  return (
    // w-full h-full (not a hardcoded px size) -- respects whatever size the
    // caller's className sets via max-w-*, so it actually shrinks on mobile.
    // No bg fill here either -- transparent, so it shows the real page
    // background instead of a slightly-mismatched near-black rectangle.
    <div className={`relative flex items-center justify-center w-full h-full ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[85%] h-[85%] rounded-full border-2 border-[#162728]" />
        <div className="absolute w-[65%] h-[65%] rounded-full border-2 border-[#1B3032]" />
        <div className="absolute w-[50%] h-[50%] rounded-full bg-[#1C3132]" />
      </div>

      <div className="relative z-10 w-full h-full">
        <Image
          src={src}
          alt={profile.name}
          fill
          sizes={sizes}
          className="object-contain object-bottom"
          priority={false}
        />
      </div>

      {/* Badge: normal flex flow (icon stacked above label), not nested
          absolute-in-absolute with guessed pixel offsets -- can't misalign
          since there's nothing to misalign, the layout engine places it. */}
      <div className="absolute bottom-4 right-2 z-20 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-accent-teal text-bg flex items-center justify-center text-lg font-bold shadow-lg shrink-0">
          {profile.yearsExperience}
        </div>
        <p className="mt-1.5 text-text-muted font-medium text-xs leading-tight text-center whitespace-nowrap">
          Years of
          <br />
          experience
        </p>
      </div>
    </div>
  );
}

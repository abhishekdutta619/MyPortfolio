import Image from "next/image";
import { profile } from "@/lib/data/profile";

// Hand-drawn blob (fill + slightly offset stroke for depth) -- kept as-is,
// it rendered cleanly with no self-intersections. Only the sizing was fixed:
// every dimension below is relative to the parent (w-full/h-full or %),
// so it actually respects whatever size the caller's className sets,
// instead of fighting it with hardcoded pixels.
export default function PhotoFrameAbout({
  src,
  className = "",
  sizes = "(max-width: 768px) 100vw, 320px",
}: {
  src: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center w-full h-full ${className}`}>
      <div className="absolute w-[70%] h-[70%] rounded-full bg-[#52D2BA]/10 blur-[60px]" />

      <svg viewBox="0 0 420 420" className="absolute inset-0 w-full h-full">
        <path
          d="M205 55 C255 25 340 55 355 120 C390 155 390 250 350 305
             C320 355 245 380 180 365 C120 350 70 315 55 255
             C40 200 55 120 95 80 C135 40 170 55 205 55 Z"
          fill="#1C3132"
        />
        <path
          d="M190 42 C260 10 355 40 372 120 C400 185 390 285 345 335
             C290 390 195 390 125 360 C65 330 35 255 45 180
             C55 110 95 55 160 42 C170 40 180 40 190 42 Z"
          fill="none"
          stroke="#52D2BA"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>

      {/* Square container matching the source photos' actual 800x800 aspect --
          the old 280x360 box would letterbox a square image inside a
          taller-than-wide frame. */}
      <div className="relative z-10 w-full h-full">
        <Image
          src={src}
          alt={profile.name}
          fill
          sizes={sizes}
          className="object-contain"
          priority={false}
        />
      </div>
    </div>
  );
}

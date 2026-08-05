interface SimpleIconData {
  path: string;
  hex: string;
  title: string;
}

// Angular (#0F0F11) and Prisma (#2D3748) are both near-black -- computed
// contrast against our chip background (#12151B) came out to 1.05 and 1.52,
// both well below usable. Rather than override their actual brand color
// (which would make them unrecognizable), these two get a small light
// backing behind the glyph -- the same pattern real sites use for dark
// logos on dark UI.
const NEEDS_LIGHT_BACKING = new Set(["Angular", "Prisma"]);

export default function TechIcon({ icon, size = 13 }: { icon: SimpleIconData; size?: number }) {
  const needsBacking = NEEDS_LIGHT_BACKING.has(icon.title);

  const svg = (
    <svg
      viewBox="0 0 24 24"
      width={needsBacking ? size - 3 : size}
      height={needsBacking ? size - 3 : size}
      aria-hidden="true"
    >
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );

  if (needsBacking) {
    return (
      <span
        className="inline-flex items-center justify-center rounded-full bg-[#EDEFF2] shrink-0"
        style={{ width: size + 3, height: size + 3 }}
      >
        {svg}
      </span>
    );
  }

  return <span className="inline-flex shrink-0">{svg}</span>;
}

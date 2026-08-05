import Image from "next/image";
import TechIcon from "./TechIcon";
import type { SkillItem } from "@/lib/data/skills";

interface SkillIconProps {
  item: SkillItem;
  size?: number;
}

export default function SkillIcon({
  item,
  size = 13,
}: SkillIconProps) {
  if (item.icon) {
    return <TechIcon icon={item.icon} size={size} />;
  }

  if (item.svg) {
    return (
      <Image
        src={item.svg}
        alt={item.name}
        width={size}
        height={size}
      />
    );
  }

  return null;
}
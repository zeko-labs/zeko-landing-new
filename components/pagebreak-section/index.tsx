import Image from "next/image";
import { HeroSectionCard } from "../hero-section/SectionCard";

export const PageBreakSection = () => {
  return (
    <div className="w-full object-cover page-break-back pt-20">
      <HeroSectionCard />
    </div>
  );
};

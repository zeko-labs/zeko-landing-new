import Image from "next/image";
import { HeroSectionCard } from "../hero-section/SectionCard";

export const PageBreakSection = () => {
  return (
    <div className="w-full object-cover page-break-back pt-20">
      {/* <Image
        src="/third-back.svg"
        alt="Page Break Background"
        width={1440}
        height={500}
        className="w-full"
      /> */}
      <HeroSectionCard />
    </div>
  );
};

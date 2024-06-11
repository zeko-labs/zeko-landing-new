import Image from "next/image";
import { HeroSectionCard } from "../hero-section/SectionCard";

export const PageBreakSection = () => {
  return (
    <div className="w-full object-cover pt-20 relative">
      <div className="w-full h-full absolute top-0 z-0">
        <video autoPlay loop muted className="w-screen h-full object-cover">
          <source src="/background.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <HeroSectionCard />
    </div>
  );
};

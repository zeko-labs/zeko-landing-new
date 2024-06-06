import Image from "next/image";
import { HeroSectionCard } from "./SectionCard";
import { HeroSectionText } from "./SectionText";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-[120%] absolute top-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-screen h-full object-cover -mt-20"
        >
          <source src="/background.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full h-full flex flex-col justify-between z-10 pt-10 pb-10 sm:items-center lg:items-start">
        <Image
          src={"./logo.svg"}
          alt=""
          width={180}
          height={100}
          className="lg:pl-20 sm:pl-0 z-10 lg:w-60 sm:w-28"
        />
        <HeroSectionText />
        {/* <HeroSectionCard /> */}
      </div>
    </div>
  );
};

import Image from "next/image";
import { HeroSectionText } from "./SectionText";
import { Button } from "@nextui-org/button";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="w-full absolute top-0 z-10">
        <video
          autoPlay
          loop
          muted
          className="w-screen videoscreen object-cover -mt-20"
        >
          <source src="/background.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full h-full flex flex-col justify-between z-10 pt-10 pb-20 sm:items-center lg:items-start">
        <Image
          src={"./logo.svg"}
          alt=""
          width={180}
          height={100}
          className="lg:pl-20 sm:pl-0 z-10 lg:w-60 sm:w-28"
        />
        <HeroSectionText />
        <div className="lg:pl-20 sm:px-5 lg:pt-10 sm:py-10 z-10 flex lg:flex-row sm:flex-col gap-10">
          <Button className="text-lg">Start Building</Button>
          <Button className="text-lg">Try Testnet</Button>
        </div>
      </div>
    </div>
  );
};

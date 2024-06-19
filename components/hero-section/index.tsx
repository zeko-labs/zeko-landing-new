import Image from "next/image";
import { HeroSectionText } from "./SectionText";
import { Footer } from "../footer";
import { fontLexend, fontLexendBold, fontLexendLight } from "@/config/fonts";
import { Link } from "@nextui-org/link";

export const HeroSection = () => {
  return (
    <div className="relative w-full lg:h-screen sm:h-full">
      <div className="w-full h-[110%] absolute top-0 z-0">
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
      <div className="w-full lg:h-[90%] sm:h-full flex flex-col justify-between z-10 gap-16 sm:items-center lg:items-start">
        <Image
          src={"./logo.svg"}
          alt=""
          width={180}
          height={100}
          className="lg:pl-20 sm:pl-0 z-10 lg:w-60 sm:w-28"
        />
        <HeroSectionText />
        <div className="w-full flex flex-col gap-10">
          <div className="lg:pl-20 sm:px-5 z-10 flex lg:flex-row sm:flex-col gap-10">
            <Link className="text-black" href="https://docs.zeko.io" isExternal>
              <div className={`heroBtn`}>Start Building</div>
            </Link>
            <Link className="text-black" href="/faucet" isExternal>
              <div className={`heroBtn`}>Try Testnet</div>
            </Link>
          </div>
        </div>
        <Footer isOnLandingPage={true} />
      </div>
    </div>
  );
};

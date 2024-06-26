import Image from "next/image";
import { HeroSectionText } from "./SectionText";
import { Footer } from "../footer";
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
      <div className="w-full lg:h-[90%] sm:h-full flex flex-col justify-between z-10 lg:gap-16 sm:gap-8 sm:items-center lg:items-start pt-10 mb-5">
        <Image
          src={"./logo.svg"}
          alt=""
          width={180}
          height={100}
          className="lg:pl-20 sm:pl-0 z-10 lg:w-60 sm:w-36"
        />
        <HeroSectionText />
        <div className="w-full flex flex-col gap-10 lg:items-start sm:items-center ">
          <div className="lg:pl-20 sm:px-5 z-10 flex lg:gap-10 sm:gap-3">
            <div>
              <Link
                className="text-black"
                href="https://docs.zeko.io"
                isExternal
              >
                <div className="heroBtn lg:w-[150px] sm:w-[120px]">
                  Start Building
                </div>
              </Link>
            </div>
            <div>
              <Link className="text-black" href="/faucet" isExternal>
                <div className="heroBtn lg:w-[150px] sm:w-[120px]">
                  Try Testnet
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer isOnLandingPage={true} />
      </div>
    </div>
  );
};

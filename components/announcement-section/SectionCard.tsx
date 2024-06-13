import { useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { card } from "@/components/primitives";
import Image from "next/image";

import Carousal from "@itseasy21/react-elastic-carousel";
import { Link } from "@nextui-org/link";
import { Footer } from "../footer";
import ScrollAnimation from "react-animate-on-scroll";

interface CarouselRef {
  goTo: (index: number) => void;
}

export const AnnouncementSectionCard = () => {
  const [cardPage, setCardPage] = useState(0);
  const carouselRef = useRef(null);

  const goToItem = (type: number) => {
    console.log(cardPage);
    switch (type) {
      case 0:
        (carouselRef.current as any).slidePrev();
        setCardPage(cardPage - 1);
        break;
      default:
        (carouselRef.current as any).slideNext();
        setCardPage(cardPage + 1);
        break;
    }
  };

  return (
    // <div className="flex flex-col mb-40">
    <div className="flex sm:flex-col lg:flex-row justify-between lg:gap-10 w-full top-0 lg:p-24 sm:p-5 cardImgBack items-center">
      <div className="w-full h-[800px] absolute top-0 z-0 left-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-screen lg:h-[900px] sm:h-[800px] object-cover"
        >
          <source src="/background.webm" />
          Your browser does not support the video tag.
        </video>
        <div className="justify-evenly text-sm border-t-1 border-black absolute bottom-0 lg:flex sm:hidden w-full">
          <div className="flex justify-evenly w-full items-center">
            <div>© 2024 ZekoLabs.</div>
            <div>All Rights Reserved.</div>
          </div>
          <Footer isOnLandingPage={false} />
          <div className="flex justify-evenly w-full">
            <Link href="#" className="text-sm text-black">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-black">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="relative lg:flex sm:hidden">
        <ScrollAnimation
          animateOnce={true}
          initiallyVisible={true}
          animateIn="hide"
          delay={0}
          className="flex flex-col gap-5 justify-between rounded-2xl anime announceCard-1"
        >
          <img src="./cardImg-1.svg" alt="" />
          <div>
            <div className="text-2xl w-[300px]">
              Zekoscan & Auro Wallet Intergrations
            </div>
            <div className="text-sm pt-1">
              Ready-made Explorer and Leading Wallet
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="show"
          delay={0}
          className="absolute top-0 flex flex-col gap-5 justify-between rounded-2xl anime announceCard-2 hide"
        >
          <img src="./cardImg-1.svg" alt="" />
          <div>
            <div className="text-2xl w-[300px]">
              Zekoscan & Auro Wallet Intergrations
            </div>
            <div className="text-sm pt-1">
              Ready-made Explorer and Leading Wallet
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="relative lg:flex sm:hidden">
        <ScrollAnimation
          animateOnce={true}
          initiallyVisible={true}
          animateIn="hide"
          delay={1000}
          className="flex flex-col gap-5 justify-between rounded-2xl anime announceCard-1"
        >
          <img src="./cardImg-2.svg" alt="" />
          <div>
            <div className="text-2xl">Meet the Core Team</div>
            <div className="text-sm pt-1">
              ZekoLabs Expands for a Resounding Experience
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="show"
          delay={1000}
          className="absolute top-0 flex flex-col gap-5 justify-between rounded-2xl anime announceCard-2 hide"
        >
          <img src="./cardImg-2.svg" alt="" />
          <div>
            <div className="text-2xl">Meet the Core Team</div>
            <div className="text-sm pt-1">
              ZekoLabs Expands for a Resounding Experience
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="relative lg:flex sm:hidden">
        <ScrollAnimation
          animateOnce={true}
          initiallyVisible={true}
          animateIn="hide"
          delay={2000}
          className="flex flex-col gap-5 justify-between rounded-2xl anime announceCard-1"
        >
          <img src="./cardImg-3.svg" alt="" />
          <div>
            <div className="text-2xl">Compatiable with o1js</div>
            <div className="text-sm pt-1">
              Feature-rich SDK for zk community
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="show"
          delay={2000}
          className="absolute top-0 flex flex-col gap-5 justify-between rounded-2xl anime announceCard-2 hide"
        >
          <img src="./cardImg-3.svg" alt="" />
          <div>
            <div className="text-2xl">Compatiable with o1js</div>
            <div className="text-sm pt-1">
              Feature-rich SDK for zk community
            </div>
          </div>
        </ScrollAnimation>
      </div>
      <div className="lg:hidden sm:flex w-full">
        <Carousal
          itemPadding={[0, 10, 0, 10]}
          isRTL={false}
          ref={carouselRef}
          showArrows={false}
          onChange={(e) => setCardPage(e.index)}
        >
          <div className="flex flex-col justify-between">
            <div className="relative">
              <div className="flex flex-col gap-5 justify-between rounded-2xl announceCard-2">
                <img src="./cardImg-1.svg" alt="" />
                <div>
                  <div className="lg:text-2xl sm:text-xl">
                    Zekoscan & Auro Wallet Intergrations
                  </div>
                  <div className="text-sm pt-1">
                    Ready-made Explorer and Leading Wallet
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="relative">
              <div className="flex flex-col gap-5 justify-between rounded-2xl announceCard-2">
                <img src="./cardImg-2.svg" alt="" />
                <div>
                  <div className="text-2xl">Meet the Core Team</div>
                  <div className="text-sm pt-1">
                    ZekoLabs Expands for a Resounding Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="relative ">
              <div className="flex flex-col gap-5 justify-between rounded-2xl announceCard-2">
                <img src="./cardImg-3.svg" alt="" />
                <div>
                  <div className="text-2xl">Compatiable with o1js</div>
                  <div className="text-sm pt-1">
                    Feature-rich SDK for zk community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousal>
      </div>
      <div className="cd:w-[400px] sm:w-full cd:px-0 sm:px-2 flex justify-between lg:hidden sm:flex mt-5">
        <Button
          radius="full"
          className={`float-right ${cardPage === 0 ? "invisible" : ""}`}
          isIconOnly={true}
          variant="bordered"
          size="lg"
          onClick={() => goToItem(0)}
        >
          <Image src="/utils/back_btn.png" alt="back" width={30} height={30} />
        </Button>
        <Button
          radius="full"
          className={`float-right ${cardPage === 2 ? "invisible" : ""}`}
          isIconOnly={true}
          variant="bordered"
          size="lg"
          onClick={() => goToItem(1)}
        >
          <Image src="/utils/next_btn.png" alt="back" width={30} height={30} />
        </Button>
      </div>
    </div>

    // </div>
  );
};

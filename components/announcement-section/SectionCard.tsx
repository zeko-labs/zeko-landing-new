import { useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { card } from "@/components/primitives";
import { Image } from "@nextui-org/react";

import Carousal from "@itseasy21/react-elastic-carousel";
import { Link } from "@nextui-org/link";
import { Footer } from "../footer";
import ScrollAnimation from "react-animate-on-scroll";

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
    <div className="flex sm:flex-col lg:flex-row justify-between lg:gap-10 w-full top-0 lg:p-28 lg:pt-32 sm:p-5 cardImgBack items-center">
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
        <div className="w-full text-center top-8 absolute text-4xl pb-5 border-b-1 text-default-600">
          <b>What&apos;s New</b>
        </div>
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
        <div className="justify-evenly text-sm border-t-1 border-black absolute bottom-5 lg:hidden sm:flex w-full">
          <div className="flex justify-evenly w-full items-center pt-5">
            <div>© 2024 ZekoLabs.</div>
            <div>All Rights Reserved.</div>
          </div>
        </div>
      </div>
      <Link
        href="https://x.com/ZekoLabs/status/1787541750917255241"
        isExternal
        className="text-black"
      >
        <div className="relative lg:flex sm:hidden">
          <ScrollAnimation
            animateOnce={true}
            initiallyVisible={true}
            animateIn="hide"
            delay={0}
            className="flex flex-col gap-5 justify-between rounded-2xl anime announceCard-1 p-5"
          >
            <Image src="./card/image-1.png" alt="" width={300} height={300} />
            <div className="text-center text-default-600">
              <div className="text-xl">Zekoscan & Auro Wallet</div>
              <div className="text-sm pt-1">
                Ready-made Explorer and Leading Wallet
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="show"
            delay={0}
            className="absolute top-0 flex flex-col gap-5 justify-between rounded-2xl anime announceCard-2 hide p-5"
          >
            {/* <img src="./card/image-1.jpg" alt="" /> */}
            <Image src="./card/image-1.png" alt="" width={300} height={300} />
            <div className="text-center text-default-600">
              <div className="text-2xl">Zekoscan & Auro Wallet</div>
              <div className="text-sm pt-1">
                Ready-made Explorer and Leading Wallet
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </Link>
      <Link
        href="https://x.com/ZekoLabs/status/1785724030861127849"
        isExternal
        className="text-black"
      >
        <div className="relative lg:flex sm:hidden">
          <ScrollAnimation
            animateOnce={true}
            initiallyVisible={true}
            animateIn="hide"
            delay={1000}
            className="flex flex-col gap-5 justify-between rounded-2xl anime announceCard-1 p-5"
          >
            {/* <img src="./card/image-2.png" alt="" /> */}
            <Image src="./card/image-2.png" alt="" width={300} height={300} />
            <div className="text-center text-default-600">
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
            className="absolute top-0 flex flex-col gap-5 justify-between rounded-2xl anime announceCard-2 hide p-5"
          >
            {/* <img src="./card/image-2.png" alt="" /> */}
            <Image src="./card/image-2.png" alt="" width={300} height={300} />
            <div className="text-center text-default-600">
              <div className="text-2xl">Meet the Core Team</div>
              <div className="text-sm pt-1">
                ZekoLabs Expands for a Resounding Experience
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </Link>
      <Link
        href="https://medium.com/zekoprotocol/zeko-labs-announces-3-million-in-funding-to-propel-development-of-zeko-protocol-e3d2c45bea3e"
        isExternal
        className="text-black"
      >
        <div className="relative lg:flex sm:hidden">
          <ScrollAnimation
            animateOnce={true}
            initiallyVisible={true}
            animateIn="hide"
            delay={2000}
            className="flex flex-col gap-5 justify-between rounded-2xl anime announceCard-1 p-5"
          >
            {/* <img src="./card/image-3.jpg" alt="" /> */}
            <Image src="./card/image-3.png" alt="" width={300} height={300} />
            <div className="text-center text-default-600">
              <div className="text-2xl">Successful Fundraise</div>
              <div className="text-sm pt-1">A Milestone for Zeko Protocol</div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="show"
            delay={2000}
            className="absolute top-0 flex flex-col gap-5 justify-between rounded-2xl anime announceCard-2 hide p-5"
          >
            {/* <img src="./card/image-3.jpg" alt="" /> */}
            <Image src="./card/image-3.png" alt="" width={300} height={300} />
            <div className="text-center text-default-600">
              <div className="text-2xl">Successful Fundraise</div>
              <div className="text-sm pt-1">A Milestone for Zeko Protocol</div>
            </div>
          </ScrollAnimation>
        </div>
      </Link>
      <div className="lg:hidden sm:flex w-full pt-20">
        <Carousal
          itemPadding={[0, 10, 0, 10]}
          isRTL={false}
          ref={carouselRef}
          showArrows={false}
          onChange={(e) => setCardPage(e.index)}
        >
          <Link
            href="https://x.com/ZekoLabs/status/1787541750917255241"
            isExternal
            className="text-black"
          >
            <div className="flex flex-col justify-between">
              <div className="relative">
                <div className="flex flex-col gap-5 justify-between rounded-2xl announceCard-2 p-5">
                  <Image
                    src="./card/image-1.png"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <div className=" text-default-600">
                    <div className="lg:text-2xl sm:text-xl">
                      Zekoscan & Auro Wallet
                    </div>
                    <div className="text-sm pt-1">
                      Ready-made Explorer and Leading Wallet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="https://x.com/ZekoLabs/status/1785724030861127849"
            isExternal
            className="text-black"
          >
            <div className="flex flex-col justify-between">
              <div className="relative">
                <div className="flex flex-col gap-5 justify-between rounded-2xl announceCard-2 p-5">
                  <Image
                    src="./card/image-2.png"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <div className=" text-default-600">
                    <div className="text-2xl">Meet the Core Team</div>
                    <div className="text-sm pt-1">
                      ZekoLabs Expands for a Resounding Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="https://medium.com/zekoprotocol/zeko-labs-announces-3-million-in-funding-to-propel-development-of-zeko-protocol-e3d2c45bea3e"
            isExternal
            className="text-black"
          >
            <div className="flex flex-col justify-between">
              <div className="relative ">
                <div className="flex flex-col gap-5 justify-between rounded-2xl announceCard-2 p-5">
                  <Image
                    src="./card/image-3.png"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <div className=" text-default-600">
                    <div className="text-2xl">Successful Fundraise</div>
                    <div className="text-sm pt-1">
                      A Milestone for Zeko Protocol
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
  );
};

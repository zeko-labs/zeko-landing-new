import { useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { card } from "@/components/primitives";
import Image from "next/image";

import Carousal from "@itseasy21/react-elastic-carousel";

export const AnnouncementSectionCard = () => {
  const [cardPage, setCardPage] = useState(0);
  const carouselRef = useRef(null);

  const goToItem = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(index);
    }
  };

  return (
    <div className="flex sm:flex-col lg:flex-row justify-between gap-10 w-full absolute top-0 lg:p-24 sm:p-5 cardImgBack">
      <div className="w-full h-full absolute top-0 z-0 left-0">
        <video autoPlay loop muted className="w-screen h-full object-cover">
          <source src="/background.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative lg:flex sm:hidden">
        <div
          style={card}
          className="flex flex-col gap-5 justify-between rounded-2xl"
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
        </div>
      </div>
      <div className="relative lg:flex sm:hidden">
        <div
          style={card}
          className="flex flex-col gap-5 justify-between rounded-2xl"
        >
          <img src="./cardImg-2.svg" alt="" />
          <div>
            <div className="text-2xl">Meet the Core Team</div>
            <div className="text-sm pt-1">
              ZekoLabs Expands for a Resounding Experience
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:flex sm:hidden">
        <div
          style={card}
          className="flex flex-col gap-5 justify-between rounded-2xl"
        >
          <img src="./cardImg-3.svg" alt="" />
          <div>
            <div className="text-2xl">Compatiable with o1js</div>
            <div className="text-sm pt-1">
              Feature-rich SDK for zk community
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden sm:flex w-full">
        <Carousal isRTL={false} ref={carouselRef} showArrows={false}>
          <div className="flex flex-col h-[600px] justify-between">
            <div className="relative">
              <div
                style={card}
                className="flex flex-col gap-5 justify-between rounded-2xl"
              >
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
            <div className="w-full lg:hidden sm:block lg:mt-5 sm:mt-7">
              <Button
                radius="full"
                className="float-right"
                isIconOnly={true}
                variant="bordered"
                size="lg"
                onClick={() => goToItem(1)}
              >
                <Image
                  src="/utils/next_btn.png"
                  alt="next"
                  width={30}
                  height={30}
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-[600px] justify-between">
            <div className="relative">
              <div
                style={card}
                className="flex flex-col gap-5 justify-between rounded-2xl"
              >
                <img src="./cardImg-2.svg" alt="" />
                <div>
                  <div className="text-2xl">Meet the Core Team</div>
                  <div className="text-sm pt-1">
                    ZekoLabs Expands for a Resounding Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between lg:hidden sm:flex mt-5">
              <Button
                radius="full"
                className="float-right"
                isIconOnly={true}
                variant="bordered"
                size="lg"
                onClick={() => goToItem(0)}
              >
                <Image
                  src="/utils/back_btn.png"
                  alt="back"
                  width={30}
                  height={30}
                />
              </Button>
              <Button
                radius="full"
                className="float-right"
                isIconOnly={true}
                variant="bordered"
                size="lg"
                onClick={() => goToItem(2)}
              >
                <Image
                  src="/utils/next_btn.png"
                  alt="next"
                  width={30}
                  height={30}
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-[600px] justify-between">
            <div className="relative ">
              <div
                style={card}
                className="flex flex-col gap-5 justify-between rounded-2xl"
              >
                <img src="./cardImg-3.svg" alt="" />
                <div>
                  <div className="text-2xl">Compatiable with o1js</div>
                  <div className="text-sm pt-1">
                    Feature-rich SDK for zk community
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between lg:hidden sm:flex mt-5">
              <Button
                radius="full"
                className="float-right"
                isIconOnly={true}
                variant="bordered"
                size="lg"
                onClick={() => goToItem(1)}
              >
                <Image
                  src="/utils/back_btn.png"
                  alt="back"
                  width={30}
                  height={30}
                />
              </Button>
            </div>
          </div>
        </Carousal>
      </div>
    </div>
  );
};

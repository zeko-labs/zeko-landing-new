import { useState } from "react";
import { Button } from "@nextui-org/button";
import { card } from "@/components/primitives";
import Image from "next/image";

export const FifthSectionCard = () => {
  const [cardPage, setCardPage] = useState(1);
  return (
    <div className="flex sm:flex-col lg:flex-row justify-between gap-10 w-full absolute top-0 lg:p-24 sm:p-10 cardImgBack">
      <div className="w-full h-full absolute top-0 z-0 left-0">
        <video autoPlay loop muted className="w-screen h-full object-cover">
          <source src="/background.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className={`flex-col gap-5 lg:flex sm:${
          cardPage === 1 ? "flex" : "hidden"
        }`}
      >
        <div className="relative">
          <div
            style={card}
            className="flex flex-col gap-5 justify-between rounded-2xl"
          >
            <img src="./cardImg-1.svg" alt="" />
            <div>
              <div className="text-xl">
                Zekoscan & Auro Wallet Intergrations
              </div>
              <div className="text-sm pt-1">
                Ready-made Explorer and Leading Wallet
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden sm:block mt-5">
          <Button
            radius="full"
            className="float-right"
            isIconOnly={true}
            variant="bordered"
            size="lg"
            onClick={() => setCardPage(2)}
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
      <div
        className={`flex-col gap-5 lg:flex sm:${
          cardPage === 2 ? "flex" : "hidden"
        }`}
      >
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
            onClick={() => setCardPage(1)}
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
            onClick={() => setCardPage(3)}
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
      <div
        className={`flex-col gap-5 lg:flex sm:${
          cardPage === 3 ? "flex" : "hidden"
        }`}
      >
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
            onClick={() => setCardPage(2)}
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
    </div>
  );
};

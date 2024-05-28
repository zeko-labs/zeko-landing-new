"use client";

import { title, subtitle, card, card_2 } from "@/components/primitives";
import { fontLexend, fontLexendBold, fontLexendLight } from "@/config/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@/styles/cardAnimation.css";
import { BtnCircle } from "@/components/BtnCircle";
import { Button } from "@nextui-org/button";
import { ServiceBtnTemplate } from "@/components/ServiceBtnTemplate";

export default function Home() {
  const [showCard, setShowCard] = useState(0);
  const handleMouseOver = () => {
    if (showCard === 0) setShowCard(1);
  };

  const [cardPage, setCardPage] = useState(1);

  useEffect(() => {
    if (showCard && showCard < 4) {
      setTimeout(() => setShowCard(showCard + 1), 500);
    }
  }, [showCard]);
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="relative w-full h-full bg-gradient-to-t from-slate-300 to-slate-300 pb-32">
        <div className="w-screen h-screen -z-10 -mt-32">
          <video autoPlay loop muted className="w-full h-[120%] object-cover">
            <source src="/background.webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute top-0 w-full">
          <Image
            src={"./logo.svg"}
            alt=""
            width={180}
            height={40}
            className="pl-[5%]"
          />
          <div className="pl-[5%] lg:pt-[10%] md:py-5">
            <div
              className={`inline-block max-w-3xl justify-center ${fontLexendLight.className}`}
            >
              <h1 className={`${title()} ${fontLexend.className}`}>
                Decentralized Trust,{" "}
                <strong className={fontLexendBold.className}>Amplified</strong>
              </h1>
              <h2 className={subtitle({ class: "mt-16 max-w-xl" })}>
                Zeko is a{" "}
                <strong className={fontLexendBold.className}>
                  zero-knowledge, cross-chain scaling protocol
                </strong>{" "}
                built on Mina and designed for developers shaping the future of
                finance, AI, gaming, and the internet
              </h2>
            </div>
          </div>
          <div className="w-full flex lg:flex-row md:flex-col items-center gap-20 justify-between p-[5%] pt-0 mt-[10%]">
            <div className="relative" onMouseEnter={handleMouseOver}>
              <div className="relative">
                <Image
                  className={`anime ${showCard > 0 ? "hide" : "show"}`}
                  src="/card/back.png"
                  alt=""
                  width={500}
                  height={500}
                />
                <Image
                  className={`absolute top-0 anime hide ${
                    showCard > 0 ? "show" : ""
                  }`}
                  src="/card/back-hover.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div
                className={`absolute w-full text-center card anime hide ${
                  showCard > 0 ? "card-show show" : ""
                }`}
              >
                Zero-knowledge is the technology of Trust and the foundation for
                building our future on blockchain
              </div>
            </div>
            <div className="relative" onMouseEnter={handleMouseOver}>
              <div
                className={`absolute w-full text-center card anime hide z-10 ${
                  showCard > 1 ? "card-show show" : ""
                }`}
              >
                Zeko is powerful zktechnology for developers scaling their apps
                to reach their booming ambitions  
              </div>
              <div className="relative">
                <Image
                  className={`anime ${showCard > 1 ? "hide" : "show"}`}
                  src="/card/back.png"
                  alt=""
                  width={500}
                  height={500}
                />
                <Image
                  className={`absolute top-0 anime hide ${
                    showCard > 1 ? "show" : ""
                  }`}
                  src="/card/back-hover.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="relative" onMouseEnter={handleMouseOver}>
              <div className="relative">
                <Image
                  className={`anime ${showCard > 2 ? "hide" : "show"}`}
                  src="/card/back.png"
                  alt=""
                  width={500}
                  height={500}
                />
                <Image
                  className={`absolute top-0 anime hide ${
                    showCard > 2 ? "show" : ""
                  }`}
                  src="/card/back-hover.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div
                className={`absolute w-full text-center card anime hide ${
                  showCard > 2 ? "card-show show" : ""
                }`}
              >
                In Zeko We Trust, We Build, We Scale
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="w-full">
          <img src="./second-back.svg" alt="" width="100%" height="auto" />
        </div>
        <div className="absolute top-0 p-[10%] text-white w-full flex flex-col justify-between h-full">
          <div className="w-72 flex flex-col gap-3">
            <hr />
            <h1 className="lg:text-4xl md:text-2xl">Problem</h1>
            <p>
              We live in a world of expanding technology and rapidly eroding
              trust.
            </p>
          </div>
          <div className="w-72 ml-auto flex flex-col gap-3">
            <hr />
            <h1 className="lg:text-4xl md:text-2xl">Solution</h1>
            <p>
              Zeko&apos;s simple zk rollup architecture seamlessly embeds trust
              into every digital interaction.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-full">
        <div className="w-full">
          <img src="./third-back.svg" alt="" width="100%" height="auto" />
        </div>
      </div> */}
      <div className="w-full p-[5%] flex justify-between bg-[#41568B] text-white md:flex-col lg:flex-row md:gap-10">
        <div className="lg:w-72 md:w-full lg:h-80 gap-5 md:h-auto flex flex-col justify-between imgCont">
          <h1 className="text-4xl w-64">Advanced Rollup</h1>
          <p>
            Zeko is a completely different type of rollup protocol. It is
            designed for developers to easily access a rich set of
            zero-knowledge features for proof generation, verification,
            recursion, and more all using typescript &gt;&gt;
          </p>
          <BtnCircle />
        </div>
        <div className="lg:w-80 lg:h-80 md:h-auto gap-5 md:w-full flex flex-col justify-between imgCont">
          <h1 className="text-4xl">Cross-Chain Revolution</h1>
          <p>
            Zeko reaches beyond the standard zkRollup or EVM L2 because it’s
            designed for any developer to recursively prove and bridge unlimited
            off-chain computation across all blockchains whilst also maintaining
            privacy over user data &gt;&gt;
          </p>
          <BtnCircle />
        </div>
        <div className="lg:w-80 lg:h-80 md:h-auto gap-5 md:w-full flex flex-col justify-between imgCont">
          <h1 className="text-4xl">Expanding Blockchain Design</h1>
          <p>
            Placing zero-knowledge proof capabilities into the hands of
            developers massively expands the design space for blockchain
            applications as we know them today &gt;&gt;
          </p>
          <BtnCircle />
        </div>
      </div>
      <div className="w-full bg-[#E0E9FD] justify-center lg:flex md:hidden">
        <div className="py-28 px-28 relative">
          <Image
            src="/utils/back-form.png"
            alt="back"
            width={800}
            height={800}
          />
          <div className="absolute top-[84px] left-[470px]">
            <ServiceBtnTemplate type="Connection" />
          </div>
          <div className="absolute top-[300px] left-[190px]">
            <ServiceBtnTemplate type="Repetition" />
          </div>
          <div className="absolute top-[700px] left-[140px]">
            <ServiceBtnTemplate type="Legion" />
          </div>
          <div className="absolute top-[880px] left-[460px]">
            <ServiceBtnTemplate type="Accessibility" />
          </div>
          <div className="absolute top-[470px] left-[730px]">
            <ServiceBtnTemplate type="Origin" />
          </div>
        </div>
      </div>
      <div className="lg:hidden md:flex flex-col gap-10 py-16">
        <ServiceBtnTemplate type="Connection" />
        <ServiceBtnTemplate type="Repetition" />
        <ServiceBtnTemplate type="Legion" />
        <ServiceBtnTemplate type="Accessibility" />
        <ServiceBtnTemplate type="Origin" />
      </div>
      <div className="w-full relative ">
        <div className="flex flex-col">
          <div className="flex md:flex-col lg:flex-row justify-between gap-10 w-full absolute top-0 p-24 cardImgBack">
            <div
              className={`flex-col gap-5 lg:flex sm:${
                cardPage === 1 ? "flex" : "hidden"
              }`}
            >
              <div className="relative">
                <div
                  style={card}
                  className="flex flex-col gap-5 justify-between"
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
              <div className="w-full lg:hidden md:block mt-5">
                <Button
                  radius="full"
                  className="w-20 h-20 float-right"
                  variant="bordered"
                  onClick={() => setCardPage(2)}
                >
                  <Image
                    src="/utils/next_btn.png"
                    alt="next"
                    width={80}
                    height={80}
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
                  className="flex flex-col gap-5 justify-between"
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
              <div className="w-full flex justify-between lg:hidden md:flex mt-5">
                <Button
                  radius="full"
                  className="w-20 h-20"
                  variant="bordered"
                  onClick={() => setCardPage(1)}
                >
                  <Image
                    src="/utils/back_btn.png"
                    alt="back"
                    width={80}
                    height={80}
                  />
                </Button>
                <Button
                  radius="full"
                  className="w-20 h-20"
                  variant="bordered"
                  onClick={() => setCardPage(3)}
                >
                  <Image
                    src="/utils/next_btn.png"
                    alt="next"
                    width={80}
                    height={80}
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
                  className="flex flex-col gap-5 justify-between"
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
              <div className="w-full flex justify-between lg:hidden md:flex mt-5">
                <Button
                  radius="full"
                  className="w-20 h-20"
                  variant="bordered"
                  onClick={() => setCardPage(2)}
                >
                  <Image
                    src="/utils/back_btn.png"
                    alt="back"
                    width={80}
                    height={80}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

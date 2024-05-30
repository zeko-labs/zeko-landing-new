"use client";

import { title, subtitle, card } from "@/components/primitives";
import { fontLexend, fontLexendBold, fontLexendLight } from "@/config/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@/styles/cardAnimation.css";
import "@/styles/animeProSol.css";
import { BtnCircle } from "@/components/BtnCircle";
import { Button } from "@nextui-org/button";
import { ServiceBtnTemplate } from "@/components/ServiceBtnTemplate";

export default function Home() {
  const [showCard, setShowCard] = useState(0);

  const [cardPage, setCardPage] = useState(1);

  useEffect(() => {
    if (!showCard) {
      setTimeout(() => {
        setShowCard(1);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (showCard && showCard < 4) {
      setTimeout(() => setShowCard(showCard + 1), 500);
    }
  }, [showCard]);
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="relative w-full lg:h-screen sm:h-full bg-gradient-to-t from-slate-300 to-slate-300">
        <div className="w-full h-full absolute top-0 z-0">
          <video autoPlay loop muted className="w-screen h-full object-cover">
            <source src="/background.webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full flex flex-col justify-between h-full z-10 pt-10 pb-10 sm:items-center lg:items-start">
          <Image
            src={"./logo.svg"}
            alt=""
            width={180}
            height={100}
            className="lg:pl-20 sm:pl-0 z-10 lg:w-60 sm:w-28"
          />
          <div className="lg:pl-20 sm:px-5 lg:pt-20 sm:py-10 z-10">
            <div
              className={`inline-block max-w-3xl justify-center lg:text-left sm:text-center ${fontLexendLight.className}`}
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
          <div className="w-full flex lg:flex-row sm:flex-col items-center lg:gap-20 sm:gap-10 justify-between p-20 lg:px-20 sm:px-10 pt-0">
            <div className="relative">
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
                className={`absolute w-full card anime hide ${
                  showCard > 0 ? "card-show show" : ""
                }`}
              >
                <div className="px-5">
                  <b>Zero-knowledge</b> is the technology of Trust and the
                  foundation for building our future on blockchain
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className={`absolute w-full card anime hide z-10 ${
                  showCard > 1 ? "card-show show" : ""
                }`}
              >
                <div className="px-5">
                  Zeko is <b>powerful zktechnology</b> for developers scaling
                  their apps to reach their booming ambitions  
                </div>
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
            <div className="relative">
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
                className={`absolute w-full card anime hide ${
                  showCard > 2 ? "card-show show" : ""
                }`}
              >
                <div className="px-5 pb-5">
                  In Zeko We <b>Trust, </b>
                  We <b>Build, </b>
                  We <b>Scale</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#41568B]">
        <div className="w-full h-full top-0 absolute object-cover z-0">
          <img src="./second-back.svg" alt="" width="100%" className="h-full" />
        </div>
        <div className="text-white flex flex-col justify-evenly p-[10%] gap-20">
          <div className="lg:w-72 sm:w-52 flex flex-col gap-3 z-10">
            <div className={`line ${showCard ? "visible" : ""}`}></div>
            <h1
              className={`lg:text-4xl sm:text-2xl ${
                showCard ? "pro-sol-text" : "pro-sol-invisible"
              }`}
            >
              Problem
            </h1>
            <p className={`${showCard ? "pro-sol-text" : "pro-sol-invisible"}`}>
              We live in a world of expanding technology and rapidly eroding
              trust.
            </p>
          </div>
          <div className="w-full z-10">
            <div className="lg:w-72 sm:w-52 float-right flex flex-col gap-3">
              <div className={`line ${showCard ? "visible" : ""}`}></div>
              <h1
                className={`lg:text-4xl sm:text-2xl ${
                  showCard ? "pro-sol-text" : "pro-sol-invisible"
                }`}
              >
                Solution
              </h1>
              <p
                className={`${showCard ? "pro-sol-text" : "pro-sol-invisible"}`}
              >
                Zeko&apos;s simple zk rollup architecture seamlessly embeds
                trust into every digital interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">
          <img src="./third-back.svg" alt="" width="100%" height="auto" />
        </div>
      </div>
      <div className="w-full h-full p-[10%] py-28 flex justify-evenly bg-[#41568B] text-white sm:flex-col lg:flex-row sm:gap-10">
        <div className="lg:w-72 sm:w-full lg:h-80 gap-5 sm:h-auto flex flex-col justify-between imgCont cursor-pointer">
          <h1 className="text-4xl w-64">
            <b>Advanced Rollup</b>
          </h1>
          <div>
            Zeko is a completely different type of rollup protocol. It is
            designed for developers to easily access a rich set of
            zero-knowledge features for proof generation, verification,
            recursion, and more{" "}
            <div className="pictureTextCont">
              <p className="pictureText">all using typescript &gt;&gt;</p>
              <p className="pictureText-2">
                all using typescript &nbsp;&nbsp;&gt;&gt;
              </p>
            </div>
          </div>
          <BtnCircle />
        </div>
        <div className="lg:w-80 lg:h-80 sm:h-auto gap-5 sm:w-full flex flex-col justify-between imgCont cursor-pointer">
          <h1 className="text-4xl">
            <b>Cross-Chain Revolution</b>
          </h1>
          <div>
            Zeko reaches beyond the standard zkRollup or EVM L2 because it’s
            designed for any developer to recursively prove and bridge unlimited
            off-chain computation across all blockchains whilst also maintaining{" "}
            <div className="pictureTextCont">
              <p className="pictureText">privacy over user data &gt;&gt;</p>
              <p className="pictureText-2">
                privacy over user data &nbsp;&nbsp;&gt;&gt;
              </p>
            </div>
          </div>
          <BtnCircle />
        </div>
        <div className="lg:w-[330px] lg:h-80 sm:h-auto gap-5 sm:w-full flex flex-col justify-between imgCont cursor-pointer">
          <h1 className="text-4xl">
            <b>Expanding Blockchain Design</b>
          </h1>
          <div>
            Placing zero-knowledge proof capabilities into the hands of
            developers massively expands the design space for blockchain
            applications{" "}
            <div className="pictureTextCont">
              <p className="pictureText">as we know them today &gt;&gt;</p>
              <p className="pictureText-2">
                as we know them today &nbsp;&nbsp;&gt;&gt;
              </p>
            </div>
          </div>
          <BtnCircle />
        </div>
      </div>
      <div className="w-full bg-[#E0E9FD] justify-center lg:flex sm:hidden">
        <div className="py-28 px-28 relative">
          <Image
            src="/utils/back-form.png"
            alt="back"
            width={800}
            height={800}
          />
          <div className="absolute top-[84px] left-[470px]">
            <ServiceBtnTemplate type="Connection" direct={0} />
          </div>
          <div className="absolute top-[300px] left-[190px]">
            <ServiceBtnTemplate type="Repetition" direct={0} />
          </div>
          <div className="absolute top-[700px] left-[140px]">
            <ServiceBtnTemplate type="Legion" direct={0} />
          </div>
          <div className="absolute top-[880px] left-[460px]">
            <ServiceBtnTemplate type="Accessibility" direct={0} />
          </div>
          <div className="absolute top-[470px] left-[730px]">
            <ServiceBtnTemplate type="Origin" direct={0} />
          </div>
        </div>
      </div>
      <div className="lg:hidden sm:flex flex-col gap-10 py-16 px-16 relative bg-[#E0E9FD]">
        <div className="w-full h-full absolute top-[300px] z-0 left-0 object-cover">
          <Image
            src="/utils/back-form.png"
            alt="Background"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <ServiceBtnTemplate type="Connection" />
        <ServiceBtnTemplate type="Repetition" direct={1} />
        <ServiceBtnTemplate type="Legion" />
        <ServiceBtnTemplate type="Accessibility" direct={1} />
        <ServiceBtnTemplate type="Origin" />
      </div>
      <div className="w-full relative h-full">
        <div className="flex flex-col">
          <div className="flex sm:flex-col lg:flex-row justify-between gap-10 w-full absolute top-0 lg:p-24 sm:p-10 cardImgBack">
            <div className="w-full h-full absolute top-0 z-0 left-0">
              <video
                autoPlay
                loop
                muted
                className="w-screen h-full object-cover"
              >
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
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import "@/styles/cardAnimation.css";
import "@/styles/animeProSol.css";
import { ServiceBtnTemplate } from "@/components/ServiceBtnTemplate";
import { FirstSectionText } from "@/components/section_1/SectionText";
import { FirstSectionCard } from "@/components/section_1/SectionCard";
import { SecondSectionText } from "@/components/section_2/SectionText";
import { ThirdSectionCard } from "@/components/section_3/SectionCard";
import { FifthSectionCard } from "@/components/section_5/SectionCard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
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
          <FirstSectionText />
          <FirstSectionCard />
        </div>
      </div>
      <div className="relative w-full bg-[#41568B]">
        <div className="w-full h-full top-0 absolute object-cover z-0">
          <Image
            src="./second-back.svg"
            alt=""
            width={1440}
            height={800}
            className="w-full h-full"
          />
        </div>
        <SecondSectionText />
      </div>
      <div className="w-full">
        <div className="w-full">
          <Image src="./third-back.svg" alt="" width={1440} height={400} />
        </div>
      </div>
      <div className="w-full h-full p-24 flex lg:flex-row sm:flex-col lg:gap-16 sm:gap-10 justify-evenly bg-[#41568B] text-white">
        <ThirdSectionCard type={0} />
        <ThirdSectionCard type={1} />
        <ThirdSectionCard type={2} />
      </div>
      <div className="w-full lg:flex sm:hidden justify-center bg-[#E0E9FD]">
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
      <div className="relative lg:hidden sm:flex flex-col gap-10 p-16 bg-[#E0E9FD]">
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
          <FifthSectionCard />
        </div>
      </div>
    </section>
  );
}

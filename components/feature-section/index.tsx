import Image from "next/image";
import { ServiceBtnTemplate } from "../ServiceBtnTemplate";

export const FeatureSection = () => {
  return (
    <>
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
      <div className="relative lg:hidden sm:flex flex-col gap-10 lg:p-16 sm:p-8 bg-[#E0E9FD] w-full">
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
    </>
  );
};

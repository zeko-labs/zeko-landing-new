import Image from "next/image";
import { ServiceBtnTemplate } from "../ServiceBtnTemplate";

export const FeatureSection = () => {
  return (
    <>
      <div className="w-full lg:flex sm:hidden justify-center bg-[#E0E9FD]">
        <div className="relative">
          <Image
            src="/utils/LinearBlueBckgd.GoldCircleswEcho.png"
            alt="back"
            width={1500}
            height={1100}
            className="w-full"
          />
          <div className="absolute top-[15%] left-[45%]">
            <ServiceBtnTemplate type="Connection" direct={0} />
          </div>
          <div className="absolute top-[30%] left-[22%]">
            <ServiceBtnTemplate type="Legion" direct={0} />
          </div>
          <div className="absolute top-[65%] left-[24%]">
            <ServiceBtnTemplate type="Scaling" direct={0} />
          </div>
          <div className="absolute top-[65%] left-[60%]">
            <ServiceBtnTemplate type="Origin" direct={0} />
          </div>
          <div className="absolute top-[40%] left-[61%]">
            <ServiceBtnTemplate type="Accessibility" direct={0} />
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
        <ServiceBtnTemplate type="Legion" direct={1} />
        <ServiceBtnTemplate type="Scaling" />
        <ServiceBtnTemplate type="Origin" direct={1} />
        <ServiceBtnTemplate type="Accessibility" />
      </div>
    </>
  );
};

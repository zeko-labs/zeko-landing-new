import Image from "next/image";
import { FeatureCard } from "./feature-card";

export const ServiceBtnTemplate = (props: any) => {
  const returnIndex = (type: any) => {
    switch (type) {
      case "Accessibility":
        return 0;
      case "Connection":
        return 1;
      case "Scaling":
        return 2;
      case "Origin":
        return 3;
      default:
        return 4;
    }
  };
  return (
    <div className="flex lg:flex-row sm:flex-col gap-5 svgWithCardCont cursor-pointer">
      <div className="svgCont w-full">
        <div className="svg-1 w-full">
          <div
            className={`flex gap-7 items-center ${
              props.direct ? "flex-row-reverse" : ""
            }`}
          >
            <Image
              src={`/service_btn/${props.type}/1.png`}
              alt="Button"
              width={80}
              height={80}
              className="lg:w-[80px] sm:w-[50px]"
            />
            <div className="text-2xl lg:w-[200px] sm:w-auto">{props.type}</div>
          </div>
        </div>
        <div className="svg-2 w-full">
          <div
            className={`flex gap-7 items-center ${
              props.direct ? "flex-row-reverse" : ""
            }`}
          >
            <Image
              src={`/service_btn/${props.type}/2.png`}
              alt="Button"
              width={80}
              height={80}
              className="lg:w-[80px] sm:w-[50px]"
            />
          </div>
        </div>
      </div>
      <FeatureCard type={returnIndex(props.type)} />
    </div>
  );
};

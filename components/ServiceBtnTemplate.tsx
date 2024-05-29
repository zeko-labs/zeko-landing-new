import Image from "next/image";

export const ServiceBtnTemplate = (props: any) => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-5 svgWithCardCont">
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
            <div className="text-2xl lg:w-[200px] sm:w-full">{props.type}</div>
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

      <Image
        src={`/service_btn/${props.type}/card.png`}
        alt="Button"
        width={300}
        height={150}
        className="svgCard lg:absolute lg:left-[110px] sm:relative sm:left-0"
      />
    </div>
  );
};

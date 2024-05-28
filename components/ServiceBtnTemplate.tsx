import Image from "next/image";

export const ServiceBtnTemplate = (props: any) => {
  return (
    <div className="flex lg:flex-row md:flex-col gap-5 svgWithCardCont">
      <div className="svgCont">
        <div className="svg-1">
          <div className="flex gap-7 items-center">
            <Image
              src={`/service_btn/${props.type}/1.png`}
              alt="Button"
              width={80}
              height={80}
            />
            <div className="text-2xl">{props.type}</div>
          </div>
        </div>
        <div className="svg-2">
          <div className="flex gap-7">
            <Image
              src={`/service_btn/${props.type}/2.png`}
              alt="Button"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>

      <Image
        src={`/service_btn/${props.type}/card.png`}
        alt="Button"
        width={300}
        height={150}
        className="svgCard"
      />
    </div>
  );
};

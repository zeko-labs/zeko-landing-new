import "@/styles/animeSVG.css";
import Image from "next/image";

export const BtnCircle = () => {
  return (
    <div className="svgCont">
      <div className="svg-1">
        <Image src="/button/card/1.png" alt="card" width={60} height={60} />
      </div>
      <div className="svg-2 absolute">
        <Image src="/button/card/2.png" alt="card" width={60} height={60} />
      </div>
    </div>
  );
};

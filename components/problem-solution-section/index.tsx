import Image from "next/image";
import { ProblemSolutionSectionText } from "./SectionText";

export const ProblemSolutionSection = () => {
  return (
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
      <ProblemSolutionSectionText />
    </div>
  );
};

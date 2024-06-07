import { BtnCircle } from "../BtnCircle";

const textList = [
  {
    title1: "Advanced",
    title2: "Rollup",
    text: "Zeko is a completely different type of rollup protocol designed for developers to easily access a rich set of zero-knowledge features for proof generation, verification, recursion, and more by ",
    goldText: "all using typescript ",
  },
  {
    title: "Cross-Chain Revolution",
    text: "Zeko reaches beyond the standard zkRollup or EVM L2 because it’s designed for any developer to recursively prove and bridge unlimited off-chain computation across all blockchains whilst also maintaining ",
    goldText: "privacy over user data ",
  },
  {
    title: "Expanding Blockchain Design",
    text: "Placing zero-knowledge proof capabilities with easy implementation into the hands of developers is a game-changer for innovative blockchain applications which massively ",
    goldText: "massively expands the design space ",
  },
];

export const ServicesSectionCard = (props: any) => {
  const { type } = props;
  return (
    <div className="lg:w-80 sm:w-full lg:h-80 gap-5 sm:h-auto flex flex-col justify-between imgCont cursor-pointer">
      <h1 className="lg:text-4xl sm:text-2xl">
        <b>
          {type === 0 ? (
            <>
              <div>{textList[type].title1}</div>
              <div>{textList[type].title2}</div>
            </>
          ) : (
            textList[type].title
          )}
        </b>
      </h1>
      <div className="pictureTextCont lg:w-[280px] sm:w-full">
        <div className="whitespace-normal break-all serviceCont">
          {textList[type].text}
          <span className="pictureText">{textList[type].goldText}&gt;&gt;</span>
        </div>
        <div className="whitespace-normal break-all serviceCont-2">
          {textList[type].text}
          <span className="pictureText-2">
            {textList[type].goldText}&nbsp;&nbsp;&gt;&gt;
          </span>
        </div>
      </div>
      <BtnCircle />
    </div>
  );
};

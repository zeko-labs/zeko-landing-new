import { BtnCircle } from "../BtnCircle";

const textList = [
  {
    title: "Advanced Rollup",
    text: "Zeko is a completely different type of rollup protocol. It is designed for developers to easily access a rich set of zero-knowledge features for proof generation, verification, recursion, and more ",
    goldText: "all using typescript ",
  },
  {
    title: "Cross-Chain Revolution",
    text: "Zeko reaches beyond the standard zkRollup or EVM L2 because it’s designed for any developer to recursively prove and bridge unlimited off-chain computation across all blockchains whilst also maintaining ",
    goldText: "privacy over user data ",
  },
  {
    title: "Expanding Blockchain Design",
    text: "Placing zero-knowledge proof capabilities into the hands of developers massively expands the design space for blockchain applications ",
    goldText: "as we know them today ",
  },
];

export const ServicesSectionCard = (props: any) => {
  const { type } = props;
  return (
    <div className="lg:w-80 sm:w-full lg:h-80 gap-5 sm:h-auto flex flex-col justify-between imgCont cursor-pointer">
      <h1 className="lg:text-4xl sm:text-2xl">
        <b>{textList[type].title}</b>
      </h1>
      <div>
        {textList[type].text}
        <div className="pictureTextCont">
          <p className="pictureText">{textList[type].goldText}&gt;&gt;</p>
          <p className="pictureText-2">
            {textList[type].goldText}&nbsp;&nbsp;&gt;&gt;
          </p>
        </div>
      </div>
      <BtnCircle />
    </div>
  );
};

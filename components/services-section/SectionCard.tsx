import { Link } from "@nextui-org/link";
import { BtnCircle } from "../BtnCircle";

const textList = [
  {
    title1: "Advanced",
    title2: "zkRollup",
    text: "Zeko is a completely different type of rollup protocol designed for developers to easily access a rich set of zero-knowledge features for proof generation, verification, recursion, and more by ",
    goldText: "simply using typescript ",
    link: "https://docs.minaprotocol.com/zkapps/o1js",
  },
  {
    title: "Cross-Chain Revolution",
    text: "Zeko is years in the making beyond the standard EVM L2: any Mina developer can recursively prove and bridge unlimited off-chain computation across all blockchains whilst preserving ",
    goldText: "privacy over user data ",
    link: "https://www.youtube.com/watch?v=rRwG8WkZYBE",
  },
  {
    title: "Expanding Blockchain Design",
    text: "Placing zero-knowledge proof capabilities with easy implementation into the hands of developers is a game-changer for innovative blockchain applications which massively ",
    goldText: "expands the design space ",
    link: "https://medium.com/zekoprotocol/introducing-zeko-protocol-mvp-empowering-ambitious-developers-to-scale-your-apps-with-typescript-3ea1fc514ae2",
  },
];

export const ServicesSectionCard = (props: any) => {
  const { type } = props;
  return (
    <Link href={textList[type].link} className="text-white" isExternal>
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
        <div className="pictureTextCont lg:w-[350px] sm:w-full">
          <div className="whitespace-normal serviceCont">
            {textList[type].text}
            <span className="pictureText">
              {textList[type].goldText}&gt;&gt;
            </span>
          </div>
          <div className="whitespace-normal serviceCont-2">
            {textList[type].text}
            <span className="pictureText-2">
              {textList[type].goldText}&nbsp;&nbsp;&gt;&gt;
            </span>
          </div>
        </div>
        <BtnCircle />
      </div>
    </Link>
  );
};

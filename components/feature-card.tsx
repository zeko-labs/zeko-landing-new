const goldenTextData = [
  {
    title: "Accessbility",
    body: "Developers can write and deploy applications today to a Zeko L2 that is isomorphic to the MinaL1, or spin up to your own custom zkAppChains.",
  },
  {
    title: "Connection",
    body: "From proof generation, recrusion, smart contract creation to decentralized storage solutions, Zeko offers everything developers need to realize the potential to bring your zkApp ideas to life.",
  },
  {
    title: "Repetition",
    body: "Through trustless zk-bridges, proofs that verify on Zeko can be consumed by the EVM, dramatically upending existing paradigms for blockchain applications.",
  },
  {
    title: "Origin",
    body: "Zeko chains will enjoy easy composability between each other and Mina itself using recursive proofs.",
  },
  {
    title: "Legion",
    body: "Placing zero-knowledge proof capabilities into the hands of developers massively expands the design space for blockchain applications as we know them today.",
  },
];

export const FeatureCard = (props: any) => {
  return (
    <div className="svgCard lg:absolute lg:left-[110px] sm:relative sm:left-0">
      <div className="lg:w-[340px] sm:w-full lg:h-[180px] sm:h-auto rounded-lg p-5 bg-opacity-50 bg-slate-100 z-20 flex flex-col justify-center">
        <div className="goldenCardText">{goldenTextData[props.type].title}</div>
        <div className="">{goldenTextData[props.type].body}</div>
      </div>
    </div>
  );
};

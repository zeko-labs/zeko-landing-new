const goldenTextData = [
  {
    title: "Accessibility",
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
    body: "Zeko enables a community of developers who innovate their decentralized applications, optimize performance, and enhance the user experience. We inspire the next generation of zk applications that will shape the future and transform our lives.",
  },
];

export const FeatureCard = (props: any) => {
  return (
    <div
      className={`svgCard lg:absolute lg:left-[110px] sm:relative sm:left-0 ${
        props.type === 4 ? "lg:-top-20" : props.type === 0 ? "lg:-top-10" : ""
      }`}
    >
      <div className="lg:w-[340px] sm:w-full h-auto rounded-lg p-5 bg-opacity-50 bg-slate-100 z-20 flex flex-col justify-center">
        <div className="text-2xl">{goldenTextData[props.type].title}</div>
        <div className="">{goldenTextData[props.type].body}</div>
      </div>
    </div>
  );
};

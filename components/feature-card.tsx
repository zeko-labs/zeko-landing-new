const goldenTextData = [
  {
    title: "Accessibility",
    body: "Developers can write and deploy applications in any programming language to an isomorphic Zeko L2, or spin up to their own custom zkAppChains.",
  },
  {
    title: "Connection",
    body: "Proof generation, recursion, smart contracts, DA solutions & more; Zeko offers everything developers need to bring their zkApp ideas to life.",
  },
  {
    title: "Scaling",
    body: "Through trustless zk-bridging, proofs that verify on Zeko can be consumed by the EVM, dramatically upending existing paradigms for blockchain applications.",
  },
  {
    title: "Origin",
    body: "Zeko chains enjoy easy composability between each other and Mina itself using recursive proofs and shared infrastructure.",
  },
  {
    title: "Legion",
    body: "Zeko is a community of builders obsessed with pioneering applications, optimizing performance, and enhancing the user experience. We shape the future and inspire the new internet.",
  },
];

export const FeatureCard = (props: any) => {
  return (
    <div
      className={`svgCard lg:absolute lg:left-[100px] lg:top-1 sm:relative sm:left-0 ${
        props.type === 4 ? "lg:top-0" : ""
      }`}
    >
      <div className="lg:w-[320px] sm:w-full h-auto rounded-lg p-5 bg-opacity-50 bg-slate-100 z-20 flex flex-col justify-center">
        <div className="text-2xl">{goldenTextData[props.type].title}</div>
        <div className="">{goldenTextData[props.type].body}</div>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";

export const SecondSectionText = () => {
  const [showCard, setShowCard] = useState(0);
  useEffect(() => {
    if (!showCard) {
      setTimeout(() => {
        setShowCard(1);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (showCard && showCard < 4) {
      setTimeout(() => setShowCard(showCard + 1), 500);
    }
  }, [showCard]);
  return (
    <div className="text-white flex flex-col justify-evenly p-[10%] gap-20">
      <div className="lg:w-72 sm:w-52 flex flex-col gap-3 z-10">
        <div className={`line ${showCard ? "visible" : ""}`}></div>
        <h1
          className={`lg:text-4xl sm:text-2xl ${
            showCard ? "pro-sol-text" : "pro-sol-invisible"
          }`}
        >
          Problem
        </h1>
        <p className={`${showCard ? "pro-sol-text" : "pro-sol-invisible"}`}>
          We live in a world of expanding technology and rapidly eroding trust.
        </p>
      </div>
      <div className="w-full z-10">
        <div className="lg:w-72 sm:w-52 float-right flex flex-col gap-3">
          <div className={`line ${showCard ? "visible" : ""}`}></div>
          <h1
            className={`lg:text-4xl sm:text-2xl ${
              showCard ? "pro-sol-text" : "pro-sol-invisible"
            }`}
          >
            Solution
          </h1>
          <p className={`${showCard ? "pro-sol-text" : "pro-sol-invisible"}`}>
            Zeko&apos;s simple zk rollup architecture seamlessly embeds trust
            into every digital interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

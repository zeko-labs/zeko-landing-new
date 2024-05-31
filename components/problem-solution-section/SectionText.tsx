import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

export const ProblemSolutionSectionText = () => {
  const [showCard, setShowCard] = useState(0);
  const style = {
    borderBottom: "2px solid white",
    width: "100%",
  };
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
        <ScrollAnimation
          animateOnce={true}
          animateIn="visible"
          className="line"
        ></ScrollAnimation>
        <ScrollAnimation
          animateOnce={true}
          animateIn="pro-sol-text"
          className="pro-sol-invisible"
        >
          <h1 className="lg:text-4xl sm:text-2xl">Problem</h1>
          <p>
            We live in a world of expanding technology and rapidly eroding
            trust.
          </p>
        </ScrollAnimation>
      </div>
      <div className="w-full z-10">
        <div className="lg:w-72 sm:w-52 float-right flex flex-col gap-3">
          <ScrollAnimation
            animateOnce={true}
            animateIn="visible"
            className="line"
          ></ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="pro-sol-text"
            className="pro-sol-invisible"
          >
            <h1 className="lg:text-4xl sm:text-2xl">Solution</h1>
            <p>
              Zeko&apos;s simple zk rollup architecture seamlessly embeds trust
              into every digital interaction.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

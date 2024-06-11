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
    <div className="relative w-full h-full">
      <div className="absolute left-[30%] lg:-ml-[300px] sm:-ml-[50vw] lg:w-[600px] sm:w-[100vw] top-[40%] lg:-mt-[300px] sm:-mt-[100vw] lg:h-[600px] sm:h-[100vw] pro-sol-back flex justify-center items-center">
        <ScrollAnimation
          animateOnce={true}
          animateIn="pro-sol-text"
          className="pro-sol-invisible w-[300px] text-white lg:pl-0 sm:pl-20"
        >
          <h1 className="lg:text-4xl sm:text-2xl">Problem</h1>
          <p>
            We live in a world of expanding technology and rapidly eroding trust
          </p>
        </ScrollAnimation>
      </div>
      <div className="absolute right-[30%] lg:-mr-[400px] sm:-mr-[70vw] lg:w-[800px] sm:w-[140vw] bottom-[40%] lg:-mb-[400px] sm:-mb-[100vw] lg:h-[800px] sm:h-[140vw] pro-sol-back flex justify-center items-center object-cover">
        <ScrollAnimation
          animateOnce={true}
          animateIn="pro-sol-text"
          className="pro-sol-invisible w-[300px] text-white lg:pr-0 sm:pr-20"
          delay={800}
        >
          <h1 className="lg:text-4xl sm:text-2xl">Solution</h1>
          <p>
            Zeko&apos;s simple zk rollup architecture seamlessly embeds trust
            into every digital interaction
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

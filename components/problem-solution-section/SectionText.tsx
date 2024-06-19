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
      <div className="absolute left-[30%] lg:-ml-[300px] sm:-ml-[50vw] lg:w-[600px] sm:w-[100vw] top-[30%] lg:-mt-[300px] sm:-mt-[100vw] lg:h-[600px] sm:h-[100vw] pro-sol-back flex justify-center items-center">
        <ScrollAnimation
          animateOnce={true}
          animateIn="pro-sol-text"
          className="pro-sol-invisible w-[400px] text-white lg:pl-0 sm:pl-20 lg:pt-0 sm:pt-20 text-center"
          offset={-300}
        >
          <p className="lg:text-3xl sm:text-lg">
            We live in a world of rapidly expanding technology and eroding trust
          </p>
        </ScrollAnimation>
      </div>
      <div className="absolute right-[30%] lg:-mr-[500px] sm:-mr-[80vw] lg:w-[1000px] sm:w-[160vw] bottom-[30%] lg:-mb-[500px] sm:-mb-[120vw] lg:h-[1000px] sm:h-[160vw] pro-sol-back flex justify-center items-center object-cover">
        <ScrollAnimation
          animateOnce={true}
          animateIn="pro-sol-text"
          className="pro-sol-invisible w-[400px] text-white lg:pr-0 sm:pr-20 lg:pb-0 sm:pb-20 text-center"
          offset={-300}
          delay={500}
        >
          <p className="lg:text-3xl sm:text-lg">
            Zeko&apos;s scalable zk rollup architecture embeds trust into every
            digital interaction
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

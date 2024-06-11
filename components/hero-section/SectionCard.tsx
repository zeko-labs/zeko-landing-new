import Image from "next/image";
import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const HeroSectionCard = () => {
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
    <div className="w-full flex lg:flex-row sm:flex-col items-center lg:gap-20 sm:gap-10 justify-evenly lg:p-20 sm:p-12 max-w-[1600px]">
      {/* <div className="container flex lg:flex-row gap-10 sm:flex-col items-center justify-evenly"> */}
      <div className="relative">
        <div className="relative">
          <ScrollAnimation
            animateOnce={true}
            animateIn="hide"
            initiallyVisible={true}
            className="anime"
          >
            <Image src="/card/back.png" alt="" width={500} height={500} />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="show"
            className="anime absolute top-0"
          >
            <Image src="/card/back-hover.png" alt="" width={500} height={500} />
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateOnce={true}
          animateIn="show"
          className="anime absolute card card-show hide"
        >
          <div className="lg:px-5 sm:px-1 lg:text-base sm:text-sm">
            <b>Zero-knowledge</b> is the technology of Trust, the foundation for
            building our <b>future on blockchain</b>
          </div>
        </ScrollAnimation>
      </div>
      <div className="relative">
        <div className="relative">
          <ScrollAnimation
            animateOnce={true}
            animateIn="hide"
            initiallyVisible={true}
            className="anime"
            delay={1000}
          >
            <Image src="/card/back.png" alt="" width={500} height={500} />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="show"
            className="anime absolute top-0"
            delay={1000}
          >
            <Image src="/card/back-hover.png" alt="" width={500} height={500} />
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateOnce={true}
          animateIn="show"
          className="anime absolute card card-show hide"
          delay={1000}
        >
          <div className="lg:px-5 sm:px-1 lg:text-base sm:text-sm">
            Zeko is <b>powerful zktechnology</b> for developers scaling their
            apps to <b>reach their ambitions</b>
          </div>
        </ScrollAnimation>
      </div>
      <div className="relative">
        <div className="relative">
          <ScrollAnimation
            animateOnce={true}
            animateIn="hide"
            initiallyVisible={true}
            className="anime"
            delay={2000}
          >
            <Image src="/card/back.png" alt="" width={500} height={500} />
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce={true}
            animateIn="show"
            className="anime absolute top-0"
            delay={2000}
          >
            <Image src="/card/back-hover.png" alt="" width={500} height={500} />
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateOnce={true}
          animateIn="show"
          className="anime absolute card card-show hide"
          delay={2000}
        >
          <div className="lg:px-5 sm:px-1 lg:text-base sm:text-sm">
            Zeko <b>amplifies</b> the potential for good: in Zeko we{" "}
            <b>Trust</b>, We <b>Build</b>, We <b>Scale</b>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

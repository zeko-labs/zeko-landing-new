import Image from "next/image";
import { useState, useEffect } from "react";

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
    <div className="w-full flex lg:flex-row sm:flex-col items-center lg:gap-20 sm:gap-10 justify-between p-20 lg:px-20 sm:px-10 pt-0">
      <div className="relative">
        <div className="relative">
          <Image
            className={`anime ${showCard > 0 ? "hide" : "show"}`}
            src="/card/back.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className={`absolute top-0 anime hide ${
              showCard > 0 ? "show" : ""
            }`}
            src="/card/back-hover.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div
          className={`absolute w-full card card-show anime hide ${
            showCard > 0 ? "show" : ""
          }`}
        >
          <div className="lg:px-5 sm:px-1 lg:text-base sm:text-sm">
            <b>Zero-knowledge</b> is the technology of Trust, the
            <br />
            foundation for building our <b>future on blockchain</b>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute w-full card card-show anime hide z-10 ${
            showCard > 1 ? "show" : ""
          }`}
        >
          <div className="lg:px-5 sm:px-1 lg:text-base sm:text-sm">
            Zeko is <b>powerful zktechnology</b> for developers
            <br />
            scaling their apps to <b>reach their ambitions</b>
          </div>
        </div>
        <div className="relative">
          <Image
            className={`anime ${showCard > 1 ? "hide" : "show"}`}
            src="/card/back.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className={`absolute top-0 anime hide ${
              showCard > 1 ? "show" : ""
            }`}
            src="/card/back-hover.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="relative">
        <div className="relative">
          <Image
            className={`anime ${showCard > 2 ? "hide" : "show"}`}
            src="/card/back.png"
            alt=""
            width={500}
            height={500}
          />
          <Image
            className={`absolute top-0 anime hide ${
              showCard > 2 ? "show" : ""
            }`}
            src="/card/back-hover.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div
          className={`absolute w-full card card-show anime hide ${
            showCard > 2 ? "show" : ""
          }`}
        >
          <div className="lg:px-5 pb-5 sm:px-1 lg:text-base sm:text-sm">
            Zeko <b>amplifies</b> the potential for good
            <br />
            In Zeko We <b>Trust</b>, We <b>Build</b>, We <b>Scale</b>
          </div>
        </div>
      </div>
    </div>
  );
};

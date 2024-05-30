import Image from "next/image";
import { useState, useEffect } from "react";

export const FirstSectionCard = () => {
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
          className={`absolute w-full card anime hide ${
            showCard > 0 ? "card-show show" : ""
          }`}
        >
          <div className="px-5">
            <b>Zero-knowledge</b> is the technology of Trust and the foundation
            for building our future on blockchain
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute w-full card anime hide z-10 ${
            showCard > 1 ? "card-show show" : ""
          }`}
        >
          <div className="px-5">
            Zeko is <b>powerful zktechnology</b> for developers scaling their
            apps to reach their booming ambitions  
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
          className={`absolute w-full card anime hide ${
            showCard > 2 ? "card-show show" : ""
          }`}
        >
          <div className="px-5 pb-5">
            In Zeko We <b>Trust, </b>
            We <b>Build, </b>
            We <b>Scale</b>
          </div>
        </div>
      </div>
    </div>
  );
};

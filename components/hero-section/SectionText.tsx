import { title, subtitle } from "@/components/primitives";
import { fontLexend, fontLexendBold, fontLexendLight } from "@/config/fonts";

export const HeroSectionText = () => {
  return (
    <div className="lg:pl-20 sm:px-5 lg:pt-20 sm:py-10 z-10">
      <div
        className={`inline-block max-w-3xl justify-center lg:text-left sm:text-center ${fontLexendLight.className}`}
      >
        <h1 className={`${title()} ${fontLexend.className}`}>
          Decentralized Trust,{" "}
          <strong className={fontLexendBold.className}>Amplified</strong>
        </h1>
        <h2 className={subtitle({ class: "mt-16 max-w-xl" })}>
          Zeko is a{" "}
          <strong className={fontLexendBold.className}>
            zero-knowledge, cross-chain scaling protocol
          </strong>{" "}
          built on Mina and designed for developers shaping the future of
          finance, AI, gaming, and the internet
        </h2>
      </div>
    </div>
  );
};

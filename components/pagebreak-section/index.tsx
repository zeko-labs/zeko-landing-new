import Image from "next/image";

export const PageBreakSection = () => {
  return (
    <div className="w-full object-cover">
      <Image
        src="/third-back.svg"
        alt="Page Break Background"
        width={1440}
        height={500}
        className="w-full"
      />
    </div>
  );
};

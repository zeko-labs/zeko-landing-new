import { ServicesSectionCard } from "./SectionCard";

export const ServicesSection = () => {
  return (
    <div className="w-full h-full lg:p-24 sm:p-10 flex lg:flex-row sm:flex-col lg:gap-16 sm:gap-10 justify-evenly text-white services-section">
      <ServicesSectionCard type={1} />
      <ServicesSectionCard type={0} />
      <ServicesSectionCard type={2} />
    </div>
  );
};

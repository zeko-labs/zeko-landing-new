export default function BoostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 z-10 relative">
      <div className="w-full h-[110%] absolute -top-20 z-0 left-0">
        <video autoPlay loop muted className="w-screen h-full object-cover">
          <source src="/background.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="">{children}</div>
    </section>
  );
}

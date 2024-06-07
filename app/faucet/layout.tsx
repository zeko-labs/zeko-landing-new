export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <div className="w-screen h-screen absolute -top-0 z-0 left-0">
        <video autoPlay loop muted className="w-screen h-full object-cover">
          <source src="/background.webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto max-w-7xl px-6 flex flex-grow flex-col justify-center pb-14">
        <section className="flex flex-col items-center md:items-start justify-center gap-6 md:gap-8 py-8 md:py-10 text-center md:text-left mb-6 z-10">
          {children}
        </section>
      </div>
    </div>
  );
}

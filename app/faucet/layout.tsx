export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex flex-grow flex-col justify-center pb-14">
      <section className="flex flex-col items-center md:items-start justify-center gap-6 md:gap-8 py-8 md:py-10 text-center md:text-left mb-6 z-10">
        {children}
      </section>
    </div>
  );
}

export default function SendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex flex-grow flex-col justify-center pb-14">
      <section className="flex flex-col items-center md:items-start justify-start gap-4 md:gap-20 py-8 md:py-10 text-center md:text-left">
        {children}
      </section>
    </div>
  );
}

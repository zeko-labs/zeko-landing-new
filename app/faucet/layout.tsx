export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center md:items-start justify-center gap-6 md:gap-8 py-8 md:py-10 text-center md:text-left mb-6">
      {children}
    </section>
  );
}

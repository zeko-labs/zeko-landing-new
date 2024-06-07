export default function BoostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 z-10">
      <div className="">{children}</div>
    </section>
  );
}

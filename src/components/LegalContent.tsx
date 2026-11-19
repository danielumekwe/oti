export default function LegalContent({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-20">
      <div className="prose mx-auto max-w-[800px] px-4 text-foreground">{children}</div>
    </section>
  );
}

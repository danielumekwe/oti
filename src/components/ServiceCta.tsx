import Link from "next/link";

export default function ServiceCta({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-light-bg py-16 text-center">
      <div className="mx-auto max-w-[700px] px-4">
        <h2 className="mb-4 text-3xl font-bold">{title}</h2>
        <p className="mb-8 text-foreground">{body}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/request-a-quote"
            className="rounded-md bg-secondary px-7 py-3 font-semibold text-white hover:bg-accent-hover"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-tertiary px-7 py-3 font-semibold text-tertiary hover:border-primary hover:text-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function PageHero({ title }: { title: string }) {
  return (
    <section className="bg-tertiary py-20 text-center text-white">
      <h1 className="mb-3 text-4xl font-bold md:text-5xl">{title}</h1>
      <p className="text-sm text-gray-300">
        <Link href="/" className="hover:text-secondary">
          Home
        </Link>{" "}
        / {title}
      </p>
    </section>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Same-day delivery, dedicated onboard courier services and nationwide coverage across the UK.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" />
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="rounded-lg border border-gray-100 p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">{service.cardTitle}</h3>
                <p className="mb-5 text-sm text-foreground">{service.description}</p>
                <Link href={`/${service.slug}`} className="font-semibold text-secondary hover:text-primary">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

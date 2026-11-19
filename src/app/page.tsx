import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs, howItWorks, industries, industryImages, services, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tertiary text-white">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-4 py-24 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-secondary">Instant Dispatch</p>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Same-day Delivery, Guaranteed Same Day Deliveries Nationwide
            </h1>
            <p className="mb-8 max-w-lg text-gray-300">
              Our nationwide network offers fast collection and immediate dispatch for
              urgent, secure, time-sensitive deliveries across the UK.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-a-quote"
                className="rounded-md bg-secondary px-7 py-3 font-semibold text-white hover:bg-accent-hover"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-white px-7 py-3 font-semibold text-white hover:border-secondary hover:text-secondary"
              >
                Contact us
              </Link>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-lg md:h-96">
            <Image
              src="/images/2026/02/86bd61c8-9f02-475d-bf3a-6db4ede2ee26-removebg-preview.png"
              alt="Courier delivery"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* About summary */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-20 md:grid-cols-2">
        <div className="relative h-80 w-full overflow-hidden rounded-lg">
          <Image
            src="/images/2026/02/6130535f-6cfa-4b35-8fbd-90466083cf86-1024x683.png"
            alt="OTI Business Limited courier"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Guaranteed Same Day Deliveries Nationwide
          </h2>
          <p className="mb-6 leading-relaxed text-foreground">
            {site.name} provides same-day business goods transport and dedicated onboard
            courier services across the UK, focused on urgent, secure, time-sensitive
            deliveries. We know delays are costly, which is why we emphasise rapid
            response, direct transport, and dependable service.
          </p>
          <Link href="/about-us" className="font-semibold text-secondary hover:text-primary">
            Learn more &rarr;
          </Link>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="bg-light-bg py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Industries We Serve</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <div key={industry.title} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md">
                  <Image
                    src={industryImages[i]}
                    alt={industry.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold">{industry.title}</h3>
                <p className="text-sm text-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-5">
            {howItWorks.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-base font-bold">{step.title}</h3>
                <p className="text-sm text-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3 font-semibold text-white hover:bg-accent-hover"
            >
              Book On Mobile &middot; {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-tertiary py-20 text-white">
        <div className="mx-auto max-w-[1200px] px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="rounded-lg bg-white/5 p-8">
                <h3 className="mb-3 text-xl font-bold text-white">{service.cardTitle}</h3>
                <p className="mb-5 text-sm text-gray-300">{service.description}</p>
                <Link
                  href={`/${service.slug}`}
                  className="font-semibold text-secondary hover:text-white"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="rounded-md border border-white px-7 py-3 font-semibold hover:border-secondary hover:text-secondary"
            >
              SEE ALL
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-[800px] px-4">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}

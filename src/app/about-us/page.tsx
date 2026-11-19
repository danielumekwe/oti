import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "OTI Business Limited is the UK's No.1 Same Day Courier Service, providing same-day business goods transport and dedicated onboard courier services.",
};

const stats = [
  { value: "98%", label: "On-Time Delivery Rate" },
  { value: "24 hrs", label: "Availability" },
  { value: "3500+", label: "Nationwide UK Coverage" },
  { value: "60 min", label: "Rapid Dispatch" },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero title="About Us" />

      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <p className="mb-3 font-semibold text-secondary">A Success Story</p>
            <h2 className="mb-5 text-3xl font-bold">UK&apos;s No.1 Same Day Courier Service</h2>
            <p className="text-foreground">
              OTI Business Limited provides same-day business goods transport and
              dedicated onboard courier services across the UK, focused on urgent,
              secure, time-sensitive deliveries. We know delays are costly, so we
              emphasise rapid response, direct transport, and dependable service.
            </p>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/2026/02/6ba2c83e-42f6-4419-ad00-97521e5834ff-1024x683.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="mb-2 text-4xl font-extrabold text-primary">{stat.value}</p>
                <p className="text-sm font-medium text-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-bold">Our Commitment</h3>
            <p className="text-sm text-foreground">
              Fast response times, secure and fully insured transport, transparent
              communication, professional customer service, and 24/7 availability.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold">Our Vision</h3>
            <p className="text-sm text-foreground">
              To be a leading UK provider of time-critical courier and onboard delivery
              solutions, known for speed, integrity, and service excellence.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xl font-bold">Our Mission</h3>
            <p className="text-sm text-foreground">
              To deliver fast, secure, dependable same-day and onboard courier solutions
              across the UK, known for reliability and professionalism.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-tertiary py-20 text-white">
        <div className="mx-auto max-w-[900px] px-4 text-center">
          <h2 className="mb-5 text-3xl font-bold">Who We Are</h2>
          <p className="mb-6 text-gray-300">
            We&apos;re a professional logistics company built on reliability, speed, and
            accountability. Our team handles important documents, high-value items,
            sensitive equipment, and urgent consignments with care &mdash; backed by
            nationwide coverage, prompt driver dispatch, and direct delivery with no
            unnecessary stops or depot delays.
          </p>
          <h3 className="mb-3 text-xl font-bold text-secondary">Delivering Excellence Nationwide</h3>
          <p className="text-gray-300">
            Our values guide every collection and delivery, combining speed, precision,
            and professionalism, with clear communication and accountability.
          </p>
        </div>
      </section>
    </>
  );
}

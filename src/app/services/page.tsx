import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCta from "@/components/ServiceCta";
import { ServiceHeading, ServiceText } from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Same-day delivery, dedicated onboard courier services and nationwide coverage across the UK.",
};

const services = [
  {
    href: "/same-day-delivery",
    title: "Same Day Delivery",
    image: "/images/2026/02/86bd61c8-9f02-475d-bf3a-6db4ede2ee26-Photoroom-682x1024.png",
    fit: "object-contain",
    description:
      "When time matters, our same-day courier service ensures rapid collection and direct delivery anywhere in the United Kingdom.",
  },
  {
    href: "/dedicated-onboard-courier-services",
    title: "Dedicated Onboard Courier Services",
    image: "/images/2026/02/6ba2c83e-42f6-4419-ad00-97521e5834ff-768x512.png",
    fit: "object-cover",
    description:
      "For highly urgent, confidential, or high-priority shipments, our onboard courier service offers maximum speed and control.",
  },
  {
    href: "/nationwide-delivery",
    title: "Nationwide Coverage",
    image: "/images/2026/02/fbf84dd4-72f9-4d52-8cd4-edbc30de58be-768x512.png",
    fit: "object-cover",
    description:
      "We operate across the entire UK, providing rapid response collection and direct transport services wherever your business requires.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" />

      <section className="px-[10px] pb-[50px] pt-[30px]">
        <div className="mx-auto max-w-[1140px]">
          <ServiceHeading>Our Services</ServiceHeading>
          <ServiceText>
            <p>
              OTI BUSINESS LIMITED is a trusted provider of same-day business goods transport
              and dedicated onboard courier services throughout the United Kingdom. We
              specialise in urgent, secure, and time-sensitive deliveries.
            </p>
          </ServiceText>

          <div className="mt-10 grid gap-[30px] md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col overflow-hidden rounded-[4px] bg-light-bg transition-shadow hover:shadow-[0_0_15px_0_rgba(0,0,0,0.1)]"
              >
                <div className="h-[240px] overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className={`h-full w-full ${s.fit} transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-[35px]">
                  <h3 className="mb-4 font-sans text-[1.5rem] font-bold leading-[1.2] text-tertiary">
                    {s.title}
                  </h3>
                  <p className="mb-6 flex-1 text-dark-text">{s.description}</p>
                  <span className="font-medium text-secondary transition-colors group-hover:text-accent-hover">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCta
        title="Need a Courier Today?"
        body="Trust OTI BUSINESS LIMITED for fast, secure, and reliable courier services anywhere in the UK."
      />
    </>
  );
}

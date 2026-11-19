import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCta from "@/components/ServiceCta";
import { ServiceHeading, ServiceText } from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Nationwide Coverage",
  description:
    "Reliable same-day and onboard courier services across England, Scotland, Wales and Northern Ireland.",
};

export default function NationwideDeliveryPage() {
  return (
    <>
      <PageHero title="Nationwide Coverage" video="/images/2021/03/highway.mp4" />

      <section className="px-[10px] pb-[50px] pt-[30px]">
        <div className="mx-auto max-w-[1140px]">
          <ServiceHeading>Nationwide Coverage</ServiceHeading>
          <ServiceText>
            <p>
              OTI BUSINESS LIMITED provides reliable same-day and onboard courier services
              across the entire United Kingdom. From major cities to regional locations, we
              ensure fast collection and direct delivery wherever your business operates.
            </p>
            <p>
              Our extensive coverage allows us to respond quickly to urgent requests,
              dispatching couriers promptly and transporting your goods efficiently to their
              destination. Whether you require delivery within a city or across the country,
              we maintain the same level of speed, care, and professionalism.
            </p>
            <p>
              We proudly serve businesses throughout England, Scotland, Wales, and Northern
              Ireland — supporting time-critical logistics needs nationwide.
            </p>
            <p>
              Wherever your shipment needs to go, OTI BUSINESS LIMITED is ready to move it
              securely and without delay.
            </p>
          </ServiceText>
        </div>
      </section>

      <ServiceCta
        title="Delivering Across the UK — Without Delay"
        body="Wherever your business operates, OTI BUSINESS LIMITED is ready to respond quickly and deliver securely."
      />
    </>
  );
}

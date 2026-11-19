import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServiceCta from "@/components/ServiceCta";

export const metadata: Metadata = {
  title: "Nationwide Coverage",
  description:
    "Reliable same-day and onboard courier services across the entire United Kingdom, including England, Scotland, Wales and Northern Ireland.",
};

export default function NationwideDeliveryPage() {
  return (
    <>
      <PageHero title="Nationwide Coverage" />

      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <div className="space-y-4 text-foreground">
              <p>
                OTI Business Limited provides reliable same-day and onboard courier
                services across the entire United Kingdom, from major cities to regional
                areas, with fast collection and direct delivery.
              </p>
              <p>
                Our wide coverage lets us respond quickly to urgent requests and move
                goods efficiently, whether the delivery is local or national.
              </p>
              <p>
                We proudly serve businesses throughout England, Scotland, Wales, and
                Northern Ireland.
              </p>
              <p>Wherever your shipment needs to go, we&apos;re ready to move it securely and without delay.</p>
            </div>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/2026/02/af0fc76e-ee34-4f66-9414-89ea6399430b-1024x683.png"
              alt="Nationwide Coverage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ServiceCta
        title="Delivering Across the UK — Without Delay"
        body="Wherever your business operates, we're ready to respond quickly and deliver securely."
      />
    </>
  );
}

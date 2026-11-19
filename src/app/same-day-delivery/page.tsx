import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServiceCta from "@/components/ServiceCta";

export const metadata: Metadata = {
  title: "Same Day Delivery",
  description:
    "Cost-effective, fully tailored same-day courier services available 24/7 across the entire mainland United Kingdom.",
};

export default function SameDayDeliveryPage() {
  return (
    <>
      <PageHero title="Same Day Delivery" />

      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold">
              Why Choose OTI Business Limited for Same-Day Courier Services?
            </h2>
            <div className="space-y-4 text-foreground">
              <p>
                Our same-day services are cost-effective and fully tailored, designed
                around each client&apos;s requirements. We serve both occasional urgent
                shipments and ongoing transport needs.
              </p>
              <p>
                We promise responsive, reliable courier services that adapt to your
                operational demands, with high standards of speed and professionalism.
              </p>
              <p>
                Our fleet is available 24 hours a day, 7 days a week, to respond to
                time-critical requests, covering the entire mainland United Kingdom.
              </p>
              <p>
                Delays are costly &mdash; that&apos;s why we emphasise rapid response,
                direct transport, and dependable service. Contact us for a fast,
                competitive quote.
              </p>
            </div>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/2026/02/ce7d7476-8ce4-4af7-a19e-aa71ee90bd6d-1024x683.png"
              alt="Same Day Delivery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ServiceCta
        title="Need Same-Day Delivery?"
        body="We offer same-day courier services anywhere in the UK, with collection within 30-60 minutes of booking confirmation."
      />
    </>
  );
}

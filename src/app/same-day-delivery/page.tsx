import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCta from "@/components/ServiceCta";
import { ServiceHeading, ServiceText } from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Same Day Delivery",
  description:
    "Cost-effective, fully tailored same-day courier services available 24/7 across the entire mainland United Kingdom.",
};

export default function SameDayDeliveryPage() {
  return (
    <>
      <PageHero title="Same Day Delivery" video="/images/2021/03/highway.mp4" />

      <section className="py-[50px]">
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row">
          <div className="p-[10px] md:w-[50.438%] md:pr-0">
            <ServiceHeading>
              Why Choose OTI BUSINESS LIMITED for Same-Day Courier Services?
            </ServiceHeading>
            <ServiceText>
              <p>
                At OTI BUSINESS LIMITED, we provide cost-effective and fully tailored
                same-day delivery solutions designed around your specific business
                requirements. Whether you require an occasional urgent shipment or a
                dependable logistics partner to manage ongoing transport needs, our
                experienced team is ready to deliver a solution that works for you.
              </p>
              <p>
                We understand that flexibility is essential. That’s why we offer
                responsive, reliable courier services that adapt to your operational
                demands while maintaining the highest standards of speed and
                professionalism.
              </p>
              <p>
                Available on demand, 24 hours a day, 7 days a week, our same-day fleet is
                prepared to respond immediately to time-critical requests — ensuring your
                goods move without delay.
              </p>
              <p>
                We operate across the entire mainland United Kingdom, providing
                nationwide coverage to support businesses wherever they are based.
              </p>
              <p>
                Contact OTI BUSINESS LIMITED today to receive a fast, competitive quote
                and experience dependable same-day delivery you can trust.
              </p>
              <p>
                In today’s fast-moving business environment, delays are costly. That is
                why we focus on rapid response, direct transport, and dependable service —
                giving our clients complete confidence that their goods will arrive
                exactly when required.
              </p>
            </ServiceText>
          </div>
          <div className="flex justify-center p-[10px] md:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/2026/02/86bd61c8-9f02-475d-bf3a-6db4ede2ee26-Photoroom-682x1024.png"
              alt="OTI Business Limited same-day booking confirmation"
              width={682}
              height={1024}
              className="h-auto w-full max-w-[682px] self-start"
            />
          </div>
        </div>
      </section>

      <ServiceCta
        title="Need Same-Day Delivery?"
        body="Trust OTI BUSINESS LIMITED for fast, secure, and reliable same-day courier services anywhere in the UK. Our team is ready to collect within 30–60 minutes of booking confirmation."
      />
    </>
  );
}

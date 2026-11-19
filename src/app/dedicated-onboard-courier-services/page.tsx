import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCta from "@/components/ServiceCta";
import { ServiceHeading, ServiceText } from "@/components/ServiceContent";

export const metadata: Metadata = {
  title: "Dedicated Onboard Courier Services",
  description:
    "A professional courier personally accompanies your shipment from collection to final delivery — maximum speed, security and control, available 24/7 across the UK.",
};

export default function DedicatedOnboardCourierPage() {
  return (
    <>
      <PageHero title="Dedicated Onboard Courier Services" video="/images/2021/03/highway.mp4" />

      <section className="pb-[30px] pt-[10px]">
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row">
          <div className="p-[10px] md:w-1/2">
            <ServiceHeading>Dedicated Onboard Courier Services</ServiceHeading>
            <ServiceText>
              <p>
                When timing is critical and security cannot be compromised, our Dedicated
                Onboard Courier Service provides the highest level of control and urgency.
                A professional courier personally accompanies your shipment from
                collection to final delivery, ensuring continuous supervision and the
                fastest possible transit time.
              </p>
              <p>
                Unlike standard transport methods, your consignment does not pass through
                depots or multiple handling points. It travels directly with a dedicated
                courier, reducing risk and eliminating unnecessary delays.
              </p>
              <p>This service is ideal for:</p>
              <ul>
                <li><p>Time-sensitive contracts and legal documents</p></li>
                <li><p>High-value or confidential materials</p></li>
                <li><p>Critical business components</p></li>
                <li><p>Urgent international or domestic transfers</p></li>
              </ul>
              <p>
                At OTI BUSINESS LIMITED, we understand that some deliveries simply cannot
                wait. Our onboard couriers operate with precision, discretion, and complete
                professionalism — giving you total peace of mind from departure to arrival.
              </p>
              <p>
                Available 24/7 across the UK, we are ready to respond immediately when your
                delivery demands priority handling.
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
          <div className="min-h-[420px] bg-[url('/images/2026/02/6ba2c83e-42f6-4419-ad00-97521e5834ff.png')] bg-cover bg-center bg-no-repeat md:w-1/2" />
        </div>
      </section>

      <ServiceCta
        title="Need Maximum Speed and Security?"
        body="Our dedicated onboard courier will personally accompany your shipment from collection to final delivery — with zero delays and complete supervision."
      />
    </>
  );
}

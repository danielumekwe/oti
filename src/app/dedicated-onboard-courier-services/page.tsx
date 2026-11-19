import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ServiceCta from "@/components/ServiceCta";

export const metadata: Metadata = {
  title: "Dedicated Onboard Courier Services",
  description:
    "A high-speed, controlled onboard courier service for urgent, confidential or high-priority shipments, available 24/7 across the UK.",
};

const useCases = [
  "Time-sensitive contracts and legal documents",
  "High-value or confidential materials",
  "Critical business components",
  "Urgent international or domestic transfers",
];

export default function DedicatedOnboardCourierServicesPage() {
  return (
    <>
      <PageHero title="Dedicated Onboard Courier Services" />

      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 md:grid-cols-2">
          <div className="relative h-80 w-full overflow-hidden rounded-lg md:order-2">
            <Image
              src="/images/2026/02/b15bc0f4-b4a6-412f-8e3f-04eb32784964-1024x683.png"
              alt="Dedicated Onboard Courier Services"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-4 font-semibold text-secondary">
              When timing is critical and security cannot be compromised
            </p>
            <p className="mb-6 text-foreground">
              Our dedicated onboard courier service offers maximum control and urgency,
              with a courier who stays with the shipment from collection to delivery.
              Shipments travel directly with the courier, skipping depots and handling
              points, which reduces risk and eliminates unnecessary delays.
            </p>
            <h3 className="mb-3 text-xl font-bold">Ideal for:</h3>
            <ul className="space-y-2 text-foreground">
              {useCases.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-light-bg py-16">
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <p className="text-foreground">
            Our couriers work with precision, discretion, and complete professionalism.
            Available 24/7 across the UK, we operate across the entire mainland United
            Kingdom &mdash; on demand, any hour, any day.
          </p>
        </div>
      </section>

      <ServiceCta
        title="Need Maximum Speed and Security?"
        body="A courier accompanies your shipment with zero delays and complete supervision, from collection to delivery."
      />
    </>
  );
}

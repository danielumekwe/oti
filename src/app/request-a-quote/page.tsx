import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a fast, competitive quote for same-day or dedicated onboard courier services from OTI Business Limited.",
};

export default function RequestAQuotePage() {
  return (
    <>
      <PageHero title="Request a Quote" />
      <section className="py-20">
        <div className="mx-auto max-w-[700px] px-4">
          <LeadForm endpoint="/api/quote" />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a fast, competitive quote for same-day or dedicated onboard courier services from OTI Business Limited.",
};

export default function RequestAQuotePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-dark-bg">
        <video
          className="absolute inset-0 h-full w-full object-cover object-bottom opacity-30"
          src="/images/2021/03/work.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative mx-auto max-w-[1170px] px-[25px] py-[100px] text-center">
          <h1 className="m-0 font-heading text-[3rem] font-black leading-[1.2] text-[#f1f1f1] md:text-[4.5rem]">
            Request a Quote
          </h1>
        </div>
      </section>

      <section className="px-[25px] py-[50px] md:py-[100px]">
        <div className="mx-auto max-w-[1140px]">
          <LeadForm endpoint="/api/quote" />
        </div>
      </section>
    </>
  );
}

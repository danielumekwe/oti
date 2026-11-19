import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with OTI Business Limited for same-day and onboard courier services across the UK.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" />

      <section className="py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 md:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="mb-3 text-2xl font-bold">
              Have enquiries? You&apos;ve got our full attention!
            </h2>
            <p className="mb-8 text-foreground">
              Our team is available to help. Send us a message and we&apos;ll respond
              as soon as possible.
            </p>

            <ul className="space-y-4 text-sm text-foreground">
              <li>
                <span className="block font-semibold text-tertiary">Phone</span>
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-tertiary">Email</span>
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block font-semibold text-tertiary">Address</span>
                {site.address}
              </li>
              <li>
                <span className="block font-semibold text-tertiary">Office Hours</span>
                {site.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Send a Message</h3>
            <LeadForm endpoint="/api/contact" />
          </div>
        </div>
      </section>
    </>
  );
}

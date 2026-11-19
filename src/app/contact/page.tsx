import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";
import MapModal from "@/components/MapModal";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with OTI Business Limited for same-day and onboard courier services across the UK.",
};

const address = "7 Wilson Business Park Initial Business Centre Monsall Road Manchester, M40 8WN";

const contactItems = [
  {
    text: "+447858699922",
    href: "tel:+447858699922",
    icon: "M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1.1l-2.3 2.2z",
  },
  {
    text: "info@otibusinesslimited.co.uk",
    href: "mailto:info@otibusinesslimited.co.uk",
    icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
  },
  {
    text: address,
    icon: "M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z",
  },
];

function ContactItem({ text, href, icon }: { text: string; href?: string; icon: string }) {
  const inner = (
    <>
      <span className="mr-[5px] inline-block rounded-full bg-[#00a6a626] p-[10px] align-middle transition-colors group-hover:bg-accent-hover">
        <svg
          className="h-5 w-5 fill-secondary transition-colors group-hover:fill-white"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path d={icon} />
        </svg>
      </span>
      <span className="text-base text-black">{text}</span>
    </>
  );
  return (
    <li className="my-4">
      {href ? (
        <a href={href} className="group">
          {inner}
        </a>
      ) : (
        <span className="group">{inner}</span>
      )}
    </li>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" image="/images/2021/03/bg-1.jpg" />

      <section className="px-[25px] py-[50px] md:py-[100px]">
        <div className="mx-auto max-w-[1170px] pb-[25px] md:pb-0 md:pr-[50px]">
          <h2 className="my-6 text-center font-heading text-[2rem] font-bold leading-[1.2] text-tertiary md:text-[3rem]">
            Have enquiries? You&rsquo;ve got our full attention!
          </h2>
          <p className="mb-0 mt-6 text-center text-base text-dark-text">Our team is available to assist you.</p>
        </div>
      </section>

      <section className="bg-[url('/images/2021/03/nexgen-background.png')] bg-[length:100%_auto] bg-center bg-no-repeat px-[25px] py-[50px] md:py-[100px] lg:bg-fixed">
        <div className="mx-auto grid max-w-[1170px] md:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-[35px]">
              <h6 className="m-0 font-sans text-[0.9rem] font-semibold uppercase text-accent-hover">
                Send a message
              </h6>
              <h2 className="my-6 font-heading text-[2rem] font-bold leading-[1.2] text-tertiary md:text-[3rem]">
                Get in Touch
              </h2>
              <p className="mb-8 text-base text-dark-text">
                We will respond to your message as soon as possible.
              </p>
            </div>
            <LeadForm endpoint="/api/contact" />
          </div>

          <div className="pt-[35px] md:pl-[50px] md:pt-0">
            <ul className="flex max-w-[330px] flex-col [&>li:first-child]:mt-0">
              {contactItems.map((item) => (
                <ContactItem key={item.text} {...item} />
              ))}
            </ul>
            <MapModal query="7 Wilson Business Park, Monsall Road, Manchester M40 8WN, UK" />
          </div>
        </div>
      </section>
    </>
  );
}

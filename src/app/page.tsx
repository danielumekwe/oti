import Image from "next/image";
import Link from "next/link";
import DottedDivider from "@/components/DottedDivider";
import FaqAccordion from "@/components/FaqAccordion";
import IndustryIcon from "@/components/IndustryIcon";
import { montserrat } from "@/lib/fonts";
import { faqs, howItWorks, industries, services, site } from "@/lib/site";

const sectionHeading = "font-heading text-[2.5rem] font-extrabold leading-[1.2] md:text-[3rem]";
const pillButton = `${montserrat.className} inline-flex items-center justify-center rounded-full px-[25px] py-[10px] text-base font-medium uppercase leading-[1.2] transition-colors`;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center bg-black md:min-h-[calc(100vh-50px)]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            src="/images/2021/03/city.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-[linear-gradient(140deg,#000000_59%,#00000000_100%)] opacity-80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1170px] px-[25px] pb-24 pt-36 md:px-0 md:py-32">
          <div className="max-w-[700px]">
            <h1 className="mb-8 font-heading text-[3rem] font-black leading-[1.2] text-[#f1f1f1] md:text-[4.5rem]">
              Same-day Delivery~
              <b className="inline-block rounded-[10px] bg-[#0582835c] px-[15px] font-black">
                Instant Dispatch
              </b>
            </h1>
            <p className="mb-12 max-w-[650px] text-[1.2rem] leading-normal text-[#8f93a5]">
              At OTI Business Limited we understand urgency. Our nationwide network
              guarantees fast collection and immediate dispatch — keeping your operations
              moving without disruption.
            </p>
            <div className="flex flex-wrap gap-[25px]">
              <Link
                href="/request-a-quote"
                className="rounded-full border border-primary bg-primary px-5 py-2 font-medium leading-[1.5] text-[#f1f1f1] transition-colors hover:border-accent-hover hover:bg-accent-hover hover:text-white"
              >
                Request a Quote
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 border-[#05828380] px-5 py-[7px] font-medium leading-[1.5] text-[#bec1ce] transition-colors hover:border-accent-hover hover:text-white"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <DottedDivider />
      </section>

      {/* About summary */}
      <section className="bg-white px-[25px] py-[50px] md:py-[100px]">
        <div className="mx-auto grid max-w-[1170px] items-center md:grid-cols-2">
          <div className="pb-[25px] md:mb-8 md:pb-0 md:pr-[50px]">
            <h2 className={`${sectionHeading} mb-6 text-tertiary`}>
              Guaranteed Same Day Deliveries Nationwide.
            </h2>
            <p className="text-base leading-6 text-dark-text">
              OTI BUSINESS LIMITED is a trusted provider of same-day business goods transport and
              dedicated onboard courier services throughout the United Kingdom. We specialise in
              urgent, secure, and time-sensitive deliveries, ensuring your shipment reaches its
              destination quickly, safely, and without compromise. In today’s fast-moving business
              environment, delays are costly. That is why we focus on rapid response, direct
              transport, and dependable service — giving our clients complete confidence that their
              goods will arrive exactly when required.
            </p>
            <div className="pt-[30px]">
              <Link
                href="/about-us"
                className={`${pillButton} border-2 border-primary bg-tertiary text-white hover:border-accent-hover hover:bg-accent-hover`}
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/2026/02/af0fc76e-ee34-4f66-9414-89ea6399430b-1024x683.png"
              alt="OTI Business Limited courier handing over a parcel"
              width={1024}
              height={683}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="bg-[#f1f1ff] px-[25px] py-[50px] md:py-[100px]">
        <div className="mx-auto max-w-[1170px]">
          <h2 className={`${sectionHeading} mb-6 text-tertiary`}>Industries We Serve</h2>
          <div className="grid items-start gap-[30px] pb-[15px] pt-[35px] md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded-[10px] bg-white p-[35px]">
                <IndustryIcon name={industry.icon} />
                <h4 className="my-6 font-sans text-[1.5rem] font-bold leading-[1.2] text-tertiary">
                  {industry.title}
                </h4>
                <p className="text-base leading-6 text-dark-text">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="overflow-hidden bg-[#222227] px-[25px] py-[50px] md:py-[100px]">
        <div className="mx-auto max-w-[1170px]">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className={`${sectionHeading} mb-6 text-[#f1f1f1]`}>How it works</h2>
            <p className="text-base leading-6 text-[#8f93a5]">
              At OTI BUSINESS LIMITED, we’ve streamlined our process to ensure your shipment moves
              quickly, securely, and without complications.
            </p>
          </div>
          <div className="relative mt-9 grid gap-[50px] md:grid-cols-5 md:gap-0">
            <span className="absolute -left-[100vw] -right-[100vw] top-[37px] hidden h-px bg-[#61ce70] md:block" />
            {howItWorks.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="flex justify-center">
                  <span className="block rounded p-[10px] font-sans text-[2.5rem] font-extrabold leading-[46px] text-[#61ce70]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mb-4 mt-6 px-[15px] font-sans text-[1.5rem] font-bold leading-[1.2] text-[#f1f1f1]">
                  {step.title}
                </h4>
                <p className="px-[15px] text-base leading-6 text-[#8f93a5]">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:mt-0">
            <a
              href={site.phoneHref}
              className={`${pillButton} mt-10 border-2 border-primary text-center text-primary hover:border-accent-hover hover:bg-accent-hover hover:text-white md:mt-0`}
            >
              Book On Mobile
              <br />
              +44 7858699922
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-dark-bg px-[25px] py-[50px] md:py-[100px]">
        <div className="mx-auto max-w-[1170px]">
          <div className="mb-5 flex flex-col md:flex-row md:items-end">
            <div className="md:w-3/4">
              <h2 className={`${sectionHeading} mb-6 text-[#f1f1f1]`}>
                Our
                <b className="ml-[0.2em] inline-block rounded-[10px] bg-[#00a6a626] px-[15px] py-[5px] font-extrabold">
                  Services
                </b>
              </h2>
              <p className="font-heading text-base leading-6 text-white">
                At OTI BUSINESS LIMITED, we specialise in time-critical logistics solutions designed to
                keep your business moving. Whether you require urgent same-day delivery or a dedicated
                onboard courier, we provide secure, efficient, and nationwide transport across the UK.
              </p>
            </div>
            <div className="mt-6 flex md:mt-0 md:w-1/4 md:justify-end">
              <Link
                href="/services"
                className={`${pillButton} border-2 border-[#05828380] text-[#bec1ce] hover:border-accent-hover hover:bg-accent-hover hover:text-white`}
              >
                See all
              </Link>
            </div>
          </div>
          <div className="grid gap-[30px] py-[15px] md:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="text-center">
                <Link href={`/${service.slug}`} className="mx-auto block w-[98%] pb-5">
                  <Image
                    src={service.image}
                    alt={service.cardTitle}
                    width={1536}
                    height={1024}
                    className="h-auto w-full"
                  />
                </Link>
                <h3 className="my-6 text-[2.5rem] leading-[48px]">
                  <Link
                    href={`/${service.slug}`}
                    className="font-sans text-base font-normal text-white hover:text-secondary"
                  >
                    {service.cardTitle}
                  </Link>
                </h3>
                <p className="font-heading text-base leading-6 text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-[25px] pb-[50px] pt-10 md:px-0">
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row">
          <div className="p-[10px] md:w-1/2">
            <h2 className={`${sectionHeading} mb-11 text-black`}>
              Our
              <b className="ml-[0.2em] inline-block rounded-[10px] bg-[#00a6a626] px-[15px] py-[5px] font-extrabold text-secondary">
                Services
              </b>
            </h2>
            <p className="font-heading text-base leading-6 text-black">
              We understand that when arranging urgent or time-critical deliveries, you may have
              important questions about our process, coverage, and reliability. Below, you’ll find
              answers to some of the most frequently asked questions about our same-day business
              transport and dedicated onboard courier services. If you require further assistance,
              our team at OTI BUSINESS LIMITED is available 24/7 to provide clear guidance and
              immediate support.
            </p>
            <div className="mt-5">
              <FaqAccordion items={faqs} />
            </div>
          </div>
          <div
            className="min-h-[400px] bg-cover bg-center bg-no-repeat md:w-1/2"
            style={{ backgroundImage: "url(/images/2026/02/b15bc0f4-b4a6-412f-8e3f-04eb32784964.png)" }}
            role="img"
            aria-label="OTI Business Limited support agent on the phone"
          />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import DottedDivider from "@/components/DottedDivider";
import PageHero from "@/components/PageHero";
import { montserrat, roboto } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "OTI Business Limited is the UK's No.1 Same Day Courier Service, providing same-day business goods transport and dedicated onboard courier services.",
};

type Card = { title: string; body: string; tone: "teal" | "orange" };

const commitment: Card = {
  title: "Our Commitment",
  body: "We are committed to delivering fast response times, secure and fully insured transport, transparent communication, professional customer service, and 24/7 availability. We understand that when you contact us, it is often because time is critical. Our goal is simple — to move your goods efficiently, reliably, and securely while giving you complete peace of mind.",
  tone: "teal",
};

const cards: Card[] = [
  {
    title: "Our Vision",
    body: "To become a leading provider of time-critical courier and onboard delivery solutions in the United Kingdom, recognised for speed, integrity, and service excellence.",
    tone: "orange",
  },
  {
    title: "Our Mission",
    body: "To deliver fast, secure, and dependable same-day and onboard courier solutions across the United Kingdom, recognised for reliability, professionalism.",
    tone: "teal",
  },
  {
    title: "Businesses Trust Us",
    body: "Yes, Businesses across the UK rely on OTI BUSINESS LIMITED because we deliver more than parcels — we deliver reliability. With a strong focus on punctuality, discretion.",
    tone: "orange",
  },
];

const counters = [
  { value: "98", label: "On-Time Delivery Rate (%)" },
  { value: "24", label: "Availability (hours)" },
  { value: "3500", label: "Nationwide UK Coverage" },
  { value: "60", label: "Rapid dispatch (minutes)" },
];

function PreTitle({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h6
      className={`${montserrat.className} m-0 text-[0.9rem] font-semibold uppercase leading-[1.2] text-accent-hover ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </h6>
  );
}

function Microphone() {
  return (
    <svg
      className="absolute bottom-[35px] right-[35px] h-[30px] w-[30px] fill-[#21333e75]"
      viewBox="0 0 352 512"
      aria-hidden
    >
      <path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z" />
    </svg>
  );
}

function QuoteCard({ title, body, tone, stretch = true }: Card & { stretch?: boolean }) {
  const teal = tone === "teal";
  return (
    <div
      className={`relative flex items-center rounded-[4px] p-[35px] ${stretch ? "h-full" : ""} ${
        teal ? "bg-primary" : "bg-secondary"
      }`}
    >
      <div>
        <h4
          className={`mb-6 mt-0 font-sans text-[1.5rem] font-bold leading-[1.2] ${
            teal ? "text-[#f1f1f1]" : "text-[#161616]"
          }`}
        >
          {title}
        </h4>
        <p className={`m-0 leading-normal opacity-85 ${teal ? "text-[#f0f0f0]" : "text-black"}`}>
          {body}
        </p>
      </div>
      <Microphone />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" image="/images/2021/03/bg-wide.jpg" />

      {/* A success story */}
      <section className="px-[25px] py-[50px] md:py-[100px]">
        <div className="mx-auto flex max-w-[1170px] flex-col md:flex-row md:items-start">
          <div className="pb-[25px] md:w-2/3 md:pb-0 md:pr-[50px]">
            <PreTitle>A Success Story</PreTitle>
            <h2 className="my-6 font-heading text-[2.5rem] font-extrabold leading-[1.2] text-tertiary md:text-[3rem]">
              UK’s No.1 Same Day Courier Service.
            </h2>
            <div className={`${roboto.className} space-y-6 leading-normal text-dark-text`}>
              <p>
                OTI BUSINESS LIMITED is a trusted provider of same-day business goods
                transport and dedicated onboard courier services throughout the United
                Kingdom. We specialise in urgent, secure, and time-sensitive deliveries,
                ensuring your shipment reaches its destination quickly, safely, and without
                compromise.
              </p>
              <p>
                In today’s fast-moving business environment, delays are costly. That is why
                we focus on rapid response, direct transport, and dependable service — giving
                our clients complete confidence that their goods will arrive exactly when
                required.
              </p>
            </div>
          </div>
          <div className="md:w-1/3">
            <QuoteCard {...commitment} stretch={false} />
          </div>
        </div>
      </section>

      {/* Vision / Mission / Trust */}
      <div className="p-[10px]">
        <div className="mx-auto grid max-w-[1140px] gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <QuoteCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      {/* Who we are */}
      <section className="px-[25px] py-[115px]">
        <div className="mx-auto flex max-w-[1170px] flex-col items-center gap-[35px] md:flex-row md:gap-0">
          <div className="w-full md:w-1/2 md:shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/2026/02/6130535f-6cfa-4b35-8fbd-90466083cf86.png"
              alt="OTI Business Limited courier"
              className="h-full w-full rounded-[10px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 md:shrink-0 md:pl-10 md:pr-[35px]">
            <PreTitle>About OTI Business Limited</PreTitle>
            <h2 className="my-6 font-heading text-[2.5rem] font-extrabold leading-[1.2] text-tertiary md:text-[3rem]">
              Who we are
            </h2>
            <p className="mb-8 leading-normal text-dark-text">
              We are a professional logistics company built around reliability, speed, and
              accountability. Our experienced team understands the importance of precision
              in time-critical transport. Whether it’s important documents, high-value
              items, sensitive equipment, or urgent business consignments, we treat every
              delivery with the highest level of care and professionalism. Our nationwide
              coverage allows us to respond swiftly to collection requests across the UK,
              dispatching drivers promptly and delivering directly — with no unnecessary
              stops or depot delays.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative bg-[#0d1b2a] bg-[url('/images/2026/02/6ba2c83e-42f6-4419-ad00-97521e5834ff.png')] bg-cover bg-center bg-no-repeat px-[25px] py-[50px] md:bg-fixed md:py-[100px]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#111117_0%,#0d1b2a_100%)] opacity-70" />
        <div className="relative mx-auto max-w-[1170px]">
          <div className="mx-auto mb-5 max-w-[800px] text-center">
            <PreTitle center>Why Choose Us?</PreTitle>
            <h2 className="my-6 font-heading text-[2.5rem] font-extrabold leading-[1.2] text-[#f1f1f1] md:text-[3rem]">
              Delivering Excellence Nationwide
            </h2>
            <p className="leading-normal text-[#bec1ce]">
              At OTI BUSINESS LIMITED, our values guide every collection, every mile, and
              every delivery. We combine speed, precision, and professionalism to ensure
              your goods arrive safely and on time — without compromise. Our team works with
              urgency, clear communication, and complete accountability, giving you
              confidence at every stage of the journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {counters.map((c) => (
              <div key={c.label} className="pb-[15px] text-center md:p-[25px]">
                <span
                  className={`${montserrat.className} block text-[2.5rem] font-extrabold leading-[1.5] text-accent-hover`}
                >
                  {c.value}
                </span>
                <h4 className="my-2 font-sans text-base font-normal leading-[1.2] text-[#bec1ce]">
                  {c.label}
                </h4>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/request-a-quote"
              className={`${roboto.className} rounded-[3px] bg-secondary px-6 py-[16.5px] text-[15px] font-medium leading-none text-white transition-colors hover:bg-accent-hover`}
            >
              Get a Quote
            </Link>
          </div>
        </div>
        <DottedDivider />
      </section>
    </>
  );
}

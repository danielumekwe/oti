import Link from "next/link";

export default function ServiceCta({ title, body }: { title: string; body: string }) {
  return (
    <section className="relative flex min-h-[calc(100vh-50px)] items-center bg-[#222227]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/2021/03/bg-7.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="relative mx-auto w-full max-w-[1170px] px-[25px] py-[100px] xl:px-0">
        <div className="mx-auto w-[90%] py-12 text-left md:w-[60%] md:text-center">
          <h2 className="mb-6 font-heading text-[3rem] font-black leading-[1.2] text-[#f1f1f1] md:text-[4.5rem]">
            {title}
          </h2>
          <p className="mb-4 text-[1rem] leading-normal text-[#8f93a5] md:text-[1.2rem]">{body}</p>
          <div className="flex flex-col items-start gap-0 sm:inline-flex sm:flex-row sm:gap-6">
            <Link
              href="/request-a-quote"
              className="mt-6 rounded-full border-2 border-secondary bg-primary px-[25px] py-2 font-medium leading-[1.5] text-[#f1f1f1] transition-colors hover:border-accent-hover hover:bg-accent-hover hover:text-white"
            >
              GET A QUOTE
            </Link>
            <Link
              href="/contact"
              className="mt-6 rounded-full border-2 border-[#05828380] px-[25px] py-2 font-medium leading-[1.5] text-[#bec1ce] transition-colors hover:border-accent-hover hover:text-white"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

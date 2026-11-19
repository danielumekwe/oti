import Link from "next/link";

type PageHeroProps = {
  title: string;
  image?: string;
  video?: string;
};

export default function PageHero({ title, image, video }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark-bg">
      {video && (
        <video
          src={video}
          className="absolute inset-0 h-full w-full object-cover object-bottom opacity-30"
          autoPlay
          muted
          loop
          playsInline
        />
      )}
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      )}
      <div className="relative mx-auto max-w-[1170px] px-[25px] py-[100px] text-center">
        <h1 className="m-0 font-heading text-[3rem] font-black leading-[1.2] text-[#f1f1f1] md:text-[4.5rem]">
          {title}
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="flex justify-center pt-6 text-base">
            <li>
              <Link href="/" className="text-light-text transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li className="max-w-[280px] truncate text-secondary">
              <span className="px-2 text-primary opacity-50">/</span>
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}

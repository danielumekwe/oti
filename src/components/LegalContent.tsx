const typography = [
  "text-base leading-normal text-dark-text",
  "[&_p]:my-6",
  "[&_strong]:font-bold [&_b]:font-bold",
  "[&_a]:text-secondary [&_a:hover]:text-accent-hover",
  "[&_h1]:my-6 [&_h1]:font-heading [&_h1]:text-[3rem] [&_h1]:font-black [&_h1]:leading-[1.2] [&_h1]:text-tertiary md:[&_h1]:text-[4.5rem]",
  "[&_h2]:my-6 [&_h2]:break-words [&_h2]:font-heading [&_h2]:text-[2rem] [&_h2]:font-bold [&_h2]:leading-[1.2] [&_h2]:text-tertiary md:[&_h2]:text-[3rem]",
  "[&_h3]:my-6 [&_h3]:font-sans [&_h3]:text-[2rem] [&_h3]:font-bold [&_h3]:leading-[1.2] [&_h3]:text-tertiary md:[&_h3]:text-[2.5rem]",
  "[&_h4]:my-6 [&_h4]:font-sans [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:leading-[1.2] [&_h4]:text-tertiary",
  "[&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5",
  "[&_li]:my-4 [&_li_p]:my-0",
  "[&_hr]:my-[35px] [&_hr]:border-0 [&_hr]:border-t [&_hr]:border-black/15",
].join(" ");

export default function LegalContent({ html }: { html: string }) {
  return (
    <section className="px-[25px] pb-[100px] pt-[50px]">
      <div
        className={`mx-auto max-w-[1170px] ${typography}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}

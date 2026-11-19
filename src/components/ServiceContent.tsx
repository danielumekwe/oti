import { Roboto } from "next/font/google";
import type { ReactNode } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export function ServiceHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="my-6 font-heading text-[2rem] font-medium leading-[1.2] text-tertiary md:text-[3rem]">
      {children}
    </h2>
  );
}

export function ServiceText({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${roboto.className} pt-5 text-base leading-normal text-dark-text [&_li>p]:my-0 [&_li]:my-4 [&_p]:my-6 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-5 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0`}
    >
      {children}
    </div>
  );
}

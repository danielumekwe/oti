"use client";

import { useState } from "react";
import { roboto } from "@/lib/fonts";

export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center gap-[10px] border border-[#d5d8dc] p-[10px] text-left text-base leading-6 text-[#1f2124]"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <svg viewBox="0 0 448 512" className="h-[15px] w-[13px] flex-shrink-0 fill-current" aria-hidden>
                {isOpen ? (
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                ) : (
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                )}
              </svg>
              {item.question}
            </button>
            {isOpen && (
              <div className={`${roboto.className} p-5 text-base leading-6 text-[#7a7a7a]`}>
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-tertiary"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.question}
              <svg
                className={`h-5 w-5 flex-shrink-0 text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-foreground">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

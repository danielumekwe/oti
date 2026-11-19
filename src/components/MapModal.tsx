"use client";

import { useEffect, useState } from "react";

export default function MapModal({ query, label = "VIEW MAP" }: { query: string; label?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="mt-4 flex justify-start">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full border-2 border-transparent bg-[#00a6a626] px-7 py-2.5 text-base font-medium leading-[1.2] text-primary transition-colors hover:border-accent-hover hover:bg-accent-hover hover:text-white"
        >
          {label}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          role="dialog"
          aria-label="Map"
          className={`absolute inset-y-0 right-0 w-full max-w-[600px] bg-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Close map"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          {open && (
            <iframe
              title="Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </>
  );
}

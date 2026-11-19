"use client";

import { useState, FormEvent } from "react";

const field =
  "block h-[50px] w-full rounded-[4px] border-none bg-black/[0.075] p-4 text-base leading-[1.2] text-tertiary outline-none placeholder:text-dark-text [&:not(select)]:px-5 hover:bg-black/10 focus:bg-black/10";

export default function LeadForm({ endpoint }: { endpoint: "/api/contact" | "/api/quote" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-x-[30px] md:grid-cols-2">
        <label className="my-[10px] block">
          <span className="sr-only">Name</span>
          <input name="name" type="text" required placeholder="Name" className={field} />
        </label>
        <label className="my-[10px] block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required placeholder="Email" className={field} />
        </label>
        <label className="my-[10px] block">
          <span className="sr-only">Phone</span>
          <input name="phone" type="tel" required placeholder="Phone" className={field} />
        </label>
        <label className="my-[10px] block">
          <span className="sr-only">Subject</span>
          <select
            name="subject"
            required
            defaultValue=""
            className={`${field} appearance-none px-4 py-0 text-tertiary`}
          >
            <option value="">&mdash;Please choose an option&mdash;</option>
            <option value="Same-Day Business Transport">Same-Day Business Transport</option>
            <option value="Dedicated Onboard Courier Services">Dedicated Onboard Courier Services</option>
            <option value="Nationwide Coverage">Nationwide Coverage</option>
          </select>
        </label>
      </div>

      <label className="my-[10px] block">
        <span className="sr-only">Message</span>
        <textarea name="message" required placeholder="Message" className={`${field} h-[152px] resize-y`} />
      </label>

      <div className="my-[10px]">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full border border-secondary bg-secondary px-[25px] py-3 text-base font-medium leading-[1.2] text-white transition-colors hover:border-accent-hover hover:bg-accent-hover disabled:cursor-no-drop disabled:opacity-60"
        >
          {status === "loading" ? "SENDING..." : "SEND"}
        </button>
      </div>

      {status === "success" && (
        <p className="mt-4 border border-success px-5 py-2.5 text-success">
          Thank you for your message. It has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 border border-danger px-5 py-2.5 text-danger">{errorMessage}</p>
      )}
    </form>
  );
}

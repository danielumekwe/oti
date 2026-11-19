"use client";

import { useState, FormEvent } from "react";

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-tertiary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-gray-200 bg-black/5 px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-tertiary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-gray-200 bg-black/5 px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-tertiary">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-md border border-gray-200 bg-black/5 px-4 py-3 text-sm outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-tertiary">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue=""
            className="w-full rounded-md border border-gray-200 bg-black/5 px-4 py-3 text-sm outline-none focus:border-primary"
          >
            <option value="" disabled>
              Please choose an option
            </option>
            <option value="Same-Day Business Transport">Same-Day Business Transport</option>
            <option value="Dedicated Onboard Courier Services">Dedicated Onboard Courier Services</option>
            <option value="Nationwide Coverage">Nationwide Coverage</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-tertiary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-gray-200 bg-black/5 px-4 py-3 text-sm outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-secondary px-8 py-3 font-medium text-white transition hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-success">
          Thanks! Your message has been sent. We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && <p className="text-sm font-medium text-danger">{errorMessage}</p>}
    </form>
  );
}

"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl, type EnquiryData } from "@/lib/whatsapp";

const eventTypes = [
  "Wedding",
  "Birthday Party",
  "School Event",
  "Corporate Event",
  "Other",
];

const initialForm: EnquiryData = {
  name: "",
  phone: "",
  eventType: "Wedding",
  eventDate: "",
  guestCount: "",
  message: "",
};

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<EnquiryData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    if (web3formsKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Enquiry — ${siteConfig.name}`,
            from_name: form.name,
            ...form,
          }),
        });

        if (response.ok) {
          setStatus("success");
          setForm(initialForm);
          return;
        }
      } catch {
        // Fall through to WhatsApp
      }
    }

    window.open(buildWhatsAppUrl(form), "_blank");
    setStatus("success");
    setForm(initialForm);
  }

  const inputClass =
    "w-full rounded-xl border border-green-dark/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-mid focus:ring-2 focus:ring-green-mid/20";

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-green-dark/10 bg-white p-6 shadow-sm sm:p-8 ${
        compact ? "" : "max-w-xl"
      }`}
    >
      <h3 className="font-display text-xl font-semibold text-blue-navy">
        Send an Enquiry
      </h3>
      <p className="mt-1 text-sm text-foreground/60">
        Fill in your details and we&apos;ll get back to you shortly.
      </p>

      <div className={`mt-6 grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div className={compact ? "" : "sm:col-span-1"}>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            Your Name *
          </label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            Phone Number *
          </label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            placeholder="10-digit mobile"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            Event Type
          </label>
          <select
            value={form.eventType}
            onChange={(e) => setForm({ ...form, eventType: e.target.value })}
            className={inputClass}
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            Preferred Date
          </label>
          <input
            type="date"
            value={form.eventDate}
            onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
            className={inputClass}
          />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            Expected Guests
          </label>
          <input
            type="number"
            min={1}
            max={siteConfig.capacity}
            value={form.guestCount}
            onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
            className={inputClass}
            placeholder={`Up to ${siteConfig.capacity}`}
          />
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className="mb-1.5 block text-xs font-medium text-foreground/70">
            Message
          </label>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClass}
            placeholder="Tell us about your event..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-green-dark py-3.5 text-sm font-semibold text-white transition hover:bg-green-mid disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Submit Enquiry"}
      </button>

      {status === "success" && (
        <p className="mt-3 text-center text-sm text-green-mid">
          Thank you! We&apos;ll contact you soon.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong. Please WhatsApp us directly.
        </p>
      )}

      {!web3formsKey && (
        <p className="mt-3 text-center text-xs text-foreground/50">
          Enquiries open in WhatsApp for a quick response.
        </p>
      )}
    </form>
  );
}
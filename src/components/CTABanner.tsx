import Link from "next/link";
import { buildWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";

export function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-green-dark to-blue-navy py-14 text-white">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Ready to Host Your Celebration?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Check availability for your date and get a custom quote. Our team responds quickly on WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            WhatsApp Us
          </a>
          <a
            href={getCallUrl()}
            className="inline-flex min-w-[200px] items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Call Now
          </a>
          <Link
            href="/contact/"
            className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-green-dark transition hover:bg-cream"
          >
            Enquiry Form
          </Link>
        </div>
      </div>
    </section>
  );
}
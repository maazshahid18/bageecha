import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Booking Policies",
  description: `Booking terms, payment, cancellation, and venue policies at ${siteConfig.fullName}, Gaya.`,
};

const policies = [
  {
    title: "Booking & Advance Payment",
    items: [
      "Bookings are confirmed only after advance payment is received and a written/WhatsApp confirmation is shared by our team.",
      "Advance amount varies by event type, date, and package. Your quote will mention the exact advance required.",
      "Balance payment is typically due before or on the event day as agreed at the time of booking.",
    ],
  },
  {
    title: "Cancellation & Rescheduling",
    items: [
      "Cancellation 30+ days before the event: advance may be adjusted toward a future date (subject to management approval).",
      "Cancellation within 30 days: advance is generally non-refundable as the date is blocked for you.",
      "Rescheduling is allowed subject to availability. One complimentary date change may be offered if requested 21+ days in advance.",
      "No-shows or last-minute cancellations forfeit the advance payment.",
    ],
  },
  {
    title: "Event Timings",
    items: [
      "Standard slots include morning (e.g. 7 AM – 2 PM), evening (e.g. 4 PM – 11 PM), and full-day packages.",
      "Setup and vendor access may be allowed 1–2 hours before the slot, subject to prior approval.",
      "Music and outdoor programmes must wind down by the agreed end time to respect neighbours and local norms.",
      "Overtime charges apply if the event runs beyond the booked slot without prior extension approval.",
    ],
  },
  {
    title: "Catering & Vendors",
    items: [
      "Outside catering is permitted. Caterers must follow venue hygiene and waste-disposal guidelines.",
      "All outside vendors (decor, DJ, photography) must be registered with our office on the event day.",
      "Cooking with open flame may be restricted to designated areas only.",
      "Bageecha is not responsible for quality or conduct of third-party vendors hired by the client.",
    ],
  },
  {
    title: "Decoration & Setup",
    items: [
      "Nails, drilling, or fixing structures into trees and permanent fixtures is not allowed without permission.",
      "Confetti, glitter, and materials that are hard to clean should be avoided on the lawn.",
      "Client is responsible for removing personal décor items at the end of the event unless a cleanup package is booked.",
      "Any damage to venue property will be charged as per actual repair/replacement cost.",
    ],
  },
  {
    title: "Guest Capacity & Safety",
    items: [
      `Maximum recommended capacity is ${siteConfig.capacity} guests for lawn events.`,
      "Children must be supervised by guardians at all times.",
      "The management reserves the right to stop any activity that poses a safety risk.",
      "Parking is on a first-come basis within the designated area. Bageecha is not liable for vehicles or belongings left in the parking zone.",
    ],
  },
  {
    title: "Alcohol & Conduct",
    items: [
      "Alcohol service, if permitted for your event, must comply with local laws and applicable licences.",
      "The client is responsible for guest behaviour. Obscene, violent, or unlawful conduct may result in immediate event stoppage without refund.",
      "Security may be required for large events at the client's expense.",
    ],
  },
  {
    title: "Power, Sound & Weather",
    items: [
      "Generator backup is available for essential loads. High-power equipment must be declared in advance.",
      "Sound levels must remain within permissible limits.",
      "Outdoor events are weather-dependent. Light rain may not cancel an event; heavy rain or government restrictions may require rescheduling by mutual agreement.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <>
      <section className="hero-pattern bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Policies"
            title="Booking Terms & Venue Guidelines"
            description="Clear policies help your celebration run smoothly. Specific package terms in your booking confirmation take precedence where noted."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6">
          {policies.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-green-dark/8 bg-white p-6 sm:p-8"
            >
              <h2 className="font-display text-xl font-semibold text-blue-navy">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-mid" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-2xl bg-blue-navy p-6 text-center text-white sm:p-8">
            <p className="text-sm leading-relaxed text-white/85">
              Questions about these policies or need a custom arrangement for your event?
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white"
              >
                Ask on WhatsApp
              </a>
              <Link
                href="/contact/"
                className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
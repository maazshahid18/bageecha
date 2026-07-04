import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Events We Host",
  description: `Weddings, birthdays, school events & corporate gatherings at ${siteConfig.name} party lawn, ${siteConfig.location.city}.`,
};

export default function EventsPage() {
  return (
    <>
      <section className="hero-pattern bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Celebrations"
            title="Events We Love to Host"
            description="Whatever you're planning, our team works with you to create the perfect setup — from décor to catering coordination."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
          {siteConfig.events.map((event, i) => (
            <div
              key={event.slug}
              className={`grid items-center gap-8 rounded-2xl border border-green-dark/8 bg-white p-6 sm:p-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className={`flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br ${
                  i % 2 === 0
                    ? "from-green-dark/80 to-green-light/50"
                    : "from-blue-navy/80 to-blue-primary/50"
                }`}
              >
                <p className="font-display text-2xl font-semibold text-white">
                  {event.title}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-blue-navy">
                  {event.title}
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/70">
                  {event.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {event.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/65">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-mid" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={buildWhatsAppUrl({ eventType: event.title })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-green-dark px-6 py-2.5 text-sm font-semibold text-white hover:bg-green-mid"
                >
                  Enquire for {event.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-foreground/70">
            Don&apos;t see your event type?{" "}
            <Link href="/contact/" className="font-semibold text-green-dark hover:underline">
              Contact us
            </Link>{" "}
            — we host all kinds of celebrations.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
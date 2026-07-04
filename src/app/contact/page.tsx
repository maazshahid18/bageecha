import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: `Book ${siteConfig.fullName} in ${siteConfig.location.city}. Call ${siteConfig.phone} or send an enquiry.`,
};

export default function ContactPage() {
  const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.location.mapsQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <section className="hero-pattern bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Plan Your Event"
            description="Reach out for availability, pricing, and custom packages. We typically respond within a few hours."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-green-dark/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-blue-navy">
                Visit Us
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                {siteConfig.location.address}
              </p>
            </div>

            <div className="rounded-2xl border border-green-dark/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-blue-navy">
                Phone & WhatsApp
              </h3>
              <p className="mt-2">
                <a href={getCallUrl()} className="text-sm font-medium text-green-dark hover:underline">
                  +91 {siteConfig.phone}
                </a>
              </p>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white hover:brightness-110"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-green-dark/10 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-blue-navy">
                Email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-sm text-green-dark hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-green-dark/10">
              <iframe
                title="Bageecha location map"
                src={mapsEmbed}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
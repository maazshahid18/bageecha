import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { AmenityIcon } from "@/components/AmenityIcon";
import { CTABanner } from "@/components/CTABanner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Venue & Amenities",
  description: `Explore ${siteConfig.fullName} in ${siteConfig.location.city} — capacity for ${siteConfig.capacity} guests with stage, catering, parking, and more.`,
};

export default function VenuePage() {
  return (
    <>
      <section className="hero-pattern bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="The Venue"
            title="Space, Style & Everything You Need"
            description={`Spread across a beautifully maintained lawn in ${siteConfig.location.city}, Bageecha offers the perfect canvas for celebrations of every scale.`}
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-green-dark to-blue-navy p-8 text-white sm:p-10">
              <h3 className="font-display text-2xl font-semibold">At a Glance</h3>
              <dl className="mt-8 space-y-5">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between border-b border-white/15 pb-4">
                    <dt className="text-white/75">{stat.label}</dt>
                    <dd className="font-display text-xl font-semibold">{stat.value}</dd>
                  </div>
                ))}
                <div className="border-b border-white/15 pb-4">
                  <dt className="text-white/75">Location</dt>
                  <dd className="mt-2 text-sm font-medium leading-relaxed">
                    {siteConfig.location.landmark}, {siteConfig.location.city}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-blue-navy">
                Why Families Choose Bageecha
              </h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/70">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-light" />
                  Located in Professor&apos;s Colony, Gaya — near Sai Temple, with easy access for guests travelling from across Bihar.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-light" />
                  Experienced event support team to coordinate vendors, décor, and timings.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-light" />
                  Flexible packages — choose full-day, half-day, or custom event durations.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-green-light" />
                  Backed by {siteConfig.parentCompany}, a trusted name in the region.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Amenities" title="Everything Under One Roof (and Sky)" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.amenities.map((amenity) => (
              <div key={amenity.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream">
                  <AmenityIcon name={amenity.icon} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-blue-navy">
                  {amenity.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
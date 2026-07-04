import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { AmenityIcon } from "@/components/AmenityIcon";
import { GalleryGrid } from "@/components/GalleryGrid";
import { FAQSection } from "@/components/FAQSection";
import { CTABanner } from "@/components/CTABanner";
import { EnquiryForm } from "@/components/EnquiryForm";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <>
      <section className="hero-pattern relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-semibold tracking-widest text-green-mid uppercase">
              {siteConfig.location.city}, {siteConfig.location.state}
            </p>
            <h1 className="font-display mt-3 text-4xl leading-tight font-semibold text-blue-navy sm:text-5xl lg:text-6xl">
              Where Every Celebration Blooms
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-foreground/70">
              {siteConfig.name} is Gaya&apos;s premier party lawn — a lush green venue for weddings,
              birthdays, school events, and unforgettable gatherings of up to{" "}
              {siteConfig.capacity} guests.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-dark px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-green-mid"
              >
                Book on WhatsApp
              </a>
              <Link
                href="/gallery/"
                className="inline-flex items-center justify-center rounded-full border border-green-dark/25 px-8 py-3.5 text-sm font-semibold text-green-dark transition hover:bg-white"
              >
                View Gallery
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {siteConfig.stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-semibold text-green-dark">
                    {stat.value}
                  </p>
                  <p className="text-xs text-foreground/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-green-light/30 to-blue-primary/20 blur-2xl" />
            <div className="relative rounded-3xl bg-white p-8 shadow-xl sm:p-12">
              <Image
                src="/logo.png"
                alt={`${siteConfig.name} logo`}
                width={400}
                height={400}
                className="mx-auto h-auto w-full max-w-sm object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why Bageecha"
            title="A Venue Built for Grand Celebrations"
            description="From intimate gatherings to large-scale weddings, our lawn offers the space, amenities, and team to make your event seamless."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.amenities.map((amenity) => (
              <div
                key={amenity.title}
                className="rounded-2xl border border-green-dark/8 bg-white p-6 transition hover:border-green-mid/30 hover:shadow-md"
              >
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
          <div className="mt-10 text-center">
            <Link
              href="/venue/"
              className="text-sm font-semibold text-green-dark hover:text-green-mid"
            >
              Explore full venue details →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Events We Host"
            title="Perfect for Every Occasion"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {siteConfig.events.map((event) => (
              <div
                key={event.slug}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="h-2 bg-gradient-to-r from-green-light to-blue-primary" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-blue-navy">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {event.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {event.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-green-dark"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/events/"
              className="text-sm font-semibold text-green-dark hover:text-green-mid"
            >
              See all event types →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Gallery" title="Glimpses of Bageecha" />
          <div className="mt-12">
            <GalleryGrid limit={3} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gallery/"
              className="inline-flex rounded-full border border-green-dark/25 px-6 py-2.5 text-sm font-semibold text-green-dark hover:bg-cream"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Book Your Date"
                title="Get a Quick Quote"
                description="Tell us your event details and we'll confirm availability. Prefer a faster response? Call or WhatsApp us directly."
              />
              <div className="mt-8 space-y-4">
                <a
                  href={getCallUrl()}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-dark/10 text-green-dark">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-navy">Call Us</p>
                    <p className="text-sm text-foreground/60">+91 {siteConfig.phone}</p>
                  </div>
                </a>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-navy">WhatsApp</p>
                    <p className="text-sm text-foreground/60">Quick replies, any time</p>
                  </div>
                </a>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <div className="mt-12">
            <FAQSection />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTABanner } from "@/components/CTABanner";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: `Browse photos of weddings, parties and events at ${siteConfig.name}, ${siteConfig.location.city}.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="hero-pattern bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Gallery"
            title="Moments at Bageecha"
            description="Real photos from our events will be showcased here. Follow us on Instagram and Facebook for the latest event highlights."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <GalleryGrid />
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-foreground/65">
              See more on our social pages
            </p>
            <SocialLinks />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTABanner } from "@/components/CTABanner";
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
            description="Real photos from our events will be showcased here. Until then, explore the categories we capture best."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <GalleryGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
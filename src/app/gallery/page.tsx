import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { InstagramFeed } from "@/components/InstagramFeed";
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
            description="Event photos from the lawn plus our latest posts from Instagram."
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            align="left"
            eyebrow="Instagram"
            title="Latest from our feed"
            description={`Follow ${siteConfig.social.instagramHandle} for reels, setups, and celebration highlights.`}
          />
          <div className="mt-10">
            <InstagramFeed />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            align="left"
            eyebrow="Venue Photos"
            title="Event gallery"
          />
          <div className="mt-10">
            <GalleryGrid />
          </div>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-foreground/65">
              Follow us for more updates
            </p>
            <SocialLinks />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
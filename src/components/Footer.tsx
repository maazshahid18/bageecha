import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/components/SocialLinks";
import { buildWhatsAppUrl, getCallUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-green-dark/10 bg-blue-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt={siteConfig.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-lg bg-white p-1 object-contain"
            />
            <div>
              <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
              <p className="mt-1 text-xs tracking-widest text-white/70 uppercase">
                {siteConfig.tagline}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {siteConfig.description}
          </p>
          <p className="mt-3 text-sm text-white/60">
            A venture of{" "}
            <a
              href={siteConfig.parentUrl}
              className="text-green-light hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.parentCompany}
            </a>
          </p>
          <div className="mt-5">
            <p className="mb-3 text-xs font-medium tracking-widest text-white/50 uppercase">
              Follow Us
            </p>
            <SocialLinks variant="light" />
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link href="/venue/" className="hover:text-green-light">Venue & Amenities</Link></li>
            <li><Link href="/events/" className="hover:text-green-light">Events We Host</Link></li>
            <li><Link href="/gallery/" className="hover:text-green-light">Photo Gallery</Link></li>
            <li><Link href="/contact/" className="hover:text-green-light">Contact & Enquiry</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-light"
              >
                {siteConfig.location.address}
              </a>
            </li>
            <li>
              <a href={getCallUrl()} className="hover:text-green-light">
                +91 {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-light"
              >
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-green-light">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {year} {siteConfig.name} — {siteConfig.tagline}, {siteConfig.location.city}. All rights reserved.
      </div>
    </footer>
  );
}
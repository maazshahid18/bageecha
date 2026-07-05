"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/venue/", label: "Venue" },
  { href: "/events/", label: "Events" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-green-dark/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt={siteConfig.fullName}
            width={56}
            height={56}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-display text-lg font-semibold text-green-dark">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-xs font-medium tracking-widest text-blue-navy uppercase">
              {siteConfig.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.replace(/\/$/, ""));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-green-dark/10 text-green-dark"
                    : "text-foreground/70 hover:bg-cream hover:text-green-dark"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-green-dark px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-mid md:inline-flex"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
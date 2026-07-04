"use client";

import { useEffect } from "react";
import { instagramPosts } from "@/data/instagram-posts";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/components/SocialLinks";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramFeed() {
  useEffect(() => {
    if (instagramPosts.length === 0) return;

    const processEmbeds = () => window.instgrm?.Embeds.process();

    if (window.instgrm) {
      processEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = processEmbeds;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  if (instagramPosts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-green-dark/20 bg-cream px-6 py-12 text-center">
        <p className="font-display text-lg font-semibold text-blue-navy">
          Instagram feed coming soon
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm text-foreground/65">
          Add post URLs to{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">
            src/data/instagram-posts.ts
          </code>{" "}
          to show your latest reels and photos here. Follow us in the meantime:
        </p>
        <div className="mt-6 flex justify-center">
          <SocialLinks />
        </div>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-green-dark hover:underline"
        >
          {siteConfig.social.instagramHandle} on Instagram
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {instagramPosts.map((url) => (
        <div key={url} className="flex justify-center overflow-hidden rounded-2xl">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`${url.replace(/\/$/, "")}/?utm_source=ig_embed&utm_campaign=loading`}
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: 12,
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              margin: 0,
              maxWidth: 540,
              minWidth: 280,
              padding: 0,
              width: "100%",
            }}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              View post on Instagram
            </a>
          </blockquote>
        </div>
      ))}
    </div>
  );
}
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/venue/", changeFrequency: "monthly", priority: 0.9 },
    { path: "/events/", changeFrequency: "monthly", priority: 0.9 },
    { path: "/gallery/", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact/", changeFrequency: "monthly", priority: 0.8 },
    { path: "/policies/", changeFrequency: "yearly", priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

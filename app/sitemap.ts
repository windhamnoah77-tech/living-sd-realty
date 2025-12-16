import type { MetadataRoute } from "next";
import { posts } from "./insights/_posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "http://localhost:3001";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/opportunities",
    "/process",
    "/insights",
    "/trust-estate",
    "/investors",
    "/service-areas",
    "/service-areas/san-diego",
    "/service-areas/bay-area",
    "/service-areas/los-angeles",
    "/contact",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const insightRoutes = posts.map((p) => ({
    url: `${siteUrl}/insights/${p.slug}`,
    lastModified: new Date(p.updated || p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...insightRoutes];
}

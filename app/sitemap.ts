import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3001";

const routes = [
  "/",
  "/opportunities",
  "/process",
  "/trust-estate",
  "/investors",
  "/insights",
  "/service-areas",
  "/service-areas/san-diego",
  "/service-areas/bay-area",
  "/service-areas/los-angeles",
  "/contact",
  // add your insight slugs here if you’re hardcoding them
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

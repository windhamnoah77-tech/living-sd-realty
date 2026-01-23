import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// CHANGE THIS if your domain differs (no trailing slash)
const SITE_URL = "https://livingsandiegorealty.com";

const POSTS_DIR = path.join(process.cwd(), "content/insights");

type PostFrontmatter = {
  slug?: string;
  date?: string;     // YYYY-MM-DD
  updated?: string;  // YYYY-MM-DD
};

function getInsightUrls() {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files.map((file) => {
    const slugFromFile = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);
    const fm = data as PostFrontmatter;

    const slug = fm.slug ?? slugFromFile;
    const last = fm.updated ?? fm.date ?? new Date().toISOString().slice(0, 10);

    return {
      url: `${SITE_URL}/insights/${slug}`,
      lastModified: new Date(last),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${SITE_URL}/insights`, lastModified: new Date(), priority: 0.9 },
    // Add any other important pages you want indexed faster:
    // { url: `${SITE_URL}/contact`, lastModified: new Date(), priority: 0.6 },
  ];

  const insightRoutes = getInsightUrls();

  return [...staticRoutes, ...insightRoutes];
}

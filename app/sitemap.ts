import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// No trailing slash
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://livingsandiegorealty.com";

const POSTS_DIR = path.join(process.cwd(), "content/insights");

type PostFrontmatter = {
  slug?: string;
  date?: string; // YYYY-MM-DD
  updated?: string; // YYYY-MM-DD
};

function getInsightRoutes(): MetadataRoute.Sitemap {
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

    // Include a modification date only when the article supplies one.
    const last =
      fm.updated ?? fm.date;

    return {
      url: `${SITE_URL}/insights/${slug}`,
      ...(last ? { lastModified: new Date(last) } : {}),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Put ALL of your important app routes here
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },

    { url: `${SITE_URL}/listing-options`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/55-plus`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/trust-estate`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/investors`, changeFrequency: "monthly", priority: 0.9 },

    { url: `${SITE_URL}/process`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/opportunities`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/service-areas`, changeFrequency: "monthly", priority: 0.7 },

    { url: `${SITE_URL}/insights`, changeFrequency: "weekly", priority: 0.8 },

    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const insightRoutes = getInsightRoutes();

  // Optional: de-dupe just in case
  const seen = new Set<string>();
  const combined = [...staticRoutes, ...insightRoutes].filter((r) => {
    if (seen.has(r.url)) return false;
    seen.add(r.url);
    return true;
  });

  return combined;
}

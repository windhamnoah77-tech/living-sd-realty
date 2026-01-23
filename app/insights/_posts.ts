import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string; // YYYY-MM-DD
  updated?: string; // YYYY-MM-DD
  category: "Trust & Estate" | "Investors" | "Market Notes";
  tags: string[];
  readingTime: string;
  excerpt: string;
  sections: Array<{
    h: string;
    p?: string;
    bullets?: string[];
  }>;
  faq?: Array<{ q: string; a: string }>;
};

const POSTS_DIR = path.join(process.cwd(), "content/insights");

function loadPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const slugFromFile = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);

    return {
      slug: String(data.slug ?? slugFromFile),
      title: String(data.title ?? ""),
      seoTitle: String(data.seoTitle ?? ""),
      seoDescription: String(data.seoDescription ?? ""),
      date: String(data.date ?? ""),
      updated: data.updated ? String(data.updated) : undefined,
      category: data.category as Post["category"],
      tags: (data.tags ?? []) as string[],
      readingTime: String(data.readingTime ?? ""),
      excerpt: String(data.excerpt ?? ""),
      sections: (data.sections ?? []) as Post["sections"],
      faq: data.faq ? (data.faq as Post["faq"]) : undefined,
    } satisfies Post;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const posts: Post[] = loadPosts();

export const topics = [
  { key: "all", label: "All" },
  { key: "trust-estate", label: "Trust & Estate" },
  { key: "investors", label: "Investors" },
  { key: "market-notes", label: "Market Notes" },
] as const;

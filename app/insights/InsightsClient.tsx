"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Filter = "all" | "trust-estate" | "investors" | "market-notes";

type Article = {
  title: string;
  excerpt: string;
  lane: "Trust & Estate" | "Investors" | "Market Notes";
  slug: string; // MUST match your route: /insights/<slug>
  dateLabel: string;
  readTime: string;
};

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "trust-estate", label: "Trust & Estate" },
  { key: "investors", label: "Investors" },
  { key: "market-notes", label: "Market Notes" },
];

// ✅ IMPORTANT: set this to a slug you ACTUALLY have
// Example from your sitemap:
const GUIDE_SLUG = "trust-sale-checklist-trustees-executors-san-diego";

const articles: Article[] = [
  {
    title: "Trust sale checklist for trustees & executors (San Diego)",
    excerpt:
      "A practical checklist to keep the sale defensible: documents, disclosures, pricing rationale, timelines, and how to avoid messy beneficiary fallout.",
    lane: "Trust & Estate",
    slug: "trust-sale-checklist-trustees-executors-san-diego",
    dateLabel: "Updated Dec 2025",
    readTime: "6 min",
  },
  {
    title: "How to price a trust property with defensible valuation",
    excerpt:
      "Comps are the beginning, not the conclusion. Here’s how to build a pricing rationale that holds up under fiduciary scrutiny.",
    lane: "Trust & Estate",
    slug: "how-to-price-a-trust-property-defensible-valuation",
    dateLabel: "Updated Dec 2025",
    readTime: "7 min",
  },
  {
    title: "Occupied inherited property: tenants, cash-for-keys, and clean options",
    excerpt:
      "What trustees/executors can do when the property isn’t vacant — and how to keep the process ethical, lawful, and efficient.",
    lane: "Trust & Estate",
    slug: "occupied-inherited-property-tenants-options",
    dateLabel: "Updated Dec 2025",
    readTime: "6 min",
  },
  {
    title: "Off-market real estate in San Diego: when it actually makes sense",
    excerpt:
      "Off-market isn’t automatically a deal. Here’s when it’s smart, when it’s marketing, and how to underwrite without fairy dust.",
    lane: "Investors",
    slug: "off-market-real-estate-san-diego-when-it-makes-sense",
    dateLabel: "Updated Dec 2025",
    readTime: "5 min",
  },
  {
    title: "Investor underwriting: conservative assumptions that win long-term",
    excerpt:
      "A simple underwriting framework: rent assumptions, expenses, repairs, vacancy, and how to not lie to yourself in Excel.",
    lane: "Investors",
    slug: "investor-underwriting-conservative-assumptions",
    dateLabel: "Updated Dec 2025",
    readTime: "7 min",
  },
];

function laneToFilter(lane: Article["lane"]): Filter {
  if (lane === "Trust & Estate") return "trust-estate";
  if (lane === "Investors") return "investors";
  return "market-notes";
}

export default function InsightsClient() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (active === "all") return articles;
    return articles.filter((a) => laneToFilter(a.lane) === active);
  }, [active]);

  const pillBase =
    "inline-flex items-center rounded-full border px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition";
  const pillActive = "border-black bg-black text-white";
  const pillInactive =
    "border-neutral-200 bg-white text-neutral-700 hover:border-black";

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Insights · Trust & Estate · Investors</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            Clear guidance. Defensible decisions. No fluff.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            Trustees and executors need clean process and a rationale that holds up later.
            Investors need underwriting discipline and fast execution.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 items-center">
            <Link
              href={`/insights/${GUIDE_SLUG}`}
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Read the guide
            </Link>

            <div className="flex flex-wrap gap-3">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActive(f.key)}
                  className={`${pillBase} ${active === f.key ? pillActive : pillInactive}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((a) => (
              <div key={a.slug} className="card p-7">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {a.lane} · {a.dateLabel} · {a.readTime}
                </div>

                <h2 className="mt-3 brand-serif text-2xl">{a.title}</h2>
                <p className="mt-3 text-sm text-neutral-700">{a.excerpt}</p>

                <div className="mt-6">
                  <Link className="underline" href={`/insights/${a.slug}`}>
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 text-sm text-neutral-600">
              No posts in that category yet.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

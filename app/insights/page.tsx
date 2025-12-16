import Link from "next/link";
import type { Metadata } from "next";
import { posts, topics } from "./_posts";

export const metadata: Metadata = {
  title: "Insights | Trust & Estate + Investor Real Estate | Living San Diego Realty",
  description:
    "Trust & estate real estate guidance for trustees and executors, plus investor-focused underwriting notes. San Diego-first, California by request.",
  alternates: { canonical: "/insights" },
};

function sortNewest(a: { date: string }, b: { date: string }) {
  return b.date.localeCompare(a.date);
}

export default function InsightsIndex({
  searchParams,
}: {
  searchParams?: { topic?: string };
}) {
  const topic = (searchParams?.topic || "all").toLowerCase();

  const filtered = posts
    .filter((p) => {
      if (topic === "all") return true;
      if (topic === "trust-estate") return p.category === "Trust & Estate";
      if (topic === "investors") return p.category === "Investors";
      if (topic === "market-notes") return p.category === "Market Notes";
      return true;
    })
    .sort(sortNewest);

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Insights | Living San Diego Realty",
    description: metadata.description,
    url: "/insights",
    blogPost: filtered.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      dateModified: p.updated || p.date,
      mainEntityOfPage: `/insights/${p.slug}`,
    })),
  };

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Insights · Trust & Estate · Investors · San Diego</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            Practical guidance for trustees, executors, and serious investors.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            This is a library, not a “blog.” Trustees and executors need defensible
            pricing, clean disclosures, and disciplined execution. Investors need
            conservative underwriting and clean terms. The goal is the same: fewer
            surprises, stronger outcomes.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {topics.map((t) => {
              const active =
                (topic === "all" && t.key === "all") || topic === t.key;
              const href = t.key === "all" ? "/insights" : `/insights?topic=${t.key}`;
              return (
                <Link
                  key={t.key}
                  href={href}
                  className={
                    "inline-flex items-center rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition " +
                    (active
                      ? "border-black bg-black text-white"
                      : "border-neutral-200 bg-white text-neutral-700 hover:border-black")
                  }
                >
                  {t.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/trust-estate"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              Trust &amp; estate lane
            </Link>
            <Link
              href="/investors"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              Investor lane
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Schedule an intro call
            </Link>
          </div>
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
        />
      </section>

      <section className="page-section pt-0">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl">Start here</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                Pillar guides written to answer the real questions trustees, executors,
                and investors ask before committing to a plan.
              </p>
            </div>
            <span className="hidden md:inline-flex pill">
              {filtered.length} guides
            </span>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <article key={p.slug} className="card p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {p.category}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {p.readingTime}
                  </div>
                </div>

                <h3 className="mt-3 brand-serif text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">{p.excerpt}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm">
                  <Link className="underline" href={`/insights/${p.slug}`}>
                    Read guide
                  </Link>
                  <Link className="underline" href="/contact">
                    Talk through your situation
                  </Link>
                </div>

                <div className="mt-4 text-xs text-neutral-500">
                  Published {p.date}
                  {p.updated ? ` · Updated ${p.updated}` : ""}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 card p-7 bg-neutral-50">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              SEO positioning (for Google + humans)
            </div>
            <p className="mt-4 text-neutral-700 max-w-prose">
              <span className="font-semibold">Trust &amp; estate real estate in San Diego</span>{" "}
              is not a standard retail sale. Trustees and executors need defensible
              valuation logic, disciplined disclosures, tight terms, and a clean file
              from listing to close. Investors need conservative underwriting,
              fast execution, and a pipeline that’s filtered — not noisy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

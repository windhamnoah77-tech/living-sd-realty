import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "../_posts";

type Params = { slug?: string | string[] };

function getPost(slugParam: Params["slug"]) {
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
  if (!slug) return null;

  const clean = decodeURIComponent(slug).replace(/^\/+/, "");
  return posts.find((p) => p.slug === clean) ?? null;
}

function sectionId(h: string) {
  return h
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params | Promise<Params>;
}): Promise<Metadata> {
  const p = await params;
  const post = getPost(p.slug);
  if (!post) return {};

  const canonical = `/insights/${post.slug}`;

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      url: canonical,
      type: "article",
    },
    twitter: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const p = await params;
  const post = getPost(p.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    mainEntityOfPage: `/insights/${post.slug}`,
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  return (
    <main>
      {/* HERO */}
      <section className="page-section">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/insights" className="pill">
              Insights
            </Link>
            <span className="pill">{post.category}</span>
            <span className="text-xs text-neutral-500">{post.readingTime}</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            {post.title}
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">{post.excerpt}</p>

          <div className="mt-6 text-xs text-neutral-500">
            Published {post.date}
            {post.updated ? ` · Updated ${post.updated}` : ""}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>

      {/* BODY */}
      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-12 gap-6 items-start">
          {/* TOC */}
          <aside className="md:col-span-4">
            <div className="card p-6 sticky top-24">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                On this page
              </div>

              <div className="mt-4 space-y-2 text-sm">
                {post.sections.map((s) => (
                  <a
                    key={s.h}
                    href={`#${sectionId(s.h)}`}
                    className="block underline text-neutral-800"
                  >
                    {s.h}
                  </a>
                ))}

                {post.faq?.length ? (
                  <a href="#faq" className="block underline text-neutral-800">
                    FAQ
                  </a>
                ) : null}
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
                >
                  Talk through your situation
                </Link>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="md:col-span-8 space-y-6">
            {post.sections.map((s) => (
              <section key={s.h} id={sectionId(s.h)} className="card p-7">
                <h2 className="brand-serif text-2xl">{s.h}</h2>
                {s.p ? <p className="mt-3 text-neutral-700">{s.p}</p> : null}

                {s.bullets?.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {/* FAQ */}
            {post.faq?.length ? (
              <section id="faq" className="card p-7 bg-neutral-50">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  FAQ
                </div>

                <h2 className="mt-3 brand-serif text-2xl">Common questions</h2>

                <div className="mt-5 space-y-4">
                  {post.faq.map((f) => (
                    <div
                      key={f.q}
                      className="rounded-xl border border-neutral-200 bg-white p-5"
                    >
                      <div className="font-semibold text-neutral-900">{f.q}</div>
                      <div className="mt-2 text-sm text-neutral-700">{f.a}</div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* CTA */}
            <section className="card p-7 bg-neutral-900 text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
                Next step
              </div>

              <h2 className="mt-3 brand-serif text-3xl">
                Want a clean plan for your specific situation?
              </h2>

              <p className="mt-3 text-neutral-200">
                One short call. Clear valuation logic. Disciplined next steps. No
                retail noise.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-2xl border border-white bg-white text-black hover:bg-neutral-900 hover:text-white transition"
                >
                  Schedule an intro call
                </Link>

                <Link
                  href="/insights"
                  className="px-5 py-3 rounded-2xl border border-white/40 text-white hover:border-white transition"
                >
                  Back to Insights
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

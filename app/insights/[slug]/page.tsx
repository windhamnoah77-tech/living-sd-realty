import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "../_posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `/insights/${post.slug}` },
  };
}

export default function InsightPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    mainEntityOfPage: `/insights/${post.slug}`,
  };

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600">
            <Link className="underline" href="/insights">
              Insights
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-700">{post.category}</span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="pill">{post.category}</span>
            <span className="pill">{post.readingTime}</span>
            <span className="pill">Published {post.date}</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            {post.title}
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            {post.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Talk through your situation
            </Link>
            <Link
              href="/process"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              View the process
            </Link>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
          />
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container grid gap-6">
          {post.sections.map((s) => (
            <div key={s.h} className="card p-7">
              <h2 className="brand-serif text-2xl">{s.h}</h2>
              {s.p ? <p className="mt-3 text-sm text-neutral-700">{s.p}</p> : null}
              {s.bullets?.length ? (
                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {post.faq?.length ? (
            <div className="card p-7 bg-neutral-50">
              <h2 className="brand-serif text-2xl">FAQ</h2>
              <div className="mt-5 grid md:grid-cols-2 gap-6">
                {post.faq.map((f) => (
                  <div key={f.q} className="card p-6 bg-white">
                    <div className="font-semibold text-neutral-900">{f.q}</div>
                    <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-neutral-500">
                Educational content only — not legal advice. For legal questions,
                coordinate with qualified counsel.
              </div>
            </div>
          ) : null}

          <div className="card p-7 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Clean next step
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              If you’re a trustee/executor or investor, start with facts.
            </h2>
            <p className="mt-3 text-neutral-200">
              Address + occupancy status + timeline. Investors: add buy box + proof of funds.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-white bg-white text-black hover:bg-neutral-900 hover:text-white transition"
              >
                Schedule an intro call
              </Link>
              <Link
                href="/opportunities"
                className="px-5 py-3 rounded-2xl border border-white/40 text-white hover:border-white transition"
              >
                View opportunities
              </Link>
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <Link className="underline" href="/insights">
              ← Back to insights
            </Link>
            <Link className="underline" href="/trust-estate">
              Trust &amp; estate lane →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

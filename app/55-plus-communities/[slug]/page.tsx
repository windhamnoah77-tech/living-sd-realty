import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { communityPages } from "../../lib/communities";
import { site } from "../../lib/site";

type Params = { slug: string };

function getCommunity(slug: string) {
  return communityPages.find((c) => c.slug === slug) ?? null;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return communityPages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCommunity(slug);
  if (!c) return {};
  const url = `/55-plus-communities/${c.slug}`;
  return {
    title: { absolute: `${c.page.seoTitle} | Living San Diego Realty` },
    description: c.page.seoDescription,
    alternates: { canonical: url },
    openGraph: { title: c.page.seoTitle, description: c.page.seoDescription, url, type: "article" },
    twitter: { title: c.page.seoTitle, description: c.page.seoDescription },
  };
}

export default async function CommunityPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = getCommunity(slug);
  if (!c) notFound();
  const { page } = c;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "55+ Communities", item: `${site.url}/55-plus-communities` },
        { "@type": "ListItem", position: 3, name: c.name, item: `${site.url}/55-plus-communities/${c.slug}` },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-section pt-3 md:pt-5">
        <div className="container grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="text-xs text-neutral-500">
              <Link href="/55-plus-communities" className="underline">55+ Communities</Link> / {c.name}
            </div>
            <span className="pill mt-4">55+ Community · {c.city}</span>
            <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
              Selling a home in {c.name}, {c.city}.
            </h1>
            <p className="mt-4 text-neutral-600 max-w-prose">{page.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
              >
                What&apos;s my {c.name} home worth?
              </Link>
              <Link
                href="/listing-fees"
                className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
              >
                Listings starting at 1%
              </Link>
            </div>
          </div>

          <aside className="card p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">{c.name} at a glance</div>
            <dl className="mt-4 space-y-3 text-sm">
              {page.facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 border-b border-neutral-200 pb-3 last:border-0">
                  <dt className="text-neutral-500">{f.label}</dt>
                  <dd className="text-right text-neutral-900">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 text-xs uppercase tracking-[0.2em] text-neutral-500">Amenities</div>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              {page.amenities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-neutral-500">
              Details from public sources. Confirm HOA rules and dues with the association.
            </p>
          </aside>
        </div>
      </section>

      <section className="page-section bg-neutral-50">
        <div className="container">
          <h2 className="brand-serif text-3xl">What {c.name} sellers should know</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {page.sellerNotes.map((n) => (
              <div key={n.h} className="card p-6 bg-white">
                <h3 className="brand-serif text-lg">{n.h}</h3>
                <p className="mt-2 text-sm text-neutral-600">{n.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="card p-8 md:p-10">
            <h2 className="brand-serif text-3xl">{c.name} seller FAQs</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {page.faq.map((f) => (
                <div key={f.q} className="card p-6">
                  <h3 className="brand-serif text-lg">{f.q}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container">
          <div className="card p-8 md:p-10 bg-neutral-900 text-white">
            <h2 className="brand-serif text-3xl">Thinking about selling in {c.name}?</h2>
            <p className="mt-3 text-neutral-200 max-w-prose">
              Send your address and I&apos;ll reply with recent {c.name} sales that match
              your home, a price range and an estimate of your proceeds.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-white bg-white text-black hover:bg-neutral-900 hover:text-white transition"
              >
                Get my home&apos;s value
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="px-5 py-3 rounded-2xl border border-white/40 text-white hover:border-white transition"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

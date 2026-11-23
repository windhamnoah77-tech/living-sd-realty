import Link from "next/link";
import type { Metadata } from "next";
import { communities } from "../lib/communities";
import { site } from "../lib/site";

const title = "Selling a Home in a San Diego 55+ Community";
const description =
  "Selling in Oceana, Ocean Hills, Oaks North, Rancho Carlsbad or another San Diego 55+ community? How pricing, HOA documents and buyer rules work, and how Noah Windham helps.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Living San Diego Realty` },
  description,
  alternates: { canonical: "/55-plus-communities" },
  openGraph: { title, description, url: "/55-plus-communities", type: "website" },
  twitter: { title, description },
};

const steps = [
  {
    h: "Price against your own community",
    p: "55+ homes sell to a specific pool of buyers. The right comparable sales come from inside your community, matched by floor plan, size and condition.",
  },
  {
    h: "Get the HOA documents early",
    p: "Buyers review the rules, budget, reserves and any planned assessments. Ordering the resale package up front keeps escrow on schedule.",
  },
  {
    h: "Market to qualified buyers",
    p: "Age-restricted communities have occupancy rules. Marketing reaches buyers who qualify, and offers are screened before you sign.",
  },
  {
    h: "Plan the move with the sale",
    p: "Downsizing, moving closer to family or into care: the sale and the move need one timeline. Noah coordinates vendors, clean-out and access when needed.",
  },
];

export default function FiftyFivePlusPage() {
  const areas = Array.from(new Set(communities.map((c) => c.area)));

  return (
    <main>
      <section className="page-section pt-3 md:pt-5">
        <div className="container max-w-3xl">
          <span className="pill">55+ Communities · San Diego County</span>
          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            Selling a home in a San Diego 55+ community.
          </h1>
          <p className="mt-4 text-neutral-600">
            Whether it&apos;s your own home or a parent&apos;s, selling in a 55+ community
            works differently: a narrower buyer pool, HOA rules, and often a move to plan
            at the same time. I handle the sale and the details around it.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Get my home&apos;s value
            </Link>
            <Link
              href="/listing-fees"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              Listings starting at 1%
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.h} className="card p-6">
              <div className="text-xs text-neutral-500">0{i + 1}</div>
              <h2 className="mt-2 brand-serif text-lg">{s.h}</h2>
              <p className="mt-2 text-sm text-neutral-600">{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section bg-neutral-50">
        <div className="container">
          <h2 className="brand-serif text-3xl">Communities I work in</h2>
          <p className="mt-2 text-neutral-600 max-w-prose">
            Don&apos;t see yours? I work across San Diego County&apos;s 55+ communities.
            Send the address and I&apos;ll pull recent sales from your community.
          </p>

          {areas.map((area) => (
            <div key={area} className="mt-8">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">{area}</div>
              <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {communities
                  .filter((c) => c.area === area)
                  .map((c) => {
                    const inner = (
                      <>
                        <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">{c.city}</div>
                        <h3 className="mt-2 brand-serif text-lg">{c.name}</h3>
                        <p className="mt-2 text-sm text-neutral-600">{c.blurb}</p>
                        {c.slug && <div className="mt-3 text-sm underline">Seller guide →</div>}
                      </>
                    );
                    return c.slug ? (
                      <Link
                        key={c.name}
                        href={`/55-plus-communities/${c.slug}`}
                        className="card p-6 bg-white hover:border-black transition"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div key={c.name} className="card p-6 bg-white">
                        {inner}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="card p-8 md:p-10 bg-neutral-900 text-white">
            <h2 className="brand-serif text-3xl">What would your home sell for?</h2>
            <p className="mt-3 text-neutral-200 max-w-prose">
              Send your address and I&apos;ll reply with recent sales in your community,
              a price range and what you&apos;d likely walk away with.
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

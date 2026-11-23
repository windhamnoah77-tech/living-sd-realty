import Link from "next/link";
import type { Metadata } from "next";
import ProceedsCalculator from "./ProceedsCalculator";
import { feeDisclosure, listingPlans, site } from "../lib/site";

const title = "1% Listing Fee in San Diego: Full-Service Plans From 1%";
const description =
  "Sell your San Diego home with a full MLS listing starting at 1%. Compare what each plan includes and estimate your net proceeds.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Living San Diego Realty` },
  description,
  alternates: { canonical: "/listing-fees" },
  openGraph: { title, description, url: "/listing-fees", type: "website" },
  twitter: { title, description },
};

const faqs = [
  {
    q: "Is a 1% listing a discount or limited-service listing?",
    a: "No. The 1% Market-Ready plan is a full MLS listing with Noah representing you: pricing, photos, marketing, negotiation, disclosures and escrow. What it leaves to you is the hands-on prep: cleanout, repairs, vendors and showing access.",
  },
  {
    q: "Does the listing fee include the buyer's agent?",
    a: "No. Buyer-agent compensation is separate. You decide whether to offer any, and how much, and we can negotiate it with each buyer.",
  },
  {
    q: "Can I switch plans after we list?",
    a: "Yes, if the work changes. If you start with Market-Ready and later want Noah to run vendors or showings, you can move to a Managed plan in writing.",
  },
  {
    q: "Which plan fits a trust or estate sale?",
    a: "Trustees who live nearby and can manage the prep often choose Market-Ready. Families out of the area, or homes that need a cleanout or estate sale, usually fit Managed Sale + Move.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ListingFeesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-section pt-3 md:pt-5">
        <div className="container max-w-3xl">
          <span className="pill">Listing options · San Diego County</span>
          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            Full-service listings starting at 1%.
          </h1>
          <p className="mt-4 text-neutral-600">
            Selling a home shouldn&apos;t cost more than it has to. Every plan is a full MLS
            listing with Noah representing you. You choose how much of the work he takes
            on, and you only pay for that.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Get my home&apos;s value
            </Link>
            <a
              href="#calculator"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              Estimate my proceeds
            </a>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-3 gap-6">
          {listingPlans.map((p) => {
            const featured = "featured" in p && p.featured;
            return (
              <div key={p.id} className={`card p-7 flex flex-col ${featured ? "border-black" : ""}`}>
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">{p.name}</div>
                  {featured && (
                    <span className="rounded-full bg-black px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-white">
                      Recommended
                    </span>
                  )}
                </div>
                <h2 className="mt-2 brand-serif text-5xl">{p.rate}%</h2>
                <p className="mt-3 text-sm text-neutral-700">{p.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden>✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-neutral-500">{p.sellerHandles}</p>
                <div className="mt-auto pt-6 text-sm text-neutral-600">
                  On an $800,000 sale: <span className="text-black font-medium">${((800000 * p.rate) / 100).toLocaleString("en-US")}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container mt-4 text-xs text-neutral-500">{feeDisclosure}</div>
      </section>

      <section id="calculator" className="page-section bg-neutral-50 scroll-mt-24">
        <div className="container">
          <ProceedsCalculator />
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Questions</div>
            <h2 className="mt-3 brand-serif text-3xl">Listing fee FAQs</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {faqs.map((f) => (
                <div key={f.q} className="card p-6">
                  <h3 className="brand-serif text-lg">{f.q}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link className="underline" href="/insights/how-to-sell-a-house-in-a-trust-san-diego">
                Selling a house in a trust
              </Link>
              <Link className="underline" href="/55-plus-communities">
                Selling in a 55+ community
              </Link>
              <a className="underline" href={`tel:${site.phoneTel}`}>
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

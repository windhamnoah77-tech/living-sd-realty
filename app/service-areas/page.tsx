import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | Trust & Estate + Investor Real Estate | Living San Diego Realty",
  description:
    "Service areas for trustees, executors, families, and investors: San Diego first, Bay Area and Los Angeles by request. Defensible pricing, clean execution, and disciplined negotiation.",
  alternates: { canonical: "/service-areas" },
};

const areas = [
  {
    name: "San Diego",
    href: "/service-areas/san-diego",
    bullets: ["North Park", "Mission Hills", "Point Loma", "La Jolla", "Clairemont", "Encinitas"],
    note:
      "Home base. Most trust/estate work starts here—where execution and file discipline matter most.",
  },
  {
    name: "Bay Area",
    href: "/service-areas/bay-area",
    bullets: ["San Mateo", "Walnut Creek", "Oakland Hills", "Palo Alto (by request)"],
    note:
      "For families and investors with multi-market needs. Bay work is handled by arrangement.",
  },
  {
    name: "Los Angeles",
    href: "/service-areas/los-angeles",
    bullets: ["Studio City", "Sherman Oaks", "Encino", "Burbank", "Pasadena (by request)"],
    note:
      "By request for clients who need disciplined execution and a quiet process.",
  },
];

export default function ServiceAreasPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you only work in San Diego?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "San Diego is home base. I also work in the Bay Area and Los Angeles by request, especially for families and investors with multi-market needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle trust and estate property sales outside San Diego?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, by arrangement. The key is confirming authority, timeline, occupancy constraints, and execution plan—then coordinating cleanly with the right local partners when needed.",
        },
      },
    ],
  };

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Service Areas · Trust & Estate · Investors</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            San Diego first. Bay Area and Los Angeles by request.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            Geography matters—but the bigger difference is execution. Trustees and executors
            need defensible pricing, disciplined disclosures, and a clean file. Investors
            need conservative underwriting and fast, quiet closings. I keep the work tight
            across markets.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
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
              Investors lane
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Contact
            </Link>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
          />
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div key={a.name} className="card p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                {a.name}
              </div>
              <h2 className="mt-3 brand-serif text-2xl">{a.name}</h2>
              <p className="mt-3 text-sm text-neutral-600">{a.note}</p>

              <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link className="underline text-sm" href={a.href}>
                  Explore {a.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

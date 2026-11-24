import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { communities } from "./lib/communities";
import { feeDisclosure, listingPlans, site } from "./lib/site";

const title = "Sell Your San Diego Home: Trust, Estate & 55+ Sales From 1%";
const description =
  "Selling a San Diego home in a trust, an estate, or a 55+ community? Noah Windham handles the whole sale. Full-service listings starting at 1%.";

export const metadata: Metadata = {
  title: { absolute: `${title} | Living San Diego Realty` },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", type: "website" },
  twitter: { title, description },
};

const faqs = [
  {
    q: "Is the 1% listing really full service?",
    a: "Yes. The 1% Market-Ready plan includes pricing, professional photos, MLS exposure, negotiation, disclosures and escrow through closing. You handle the prep and vendors. If you want Noah to run those too, the Managed plans cover it.",
  },
  {
    q: "Do I need probate to sell a house in a trust?",
    a: "Usually not. A home properly held in a living trust can typically be sold by the successor trustee without going to court. Homes outside a trust often go through probate first. Your attorney confirms which applies, and Noah coordinates the sale around it.",
  },
  {
    q: "Can you sell a parent's home in a 55+ community?",
    a: "Yes. That's a large part of Noah's work: age-restriction rules, HOA documents, buyer qualification and, when family lives out of the area, managing access, vendors and the move.",
  },
  {
    q: "Do you work with attorneys, CPAs and fiduciaries?",
    a: "Yes. Noah coordinates with your estate attorney, CPA or professional fiduciary so the sale matches your authority and timeline. You stay the decision-maker.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `${site.name} · ${site.brand}`,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/images/placeholder-3.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2535 Camino del Rio S #325",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92108",
      addressCountry: "US",
    },
    areaServed: [
      "San Diego County",
      "Oceanside",
      "Carlsbad",
      "Rancho Bernardo",
      "Vista",
      "San Marcos",
      "Escondido",
    ],
    knowsAbout: [
      "Trust sales",
      "Probate and estate sales",
      "55+ community home sales",
      "Downsizing",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function HomePage() {
  // Communities with their own seller guide first, then the rest.
  const featured = [...communities]
    .sort((a, b) => Number(Boolean(b.slug)) - Number(Boolean(a.slug)))
    .slice(0, 6);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="page-section pt-3 md:pt-5">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="pill">Trust & Estate · 55+ Communities · San Diego County</span>

            <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
              Selling a San Diego home in a trust, estate, or 55+ community? I handle all of it.
            </h1>

            <p className="mt-4 text-lg text-neutral-900">
              Full-service listings starting at 1%.
            </p>

            <p className="mt-3 text-neutral-600 max-w-prose">
              I help trustees, families and longtime owners sell with a clear price,
              a clear plan and one person managing the details, from prep and
              disclosures to the move and closing.
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
                See what 1% includes
              </Link>

              <a
                href={`tel:${site.phoneTel}`}
                className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
              >
                Call {site.phoneDisplay}
              </a>
            </div>

            <div className="mt-5 text-xs text-neutral-500 space-y-1">
              <div>
                Noah Windham · CA DRE #02227646 · Black Label Realty · CA DRE #02254507
              </div>
              <div>Serving San Diego County, with a focus on North County.</div>
            </div>
          </div>

          <div className="card p-6 md:p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Who I help
            </div>

            <div className="mt-5 space-y-5">
              <Link href="/trust-estate" className="block group">
                <div className="brand-serif text-xl group-hover:underline">Trustees & executors</div>
                <p className="mt-1 text-sm text-neutral-300">
                  Selling a home held in a trust or going through probate.
                </p>
              </Link>
              <Link href="/55-plus-communities" className="block group">
                <div className="brand-serif text-xl group-hover:underline">55+ homeowners</div>
                <p className="mt-1 text-sm text-neutral-300">
                  Selling in Oceana, Ocean Hills, Oaks North and other 55+ communities.
                </p>
              </Link>
              <Link href="/insights/how-to-sell-a-house-in-a-trust-san-diego" className="block group">
                <div className="brand-serif text-xl group-hover:underline">Families of a parent</div>
                <p className="mt-1 text-sm text-neutral-300">
                  Handling a parent&apos;s home, often from out of the area.
                </p>
              </Link>
            </div>

            <div className="mt-6 text-xs text-neutral-300">
              One point of contact · Clear numbers · Direct updates
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE: Hero banner */}
      <div className="container -mt-2 mb-2">
        <Image
          src="/images/placeholder-1.jpg"
          alt="Coastal San Diego home for sale"
          width={1200}
          height={600}
          className="w-full rounded-2xl object-cover max-h-[480px]"
          priority
        />
      </div>

      {/* VALUE PROPS */}
      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="brand-serif text-lg">Starting at 1%.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Full MLS exposure, professional photos and negotiation, without paying
              for services you don&apos;t need.
            </p>
          </div>

          <div className="card p-6">
            <div className="brand-serif text-lg">Trust and estate sales.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Pricing and paperwork that hold up for beneficiaries, attorneys and the
              title company.
            </p>
          </div>

          <div className="card p-6">
            <div className="brand-serif text-lg">55+ community know-how.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Age rules, HOA documents and the buyers who are looking in your community.
            </p>
          </div>
        </div>
      </section>

      {/* LISTING OPTIONS */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Listing options
            </div>
            <h2 className="mt-3 brand-serif text-3xl">Pay for the help you actually need.</h2>
            <p className="mt-3 text-neutral-600">
              Every plan is a full MLS listing with Noah representing you. The difference
              is how much of the work he takes off your plate.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {listingPlans.map((p) => (
              <div
                key={p.id}
                className={`card p-7 ${"featured" in p && p.featured ? "border-black" : ""}`}
              >
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">{p.name}</div>
                <div className="mt-2 brand-serif text-4xl">{p.rate}%</div>
                <p className="mt-3 text-sm text-neutral-600">{p.tagline}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <Link
              href="/listing-fees"
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Compare plans and estimate your proceeds
            </Link>
            <span className="text-xs text-neutral-500 max-w-md">{feeDisclosure}</span>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="page-section">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Trust & estate sales
            </div>

            <div className="mt-3 grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="brand-serif text-3xl">Clarity, not chaos.</h2>
                <p className="mt-3 text-neutral-600 max-w-prose">
                  Selling a home in a trust or estate comes with extra steps: confirming
                  authority, notifying beneficiaries, disclosures on a home you may never
                  have lived in. I keep the process organized so the sale holds up later.
                </p>

                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <Link className="underline" href="/insights/how-to-sell-a-house-in-a-trust-san-diego">
                    How to sell a house in a trust
                  </Link>
                  <Link className="underline" href="/trust-estate">
                    Trust & estate services
                  </Link>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-neutral-700">
                <li>Representation for trustees, executors and families</li>
                <li>Coordination with attorneys and CPAs (you stay in control)</li>
                <li>Pricing backed by recent comparable sales</li>
                <li>Disclosures, timelines and terms handled carefully, start to close</li>
              </ul>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="card p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Trustee · San Diego
                </div>
                <p className="mt-3 text-sm text-neutral-700">
                  “Clear numbers, clean timelines, and zero chaos. Exactly what we needed as a family.”
                </p>
              </div>

              <div className="card p-7 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
                  Case study · Trust sale
                </div>
                <div className="mt-3 brand-serif text-xl">
                  Multiple heirs, deferred maintenance, clean close.
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-neutral-300">Offers</div>
                    <div className="text-base font-semibold">9</div>
                  </div>
                  <div>
                    <div className="text-neutral-300">Over list</div>
                    <div className="text-base font-semibold">+16%</div>
                  </div>
                  <div>
                    <div className="text-neutral-300">Close</div>
                    <div className="text-base font-semibold">30 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE */}
      <div className="container -mt-2 mb-2">
        <Image
          src="/images/placeholder-2.jpg"
          alt="Bright living room in a San Diego home prepared for sale"
          width={1200}
          height={600}
          className="w-full rounded-2xl object-cover max-h-[420px]"
        />
      </div>

      {/* 55+ COMMUNITIES */}
      <section className="page-section">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                55+ communities
              </div>
              <h2 className="mt-3 brand-serif text-3xl">Selling in a 55+ community.</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                Each community has its own rules, HOA and buyer pool. I price and market
                your home for the people actually shopping there.
              </p>
            </div>
            <Link href="/55-plus-communities" className="hidden md:inline-flex pill">
              All communities
            </Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featured.map((c) => {
              const inner = (
                <>
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">{c.city}</div>
                  <div className="mt-2 brand-serif text-lg">{c.name}</div>
                  <p className="mt-2 text-sm text-neutral-600">{c.blurb}</p>
                </>
              );
              return c.slug ? (
                <Link key={c.name} href={`/55-plus-communities/${c.slug}`} className="card p-6 hover:border-black transition">
                  {inner}
                </Link>
              ) : (
                <div key={c.name} className="card p-6">
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/55-plus-communities" className="underline text-sm">
              All communities →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Service areas
            </div>

            <h2 className="mt-3 brand-serif text-3xl">
              San Diego County, with a focus on North County.
            </h2>

            <p className="mt-3 text-neutral-600 max-w-prose">
              Oceanside, Carlsbad, Vista, San Marcos, Escondido, Rancho Bernardo and the
              rest of San Diego County. Selling elsewhere in California? I can connect you
              with a trusted local agent.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link className="underline" href="/service-areas">
                Explore service areas
              </Link>
              <Link className="underline" href="/insights">
                Read seller guides
              </Link>
              <Link className="underline" href="/contact">
                Get my home&apos;s value
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Quick answers
            </div>

            <h2 className="mt-3 brand-serif text-3xl">Seller FAQs</h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {faqs.map((f) => (
                <div key={f.q} className="card p-6">
                  <h3 className="brand-serif text-lg">{f.q}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="page-section">
        <div className="container grid md:grid-cols-3 gap-6 items-start">
          <Image
            src="/images/placeholder-3.jpg"
            alt="Noah Windham, San Diego trust, estate and 55+ community real estate agent"
            width={400}
            height={400}
            className="rounded-2xl object-cover w-full aspect-square"
            style={{ objectPosition: "center 0%" }}
          />

          <div className="card p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Why sellers call Noah
            </div>
            <p className="mt-4 text-neutral-700">
              Most of my clients are selling a home that carries a lot of history: a
              parent&apos;s house, a home held in a trust, or the place they&apos;ve lived for
              decades. They want a fair price, a straight answer and someone who handles
              the details.
            </p>
            <p className="mt-3 text-neutral-700">
              You get a direct line to me from the first call to closing.
            </p>
          </div>

          <div className="card p-7 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Start here
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              What would your home sell for?
            </h2>
            <p className="mt-3 text-neutral-200">
              Send the address and I&apos;ll reply with a price range, recent sales nearby
              and what you&apos;d likely walk away with.
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
            <div className="mt-4 text-xs text-neutral-300">
              Direct reply from Noah. No automated drip.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

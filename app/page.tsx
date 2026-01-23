import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Estate Real Estate | Living San Diego Realty",
  description:
    "Trust & estate real estate representation for trustees, executors, and serious investors across San Diego, the Bay Area, and Los Angeles. Defensible pricing, disciplined marketing, clean execution.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Trust & Estate Real Estate | Living San Diego Realty",
    description:
      "Trust & estate real estate representation for trustees, executors, and serious investors across San Diego, the Bay Area, and Los Angeles. Defensible pricing, disciplined marketing, clean execution.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Trust & Estate Real Estate | Living San Diego Realty",
    description:
      "Trust & estate real estate representation for trustees, executors, and serious investors across San Diego, the Bay Area, and Los Angeles.",
  },
};


export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="pill">
              Trust & Estate · Trustees · Executors · Investors · On/Off-Market
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
              Trust & estate real estate—run like a fiduciary decision, not a retail listing.
            </h1>

            <p className="mt-4 text-neutral-600 max-w-prose">
              I represent trustees, executors, and families in trust and estate
              property sales, and investors in both on- and off-market transactions
              across San Diego, the Bay Area, and Los Angeles. Defensible valuation,
              disciplined negotiation, and marketing built for high-stakes decisions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
              >
                Request pricing consult
              </Link>

              <Link
                href="/trust-estate"
                className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
              >
                Trust & estate services
              </Link>

              <Link
                href="/opportunities"
                className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
              >
                Opportunities + case studies
              </Link>
            </div>

            <div className="mt-5 text-xs text-neutral-500 space-y-1">
              <div>
                Noah Windham · CA DRE #02227646 · Brokered by R B Haley Inc · CA DRE #01843189
              </div>
              <div>San Diego base · Bay Area & Los Angeles by request.</div>
            </div>
          </div>

          <div className="card p-6 md:p-8 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Fiduciary-level execution
            </div>

            <div className="mt-3 brand-serif text-2xl">
              When you’re signing as a trustee or executor, your decision needs to hold up later.
            </div>

            <p className="mt-3 text-sm text-neutral-200">
              My job is to make your sale defensible: clear valuation logic, clean marketing,
              tight terms, and a file that stays organized from listing to close.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-white/15 p-3">
                <div className="text-neutral-300">Primary lane</div>
                <div className="text-base font-semibold">Trust & Estate</div>
              </div>
              <div className="rounded-xl border border-white/15 p-3">
                <div className="text-neutral-300">Second lane</div>
                <div className="text-base font-semibold">Investors</div>
              </div>
            </div>

            <div className="mt-4 text-xs text-neutral-300">
              Clean disclosures · disciplined timelines · direct communication
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="brand-serif text-lg">Pricing you can defend.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Comps, absorption, and risk framing—so your pricing rationale is clear and documented.
            </p>
          </div>

          <div className="card p-6">
            <div className="brand-serif text-lg">Marketing that matches the asset.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Photography, film, and copy that elevate the property without turning the sale into noise.
            </p>
          </div>

          <div className="card p-6">
            <div className="brand-serif text-lg">Quiet leverage in negotiations.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Clean terms, tight timelines, and structured offer strategy—less drama, more control.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Trusted for fiduciary-level decisions
            </div>

            <div className="mt-3 grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="brand-serif text-3xl">Clarity, not chaos.</h2>
                <p className="mt-3 text-neutral-600 max-w-prose">
                  Trustees and executors don’t need hype. They need a clean rationale,
                  clean terms, and a clean paper trail.
                </p>

                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <Link className="underline" href="/process">
                    How the process works
                  </Link>
                  <Link className="underline" href="/contact">
                    Schedule a call
                  </Link>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-neutral-700">
                <li>Representation for trustees, executors, and families in trust & estate property sales</li>
                <li>Coordination with attorneys and CPAs where appropriate (you stay in control)</li>
                <li>Clear valuation rationale: comps + market dynamics + risk framing</li>
                <li>Disciplined disclosures, timelines, and terms—clean file, clean close</li>
              </ul>
            </div>

            {/* Micro-proof */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="card p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Standard of work
                </div>
                <div className="mt-2 brand-serif text-lg">File discipline</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Documentation and timelines handled with the assumption someone will ask questions later.
                </p>
              </div>

              <div className="card p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Communication
                </div>
                <div className="mt-2 brand-serif text-lg">Direct + calm</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Short updates, clear choices, and no “agent theater.”
                </p>
              </div>

              <div className="card p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Negotiation
                </div>
                <div className="mt-2 brand-serif text-lg">Structured leverage</div>
                <p className="mt-2 text-sm text-neutral-600">
                  Tight contingencies, clean terms, and a strategy that protects the seller’s position.
                </p>
              </div>
            </div>

            {/* Testimonial placeholders (optional, but reads expensive) */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="card p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Trustee · San Diego
                </div>
                <p className="mt-3 text-sm text-neutral-700">
                  “Clear numbers, clean timelines, and zero chaos. Exactly what we needed as a family.”
                </p>
              </div>

              <div className="card p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Investor · Off-market
                </div>
                <p className="mt-3 text-sm text-neutral-700">
                  “Straight underwriting, straightforward terms, and fast execution.”
                </p>
              </div>
            </div>

            <div className="mt-3 text-xs text-neutral-500">
              Testimonials can be anonymized and used with permission.
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="page-section">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl">Outcomes and execution.</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                Case studies and curated opportunities—built for trustees, executors,
                families, and investors who care about the numbers and the process.
              </p>
            </div>
            <Link href="/opportunities" className="hidden md:inline-flex pill">
              See opportunities
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card p-7 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
                Case study · Trust sale
              </div>
              <div className="mt-3 brand-serif text-2xl">
                Multiple heirs, deferred maintenance, clean close.
              </div>
              <p className="mt-3 text-sm text-neutral-200">
                Prep and pricing strategy first. Then disciplined marketing and clean offer structure.
                The goal: strong price, clean terms, and a file that stays organized end-to-end.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
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

            <div className="card p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Case study · Investor (on/off-market)
              </div>
              <div className="mt-3 brand-serif text-2xl">
                Numbers first. Quiet execution.
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Sourced and evaluated with conservative assumptions, negotiated clean terms,
                and closed with minimal back-and-forth.
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
                <div>
                  <div className="text-neutral-500">Sourcing</div>
                  <div className="text-base font-semibold">On/Off-market</div>
                </div>
                <div>
                  <div className="text-neutral-500">Terms</div>
                  <div className="text-base font-semibold">Clean</div>
                </div>
                <div>
                  <div className="text-neutral-500">Timeline</div>
                  <div className="text-base font-semibold">Fast</div>
                </div>
              </div>

              <div className="mt-6 flex gap-4 text-sm">
                <Link className="underline" href="/investors">
                  Investor criteria
                </Link>
                <Link className="underline" href="/contact">
                  Talk acquisition
                </Link>
              </div>
            </div>
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
              San Diego first. Bay Area and Los Angeles by request.
            </h2>

            <p className="mt-3 text-neutral-600 max-w-prose">
              Most of my work starts in San Diego—especially trust and estate sales
              where clean execution matters. I also collaborate across California for
              families and investors with multi-market needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Link className="underline" href="/service-areas">
                Explore service areas
              </Link>
              <Link className="underline" href="/insights">
                Read insights
              </Link>
              <Link className="underline" href="/contact">
                Schedule a call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQ (high impact for ranking + conversion) */}
      <section className="page-section">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Quick answers
            </div>

            <h2 className="mt-3 brand-serif text-3xl">
              Trust & estate sale FAQs
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <div className="brand-serif text-lg">
                  Do you only represent investors in trust sales?
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  No. I represent investors both inside and outside of trust/estate situations—on-market and off-market.
                </p>
              </div>

              <div className="card p-6">
                <div className="brand-serif text-lg">
                  What matters most for trustees/executors?
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  A defensible valuation, a disciplined timeline, and a clean paper trail—so decisions hold up later.
                </p>
              </div>

              <div className="card p-6">
                <div className="brand-serif text-lg">
                  Do you work with attorneys or CPAs?
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  Yes—when appropriate. Coordination is handled professionally, and you remain the decision-maker.
                </p>
              </div>

              <div className="card p-6">
                <div className="brand-serif text-lg">
                  Can we sell quietly (without blasting the market)?
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  Yes. Depending on your objectives, we can discuss quiet/off-market strategy versus a disciplined public launch.
                </p>
              </div>
            </div>

            <div className="mt-6 text-sm">
              <Link className="underline" href="/trust-estate">
                Read the full trust & estate playbook →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="page-section">
        <div className="container grid md:grid-cols-2 gap-6 items-start">
          <div className="card p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Positioning (for Google + humans)
            </div>
            <p className="mt-4 text-neutral-700">
              Trust & estate real estate in San Diego isn’t a normal sale. Trustees
              and executors need defensible pricing, clean disclosures, disciplined
              timelines, and experienced negotiation—so decisions stand up later.
            </p>
            <p className="mt-3 text-neutral-700">
              Investors get the same standard: clear underwriting assumptions, clean terms,
              and fast execution.
            </p>
          </div>

          <div className="card p-7 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Start with a clean plan
            </div>

            <h2 className="mt-3 brand-serif text-3xl">
              Trustee or executor? Let’s make this simple.
            </h2>

            <p className="mt-3 text-neutral-200">
              One short call. Clear valuation logic. A disciplined timeline. And a file
              that stays clean from listing to close.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-white bg-white text-black hover:bg-neutral-900 hover:text-white transition"
              >
                Schedule an intro call
              </Link>
              <Link
                href="/process"
                className="px-5 py-3 rounded-2xl border border-white/40 text-white hover:border-white transition"
              >
                View the process
              </Link>
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

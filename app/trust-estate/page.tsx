import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Estate Real Estate in San Diego | Trustee & Executor Sales",
  description:
    "Trust & estate real estate representation for trustees and executors in San Diego. Defensible pricing, disciplined marketing, and clean execution—built for fiduciary-level decisions.",
};

const steps = [
  {
    k: "01",
    title: "Short clarity call",
    body: "We identify the decision-makers, the property condition, timing constraints, and what “clean” looks like for your trust file.",
  },
  {
    k: "02",
    title: "Defensible pricing + plan",
    body: "Comps, market dynamics, risk framing, and a clear launch strategy. Not vibes. Not guessing.",
  },
  {
    k: "03",
    title: "Prep + disclosures (disciplined)",
    body: "We tighten the paper trail: disclosures, timelines, access plan, vendor coordination, and the marketing package.",
  },
  {
    k: "04",
    title: "Launch + controlled marketing",
    body: "Professional media + copy that presents the asset like an asset—without turning your trust sale into a circus.",
  },
  {
    k: "05",
    title: "Offer strategy + clean close",
    body: "Offer terms structured to protect the estate: timelines, contingencies, file discipline, and close coordination.",
  },
];

const faqs = [
  {
    q: "Do I need probate to sell?",
    a: "Sometimes yes, sometimes no—depends on title, the trust, and the estate plan. I’m not a lawyer, but I coordinate with your attorney so the sale aligns with your authority and the required process.",
  },
  {
    q: "Can you sell the property as-is?",
    a: "Yes. Many trust sales are as-is. The key is pricing, disclosure discipline, and controlling the buyer’s leverage so you don’t get dragged through endless retrades.",
  },
  {
    q: "How do you price a trust/estate property defensibly?",
    a: "Comps + absorption + condition adjustment + buyer psychology + risk framing. The goal is a rationale that holds up when someone asks, “Why did we choose this price and these terms?”",
  },
  {
    q: "Can you coordinate with the attorney and CPA?",
    a: "Yes—where appropriate. Your attorney handles legal strategy; your CPA handles tax considerations; I run the real estate execution and keep the file organized.",
  },
  {
    q: "What if there are multiple heirs or disagreements?",
    a: "Common. I keep communication tight: clear plan, clear numbers, and written decision points so the process doesn’t devolve into chaos.",
  },
  {
    q: "Do you work with out-of-area trustees/executors?",
    a: "Yes. Many trustees are out of state. We set a tight update rhythm, handle vendors locally, and keep everything documented.",
  },
];

export default function TrustEstatePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main>
      {/* SEO: FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="page-section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="pill">Trust & Estate · Trustees · Executors</span>

            <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
              Trust &amp; estate real estate in San Diego—built for fiduciary-level
              decisions.
            </h1>

            <p className="mt-4 text-neutral-600 max-w-prose">
              Trustees and executors don’t need hype. You need a defensible price,
              disciplined marketing, clean disclosures, and a process that stays
              organized from listing to close—so the decision holds up later.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
              >
                Request a pricing consult
              </Link>
              <Link
                href="/process"
                className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
              >
                See the process
              </Link>
            </div>

            <div className="mt-5 text-xs text-neutral-500 space-y-1">
              <div>
                Noah Windham · CA DRE #02227646 · Brokered by R B Haley Inc · CA
                DRE #01843189
              </div>
              <div>San Diego base · Bay Area & Los Angeles by request.</div>
            </div>
          </div>

          <div className="card p-7 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              What fiduciaries actually need
            </div>

            <div className="mt-3 brand-serif text-2xl">
              A clean rationale, clean terms, and a clean paper trail.
            </div>

            <p className="mt-3 text-sm text-neutral-200">
              My job is to make the sale defensible: valuation logic you can explain,
              a disciplined marketing package, and execution that doesn’t create
              future problems.
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
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="brand-serif text-lg">Defensible pricing.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Comps + market dynamics + risk framing—built for scrutiny, not
              salesy optimism.
            </p>
          </div>

          <div className="card p-6">
            <div className="brand-serif text-lg">Disciplined marketing.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Editorial-grade presentation that attracts real buyers without
              turning the sale into a circus.
            </p>
          </div>

          <div className="card p-6">
            <div className="brand-serif text-lg">Clean execution.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Tight timelines, clean disclosures, and file discipline for trustees,
              executors, attorneys, and CPAs.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Who this is for
            </div>

            <div className="mt-4 grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="brand-serif text-3xl">If you’re signing as the fiduciary.</h2>
                <p className="mt-3 text-neutral-600 max-w-prose">
                  Trustees and executors carry responsibility. The work needs to be
                  organized, defensible, and calm—even when the situation isn’t.
                </p>

                <div className="mt-5 flex gap-4 text-sm">
                  <Link className="underline" href="/contact">
                    Talk through your situation
                  </Link>
                  <Link className="underline" href="/service-areas">
                    Service areas
                  </Link>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-neutral-700">
                <li>Out-of-state trustees needing a reliable local operator</li>
                <li>Multiple heirs and a need for clean decision points</li>
                <li>Deferred maintenance and “as-is” execution</li>
                <li>Timeline pressure (carrying costs, vacancy, coordination)</li>
                <li>Investor interest (on- or off-market) with clean terms</li>
              </ul>
            </div>

            <div className="mt-8 text-xs text-neutral-500">
              Note: I’m a real estate agent, not an attorney. I coordinate with counsel
              as appropriate; legal advice comes from your attorney.
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="page-section">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl">The trust sale process.</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                A simple structure that keeps the file clean and the decision defensible.
              </p>
            </div>
            <Link href="/process" className="hidden md:inline-flex pill">
              Full process page
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.k} className="card p-7">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Step {s.k}
                </div>
                <div className="mt-3 brand-serif text-2xl">{s.title}</div>
                <p className="mt-3 text-sm text-neutral-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              FAQ
            </div>
            <h2 className="mt-3 brand-serif text-3xl">Answers trustees actually ask.</h2>

            <div className="mt-6 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="card p-5">
                  <summary className="cursor-pointer brand-serif text-lg">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm text-neutral-600 max-w-prose">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="container grid md:grid-cols-2 gap-6 items-start">
          <div className="card p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              What you get after the first call
            </div>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              <li>Clear pricing rationale + recommended launch plan</li>
              <li>Timeline + decision points (so the process stays calm)</li>
              <li>Offer strategy that protects the estate</li>
              <li>File discipline from list-to-close</li>
            </ul>
          </div>

          <div className="card p-7 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Start with a clean plan
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              If you’re the trustee or executor, let’s make this simple.
            </h2>
            <p className="mt-3 text-neutral-200">
              One short call. Clear valuation logic. A disciplined timeline. A clean file.
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
        </div>
      </section>
    </main>
  );
}

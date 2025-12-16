import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors | On-Market + Off-Market Acquisitions | Living San Diego Realty",
  description:
    "Investor-focused acquisitions and dispositions in San Diego (and CA by request). Criteria-first sourcing, conservative underwriting, clean terms, and fast execution.",
};

type Box = {
  title: string;
  body: string;
  bullets: string[];
};

const howIWork: Box[] = [
  {
    title: "Criteria first. No noise.",
    body:
      "You give me a buy box. I send curated opportunities that actually match—MLS and off-market—without flooding you.",
    bullets: [
      "Asset type + neighborhoods + budget + timeline",
      "Non-negotiables (tenancy, condition, title, etc.)",
      "Return targets + risk tolerance",
    ],
  },
  {
    title: "Underwriting that’s conservative.",
    body:
      "I’d rather kill a deal early than sell you a dream. Assumptions are stated clearly so you can move decisively.",
    bullets: [
      "Rent / resale comps + market speed",
      "Rehab scope ranges (low/base/high)",
      "Downside framing: what breaks the deal",
    ],
  },
  {
    title: "Clean terms. Fast execution.",
    body:
      "Winning offers are simple and credible. Timelines are tight. Communication is clean. Closings are quiet.",
    bullets: [
      "POF / lender strength surfaced upfront",
      "Contingency discipline + timeline control",
      "Negotiation that reduces friction",
    ],
  },
];

const buyBoxFields = [
  "Target markets (San Diego submarkets, Bay Area, LA by request)",
  "Asset type (SFR, small multi, condo/townhome, land, etc.)",
  "Budget range + ideal purchase price",
  "Strategy (hold, value-add, flip, development, etc.)",
  "Minimum beds/baths, parking, lot size, ADU tolerance, etc.",
  "Tenant posture (vacant only / inherited tenants / okay with cash-for-keys)",
  "Condition tolerance (light / medium / heavy rehab)",
  "Timeline (need a deal now vs. patient)",
  "Proof of funds and/or financing plan",
];

export default function InvestorsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-section">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="pill">Investors · On-Market + Off-Market · California</span>

            <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
              Investor representation built around criteria, underwriting, and execution.
            </h1>

            <p className="mt-4 text-neutral-600 max-w-prose">
              I work with serious investors who care about the numbers and the
              process—not retail noise. You send your buy box and I source and
              structure opportunities (on-market and off-market) with conservative
              underwriting and clean terms.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
              >
                Send buy box
              </Link>
              <Link
                href="/opportunities"
                className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
              >
                View opportunities
              </Link>
            </div>

            <div className="mt-5 text-xs text-neutral-500 space-y-1">
              <div>
                Noah Windham · CA DRE #02227646 · Brokered by R B Haley Inc · CA DRE #01843189
              </div>
              <div>San Diego focus · Bay Area & Los Angeles by request.</div>
            </div>
          </div>

          <div className="card p-6 md:p-8 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              What you get
            </div>
            <div className="mt-3 brand-serif text-2xl">
              A tighter pipeline and cleaner execution.
            </div>
            <p className="mt-3 text-sm text-neutral-200">
              Curated deals. Clear assumptions. Strong offer posture. Less back-and-forth.
              More closes.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-white/15 p-3">
                <div className="text-neutral-300">Sourcing</div>
                <div className="text-base font-semibold">On + Off-Market</div>
              </div>
              <div className="rounded-xl border border-white/15 p-3">
                <div className="text-neutral-300">Standard</div>
                <div className="text-base font-semibold">Numbers First</div>
              </div>
              <div className="rounded-xl border border-white/15 p-3">
                <div className="text-neutral-300">Offers</div>
                <div className="text-base font-semibold">Clean Terms</div>
              </div>
              <div className="rounded-xl border border-white/15 p-3">
                <div className="text-neutral-300">Execution</div>
                <div className="text-base font-semibold">Fast + Quiet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="page-section pt-0">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl">How I work</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                If you want a deal feed, go subscribe to the internet. If you want a
                filtered pipeline and disciplined execution, this is the lane.
              </p>
            </div>
            <Link href="/contact" className="hidden md:inline-flex pill">
              Send criteria
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {howIWork.map((b) => (
              <div key={b.title} className="card p-6">
                <div className="brand-serif text-xl">{b.title}</div>
                <p className="mt-3 text-sm text-neutral-600">{b.body}</p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUY BOX */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Investor intake
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              Your buy box is the filter.
            </h2>
            <p className="mt-3 text-neutral-600 max-w-prose">
              Send your criteria once. I’ll confirm the box and start sourcing within it.
              The clearer you are, the faster we move.
            </p>

            <div className="mt-7 grid md:grid-cols-2 gap-8 items-start">
              <ul className="space-y-3 text-sm text-neutral-700">
                {buyBoxFields.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="card p-7 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Start here
                </div>
                <div className="mt-3 brand-serif text-2xl">
                  Send criteria + proof of funds.
                </div>
                <p className="mt-3 text-sm text-neutral-600">
                  One message with your buy box and POF (or financing plan) is enough to
                  begin. I’ll reply with clarifying questions if needed.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
                  >
                    Send buy box
                  </Link>
                  <Link
                    href="/process"
                    className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
                  >
                    View process
                  </Link>
                </div>

                <div className="mt-5 text-xs text-neutral-500">
                  Tip: If you’re flexible, include two buy boxes: “ideal” and “still acceptable.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section">
        <div className="container">
          <h2 className="brand-serif text-3xl">Investor FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card p-7">
              <div className="brand-serif text-xl">Do you do off-market?</div>
              <p className="mt-3 text-sm text-neutral-600">
                Yes—when it matches your criteria and the numbers justify it. If the deal
                doesn’t pencil, I’ll tell you quickly.
              </p>
            </div>

            <div className="card p-7">
              <div className="brand-serif text-xl">Do you work with new investors?</div>
              <p className="mt-3 text-sm text-neutral-600">
                If you have clear criteria and the ability to perform, yes. If you’re still
                “kinda thinking about it,” we should tighten your buy box first.
              </p>
            </div>

            <div className="card p-7">
              <div className="brand-serif text-xl">What markets do you cover?</div>
              <p className="mt-3 text-sm text-neutral-600">
                San Diego is primary. Bay Area and Los Angeles are available by request,
                especially for multi-market families and investors.
              </p>
            </div>

            <div className="card p-7">
              <div className="brand-serif text-xl">How do you evaluate a deal?</div>
              <p className="mt-3 text-sm text-neutral-600">
                Conservative assumptions, downside framing, and clear comps. If the returns
                only work in a perfect world, it’s not a real deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="container">
          <div className="card p-8 md:p-10 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Next step
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              Send your buy box and I’ll reply with a clean plan.
            </h2>
            <p className="mt-3 text-neutral-200 max-w-prose">
              Criteria + budget + timeline + POF/financing plan. That’s enough to start.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-white bg-white text-black hover:bg-neutral-900 hover:text-white transition"
              >
                Send buy box
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

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Representation | On- and Off-Market Acquisitions",
  description:
    "Investor acquisitions and dispositions across San Diego, the Bay Area, and Los Angeles. Clear underwriting assumptions, clean terms, and fast execution—on- and off-market.",
  alternates: { canonical: "/investors" },
};

export default function InvestorsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-section">
        <div className="container">
          <span className="pill">Investors · Off-market + On-market · California</span>

          <h1 className="mt-5 brand-serif text-4xl md:text-5xl leading-tight">
            Investor representation with numbers first—and clean execution.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-2xl">
            I represent investors buying and selling both inside and outside of trust/estate
            situations. The standard stays the same: conservative underwriting assumptions,
            clean terms, and a process that moves quickly without getting sloppy.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Share your criteria
            </Link>
            <Link
              href="/opportunities"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              See opportunities
            </Link>
          </div>

          <div className="mt-5 text-xs text-neutral-500 space-y-1">
            <div>
              Noah Windham · CA DRE #02227646 · Brokered by R B Haley Inc · CA DRE
              #01843189
            </div>
            <div>San Diego base · Bay Area & Los Angeles by request.</div>
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="brand-serif text-lg">Acquisitions.</div>
            <p className="mt-2 text-sm text-neutral-600">
              On-market offers with clean leverage, plus off-market sourcing when appropriate.
              Conservative assumptions, tight terms, fast follow-through.
            </p>
          </div>

          <div className="card p-6">
            <div className="brand-serif text-lg">Dispositions.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Sell strategy based on market speed and asset story—quiet sale vs. full exposure.
              Clean marketing and disciplined negotiation.
            </p>
          </div>

          <div className="card p-6">
            <div className="brand-serif text-lg">Execution.</div>
            <p className="mt-2 text-sm text-neutral-600">
              Timelines, disclosures, and deal steps tracked so the transaction stays predictable.
              Less chaos, fewer surprises.
            </p>
          </div>
        </div>
      </section>

      {/* CRITERIA */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Investor criteria
            </div>

            <div className="mt-3 grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="brand-serif text-3xl">
                  Send your buy box. I’ll match opportunities to it.
                </h2>
                <p className="mt-3 text-neutral-600">
                  The cleaner the criteria, the better the execution. I’m not interested in
                  “maybe” deals. I’m interested in clean closes.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
                  >
                    Submit criteria
                  </Link>
                  <Link
                    href="/process"
                    className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
                  >
                    View process
                  </Link>
                </div>
              </div>

              <div className="card p-6 bg-white">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Example criteria fields
                </div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  <li>Market: San Diego / Bay Area / LA</li>
                  <li>Property type: SFR / small MF / value-add</li>
                  <li>Strategy: hold / flip / redevelopment</li>
                  <li>Budget range + proof of funds readiness</li>
                  <li>Deal breakers: location, condition, tenant issues</li>
                  <li>Close speed + inspection expectations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="page-section">
        <div className="container">
          <div className="card p-8 md:p-10 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Fast, clean, disciplined
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              If the numbers work, we move.
            </h2>
            <p className="mt-3 text-neutral-200 max-w-2xl">
              No fluff. No “retail noise.” Clean underwriting assumptions, clean terms,
              and execution that stays predictable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-white bg-white text-black hover:bg-neutral-900 hover:text-white transition"
              >
                Share your criteria
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

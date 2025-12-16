import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opportunities | Curated Listings + Case Studies",
  description:
    "Curated opportunities and case studies for trustees, executors, and investors. Proof of process and disciplined execution.",
};

export default function OpportunitiesPage() {
  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Opportunities</span>
          <h1 className="mt-5 brand-serif text-4xl md:text-5xl leading-tight">
            Curated opportunities and proof of execution.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-prose">
            This page is intentionally curated. It’s where trustees and investors can see
            how I think: clean underwriting, disciplined marketing, and tight terms.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Case study · Trust sale
              </div>
              <div className="mt-3 brand-serif text-2xl">
                Multiple heirs, deferred maintenance, clean close.
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Clear pricing rationale, disciplined prep, tight contingencies, and a file that stayed
                organized for fiduciary review.
              </p>
              <div className="mt-5 flex gap-4 text-sm">
                <Link className="underline" href="/trust-estate">
                  Trust & estate
                </Link>
                <Link className="underline" href="/process">
                  Process
                </Link>
              </div>
            </div>

            <div className="card p-7 bg-neutral-50">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Investor lane
              </div>
              <div className="mt-3 brand-serif text-2xl">
                On- and off-market acquisitions.
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                Conservative assumptions, clean terms, and fast execution. If the numbers don’t work,
                we don’t force it.
              </p>
              <div className="mt-5">
                <Link className="underline text-sm" href="/investors">
                  Investor criteria →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 card p-7 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Want opportunities sent privately?
            </div>
            <p className="mt-3 text-neutral-200 max-w-prose">
              If you’re an investor, I’ll send curated deals based on your criteria. If you’re a trustee
              or executor, I’ll send a clean pricing plan and timeline.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-white bg-white text-black hover:bg-neutral-900 hover:text-white transition"
              >
                Contact Noah
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

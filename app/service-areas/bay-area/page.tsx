import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bay Area | Trust & Estate + Investor Representation | Living San Diego Realty",
  description:
    "Bay Area representation by request for trustees, executors, families, and investors. Disciplined process, defensible pricing logic, and clean execution.",
  alternates: { canonical: "/service-areas/bay-area" },
};

export default function BayAreaPage() {
  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Bay Area · By Request · Trust & Estate · Investors</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            Bay Area work — by request, executed with the same discipline.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            If you have a trust/estate property or an investor need in the Bay, I handle it
            by arrangement—especially for families managing multiple markets. The standard
            stays the same: defensible valuation logic, clean disclosures, tight terms,
            and organized execution.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition" href="/contact">
              Start with a call
            </Link>
            <Link className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition" href="/insights">
              Read insights
            </Link>
          </div>

          <div className="mt-6 text-xs text-neutral-500">
            San Diego is home base · Bay Area coverage is by request.
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container">
          <div className="card p-7 bg-neutral-50">
            <h2 className="brand-serif text-2xl">Fast intake</h2>
            <p className="mt-3 text-sm text-neutral-600">
              Send the address (or city), occupancy status, timeline, and any known issues.
              Investors: include buy box + budget + POF/financing plan.
            </p>
            <div className="mt-5">
              <Link className="underline text-sm" href="/contact">
                Contact Noah →
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <Link className="underline text-sm" href="/service-areas">
              ← Back to service areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

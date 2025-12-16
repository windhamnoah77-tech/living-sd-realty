import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Angeles | Trust & Estate + Investors | Living San Diego Realty",
  description:
    "Los Angeles representation by request for trustees, executors, families, and investors. Defensible valuation, disciplined disclosures, and clean execution.",
  alternates: { canonical: "/service-areas/los-angeles" },
};

export default function LosAngelesPage() {
  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Los Angeles · By Request · Trust & Estate · Investors</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            Los Angeles — by request, with a clean execution standard.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            LA can be noisy. The approach here is the opposite: a disciplined plan, clear
            pricing logic, and clean deal structure. Trustees/executors get a file that
            stays organized; investors get underwriting and terms that don’t waste time.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition" href="/contact">
              Schedule an intro call
            </Link>
            <Link className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition" href="/opportunities">
              View opportunities
            </Link>
          </div>

          <div className="mt-6 text-xs text-neutral-500">
            San Diego is home base · Los Angeles coverage is by request.
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container">
          <div className="card p-7 bg-neutral-50">
            <h2 className="brand-serif text-2xl">What to send</h2>
            <p className="mt-3 text-sm text-neutral-600">
              Address (or neighborhood), occupancy status, timeline, and constraints. If it’s
              an inherited/trust situation, mention who has authority and any access limits.
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

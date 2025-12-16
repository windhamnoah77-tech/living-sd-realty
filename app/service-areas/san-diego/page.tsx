import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "San Diego | Trust & Estate Real Estate + Investors | Living San Diego Realty",
  description:
    "San Diego trust & estate real estate representation for trustees and executors, plus investor acquisitions/dispositions. Defensible pricing and clean execution.",
  alternates: { canonical: "/service-areas/san-diego" },
};

export default function SanDiegoAreas() {
  const neighborhoods = [
    "North Park",
    "Mission Hills",
    "Point Loma",
    "La Jolla",
    "Clairemont",
    "University City",
    "Pacific Beach",
    "Encinitas",
    "Carlsbad",
  ];

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">San Diego · Trust & Estate · Investors</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            San Diego trust &amp; estate real estate — executed cleanly.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            If you’re a trustee or executor, the goal isn’t hype—it’s a defensible plan:
            valuation logic, disciplined disclosures, clean negotiation, and a file that
            stays organized from listing to close. Investors get the same standard:
            conservative underwriting and clean terms.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition" href="/contact">
              Schedule an intro call
            </Link>
            <Link className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition" href="/insights">
              Read insights
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="brand-serif text-2xl">Common neighborhoods</h2>
            <p className="mt-3 text-sm text-neutral-600">
              Not limited to these—this is just where the work most commonly lands.
            </p>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-neutral-700">
              {neighborhoods.map((n) => (
                <li key={n} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-7 bg-neutral-50">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              What to send first
            </div>
            <h2 className="mt-3 brand-serif text-2xl">Facts over stories.</h2>
            <ul className="mt-5 space-y-2 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                <span>Address (or neighborhood if early stage)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                <span>Occupancy: vacant / tenant / family</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                <span>Timeline + any known issues (repairs, access, title, hoarding)</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link className="underline text-sm" href="/contact">
                Contact Noah →
              </Link>
            </div>
          </div>
        </div>

        <div className="container mt-6">
          <Link className="underline text-sm" href="/service-areas">
            ← Back to service areas
          </Link>
        </div>
      </section>
    </main>
  );
}

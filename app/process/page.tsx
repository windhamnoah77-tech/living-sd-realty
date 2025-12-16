import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | Trust & Estate + Investor Execution",
  description:
    "A disciplined process for trust & estate sales and investor acquisitions: pricing rationale, marketing plan, tight contingencies, and clean file execution.",
};

export default function ProcessPage() {
  const steps = [
    {
      title: "01 · Discovery & positioning",
      text: "Goals, timing, constraints, and decision-makers. We decide whether we’re selling, holding, or quietly testing the market.",
    },
    {
      title: "02 · Prep, pricing, and launch",
      text: "Prep list, valuation logic, disclosures, and a marketing plan. We launch with intention—not a sloppy MLS dump.",
    },
    {
      title: "03 · Negotiation & closing",
      text: "Offers, contingencies, inspections, timelines, and closing coordination. Clean terms, fewer surprises, tidy paperwork.",
    },
  ];

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Process</span>
          <h1 className="mt-5 brand-serif text-4xl md:text-5xl leading-tight">
            A clean, fiduciary-grade process.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-prose">
            Trustees and serious investors don’t need hype—they need clarity. This is the framework
            I use to keep decisions defensible and execution tight.
          </p>

          <div className="mt-10 card p-8 md:p-10">
            <div className="grid gap-6">
              {steps.map((s) => (
                <div key={s.title} className="border-l-2 border-neutral-200 pl-4">
                  <div className="text-xs font-semibold text-neutral-500 uppercase">
                    {s.title}
                  </div>
                  <p className="mt-1 text-sm text-neutral-700">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <Link className="underline" href="/trust-estate">
                Trust & estate
              </Link>
              <Link className="underline" href="/investors">
                Investors
              </Link>
              <Link className="underline" href="/contact">
                Schedule an intro call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

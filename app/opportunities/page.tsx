import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opportunities & Case Studies | Living San Diego Realty",
  description:
    "Curated trust & estate opportunities and investor case studies across San Diego and California. Clean underwriting, disciplined execution, and fiduciary-grade documentation.",

  // ✅ Canonical for THIS page (not in layout)
  alternates: {
    canonical: "/opportunities",
  },

  // ✅ Correct OG URL for THIS page (so shares don't all look like the homepage)
  openGraph: {
    title: "Opportunities & Case Studies | Living San Diego Realty",
    description:
      "Curated trust & estate opportunities and investor case studies across San Diego and California. Clean underwriting, disciplined execution, and fiduciary-grade documentation.",
    url: "/opportunities",
    type: "website",
  },

  twitter: {
    title: "Opportunities & Case Studies | Living San Diego Realty",
    description:
      "Curated trust & estate opportunities and investor case studies across San Diego and California. Clean underwriting, disciplined execution, and fiduciary-grade documentation.",
  },
};


type Opportunity = {
  title: string;
  market: string;
  asset: string;
  thesis: string;
  tags: string[];
  status: "By request" | "Quietly marketing" | "New";
};

type CaseStudy = {
  title: string;
  lane: "Trust / Estate" | "Investor";
  situation: string;
  result: string;
  whyItMattered: string;
  metrics: { label: string; value: string }[];
};

const PRIMARY_CTA_HREF = "/contact";
const PRIMARY_CTA_LABEL = "Request access / talk numbers";

const opportunities: Opportunity[] = [
  {
    title: "Value-add SFR (coastal adj.)",
    market: "San Diego",
    asset: "Single-family · light rehab",
    thesis:
      "Discounted basis, clean title, upside via cosmetic rehab + improved positioning.",
    tags: ["Off-market", "Value-add", "Fast close"],
    status: "By request",
  },
  {
    title: "Probate / trust-admin sale (as-is)",
    market: "San Diego",
    asset: "Single-family · deferred maintenance",
    thesis:
      "As-is sale with disciplined disclosures, pricing rationale built for fiduciary review.",
    tags: ["Trust sale", "As-is", "Disclosure-ready"],
    status: "Quietly marketing",
  },
  {
    title: "Small multifamily (cash-flow first)",
    market: "North LA (by request)",
    asset: "2–6 units · stabilized",
    thesis:
      "Conservative underwriting, rent roll verification, and clean terms over hype.",
    tags: ["Stabilized", "Cash flow", "Underwriting"],
    status: "New",
  },
];

const caseStudies: CaseStudy[] = [
  {
    title: "Multiple heirs, deferred maintenance, clean close",
    lane: "Trust / Estate",
    situation:
      "Trustee needed a defensible price, a clean disclosure posture, and a file that could survive beneficiary questions.",
    result:
      "Structured launch, organized disclosures, tightened terms, and clean communication through close.",
    whyItMattered:
      "Fiduciary decisions get reviewed later. The work needed a rationale, not hype.",
    metrics: [
      { label: "Offers", value: "9" },
      { label: "Close", value: "30 days" },
      { label: "Execution", value: "Clean file" },
    ],
  },
  {
    title: "Quiet off-market acquisition, numbers first",
    lane: "Investor",
    situation:
      "Buyer needed speed and certainty without retail noise or endless back-and-forth.",
    result:
      "Sourced off-market, underwritten conservatively, negotiated clean terms, executed fast.",
    whyItMattered:
      "Fast doesn’t mean sloppy. The underwriting and terms needed to be tight.",
    metrics: [
      { label: "Sourcing", value: "Off-market" },
      { label: "Terms", value: "Clean" },
      { label: "Timeline", value: "Fast" },
    ],
  },
  {
    title: "Trust sale: pricing rationale built for scrutiny",
    lane: "Trust / Estate",
    situation:
      "Trustee needed an evidence-based pricing story and disciplined marketing—no guessing.",
    result:
      "Comp-backed valuation, buyer psychology positioning, and disciplined negotiation strategy.",
    whyItMattered:
      "A trustee’s job is to manage risk. Pricing needed to be defensible, not optimistic.",
    metrics: [
      { label: "Valuation", value: "Comp-driven" },
      { label: "Marketing", value: "Editorial" },
      { label: "Risk", value: "Managed" },
    ],
  },
  {
    title: "Investor disposition: disciplined launch, tight terms",
    lane: "Investor",
    situation:
      "Seller wanted a clean exit with tight timelines and minimal deal risk.",
    result:
      "Tight contingencies, strong EMD posture, and clean comms from list to close.",
    whyItMattered:
      "The win wasn’t just price—it was certainty and clean execution.",
    metrics: [
      { label: "Contingencies", value: "Tight" },
      { label: "Timeline", value: "Defined" },
      { label: "Deal risk", value: "Reduced" },
    ],
  },
];

function StatusPill({ status }: { status: Opportunity["status"] }) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em]";
  if (status === "New")
    return (
      <span className={`${base} border-black bg-black text-white`}>{status}</span>
    );
  return (
    <span className={`${base} border-neutral-300 bg-white text-neutral-700`}>
      {status}
    </span>
  );
}

export default function OpportunitiesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-section">
        <div className="container">
          <span className="pill">Opportunities · Case Studies · California</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            Curated opportunities and fiduciary-grade case studies.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            This page is intentionally curated. Trustees and executors need clean execution
            and a defensible rationale. Investors need disciplined numbers and fast, quiet
            follow-through. No MLS widgets. No filler.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={PRIMARY_CTA_HREF}
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              {PRIMARY_CTA_LABEL}
            </Link>
            <Link
              href="/investors"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              Investor criteria
            </Link>
            <Link
              href="/trust-estate"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              Trust &amp; estate lane
            </Link>
          </div>

          <div className="mt-5 text-xs text-neutral-500">
            Availability changes. Some opportunities are shared by request only.
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="page-section pt-0">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl">Current opportunities</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                A small set of deals I’m actively tracking or quietly marketing. If you’re
                a trustee/executor or a serious investor, request access.
              </p>
            </div>

            <Link href={PRIMARY_CTA_HREF} className="hidden md:inline-flex pill">
              {PRIMARY_CTA_LABEL}
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {opportunities.map((o) => (
              <div key={o.title} className="card p-6 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {o.market}
                  </div>
                  <StatusPill status={o.status} />
                </div>

                <div className="mt-3 brand-serif text-xl">{o.title}</div>
                <div className="mt-2 text-sm text-neutral-600">{o.asset}</div>

                <p className="mt-4 text-sm text-neutral-700">{o.thesis}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {o.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm">
                  <Link className="underline" href={PRIMARY_CTA_HREF}>
                    Request details
                  </Link>
                  <Link className="underline" href="/process">
                    See process
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-neutral-500">
            Note: This is not a public “live inventory” feed. It’s a curated snapshot meant
            for qualified conversations.
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl">Execution case studies</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                Written for trustees, executors, and investors who care about process, risk,
                and the quality of the file—not just the headline price.
              </p>
            </div>

            <Link href="/insights" className="hidden md:inline-flex pill">
              Read insights
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <div key={c.title} className="card p-7">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {c.lane}
                </div>

                <div className="mt-3 brand-serif text-2xl">{c.title}</div>

                <p className="mt-3 text-sm text-neutral-700">
                  <span className="font-semibold text-neutral-900">Situation: </span>
                  {c.situation}
                </p>

                <p className="mt-2 text-sm text-neutral-700">
                  <span className="font-semibold text-neutral-900">Result: </span>
                  {c.result}
                </p>

                <p className="mt-2 text-sm text-neutral-700">
                  <span className="font-semibold text-neutral-900">Why it mattered: </span>
                  {c.whyItMattered}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-neutral-200 p-3"
                    >
                      <div className="text-neutral-500">{m.label}</div>
                      <div className="text-base font-semibold">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm">
                  <Link className="underline" href={PRIMARY_CTA_HREF}>
                    Talk through your situation
                  </Link>
                  <Link className="underline" href="/trust-estate">
                    Trust &amp; estate lane
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET + CTA */}
      <section className="page-section">
        <div className="container grid md:grid-cols-2 gap-6 items-start">
          <div className="card p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              What you get
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              Clarity, discipline, and a clean file.
            </h2>
            <p className="mt-3 text-neutral-600 max-w-prose">
              If you’re signing as a trustee or executor, you’re managing risk—not just
              selling a house. Investors get the same standard, just faster.
            </p>

            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              <li>Defensible pricing logic (comps + market dynamics + risk framing)</li>
              <li>Disciplined marketing and negotiation (no retail noise)</li>
              <li>Clean disclosures, timelines, and terms</li>
              <li>Coordination with attorneys/CPAs where appropriate</li>
            </ul>
          </div>

          <div className="card p-7 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Start here
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              Want me to review a property or a trust sale situation?
            </h2>
            <p className="mt-3 text-neutral-200">
              One short call. Clear next steps. If it’s a fit, we move with discipline.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={PRIMARY_CTA_HREF}
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

            <div className="mt-5 text-xs text-neutral-300">
              Investors: send criteria. Trustees/executors: send the address + status
              (occupied/vacant).
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

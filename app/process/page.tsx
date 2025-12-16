import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | Trust & Estate + Investor Execution | Living San Diego Realty",
  description:
    "A disciplined process for trustees, executors, and serious investors: defensible pricing, clean disclosures, tight terms, and a file that stays organized from listing to close.",
};

type Step = {
  k: string;
  title: string;
  body: string;
  bullets: string[];
};

const trustSteps: Step[] = [
  {
    k: "01",
    title: "Intake + authority check",
    body:
      "Before we talk price, we clarify who has authority to sign and what constraints exist (trust terms, probate posture, beneficiary dynamics, occupancy).",
    bullets: [
      "Confirm trustee/executor authority + decision chain",
      "Occupancy, access, and timeline constraints",
      "What ‘clean execution’ means for your situation",
    ],
  },
  {
    k: "02",
    title: "Defensible valuation",
    body:
      "Not a guess. A valuation story you can defend later: comps, absorption, condition, buyer psychology, and risk framing.",
    bullets: [
      "Comp set + adjustments (condition, location, functional issues)",
      "Market speed / absorption + pricing strategy",
      "Risk framing: as-is vs. prep vs. light rehab",
    ],
  },
  {
    k: "03",
    title: "Prep plan (optional, controlled)",
    body:
      "If prep makes sense, we keep it tight: only what moves the needle. If it doesn’t, we sell as-is with disciplined presentation and documentation.",
    bullets: [
      "Minimal-scope plan (clean-up, safety, curb appeal)",
      "Vendor coordination (when appropriate)",
      "No ‘HGTV’ chaos — ROI-driven only",
    ],
  },
  {
    k: "04",
    title: "Marketing that doesn’t look cheap",
    body:
      "Editorial-grade marketing: clean visuals, sharp copy, and positioning that attracts serious buyers without turning the sale into a circus.",
    bullets: [
      "Photography / film / floor plan where appropriate",
      "Positioning + narrative (not generic listing fluff)",
      "Launch timing + buyer targeting",
    ],
  },
  {
    k: "05",
    title: "Offer strategy + risk control",
    body:
      "This is where deals die. I run a tight offer process: verify strength, tighten terms, and keep the file clean for fiduciary review.",
    bullets: [
      "Proof of funds / lender vetting",
      "Contingency discipline + timeline control",
      "EMD posture and closing certainty",
    ],
  },
  {
    k: "06",
    title: "Escrow execution + clean close",
    body:
      "The goal is a quiet, predictable close. No surprises, no disorganized paper trail, no late chaos.",
    bullets: [
      "Disclosure discipline + document tracking",
      "Title/HOA/insurance friction handled early",
      "Communication that keeps everyone aligned",
    ],
  },
];

const investorSteps: Step[] = [
  {
    k: "01",
    title: "Criteria + underwriting rules",
    body:
      "You send criteria. I confirm the box. We agree on underwriting assumptions up front so we’re not arguing later.",
    bullets: [
      "Buy box (asset type, neighborhoods, budget, timeline)",
      "Return targets + risk tolerance",
      "Non-negotiables (tenancy, condition, title, etc.)",
    ],
  },
  {
    k: "02",
    title: "Sourcing (on- + off-market)",
    body:
      "Some deals are MLS. Some are not. Either way: I filter hard so you don’t waste time on junk.",
    bullets: [
      "Curated leads only (no spam feed)",
      "Deal notes: why it works / why it doesn’t",
      "Fast access when it matters",
    ],
  },
  {
    k: "03",
    title: "Offer construction + leverage",
    body:
      "Clean terms win. Speed and certainty win. I structure offers to reduce deal friction and protect downside.",
    bullets: [
      "Tight timelines + clear contingencies",
      "Strong EMD posture where appropriate",
      "Seller psychology + negotiation leverage",
    ],
  },
  {
    k: "04",
    title: "Execution to close",
    body:
      "You want a quiet close: clean docs, clean communication, clean timeline.",
    bullets: [
      "Inspection strategy based on risk, not emotion",
      "Title and disclosure friction handled early",
      "Close discipline (no last-week panic)",
    ],
  },
];

function StepCard({ s }: { s: Step }) {
  return (
    <div className="card p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          Step {s.k}
        </div>
      </div>
      <div className="mt-3 brand-serif text-2xl">{s.title}</div>
      <p className="mt-3 text-sm text-neutral-700">{s.body}</p>
      <ul className="mt-5 space-y-2 text-sm text-neutral-700">
        {s.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-section">
        <div className="container">
          <span className="pill">Process · Trust & Estate · Investors</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            A disciplined process for high-stakes real estate decisions.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            Trustees and executors don’t need hype. Investors don’t need noise.
            Both need clear numbers, clean terms, and execution that holds up later.
            This is the operating system.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
            >
              Schedule an intro call
            </Link>
            <Link
              href="/trust-estate"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              Trust &amp; estate lane
            </Link>
            <Link
              href="/investors"
              className="px-5 py-3 rounded-2xl border border-neutral-300 text-neutral-800 hover:border-black transition"
            >
              Investor lane
            </Link>
          </div>

          <div className="mt-5 text-xs text-neutral-500">
            Clean file discipline · Defensible pricing logic · Tight terms · Quiet close
          </div>
        </div>
      </section>

      {/* TRUST / ESTATE PROCESS */}
      <section className="page-section pt-0">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl">Trust &amp; estate process</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                Built for trustees, executors, heirs, and the professionals around them.
                The goal is a defensible decision and a clean paper trail.
              </p>
            </div>
            <Link href="/contact" className="hidden md:inline-flex pill">
              Start here
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {trustSteps.map((s) => (
              <StepCard key={s.k} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* INVESTOR PROCESS */}
      <section className="page-section bg-neutral-50">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="brand-serif text-3xl">Investor process</h2>
              <p className="mt-2 text-neutral-600 max-w-prose">
                Clear criteria. Conservative underwriting. Clean terms. Fast execution.
                No spam deal feed.
              </p>
            </div>
            <Link href="/opportunities" className="hidden md:inline-flex pill">
              View opportunities
            </Link>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {investorSteps.map((s) => (
              <StepCard key={s.k} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I NEED FROM YOU */}
      <section className="page-section">
        <div className="container grid md:grid-cols-2 gap-6 items-start">
          <div className="card p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              What I need from you
            </div>
            <h2 className="mt-3 brand-serif text-3xl">To move fast, we start with facts.</h2>
            <ul className="mt-5 space-y-3 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                <span>Property address + occupancy status (vacant / occupied)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                <span>Timeline + decision-maker(s) (trustee/executor/beneficiaries)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                <span>Any known issues (title, repairs, hoarding, tenants, etc.)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                <span>For investors: buy box + proof of funds + underwriting assumptions</span>
              </li>
            </ul>
          </div>

          <div className="card p-7 bg-neutral-900 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">
              Clean next step
            </div>
            <h2 className="mt-3 brand-serif text-3xl">
              One short call. Clear plan. Tight execution.
            </h2>
            <p className="mt-3 text-neutral-200">
              If you’re a trustee or executor, we’ll focus on defensible pricing and a
              clean timeline. If you’re an investor, we’ll confirm criteria and move fast.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-white bg-white text-black hover:bg-neutral-900 hover:text-white transition"
              >
                Schedule an intro call
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-2xl border border-white/40 text-white hover:border-white transition"
              >
                Send details
              </Link>
            </div>
            <div className="mt-5 text-xs text-neutral-300">
              Trustees/executors: send address + status. Investors: send criteria + POF.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

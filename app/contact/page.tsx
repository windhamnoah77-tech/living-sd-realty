import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Living San Diego Realty",
  description:
    "Contact Noah Windham for trust & estate property sales and investor transactions across San Diego and California. Start with a short call and a clean action plan.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Living San Diego Realty",
    description:
      "Contact Noah Windham for trust & estate property sales and investor transactions across San Diego and California. Start with a short call and a clean action plan.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: "Contact | Living San Diego Realty",
    description:
      "Contact Noah Windham for trust & estate property sales and investor transactions across San Diego and California.",
  },
};

export default function ContactPage() {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Noah Windham",
    brand: "Living San Diego Realty",
    url: "/",
    areaServed: ["San Diego, CA", "Bay Area, CA", "Los Angeles, CA"],
    telephone: "+1-707-305-6499",
    email: "Noah@rbhaley.com",
    priceRange: "$$$",
  };

  return (
    <main>
      {/* HERO */}
      <section className="page-section">
        <div className="container">
          <span className="pill">Contact · Trust & Estate · Investors · California</span>

          <h1 className="mt-5 text-4xl md:text-5xl leading-tight brand-serif">
            Start with a clean plan.
          </h1>

          <p className="mt-4 text-neutral-600 max-w-prose">
            Trustees and executors: you need defensible pricing, disciplined disclosures,
            and a file that stays organized from listing to close. Investors: you need
            conservative underwriting, clean terms, and fast execution. Either way, we
            start with facts and build a simple, disciplined path forward.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <a className="underline" href="mailto:Noah@rbhaley.com">
              Noah@rbhaley.com
            </a>
            <span className="text-neutral-400">·</span>
            <a className="underline" href="tel:+17073056499">
              (707) 305-6499
            </a>
            <span className="text-neutral-400">·</span>
            <span className="text-neutral-600">San Diego base · CA by request</span>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
          />
        </div>
      </section>

      {/* CONTACT FORM + TRUST SIGNALS */}
      <section className="page-section pt-0">
        <div className="container grid md:grid-cols-2 gap-6 items-start">
          {/* LEFT: TRUST / POSITIONING */}
          <div className="card p-7">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              What this call is (and isn’t)
            </div>

            <h2 className="mt-3 brand-serif text-3xl">A short, focused intake call.</h2>

            <p className="mt-3 text-neutral-600 max-w-prose">
              This is not a high-pressure sales routine. It’s a clean review of your
              situation: timeline, constraints, pricing logic, and the simplest path to
              execution.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="card p-6 bg-neutral-50">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Trustees / executors
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>Defensible valuation strategy (comps + absorption + risk framing)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>Disclosures + file discipline to reduce renegotiation and delays</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>Offer strategy that prioritizes certainty, not just headline price</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-neutral-50">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Investors
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>Buy box confirmation + underwriting assumptions up front</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>On- and off-market sourcing with filtering (no spam feed)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neutral-900 shrink-0" />
                    <span>Clean offers, tight timelines, fast execution</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-xs text-neutral-500 space-y-1">
              <div>
                Noah Windham · CA DRE #02227646 · Brokered by R B Haley Inc · CA DRE #01843189
              </div>
              <div>Equal Housing Opportunity.</div>
            </div>
          </div>

          {/* RIGHT: NETLIFY FORM */}
          <div className="card p-7 bg-neutral-50">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Send details
            </div>
            <h2 className="mt-3 brand-serif text-3xl">I’ll reply directly.</h2>
            <p className="mt-3 text-sm text-neutral-700">
              Fill this out and I’ll respond with next steps and suggested times.
              Keep it brief—facts over stories.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="mt-6 space-y-3 text-sm"
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  required
                  name="name"
                  placeholder="Full name"
                  className="border rounded-xl px-3 py-2 w-full bg-white"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border rounded-xl px-3 py-2 w-full bg-white"
                />
              </div>

              <input
                name="phone"
                placeholder="Phone (optional)"
                className="border rounded-xl px-3 py-2 w-full bg-white"
              />

              <select
                name="lane"
                className="border rounded-xl px-3 py-2 w-full bg-white"
                defaultValue="Trustee / executor (trust or estate sale)"
              >
                <option>Trustee / executor (trust or estate sale)</option>
                <option>Family / heir (estate property decision)</option>
                <option>Investor (acquisition / disposition)</option>
                <option>Seller (non-trust listing)</option>
              </select>

              <input
                name="property"
                placeholder="Property address (or city/neighborhood if early stage)"
                className="border rounded-xl px-3 py-2 w-full bg-white"
              />

              <div className="grid md:grid-cols-2 gap-3">
                <select
                  name="occupancy"
                  className="border rounded-xl px-3 py-2 w-full bg-white"
                  defaultValue="Unknown / TBD"
                >
                  <option>Unknown / TBD</option>
                  <option>Vacant</option>
                  <option>Owner-occupied (family/heir)</option>
                  <option>Tenant-occupied</option>
                </select>

                <select
                  name="timeline"
                  className="border rounded-xl px-3 py-2 w-full bg-white"
                  defaultValue="0–30 days"
                >
                  <option>0–30 days</option>
                  <option>30–60 days</option>
                  <option>60–90 days</option>
                  <option>90+ days / planning</option>
                </select>
              </div>

              <textarea
                name="message"
                rows={5}
                placeholder="In 3–6 bullets: goals, constraints, and anything that could complicate the deal (title, repairs, hoarding, tenants, access, etc.). Investors: include buy box + budget + POF/financing plan."
                className="border rounded-xl px-3 py-2 w-full bg-white"
                required
              />

              <button
                type="submit"
                className="mt-2 w-full px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition"
              >
                Send
              </button>

              <div className="mt-3 text-xs text-neutral-500">
                You’ll get a direct reply from me (not an automated drip).
              </div>
            </form>

            {/* QUICK ALT CONTACT */}
            <div className="mt-6 card p-6 bg-white">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Prefer email?
              </div>
              <p className="mt-3 text-sm text-neutral-700">
                Send <span className="font-semibold">address + occupancy + timeline</span>.
                Investors: add <span className="font-semibold">buy box + budget + POF</span>.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a className="underline" href="mailto:Noah@rbhaley.com?subject=Intro%20Call%20Request">
                  Email Noah
                </a>
                <a className="underline" href="tel:+17073056499">
                  Call Noah
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section">
        <div className="container">
          <h2 className="brand-serif text-3xl">Quick FAQ</h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card p-7">
              <div className="brand-serif text-xl">Do you handle standard listings too?</div>
              <p className="mt-3 text-sm text-neutral-600">
                Yes. My primary lane is trust and estate sales, but I also represent
                sellers outside of trusts when the fit is right and the plan is disciplined.
              </p>
            </div>

            <div className="card p-7">
              <div className="brand-serif text-xl">Do you coordinate with attorneys/CPAs?</div>
              <p className="mt-3 text-sm text-neutral-600">
                Where appropriate, yes. I keep execution clean and communication tight.
                Legal questions should be handled by qualified counsel.
              </p>
            </div>

            <div className="card p-7">
              <div className="brand-serif text-xl">Do you do off-market?</div>
              <p className="mt-3 text-sm text-neutral-600">
                Yes—when it serves the goal (privacy, speed, complexity control) and
                the numbers justify it. Sometimes MLS is the smarter move.
              </p>
            </div>

            <div className="card p-7">
              <div className="brand-serif text-xl">What should I send first?</div>
              <p className="mt-3 text-sm text-neutral-600">
                Address + occupancy + timeline + any known issues. Investors: buy box
                + budget + proof of funds/financing plan.
              </p>
            </div>
          </div>

          <div className="mt-8 text-xs text-neutral-500">
            Educational information only. Not legal advice.
          </div>
        </div>
      </section>
    </main>
  );
}

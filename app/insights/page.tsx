import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | Trust & Estate Real Estate Notes",
  description:
    "Short, practical notes for trustees, executors, and investors: pricing, disclosures, timelines, and deal structure.",
};

export default function InsightsPage() {
  const posts = [
    {
      date: "2025-11-01",
      title: "Trust sale pricing: defensible logic vs. wishful thinking",
      excerpt:
        "How I frame value for trustees: comps, market conditions, risk, and timing—so the decision holds up later.",
    },
    {
      date: "2025-10-18",
      title: "Investor underwriting: assumptions that don’t lie to you",
      excerpt:
        "The quick filters I use before anyone wastes time: rent comps, capex flags, exit logic, and terms.",
    },
  ];

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Insights</span>
          <h1 className="mt-5 brand-serif text-4xl md:text-5xl leading-tight">
            Notes for trustees and serious investors.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-prose">
            Short, practical pieces you can forward to a family member, attorney, CPA, or partner.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <article key={p.title} className="card p-6">
                <div className="text-xs text-neutral-500">{p.date}</div>
                <h2 className="mt-2 brand-serif text-2xl">{p.title}</h2>
                <p className="mt-3 text-sm text-neutral-600">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

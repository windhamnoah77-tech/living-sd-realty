import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | San Diego · Bay Area · Los Angeles",
  description:
    "Service areas for trust & estate real estate representation and investor work across California. San Diego base with Bay Area and LA by request.",
};

export default function ServiceAreasPage() {
  const areas = [
    { city: "San Diego", hoods: ["North Park", "Mission Hills", "Point Loma", "La Jolla"] },
    { city: "Bay Area", hoods: ["San Mateo", "Walnut Creek", "Oakland Hills", "Palo Alto (by request)"] },
    { city: "Los Angeles", hoods: ["Sherman Oaks", "Studio City", "Encino", "Burbank"] },
  ];

  return (
    <main>
      <section className="page-section">
        <div className="container">
          <span className="pill">Service Areas</span>
          <h1 className="mt-5 brand-serif text-4xl md:text-5xl leading-tight">
            San Diego base. Bay Area and Los Angeles by request.
          </h1>
          <p className="mt-4 text-neutral-600 max-w-prose">
            Most trust & estate work starts in San Diego, where clean execution matters.
            I also collaborate across California for families and investors with multi-market needs.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {areas.map((a) => (
              <div key={a.city} className="card p-6">
                <div className="brand-serif text-lg">{a.city}</div>
                <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                  {a.hoods.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

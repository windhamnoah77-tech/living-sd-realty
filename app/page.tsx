import Link from "next/link";
import type { Metadata } from "next";

const title = "San Diego Trust and Estate Real Estate";
const description = "Noah Windham helps trustees, executors and families price, prepare and sell San Diego property, including homes in 55+ communities.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { title, description },
};

export default function HomePage() {
  return (
    <main className="practice-home">
      <header className="practice-hero">
        <p className="practice-location">Noah Windham · San Diego</p>
        <h1>Trust &amp; estate<br />real estate.</h1>
        <p className="practice-summary">When a family home is held in trust or an estate, I help you decide what it’s worth, what to do before selling, and how to bring the sale to a close.</p>
        <div className="practice-actions">
          <Link className="practice-primary" href="/contact">Talk with Noah</Link>
          <Link href="/trust-estate">Explore estate services <span aria-hidden="true">›</span></Link>
        </div>
      </header>

      <div className="practice-services">
        <section className="practice-panel estate-panel">
          <h2>Managing an estate sale.</h2>
          <p>Compare selling as-is with preparing the property. I coordinate local vendors, cleanouts and estate-sale appointments, and keep your authorized family members and advisers informed.</p>
          <Link href="/trust-estate">For trustees and executors <span aria-hidden="true">›</span></Link>
        </section>
        <section className="practice-panel community-panel">
          <h2>Planning your next move.</h2>
          <p>If you own a home in a San Diego County 55+ community, start with recent sales for your floor plan and an estimate of what you could take into your next home.</p>
          <Link href="/55-plus">For 55+ homeowners <span aria-hidden="true">›</span></Link>
        </section>
      </div>

      <section className="practice-fees">
        <div><h2>Listing options</h2><p>Compare services and estimate your proceeds. Listing-side options start at 1%.</p></div>
        <Link href="/listing-options">Compare options <span aria-hidden="true">›</span></Link>
      </section>
    </main>
  );
}

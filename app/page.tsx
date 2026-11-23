import Link from "next/link";
import type { Metadata } from "next";

const title = "1% Listing Fee in San Diego County | Noah Windham";
const description = "Sell a market-ready home in San Diego County with a 1% listing-side option. Compare services with Noah Windham, including trust sales and 55+ communities.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { title, description },
};

export default function HomePage() {
  return (
    <main className="practice-home">
      <header className="practice-hero">
        <p className="practice-location">Noah Windham · San Diego County</p>
        <h1><span className="fee-number">1%</span> listing fee.</h1>
        <p className="practice-summary">On a $1 million sale, that’s $10,000 for listing representation. I handle pricing, photography, MLS marketing, negotiations and escrow. You handle preparation, vendors and access.</p>
        <div className="practice-actions">
          <Link className="practice-primary" href="/listing-options#estimate">Ask Noah about listing for 1%</Link>
          <Link href="/listing-options#calculator">Compare fees and proceeds <span aria-hidden="true">›</span></Link>
        </div>
        <p className="fee-terms">Market-ready option. Listing fees are negotiable. Any buyer-agent compensation is separate.</p>
      </header>

      <div className="practice-services">
        <section className="practice-panel estate-panel">
          <h2>Trust &amp; estate sales.</h2>
          <p>Compare selling as-is with preparing the property. I coordinate local vendors, cleanouts and estate-sale appointments, and keep your authorized family members and advisers informed.</p>
          <Link href="/trust-estate">For trustees and executors <span aria-hidden="true">›</span></Link>
        </section>
        <section className="practice-panel community-panel">
          <h2>Selling in a 55+ community.</h2>
          <p>If you own a home in a San Diego County 55+ community, start with recent sales for your floor plan and an estimate of what you could take into your next home.</p>
          <Link href="/55-plus">For 55+ homeowners <span aria-hidden="true">›</span></Link>
        </section>
      </div>

      <section className="practice-fees">
        <div><h2>Want more handled for you?</h2><p>Compare the 2.5% managed sale and 3% sale-and-move options.</p></div>
        <Link href="/listing-options">Compare options <span aria-hidden="true">›</span></Link>
      </section>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import SellerRequest from "./components/SellerRequest";

export const metadata = {
  title: "San Diego Home Selling, 55+ Communities and Listing Fees",
  description: "Plan your San Diego County home sale with Noah Windham. Compare listing options, calculate proceeds, and request a personal estimate.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <main className="seller-wrap">
    <header className="seller-hero"><div><p className="seller-byline">Noah Windham · Black Label Realty</p>
      <h1>What will your San Diego home sale make possible?</h1>
      <p>Start with your likely selling price, what it costs to move, and what you can take into your next home. I’ll help you put those numbers on paper.</p>
      <div className="seller-actions"><a className="seller-button" href="#estimate">Get my sale estimate</a><Link href="/listing-options">Compare listing fees from 1%</Link></div>
    </div><Image src="/images/placeholder-1.jpg" alt="" width={760} height={680} priority className="seller-photo" /></header>
    <div className="seller-grid"><section><h2>What are you planning?</h2>
      <Link className="seller-path" href="/55-plus"><strong>Selling in a 55+ community</strong><span>Compare floor plans and plan the timing of your move.</span></Link>
      <Link className="seller-path" href="/listing-options#calculator"><strong>Estimating my proceeds</strong><span>See how fees, loan payoff and preparation affect your numbers.</span></Link>
      <Link className="seller-path" href="/trust-estate"><strong>Selling for a trust or estate</strong><span>Work through valuation, preparation and coordination with the family.</span></Link>
      <Link className="seller-path" href="/insights"><strong>Local seller guides</strong><span>See comparable sales, a worked net sheet and a move-planning checklist.</span></Link>
    </section><SellerRequest source="homepage" /></div>
  </main>;
}

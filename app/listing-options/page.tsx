import Link from "next/link";
import Proceeds from "../components/Proceeds";
import SellerRequest from "../components/SellerRequest";

const title = "San Diego 1% Listing Fee: Services, Costs and Seller Proceeds";
const description = "See what a 1% listing fee covers in San Diego County, compare managed-sale options and calculate your estimated proceeds before requesting a personal estimate.";
export const metadata = {
  title, description, alternates: { canonical: "/listing-options" },
  openGraph: { title, description, url: "/listing-options" }, twitter: { title, description },
};

export default function ListingOptions() {
  return (
    <main className="seller-wrap">
      <header className="seller-intro">
        <p>San Diego County · Seller representation</p>
        <h1>What a 1% listing fee covers.</h1>
        <p>For a market-ready sale, I handle pricing, standard photography, MLS marketing, negotiation and escrow oversight. You arrange preparation, vendors and property access.</p>
        <div className="seller-actions"><a className="seller-button" href="#estimate">Request a personal estimate</a><a href="#calculator">Compare fees in dollars</a></div>
      </header>
      <Proceeds />
      <section className="my-12 max-w-3xl">
        <h2>Which option fits your sale?</h2>
        <p className="my-4">If the home is ready for photography and someone can arrange access, start with the 1% option. At an $800,000 sale price, the listing fee would be $8,000. At $1.25 million, it would be $12,500. Buyer-agent compensation, if agreed, and closing expenses are separate.</p>
        <p className="my-4">If contractors need access while you are out of town, compare the 2.5% managed sale. If the calendar also involves a cleanout, an estate sale or a move, the 3% option adds coordination for those pieces. Vendor charges are separate. We’ll agree on responsibilities and a negotiable fee in writing.</p>
        <p><Link className="underline" href="/insights/san-diego-million-dollar-sale-proceeds">See a worked example of proceeds on a $1 million San Diego sale.</Link></p>
      </section>
      <SellerRequest source="listing_options" />
    </main>
  );
}

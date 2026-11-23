import Proceeds from "../components/Proceeds";
import SellerRequest from "../components/SellerRequest";
export const metadata = { title: "San Diego 1% Listing Fee and Seller Service Options", description: "Compare 1%, 2.5% and 3% listing-side options, choose who handles the work, and estimate your sale proceeds.", alternates: { canonical: "/listing-options" } };
export default function ListingOptions() {
  return <main className="seller-wrap"><header className="seller-intro"><p>San Diego County · Listing options</p><h1>Listing options starting at 1%.</h1><p>A market-ready home and a move with three vendors on the calendar call for different levels of help. Compare the work and the fee side by side.</p></header><Proceeds /><SellerRequest source="listing_options" /></main>;
}

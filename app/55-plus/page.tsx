import type { Metadata } from "next";
import SellerRequest from "../components/SellerRequest";
import Link from "next/link";

const title = "Selling a Home in a San Diego County 55+ Community";
const description = "Compare recent sales in your community, estimate your proceeds, and plan your move with San Diego real estate agent Noah Windham.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/55-plus" },
  openGraph: { title, description, url: "/55-plus" },
};

export default function CommunitySellerPage() {
  return (
    <main className="page-section">
      <div className="container max-w-4xl">
        <p className="text-sm text-neutral-600">San Diego County · 55+ community homeowners</p>
        <h1 className="mt-4 brand-serif text-4xl md:text-5xl">What would you walk away with if you sold your home?</h1>
        <p className="mt-5 max-w-prose text-lg">Tell me your community and floor plan. I’ll look at recent sales, explain which homes compare to yours, and estimate what you could take into your next move.</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <Link href="#estimate" className="rounded-2xl bg-black px-5 py-3 text-white">Request my sale estimate</Link>
          <a href="tel:+17073056499" className="rounded-2xl border px-5 py-3">Call Noah at (707) 305-6499</a>
        </div>
        <section className="mt-12 border-t pt-8">
          <h2 className="brand-serif text-3xl">Three decisions we can work through together</h2>
          <dl className="mt-6 max-w-prose space-y-5">
            <div><dt className="font-semibold">What could my home sell for?</dt><dd>We’ll look at the closest comparable sales and account for differences in layout, condition, location, and outdoor space.</dd></div>
            <div><dt className="font-semibold">Which expenses are worth taking on?</dt><dd>We’ll compare selling as-is with a short list of repairs and put the estimated costs beside the likely proceeds.</dd></div>
            <div><dt className="font-semibold">How would the dates work?</dt><dd>We’ll plan around your next home, the belongings you want to take, and any community requirements that could affect closing.</dd></div>
          </dl>
        </section>
        <p className="mt-10 max-w-prose text-neutral-700">Helping my great-aunt move from Ocean Hills Country Club showed me how much has to happen before a home goes on the market. I offer that same planning to homeowners in 55+ communities throughout San Diego County. You can start the conversation even if your move is a year away.</p>
        <div className="seller-actions"><Link href="/listing-options">Compare listing options and proceeds</Link></div>
        <SellerRequest source="55_plus" />
      </div>
    </main>
  );
}

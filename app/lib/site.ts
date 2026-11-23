export const site = {
  brand: "Living San Diego Realty",
  name: "Noah Windham",
  email: "noah@blacklabelrealty.com",
  phoneDisplay: "(707) 305-6499",
  phoneTel: "+17073056499",
  dreAgent: "CA DRE #02227646",
  dreBroker: "Black Label Realty · CA DRE #02254507",
  brokerAddress: "2535 Camino del Rio S #325, San Diego, CA 92108",
  url: "https://livingsandiegorealty.com",
  markets: ["San Diego", "Bay Area", "Los Angeles"],
};

/**
 * Listing fee options shown on the homepage and /listing-fees.
 * Edit the numbers and inclusions here; every page reads from this list.
 */
export const listingPlans = [
  {
    id: "market-ready",
    name: "Market-Ready",
    rate: 1,
    tagline: "Full MLS listing for sellers who handle the prep.",
    includes: [
      "Pricing analysis with recent comparable sales",
      "Professional photography",
      "MLS, Zillow, Redfin and syndication",
      "Offer review and negotiation",
      "Disclosures and escrow managed to close",
    ],
    sellerHandles: "You handle cleanout, repairs, vendors and showing access.",
  },
  {
    id: "managed",
    name: "Managed Sale",
    rate: 2.5,
    tagline: "Noah runs the prep, vendors and showings.",
    includes: [
      "Everything in Market-Ready",
      "Prep plan and budget: repairs, paint, cleaning, staging",
      "Vendor scheduling and oversight",
      "Showings and open houses run by Noah",
      "Weekly market and pricing updates",
    ],
    sellerHandles: "You approve the plan and the budget. Noah does the rest.",
    featured: true,
  },
  {
    id: "managed-move",
    name: "Managed Sale + Move",
    rate: 3,
    tagline: "For trust, estate and downsizing sales with a move to manage.",
    includes: [
      "Everything in Managed Sale",
      "Coordination of the move, cleanout or estate sale",
      "Vendor access when family lives out of the area",
      "Updates to trustees, heirs and authorized family",
      "Coordination with your attorney or CPA where needed",
    ],
    sellerHandles: "Outside vendor costs (movers, cleanout, estate sale) are agreed separately.",
  },
] as const;

export const feeDisclosure =
  "Listing fees are negotiable and not set by law. Buyer-agent compensation is separate and is negotiated on each sale. Plans are offered through Black Label Realty.";

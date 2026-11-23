/**
 * 55+ communities featured on the site.
 *
 * A community with `page` set gets its own page at /55-plus-communities/<slug>
 * and is added to the sitemap automatically. To add the next community, copy
 * Oceana's entry and fill in `slug` and `page`.
 *
 * Keep facts to stable details (size, era, setup). Confirm HOA dues, occupancy
 * rules and fees with the HOA before quoting them to a client.
 */
export type CommunityPage = {
  seoTitle: string;
  seoDescription: string;
  intro: string;
  facts: Array<{ label: string; value: string }>;
  amenities: string[];
  sellerNotes: Array<{ h: string; p: string }>;
  faq: Array<{ q: string; a: string }>;
};

export type Community = {
  name: string;
  city: string;
  area: string;
  blurb: string;
  slug?: string;
  page?: CommunityPage;
};

export const communities: Community[] = [
  {
    name: "Oceana",
    city: "Oceanside",
    area: "North County",
    blurb: "About 2,300 homes built 1964–1984, single-family and attached, next to Emerald Isle golf course.",
    slug: "oceana-oceanside",
    page: {
      seoTitle: "Selling a Home in Oceana, Oceanside (55+): Seller Guide",
      seoDescription:
        "Selling a home in Oceana, Oceanside's largest 55+ community? What buyers look for, what to fix first, HOA documents, and how to price by neighborhood and home type.",
      intro:
        "Oceana is one of North County's largest 55+ communities: roughly 2,300 homes in Oceanside, built over two decades and spread across several neighborhoods. Because homes range from compact attached units to single-family houses, pricing depends heavily on which neighborhood and floor plan you own.",
      facts: [
        { label: "Location", value: "Oceanside, North San Diego County" },
        { label: "Homes", value: "About 2,300" },
        { label: "Built", value: "1964–1984" },
        { label: "Home types", value: "Single-family and attached (duplex to condo)" },
        { label: "Age-restricted", value: "Yes, 55+" },
        { label: "Gated", value: "No" },
      ],
      amenities: [
        "Main clubhouse with card, billiards and hobby rooms",
        "Pools and spas, with clubhouses in most neighborhoods",
        "Community garden and walking paths",
        "Next to Emerald Isle golf course",
      ],
      sellerNotes: [
        {
          h: "Price by neighborhood and home type",
          p: "An attached garden unit and a single-family home in Oceana are different products with different buyers. Comparable sales need to match the neighborhood, home type, square footage and garage setup, or the price will be off.",
        },
        {
          h: "Inspect the older systems first",
          p: "Many homes here are 40 to 60 years old. Sewer lines, electrical panels, plumbing, roofs and windows are what buyers' inspectors focus on. A pre-listing inspection and a sewer camera scope let you fix or price around issues before a buyer uses them to renegotiate.",
        },
        {
          h: "Order HOA documents early",
          p: "Buyers will review the association's rules, budget, reserves and any planned assessments. Requesting the resale package as soon as you decide to sell avoids delays in escrow and lets us answer buyer questions up front.",
        },
        {
          h: "Know who can buy",
          p: "Age-restricted communities have occupancy rules buyers must meet. Confirm the current rules with the HOA so we market to qualified buyers and avoid surprises after an offer.",
        },
        {
          h: "Selling a parent's home or a trust property",
          p: "Many Oceana sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, access and updates if family lives out of the area.",
        },
      ],
      faq: [
        {
          q: "What is my Oceana home worth?",
          a: "It depends on your neighborhood, home type, size and condition. Send your address and Noah will reply with recent Oceana sales that match your home and a price range.",
        },
        {
          q: "Should I update my Oceana home before selling?",
          a: "Usually only targeted work: safety items, obvious repairs, paint and cleaning. Large remodels rarely return their cost. A walkthrough helps decide what is worth doing.",
        },
        {
          q: "How long do Oceana homes take to sell?",
          a: "It varies with price, condition and season. Well-priced, clean homes in popular floor plans tend to move fastest. Noah can share current days-on-market for homes like yours.",
        },
        {
          q: "Can you sell my Oceana home for 1%?",
          a: "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move.",
        },
      ],
    },
  },
  {
    name: "Ocean Hills Country Club",
    city: "Oceanside",
    area: "North County",
    blurb: "Golf-course community with its own 18 holes and a large resident clubhouse.",
  },
  {
    name: "Oceana Mission",
    city: "Oceanside",
    area: "North County",
    blurb: "About 470 homes built 1979–1986.",
  },
  {
    name: "Peacock Hills",
    city: "Oceanside",
    area: "North County",
    blurb: "About 920 attached homes.",
  },
  {
    name: "Rancho Carlsbad",
    city: "Carlsbad",
    area: "North County",
    blurb: "About 500 manufactured homes where owners own the land.",
  },
  {
    name: "Lakeshore Gardens",
    city: "Carlsbad",
    area: "North County",
    blurb: "Gated coastal community west of I-5, near South Carlsbad State Beach.",
  },
  {
    name: "Oaks North",
    city: "Rancho Bernardo",
    area: "Inland North County",
    blurb: "About 1,960 homes built 1976–1987.",
  },
  {
    name: "Seven Oaks",
    city: "Rancho Bernardo",
    area: "Inland North County",
    blurb: "Established single-level homes in Rancho Bernardo.",
  },
  {
    name: "Auberge at Del Sur",
    city: "San Diego",
    area: "Inland North County",
    blurb: "About 200 newer homes built 2016–2017.",
  },
];

export const communityPages = communities.filter(
  (c): c is Community & { slug: string; page: CommunityPage } => Boolean(c.slug && c.page),
);

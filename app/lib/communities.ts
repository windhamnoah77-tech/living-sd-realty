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
    blurb: "Gated golf community: about 1,630 homes built 1984–1999, with its own 18-hole course.",
    slug: "ocean-hills-country-club-oceanside",
    page: {
      seoTitle: "Selling a Home in Ocean Hills Country Club, Oceanside (55+)",
      seoDescription:
        "Selling a home in Ocean Hills Country Club? How buyers compare floor plans and phases, what to prepare, HOA resale documents, and how to price against recent Ocean Hills sales.",
      intro:
        "Ocean Hills Country Club is a gated 55+ golf community in Oceanside: roughly 1,630 homes on about 350 acres, built in three phases from 1984 to 1999. With 17 floor plans from around 900 to 2,800 square feet, two homes on the same street can sell for very different prices, so pricing has to match your exact plan, phase, lot and condition.",
      facts: [
        { label: "Location", value: "Oceanside, about 4 miles from the coast" },
        { label: "Homes", value: "About 1,630" },
        { label: "Built", value: "1984–1999, in three phases" },
        { label: "Floor plans", value: "17, about 900 to 2,800 sq ft" },
        { label: "Home types", value: "Single-family and attached (duplex)" },
        { label: "Age-restricted", value: "Yes, 55+" },
        { label: "Gated", value: "Yes" },
      ],
      amenities: [
        "Private 18-hole executive golf course",
        "27,000 sq ft clubhouse with ballroom, fitness center and hobby studios",
        "Pool, tennis, pickleball, bocce and shuffleboard",
        "Full-time activities director",
      ],
      sellerNotes: [
        {
          h: "Price by floor plan, not by street",
          p: "Buyers in Ocean Hills shop by model. Comparable sales should match your floor plan, square footage, garage size and any additions or upgrades. Golf course and view lots usually sell at a premium, so lot position matters as much as the house.",
        },
        {
          h: "Present the updates buyers notice",
          p: "Homes here are 25 to 40 years old. Kitchens, baths, flooring, windows and HVAC are what separate the top sales from the rest. Original-condition homes still sell well when priced for it; the key is matching price to condition.",
        },
        {
          h: "Order the HOA resale package early",
          p: "Buyers will review the association's rules, budget, reserves and any planned projects. Ordering the resale documents when you decide to sell keeps escrow on schedule.",
        },
        {
          h: "Plan showings around the gate",
          p: "Gated access means showings need coordination. A clear access plan, and an agent who handles it, keeps buyer traffic steady without disrupting you or your neighbors.",
        },
        {
          h: "Selling for a parent or a trust",
          p: "Many Ocean Hills sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, gate access and updates when family lives out of the area.",
        },
      ],
      faq: [
        {
          q: "What is my Ocean Hills home worth?",
          a: "It depends on your floor plan, phase, lot and updates. Send your address and Noah will reply with recent Ocean Hills sales of the same or similar models and a price range.",
        },
        {
          q: "Do golf course lots sell for more in Ocean Hills?",
          a: "Usually, yes. Golf frontage and views tend to command a premium over interior lots with the same floor plan. How much depends on the view and the current market.",
        },
        {
          q: "Should I remodel before selling?",
          a: "Rarely a full remodel. Paint, flooring, lighting and fixing obvious wear often pay off; large kitchen or bath projects usually don't return their full cost before a sale.",
        },
        {
          q: "Can you sell my Ocean Hills home for 1%?",
          a: "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move.",
        },
      ],
    },
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
    blurb: "About 1,960 homes built 1976–1987 across eight neighborhoods, next to Oaks North Golf Course.",
    slug: "oaks-north-rancho-bernardo",
    page: {
      seoTitle: "Selling a Home in Oaks North, Rancho Bernardo (55+): Seller Guide",
      seoDescription:
        "Selling a home in Oaks North, Rancho Bernardo's 55+ community? How pricing differs across its eight neighborhoods, HOA documents, what to fix first, and how to reach qualified buyers.",
      intro:
        "Oaks North is a 55+ community in Rancho Bernardo with roughly 1,960 homes built from 1976 to 1987. It is really eight neighborhoods in one, from condos to single-family homes, each with its own HOA and price range. Your home's value depends first on which neighborhood it is in.",
      facts: [
        { label: "Location", value: "Rancho Bernardo, San Diego" },
        { label: "Homes", value: "About 1,960" },
        { label: "Built", value: "1976–1987" },
        { label: "Home types", value: "Condos, attached and single-family" },
        { label: "Neighborhoods", value: "8 (incl. Chapala, Mirador, The Greens, Haciendas)" },
        { label: "Age-restricted", value: "Yes, 55+" },
        { label: "Gated", value: "No (Chapala has a gated entry)" },
      ],
      amenities: [
        "Next to Oaks North Golf Course (27 holes, public)",
        "Community center with fitness, library, hobby and craft studios",
        "Pool, tennis and lawn bowling",
        "Walking and biking paths; close to Rancho Bernardo Town Center",
      ],
      sellerNotes: [
        {
          h: "Price within your own neighborhood",
          p: "A Haciendas condo, an Oaks North Villas twin home and a Chapala single-family home are different products with different buyers and HOAs. The right comparable sales come from your own neighborhood and home type first.",
        },
        {
          h: "Know your HOA, and the master association",
          p: "Many Oaks North homes belong to a neighborhood HOA as well as broader community associations. Buyers will ask what dues cover, so ordering every resale package early avoids surprises and delays in escrow.",
        },
        {
          h: "Inspect the systems first",
          p: "At 40 to 50 years old, these homes draw buyer attention to roofs, plumbing, electrical panels, HVAC and windows. A pre-listing inspection lets you fix or price around issues before a buyer uses them to renegotiate.",
        },
        {
          h: "Single-level living is the selling point",
          p: "Buyers come to Oaks North for single-level homes, golf and Rancho Bernardo convenience. Marketing should lead with the floor plan, the setting and the neighborhood, not just the square footage.",
        },
        {
          h: "Selling for a parent or a trust",
          p: "Many Oaks North sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, access and updates when family lives out of the area.",
        },
      ],
      faq: [
        {
          q: "What is my Oaks North home worth?",
          a: "It depends most on your neighborhood, then your home type, size and condition. Send your address and Noah will reply with recent sales in your neighborhood and a price range.",
        },
        {
          q: "Which Oaks North neighborhood am I in?",
          a: "Your HOA statement or grant deed usually names it. If you're not sure, send the address and Noah will confirm it with the comparable sales.",
        },
        {
          q: "Should I update my Oaks North home before selling?",
          a: "Targeted work usually pays best: safety items, obvious repairs, paint and cleaning. A walkthrough helps decide what is worth doing for your home and price point.",
        },
        {
          q: "Can you sell my Oaks North home for 1%?",
          a: "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move.",
        },
      ],
    },
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

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
    "name": "Oceana Mission",
    "city": "Oceanside",
    "area": "North County",
    "blurb": "Single-story attached homes built 1979–1986, about 900 to 1,170 sq ft.",
    "slug": "oceana-mission-oceanside",
    "page": {
      "seoTitle": "Selling a Home in Oceana Mission, Oceanside (55+)",
      "seoDescription": "Selling a home in Oceana Mission, Oceanside? How buyers compare these single-story attached homes, what to fix first, HOA documents, and how to price against recent sales.",
      "intro": "Oceana Mission is a 55+ community in Oceanside of single-story attached homes built from 1979 to 1986. Most are two-bedroom, two-bath plans from about 900 to 1,170 square feet, so buyers compare homes closely on size, parking, location within the community and condition.",
      "facts": [
        {
          "label": "Location",
          "value": "Oceanside, North San Diego County"
        },
        {
          "label": "Built",
          "value": "1979–1986"
        },
        {
          "label": "Home types",
          "value": "Single-story attached"
        },
        {
          "label": "Sizes",
          "value": "About 900 to 1,170 sq ft, 2 bed / 2 bath"
        },
        {
          "label": "Parking",
          "value": "One-car garage or carport"
        },
        {
          "label": "Age-restricted",
          "value": "Yes, 55+"
        },
        {
          "label": "Gated",
          "value": "No"
        }
      ],
      "amenities": [
        "Clubhouse with multipurpose room",
        "Several pools and spas",
        "Barbecue and patio areas",
        "Activities director"
      ],
      "sellerNotes": [
        {
          "h": "Small differences drive the price",
          "p": "With similar floor plans throughout, buyers notice the details: garage versus carport, end unit versus middle, location near a pool or the street, and how updated the kitchen and bath are. Comparable sales need to match those details."
        },
        {
          "h": "Inspect the older systems first",
          "p": "These homes are 40-plus years old. Plumbing, electrical, water heaters, HVAC and windows are what buyers' inspectors focus on. A pre-listing inspection lets you fix or price around issues before a buyer uses them to renegotiate."
        },
        {
          "h": "Order HOA documents early",
          "p": "Buyers review the association's rules, budget, reserves and any planned projects. Requesting the resale package when you decide to sell keeps escrow on schedule."
        },
        {
          "h": "Single-level living sells",
          "p": "No stairs, low maintenance and a quieter setting are what Oceana Mission buyers want. Clean, bright, move-in-ready presentation matters more here than big upgrades."
        },
        {
          "h": "Selling for a parent or a trust",
          "p": "Many Oceana Mission sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, access and updates when family lives out of the area."
        }
      ],
      "faq": [
        {
          "q": "What is my Oceana Mission home worth?",
          "a": "It depends on your floor plan, parking, location in the community and condition. Send your address and Noah will reply with recent Oceana Mission sales that match your home and a price range."
        },
        {
          "q": "Is Oceana Mission part of Oceana?",
          "a": "They are separate 55+ communities in Oceanside with their own associations. Buyers often shop both, so pricing should account for both."
        },
        {
          "q": "Should I update before selling?",
          "a": "Usually only targeted work: safety items, obvious repairs, paint, flooring and a deep clean. Big remodels rarely return their cost at this price point."
        },
        {
          "q": "Can you sell my Oceana Mission home for 1%?",
          "a": "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move."
        }
      ]
    }
  },
  {
    "name": "Peacock Hills",
    "city": "Oceanside",
    "area": "North County",
    "blurb": "About 920 duplex-style homes built 1976–1980, most with an attached garage.",
    "slug": "peacock-hills-oceanside",
    "page": {
      "seoTitle": "Selling a Home in Peacock Hills, Oceanside (55+)",
      "seoDescription": "Selling a home in Peacock Hills, Oceanside's 55+ duplex community? How to price by floor plan and condition, what buyers inspect, HOA documents, and selling a parent's home.",
      "intro": "Peacock Hills is a 55+ community in Oceanside with about 920 duplex-style homes built from 1976 to 1980. Homes run from roughly 830 to over 1,300 square feet, most with two or three bedrooms and an attached one-car garage, which makes it one of the more affordable ways into a North County 55+ community.",
      "facts": [
        {
          "label": "Location",
          "value": "Oceanside, about 7 miles from the beach"
        },
        {
          "label": "Homes",
          "value": "About 920"
        },
        {
          "label": "Built",
          "value": "1976–1980"
        },
        {
          "label": "Home types",
          "value": "Attached (duplex buildings)"
        },
        {
          "label": "Sizes",
          "value": "About 830 to 1,300+ sq ft"
        },
        {
          "label": "Age-restricted",
          "value": "Yes, 55+"
        },
        {
          "label": "Gated",
          "value": "No"
        }
      ],
      "amenities": [
        "Attached garages on most homes",
        "Walking paths",
        "Near El Corazon Senior Center",
        "Close to shopping and medical in Oceanside"
      ],
      "sellerNotes": [
        {
          "h": "Price by size and bedroom count",
          "p": "A two-bedroom at 830 square feet and a three-bedroom with a den are different homes to a buyer. Comparable sales should match square footage, bedrooms and condition first."
        },
        {
          "h": "Value buyers compare carefully",
          "p": "Peacock Hills attracts buyers looking for value. Homes that are clean, well-maintained and priced right sell; homes that need work sell too, but only when the price reflects it."
        },
        {
          "h": "Inspect the older systems first",
          "p": "At 45-plus years old, roofs, plumbing, electrical panels, water heaters and windows get the most buyer attention. A pre-listing inspection avoids surprises in escrow."
        },
        {
          "h": "Order HOA documents early",
          "p": "Buyers will review the association's rules, budget and reserves. Ordering the resale package up front keeps escrow on schedule."
        },
        {
          "h": "Selling for a parent or a trust",
          "p": "Many Peacock Hills sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, access and updates when family lives out of the area."
        }
      ],
      "faq": [
        {
          "q": "What is my Peacock Hills home worth?",
          "a": "It depends on your size, bedroom count, garage and condition. Send your address and Noah will reply with recent Peacock Hills sales that match your home and a price range."
        },
        {
          "q": "Do I need to update my home before selling?",
          "a": "Not necessarily. Paint, flooring and a deep clean often pay off; larger projects rarely do. A walkthrough helps decide what is worth it."
        },
        {
          "q": "How do buyers finance Peacock Hills homes?",
          "a": "Many buyers pay cash from the sale of a larger home; others use conventional or FHA financing. Noah screens offers for financing strength before you sign."
        },
        {
          "q": "Can you sell my Peacock Hills home for 1%?",
          "a": "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move."
        }
      ]
    }
  },
  {
    "name": "Rancho Carlsbad",
    "city": "Carlsbad",
    "area": "North County",
    "blurb": "Gated community of about 500 manufactured homes on owned land, on 106 acres.",
    "slug": "rancho-carlsbad",
    "page": {
      "seoTitle": "Selling a Home in Rancho Carlsbad (55+ Manufactured Homes)",
      "seoDescription": "Selling a manufactured home in Rancho Carlsbad's gated 55+ community? How owned-land homes are priced, what buyers check, HOA documents, and how the sale works.",
      "intro": "Rancho Carlsbad is a gated 55+ community of about 500 manufactured homes on 106 acres in inland Carlsbad. Because homeowners own the land under their homes rather than paying space rent, these homes are priced and financed differently from typical mobile home parks, and the sale needs an agent who knows the difference.",
      "facts": [
        {
          "label": "Location",
          "value": "Carlsbad, North San Diego County"
        },
        {
          "label": "Homes",
          "value": "About 500"
        },
        {
          "label": "Built",
          "value": "1972 to present"
        },
        {
          "label": "Home types",
          "value": "Manufactured homes on owned land"
        },
        {
          "label": "Setting",
          "value": "About 106 acres"
        },
        {
          "label": "Age-restricted",
          "value": "Yes, 55+"
        },
        {
          "label": "Gated",
          "value": "Yes"
        }
      ],
      "amenities": [
        "Gated entry",
        "About 106 acres of grounds",
        "Golf course nearby",
        "Carlsbad location, close to the coast and shopping"
      ],
      "sellerNotes": [
        {
          "h": "Owned land changes the price",
          "p": "Homes where you own the lot typically sell for more than comparable homes in space-rent parks, and buyers can often use more financing options. Comparable sales should come from Rancho Carlsbad and other owned-land communities, not rental parks."
        },
        {
          "h": "Home age and upgrades matter",
          "p": "Homes here range from original 1970s models to newer replacements. Year of the home, size, roof, siding, windows and interior updates drive the price more than almost anything else."
        },
        {
          "h": "Have your paperwork ready",
          "p": "Manufactured homes on owned land may be recorded as real property or titled through the state, depending on how they were set up. Confirming this early with escrow avoids delays."
        },
        {
          "h": "Order HOA documents early",
          "p": "Buyers review the association's rules, budget and reserves. Ordering the resale package up front keeps escrow on schedule."
        },
        {
          "h": "Selling for a parent or a trust",
          "p": "Many Rancho Carlsbad sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, access and updates when family lives out of the area."
        }
      ],
      "faq": [
        {
          "q": "What is my Rancho Carlsbad home worth?",
          "a": "It depends on the age and size of your home, its condition and your lot. Send your address and Noah will reply with recent Rancho Carlsbad sales and a price range."
        },
        {
          "q": "Is selling a manufactured home different from a regular house?",
          "a": "Somewhat. The paperwork, inspections and financing can differ, especially for how the home is titled. Noah coordinates with escrow so those steps are handled up front."
        },
        {
          "q": "Can buyers get a mortgage on a Rancho Carlsbad home?",
          "a": "Often, yes, because the land is owned. Financing depends on the home and how it is recorded, so Noah screens buyer financing before you accept an offer."
        },
        {
          "q": "Can you sell my Rancho Carlsbad home for 1%?",
          "a": "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move."
        }
      ]
    }
  },
  {
    "name": "Lakeshore Gardens",
    "city": "Carlsbad",
    "area": "North County",
    "blurb": "Gated coastal community of about 380 manufactured homes west of I-5, near South Carlsbad State Beach.",
    "slug": "lakeshore-gardens-carlsbad",
    "page": {
      "seoTitle": "Selling a Home in Lakeshore Gardens, Carlsbad (55+)",
      "seoDescription": "Selling a manufactured home in Lakeshore Gardens, Carlsbad's gated 55+ coastal community? How space rent affects price, park approval, title transfer, and what buyers look for.",
      "intro": "Lakeshore Gardens is a gated 55+ manufactured-home community in Carlsbad, west of I-5 and close to South Carlsbad State Beach. Residents own their homes and rent the space underneath, so the monthly space rent, the home's age and condition, and the coastal location all shape what a buyer will pay.",
      "facts": [
        {
          "label": "Location",
          "value": "Carlsbad, west of I-5"
        },
        {
          "label": "Homes",
          "value": "About 380 spaces"
        },
        {
          "label": "Opened",
          "value": "1971"
        },
        {
          "label": "Home types",
          "value": "Manufactured homes"
        },
        {
          "label": "Land",
          "value": "Space rent (home owned, land leased)"
        },
        {
          "label": "Age-restricted",
          "value": "Yes, 55+"
        },
        {
          "label": "Gated",
          "value": "Yes"
        }
      ],
      "amenities": [
        "Clubhouse, library and billiard room",
        "Pool, spa and sauna",
        "Fitness center",
        "Near South Carlsbad State Beach"
      ],
      "sellerNotes": [
        {
          "h": "Space rent is part of the price",
          "p": "Buyers weigh the purchase price and the monthly space rent together. Knowing the current rent and what a new buyer's rent will be is essential to pricing your home correctly."
        },
        {
          "h": "Plan for park approval",
          "p": "Buyers typically need to be approved by park management before closing. Getting the application requirements early and screening buyers for them keeps the sale from falling apart late."
        },
        {
          "h": "Title transfers through the state",
          "p": "Most manufactured homes in parks are titled through California's Department of Housing and Community Development (HCD), not by a grant deed. Escrow handles the transfer; making sure the title is current avoids delays."
        },
        {
          "h": "Home age and condition drive value",
          "p": "Newer homes and well-updated older homes sell at a clear premium. Roof, siding, windows, skirting and the interior are what buyers compare most."
        },
        {
          "h": "Selling for a parent or a trust",
          "p": "Many Lakeshore Gardens sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, access and updates when family lives out of the area."
        }
      ],
      "faq": [
        {
          "q": "What is my Lakeshore Gardens home worth?",
          "a": "It depends on the age, size and condition of your home and on current space rent. Send your address and Noah will reply with recent Lakeshore Gardens sales and a price range."
        },
        {
          "q": "Does the buyer need park approval?",
          "a": "Usually, yes. Park management typically reviews and approves new residents before closing. Noah helps screen buyers so approval goes smoothly."
        },
        {
          "q": "Can I sell my home if the title isn't in my name?",
          "a": "Often, yes, but the title needs to be updated first, for example after a death or a trust transfer. Noah can coordinate that with escrow and your attorney."
        },
        {
          "q": "Can you sell my Lakeshore Gardens home for 1%?",
          "a": "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move."
        }
      ]
    }
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
    "name": "Seven Oaks",
    "city": "Rancho Bernardo",
    "area": "Inland North County",
    "blurb": "About 1,700 homes built 1964–1974, mostly single-family, in Rancho Bernardo.",
    "slug": "seven-oaks-rancho-bernardo",
    "page": {
      "seoTitle": "Selling a Home in Seven Oaks, Rancho Bernardo (55+)",
      "seoDescription": "Selling a home in Seven Oaks, Rancho Bernardo's established 55+ community? How single-family and Haciendas homes are priced, what buyers inspect, and how fees differ.",
      "intro": "Seven Oaks is an established 55+ community in Rancho Bernardo with about 1,700 homes built from 1964 to 1974: roughly 1,300 single-family homes and 400 attached homes in the Haciendas. Single-level living, a full community center and a golf course across the street keep it in steady demand.",
      "facts": [
        {
          "label": "Location",
          "value": "Rancho Bernardo, San Diego"
        },
        {
          "label": "Homes",
          "value": "About 1,700"
        },
        {
          "label": "Built",
          "value": "1964–1974"
        },
        {
          "label": "Home types",
          "value": "About 1,300 single-family, 400 attached (Haciendas)"
        },
        {
          "label": "Sizes",
          "value": "About 900 to 2,000+ sq ft"
        },
        {
          "label": "Age-restricted",
          "value": "Yes, 55+"
        },
        {
          "label": "Gated",
          "value": "No"
        }
      ],
      "amenities": [
        "Community center with fitness, auditorium and library",
        "Pool, spa, tennis, shuffleboard and putting green",
        "Hobby, craft and woodworking studios",
        "Golf course across the street"
      ],
      "sellerNotes": [
        {
          "h": "Single-family and Haciendas are different markets",
          "p": "A Haciendas condo and a single-family home with a two-car garage attract different buyers at different prices. Comparable sales must match home type first, then size and condition."
        },
        {
          "h": "Know your fees",
          "p": "Attached Haciendas homes pay a monthly HOA, while most single-family homes pay a much smaller annual fee for amenity access. Buyers ask about this early, so it should be clear in the listing."
        },
        {
          "h": "Inspect the older systems first",
          "p": "At 50-plus years old, roofs, sewer lines, electrical panels, plumbing and windows get close attention. A pre-listing inspection and sewer scope help avoid renegotiation."
        },
        {
          "h": "Updates separate the top sales",
          "p": "Original-condition homes sell to buyers who plan to remodel; updated homes sell to buyers who want to move right in. Pricing has to be honest about which one yours is."
        },
        {
          "h": "Selling for a parent or a trust",
          "p": "Many Seven Oaks sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, access and updates when family lives out of the area."
        }
      ],
      "faq": [
        {
          "q": "What is my Seven Oaks home worth?",
          "a": "It depends on whether it is single-family or Haciendas, its size, garage and condition. Send your address and Noah will reply with recent Seven Oaks sales and a price range."
        },
        {
          "q": "What's the difference between Seven Oaks and Oaks North?",
          "a": "They are separate 55+ communities in Rancho Bernardo, less than two miles apart. Seven Oaks is older and mostly single-family; Oaks North has eight neighborhoods with more condos and attached homes."
        },
        {
          "q": "Should I remodel before selling?",
          "a": "Usually not a full remodel. Paint, flooring, lighting and fixing obvious wear often pay off. A walkthrough helps decide what is worth doing."
        },
        {
          "q": "Can you sell my Seven Oaks home for 1%?",
          "a": "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move."
        }
      ]
    }
  },
  {
    "name": "Auberge at Del Sur",
    "city": "San Diego",
    "area": "Inland North County",
    "blurb": "Gated, newer community of about 200 homes built 2016–2017 in Del Sur.",
    "slug": "auberge-at-del-sur",
    "page": {
      "seoTitle": "Selling a Home in Auberge at Del Sur, San Diego (55+)",
      "seoDescription": "Selling a home in Auberge at Del Sur, a gated 55+ community in San Diego? How Cottages, Villas and Summer House homes are priced, special taxes, and what buyers expect in newer homes.",
      "intro": "Auberge at Del Sur is a gated 55+ community of about 200 homes built in 2016 and 2017 within the Del Sur master plan. It has three collections, from attached Cottages to larger single-family Summer House homes, and buyers expect newer-home condition, so presentation and pricing by collection matter.",
      "facts": [
        {
          "label": "Location",
          "value": "Del Sur, San Diego (near I-15)"
        },
        {
          "label": "Homes",
          "value": "About 200"
        },
        {
          "label": "Built",
          "value": "2016–2017"
        },
        {
          "label": "Collections",
          "value": "Cottages (attached), Villas, Summer House"
        },
        {
          "label": "Sizes",
          "value": "About 1,280 to 2,900 sq ft"
        },
        {
          "label": "Age-restricted",
          "value": "Yes, 55+"
        },
        {
          "label": "Gated",
          "value": "Yes"
        }
      ],
      "amenities": [
        "The Club: fitness center, pool, spa and patio",
        "Pickleball and bocce courts",
        "Dog park and BBQ area",
        "Del Sur parks, pools and about 12 miles of trails"
      ],
      "sellerNotes": [
        {
          "h": "Price by collection",
          "p": "Cottages, Villas and Summer House homes are different products. Comparable sales should match your collection, floor plan, lot and upgrades, since buyers in newer communities compare builder options closely."
        },
        {
          "h": "Show the upgrades",
          "p": "Buyers of newer homes notice finishes, solar, window coverings, landscaping and builder upgrades. A clear list of what you added helps justify the price."
        },
        {
          "h": "Disclose special taxes up front",
          "p": "Newer master-planned areas often carry Mello-Roos or other special assessments on top of the HOA. Buyers will ask about the total monthly and annual cost, so it belongs in the listing from day one."
        },
        {
          "h": "Order HOA documents early",
          "p": "Buyers review both the Auberge and Del Sur association documents. Ordering the resale packages when you decide to sell keeps escrow on schedule."
        },
        {
          "h": "Selling for a parent or a trust",
          "p": "Many Auberge sales are handled by adult children or trustees. Noah can manage the clean-out, vendors, access and updates when family lives out of the area."
        }
      ],
      "faq": [
        {
          "q": "What is my Auberge home worth?",
          "a": "It depends on your collection, floor plan, lot and upgrades. Send your address and Noah will reply with recent Auberge sales that match your home and a price range."
        },
        {
          "q": "Do buyers ask about Mello-Roos?",
          "a": "Yes. Many newer San Diego communities carry special taxes. Noah gathers the details from your tax bill so buyers see the full cost up front."
        },
        {
          "q": "Should I make changes before selling a newer home?",
          "a": "Usually just touch-ups: paint, a deep clean and tidy landscaping. Newer homes sell on condition and presentation."
        },
        {
          "q": "Can you sell my Auberge at Del Sur home for 1%?",
          "a": "Yes. The 1% Market-Ready plan is a full MLS listing where you handle the prep. Managed plans are available if you want Noah to run the prep, vendors and move."
        }
      ]
    }
  },
];

export const communityPages = communities.filter(
  (c): c is Community & { slug: string; page: CommunityPage } => Boolean(c.slug && c.page),
);

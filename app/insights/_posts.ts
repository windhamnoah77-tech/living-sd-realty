export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string; // YYYY-MM-DD
  updated?: string; // YYYY-MM-DD
  category: "Trust & Estate" | "Investors" | "Market Notes";
  tags: string[];
  readingTime: string;
  excerpt: string;
  sections: Array<{
    h: string;
    p?: string;
    bullets?: string[];
  }>;
  faq?: Array<{ q: string; a: string }>;
};

export const posts: Post[] = [
  {
    slug: "trust-sale-checklist-trustees-executors-san-diego",
    title: "Trust Sale Checklist for Trustees and Executors",
    seoTitle:
      "Trust Sale Checklist (San Diego) | Trustees & Executors | Living San Diego Realty",
    seoDescription:
      "A fiduciary-grade trust sale checklist for trustees and executors in San Diego: authority, occupancy, valuation inputs, disclosures, offer strategy, and clean close execution.",
    date: "2025-12-16",
    category: "Trust & Estate",
    tags: ["trust sale", "trustee", "executor", "san diego", "estate property"],
    readingTime: "7 min",
    excerpt:
      "If you’re signing as trustee or executor, your job is risk management. Here’s the clean checklist that prevents pricing mistakes, disclosure chaos, and deal-killing friction.",
    sections: [
      {
        h: "Start with authority and the decision chain",
        p:
          "Before price, confirm who can sign, who must be notified, and what the timeline realistically allows. The fastest way to create a mess is to skip this step and argue later.",
        bullets: [
          "Confirm trustee/executor authority and who approves decisions",
          "Clarify beneficiary communication expectations (who gets updates, how often)",
          "Occupancy status: vacant / occupied / tenants / access limits",
        ],
      },
      {
        h: "Build a defensible valuation, not a vibe",
        p:
          "Trust and estate pricing should be evidence-based: comps, absorption, condition, and risk framing. Your goal is a rationale that survives questions later.",
        bullets: [
          "Comp set + adjustments (condition, location, functional issues)",
          "Absorption (market speed) and buyer pool reality",
          "As-is vs prep vs light rehab: what changes net outcomes",
        ],
      },
      {
        h: "Disclosures and file discipline",
        p:
          "Most trustees don’t lose money on list price — they lose it on disorganization. Clean disclosures reduce buyer fear and shorten renegotiation attempts.",
        bullets: [
          "Collect what you know, state what you don’t, and document it cleanly",
          "Title/HOA/permit friction surfaced early (not week 3)",
          "Timeline discipline: contingencies, inspections, and response windows",
        ],
      },
      {
        h: "Offer strategy that protects the estate",
        p:
          "Strong offers aren’t just high price. They’re certainty, timeline, and terms that reduce blow-up risk.",
        bullets: [
          "Verify POF/financing strength before you emotionally “pick” a buyer",
          "Tight timelines and clear contingency structure",
          "Negotiation posture that prevents endless back-and-forth",
        ],
      },
      {
        h: "Close like a professional",
        p:
          "The cleanest closes feel boring. That’s the point: fewer surprises, fewer delays, fewer last-minute concessions.",
        bullets: [
          "Front-load the friction: title, HOA, insurance, occupancy issues",
          "Keep a clean communication cadence (trustee + stakeholders)",
          "Document decisions so the file tells the story without drama",
        ],
      },
    ],
    faq: [
      {
        q: "Do trustees and executors need a different listing strategy?",
        a:
          "Yes. The strategy must emphasize defensible pricing, disciplined disclosures, and clean execution—not hype. The work should stand up to fiduciary scrutiny.",
      },
      {
        q: "Can I sell as-is?",
        a:
          "Often yes, but “as-is” still requires disciplined disclosures, clean presentation, and risk framing. Specific legal questions should be handled with counsel.",
      },
    ],
  },

  {
    slug: "how-to-price-a-trust-property-defensible-valuation",
    title: "How to Price a Trust Property (Defensible Valuation, Not Guesswork)",
    seoTitle:
      "How to Price a Trust Property | Defensible Valuation for Trustees & Executors",
    seoDescription:
      "A trustee/executor-friendly pricing framework: comps, absorption, condition, risk framing, and offer strategy that protects the estate and reduces deal risk.",
    date: "2025-12-16",
    category: "Trust & Estate",
    tags: ["pricing", "trust property", "trustee", "executor", "valuation"],
    readingTime: "6 min",
    excerpt:
      "Pricing is not a number—it’s an argument. Here’s how to build a valuation story that a beneficiary, buyer, or attorney can’t easily shred.",
    sections: [
      {
        h: "Pricing is an argument",
        p:
          "In a trust/estate sale, the question isn’t “what do we hope for?” It’s “what can we justify?” Your comp set and adjustments are the backbone.",
        bullets: [
          "Use a tight comp radius and match the buyer profile",
          "Adjust for condition honestly (buyers punish uncertainty)",
          "Separate cosmetic issues from functional obsolescence",
        ],
      },
      {
        h: "Absorption matters more than ego",
        p:
          "A price that ignores market speed becomes a price reduction later—usually with worse leverage.",
        bullets: [
          "How many true alternatives does the buyer have right now?",
          "What’s the average time-to-contract in this micro-market?",
          "How pricing affects offer volume and term strength",
        ],
      },
      {
        h: "Risk framing: as-is vs prep vs light rehab",
        p:
          "Prep isn’t always worth it. But if you do it, it must be controlled, ROI-driven, and timeline-safe.",
        bullets: [
          "As-is: maximum speed, buyer discount for uncertainty",
          "Prep: reduces buyer fear, can increase buyer pool",
          "Light rehab: only when upside outweighs delay + risk",
        ],
      },
    ],
    faq: [
      {
        q: "Should trustees price high to ‘test the market’?",
        a:
          "Sometimes. But testing without a disciplined timeline and adjustment plan usually wastes time and invites weaker leverage later.",
      },
    ],
  },

  {
    slug: "occupied-inherited-property-tenants-options",
    title: "Occupied Inherited Property: Options When There Are Tenants",
    seoTitle:
      "Inherited Property With Tenants | Trustee/Executor Options (San Diego)",
    seoDescription:
      "A practical framework for trustees/executors dealing with inherited property that’s tenant-occupied: timelines, risk, and decision paths—without retail chaos.",
    date: "2025-12-16",
    category: "Trust & Estate",
    tags: ["tenants", "occupied", "inherited property", "trustee", "executor"],
    readingTime: "7 min",
    excerpt:
      "Tenants change everything: timeline, access, buyer pool, and leverage. Here are the decision paths that keep you protected and moving.",
    sections: [
      {
        h: "First: clarify goals and constraints",
        bullets: [
          "Is the priority speed, maximum price, or risk control?",
          "What access can be negotiated for inspections/showings?",
          "Are there heirs living in the home or third-party tenants?",
        ],
      },
      {
        h: "Three common paths",
        bullets: [
          "Sell with tenants in place (smaller buyer pool, cleaner speed)",
          "Negotiate vacancy first (more buyer demand, longer timeline)",
          "Stabilize then sell (only when numbers justify time and risk)",
        ],
      },
      {
        h: "Don’t wing landlord-tenant issues",
        p:
          "Anything involving tenancy has legal implications. The right move is coordinated execution with appropriate counsel, not DIY improvisation.",
      },
    ],
  },

  {
    slug: "off-market-real-estate-san-diego-when-it-makes-sense",
    title: "Off-Market Real Estate in San Diego: What It Is and When It Makes Sense",
    seoTitle:
      "Off-Market Real Estate (San Diego) | When It Makes Sense for Sellers & Investors",
    seoDescription:
      "A no-hype explanation of off-market real estate in San Diego: when it benefits trustees/executors, when it benefits investors, and when the MLS is smarter.",
    date: "2025-12-16",
    category: "Investors",
    tags: ["off-market", "san diego", "investors", "trust sale", "acquisitions"],
    readingTime: "6 min",
    excerpt:
      "Off-market is not a magic trick. It’s a tool. Used well, it saves time and reduces noise. Used poorly, it leaves money on the table.",
    sections: [
      {
        h: "What off-market actually means",
        bullets: [
          "Not broadly advertised to the public",
          "Usually shared to a small, qualified buyer pool",
          "Often used for privacy, speed, or complexity control",
        ],
      },
      {
        h: "When it helps trustees/executors",
        bullets: [
          "Privacy concerns (family dynamics, sensitive situations)",
          "Complexity where fewer showings reduces chaos",
          "Need for timeline certainty with qualified buyers",
        ],
      },
      {
        h: "When the MLS is the smarter move",
        bullets: [
          "When broad exposure will increase buyer competition",
          "When the asset is retail-friendly and easy to show",
          "When the goal is maximizing price through demand",
        ],
      },
    ],
  },

  {
    slug: "investor-underwriting-conservative-assumptions",
    title: "Investor Underwriting: Conservative Assumptions That Prevent Bad Deals",
    seoTitle:
      "Investor Underwriting | Conservative Assumptions for Real Estate Deals",
    seoDescription:
      "How serious investors underwrite: conservative rent/resale comps, rehab ranges, downside framing, and term structure to reduce deal risk.",
    date: "2025-12-16",
    category: "Investors",
    tags: ["underwriting", "investors", "cap rate", "rehab", "deal risk"],
    readingTime: "7 min",
    excerpt:
      "Most bad deals look great on a spreadsheet that assumes perfection. Here’s the conservative framework that keeps you from buying problems.",
    sections: [
      {
        h: "Use ranges, not single numbers",
        bullets: [
          "Rehab: low / base / high range",
          "Rent: conservative comp set and vacancy reality",
          "Exit: time and price assumptions that survive market shifts",
        ],
      },
      {
        h: "Downside framing is the real skill",
        p:
          "The question isn’t ‘how do we win big?’ It’s ‘what breaks the deal?’ If you can’t answer that, you’re gambling.",
        bullets: [
          "Title/disclosure risk",
          "Access/occupancy risk",
          "Financing/timing risk",
        ],
      },
      {
        h: "Clean terms reduce friction and save money",
        bullets: [
          "Clear contingency structure",
          "Timeline discipline",
          "Proof of funds / financing posture upfront",
        ],
      },
    ],
  },
];

export const topics = [
  { key: "all", label: "All" },
  { key: "trust-estate", label: "Trust & Estate" },
  { key: "investors", label: "Investors" },
  { key: "market-notes", label: "Market Notes" },
] as const;

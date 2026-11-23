import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const title = "Sell Your San Diego Home for a 1% Listing Fee";
const description = "Noah Windham offers a 1% market-ready listing option in San Diego County, with additional services for trustees, estates and 55+ homeowners.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { title, description },
};

const professional = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://livingsandiegorealty.com/#noah-windham",
  name: "Noah Windham",
  jobTitle: "Real estate agent",
  url: "https://livingsandiegorealty.com/",
  telephone: "+1-707-305-6499",
  email: "noah@blacklabelrealty.com",
  image: "https://livingsandiegorealty.com/images/placeholder-3.jpg",
  worksFor: {
    "@type": "RealEstateAgent",
    name: "Black Label Realty",
    address: {
      "@type": "PostalAddress", streetAddress: "2535 Camino del Rio S #325",
      addressLocality: "San Diego", addressRegion: "CA", postalCode: "92108", addressCountry: "US",
    },
  },
};

export default function HomePage() {
  return (
    <main className="realty-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professional) }} />
      <section className="realty-intro">
        <div className="realty-copy">
          <p className="realty-location">San Diego County</p>
          <h1>Sell your home.<br /><em>1% listing fee.</em></h1>
          <p className="realty-lead">For market-ready homes in San Diego County. I handle pricing, photography, MLS marketing, negotiation and escrow. You handle preparation, vendors and access.</p>
          <div className="realty-actions">
            <Link className="realty-primary" href="/listing-options#estimate">Get my selling estimate <span aria-hidden="true">↗</span></Link>
            <Link className="realty-link" href="/listing-options">See what 1% includes</Link>
          </div>
          <p className="realty-credit">Noah Windham · Black Label Realty<br />CA DRE #02227646 · Broker DRE #02254507</p>
        </div>
        <div className="realty-visual">
          <Image src="/images/placeholder-1.jpg" alt="White coastal home framed by palm trees" fill priority sizes="(max-width: 760px) 95vw, (max-width: 1250px) 49vw, 600px" />
        </div>
      </section>

      <section className="realty-example" aria-label="Example listing fee">
        <div><span>Example sale price</span><strong>$1,000,000</strong></div>
        <div><span>1% listing-side fee</span><strong>$10,000</strong></div>
        <div className="realty-example-note"><p>Fees are negotiable. Buyer-agent compensation and closing costs are separate.</p>
          <Link href="/listing-options#calculator">Calculate your proceeds <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="realty-specialties" aria-label="Specialized seller services">
        <div className="realty-interior"><Image src="/images/placeholder-2.jpg" alt="Light-filled living room with a stone fireplace" fill sizes="(max-width: 760px) 95vw, 520px" /></div>
        <div className="realty-specialty-copy">
        <article><h2>Trust &amp; estate sales</h2>
          <p>If you’re handling a family property, I can prepare a valuation, coordinate an estate sale or cleanout, and organize the sale around your family and advisers.</p>
          <Link href="/trust-estate">Selling as a trustee or executor <span aria-hidden="true">→</span></Link>
        </article>
        <article><h2>55+ community sales</h2>
          <p>Find out what homes like yours have sold for, which improvements are worth doing, and how to time your sale around your next move anywhere in San Diego County.</p>
          <Link href="/55-plus">Selling in a 55+ community <span aria-hidden="true">→</span></Link>
        </article>
        </div>
      </section>

      <section className="realty-reading">
        <div><h2>Before you list</h2><p>Local sales and practical numbers for your next decision.</p></div>
        <ul>
          <li><Link href="/insights/san-diego-million-dollar-sale-proceeds">What would you keep on a $1 million San Diego sale? <span aria-hidden="true">↗</span></Link></li>
          <li><Link href="/insights/oaks-north-villas-comparable-sales">What two Oaks North Villas sales tell a seller <span aria-hidden="true">↗</span></Link></li>
          <li><Link href="/insights/ocean-hills-country-club-sale-timing">Planning an Ocean Hills Country Club sale <span aria-hidden="true">↗</span></Link></li>
        </ul>
      </section>
      <section className="realty-adviser">
        <Image src="/images/placeholder-3.jpg" alt="Noah Windham" width={144} height={180} sizes="144px" />
        <div><h2>Noah Windham</h2><p>Black Label Realty · San Diego County</p>
          <p>Tell me about the property and what you want the sale to accomplish. I’ll help you compare the numbers and decide how much of the work you want to hand off.</p>
          <div className="realty-actions"><Link className="realty-primary" href="/contact">Talk with Noah</Link><a className="realty-link" href="tel:+17073056499">(707) 305-6499</a></div>
        </div>
      </section>
    </main>
  );
}

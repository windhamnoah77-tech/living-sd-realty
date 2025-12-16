import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
  { href: "/trust-estate", label: "Trust & Estate" },
  { href: "/investors", label: "Investors" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-serif text-lg">Living San Diego Realty</div>
          <div className="text-neutral-600 mt-2">
            Noah Windham · CA DRE #02227646
            <div>Brokered by R B Haley Inc · CA DRE #01843189</div>
          </div>
          <div className="text-neutral-600 mt-2">
            San Diego · Bay Area · Los Angeles
          </div>
        </div>

        <div>
          <div className="font-medium">Site</div>
          <ul className="mt-2 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link className="hover:underline" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-medium">Legal</div>
          <ul className="mt-2 space-y-1 text-neutral-600">
            <li>Equal Housing Opportunity.</li>
            <li>Information deemed reliable but not guaranteed.</li>
            <li>© {new Date().getFullYear()} Noah Windham. All rights reserved.</li>
          </ul>
        </div>

        <div>
          <div className="font-medium">Contact</div>
          <div className="mt-2 space-y-1 text-neutral-600">
            <div>
              <a className="underline" href="mailto:Noah@rbhaley.com">
                Noah@rbhaley.com
              </a>
            </div>
            <div>
              <a className="underline" href="tel:+17073056499">
                (707) 305-6499
              </a>
            </div>
            <div>Based in San Diego · Work across CA by arrangement.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

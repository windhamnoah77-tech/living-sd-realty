"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/process", label: "Process" },
  { href: "/trust-estate", label: "Trust & Estate" },
  { href: "/investors", label: "Investors" },
  { href: "/insights", label: "Insights" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
      <div className="container">
        {/* TOP BAR */}
        <div className="flex items-center justify-between py-4">
          {/* LEFT: Brand */}
          <div className="min-w-0">
            <Link
              href="/"
              className="brand-serif block text-lg tracking-wide leading-none whitespace-nowrap"
            >
              Living San Diego Realty
            </Link>
            <span className="hidden sm:block mt-1 text-xs uppercase tracking-[0.15em] text-neutral-500 whitespace-nowrap">
              Noah Windham
            </span>
          </div>

          {/* CENTER: Desktop Links (ONLY on lg+ so it never wraps into a mess) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-10">
            <div className="flex items-center gap-8 text-sm whitespace-nowrap">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`transition ${
                      active
                        ? "text-black"
                        : "text-neutral-700 hover:text-black"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* RIGHT: CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex rounded-2xl border border-black bg-black px-5 py-3 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Work with Noah
            </Link>

            {/* Hamburger shows on <lg */}
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-full border border-neutral-300"
              onClick={() => setOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET DROPDOWN (used for everything <lg) */}
      {open && (
        <div className="lg:hidden border-t border-neutral-200/60 bg-white">
          <div className="container py-3 grid gap-2 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`py-2 border-b last:border-0 transition ${
                  pathname === l.href
                    ? "text-black"
                    : "text-neutral-800 hover:text-black"
                }`}
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 inline-flex justify-center rounded-2xl border border-black bg-black px-5 py-3 text-sm text-white"
            >
              Work with Noah
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
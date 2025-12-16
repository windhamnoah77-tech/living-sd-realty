"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        {/* LEFT: Brand + Name (same group = sits together) */}
        <div className="flex items-baseline gap-1 whitespace-nowrap">
          <Link href="/" className="brand-serif text-lg tracking-wide">
            Living San Diego Realty
          </Link>
          <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
            Noah Windham
          </span>
        </div>

        {/* CENTER: Links */}
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition ${
                  active ? "text-black" : "text-neutral-700 hover:text-black"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: CTA + Mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-2xl border border-black bg-black px-5 py-3 text-sm text-white hover:bg-white hover:text-black transition"
          >
            Work with Noah
          </Link>

          <button
            aria-label="Menu"
            className="md:hidden p-2 rounded-full border border-neutral-300"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden border-t border-neutral-200/60 bg-white">
          <div className="container py-3 grid gap-2 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b last:border-0 text-neutral-800"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
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

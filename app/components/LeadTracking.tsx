"use client";

import { useEffect } from "react";

type Gtag = (...args: unknown[]) => void;

/** Send a GA4 event if gtag has loaded. Safe to call anywhere on the client. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}

/**
 * Tracks phone and email clicks site-wide so GA4 can count them as leads.
 * Mark `click_to_call`, `click_to_email` and `generate_lead` as key events in GA4.
 */
export default function LeadTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a") as HTMLAnchorElement | null;
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackEvent("click_to_call", { page_path: window.location.pathname });
      } else if (href.startsWith("mailto:")) {
        trackEvent("click_to_email", { page_path: window.location.pathname });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

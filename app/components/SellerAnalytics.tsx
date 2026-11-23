"use client";

import { useEffect } from "react";

export function trackSellerEvent(event: string, source: string) {
  const analytics = window as Window & { gtag?: (command: string, event: string, fields: Record<string, string>) => void };
  analytics.gtag?.("event", event, { inquiry_source: source });
}

export default function SellerAnalytics() {
  useEffect(() => {
    function recordPhoneClick(event: MouseEvent) {
      if (event.target instanceof Element && event.target.closest('a[href^="tel:"]')) {
        trackSellerEvent("click_to_call", window.location.pathname);
      }
    }
    document.addEventListener("click", recordPhoneClick);
    return () => document.removeEventListener("click", recordPhoneClick);
  }, []);
  return null;
}

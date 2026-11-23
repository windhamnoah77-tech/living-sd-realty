"use client";

import { useState, type FormEvent } from "react";

export function trackSellerEvent(event: string, source: string) {
  const analytics = window as Window & { gtag?: (command: string, event: string, fields: Record<string, string>) => void };
  analytics.gtag?.("event", event, { inquiry_source: source });
}

export default function SellerRequest({ source }: { source: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"), address: data.get("property"),
          role: "Seller estimate", message: "Requested from " + source + ".\n" + (data.get("note") || "")
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error("Delivery failed");
      setStatus("sent");
      trackSellerEvent("generate_lead", source);
    } catch {
      setStatus("error");
    }
  }

  return <section id="estimate" className="seller-request">
    <h2>Get my personal sale estimate</h2>
    <p>I’ll review nearby sales and reply by email. A community and floor plan are enough to start.</p>
    {status === "sent" ? <p role="status"><strong>Request received.</strong> Look for a reply from Noah at Black Label Realty.</p> :
      <form onSubmit={submit}>
        <label>Address or community and floor plan<input name="property" required maxLength={250} autoComplete="off" /></label>
        <label>Email for your estimate<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
        <label>Anything I should factor in? (optional)<textarea name="note" rows={2} maxLength={1500} /></label>
        <button className="seller-button" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Request my estimate"}</button>
        {status === "error" && <p role="alert">Your request couldn’t be sent. Please try again or call Noah below.</p>}
      </form>}
    <a href="tel:+17073056499" onClick={() => trackSellerEvent("click_to_call", source)}>Call Noah · (707) 305-6499</a>
  </section>;
}

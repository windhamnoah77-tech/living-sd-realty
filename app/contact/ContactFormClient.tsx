"use client";

import { useState } from "react";

export default function ContactFormClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  return (
    <form
      name="contact"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
          const res = await fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData as any).toString(),
          });

          if (!res.ok) throw new Error(`Bad response: ${res.status}`);

          form.reset();
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }}
      className="mt-6 space-y-3 text-sm"
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid md:grid-cols-2 gap-3">
        <input
          required
          name="name"
          placeholder="Full name"
          className="border rounded-xl px-3 py-2 w-full bg-white"
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          className="border rounded-xl px-3 py-2 w-full bg-white"
        />
      </div>

      <input
        name="phone"
        placeholder="Phone (optional)"
        className="border rounded-xl px-3 py-2 w-full bg-white"
      />

      <select
        name="lane"
        className="border rounded-xl px-3 py-2 w-full bg-white"
        defaultValue="Trustee / executor (trust or estate sale)"
      >
        <option>Trustee / executor (trust or estate sale)</option>
        <option>Family / heir (estate property decision)</option>
        <option>Investor (acquisition / disposition)</option>
        <option>Seller (non-trust listing)</option>
      </select>

      <input
        name="property"
        placeholder="Property address (or city/neighborhood if early stage)"
        className="border rounded-xl px-3 py-2 w-full bg-white"
      />

      <div className="grid md:grid-cols-2 gap-3">
        <select
          name="occupancy"
          className="border rounded-xl px-3 py-2 w-full bg-white"
          defaultValue="Unknown / TBD"
        >
          <option>Unknown / TBD</option>
          <option>Vacant</option>
          <option>Owner-occupied (family/heir)</option>
          <option>Tenant-occupied</option>
        </select>

        <select
          name="timeline"
          className="border rounded-xl px-3 py-2 w-full bg-white"
          defaultValue="0–30 days"
        >
          <option>0–30 days</option>
          <option>30–60 days</option>
          <option>60–90 days</option>
          <option>90+ days / planning</option>
        </select>
      </div>

      <textarea
        name="message"
        rows={5}
        placeholder="In 3–6 bullets: goals, constraints, and anything that could complicate the deal (title, repairs, hoarding, tenants, access, etc.). Investors: include buy box + budget + POF/financing plan."
        className="border rounded-xl px-3 py-2 w-full bg-white"
        required
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full px-5 py-3 rounded-2xl border border-black bg-black text-white hover:bg-white hover:text-black transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "success" && (
        <div className="mt-3 text-xs text-neutral-600">Sent. I’ll reply directly.</div>
      )}
      {status === "error" && (
        <div className="mt-3 text-xs text-red-600">
          Submit failed. Email me at Noah@rbhaley.com.
        </div>
      )}

      <div className="mt-3 text-xs text-neutral-500">
        You’ll get a direct reply from me (not an automated drip).
      </div>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Convert FormData -> plain object
      const payload = Object.fromEntries(formData.entries());

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (!res.ok) {
        console.error("Contact error:", json);
        alert(json?.error || "Something failed. Try again.");
        return;
      }

      form.reset();
      alert("Sent. I’ll reply directly.");
    } catch (err: any) {
      console.error(err);
      alert("Something failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page-section">
      <div className="container">
        <div className="card p-8 max-w-xl">
          <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Send details
          </div>
          <h1 className="mt-3 brand-serif text-3xl">I’ll reply directly.</h1>
          <p className="mt-2 text-neutral-600">
            Fill this out and I’ll respond with next steps and suggested times.
            Keep it brief—facts over stories.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                name="name"
                placeholder="Full name"
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
                required
              />
            </div>

            <input
              name="phone"
              placeholder="Phone (optional)"
              className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
            />

            <select
              name="role"
              className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
              defaultValue="Trustee / executor (trust or estate sale)"
            >
              <option>Trustee / executor (trust or estate sale)</option>
              <option>Investor</option>
              <option>Seller</option>
              <option>Buyer</option>
              <option>Other</option>
            </select>

            <input
              name="address"
              placeholder="Property address (or city/neighborhood if confidential)"
              className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
            />

            <div className="grid grid-cols-2 gap-3">
              <select
                name="priceRange"
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
                defaultValue="Unknown / TBF"
              >
                <option>Unknown / TBF</option>
                <option>$0–$750k</option>
                <option>$750k–$1.5M</option>
                <option>$1.5M–$3M</option>
                <option>$3M+</option>
              </select>

              <select
                name="timeline"
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
                defaultValue="0–30 days"
              >
                <option>0–30 days</option>
                <option>30–90 days</option>
                <option>3–6 months</option>
                <option>6+ months</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="In 3–6 bullets: goals, constraints, and anything that could complicate the deal (title, repairs, hoarding, tenants, access, etc.). Investors: include buy box + budget + POF/financing plan."
              className="w-full min-h-[140px] rounded-2xl border border-neutral-300 px-4 py-3"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl border border-black bg-black px-5 py-3 text-white hover:bg-white hover:text-black transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

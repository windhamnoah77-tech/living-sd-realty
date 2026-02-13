"use client";

import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setStatusMsg("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setStatusMsg(json?.error || "Something failed. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMsg(
        "Sent. You’ll get a direct reply from Noah with suggested next steps and times."
      );
      form.reset();
    } catch (err) {
      setStatus("error");
      setStatusMsg("Something failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Update these to your actual backup contacts
  const emailPrimary = "Noah@rbhaley.com";
  const phonePrimary = "(707) 305-6499";
  const phoneBackup = "(619) 997-0178"; // change this

  return (
    <main className="page-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: Reassurance + expectations */}
          <section className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </div>
            <h1 className="mt-3 brand-serif text-4xl leading-tight">
              Quick, clean, and confidential.
            </h1>
            <p className="mt-4 text-neutral-700 max-w-prose">
              If you’re a trustee/executor, you’re making a fiduciary decision.
              My job is to give you a defensible plan: pricing logic, timeline,
              and next steps—without the usual agent noise.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Response time
                </div>
                <div className="mt-2 font-medium text-neutral-900">
                  Typically same day
                </div>
                <div className="mt-1 text-neutral-600">
                  You’ll hear from Noah directly.
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  What to send
                </div>
                <div className="mt-2 text-neutral-700">
                  Address (or area), occupancy, condition, timeline, and any
                  constraints.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Privacy
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Keep it high level if you prefer. If you don’t want to share an
                exact address yet, just send the neighborhood + basics.
              </p>
            </div>

            {/* Backup contact block */}
            <div className="mt-6 rounded-2xl border border-neutral-200 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Prefer direct contact?
              </div>
              <div className="mt-3 space-y-2 text-sm text-neutral-700">
                <div>
                  Email:{" "}
                  <a className="underline" href={`mailto:${emailPrimary}`}>
                    {emailPrimary}
                  </a>
                </div>
                <div>
                  Call/Text:{" "}
                  <a className="underline" href={`tel:+17073056499`}>
                    {phonePrimary}
                  </a>
                </div>
                <div>
                  Backup:{" "}
                  <a className="underline" href={`tel:${phoneBackup}`}>
                    {phoneBackup}
                  </a>
                </div>
              </div>
              <div className="mt-3 text-xs text-neutral-500">
                If it’s urgent, call or text.
              </div>
            </div>
          </section>

          {/* RIGHT: Form */}
          <section className="card p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Send details
            </div>
            <h2 className="mt-3 brand-serif text-2xl">Tell me what matters.</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Bullet points are perfect. Facts over stories.
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
                placeholder="Property address (or area if confidential)"
                className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
              />

              <div className="grid grid-cols-2 gap-3">
                <select
                  name="priceRange"
                  className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
                  defaultValue="Unknown / TBF"
                >
                  <option>Property value</option>
                  <option>$0–$750k</option>
                  <option>$750k–$1.5M</option>
                  <option>$1.5M–$3M</option>
                  <option>$3M+</option>
                </select>

                <select
                  name="timeline"
                  className="w-full rounded-2xl border border-neutral-300 px-4 py-3"
                  defaultValue="Timeline"
                >
                  <option>0–30 days</option>
                  <option>30–90 days</option>
                  <option>3–6 months</option>
                  <option>6+ months</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="3–6 bullets: goals, constraints, complications (repairs, tenants, access, title/HOA, etc.). Investors: buy box + budget + POF/financing."
                className="w-full min-h-[150px] rounded-2xl border border-neutral-300 px-4 py-3"
                required
              />

              {status !== "idle" && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                      : "border-red-200 bg-red-50 text-red-900"
                  }`}
                >
                  {statusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl border border-black bg-black px-5 py-3 text-white hover:bg-white hover:text-black transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              <div className="text-xs text-neutral-500">
                You’ll get a direct reply from Noah. No automated drip.
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

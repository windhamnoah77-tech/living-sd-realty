"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { listingPlans } from "../lib/site";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function toNumber(v: string) {
  const n = Number(v.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

const inputClass = "w-full rounded-2xl border border-neutral-300 px-4 py-3 bg-white";

export default function ProceedsCalculator() {
  const [price, setPrice] = useState("800,000");
  const [planId, setPlanId] = useState<string>(listingPlans[0].id);
  const [buyerAgent, setBuyerAgent] = useState("0");
  const [otherCosts, setOtherCosts] = useState("1");
  const [payoff, setPayoff] = useState("0");

  const r = useMemo(() => {
    const p = toNumber(price);
    const plan = listingPlans.find((x) => x.id === planId) ?? listingPlans[0];
    const listingFee = (p * plan.rate) / 100;
    const buyerFee = (p * toNumber(buyerAgent)) / 100;
    const other = (p * toNumber(otherCosts)) / 100;
    const loan = toNumber(payoff);
    return { plan, listingFee, buyerFee, other, loan, net: p - listingFee - buyerFee - other - loan };
  }, [price, planId, buyerAgent, otherCosts, payoff]);

  return (
    <div className="card p-8 md:p-10">
      <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">Proceeds estimate</div>
      <h2 className="mt-3 brand-serif text-3xl">What would you walk away with?</h2>
      <p className="mt-2 text-sm text-neutral-600 max-w-prose">
        A rough estimate to start the conversation. Your real numbers depend on the
        sale price, your loan payoff and the terms you accept.
      </p>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="space-y-4 text-sm">
          <label className="block">
            <span className="text-neutral-700">Estimated sale price</span>
            <input
              className={`${inputClass} mt-1`}
              inputMode="numeric"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <label className="block">
            <span className="text-neutral-700">Listing plan</span>
            <select className={`${inputClass} mt-1`} value={planId} onChange={(e) => setPlanId(e.target.value)}>
              {listingPlans.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} · {p.rate}%
                </option>
              ))}
            </select>
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-neutral-700">Buyer-agent offer (%)</span>
              <input
                className={`${inputClass} mt-1`}
                inputMode="decimal"
                value={buyerAgent}
                onChange={(e) => setBuyerAgent(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="text-neutral-700">Other closing costs (%)</span>
              <input
                className={`${inputClass} mt-1`}
                inputMode="decimal"
                value={otherCosts}
                onChange={(e) => setOtherCosts(e.target.value)}
              />
            </label>
          </div>

          <label className="block">
            <span className="text-neutral-700">Mortgage payoff (if any)</span>
            <input
              className={`${inputClass} mt-1`}
              inputMode="numeric"
              value={payoff}
              onChange={(e) => setPayoff(e.target.value)}
            />
          </label>

          <p className="text-xs text-neutral-500">
            Buyer-agent compensation is optional and negotiated on each sale. Other
            closing costs cover escrow, title, county transfer tax and similar items;
            about 1% is a common starting estimate.
          </p>
        </div>

        <div className="rounded-2xl bg-neutral-900 text-white p-7">
          <div className="text-xs uppercase tracking-[0.2em] text-neutral-300">Estimated net proceeds</div>
          <div className="mt-2 brand-serif text-5xl">{money(Math.max(r.net, 0))}</div>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
              <dt className="text-neutral-300">{r.plan.name} listing fee ({r.plan.rate}%)</dt>
              <dd>{money(r.listingFee)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
              <dt className="text-neutral-300">Buyer-agent offer</dt>
              <dd>{money(r.buyerFee)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/15 pb-3">
              <dt className="text-neutral-300">Other closing costs</dt>
              <dd>{money(r.other)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-300">Mortgage payoff</dt>
              <dd>{money(r.loan)}</dd>
            </div>
          </dl>

          <Link
            href="/contact"
            className="mt-7 inline-flex w-full justify-center rounded-2xl border border-white bg-white px-5 py-3 text-black hover:bg-neutral-900 hover:text-white transition"
          >
            Get my real numbers
          </Link>
          <p className="mt-3 text-xs text-neutral-400">
            Estimate only. Not a guarantee of sale price or proceeds.
          </p>
        </div>
      </div>
    </div>
  );
}

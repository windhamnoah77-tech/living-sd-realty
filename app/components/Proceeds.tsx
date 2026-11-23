"use client";

import { useState } from "react";

export const plans = [
  { rate: 1, name: "Market-ready", detail: "You arrange preparation, vendors and access. I handle pricing, standard photography, MLS marketing, negotiation and escrow oversight." },
  { rate: 2.5, name: "Managed sale", detail: "I also coordinate vendors and access, plan showings and open houses, and review buyer feedback with you each week." },
  { rate: 3, name: "Sale and move", detail: "I also coordinate move dates, cleanout or estate-sale scheduling and updates to family members you authorize. Third-party bills are separate." }
];

const dollars = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const fields = [
  ["price", "Estimated sale price"], ["payoff", "Mortgage and lien payoff"],
  ["closing", "Escrow, title and other closing costs"], ["prep", "Preparation and moving expenses"],
  ["credits", "Seller credits and any buyer-agent compensation"]
] as const;

export default function Proceeds() {
  const [amounts, setAmounts] = useState({ price: "1000000", payoff: "", closing: "", prep: "", credits: "" });
  const [rate, setRate] = useState(1);
  const valid = Number(amounts.price) > 0 && Object.values(amounts).every(value => Number.isFinite(Number(value)) && Number(value) >= 0);
  const price = Number(amounts.price);
  const fee = price * rate / 100;
  const proceeds = price - fee - Number(amounts.payoff) - Number(amounts.closing) - Number(amounts.prep) - Number(amounts.credits);
  return <section id="calculator" className="seller-calc">
    <h2>Compare your estimated proceeds</h2><p>Choose your level of service and enter your costs. Blank costs count as $0. Your figures stay in your browser.</p>
    <fieldset><legend>Listing options</legend><div className="seller-plans">{plans.map(plan =>
      <label key={plan.rate} className={rate === plan.rate ? "plan selected" : "plan"}>
        <span><input type="radio" name="listing-plan" checked={rate === plan.rate} onChange={() => setRate(plan.rate)} /> {plan.rate}% · {plan.name}</span>
        <strong>{valid ? dollars.format(price * plan.rate / 100) : "—"}</strong><span>{plan.detail}</span>
      </label>)}</div></fieldset>
    <div className="seller-fields">{fields.map(([key, label]) => <label key={key}>{label} ($)
      <input type="number" inputMode="decimal" min="0" step="any" placeholder="0" value={amounts[key]} onChange={e => setAmounts({ ...amounts, [key]: e.target.value })} />
    </label>)}</div>
    <div className="seller-total" aria-live="polite">{valid ? <><span>Estimated proceeds before taxes</span><strong>{dollars.format(proceeds)}</strong><small>Includes {dollars.format(fee)} in listing-side fees at {rate}%.</small></> : "Enter a positive sale price and costs of zero or more."}</div>
    <p>Illustrative amounts. Listing fees are negotiable and agreed in writing. Buyer-agent compensation, if any, is separately negotiated. Your escrow estimate will reflect the terms of your sale.</p>
  </section>;
}

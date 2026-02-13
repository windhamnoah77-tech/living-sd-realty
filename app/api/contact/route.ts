import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // important for Netlify + Resend

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  address?: string;
  priceRange?: string;
  timeline?: string;
  message?: string;
};

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "Noah@rbhaley.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "LivingSD <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY env var." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Payload;

    // Basic validation (keep it strict)
    if (!body.email || !body.message) {
      return NextResponse.json(
        { ok: false, error: "Email and message are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = `New site inquiry: ${body.role || "Contact"} (${body.email})`;

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height:1.45">
        <h2>New Website Inquiry</h2>
        <p><b>Name:</b> ${escapeHtml(body.name || "")}</p>
        <p><b>Email:</b> ${escapeHtml(body.email || "")}</p>
        <p><b>Phone:</b> ${escapeHtml(body.phone || "")}</p>
        <p><b>Role:</b> ${escapeHtml(body.role || "")}</p>
        <p><b>Property:</b> ${escapeHtml(body.address || "")}</p>
        <p><b>Price range:</b> ${escapeHtml(body.priceRange || "")}</p>
        <p><b>Timeline:</b> ${escapeHtml(body.timeline || "")}</p>
        <hr/>
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap; background:#f6f6f6; padding:12px; border-radius:8px">${escapeHtml(
          body.message || ""
        )}</pre>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: body.email,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Unknown error" },
      { status: 500 }
    );
  }
}

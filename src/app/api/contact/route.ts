import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  country?: string;
  message?: string;
  privacy?: boolean;
  website?: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const country = payload.country?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 },
    );
  }

  if (!payload.privacy) {
    return NextResponse.json(
      { error: "Privacy policy must be accepted" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.error("Contact form: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Server is not configured to send email" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New contact from ${name} — Maxema website`;

  const html = `
    <div style="font-family: Helvetica, Arial, sans-serif; color: #111; max-width: 560px;">
      <h2 style="margin:0 0 16px;">New contact form submission</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tbody>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Name</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#666;">Email</td><td>${escapeHtml(email)}</td></tr>
          ${company ? `<tr><td style="padding:6px 12px 6px 0;color:#666;">Company</td><td>${escapeHtml(company)}</td></tr>` : ""}
          ${country ? `<tr><td style="padding:6px 12px 6px 0;color:#666;">Country</td><td>${escapeHtml(country)}</td></tr>` : ""}
        </tbody>
      </table>
      <h3 style="margin:24px 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</p>
    </div>
  `;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    country ? `Country: ${country}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from: `Maxema Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send the message right now" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Could not send the message right now" },
      { status: 500 },
    );
  }
}

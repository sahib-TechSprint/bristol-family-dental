import type { APIRoute } from "astro";
import { z } from "zod";

export const prerender = false;

// Booking requests: validated with Zod, protected by a honeypot field, a
// minimum elapsed time check, and a small per IP rate limit. With
// RESEND_API_KEY set the office gets an email; without it the request is
// logged to the console so the whole flow is testable with zero setup.

const bookingSchema = z.object({
  name: z.string().trim().min(2, "name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "phone")
    .max(25)
    .regex(/^[0-9()+\-. ]+$/, "phone"),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  preferred: z.string().trim().min(1, "preferred").max(300),
  service: z.string().trim().min(1, "service").max(100),
  newPatient: z.enum(["yes", "no"]),
  insurance: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  company: z.string().max(200).optional().or(z.literal("")),
  startedAt: z.number().finite(),
});

const MIN_ELAPSED_MS = 2000;
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function json(body: object, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let ip = "unknown";
  try {
    ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || clientAddress;
  } catch {
    // clientAddress can throw in some prerender contexts; the fallback is fine.
  }

  if (isRateLimited(ip)) {
    return json({ ok: false, error: "rate_limited" }, 429);
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const parsed = bookingSchema.safeParse(raw);
  if (!parsed.success) {
    return json({ ok: false, error: "invalid_fields" }, 400);
  }
  const data = parsed.data;

  // Honeypot: real visitors never see this field. Pretend success so bots
  // learn nothing.
  if (data.company && data.company.length > 0) {
    return json({ ok: true }, 200);
  }

  // A human takes longer than two seconds to fill out a booking form.
  if (Date.now() - data.startedAt < MIN_ELAPSED_MS) {
    return json({ ok: false, error: "too_fast" }, 400);
  }

  const notifyEmail =
    (process.env.BOOKING_NOTIFY_EMAIL || "").trim() || "info@bristolfamilydentalcenter.com";
  const resendKey = (process.env.RESEND_API_KEY || "").trim();

  const lines = [
    `New booking request from the website`,
    ``,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || "Not provided"}`,
    `Preferred days/times: ${data.preferred}`,
    `Service: ${data.service}`,
    `New patient: ${data.newPatient === "yes" ? "Yes" : "No"}`,
    `Insurance: ${data.insurance || "Not provided"}`,
    ``,
    `Message:`,
    data.message || "(none)",
  ];
  const text = lines.join("\n");

  if (!resendKey) {
    console.log("[booking] RESEND_API_KEY not set, logging request instead of emailing:");
    console.log(text);
    return json({ ok: true }, 200);
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Swap the from address to a verified practice domain once Resend
        // domain verification is complete.
        from: "Bristol Family Dental Website <onboarding@resend.dev>",
        to: [notifyEmail],
        reply_to: data.email || undefined,
        subject: `Booking request: ${data.name} (${data.service})`,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[booking] Resend error", response.status, detail);
      return json({ ok: false, error: "email_failed" }, 502);
    }
  } catch (error) {
    console.error("[booking] Resend request failed", error);
    return json({ ok: false, error: "email_failed" }, 502);
  }

  return json({ ok: true }, 200);
};

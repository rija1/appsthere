import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter signup. Forwards to NEWSLETTER_WEBHOOK_URL when configured
 * (works with Buttondown, Zapier, Make, etc.); otherwise logs so the
 * form is fully functional in development.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json().catch(() => null)) as {
    email?: unknown;
  } | null;
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      console.error(`Newsletter webhook failed: ${response.status}`);
      return NextResponse.json({ error: "subscription failed" }, { status: 502 });
    }
  } else {
    console.info(`[newsletter:dry-run] subscribe ${email}`);
  }

  return NextResponse.json({ subscribed: true });
}

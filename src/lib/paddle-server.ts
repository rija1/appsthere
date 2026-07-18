import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Server-side Paddle Billing helpers: webhook signature verification and
 * the minimal API calls fulfillment needs. No SDK — the surface we use
 * is two endpoints.
 */

const MAX_SIGNATURE_AGE_SECONDS = 15 * 60;

/**
 * Verify a `Paddle-Signature` header (`ts=...;h1=...`) against the raw
 * request body, per https://developer.paddle.com/webhooks/signature-verification
 */
export function verifyPaddleSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
): boolean {
  if (!signatureHeader) return false;

  const parts = new Map<string, string[]>();
  for (const element of signatureHeader.split(";")) {
    const [key, value] = element.split("=", 2);
    if (!key || !value) continue;
    const list = parts.get(key) ?? [];
    list.push(value);
    parts.set(key, list);
  }

  const ts = parts.get("ts")?.[0];
  const signatures = parts.get("h1") ?? [];
  if (!ts || signatures.length === 0) return false;

  const age = Math.abs(Date.now() / 1000 - Number(ts));
  if (!Number.isFinite(age) || age > MAX_SIGNATURE_AGE_SECONDS) return false;

  const expected = createHmac("sha256", secret)
    .update(`${ts}:${rawBody}`)
    .digest();

  return signatures.some((candidate) => {
    const provided = Buffer.from(candidate, "hex");
    return (
      provided.length === expected.length && timingSafeEqual(provided, expected)
    );
  });
}

function paddleApiBase(): string {
  return process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
    ? "https://api.paddle.com"
    : "https://sandbox-api.paddle.com";
}

/** Fetch a customer's email address for fulfillment. */
export async function getPaddleCustomerEmail(
  customerId: string,
): Promise<string | null> {
  const apiKey = process.env.PADDLE_API_KEY;
  if (!apiKey) return null;

  const response = await fetch(`${paddleApiBase()}/customers/${customerId}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: "no-store",
  });
  if (!response.ok) return null;

  const body = (await response.json()) as { data?: { email?: string } };
  return body.data?.email ?? null;
}

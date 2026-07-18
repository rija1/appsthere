import { NextResponse } from "next/server";
import { getAppByPaddlePriceId } from "@/content/apps";
import { sendLicenseEmail } from "@/lib/email";
import { mintLicenseKey } from "@/lib/licensing";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface PaddleListResponse<T> {
  data?: T[];
}

interface PaddleCustomer {
  id: string;
}

interface PaddleTransaction {
  id: string;
  status: string;
  items?: Array<{ price?: { id?: string } }>;
}

function paddleApiBase(): string {
  return process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
    ? "https://api.paddle.com"
    : "https://sandbox-api.paddle.com";
}

/**
 * License recovery: looks the buyer up in Paddle (our system of record —
 * the site keeps no customer database) and re-mints license keys for every
 * completed purchase. Licenses are deterministic entitlements, so a fresh
 * key is exactly as valid as the original.
 *
 * Always answers 202 so the endpoint can't be used to probe which emails
 * have purchased.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json().catch(() => null)) as {
    email?: unknown;
  } | null;
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const accepted = NextResponse.json({ accepted: true }, { status: 202 });

  const apiKey = process.env.PADDLE_API_KEY;
  const privateKey = process.env.LICENSE_SIGNING_PRIVATE_KEY;
  if (!apiKey || !privateKey) {
    console.warn("License recovery skipped: Paddle API key or signing key missing");
    return accepted;
  }

  try {
    const headers = { Authorization: `Bearer ${apiKey}` };

    const customersResponse = await fetch(
      `${paddleApiBase()}/customers?email=${encodeURIComponent(email)}`,
      { headers, cache: "no-store" },
    );
    if (!customersResponse.ok) return accepted;
    const customers =
      ((await customersResponse.json()) as PaddleListResponse<PaddleCustomer>)
        .data ?? [];

    const licensedSlugs = new Set<string>();
    for (const customer of customers) {
      const transactionsResponse = await fetch(
        `${paddleApiBase()}/transactions?customer_id=${customer.id}&status=completed`,
        { headers, cache: "no-store" },
      );
      if (!transactionsResponse.ok) continue;
      const transactions =
        ((await transactionsResponse.json()) as PaddleListResponse<PaddleTransaction>)
          .data ?? [];

      for (const transaction of transactions) {
        for (const item of transaction.items ?? []) {
          const app = item.price?.id
            ? getAppByPaddlePriceId(item.price.id)
            : undefined;
          if (!app || licensedSlugs.has(app.slug)) continue;
          licensedSlugs.add(app.slug);

          await sendLicenseEmail({
            to: email,
            appName: app.name,
            licenseKey: mintLicenseKey({
              email,
              productID: app.licenseProductID,
              privateKeyBase64: privateKey,
            }),
            orderId: transaction.id,
          });
        }
      }
    }

    console.info(
      `License recovery for ${email}: ${licensedSlugs.size} license(s) resent`,
    );
  } catch (error) {
    console.error("License recovery failed", error);
  }

  return accepted;
}

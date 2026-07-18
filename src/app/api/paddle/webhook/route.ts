import { NextResponse } from "next/server";
import { getAppByPaddlePriceId } from "@/content/apps";
import { sendLicenseEmail } from "@/lib/email";
import { mintLicenseKey } from "@/lib/licensing";
import {
  getPaddleCustomerEmail,
  verifyPaddleSignature,
} from "@/lib/paddle-server";

export const runtime = "nodejs";

interface PaddleTransactionEvent {
  event_id: string;
  event_type: string;
  data: {
    id: string;
    customer_id: string | null;
    custom_data?: Record<string, unknown> | null;
    items?: Array<{ price?: { id?: string } }>;
  };
}

/**
 * Paddle Billing fulfillment webhook.
 *
 * On `transaction.completed`, mints an offline-verifiable Ed25519 license
 * (the exact format the desktop apps expect) and emails it to the buyer.
 *
 * Paddle retries on non-2xx responses, so: signature problems → 401,
 * fulfillment misconfiguration → 500 (retry after fixing env),
 * events we don't care about → 200.
 */
export async function POST(request: Request): Promise<NextResponse> {
  const secret = process.env.PADDLE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("PADDLE_WEBHOOK_SECRET is not configured");
    return NextResponse.json({ error: "not configured" }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("paddle-signature");
  if (!verifyPaddleSignature(rawBody, signature, secret)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(rawBody) as PaddleTransactionEvent;
  if (event.event_type !== "transaction.completed") {
    return NextResponse.json({ received: true });
  }

  const priceIds = (event.data.items ?? [])
    .map((item) => item.price?.id)
    .filter((id): id is string => typeof id === "string");
  const app = priceIds
    .map((id) => getAppByPaddlePriceId(id))
    .find((match) => match !== undefined);

  if (!app) {
    // A transaction for a product this site doesn't fulfill (yet).
    console.warn(
      `Webhook ${event.event_id}: no app matches prices [${priceIds.join(", ")}]`,
    );
    return NextResponse.json({ received: true });
  }

  const privateKey = process.env.LICENSE_SIGNING_PRIVATE_KEY;
  if (!privateKey) {
    console.error("LICENSE_SIGNING_PRIVATE_KEY is not configured");
    return NextResponse.json({ error: "not configured" }, { status: 500 });
  }

  const email =
    (typeof event.data.custom_data?.buyer_email === "string"
      ? event.data.custom_data.buyer_email
      : null) ??
    (event.data.customer_id
      ? await getPaddleCustomerEmail(event.data.customer_id)
      : null);

  if (!email) {
    console.error(
      `Webhook ${event.event_id}: could not resolve buyer email ` +
        `(customer ${event.data.customer_id ?? "unknown"})`,
    );
    return NextResponse.json({ error: "no buyer email" }, { status: 500 });
  }

  const licenseKey = mintLicenseKey({
    email,
    productID: app.licenseProductID,
    privateKeyBase64: privateKey,
  });

  // Paddle may deliver an event more than once; re-sending the license
  // email is harmless (each mint yields an equally valid key).
  await sendLicenseEmail({
    to: email,
    appName: app.name,
    licenseKey,
    orderId: event.data.id,
  });

  console.info(
    `Webhook ${event.event_id}: fulfilled ${app.slug} for transaction ${event.data.id}`,
  );
  return NextResponse.json({ fulfilled: true });
}

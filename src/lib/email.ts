import "server-only";

/**
 * Transactional email delivery. Uses Resend when RESEND_API_KEY is set;
 * otherwise logs to the server console so local/sandbox flows stay testable
 * without an email account.
 */

export interface LicenseEmail {
  to: string;
  appName: string;
  licenseKey: string;
  orderId: string;
}

export async function sendLicenseEmail(email: LicenseEmail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.LICENSE_EMAIL_FROM ?? "TheAppsThere <licenses@theappsthere.com>";

  const subject = `Your ${email.appName} license key`;
  const text = [
    `Thanks for purchasing ${email.appName}!`,
    ``,
    `Your license key (order ${email.orderId}):`,
    ``,
    email.licenseKey,
    ``,
    `To activate: open ${email.appName}, go to Settings → License,`,
    `and paste the key. Activation works entirely offline.`,
    ``,
    `Keep this email — the key is your proof of purchase.`,
    `Questions? Just reply to this email.`,
    ``,
    `— TheAppsThere`,
  ].join("\n");

  if (!apiKey) {
    console.info(
      `[email:dry-run] would send license to ${email.to}\n${text}`,
    );
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [email.to], subject, text }),
  });

  if (!response.ok) {
    throw new Error(
      `Resend rejected license email: ${response.status} ${await response.text()}`,
    );
  }
}

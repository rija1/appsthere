import "server-only";
import { createPrivateKey, createPublicKey, sign, verify } from "node:crypto";

/**
 * License minting — the server-side twin of the desktop app's
 * `LicenseVerifier` (see LumisoTranscribe/docs/LICENSING.md).
 *
 * A key is `base64url(payloadJSON) + "." + base64url(ed25519Signature)`.
 * The app verifies the signature offline with the embedded public key,
 * so the payload here must match the Swift `SignedLicense` struct and
 * its ISO 8601 date encoding exactly.
 */

export interface SignedLicensePayload {
  email: string;
  productID: string;
  issuedAt: string;
  expiresAt?: string;
}

/** PKCS#8 DER prefix that wraps a raw 32-byte Ed25519 private key. */
const ED25519_PKCS8_PREFIX = Buffer.from(
  "302e020100300506032b657004220420",
  "hex",
);

/** SPKI DER prefix that wraps a raw 32-byte Ed25519 public key. */
const ED25519_SPKI_PREFIX = Buffer.from(
  "302a300506032b6570032100",
  "hex",
);

/**
 * Swift's `JSONDecoder.DateDecodingStrategy.iso8601` rejects fractional
 * seconds, so dates must be second-precision: `2026-07-17T12:00:00Z`.
 */
function iso8601WithoutMilliseconds(date: Date): string {
  return date.toISOString().replace(/\.\d{3}Z$/, "Z");
}

function privateKeyFromBase64(rawBase64: string) {
  const raw = Buffer.from(rawBase64, "base64");
  if (raw.length !== 32) {
    throw new Error("Ed25519 private key must be 32 raw bytes");
  }
  return createPrivateKey({
    key: Buffer.concat([ED25519_PKCS8_PREFIX, raw]),
    format: "der",
    type: "pkcs8",
  });
}

function publicKeyFromBase64(rawBase64: string) {
  const raw = Buffer.from(rawBase64, "base64");
  if (raw.length !== 32) {
    throw new Error("Ed25519 public key must be 32 raw bytes");
  }
  return createPublicKey({
    key: Buffer.concat([ED25519_SPKI_PREFIX, raw]),
    format: "der",
    type: "spki",
  });
}

export interface MintLicenseOptions {
  email: string;
  productID: string;
  /** Base64 of the raw 32-byte Ed25519 private key. */
  privateKeyBase64: string;
  issuedAt?: Date;
  /** Omit for a perpetual license. */
  expiresAt?: Date;
}

/** Mint a license key the desktop app will accept. */
export function mintLicenseKey(options: MintLicenseOptions): string {
  const payload: SignedLicensePayload = {
    email: options.email,
    productID: options.productID,
    issuedAt: iso8601WithoutMilliseconds(options.issuedAt ?? new Date()),
    ...(options.expiresAt
      ? { expiresAt: iso8601WithoutMilliseconds(options.expiresAt) }
      : {}),
  };

  const payloadBytes = Buffer.from(JSON.stringify(payload), "utf8");
  const signature = sign(
    null,
    payloadBytes,
    privateKeyFromBase64(options.privateKeyBase64),
  );

  return `${payloadBytes.toString("base64url")}.${signature.toString("base64url")}`;
}

/** Verify a license key — used by tests and the account lookup endpoint. */
export function verifyLicenseKey(
  licenseKey: string,
  publicKeyBase64: string,
): SignedLicensePayload | null {
  const parts = licenseKey.trim().split(".");
  if (parts.length !== 2) return null;

  const payloadBytes = Buffer.from(parts[0], "base64url");
  const signature = Buffer.from(parts[1], "base64url");

  const valid = verify(
    null,
    payloadBytes,
    publicKeyFromBase64(publicKeyBase64),
    signature,
  );
  if (!valid) return null;

  try {
    return JSON.parse(payloadBytes.toString("utf8")) as SignedLicensePayload;
  } catch {
    return null;
  }
}

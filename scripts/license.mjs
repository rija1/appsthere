#!/usr/bin/env node
/**
 * Vendor-side license tooling — the Node twin of the desktop repo's
 * scripts/mint-license.swift. Produces identical key material and formats.
 *
 *   Generate a signing key pair:
 *     node scripts/license.mjs keygen
 *
 *   Mint a license key:
 *     node scripts/license.mjs mint <privateKeyBase64> <email> [productID] [expiresAt-ISO8601]
 *
 *   Verify a license key:
 *     node scripts/license.mjs verify <publicKeyBase64> <licenseKey>
 */
import {
  createPrivateKey,
  createPublicKey,
  generateKeyPairSync,
  sign,
  verify,
} from "node:crypto";

const ED25519_PKCS8_PREFIX = Buffer.from("302e020100300506032b657004220420", "hex");
const ED25519_SPKI_PREFIX = Buffer.from("302a300506032b6570032100", "hex");
const DEFAULT_PRODUCT_ID = "com.lumiso.transcribe";

function fail(message) {
  console.error(message);
  process.exit(1);
}

function isoNoMillis(date) {
  return date.toISOString().replace(/\.\d{3}Z$/, "Z");
}

function privateKeyFromBase64(rawBase64) {
  const raw = Buffer.from(rawBase64, "base64");
  if (raw.length !== 32) fail("private key must be 32 raw bytes (base64)");
  return createPrivateKey({
    key: Buffer.concat([ED25519_PKCS8_PREFIX, raw]),
    format: "der",
    type: "pkcs8",
  });
}

function publicKeyFromBase64(rawBase64) {
  const raw = Buffer.from(rawBase64, "base64");
  if (raw.length !== 32) fail("public key must be 32 raw bytes (base64)");
  return createPublicKey({
    key: Buffer.concat([ED25519_SPKI_PREFIX, raw]),
    format: "der",
    type: "spki",
  });
}

const [, , command, ...args] = process.argv;

switch (command) {
  case "keygen": {
    const { privateKey, publicKey } = generateKeyPairSync("ed25519");
    const rawPrivate = privateKey
      .export({ format: "der", type: "pkcs8" })
      .subarray(ED25519_PKCS8_PREFIX.length);
    const rawPublic = publicKey
      .export({ format: "der", type: "spki" })
      .subarray(ED25519_SPKI_PREFIX.length);
    console.log(`private key: ${rawPrivate.toString("base64")}`);
    console.log(`public key:  ${rawPublic.toString("base64")}`);
    break;
  }

  case "mint": {
    const [privateKeyBase64, email, productID = DEFAULT_PRODUCT_ID, expiresAt] = args;
    if (!privateKeyBase64 || !email) {
      fail("usage: license.mjs mint <privateKeyBase64> <email> [productID] [expiresAt]");
    }
    if (expiresAt && Number.isNaN(Date.parse(expiresAt))) {
      fail("could not parse expiry date; use ISO 8601, e.g. 2027-01-01T00:00:00Z");
    }
    const payload = {
      email,
      productID,
      issuedAt: isoNoMillis(new Date()),
      ...(expiresAt ? { expiresAt: isoNoMillis(new Date(expiresAt)) } : {}),
    };
    const payloadBytes = Buffer.from(JSON.stringify(payload), "utf8");
    const signature = sign(null, payloadBytes, privateKeyFromBase64(privateKeyBase64));
    console.log(`${payloadBytes.toString("base64url")}.${signature.toString("base64url")}`);
    break;
  }

  case "verify": {
    const [publicKeyBase64, licenseKey] = args;
    if (!publicKeyBase64 || !licenseKey) {
      fail("usage: license.mjs verify <publicKeyBase64> <licenseKey>");
    }
    const parts = licenseKey.trim().split(".");
    if (parts.length !== 2) fail("malformed key (expected payload.signature)");
    const payloadBytes = Buffer.from(parts[0], "base64url");
    const signature = Buffer.from(parts[1], "base64url");
    const valid = verify(null, payloadBytes, publicKeyFromBase64(publicKeyBase64), signature);
    if (!valid) fail("INVALID signature");
    console.log("VALID");
    console.log(payloadBytes.toString("utf8"));
    break;
  }

  default:
    fail("usage: license.mjs keygen | mint | verify");
}

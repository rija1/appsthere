# TheAppsThere.com

Marketing and commerce site for [TheAppsThere](https://theappsthere.com) —
fast, private, native desktop applications. First product:
**Lumiso Transcribe** (macOS, on-device Whisper transcription).

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion,
Radix primitives, and next-intl (English · French · Simplified Chinese).

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in what you have; everything degrades gracefully
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run dev:e2e` | Dev server with entrance animations disabled (screenshot/E2E tooling) |
| `npm run build` / `npm start` | Production build / serve |
| `npm run lint` | ESLint |
| `npm run license -- <cmd>` | License tooling: `keygen`, `mint`, `verify` (see below) |

## Architecture

```
src/
├── app/
│   ├── [locale]/           Pages (home, apps, blog, account, checkout, legal)
│   ├── api/                paddle/webhook · license/recover · newsletter
│   ├── sitemap.ts          Multilingual sitemap with hreflang alternates
│   ├── robots.ts, rss.xml/ SEO endpoints
├── components/
│   ├── ui/                 Design system (button, card, badge, accordion, …)
│   ├── motion/             Reveal primitives (respect prefers-reduced-motion)
│   ├── mockups/            Vector app "screenshots" — themed DOM, no images
│   ├── layout/, home/, apps/, paddle/
├── content/                ALL site content, typed and localized
│   ├── apps/               One file per app + registry (index.ts)
│   ├── blog/, legal.ts, testimonials.ts
├── i18n/                   next-intl routing/request config
├── lib/                    licensing, paddle-server, email, seo, pricing
└── proxy.ts                Locale negotiation (next-intl middleware)
messages/                   UI strings: en.json · fr.json · zh.json
```

**Content is code.** There is deliberately no CMS/admin UI: publishing an app,
a blog post, or a changelog entry is a typed edit + git commit ("admin" =
your editor, reviews = pull requests). Every page, the sitemap, RSS, and
Paddle fulfillment all derive from `src/content/`.

### Adding an app

1. Create `src/content/apps/<slug>.ts` (copy `lumiso-transcribe.ts` — the
   `AppDefinition` type in `src/content/types.ts` enforces completeness:
   pricing, FAQ, requirements, changelog, screenshots…).
2. Register it in `src/content/apps/index.ts`.
3. Add a Paddle price and set its env var (see below).

All copy is `l("en", "fr", "zh")` triples — nothing user-visible is hardcoded
in components.

## Payments (Paddle Billing) & licensing

The purchase flow is fully wired:

```
Buy button → Paddle overlay checkout (lazy-loaded Paddle.js)
  → Paddle webhook `transaction.completed` → /api/paddle/webhook
    → verify Paddle-Signature (HMAC-SHA256, replay-window check)
    → resolve app by price ID → mint Ed25519 license → email the buyer
```

License keys use the **exact format Lumiso Transcribe verifies offline**
(`base64url(payloadJSON).base64url(ed25519Sig)`, ISO-8601 dates without
fractional seconds — see `src/lib/licensing.ts`). This has been round-trip
tested against the app's Swift `LicenseVerifier` (CryptoKit).

### Go-live checklist

1. **Keys** — on a secure machine: `npm run license -- keygen`.
   Put the *public* key in the app's `LicenseVerifier.production`; put the
   *private* key only in the server env (`LICENSE_SIGNING_PRIVATE_KEY`).
   Replace the development pair everywhere.
2. **Paddle** — create the product & one-time price for Lumiso Pro; set
   `NEXT_PUBLIC_PADDLE_PRICE_LUMISO_PRO`, `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`,
   `NEXT_PUBLIC_PADDLE_ENV=sandbox|production`, `PADDLE_API_KEY`.
3. **Webhook** — point a Paddle notification at
   `https://<domain>/api/paddle/webhook` (event: `transaction.completed`)
   and set `PADDLE_WEBHOOK_SECRET`.
4. **Email** — set `RESEND_API_KEY` (+ `LICENSE_EMAIL_FROM`); without it,
   license emails are logged to the server console (dry-run).
5. **Domain approval** — Paddle requires reachable Terms, Privacy, and
   Refund pages: they live at `/legal/terms`, `/legal/privacy`,
   `/legal/refunds` (review with counsel before launch).
6. **Download** — host the notarized `.dmg` and set
   `NEXT_PUBLIC_DOWNLOAD_URL_LUMISO`.

Simulate a purchase locally (no Paddle account needed):

```bash
# .env.local: PADDLE_WEBHOOK_SECRET + LICENSE_SIGNING_PRIVATE_KEY +
#             NEXT_PUBLIC_PADDLE_PRICE_LUMISO_PRO must be set
node -e '
const c = require("node:crypto");
const body = JSON.stringify({event_id:"evt_1",event_type:"transaction.completed",
  data:{id:"txn_1",customer_id:"ctm_1",custom_data:{buyer_email:"you@example.com"},
  items:[{price:{id:process.env.PRICE||"pri_local_test_lumiso_pro"}}]}});
const ts = Math.floor(Date.now()/1000);
const h1 = c.createHmac("sha256","local_test_webhook_secret").update(ts+":"+body).digest("hex");
console.log(`curl -s -X POST localhost:3000/api/paddle/webhook -H "Paddle-Signature: ts=${ts};h1=${h1}" -d '${body}'`)'
```

The minted key appears in the server log (email dry-run) and activates the
app via Settings → License.

## Internationalization

Locales: `en` (default, unprefixed), `fr`, `zh` — negotiated by
`src/proxy.ts`, switchable in the header. UI strings live in `messages/*.json`;
long-form content is localized inline in `src/content/`. Every page emits
canonical + hreflang alternates; the sitemap covers all three locales.

## Design system

Tokens live in `src/app/globals.css` (OKLCH, light + dark via `.dark`):
one indigo accent drawn from the AppsThere logo, warm off-white / near-black
surfaces, Geist Sans/Mono. Brand assets (logo lockup + extracted monogram,
white unmixed to alpha) live in `src/assets/brand/`.
Components under `src/components/ui/` follow the shadcn/cva pattern.
Motion (`src/components/motion/reveal.tsx`) is entrance-only, ~0.7 s ease-out,
and renders statically for `prefers-reduced-motion` users (and under
`NEXT_PUBLIC_DISABLE_ANIMATIONS=1` for screenshot tooling).

## Before launch

- Replace the placeholder testimonials/reviews in
  `src/content/testimonials.ts` and each app's `reviews` with real, attributed
  quotes (they are marked `PLACEHOLDER` in-source).
- Replace the development license signing key (see checklist above).
- Set `NEXT_PUBLIC_SITE_URL` if deploying to a different domain.

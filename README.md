# HARMONIC insight Global LP

Global landing page for INST (Insight Doc Translator) and INMV (Insight Training Studio).

**Live (planned)**: TBD (e.g., `insight-tools.com` or `getinsight.io`)

## Why a separate site?

The Japanese site (`insight-office.com`) is positioned around the *育成就労* (Skilled Worker) program and Japanese B2B selling conventions. This site (`web-site-insight-global`) targets a different audience:

- **Audience**: English-speaking knowledge workers, freelance translators, B2B SaaS buyers globally
- **Hook**: "Stop juggling 4 apps for one Office file" — universal pain point, not Japan-specific
- **Pricing**: USD ($199 / $499) with auto-conversion at checkout
- **Convention**: Modern SaaS landing page (Stripe / Linear / Cursor style), not Japanese B2B style

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 3.4
- TypeScript 5.9

## Local development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Environment variables

Optional overrides (defaults to JP store's Global variants until new Global store is created):

```
NEXT_PUBLIC_LS_GLOBAL_INST_PERS=https://...
NEXT_PUBLIC_LS_GLOBAL_INST_BIZ=https://...
NEXT_PUBLIC_LS_GLOBAL_INMV_PERS=https://...
NEXT_PUBLIC_LS_GLOBAL_INMV_BIZ=https://...
```

## Architecture

```
HARMONIC insight Global (this site)
  ├ Hero: "Stop juggling 4 apps"
  ├ Social proof bar
  ├ Problem section (DeepL/ChatGPT/Acrobat broken loop)
  ├ Products (INST + INMV)
  ├ Features grid (6 differentiators)
  ├ Comparison table (vs DeepL/ChatGPT/Copilot)
  ├ Pricing ($199/$499 × 2 products)
  ├ FAQ
  └ Final CTA → 30-day trial

→ Buy CTAs go directly to LemonSqueezy Checkout (Global variants)
→ Trial CTAs go to license.h-insight.jp/download/<CODE>?lang=en
→ Support: license.h-insight.jp/contact

The new Global LemonSqueezy store will be set up separately.
Until then, fallback URLs in `src/data/products.ts` route to the JP store's Global-priced variants.
```

## Deployment

Recommended: Vercel auto-deploy on push to `main`. Custom domain configured via Vercel dashboard.

## Sister projects

- `web-site-insight-office`: Japanese product LP (insight-office.com)
- `web-site-corporate`: Corporate brand site (h-insight.jp)
- `harmonic-license-manager`: License issuance + customer portal (license.h-insight.jp)
- `web-site-ai-portal-en`: English AI news portal (separate purpose)

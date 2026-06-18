# Onyx — Mobile Detailing

> The showroom comes to your driveway.

Marketing site for **Onyx**, a mobile car detailing studio. A self-contained
detail bay rolls up to the customer's home or office — express washes, full
interior/exterior details, and ceramic paint protection.

Built as a Next.js site with a clear path to a future booking app.

## Stack

- **Next.js 14** (App Router) + **React 18**
- **Framer Motion** for the FAQ accordion and booking-form state transitions
- Plain **CSS Modules** + a token system in `app/globals.css` (OKLCH custom properties)
- Type: **Fraunces** (display) · **Hanken Grotesk** (body) · **JetBrains Mono** (labels)

## Design system

A drenched-dark, automotive-luxury identity:

- Near-black "studio stage" surfaces with a glowing chartreuse-green brand color
  (the *gleam* on freshly-coated paint) and a brass-gold accent.
- All colors are named OKLCH tokens — no raw hex in components. Dark mode is the
  design intent, not an afterthought.
- Contrast verified to WCAG AA; scroll reveals are progressive enhancement
  (content is fully visible with no JS and under `prefers-reduced-motion`).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

Zero-config on **Vercel** — import the repo and deploy. Fonts are self-hosted at
build time via `next/font`, so no runtime font requests.

## Project structure

```
app/
  layout.tsx        # fonts, metadata, <html> shell
  globals.css       # design tokens, reset, shared utilities
  page.tsx          # section composition
components/
  Hero, Services, Process, Coverage, Testimonials, BookCta, Footer
  Nav, Logo, Reveal, RevealInit
lib/
  site.ts           # all copy/content (services, steps, testimonials, FAQs)
```

## Editing content

Business name, phone, services, pricing, coverage area, testimonials and FAQ
copy all live in **`lib/site.ts`** — change them in one place. Brand colors live
in `app/globals.css` (`:root`). Renaming the business is a search-and-replace of
"Onyx" plus the tokens.

## Next steps toward an app

- Wire the booking form (`components/BookCta.tsx`) to a real API / scheduling
  backend — the front-end state machine (idle → loading → success) is already in
  place at the `setTimeout` marked "Front-end demo".
- Add availability + payment, then reuse the design tokens in a React Native /
  Expo client.

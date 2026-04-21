# polymer-landing

Marketing site for Polymer — synthetic training data for object detection.
Ported from the Claude Design handoff (`landing.html`) to a Vite + React + TS app
for production deploy on Vercel.

## Local

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-checks + vite build → dist/
npm run preview   # serves the production build locally
```

## Deploy to Vercel

One-time:

```bash
npm install -g vercel
vercel            # links the project, first deploy is a preview
```

Production:

```bash
vercel --prod
```

Vercel auto-detects the Vite framework (see `vercel.json`). No build command
override needed — `npm run build` runs by default and `dist/` is served.

## What was ported from the design handoff

All of `landing.html` except these prototype-only features:

- The `Tweaks` panel (accent color / headline variant / font-face editor) —
  that was Claude Design's live editor overlay, not a production feature.
- The `window.parent.postMessage('__edit_mode_*')` host protocol — prototype
  harness only.

Everything else is present: nav, hero, credibility strip, benchmark chart
(hand-coded SVG with exact coordinates from the design), callouts, results
table, methodology note, "how it works" steps, 8-card SVG render gallery,
"why this works" reasons, pricing tiers, "not for" disqualifiers, FAQ with
accordion, request form with submit state, final CTA, and footer.

The dark/light theme switch is kept as a proper production toggle in the nav,
with OS-preference detection + `localStorage` persistence.

## Design file

The source prototype lives in the handoff bundle at
`/tmp/data_synthetic_handoff/data-synthetic/project/landing.html` — keep it
around if you need to reference the original CSS coordinates (especially for
the SVG chart).

## Structure

```
polymer-landing/
├── index.html               # loads fonts, mounts #root
├── src/
│   ├── main.tsx             # React entry
│   ├── App.tsx              # composes sections
│   ├── styles.css           # ported from the prototype
│   ├── useTheme.ts          # dark/light toggle hook
│   └── components/
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── Credibility.tsx
│       ├── Benchmark.tsx    # inline SVG chart
│       ├── HowItWorks.tsx
│       ├── RenderCard.tsx   # generative SVG thumbnails
│       ├── WhyItWorks.tsx
│       ├── Pricing.tsx
│       ├── NotFor.tsx
│       ├── FaqAndForm.tsx
│       ├── FinalCta.tsx
│       └── SiteFooter.tsx
├── vercel.json              # pins framework = vite
└── vite.config.ts
```

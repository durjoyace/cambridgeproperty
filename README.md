# Thane &amp; Reeve

**Real Property · Northeast · Est. MMXXVI**

*Land held. Land managed.*

A Northeast real estate firm organized around the refusal to separate ownership
from operations. Thane &amp; Reeve acquires, develops, and manages institutional-quality
property through three divisions — **Capital**, **Development**, and **Management** —
operated under one balance sheet and one accountable team.

This repository is the marketing site for the firm. See
`.planning/` for phase-by-phase work tracking and the founding document
for brand, positioning, and voice.

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Deployed on Vercel (with Node/Edge serverless routes under `/api`)

## Local development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run test     # vitest
npm run lint     # eslint
```

## Brand primitives

- `src/components/brand/Wordmark.tsx` — primary THANE &amp; REEVE wordmark
- `src/components/brand/Ampersand.tsx` — italic ampersand seal with brass rule
- Palette tokens: `--ink` `#161814`, `--paper` `#F2EFE7`, `--brass` `#836634`
- Type: Fraunces (display, italic) + Inter Tight (body, light)

## Partners

- **Patrick Barrett** — Founder &amp; Managing Partner
- **Timothy Johnson** — Partner

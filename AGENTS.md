<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# navida

**Stack:** Next.js 16.2.12 / React 19.2.4 / Tailwind CSS v4 / TypeScript (strict) / ESLint v9 (flat config). Only runtime dep besides React/Next is `framer-motion`.

**Package manager:** `npm` (lockfile committed).

**Commands:**
- `npm run dev` — dev server at localhost:3000 (runs `next dev --webpack`; Turbopack has a React Client Manifest bug in 16.2.12)
- `npm run build` — production build (also runs typecheck via Next.js)
- `npm run start` — serve the production build (requires `npm run build` first)
- `npm run lint` — ESLint (`eslint.config.mjs`)
- No dedicated `typecheck` script; `next build` catches TS errors.
- No test framework configured.

## What this app is

Single-page Persian (Farsi) marketing site for an architecture/engineering firm. All user-facing copy is RTL Persian (`lang="fa"`, `dir="rtl"` in `app/layout.tsx`) with a few English accent labels (e.g. "ARCHITECTURE · ENGINEERING"). Keep existing Persian copy intact and write new copy in Persian unless told otherwise.

**Structure:**
- `app/page.tsx` (server component) renders `app/HomeClient.tsx` (client), which stacks sections in order: Loader, Header, Hero, About, Services, Process, CtaStrip, Footer.
- Every component in `app/components/` is a client component (`"use client"`, uses `framer-motion`). No server data, API routes, or env vars.
- Sections are anchored by `id` (`#about`, `#services`, `#process`, `#contact`). To add a section: create it in `app/components/`, import and place it in `HomeClient.tsx`, and add its nav link in `Header.tsx`.

## Tailwind v4 quirks

- Use `@import "tailwindcss"` in CSS, **not** `@tailwind base/components/utilities`.
- Theme tokens defined with `@theme inline { ... }` in CSS, not `tailwind.config.*`.
- Brand palette lives in `app/globals.css` (`@theme inline`): `gold`, `gold-light`, `gold-dim`, `ivory`, `cream`, `muted`, `charcoal`, `panel`, `black`, `line`, `line-strong`. Use these token classes (e.g. `text-gold-light`, `bg-panel`) instead of hardcoding hex values.
- Fonts load via `next/font/google` in `app/layout.tsx`: Vazirmatn (sans, `--font-vazirmatn`) and Cormorant Garamond (serif, `--font-cormorant`), exposed as Tailwind's `font-sans` / `font-serif`.

## Other

**ESLint:** Flat config (`eslint.config.mjs`). Uses `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.

**Path alias:** `@/*` maps to project root (e.g. `import { x } from "@/app/..."`).

**Generated files (gitignored):** `.next/`, `next-env.d.ts`, `*.tsbuildinfo`.

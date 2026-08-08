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

### Use bare values, not `[...]` arbitrary values

Tailwind v4 resolves **bare values** (plain numbers/fractions, no square brackets) for many utilities. The Tailwind IntelliSense lint rule `suggestCanonicalClasses` (default `warning`) flags bracket forms when a bare value would do — that's the yellow squiggle you see. Always use the bare/canonical form:

- **Spacing-based utilities** accept any number on the `0.25rem` scale (spacing `4px` per unit): `w-50` (not `w-[200px]`), `py-15`, `mt-6.5`, `max-w-175`, `h-150`, `gap-11`. Convert pixels to the scale: `px / 4` (e.g. `w-[200px]` → `w-50`).
- **Aspect ratio** accepts bare fractions: `aspect-278/258`, `aspect-3/4`, `aspect-4/5` (not `aspect-[278/258]`, `aspect-[3/4]`).
- **Opacity** accepts an integer percent: `opacity-28` (not `opacity-[0.28]` or `opacity-[.28]`).
- **Transition duration** accepts a ms integer: `duration-400` (not `duration-[400ms]`).
- **z-index** accepts a bare number: `z-40` (not `z-[40]`).

Keep `[...]` only when no bare value exists — e.g. percentages (`px-[6%]`, `w-[80vw]`, `top-[34%]`), font sizes (`text-[clamp(40px,8vw,96px)]`, `text-[15.5px]`), letter-spacing (`tracking-[4px]`), multi-value gaps (`gap-[26px_20px]`), unitless line-heights (`leading-[2.05]`), gradients/bg-size, arbitrary shadows, and colors not in the palette. Do **not** write bare values with units like `w-200px` or `tracking-4px` — those don't compile.

Colors: prefer `@theme inline` tokens (`gold`, `gold-light`, `gold-dim`, `ivory`, `cream`, `muted`, `charcoal`, `panel`, `black`, `line`, `line-strong`). Never hardcode `bg-[#050505]`; if a color is missing, add a `--color-*` token to `app/globals.css` and use the token class.

## Other

**ESLint:** Flat config (`eslint.config.mjs`). Uses `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.

**Path alias:** `@/*` maps to project root (e.g. `import { x } from "@/app/..."`).

**Generated files (gitignored):** `.next/`, `next-env.d.ts`, `*.tsbuildinfo`.

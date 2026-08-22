<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# navida

**Stack:** Next.js 16.2.12 / React 19.2.4 / Tailwind CSS v4 / TypeScript (strict) / ESLint v9 (flat config). UI dependencies include Base UI, shadcn, Embla Carousel, Framer Motion, and Lucide React.

**Package manager:** `npm` (lockfile committed).

**Commands:**

- `npm run dev` — dev server at localhost:3000 (runs `next dev --webpack`; Turbopack has a React Client Manifest bug in 16.2.12)
- `npm run build` — production build (also runs typecheck via Next.js)
- `npm run start` — serve the production build (requires `npm run build` first)
- `npm run lint` — ESLint (`eslint.config.mjs`)
- No dedicated `typecheck` script; `next build` catches TS errors.
- No test framework configured.

## What this app is

Persian (Farsi) marketing site for an architecture/engineering firm, with a home page and a separate projects route. All user-facing copy is RTL Persian (`lang="fa"`, `dir="rtl"` in `app/layout.tsx`) with a few intentional English accent labels. Keep existing Persian copy intact and write new copy in Persian unless told otherwise.

**Structure:**

- `app/page.tsx` is the server entry for the home page and renders `app/HomeClient.tsx` (client), which orders `Loader`, `Hero`, `Projects`, `About`, `Process`, `Services`, and `CtaStrip`.
- `app/layout.tsx` owns global metadata, RTL attributes, fonts, and the layout-level `Header` and `Footer`; do not render duplicate header/footer components in `HomeClient.tsx`.
- `app/projects/page.tsx` is a separate client route. It uses `useMediaQuery` to select desktop/mobile project presentations from `app/components/projects/`.
- Shared navigation and content collections live in `app/data/content.tsx`; shared TypeScript contracts live in `app/types.ts`. Project images are local assets under `public/projects/` and should be rendered with `next/image`.
- Most files under `app/components/` are client components using `framer-motion`; there is no server data layer, API route, or environment-variable contract.
- Home sections are anchored by `id` (`#about`, `#services`, `#process`, `#contact`). To add a section: create it in `app/components/`, import and place it in `HomeClient.tsx`, and add its navigation link in `app/data/content.tsx` (consumed by `Header.tsx`).

`README.md` is still the default create-next-app document and is not an authoritative description of this application.

## Tailwind v4 quirks

- Use `@import "tailwindcss"` in CSS, **not** `@tailwind base/components/utilities`.
- Theme tokens defined with `@theme inline { ... }` in CSS, not `tailwind.config.*`.
- Brand palette lives in `app/globals.css` (`@theme inline`): `gold`, `gold-light`, `gold-dim`, `ivory`, `cream`, `muted`, `charcoal`, `panel`, `black`, `line`, `line-strong`. Use these token classes (e.g. `text-gold-light`, `bg-panel`) instead of hardcoding hex values. New code should follow this even where existing code has legacy raw colors.
- Fonts load via `next/font/google` in `app/layout.tsx`: Vazirmatn (sans, `--font-vazirmatn`) and Cormorant Garamond (serif, `--font-cormorant`), exposed as Tailwind's `font-sans` / `font-serif`.

### Use bare values, not `[...]` arbitrary values

Tailwind v4 resolves **bare values** (plain numbers/fractions, no square brackets) for many utilities. The Tailwind IntelliSense lint rule `suggestCanonicalClasses` (default `warning`) flags bracket forms when a bare value would do — that's the yellow squiggle you see. Always use the bare/canonical form:

- **Spacing-based utilities** accept any number on the `0.25rem` scale (spacing `4px` per unit): `w-50` (not `w-[200px]`), `py-15`, `mt-6.5`, `max-w-175`, `h-150`, `gap-11`. Convert pixels to the scale: `px / 4` (e.g. `w-[200px]` → `w-50`).
- **Aspect ratio** accepts bare fractions: `aspect-278/258`, `aspect-3/4`, `aspect-4/5` (not `aspect-[278/258]`, `aspect-[3/4]`).
- **Opacity** accepts an integer percent: `opacity-28` (not `opacity-[0.28]` or `opacity-[.28]`).
- **Transition duration** accepts a ms integer: `duration-400` (not `duration-[400ms]`).
- **z-index** accepts a bare number: `z-40` (not `z-[40]`).

Keep `[...]` only when no bare value exists — e.g. percentages (`px-[6%]`, `w-[80vw]`, `top-[34%]`), font sizes (`text-[clamp(40px,8vw,96px)]`, `text-[15.5px]`), letter-spacing (`tracking-[4px]`), multi-value gaps (`gap-[26px_20px]`), unitless line-heights (`leading-[2.05]`), gradients/bg-size, arbitrary shadows, and colors not in the palette. Do **not** write bare values with units like `w-200px` or `tracking-4px` — those don't compile.

### Every color comes from the theme — never hardcode hex/rgba

The project is theme-driven: all colors live as `--color-*` tokens in `@theme inline { ... }` in `app/globals.css`. **Never** hardcode a hex (`#c9a227`) or `rgba(...)` literal in JSX, inline styles, or SVG attributes. Always reference tokens, so retheming the whole site is a one-file change in `globals.css` and adding new themes never requires touching components.

- **ClassNames:** use token utilities — `text-gold-light`, `bg-panel`, `border-line-strong`. Use the `/alpha` opacity modifier instead of hand-rolling rgba: `bg-gold/10` (not `bg-[#c9a227]/10`), `text-black/60`.
- **Inline `style={{ ... }}` and inline SVG `stroke`/`fill`** (things Tailwind classes can't target): use the CSS variable directly — `style={{ color: "var(--color-muted)" }}`, `stroke="var(--color-gold)"`. Never `stroke="#c9a227"`.
- **Gradients:** build from tokens — Tailwind class form `bg-linear-to-t from-gold to-ivory`, or inline `linear-gradient(var(--color-gold), transparent)`. For alpha inside a gradient, use `color-mix(in oklab, var(--color-gold) 20%, transparent)`.
- **Arbitrary colors:** no need for `bg-[#050505]`-style arbitrary color values when a token exists. If a color genuinely isn't themed yet, **add a `--color-*` token to `app/globals.css`** and use the token class/variable — don't inline a raw value in markup.

Palette (from `globals.css`): `gold`, `gold-light`, `gold-dim`, `ivory`, `cream`, `muted`, `charcoal`, `panel`, `black`, `line`, `line-strong`.

Note: `@theme inline` bakes token values into generated utilities at build time, which is fine for a single fixed palette. If you later want runtime-switchable themes, tokens will need the standard `@theme` (non-inline) treatment — but because components only reference token classes/vars, no component code changes.

## Other

**ESLint:** Flat config (`eslint.config.mjs`). Uses `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.

**Path alias:** `@/*` maps to project root (e.g. `import { x } from "@/app/..."`).

**Generated files (gitignored):** `.next/`, `next-env.d.ts`, `*.tsbuildinfo`.

**Validation:** Run `npm run lint` for linting and `npm run build` for the production build plus TypeScript validation. There is no test framework or dedicated typecheck script. Keep `next dev` on the Webpack script in `package.json`; this Next.js version has a known Turbopack client-manifest issue in this project.

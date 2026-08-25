# navida

**Stack:** Next.js 16.2.12 / React 19.2.4 / Tailwind CSS v4 / TypeScript (strict) / ESLint v9 (flat config). UI deps: Base UI, shadcn, Embla Carousel, Framer Motion, Lucide React.

**Package manager:** `npm` (lockfile committed).

## Commands

- `npm run dev` — dev server at localhost:3000 (`next dev --webpack`; **do not** switch to Turbopack — 16.2.12 has a React Client Manifest bug in this project).
- `npm run build` — production build (also validates TypeScript via Next.js).
- `npm run lint` — ESLint (`eslint.config.mjs` flat config).
- `npm run start` — serve production build (run `build` first).
- No test framework, no dedicated `typecheck` script.

## App architecture

- RTL Persian marketing site (`lang="fa" dir="rtl"` on `<html>` in `app/layout.tsx`). **All user-facing copy must be Persian unless explicitly told otherwise.**
- `app/page.tsx` (server) renders `app/HomeClient.tsx` (client), which orders: `HomeLoader`, `Hero`, `Projects`, `About`, `Process`, `Services`, `CtaStrip`.
- `app/layout.tsx` renders global `Header` and `Footer`. **Do not render duplicate header/footer in `HomeClient.tsx`.**
- `app/projects/page.tsx` is a separate client route using `useMediaQuery` to pick desktop/mobile project cards from `app/components/projects/`.
- Shared content/constants live in `app/data/content.tsx`; shared types in `app/types.ts`. Project images are local assets under `public/projects/` rendered with `next/image`.
- No server data layer, API routes, or environment-variable contract.

## Adding a home section

1. Create component in `app/components/`.
2. Import and place it in `app/HomeClient.tsx`.
3. Add its navigation link in `app/data/content.tsx` `NAV_LINKS` (consumed by `Header.tsx`).

Home anchors: `#about`, `#services`, `#process`, `#contact`.

## Tailwind v4 rules (enforced for new code)

- Import: `@import "tailwindcss"` in CSS. **No** `@tailwind base/components/utilities`.
- Theme tokens live in `app/globals.css` `@theme inline { ... }`. **Never** hardcode hex/rgba in JSX, inline styles, or SVG attributes.
- Palette tokens: `gold`, `gold-light`, `gold-dim`, `ivory`, `cream`, `muted`, `charcoal`, `panel`, `black`, `line`, `line-strong`.
- Inline styles / SVG strokes: use CSS vars directly, e.g. `style={{ color: "var(--color-muted)" }}`, `stroke="var(--color-gold)"`. For alpha, use `bg-gold/10`, not `rgba(...)`.
- **Bare values, not brackets**, wherever Tailwind v4 supports them:
  - Spacing: `w-50` (not `w-[200px]`), `py-15`, `mt-6.5`, `max-w-175`, `h-150`, `gap-11`. Rule: `px / 4`.
  - Aspect ratio: `aspect-278/258`, `aspect-3/4` (not `aspect-[278/258]` or `aspect-[3/4]`).
  - Opacity: `opacity-28` (not `opacity-[0.28]`).
  - Duration: `duration-400` (not `duration-[400ms]`).
  - z-index: `z-40` (not `z-[40]`).
- Keep `[...]` only when no bare value exists: percentages (`px-[6%]`, `w-[80vw]`), font sizes (`text-[clamp(...)]`), letter-spacing, multi-value gaps, unitless line-heights, gradients, arbitrary shadows, colors not in the palette.
- `@theme inline` bakes tokens at build time. Fine for a fixed palette; runtime themes would need `@theme` (non-inline) later, but components only reference token classes/vars so no component changes would be needed.

## Fonts

- `app/layout.tsx` loads **Vazirmatn** (`--font-vazirmatn`) and **Cormorant Garamond** (`--font-cormorant`).
- Tailwind maps `font-sans` → `--font-vazirmatn`, `font-serif` → `--font-cormorant`.
- **Gotcha:** `Geist` is also loaded and sets `--font-sans` via its variable, which conflicts with Vazirmatn for the same CSS custom property. Do not remove Geist without confirming it is truly unused; if unused, remove the import and its variable from the `<html>` className.

## Existing legacy violations (new code must not repeat)

- `app/data/content.tsx` uses raw hex `#c9a227` in SVG strokes and bracket aspect ratios `aspect-[16/10]`. These are legacy; new code should use theme tokens and bare aspect fractions.

## Other

- Path alias: `@/*` → project root (e.g. `import { cn } from "@/lib/utils"`).
- `cn` utility lives at `lib/utils.ts` (clsx + tailwind-merge).
- ESLint flat config uses `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.
- Generated/gitignored: `.next/`, `next-env.d.ts`, `*.tsbuildinfo`.
- `README.md` is the default create-next-app stub; ignore it for architecture.
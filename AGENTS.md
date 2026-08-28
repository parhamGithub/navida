# Navida — Agent Guide

## Repo Identity

Next.js 16 App Router site (Persian, RTL) — a portfolio/landing page for Navida Engineering & Architecture Group.

## Commands

- `npm run dev` — dev server (uses `--webpack`, not turbopack)
- `npm run lint` — eslint only. No typecheck script exists; no test framework; no CI.
- `npm run build` — production build

## Key Facts

- **Tailwind v4** via `@tailwindcss/postcss`. No `tailwind.config.*`. Custom tokens in `app/globals.css` with `@theme inline`. Do NOT use `tailwind.config` or old `@apply`-based config patterns.
- **shadcn/ui** base-nova style. RTL enabled (`components.json`). UI components in `components/ui/`. Import `cn` from `@/lib/utils`.
- **Two routes**: `/` (server component `page.tsx` → client `HomeClient.tsx`) and `/projects` (server component listing `PROJECTS` from data).
- **Content**: `app/data/content.tsx` holds all copy, nav links, stats, services, projects, footer data. Edit there for text changes.
- **Types**: `app/types.ts` — `Project`, `Service`, `NavLink`, `ProcessStep`, `Stat`, `ContactItem`, etc.
- **Images**: `public/projects/<ProjectName>/` as `.webp`. Referenced in content data by path.
- **Component split**: Page-level components in `app/components/`; shared/reusable UI primitives in `components/ui/`.
- **Path alias**: `@/*` maps to project root (tsconfig).
- **Fonts**: Vazirmatn (Arabic/Persian), Cormorant Garamond (serif/English), Geist — loaded in `layout.tsx` as CSS variables.
- **Custom `cn` utility**: `lib/utils.ts` — `clsx` + `tailwind-merge`.
- **Dark theme**: black/charcoal/gold/cream/ivory palette in `globals.css`.

## Behavioral Rules

1. **Do exactly what the user asks.** No scope expansion, no unrequested refactors, no "while-you're-there" fixes.
2. **Smallest reasonable change.** Prefer targeted edits over rewrites.
3. **Ask before**: architectural decisions, adding/removing deps, changing config, creating abstractions, converting between Server/Client components.
4. **Official docs first**: Next.js, Tailwind, shadcn docs take priority over memory or tutorials.
5. **When in doubt, ask.** Do not guess.
6. **Stop when done.** No extra improvements.
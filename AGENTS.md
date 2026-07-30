<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# navida

**Stack:** Next.js 16.2.12 / React 19.2.4 / Tailwind CSS v4 / TypeScript (strict) / ESLint v9 (flat config)

**Package manager:** `npm` (lockfile committed).

**Commands:**
- `npm run dev` — dev server at localhost:3000 (uses webpack — Turbopack has a React Client Manifest bug in 16.2.12)
- `npm run build` — production build (also runs typecheck via Next.js)
- `npm run lint` — ESLint (`eslint.config.mjs`)
- No dedicated `typecheck` script; `next build` catches TS errors.
- No test framework configured yet.

**Tailwind v4 quirks:**
- Use `@import "tailwindcss"` in CSS, **not** `@tailwind base/components/utilities`.
- Theme tokens defined with `@theme inline { ... }` in CSS, not `tailwind.config.*`.

**ESLint:** Flat config (`eslint.config.mjs`). Uses `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`.

**Path alias:** `@/*` maps to project root (e.g. `import { x } from "@/app/..."`).

**Generated files (gitignored):** `.next/`, `next-env.d.ts`, `*.tsbuildinfo`.

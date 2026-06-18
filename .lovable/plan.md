# Plan: Mobile speed, mobile friendliness, Industries redesign

## 1. Mobile performance

Goal: cut JS, image weight, and main‑thread work so first paint on 4G mobile feels instant.

- **Images**
  - Add `vite-imagetools` and convert `public/als-logo.png` + any hero/section images to **WebP/AVIF** with `?format=avif&format=webp` variants, served via `<picture>`.
  - Run logo through sharp once — current PNG is likely >100KB; target <15KB.
  - Add `loading="lazy"` + `decoding="async"` to every non‑hero `<img>`, and `fetchpriority="high"` + `<link rel="preload">` for the LCP image only.
- **JS bundle**
  - Audit `framer-motion` usage — it's imported in almost every section. Switch heavy decorative animations to CSS where possible; keep `motion` only where layout/gesture is needed.
  - Route‑level **code splitting**: convert page imports in `src/App.tsx` to `React.lazy()` + `<Suspense>` so Home only ships Home's sections.
  - Disable `CursorGlow` on touch devices (it's pure desktop polish and adds runtime cost).
  - Drop `react-helmet-async` Provider re‑mounting per page — keep one in `main.tsx` only.
- **CSS / fonts**
  - Preconnect to Google Fonts and load `Poppins`/`Inter` with `display=swap` and only the weights actually used.
- **Build**
  - Enable Vite `build.cssCodeSplit`, `build.target: 'es2020'`, and `manualChunks` for `react`, `framer-motion`, `lucide-react`.
  - Verify gzip + cache headers in `public/.htaccess` (already added) cover `.webp/.avif`.

## 2. Mobile friendliness

- Audit every section with `useIsMobile` and tighten:
  - Hero: reduce font sizes & vertical padding under `sm:`.
  - Marquee/Stats/Process/Testimonials/Footer: ensure no horizontal overflow (`overflow-x-hidden` on `body`, check absolute‑positioned glows).
  - Header: shrink `Get Consultation` CTA or hide under `sm:` (already hidden), confirm logo size on small screens.
  - Touch targets ≥ 44px on nav links and footer links.
  - Forms on Contact: full‑width inputs, larger tap targets, `inputmode` hints.

## 3. Industries section redesign

Current: simple 2/3/4 grid of glass tiles with hover glow.

New direction (modern, premium, on‑brand lime/dark):
- Replace flat tile grid with a **bento layout** mixing tile sizes — featured industries (Real Estate, Finance, IT & ITES) span 2 cols / 2 rows with subtle illustration or icon, others stay compact.
- Each card: industry icon (lucide), short one‑line value prop, animated lime accent line, hover lifts with parallax glow.
- Background: animated gradient mesh + subtle grid; sticky section heading with eyebrow + gradient text.
- Optional: horizontal auto‑scrolling marquee strip of industry names below the bento for rhythm.
- Motion: stagger‑in on scroll, `whileHover` scale + border shimmer (reuse `shimmer-border` utility).

Because this is a visual refinement, after you approve the plan I'll generate **3 rendered design directions** for the Industries section using the current screenshot, you pick one, then I implement.

## Technical notes

- New deps: `vite-imagetools`, `sharp` (dev).
- Files touched: `vite.config.ts`, `src/App.tsx`, `src/main.tsx`, `src/components/CursorGlow.tsx`, `src/components/Logo.tsx`, `src/components/sections/*.tsx` (mobile polish), `src/components/sections/Industries.tsx` (full redesign), `index.html` (preconnect, preload, font weights), `public/.htaccess` (AVIF/WebP MIME if missing).
- All page `<HelmetProvider>` wrappers removed — provider stays only in `main.tsx`.

## Order of execution

1. Perf wins (lazy routes, image conversion, font trim, motion audit).
2. Mobile responsive polish across sections.
3. Industries redesign — directions → user pick → implement.

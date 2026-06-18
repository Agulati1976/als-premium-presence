# Plan: Migrate to plain Vite + React Router SPA

Heads up: this rips out TanStack Start and the Lovable-managed vite config. The Lovable preview/build pipeline is wired to `@lovable.dev/vite-tanstack-config`, so after this change the in-Lovable preview may stop working or behave differently. You'll still be able to `bun run build` locally and upload `dist/` to cPanel — that's the goal.

## What you get
- Standard `vite build` output: `dist/index.html` + `dist/assets/*`
- Zip `dist/`, upload to cPanel `public_html/`, done.
- `.htaccess` so `/about`, `/contact`, refresh, etc. still work.

## Changes

### 1. Dependencies
- Remove: `@tanstack/react-router`, `@tanstack/react-start`, `@tanstack/router-devtools`, `@lovable.dev/vite-tanstack-config`, `nitro`, related TanStack/start packages.
- Add: `vite`, `@vitejs/plugin-react`, `react-router-dom`.

### 2. New `vite.config.ts`
Plain Vite config with React plugin, `@` alias to `src`, Tailwind v4 plugin kept.

### 3. New entry files
- `index.html` at project root (Vite SPA entry).
- `src/main.tsx` — mounts `<App />` into `#root`.
- `src/App.tsx` — `<BrowserRouter>` with `<Routes>` for all 6 pages + shared layout (Header/Footer).

### 4. Rewrite route files
Convert each `src/routes/*.tsx` from `createFileRoute(...)` to plain React components:
- `src/pages/Index.tsx`
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Industries.tsx`
- `src/pages/WhyUs.tsx`
- `src/pages/Contact.tsx`
- `src/pages/NotFound.tsx`

Page bodies (sections, hero, etc.) stay identical — only the route wrapper changes.

### 5. Update Header/Logo
Replace `@tanstack/react-router` `<Link>` with `react-router-dom` `<Link>` / `NavLink`.

### 6. Delete TanStack-only files
- `src/routes/` (entire directory)
- `src/routeTree.gen.ts`
- `src/router.tsx`
- `src/server.ts`, `src/start.ts`
- `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/lovable-error-reporting.ts` (if TanStack-specific)

### 7. Keep `public/.htaccess`
Already in place — switch it to standard SPA fallback (all unknown routes → `index.html`).

### 8. SEO / `<head>` metadata
Without TanStack's `head()`, per-route metadata needs `react-helmet-async` (add it) or a small `useEffect` that sets `document.title` + meta tags. I'll use `react-helmet-async` — cleaner.

## Deployment
After build:
```
bun run build
# zip dist/ contents → upload to cPanel public_html/
```

## Risk acknowledgment
After this change:
- Lovable's hot preview may break (it expects TanStack Start).
- Future Lovable edits via chat may need extra care since the template is non-standard.
- You'll likely develop/build locally with `bun run dev` and `bun run build`.

Confirm and I'll execute.
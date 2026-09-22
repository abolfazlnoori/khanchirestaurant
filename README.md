# Khanchi

Production website and interactive menu for Khanchi restaurant, with complete Next.js metadata, restaurant/menu structured data, and a standalone Docker deployment.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

The canonical production origin is `https://khanchirestaurant.com`. Deployment variables live in a single `.env.pro` file, created from `.env.pro.example`. The production URL must remain an absolute URL because it is used for canonical links, the sitemap, robots directives, Open Graph metadata, and JSON-LD.

| Variable | Purpose |
| --- | --- |
| `PRO_NEXT_PUBLIC_SITE_URL` | Canonical public origin, without a path |
| `PRO_SITE_ALLOW_INDEXING` | Keep `true` for the public production website |
| `PRO_GOOGLE_SITE_VERIFICATION` | Optional Google Search Console verification token |
| `PRO_APP_VERSION` | Release identifier returned by `/api/health` |

## SEO endpoints

- `/robots.txt` — environment-aware crawler rules
- `/sitemap.xml` — canonical public routes
- `/manifest.webmanifest` — application/site manifest
- `/opengraph-image` — generated 1200×630 social preview
- `/api/health` — container health and release version

Restaurant facts are centralized in `src/lib/site.ts`. Update that file when the address, phone numbers, hours, social profile, or canonical domain changes.

## Production build

```bash
npm run lint
npm run build
npm start
```

The app uses Next.js standalone output, so `.next/standalone` contains the minimal server runtime. `public` and `.next/static` are copied separately by the Docker image.

## Docker deployment

The Docker setup follows the production conventions of the reference frontend, simplified to one `frontend-pro` service. It runs as an unprivileged user, includes a health check, supports a local BuildKit cache, and tags images independently from the container name.

Prepare environment files:

```bash
cp .env.pro.example .env.pro
```

Build and start a versioned production release:

```bash
docker compose --env-file .env.pro build frontend-pro
docker compose --env-file .env.pro up -d frontend-pro
```

For every release, update `PRO_FRONTEND_TAG` and `PRO_APP_VERSION` in `.env.pro` (for example `1.1.0`). The default production binding is `127.0.0.1:3001`, intended to sit behind Nginx, Caddy, or another TLS reverse proxy.

To use the public Docker Hub/Alpine/npm registries instead of the Iran-friendly defaults, override `PRO_NODE_IMAGE`, `PRO_APK_MIRROR`, and `PRO_NPM_REGISTRY` in `.env.pro`.

## Structure

- `src/app` — routes, layouts, and global styles
- `src/components` — reusable UI components
- `src/lib` — shared site facts, SEO schema, utilities, and application logic
- `src/types` — shared TypeScript types
- `public/assets` — supplied images, patterns, and fonts
- `src/app/fonts` — local font files loaded through `next/font/local`

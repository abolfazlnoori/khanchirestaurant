# Khanchi

Responsive landing page for Khanchi restaurant, implemented from the supplied desktop and mobile PDF designs.

## Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Video

The experience section is intentionally rendered as an empty framed placeholder. When the final video is available, replace the placeholder in `src/app/page.tsx` with a `<video>` element and add the optimized source file under `public/assets/video/`.

## Structure

- `src/app` — routes, layouts, and global styles
- `src/components` — reusable UI components
- `src/lib` — shared utilities and application logic
- `src/types` — shared TypeScript types
- `public/assets` — supplied images, patterns, and fonts
- `src/app/fonts` — local font files loaded through `next/font/local`

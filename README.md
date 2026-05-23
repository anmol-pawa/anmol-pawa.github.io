# anmol-pawa.github.io

Source for [anmol-pawa.github.io](https://anmol-pawa.github.io) — my personal portfolio website.

## Stack

- **Next.js 15** (App Router, Turbopack, static export)
- **React 19**
- **Tailwind CSS v4** (Oxide engine)
- **Framer Motion 12** (scroll reveals, page transitions, micro-interactions)
- **lucide-react** (icons)
- **TypeScript 5.7**

Deployed via **GitHub Actions** → **GitHub Pages** on every push to `main`.

## Develop

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
# → ./out (static export, ready for any static host)
```

## Edit content

All site copy lives in [`lib/content.ts`](./lib/content.ts) — single source of truth. Edit there, push, the workflow rebuilds and deploys.

## License

All rights reserved.

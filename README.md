# Jade Collective — Two Site Concepts

This repo holds two independent builds of the Jade Collective site so they
can be compared side by side. They don't share code or dependencies.

## Site 1 — Next.js (repo root)

Boutique multi-talent agency framing, single scrolling page, olive/sage/
terracotta "Japandi Organic" palette, Playfair Display + Inter.

```bash
npm install
npm run dev   # http://localhost:3000
```

## Site 2 — Astro (`v2-astro/`)

Solo-manager-for-micro-creators framing, four separate pages (Home, About,
Services, Contact), bone/ink/jade/clay palette, Fraunces + Inter.

```bash
cd v2-astro
npm install
npm run dev   # http://localhost:4321
```

Run both `dev` commands at once (different ports) to view them side by side.

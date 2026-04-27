# Aurum Keys — Luxury Keyboard Store (Demo)

A **frontend-only** ecommerce-style landing page for a fictional premium mechanical keyboard brand. This project is meant as a portfolio piece: polished UI, interactive filters, and a mock cart counter — no backend, payments, or real inventory.

## Live Demo

Coming soon.

## Video demo

Screen recording of the UI in motion (WebM, committed in this repo):

<video src="public/videos/luxury-keyboard-store.webm" controls playsinline muted width="100%"></video>

If the player does not load in your viewer, open [`public/videos/luxury-keyboard-store.webm`](./public/videos/luxury-keyboard-store.webm) locally or via **Raw** on GitHub.

## Features

- Dark luxury aesthetic with zinc, gold, and blue accents — **atelier / spec-sheet** voice (Outfit + IBM Plex Mono)
- Hero uses build-sheet panels instead of a generic bento; product grid uses sharp borders and underline category tabs
- Category filtering and search over mock product data
- “Add to cart” updates a navbar badge (no persistence)
- Mock cart preview and disabled checkout CTA
- Testimonials, feature cards, and FAQ section
- Placeholder product visuals built from gradients and CSS (no external images)

## Tech Stack

- React
- Vite
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

## Possible Future Improvements

- Connect to a headless CMS for real catalog content
- Add a full cart drawer with line items and quantity controls
- Implement product detail routes and URL-based filters
- Add reduced-motion preferences and deeper accessibility audit

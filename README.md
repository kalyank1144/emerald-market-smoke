# Emerald Market & Smoke

A display-only site for a neighborhood smoke shop. There is no cart, checkout, or payment. Visitors browse the shelf and come to the counter.

## Swap in the real shop

Edit **`src/data/store.ts`**. That file holds:

- Store name, tagline, and about copy
- Phone, email, street address, and map pin (`geo.lat` / `geo.lng`)
- Hours
- Social links
- Categories and every product (name, price, short line, longer note, image path)

Use `"Ask in store"` as the price when you do not want a number on the site. Set `featured: true` on up to four products for the front shelf.

## Photos

Files live in **`public/images/`**. Replace a file and keep the same name, or change the `image` path on that product.

| File | Used for |
| --- | --- |
| `hero.jpg` | Opening banner |
| `storefront.jpg` | Exterior, location section |
| `shelves.jpg` | About section |
| Product files (`pod.jpg`, `beaker.jpg`, …) | Cards and category tiles |

Photos on the demo are original studio stand-ins, not a real shop’s inventory.

## What was borrowed from other shops

The layout mixes patterns from current smoke-shop sites and Apple’s product pages: a permanent 21+ line and a mobile call / directions bar (independent vape themes such as GT Vape), a dark product-first grid (Trendies-style shops and tobacco templates such as Cigarely / Vapehub), a featured row instead of a promo slideshow (Xhale City), category tiles into a filterable shelf, and scroll-scrubbed chapter type with a fading hero (Apple). Amber on near-black is the cigar-counter palette, not neon vape chrome.

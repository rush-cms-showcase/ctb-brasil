# Grupo CTB

Technical documentation for the **Grupo CTB** corporate website. This project is a highly optimized, static-generated website designed to deliver maximum performance, unmatched SEO scores, and layout stability across all devices.

## Tech Stack

- **[Astro v6](https://astro.build/)** - Static Site Generation (SSG) & Performant HTML Output
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS processing with nested keyframe themes
- **Vanilla JavaScript** (No Frameworks) - Native DOM manipulators for interactions, keeping client hydration payload exactly at 0kb.
- **Bun** - Ultra-fast JavaScript runtime and package manager

## Project Structure

```text
src/
├── assets/          # Compressed WebP imagery for optimized rendering
├── components/      # Reusable UI Blocks (Hero, Bento Boxes, Header, Equipment Grid)
├── config/          # Site-wide configurations (site.ts)
├── content/         # Markdown content collections (Serviços e Sobre)
├── data/            # Static JSON data (equipamentos.json)
├── layouts/         # Base HTML structures and browser API protections
├── pages/           # Astro routing definitions (Index, Serviços, Obras, Contato, 404)
└── styles/          # Global CSS tokens and Tailwind integrations
```

## Developer Setup & Commands

```bash
bun install
cp .env.example .env
bun run dev # for dev mode
bun run build
```

## Environment Variables (.env)

The project relies on environment variables to control dynamic content links without recompiling or touching structural code. Ensure these are defined:

- `WHATSAPP_NUMBER`: Format `1238842502` for API linking.
- `PHONE_NUMBER`: Formatted string `(12) 3884-2502` for display.
- `EMAIL`: Contact email address.
- `GOOGLE_MAPS_URL`: Direct link to Google Maps (used in buttons).
- `GOOGLE_MAPS_EMBED_URL`: Embeddable iframe URL (`output=embed` format) for the contact map.
- `WHATSAPP_TEXT`: Pre-filled message for WhatsApp integrators.
- Social URLs: `INSTAGRAM_URL`, `FACEBOOK_URL`.

## Architectural Decisions & Technical Highlights

### Bun Runtime vs Node.js

Bun was selected as the core runtime instead of traditional Node.js to drastically accelerate both the development server startup and the CI/CD pipeline. By utilizing Bun's ultra-fast native package manager and optimized execution engine, dependency installation and static asset bundling times are cut down to a fraction compared to standard npm/yarn + Node environments.

### Data Management & Content Collections

- **Markdown Driven Content:** Expanding the site's footprint is handled purely via Astro Markdown collections (`src/content/servicos/`). Adding a new service involves writing a `.md` file, and Astro SSG automatically generates the route `/servicos/[slug]` with dynamic SEO micro-formatting.
- **Headless Datastore:** Equipment rental items are decoupled into JSON (`src/data/equipamentos.json`), rendering a fully client-side searchable, collapsible grid via Vanilla JS logic.

### Zero-Hydration Principle

Interactive elements (such as the hamburger scroll hooks, equipment filtering mechanisms, and viewport listeners) are exclusively handled through direct DOM manipulation inside the targeted Astro components using Vanilla JS. The project architecture strictly forbids external JS frameworks (React, Alpine, Vue) to guarantee blistering fast TTFB (Time to First Byte).

### Strict Mobile Containment (Webkit iOS Hack)

In `base-layout.astro`, the main application layout is enveloped within a strictly governed `relative overflow-x-hidden w-full` wrapper div, while keeping the `<Header>` directly bounded to the `<body>`.
This mathematically neutralizes an unsolvable native viewport flaw present in iOS Safari and Chrome Mobile, where absolute/transformed descendants forcibly widen the Document width and cause white vertical lateral bars.

### SEO & Schema.org Integration

SEO relies on dynamic JSON-LD injections. The `<BaseLayout>` implements a `<slot name="head" />` to dynamically pipe semantic schemas (like `Organization`, `Service`, `ContactPage`, and `ItemList`) generated inside individual pages into the HTML `<head>`.

### Atomic Design & DRY Arrays

Navigation matrices, statistics arrays, social grids, masonry structures, and contact forms are maintained via strictly typed local configuration arrays (`src/config/site.ts`), heavily utilizing `Array.prototype.map()` to synthesize repeatable HTML structure. This enforces strict SOLID principles. Additionally, the codebase adheres to a zero-comment policy to eliminate visual bloat.

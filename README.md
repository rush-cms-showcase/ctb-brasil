# CTB Brasil

Technical documentation for the **CTB Brasil** corporate website. This project is a highly optimized, static-generated website designed to deliver maximum performance, unmatched SEO scores, and layout stability across all devices.

## Tech Stack

- **[Astro v6](https://astro.build/)** - Static Site Generation (SSG) & Performant HTML Output
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS processing with nested keyframe themes
- **Vanilla JavaScript** (No Frameworks) - Native DOM manipulators for interactions, keeping client hydration payload exactly at 0kb.
- **Bun** - Ultra-fast JavaScript runtime and package manager

## Project Structure

```text
src/
├── assets/          # Compressed WebP imagery for optimized rendering
├── components/      # Reusable UI Blocks (Hero, Bento Boxes, Header)
├── layouts/         # Base HTML structures and browser API protections
├── pages/           # Astro routing definitions (Index, 404)
└── styles/          # Global CSS tokens and Tailwind integrations
```

## Developer Setup & Commands

1. **Install Dependencies:**
   ```bash
   bun install
   ```

2. **Setup Environment:**
   All dynamic contact parameters (phone, email, maps, socials) are injected via Astro environment variables (`import.meta.env`).
   ```bash
   cp .env.example .env
   ```

3. **Start Development Server:**
   ```bash
   bun run dev
   ```

4. **Production Build:**
   ```bash
   bun run build
   ```

## Architectural Decisions & Technical Highlights

### Bun Runtime vs Node.js
Bun was selected as the core runtime instead of traditional Node.js to drastically accelerate both the development server startup and the CI/CD pipeline. By utilizing Bun's ultra-fast native package manager and optimized execution engine, dependency installation and static asset bundling times are cut down to a fraction compared to standard npm/yarn + Node environments.

### Vite Dependency Pre-Optimization
The Astro `dev-toolbar` entrypoint is proactively pushed directly into `optimizeDeps.include`. This config statically resolves an infamous Vite compiler bug (`No Astro CSS at index 0`) that causes catastrophic HMR cache invalidation loops.

### Zero-Hydration Principle
Interactive elements (such as the hamburger scroll hooks and viewport listeners) are exclusively handled through direct DOM manipulation inside `header.astro` using Vanilla JS. The project architecture strictly forbids external JS frameworks (React, Alpine, Vue) to guarantee blistering fast TTFB (Time to First Byte).

### Strict Mobile Containment (Webkit iOS Hack)
In `base-layout.astro`, the main application layout is enveloped within a strictly governed `relative overflow-x-hidden w-full` wrapper div, while keeping the `<Header>` directly bounded to the `<body>`.
This mathematically neutralizes an unsolvable native viewport flaw present in iOS Safari and Chrome Mobile, where absolute/transformed descendants forcibly widen the Document width and cause white vertical lateral bars.

### Atomic Design & DRY Arrays
Navigation matrices, statistics arrays, social grids, and contact forms are maintained via strictly typed local configuration arrays, heavily utilizing `Array.prototype.map()` to synthesize repeatable HTML structure. This enforces strict SOLID principles. Additionally, the codebase adheres to a zero-comment policy to eliminate visual bloat.

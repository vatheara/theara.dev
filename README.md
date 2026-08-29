# theara.dev

Personal portfolio, technical showcase, and product hub for **Theara** (Vatheara) — Founder of [KhmerGPT](https://chat.domnossrai.com/), [FotoFast](https://fotofast.theara.dev), and [Domlai](https://domlai.app). Built with [Astro 7](https://astro.build/) and deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## 🚀 Features & Highlights

- **Astro 7 + Vite**: Zero-runtime JS for static routes with lightning fast page transitions using `@astrojs/cloudflare` & `astro:transitions`.
- **Tailwind CSS v4**: Ultra-fast utility styling via `@tailwindcss/vite`.
- **Interactive Particles**: High-efficiency Canvas particle system with cursor magnetism and lifecycle safety.
- **Spotlight Cards**: Mouse-following radial glow cards inspired by modern high-craft interfaces.
- **Showcase & Filter System**: Interactive filtering for AI / ML tools, SaaS products, and open-source projects.
- **Complete SEO & Open Graph**: Auto-generated `@astrojs/sitemap`, robots.txt, structured JSON-LD schema (Person, WebSite), and high-resolution social preview cards (`og.png`).
- **Accessible & Responsive**: Keyboard navigable, high-contrast dark theme, and mobile-first design.

## 📁 Project Structure

```text
theara.dev/
├── public/
│   ├── assets/logo/          # App logos (KhmerGPT, FotoFast, Domlai)
│   ├── fonts/                # CalSans-SemiBold font
│   ├── _headers              # Cloudflare edge cache & security headers
│   ├── favicon.ico
│   ├── og.png & og.svg       # Social preview assets
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AppItem.astro     # Upgraded app showcase card
│   │   ├── CopyEmail.astro   # Interactive 1-click clipboard copy
│   │   ├── Footer.astro      # Universal footer with live status
│   │   ├── Header.astro      # Floating pill navbar
│   │   ├── Particles.astro   # Canvas particle system
│   │   └── SpotlightCard.astro # Interactive radial glow card
│   ├── data/
│   │   ├── experience.ts     # Career & product journey
│   │   ├── projects.ts       # Rich project definitions
│   │   ├── site.ts           # Site config & author details
│   │   └── skills.ts         # Technical skills & stack
│   ├── layouts/
│   │   └── Layout.astro      # Master layout with SEO & JSON-LD
│   ├── pages/
│   │   ├── about.astro       # About, skills & product journey
│   │   ├── apps.astro        # App showcase with live filters
│   │   ├── contact.astro     # Contact hub & email generator
│   │   ├── index.astro       # Hero landing page
│   │   └── projects.astro    # Projects route
│   ├── styles/
│   │   └── globals.css       # Tailwind v4 theme & keyframes
│   └── types/
│       └── index.ts          # TypeScript interfaces
└── astro.config.mjs
```

## 🛠️ Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production

```bash
npm run build
```

The output static files and edge assets will be generated in `dist/client/`.

### 4. Preview Production Build Locally

```bash
npm run preview
```

## 🌐 Cloudflare Pages Deployment

Deploy directly via Wrangler CLI:

```bash
# Production deploy
npm run deploy

# Preview branch deploy
npm run deploy:preview
```

## 📄 License

Licensed under the [MIT License](./LICENSE).
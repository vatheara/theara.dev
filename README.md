# theara.dev

Personal portfolio and showcase of AI-powered applications built with [Astro 7](https://astro.build/) and deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

## 🚀 Tech Stack

- **Framework**: [Astro 7](https://astro.build/) (Latest)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) via `@astrojs/cloudflare` v14 & Wrangler v4
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **UI & Animations**: Interactive Canvas Particles, CSS Keyframe Glow & Fade animations
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

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

The output files will be generated in `dist/client/`.

### 4. Preview Production Build Locally

```bash
npm run preview
```

## 🌐 Cloudflare Pages Deployment

### Option 1: Direct Wrangler CLI Deployment

You can deploy directly to Cloudflare Pages using the npm scripts:

```bash
# Login to Cloudflare (one-time setup)
npx wrangler login

# Deploy to production
npm run deploy

# Or deploy to preview branch
npm run deploy:preview
```

### Option 2: Connect via Cloudflare Dashboard (Git Integration)

1. Go to **Cloudflare Dashboard** > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository (`theara.dev`).
3. Set the build configuration:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/client`
4. Click **Save and Deploy**.

### Option 3: GitHub Actions (Automated CI/CD)

The repository includes a ready-to-use GitHub Actions workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

Add the following GitHub Secrets to your repository (`Settings` > `Secrets and variables` > `Actions`):
- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token with Pages edit permissions
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID

Every push to `main` will automatically build and deploy the latest version to Cloudflare Pages.

## 📄 License

Licensed under the [MIT License](./LICENSE).
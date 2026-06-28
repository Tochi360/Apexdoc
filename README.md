# Apex Document Management Services — Marketing Site

Cinematic premium single-page marketing website for Apex Document Management Services, built with Next.js, TypeScript, Tailwind CSS v4, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Import [github.com/Tochi360/Apexdoc](https://github.com/Tochi360/Apexdoc) on [vercel.com/new](https://vercel.com/new)
2. Use these settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (leave blank / default)
   - **Build Command:** `npm run build`
   - **Output Directory:** leave **empty** (do not set `out` or `.next`)
   - **Install Command:** `npm install`
3. Deploy

If you see a Vercel `404: NOT_FOUND` page, the build likely failed or the output directory is misconfigured. Check **Deployments → latest → Build Logs** in the Vercel dashboard.

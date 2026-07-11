# Nishwan S — Portfolio

A premium, fully responsive developer portfolio built with **Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion**. Dark/light mode, glassmorphism, an animated neural-network hero, and every section from the brief: About, Education, Skills, Projects, Experience, Certifications, Hackathons, GitHub stats, LeetCode, Services, Achievements, Testimonials, and a working Contact form.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animation
- **next-themes** for dark/light mode
- **react-hook-form** for the contact form
- **lucide-react** + **react-icons** (brand icons) for iconography
- Self-hosted fonts via `@fontsource` (Space Grotesk, Inter, JetBrains Mono) — no external font requests at runtime

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Editing your content

Everything text-based lives in **one file**: `src/lib/data.ts`. Update your name, roles, summary, education, skills, projects, experience, certifications, hackathons, services, achievements, testimonials, and social links there — the whole site re-renders from it.

### Things to swap before you launch

| What | Where | Notes |
|---|---|---|
| Résumé PDF | `public/resume.pdf` | Replace the placeholder file with your real résumé. |
| Contact form endpoint | `src/components/Contact.tsx` → `FORMSPREE_ENDPOINT` | Create a free form at formspree.io and paste your endpoint. (Swap for EmailJS if you prefer — the form UI is already wired to `onSubmit`.) |
| GitHub username | `src/lib/data.ts` → `githubUsername` | Powers the GitHub stats cards and profile link. |
| LeetCode username | `src/lib/data.ts` → `leetcodeUsername` | Powers the LeetCode section link. |
| Social links & email | `src/lib/data.ts` → `profile.social`, `profile.email` | |
| Open Graph image | `public/og-image.png` | Add a 1200×630 image for link previews. |
| Favicon / PWA icons | `public/favicon.ico`, `public/icon-192.png`, `public/icon-512.png` | Referenced in `layout.tsx` and `manifest.json`. |
| Site URL | `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` | Replace `https://nishwan.dev` with your real domain once deployed. |
| Analytics | `src/app/layout.tsx` | `@vercel/analytics` is installed — add `<Analytics />` from `@vercel/analytics/next` once deployed on Vercel. |

## Project structure

```
src/
  app/
    layout.tsx      -> fonts, metadata, SEO, OG tags
    page.tsx        -> assembles every section in order
    globals.css      -> design tokens (colors, glass, gradient text), dark/light theme
    sitemap.ts / robots.ts
  components/         -> one component per section (Hero, About, Skills, Projects, ...)
  lib/
    data.ts           -> all site content
    utils.ts          -> cn() className helper
public/
  manifest.json       -> PWA manifest
  resume.pdf          -> placeholder, replace with the real file
```

## Design notes

- **Palette**: deep-space navy/near-black in dark mode with a violet -> cyan signature gradient; a clean off-white in light mode. Chosen to read as "applied AI / engineering" rather than a generic dark portfolio.
- **Type**: Space Grotesk for display headings, Inter for body copy, JetBrains Mono for labels, tags, and the typing-effect role rotator.
- **Signature element**: an animated, cursor-reactive neural-network canvas behind the hero — nodes and connecting edges, evoking AI without leaning on a stock icon.
- Respects `prefers-reduced-motion` throughout (canvas, typing effect, counters, page transitions all degrade gracefully).

## Deployment (Vercel — recommended)

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected). No extra build config needed.
4. Click **Deploy**. Vercel builds and hosts it — you'll get a `*.vercel.app` URL, with the option to attach a custom domain in Project Settings -> Domains.
5. Update `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts` with your real domain, then redeploy.

### Alternative: Netlify

1. Push to GitHub.
2. app.netlify.com/start -> import repo.
3. Build command: `npm run build`. Netlify auto-detects the Next.js runtime plugin.

## SEO checklist already handled

- Per-page `<title>` / meta description via the Metadata API
- Open Graph + Twitter card tags
- `sitemap.xml` and `robots.txt` generated as Next.js routes
- Semantic headings and alt text throughout
- Fast, self-hosted fonts (no render-blocking third-party font requests)

## What's stubbed (by design — needs your real accounts)

- **Contact form** — needs a real Formspree (or EmailJS) key to actually send mail.
- **GitHub stats / LeetCode cards** — pull from github-readme-stats/badge services using the usernames in `data.ts`; point them at your real handles.
- **Resume, OG image, favicons** — placeholder files; drop your real assets in `public/`.
- **Testimonials** — placeholder quotes; replace with real ones once you have them.

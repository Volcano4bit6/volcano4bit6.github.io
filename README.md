# volcano4bit6.github.io

Personal portfolio & blog of **Than Van Hong Son** — AI Engineer.
Live at **https://volcano4bit6.github.io**

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). Dark Tech aesthetic, bilingual (EN / VI), Markdown blog, auto-deployed to GitHub Pages via GitHub Actions.

## Tech
- **Astro 6** static site, zero-JS by default (islands only for the theme toggle & scroll reveals)
- **Tailwind v4** design tokens (`src/styles/global.css`)
- **i18n**: EN at `/`, VI at `/vi/` (`src/i18n/`)
- **Content Collections** for the blog (`src/content/blog/<lang>/*.mdx`)
- CV data is typed in `src/data/*` — single source of truth for every section

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output -> dist/
npm run preview    # preview the production build
npx astro check    # type / template diagnostics
```

## Add a blog post
Create a Markdown/MDX file under the right language folder:

```
src/content/blog/en/my-post.mdx    # English
src/content/blog/vi/bai-viet.mdx   # Vietnamese
```

Frontmatter:
```yaml
---
title: 'My post title'
description: 'One-line summary used on cards and meta tags.'
pubDate: 2026-06-15
tags: ['LLM', 'MLOps']
lang: 'en'        # 'en' or 'vi'
draft: false      # drafts are hidden in production, visible in dev
# heroImage: ../../assets/posts/cover.jpg   # optional
---
```

Commit and push to `main` — GitHub Actions rebuilds and redeploys automatically.

## Update the CV / content
- Edit the typed data in `src/data/` (experience, publications, skills, education, awards, profile).
- Replace the downloadable CV at `public/resume/Than-Van-Hong-Son-CV.pdf`.
- Add a profile photo at `src/assets/profile.jpg` (the About section currently shows a monogram placeholder).

## Deployment
GitHub Pages is configured to build from GitHub Actions (`.github/workflows/deploy.yml`).
This is a **user site** served at the root domain, so `astro.config.mjs` sets `site` but **no `base`**.

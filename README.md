# aminulloh.github.io

Personal portfolio website for **Luthfi Aminulloh** — founder of PT Aminulloh Service Technology, building in Indonesia's EV aftersales space.

Built with Next.js 15, Tailwind CSS v4, Contentlayer, and Framer Motion. Designed with a Linear.app + Apple aesthetic.

Live: [aminulloh.com](https://aminulloh.com)

---

## Tech Stack

|                |                                                              |
| -------------- | ------------------------------------------------------------ |
| **Framework**  | Next.js 15 (App Router, React Server Components)             |
| **Styling**    | Tailwind CSS v4, custom `@theme` tokens, Inter font          |
| **Content**    | Contentlayer2 + MDX (blog posts, author metadata)            |
| **Animation**  | Framer Motion (`framer-motion@^12.38.0`)                     |
| **Deployment** | GitHub Pages via GitHub Actions (`npm ci` + `npm run build`) |

---

## Project Structure

```
app/
  layout.tsx            Root layout — Inter font, Header, Footer
  page.tsx              Home page entry point
  Main.tsx              Home: renders AuthorLayout + Latest Writing grid
  blog/                 Blog list and post pages
  projects/             Projects page
layouts/
  AuthorLayout.tsx      ★ Main homepage component (all sections live here)
  PostLayout.tsx        Blog post template
  ListLayoutWithTags.tsx Blog list with tag sidebar
components/
  AnimatedHeadline.tsx  Word-by-word stagger ("Engineer. Strategist. Leader.")
  ExperienceCarousel.tsx Direction-aware slide carousel for track record
  ProjectHighlights.tsx  Scroll-triggered stagger grid for project cards
  Header, Footer, Card, Tag, SocialIcon, ThemeSwitch, etc.
data/
  authors/default.mdx   Profile metadata — frontmatter only, no body content
  blog/                 MDX blog posts
  projectsData.ts       Projects page entries
  headerNavLinks.ts     Navigation menu items
  siteMetadata.js       Site-wide config (URL, social links, analytics)
css/
  tailwind.css          @theme color tokens, global styles, nav animations
public/static/
  images/avatar.png     Profile photo (recommended: 600×800px, 3:4 portrait)
  favicons/             favicon.ico and all platform sizes
.github/workflows/
  pages.yml             CI/CD — builds with npm and deploys to GitHub Pages
```

---

## Getting Started

```bash
npm install
npm run dev        # starts on :3001 by default
```

Open [http://localhost:3001](http://localhost:3001).

> **Use `npm` only.** The repo has a `yarn.lock` but do not run `yarn install` — Yarn Berry 3.6.1 is configured but its lockfile is out of sync and will fail. CI uses `npm ci`.

---

## Common Edits

All homepage content is hardcoded in `layouts/AuthorLayout.tsx` as TypeScript arrays/objects — not pulled from MDX or a CMS. Edit that file directly.

### Homepage sections

| Section                      | What to edit                                                 |
| ---------------------------- | ------------------------------------------------------------ |
| Hero copy, CTAs              | `layouts/AuthorLayout.tsx` — JSX at the top of the component |
| What I'm Building            | `venture` object in `layouts/AuthorLayout.tsx`               |
| What I Bring (value pillars) | `valuePillars` array in `layouts/AuthorLayout.tsx`           |
| Project highlights           | `projectHighlights` array in `layouts/AuthorLayout.tsx`      |
| Track record / experience    | `experiences` array in `layouts/AuthorLayout.tsx`            |
| Skills & Expertise           | `skillGroups` array in `layouts/AuthorLayout.tsx`            |

> Do NOT edit `data/authors/default.mdx` for experience or education — it holds frontmatter metadata only (name, avatar, email, social links).

### Other content

**Profile photo** → replace `public/static/images/avatar.png` (600×800px recommended)

**Projects page** → edit `data/projectsData.ts`

**Navigation links** → edit `data/headerNavLinks.ts`

**Site metadata** (title, URL, social links, analytics ID) → edit `data/siteMetadata.js`

**Colors / font** → edit `css/tailwind.css` under `@theme`

### Blog posts

Create `data/blog/your-slug.mdx`:

```md
---
title: 'Post Title'
date: '2025-01-01'
tags: ['ev', 'strategy']
draft: false
summary: 'One sentence shown in the post list.'
---

Post body here.
```

Set `draft: true` to hide a post without deleting it.

---

## Build & Deploy

```bash
npm run build      # production build + RSS feed + search index
```

The site auto-deploys to GitHub Pages on every push to `main` via `.github/workflows/pages.yml`.

### Prettier / Tailwind class ordering

ESLint enforces Tailwind class order via `prettier-plugin-tailwindcss`. Violations **do not** appear during `npm run dev` — they only surface during `npm run build` and will fail CI.

Always run Prettier before committing any file with Tailwind classes:

```bash
npx prettier --write <file>
```

Common triggers:

- State/responsive variants (`dark:`, `sm:`, `group-hover:`) placed before base utilities
- `line-clamp-*` before spacing utilities like `mb-*`
- Transition utilities out of sequence

If CI fails with exit code 1 and no obvious runtime error, check Prettier class ordering first.

### Base-path build (subdirectory hosting)

```bash
EXPORT=1 UNOPTIMIZED=1 BASE_PATH=/subpath npm run build
```

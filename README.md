# aminulloh.github.io

Personal portfolio website for Luthfi Aminulloh — built with Next.js, Tailwind CSS, and Contentlayer. Designed with a Linear.app + Apple aesthetic, positioning Luthfi as the founder of PT Aminulloh Service Technology building in Indonesia's EV aftersales space.

Live: [aminulloh.com](https://aminulloh.com)

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + Inter font
- **Content**: Contentlayer + MDX
- **Deployment**: GitHub Pages (via GitHub Actions)

---

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Home page entry
│   ├── Main.tsx          # Home page content (AuthorLayout + Latest Writing)
│   └── layout.tsx        # Root layout (font, analytics, header/footer)
├── layouts/
│   └── AuthorLayout.tsx  # Hero, venture, value props, projects, track record, skills
├── components/
│   ├── AnimatedHeadline.tsx   # Word-by-word stagger animation ("Engineer. Strategist. Leader.")
│   ├── ExperienceCarousel.tsx # Slide carousel for track record entries
│   └── ProjectHighlights.tsx  # Scroll-triggered stagger grid for project cards
├── data/
│   ├── authors/
│   │   └── default.mdx   # Profile metadata (frontmatter only — no body content)
│   ├── blog/             # MDX blog posts
│   ├── projectsData.ts   # Projects page data
│   ├── headerNavLinks.ts # Navigation links
│   └── siteMetadata.js   # Site-wide config (URL, analytics, social links)
├── components/           # Shared UI components
├── css/
│   └── tailwind.css      # Theme tokens (colors, font), global styles
└── public/static/        # Images, favicons
```

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Common Edits

**Update the venture/building section**
→ Edit the `venture` object in `layouts/AuthorLayout.tsx`

**Update track record (work experience)**
→ Edit the `experiences` array in `layouts/AuthorLayout.tsx`
→ Do NOT edit `data/authors/default.mdx` for this — it holds frontmatter metadata only

**Update project highlights**
→ Edit the `projectHighlights` array in `layouts/AuthorLayout.tsx`
→ For the full projects page, edit `data/projectsData.ts`

**Update hero copy, value pillars, or skills**
→ Edit `layouts/AuthorLayout.tsx`

**Update profile photo**
→ Replace `public/static/images/avatar.png` — recommended size: 600×800px (3:4 portrait)

**Add or edit a blog post**
→ Create a `.mdx` file in `data/blog/` with this frontmatter:

```md
---
title: 'Post Title'
date: '2025-01-01'
tags: ['tag1', 'tag2']
draft: false
summary: 'Short description shown in the post list.'
---
```

**Update projects**
→ Edit `data/projectsData.ts`

**Update navigation links**
→ Edit `data/headerNavLinks.ts`

**Update site metadata** (title, description, social URLs, analytics)
→ Edit `data/siteMetadata.js`

**Update colors or font**
→ Edit `css/tailwind.css` — primary palette is defined under `@theme`

---

## Build & Deploy

Production build:

```bash
npm run build
```

The site deploys automatically to GitHub Pages on push to `main` via `.github/workflows/pages.yml`.

**Note:** Tailwind class ordering is enforced by Prettier at build time but not during `npm run dev`. If CI fails with exit code 1 and no obvious error, run `npx prettier --write <file>` to auto-fix class order before pushing.

To deploy with a custom base path (e.g. for subdirectory hosting):

```bash
EXPORT=1 UNOPTIMIZED=1 BASE_PATH=/subpath npm run build
```

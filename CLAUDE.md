# CLAUDE.md — aminulloh.github.io

Personal portfolio website for **Luthfi Aminulloh**.

## Purpose & Goal

This is NOT a generic blog template. It is a **founder credibility portfolio** for Luthfi Aminulloh, who is building **PT Aminulloh Service Technology** — tackling fragmentation in Indonesia's EV aftersales ecosystem.

Primary goal: attract **investors, business partners, and co-founders**. Secondary: signal domain expertise to any hiring manager who visits.

Every design and content decision should reinforce:
- Founder credibility: "I've lived this problem for 5+ years as an operator"
- Domain authority in EV aftersales (Indonesia market)
- Execution and ownership mindset

Target audience: early-stage investors, strategic partners in EV fleet operations, potential co-founders.

---

## Tech Stack

- **Next.js 15** — App Router, React Server Components
- **Tailwind CSS v4** — utility-first, custom `@theme` tokens in `css/tailwind.css`
- **Contentlayer2** — MDX content management (blog posts, author profile)
- **Inter** — primary font (via `next/font/google`, CSS var `--font-inter`)
- **Pliny** — analytics, search (kbar), comments (giscus), newsletter (buttondown)

---

## Design System

**Aesthetic: Linear.app + Apple**
- Clean, minimal, structured, premium
- Generous whitespace, strong visual hierarchy
- Light mode primary; dark mode fully supported

**Colors** (defined in `css/tailwind.css` under `@theme`):
- Primary: blue palette (`--color-primary-*`) — professional, subtle
- Gray: neutral scale for text and borders
- Violet + emerald: secondary accents (status badges, code syntax if used)

**Animation rule:** Minimal only — subtle hover transitions (150ms), no parallax, no heavy effects.

**Do not** introduce teal/cyan as the primary color — it was replaced with blue intentionally.
**Do not** add code-aesthetic elements (syntax-colored JSX blocks, `// comment` headers) to the main portfolio sections — they conflict with the Linear/Apple direction.

---

## Project Structure

```
app/
  layout.tsx          — root layout, Inter font, Header + Footer
  page.tsx            — home page (renders Main.tsx)
  Main.tsx            — home: AuthorLayout + Latest Writing card grid
  blog/               — blog list and post pages
  projects/           — projects page
layouts/
  AuthorLayout.tsx    — MAIN COMPONENT: all homepage sections (see below)
  PostLayout.tsx      — blog post template
  ListLayoutWithTags.tsx — blog list with tag sidebar
components/
  AnimatedHeadline.tsx   — 'use client'; word-by-word stagger ("Engineer. Strategist. Leader.")
  ExperienceCarousel.tsx — 'use client'; direction-aware slide carousel for track record
  ProjectHighlights.tsx  — 'use client'; whileInView stagger grid for project cards
  Header, Footer, Card, Tag, SocialIcon, etc.
data/
  authors/default.mdx — profile metadata only (frontmatter); no body content
  blog/               — MDX blog posts
  projectsData.ts     — projects page entries
  headerNavLinks.ts   — nav menu items
  siteMetadata.js     — site-wide config (URL, socials, analytics)
css/
  tailwind.css        — @theme tokens, global styles, nav animations
public/static/
  images/avatar.png   — profile photo (recommended: 600×800px portrait)
  favicons/           — favicon.ico + all platform sizes
```

---

## Key Files to Know

### `layouts/AuthorLayout.tsx`

The main homepage layout. All structured sections live here as hardcoded TypeScript arrays and React components.

**Section order:**
1. **Hero** — founder framing copy, portrait photo (left, `md:w-72 md:h-full`), one-line credential, CTAs ("See What I'm Building" / "Track Record" / "Let's Talk")
2. **What I'm Building** (`id="building"`) — `venture` object: PT Aminulloh Service Technology, problem/insight/currently-exploring, inline contact CTA
3. **What I Bring** — 4 value pillar cards (Systems Thinking, Product Mindset, Business Acumen, Execution & Ownership)
4. **Projects** — `projectHighlights` array rendered via `<ProjectHighlights>` with scroll-triggered stagger
5. **Track Record** (`id="experience"`) — `experiences` array rendered via `<ExperienceCarousel>` with slide animation
6. **Skills & Expertise** — `skillGroups` array, 4-column grid

**Removed:** Education section (was 2-card grid). Credential folded into hero as a single `<p>` line.

**No stats row. No Leadership & Management Readiness section. No standalone Education section.**

Hardcoded copy in this file is intentional — it is strategic founder positioning copy, not generic template text.

### `data/authors/default.mdx`

Contains **frontmatter only** — name, avatar, email, and social links. The body is empty.

Experience and education content has been moved to structured arrays in `AuthorLayout.tsx`. Do not add prose content back to this file.

### `app/Main.tsx`

Renders `AuthorLayout` + the **Latest Writing** section. Writing is displayed as a **3-column card grid** (not a list). Each card uses the same box style as other sections: type label (first tag, accent color) → title → summary → date + Read →.

### `data/siteMetadata.js`

Controls site title, URL, social links, analytics (Umami via `NEXT_UMAMI_ID` env var), comments (Giscus via env vars), search (kbar), newsletter (Buttondown).

---

## Commands

```bash
npm run dev      # development server (usually starts on :3000 or :3001)
npm run build    # production build + post-build (RSS, search index)
```

The project uses ESLint with strict Prettier rules including **Tailwind class ordering**. Run Prettier before committing:

```bash
npx prettier --write <file>
```

Or it will fail the build with `prettier/prettier` ESLint errors.

**Critical:** Tailwind class order violations do NOT show up locally in `npm run dev`. They only surface during `npm run build` (ESLint type-check step). This means a build can look fine locally but fail CI.

The safest workflow when writing new Tailwind classes:
1. Write the classes in any order
2. Run `npx prettier --write <file>` to auto-sort them
3. Then commit

Common patterns that trigger ordering errors:
- Responsive/state variants (`group-hover:`, `dark:`, `sm:`) placed before base utilities
- `line-clamp-*` placed before spacing utilities like `mb-*`
- Transition utilities placed out of sequence

When CI fails with exit code 1 and no visible runtime error, check `prettier/prettier` class ordering first.

---

## Content Guidelines

**Adding a blog post** — create `data/blog/your-post.mdx`:
```md
---
title: 'Post Title'
date: '2025-01-01'
tags: ['ev', 'strategy']
draft: false
summary: 'One sentence shown in the post list.'
---
```

**Updating the venture section** — edit the `venture` object in `layouts/AuthorLayout.tsx`.

**Updating track record** — edit the `experiences` array in `layouts/AuthorLayout.tsx`. Do not edit `data/authors/default.mdx` — it only holds frontmatter metadata.

**Updating project highlights** — edit the `projectHighlights` array in `layouts/AuthorLayout.tsx`. For the full projects page, edit `data/projectsData.ts`.

**Updating hero copy, value pillars, or skills** — edit `layouts/AuthorLayout.tsx` directly (hardcoded arrays/JSX).

**Adding a project** — edit `data/projectsData.ts`. Each entry needs `title`, `description`, and optionally `imgSrc` + `href`. Frame projects around: problem → role → decisions → impact.

---

## Deployment

Auto-deploys to **GitHub Pages** on push to `main` via `.github/workflows/pages.yml`.

Custom domain: `aminulloh.com` (configured via CNAME / GitHub Pages settings).

For a base-path build:
```bash
EXPORT=1 UNOPTIMIZED=1 BASE_PATH=/subpath npm run build
```

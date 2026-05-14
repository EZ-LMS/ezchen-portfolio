# EZ Chen — Personal Portfolio

Personal portfolio at [ezchen.vercel.app](https://ezchen.vercel.app).

Built with [Astro](https://astro.build) + Tailwind CSS, deployed on Vercel.

---

## Day-to-day: adding a project

You can do this entirely in the GitHub web UI — no local setup needed.

1. Go to [`src/content/projects`](./src/content/projects)
2. Click **Add file → Create new file**
3. Name it like `my-project.md`
4. Paste this template and edit the values:

   ```markdown
   ---
   title: "Project Name"
   description: "One-line description shown on the card"
   year: 2026
   tech: ["TypeScript", "React"]
   demoUrl: "https://my-project.vercel.app"
   repoUrl: "https://github.com/EZ-LMS/my-project"
   thumbnail: "/images/projects/my-project.png"
   order: 0
   ---

   Optional longer write-up here (currently unused on the card,
   reserved for a future per-project detail page).
   ```

5. Upload the thumbnail (1200×630 PNG/JPG works well) to
   [`public/images/projects/`](./public/images/projects)
6. Commit. Vercel auto-deploys in about 30 seconds.

### Removing a project

Delete the `.md` file. The card is gone next deploy.

### Reordering

`order` is sorted ascending — lower number = appears earlier.
Common pattern: set new ones to `0` and bump the rest.

### Hiding without deleting

Set `featured: false` in the frontmatter. The project stays in the repo
but doesn't appear on the site.

---

## Updating other content

| What | Where |
|---|---|
| Name, tagline, intro paragraphs, nav, social links | `src/data/site.ts` |
| Experience entries | `src/data/experience.ts` |
| Education entries | `src/data/education.ts` |
| Colors, fonts, layout sizing | `src/styles/global.css` (`@theme` block) |
| Hero/about photos | `public/images/hero.svg`, `public/images/about-baseball.svg` |

---

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # production build → ./dist
npm run preview      # preview the production build
```

Node 22+ required.

---

## Project structure

```
ezchen-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero.svg                # headshot
│       ├── about-baseball.svg      # baseball photo
│       └── projects/               # project thumbnails
├── src/
│   ├── components/                 # one .astro file per section
│   ├── content/
│   │   └── projects/               # one .md file per project
│   ├── data/                       # site.ts, experience.ts, education.ts
│   ├── layouts/BaseLayout.astro    # HTML shell + meta tags
│   ├── pages/index.astro           # single-page composition
│   ├── styles/global.css           # palette + typography
│   └── content.config.ts           # projects collection schema
├── astro.config.mjs
└── package.json
```

---

## Deployment

Pushes to `main` deploy automatically to Vercel.

To set up from scratch:

1. Create a new GitHub repo (e.g. `EZ-LMS/ezchen-portfolio`)
2. Push the code
3. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo
4. Astro preset is auto-detected; click **Deploy**
5. In the Vercel project settings, set the project name to `ezchen` so the
   production URL becomes `ezchen.vercel.app`

To add a custom domain (e.g. `ezchen.me`, `ezchen.com`) later:
Vercel project → **Settings → Domains → Add** → follow DNS instructions.

---

## License

Personal site — content © EZ Chen. Code structure free to fork.

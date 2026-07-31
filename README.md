# Jash Popat — Portfolio (React)

A React + Vite rebuild of the portfolio site, using React Router for
multi-page navigation (Home, Studies & Work, Projects, Extracurriculars,
Contact).

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL it prints (usually `http://localhost:5173`).

## Project structure

```
src/
  components/   Nav, Footer, PathCrumb — shared across pages
  pages/        Home, StudiesAndWork, Projects, Extracurriculars, Contact
  style.css     Shared design system (colors, type, layout)
  App.jsx       Route definitions
  main.jsx      Entry point
```

Edit content directly in the files under `src/pages/` — most page
content lives in small data arrays at the top of each file, so adding
or editing an entry (e.g. a new project, a new internship) doesn't
require touching any markup.

Placeholder boxes (`[ logo: ... ]`, `[ screenshot: ... ]`) mark where
real images should go — swap them for `<img src="..." />` tags once
you have the assets. Put image files in `public/` and reference them
as `/your-image.png`.

## Deploying to GitHub Pages (jashpopat.github.io)

This repo already includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys automatically
on every push to `main`. To enable it:

1. Push this project to your `jashpopat.github.io` repository
   (replacing the old static files).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**
   (instead of "Deploy from a branch").
4. Push to `main` — the workflow builds the site and deploys it
   automatically. Check the **Actions** tab to watch progress.
5. Your site will be live at `https://jashpopat.github.io` a minute or
   two after the workflow finishes.

Every future push to `main` re-deploys automatically — no manual
build step needed.

### Manual build (optional)

If you ever want to build locally instead of relying on Actions:

```bash
npm run build
```

This outputs static files to `dist/`, which is what actually gets
deployed.

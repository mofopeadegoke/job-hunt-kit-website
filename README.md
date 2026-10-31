# Uncooked website

The job market's cooked. You don't have to be.

This is the website for Uncooked, a free and open source Claude Code plugin that fixes how your resume reads to applicant tracking systems (ATS) and tailors it to each job, using only what's true.

The plugin itself lives at [mofopeadegoke/job-hunt-kit](https://github.com/mofopeadegoke/job-hunt-kit). It's being renamed from Job Hunt Kit, so the install command and GitHub links on the site still use the old name for now.

## Run it locally

You need Node.js 22.12 or later.

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

The site is built with [Astro](https://astro.build) as static pages and is meant to be hosted on Vercel. It has no analytics.

## Where things are

- `src/pages/`: Home, See an Example, Get Started, Honesty Rules, Research & Evals, and the 404 page
- `src/data/site.js`: the install command, GitHub links, and the Jane Doe demo content
- `src/styles/global.css`: all the styles
- `PRODUCT.md`: who the site is for and what it may claim
- `DESIGN.md`: the design system

The Jane Doe demo is output from the plugin's `ats-optimize` skill on fictional fixtures. To change it, re-run the skill rather than editing the text by hand.

## License

No license has been added to this website repo yet. The plugin is MIT licensed.

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, deployed on Vercel. Static output. Starts on the free Vercel address (`job-hunt-kit.vercel.app` if available); no custom domain yet. No analytics at launch.

## Users

Primary: people already using Claude Code who are job hunting and want a resume tailored to a posting without overclaiming. They arrive from GitHub, or from a post or recommendation, and decide quickly whether this is worth installing.

Secondary: job seekers new to Claude Code. They need a clear "New to Claude Code?" path that explains what it is and what setup involves, without turning the main pitch into a tutorial.

## Product Purpose

Uncooked is a Claude Code plugin that helps people get more interviews without exaggerating anything. It tailors a resume (LaTeX, PDF or Word) to a job posting so applicant tracking systems read it correctly and match it to the role, using only facts the user has confirmed. It returns a LaTeX file to compile in Overleaf, says plainly when a job is a long shot, and keeps an application log with follow-ups and honest stats.

The website succeeds when visitors, in this order: install the plugin, star the GitHub repo, and send criticism as GitHub issues.

## Positioning

The problem comes first: many talented people are rejected without a real chance because recruiters now use ATS software to speed up hiring, and that software can misread or bury a strong resume. Daniel tested resume parsers (OpenResume, Affinda) to learn which layouts and formats represent a person accurately, then built tailoring on those findings, so the plugin rearranges what is true to show the best of the person. Home must make this problem and benefit clear at a glance, with technical detail moved to other pages.

The plugin refuses to invent. It rewords, reorders, cuts and moves, but adds nothing absent from the user's `facts.md`, cites the fact behind every change, reports unsupported requirements as Missing, and stops on knockouts such as visa or location. Tools that promise a better resume by any means cannot truthfully claim this.

## Operating Context

Used inside Claude Code from a profile folder holding the resume and `facts.md`. Each job produces `applications/<date>-<company>-<role>/` with a tailored `resume.tex` and `report.html`. The PDF is made in Overleaf. The `track` skill keeps `applications.csv`.

Install command: `/plugin install job-hunt-kit --marketplace mofopeadegoke/job-hunt-kit`

## Capabilities and Constraints

- Skills: `ats-optimize` and `track`, plus a session-start follow-up reminder.
- Report statuses: On resume, Reworded, Moved higher, Added from facts, Partial match, Missing.
- Tested in Claude Code. Cowork and claude.ai chat are expected but not yet tested; never imply otherwise.
- Needs Python 3 and Claude Code v2.1.275 or later. Poppler recommended. LaTeX engine and LibreOffice optional.
- The plugin has no server and no analytics. It is free and open source (MIT); show this clearly. Claude Code itself needs a paid Claude plan or Console account, and the site must say so.
- Pages: Home, See an Example (the Jane Doe demo), Get Started (including "New to Claude Code?"), Honesty Rules, Research & Evals.
- Open decision, parked for later: letting visitors test the plugin on their own resume on the site. It needs a backend and would change the site's privacy story. Changelog only once it has a real dated entry.
- Calls to action, ranked: install (primary), star on GitHub (secondary, no star count shown for now), send criticism through pre-filled GitHub issue links (near the end of the page and in the footer).
- Issue links must warn that GitHub issues are public and not to paste resume or personal details.

## Brand Commitments

- Name: Uncooked.
- Credit: "Built by Daniel Adegoke", linking to https://github.com/mofopeadegoke.
- Voice: direct, plain, practical, no hype. The README's voice is the reference.
- Tone reference: the disciplined developer feel of https://www.aihero.dev/skills, with more visual impact. The site must stand out but stay clean: restrained colour, with one strong idea rather than loud styling. Use a different layout and identity, and do not read as an AI Hero product.

## Evidence on Hand

- README evals: Claude Sonnet, 3 runs each, identical checks. Good match (Pollen) 0.96 vs 0.50 for plain Claude. Stretch AI role (Relay) 0.95 vs 0.50. Plain Claude attached "4+ years" to TypeScript in every run, left freelance work under Projects, and never warned about the shortfall.
- 11 eval cases and 103 unit tests.
- Parser research in the plugin repo, `research/findings.md`, covering pdftotext, OpenResume and Affinda.
- Fixtures in the plugin repo: fictional candidate Jane Doe (`fixtures/jane-doe/`). The homepage demo must be real plugin output on Jane Doe, labelled as a fictional candidate and job. No saved `report.html` exists yet, so it must be generated.

Absent, do not fabricate: testimonials, customer or user counts, the maker's own job results (to be added once real), and a plugin release date.

## Product Principles

1. The site follows the plugin's honesty rules: no claim beyond what the evidence supports.
2. Show real output rather than describing it.
3. Say the limits out loud, including what is untested.
4. Respect the reader's time: install is always close at hand.
5. Invite criticism openly; being checked is part of the product.

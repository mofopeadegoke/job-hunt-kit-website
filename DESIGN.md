---
name: Uncooked
description: A white, ruled grid where plain evidence sits on paper plates.
colors:
  green: "#1c6b4f"
  green-wash: "#e3f1eb"
  ink: "#101316"
  ink-2: "#565c63"
  line: "#e7e9eb"
  paper: "#ffffff"
  wash: "#f6f7f7"
  line-on-ink: "#ffffff1a"
  well-on-ink: "#ffffff14"
typography:
  display-hero:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline-page:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline-section:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 2.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  title-list:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  body-sm:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.4
  code:
    fontFamily: "Geist Mono Variable, ui-monospace, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.45
rounded:
  none: "0px"
spacing:
  cell: "min(calc((100vw - 1rem) / var(--cols)), 2.75rem)"
  field-band: "calc(var(--c) * 3)"
  plate: "calc(var(--c) * 1.25)"
  band: "clamp(4.5rem, 9vw, 7.5rem)"
  section: "clamp(3rem, 6vw, 5rem)"
components:
  install-command:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.code}"
    rounded: "{rounded.none}"
    padding: "0.8rem 0.9rem"
  install-command-on-ink:
    backgroundColor: "{colors.well-on-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.8rem 0.9rem"
  button-copy:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 0.9rem"
    width: "5.25rem"
  button-copy-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.paper}"
  button-copy-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.plate}"
  before-after-plate:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  before-after-result:
    textColor: "{colors.green}"
  change-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
  change-panel-after:
    backgroundColor: "{colors.green-wash}"
    textColor: "{colors.ink}"
    padding: "1.5rem"
  requirement-row:
    textColor: "{colors.ink}"
    padding: "0.7rem 0.5rem"
  requirement-row-hover:
    backgroundColor: "{colors.wash}"
  requirement-row-selected:
    backgroundColor: "{colors.green-wash}"
  resume-line-highlight:
    backgroundColor: "{colors.green-wash}"
    textColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.ink-2}"
    typography: "{typography.body-sm}"
  nav-link-hover:
    textColor: "{colors.ink}"
  code-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.code}"
    rounded: "{rounded.none}"
    padding: "0.8rem 0.9rem"
  close-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "{spacing.field-band}"
---

# Design System: Uncooked

## Overview

**Creative North Star: "The Ruled Ledger"**

The system works like a ledger someone could audit. A faint square grid is the ground, and on it sit paper plates holding plain evidence: large real headlines, before-and-after results, a resume shown line by line. Weight comes from type and 1px ink rules, never from ornament. The grid sets the unit for columns and plate sizes, so the page reads as measured rather than decorated. The visual language makes the same promise as the product: what is shown can be checked.

The mood is disciplined, plain and technical, with one strong idea doing the visual work. White ground, near-black ink, and a single green held back for moments of status. Density is relaxed in the reading bands and tighter where real output is shown. Type is Geist throughout, set tight and heavy at large sizes, with Geist Mono reserved for things a person could copy or check.

Motion is scarce. The signature interaction links a requirement to the resume lines that answer it, and state changes use one long-tailed ease and finish quickly. Nothing animates on load. With reduced motion requested, in-page scrolling jumps instead of gliding.

**Key Characteristics:**
- A visible square grid sets the unit for columns, plate sizes and band padding.
- Large real type carries impact, on paper, beside bordered evidence.
- Status marks are square: filled, green, half-filled or striped.
- Near-black, white and one green, with no secondary accent.
- Square corners and 1px ink rules in place of cards and shadows.
- One deliberate inversion: the closing band turns to an ink ground.

## Colors

A monochrome ink-on-white palette with a single restrained green that signals status and interaction.

### Primary
- **Confirmed Green** (#1c6b4f): The one accent. It colors a good result in a before-and-after table, marks the "Added from facts" status, and serves as link hover, Copy button hover, and the focus ring. Text on it and it on white both reach 6.4:1.
- **Status Tint** (#e3f1eb): Green's pale companion, and it serves status emphasis only. It backs the selected requirement row, the resume lines that answer it, and the "After" side of a change panel. Ink reaches 16:1 on it and secondary ink 5.8:1.

### Neutral
- **Ledger Ink** (#101316): Primary text, every structural rule, filled status marks, command blocks, and the closing band's ground. Also the selection color and scrollbar thumb.
- **Muted Ink** (#565c63): Leads, secondary copy, "before" values, and idle nav links. Holds 6.8:1 on white.
- **Grid Line** (#e7e9eb): The grid field and quiet row dividers inside a ruled list.
- **Paper** (#ffffff): The ground and every plate that sits on the grid.
- **Wash** (#f6f7f7): Row hover.
- **Grid Line on Ink** (#ffffff1a): The grid drawn on the closing band, swapped in by redefining the line token inside that band.
- **Command Well on Ink** (#ffffff14): The install command's ground in the closing band, a slight lift off the ink.

### Named Rules
**The One Green Rule.** Green means status or interaction. It is never a section ground, a heading color, or decoration.

**The Tint Is Status Rule.** The green tint (#e3f1eb) marks the requirement in focus, the resume lines that answer it, and the improved side of a before-and-after. When the selected requirement is Missing, the row drops the tint for stripes, because nothing was confirmed.

**The Deliberate Inversion Rule.** The closing band's ink ground is a deliberate inversion of the world, and it happens once, at the end of a page, on the final install prompt. The grid continues on it at low opacity, links turn paper, and the focus ring turns paper. Everything else stays on white.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist Variable (with ui-sans-serif, system-ui, sans-serif)
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, Consolas, monospace)

**Character:** One self-hosted neo-grotesque family does all the talking, tight and semibold at scale and calm at reading size, while its mono partner marks the literal strings. Numerals are tabular everywhere, so scores and dates align.

### Hierarchy
- **Display Hero** (600, clamp(2.75rem, 6vw, 5.5rem), 1): The home page's h1 and the largest thing on the site. It is real text.
- **Display** (600, clamp(2.5rem, 7vw, 5.5rem), 1.05): The closing band's prompt only.
- **Headline Page** (600, clamp(2.25rem, 5vw, 4.25rem), 1.03): Inner page titles, capped at 18ch.
- **Headline** (600, clamp(2rem, 4.4vw, 3.5rem), 1.05): Band headings, capped at 20ch.
- **Headline Section** (600, clamp(1.625rem, 2.6vw, 2.25rem), 1.05): Section headings on inner reading pages. The hero's evidence plate uses this size at line-height 1.1.
- **Title List** (600, clamp(1.25rem, 2.2vw, 1.75rem), 1.15): Entries in ruled lists, such as rule names and issue links. The home page's problem rows run a step larger, up to 2rem.
- **Title** (600, 1.375rem, 1.25): Standard third-level headings.
- **Lead** (400, clamp(1.125rem, 1.6vw, 1.375rem), 1.45): The paragraph under a heading, in Muted Ink, capped at 44rem.
- **Body** (400, 1.0625rem, 1.6): Running text, capped at 42rem in prose.
- **Body Small** (400, 0.9375rem, 1.4): Nav, tables, notes, footer, and status detail.
- **Code** (500, 0.8125rem, 1.45): Install commands and code blocks. The hero's command drops to 0.75rem, and fact IDs use 0.8125rem at regular weight.

### Named Rules
**The Mono Is Evidence Rule.** Geist Mono is for strings a reader could copy or look up: commands, file names, fact IDs. It is never a stylistic label voice.

**The Real Type Rule.** The largest thing on a page is a real heading in Geist. Impact comes from size and tight setting, not from drawn or image lettering.

## Layout

The unit is the cell: the viewport divided into 36 columns (32 at 1100px and below), capped at 44px square. Content sits in a measure of 32 cells on wide screens and 29 at 1100px and below, centred. Grid bands pad by 3 cells. Reading bands pad by clamp(4.5rem, 9vw, 7.5rem), a quieter band by clamp(3.5rem, 7vw, 5.5rem), and inner page sections by clamp(3rem, 6vw, 5rem). At 720px and below the visible grid doubles to 2-cell squares so it stays quiet on a phone.

The hero divides that measure 17 to 14 with a one-cell gap, which lands both columns on whole cells: real type on a paper ground at left, the bordered evidence plate at right, stretched to equal height. The columns stack at 1100px and below.

Bands stack full width, divided by a 1px ink rule. Lists are ruled rows rather than card grids: an ink rule on top, Grid Line between entries, usually two columns that collapse to one at 860px or 760px. Sequences use three columns gapped by one cell, each opened by an ink rule. Inner pages use a 1fr / 2fr split of heading and prose that collapses at 860px.

The demo pairs a requirement list with a sticky resume sheet, 7fr to 8fr, gapped by one cell. At 960px and below the columns stack and the sheet docks to the bottom of the viewport at 42vh, so a selection and its answer stay visible together.

### Named Rules
**The Cell Snap Rule.** Sizes on the grid are whole cells. Plates, the requirement box and source notes round their height up to a whole number of cells at runtime, so their edges land on grid lines.

**The Plate Rule.** Text on the light grid sits on a paper plate, bordered or not, so grid lines never run behind reading copy. The inverted closing band is the exception: its grid is faint enough at 10% white to carry text directly.

## Elevation & Depth

The system is flat. Depth comes from paper plates laid over the grid and from 1px ink rules. Nothing lifts on hover.

### Shadow Vocabulary
- **Docked sheet** (`box-shadow: 0 -10px 24px #10131614`): The resume sheet when it docks over the page at 960px and below. It separates a surface that truly overlaps moving content.
- **Control outline** (`box-shadow: inset 0 0 0 1px var(--ink)`): The Copy button's outline, a border in effect.
- **Highlight bleed** (`box-shadow: 0 0 0 2px var(--green-wash)`): Extends the tint 2px around a highlighted resume line so wrapped text does not touch its edge.

### Named Rules
**The Flat Sheet Rule.** A blurred shadow appears only when a surface overlaps scrolling content. Plates at rest have a rule, never a shadow.

## Shapes

Every corner is square (0px). Forms are rectangles and 1px ink outlines. Diagonal stripes are the one texture, drawn with hard-stop gradients at two scales: the 14px status mark, and the wide 2px-on-9px field behind a "Not on this resume" notice or a selected Missing row. The grid itself is drawn the same way.

### Named Rules
**The Mark Meaning Rule.** Shape carries meaning. A filled mark is on the resume, half-filled is a partial match, green is added from facts, and striped is Missing. Stripes appear only where something is absent.

**The Square Rule.** Radius is 0px on everything, with no exception for buttons or inputs.

## Components

### Install Command
Blunt and always within reach. This is the primary action.
- **Shape:** A square-cornered ink block holding the command in mono, with the Copy button attached to its right edge.
- **Copy button:** Paper fill, ink text, 600 weight at 0.9375rem, 1px ink outline, 5.25rem minimum width.
- **Hover / Active:** Green fill with paper text on hover, ink fill on press, over 0.2s. The label changes to "Copied", or to "Selected" when the clipboard is unavailable, and the change is announced to screen readers.
- **On ink:** In the closing band the block uses the Command Well color and the command grows to 0.9375rem.

### Plates
Paper laid on the grid.
- **Corner Style:** Square (0px).
- **Background:** Paper over the grid field.
- **Shadow Strategy:** None.
- **Border:** 1px Ledger Ink.
- **Internal Padding:** 1.25 cells, reduced to 1.5rem by 1.75rem in page headers.

The requirement box follows the same recipe. Hero copy and plain notes on the grid use paper with no border.

### Before-and-After Evidence
The signature. A measured result shown side by side, with its source stated.
- **Evidence table:** A bordered paper plate, one cell of padding, holding a short heading and a table of Before and After columns. Before values stay in Muted Ink. After values are green at 600. A small source line closes the plate.
- **Change panel:** Two joined panes inside a 1px ink outline with an ink divider, stacking at 860px. The Before pane is paper, the After pane is Status Tint. Each has a small bold label over a large sentence, clamp(1.125rem, 1.8vw, 1.5rem).
- **Honesty:** Every instance names its source or says it is fictional, in a note beside it.

### Navigation
- **Style:** A sticky paper bar with a 1px ink base, 4rem minimum height. Wordmark at 700 on the left, page links pushed right, Star on GitHub last at 600.
- **States:** Links rest in Muted Ink and turn ink with an underline on hover or when current.
- **Mobile:** At 720px and below the links wrap to a full-width row at 0.875rem.

### Links
- **Style:** Inherit text color, with a 1px underline offset 0.2em. Green on hover. On the ink band they stay paper and the underline thickens to 2px.
- **Issue links:** Large ruled rows that indent by one cell on hover over 0.3s.

### Ruled Lists and Steps
- **Ruled rows:** Title on the left, Muted Ink explanation on the right, an ink rule on top and Grid Line between rows.
- **Steps:** Three columns, each with an ink top rule, a numeral at 600, a title and a short explanation. The numerals are currently green, which falls outside The One Green Rule, so don't extend that treatment.

### Requirement List
The left half of the demo.
- **Row:** A status mark, the name at 600, then the status in bold with detail in Body Small. Fact IDs are in mono.
- **States:** Wash on hover over 0.2s, Status Tint when selected. A selected Missing row shows wide stripes instead.
- **Marks:** 14px outlined squares that are filled, green, half-filled or striped. Marks are decorative, so the status word always appears in text.

### Resume Sheet
A faithful miniature of real output, and it follows a resume's conventions rather than the site's.
- **Style:** 1px ink outline, paper ground, 0.875rem at 1.45. The name is centred and section headings are small uppercase with an ink rule, as on a resume. Both are confined to this replica.
- **Highlight:** Lines answering the selection take the Status Tint over 0.25s, and the sheet scrolls to the first one. If no line answers, the striped "Not on this resume" notice appears at the top.

### Code Blocks and Tables
- **Code blocks:** Ink ground, paper mono text, wrapping long lines rather than overflowing.
- **Tables:** Body Small, left-aligned with no fills, an ink rule under the header, and Grid Line between rows. Small tables become stacked rows at 640px and below.

## Do's and Don'ts

### Do:
- **Do** size and place things on grid-field surfaces in whole cells, and let the cell (44px at most) set the rhythm.
- **Do** put reading text on a paper plate whenever it sits on the light grid.
- **Do** keep status marks paired with the status word in text.
- **Do** make the largest thing on a page a real heading.
- **Do** show a measured before and after, with its source named, rather than describing a benefit.
- **Do** hold the Copy command close to hand, using the ink install block as the strongest control on a surface.
- **Do** use 1px Ledger Ink for structure and Grid Line for dividers within a list.
- **Do** respect reduced motion: scrolling jumps instead of gliding.

### Don't:
- **Don't** center a headline over a row of boxed cards. Headings stay left-aligned on the grid.
- **Don't** add a second accent or use green as decoration or a section ground.
- **Don't** use stripes for anything other than absence.
- **Don't** use the green tint for anything but status emphasis.
- **Don't** add border radius or give plates a shadow.
- **Don't** use soft or multi-stop gradients. Hard-stop gradients exist only to draw the grid, the stripes, and the half mark.
- **Don't** use small uppercase labels or kickers above headings. Uppercase belongs to the resume replica.
- **Don't** invert a band to ink anywhere other than the closing install prompt.
- **Don't** set prose in Geist Mono.

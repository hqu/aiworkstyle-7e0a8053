# aiworkstyle.com — Style, Voice & Site Plan

A friendly, editorial site that helps curious professionals understand how AI quietly makes them more capable. Think *The Atlantic* meets a thoughtful product blog — calm, confident, human.

## Voice & tone

**Personality:** A smart, generous friend who happens to know AI well. Encouraging, never hype-y. Plain-spoken but never dumbed-down.

**Rules of the voice**
- Short sentences. Strong verbs. No buzzwords ("synergy," "revolutionize," "unlock potential").
- Address the reader as "you." Use "we" sparingly.
- Lead with the human outcome, then the tool. ("Write a sharper memo in 10 minutes" — not "Leverage LLMs for document drafting.")
- Replace jargon with examples. If you must use a term ("prompt," "agent," "context window"), define it inline.
- Optimism with honesty: acknowledge friction, limits, and judgment calls. Never doom, never magic.
- Concrete > abstract. Every claim earns its keep with a story, number, or before/after.

**Sample headlines in this voice**
- "AI won't take your job. It will take your busywork."
- "The new literacy is knowing what to ask."
- "A quieter inbox, by Thursday."

## Visual style

**Palette — Paper & Ink**
- Background `#f5f3ee` (warm paper)
- Surface `#e8e4dd` (soft tint for cards/quotes)
- Ink `#2d2d2d` (body)
- Deep ink `#0d0d0d` (headings, rules)
- One restrained accent for links/CTAs (proposed: ink underline on hover; no neon)

**Typography**
- Display: **DM Serif Display** — large, confident headlines with personality
- Body: **Fira Sans** — clean, highly readable, slightly technical edge
- Generous line-height (1.6–1.7 body), wide measure (~68ch), tight tracking on display

**Layout & feel**
- Editorial, single-column hero with oversized serif headline
- Magazine-style article pages: drop caps, pull quotes, hairline rules
- Lots of whitespace; let pages breathe
- Subtle motion only: fade-up on scroll, no parallax, no bouncy springs
- No stock photos of robots or glowing brains. Illustrations or simple diagrams instead.

## Site structure (proposed)

```
/                    Home — manifesto + featured essays
/essays              Long-form writing on AI + work
/essays/[slug]       Individual essay
/playbook            Practical guides ("Use AI to…")
/about               Who's behind the site, the POV
```

- Each route is its own file with unique title + meta + OG tags.
- Home leads with a one-line manifesto, then 3 featured pieces, then a short "Start here" trio.
- Essays are the heart of the site; Playbook is shorter, recipe-style how-tos.

## Pillar content suggestions

1. **The new literacy** — why asking good questions is the core skill.
2. **AI as a thinking partner** — drafting, critiquing, exploring.
3. **Reclaim your calendar** — concrete time-back wins.
4. **Capabilities you didn't have last year** — coding, design, research for non-specialists.
5. **What AI still can't do** — honest limits, human judgment.

## What I'll build first (when you switch to build mode)

1. Update root metadata (title, description, OG/Twitter) for aiworkstyle.com.
2. Load DM Serif Display + Fira Sans via `@fontsource` and wire into `@theme` in `src/styles.css`.
3. Replace Paper & Ink tokens in `src/styles.css` (oklch).
4. Build `/` as an editorial homepage: manifesto hero, 3 featured essay cards, "Start here" trio, simple footer.
5. Add `/essays`, `/essays/$slug` (with 2–3 seed essays), `/playbook`, `/about` routes, each with its own metadata.
6. Subtle fade-up scroll motion; semantic HTML; single H1 per page.

## Technical notes

- TanStack Start file-based routes under `src/routes/`; each route owns its `head()` meta.
- Tokens in `src/styles.css` using oklch under `:root` mapped via `@theme inline`.
- Fonts via `@fontsource/dm-serif-display` and `@fontsource/fira-sans`, imported in `src/start.ts` or root.
- No backend needed yet — essays as MDX or typed TS data to start. We can add Lovable Cloud later if you want a CMS, newsletter signup, or comments.

## Open questions (optional — happy to default)

- Do you want a newsletter signup on the homepage? (Adds Lovable Cloud.)
- Any existing logo / wordmark, or should "aiworkstyle" be set in DM Serif Display as the mark?
- Do you have 1–2 essays already drafted, or should I seed placeholder articles in your voice?

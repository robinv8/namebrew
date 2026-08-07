---
name: indie-naming
description: >
  Craft short, memorable project/product names in the style of indie open-source
  developers (tw93, charmbracelet, louislam, sharkdp, antfu). Produces scored
  name tables, product-line families, and logo-ready imagery notes — not
  corporate SaaS brand decks. Use when the user wants project naming, product
  naming, open-source naming, indie naming, repo/package names, 起名, 项目名,
  产品命名, or runs /indie-naming. Prefer this over generic brand-name generators
  when the vibe is personal tools, CLI, desktop utilities, or solo/small-team OSS.
metadata:
  short-description: "Indie OSS project naming (tw93-style)"
---

# Indie Naming

Generate **personal-developer** project names: short, speakable, drawable, optionally
family-consistent. Model after makers like tw93, charmbracelet, louislam, sharkdp,
jesseduffield, antfu — **not** enterprise brand systems (Looka / Namelix corporate tone).

Load `references/naming-patterns.md` for the pattern catalog and exemplar tables.
Load `references/anti-patterns.md` when the user keeps picking weak names.

Respond in the **user's language** for the final write-up, but keep internal school
codes (A–H), install ids, and image prompts in English.

## When to use

- New OSS repo, CLI, desktop utility, agent skill, library, or side project
- User wants a **name set** (candidates + rationale), not a single random word
- Optional: names that also feed logo / emoji / app-icon generation

## Inputs (ask only what's missing)

Collect before generating. Skip fields already known.

1. **Intent** — one sentence: what it does, for whom
2. **Surface** — CLI / library / desktop app / web / agent skill / multi
3. **Language** — short English / pinyin / Japanese-reading feel / mixed OK
4. **Tone** — pick 1–2: practical minimal | cute animal | cultural word | lazy humor | hardcore abbrev | everyday object
5. **Constraints** — must-include / avoid words; npm/pip/gh handle needs; max syllables
6. **Family** — standalone vs product line (e.g. Kaku–Waza–Kami)

If intent is vague, ask **one** clarifying question, then proceed with stated assumptions.

## Core principles

1. **Short wins** — prefer 1–3 syllables; hard cap 4 unless a cultural phrase earns it
2. **Speakable** — easy in English and, when relevant, Mandarin speech; no awkward clusters
3. **Drawable** — every strong candidate maps to a simple icon/emoji (animal, object, glyph)
4. **Story in one line** — name ↔ product link explainable in ≤12 words
5. **Not corporate** — reject InventedSaaS (Lyra, Nexlify, Syncora), forced vowels, `-ify`/`-ly` spam
6. **Installable** — lowercase, no spaces; hyphens only when idiomatic (`open-webui` style)
7. **Family optional** — multi-product lines share a linguistic world, not prefix spam

## Naming schools (pick 1–2 per batch)

| School | Pattern | Exemplars | Best for |
|--------|---------|-----------|----------|
| A Cultural short | JP/CN word or reading | Kami, Kaku, Waza, kuma, yabai | Metaphor-driven tools |
| B Animal / nature | Creature or plant | Mole, bat, kitty, llama, Maple | CLI, cleaners, mascots |
| C Life object / verb | Everyday noun or verb | gum, vhs, glow, just, dive, melt | TUI, small utilities |
| D Lazy humor | Joke + function | lazygit, k9s, noice | Devtools with personality |
| E Ultra-short | 1–3 letters / 2 syllables | ni, fd, fnm, Noi, Kap, Mos | Power-user CLI/libs |
| F Pinyin brand | 2–3 syllable pinyin | yazi, MiaoYan | CN-origin products |
| G Domain compound | Clear function blend | firecrawl, dayjs, zoxide | Need instant meaning |
| H Nickname | Spoken diminutive | Maccy, heynote, aider | Desktop / personal apps |

Default mix for a general tool: **A + B + C + E** (8–12 names).  
If the user likes tw93: weight **A + B + F**.  
If Rust/Go CLI: weight **C + E + B**.

## Process

### 1. Frame

Show briefly:

```text
Intent: …
Surface: …
Tone schools: …
Hard constraints: …
```

### 2. Diverge

Generate **16–24** raw candidates across chosen schools.  
For each: `name | school | one-line story | drawable cue | install id`.

### 3. Converge (score)

Score 1–5 on each dimension:

| Dimension | 5 means |
|-----------|---------|
| Length | ≤2 syllables, clean spelling |
| Speak | No ambiguity in EN (and CN if relevant) |
| Fit | Story matches intent |
| Draw | Obvious simple icon |
| Available-ish | Unlikely collision with famous projects (best-effort; flag manual check) |
| Install | Good package / binary name |

Keep **top 8–12**. Drop corporate, unreadable, or undrawable options.

### 4. Families (optional)

If the user wants a line (or ≥2 related tools), propose **1–2 mini-families** of 3 names sharing a world, e.g.:

- JP verb/noun set (write / craft / paper readings)
- `lazy*` set
- animal set under one author brand

### 5. Deliver

Use this structure (localize section titles only if the user writes in another language):

```markdown
## Direction
[1–2 sentences: schools chosen and why]

## Top 5
| Name | Reading | School | One-line story | Icon cue | Install id |
|------|---------|--------|----------------|----------|------------|

## Other candidates
[table or bullets of 5–7]

## Product line (if any)
[family + how names relate]

## Manual checks
- [ ] Search GitHub / crates.io / npm / PyPI
- [ ] Domain / social handles (if needed)
- [ ] Trademark skim (if commercial)

## Logo / image prompts (optional)
One English image prompt each for Top 3 (flat app icon, 2 colors, drawable cue)
```

### 6. Logo handoff (only if asked)

Do **not** generate images unless the user asks. Provide prompts:

```text
Simple app icon for indie open-source tool "[NAME]".
[drawable cue], flat vector, max 2 colors, rounded square,
personal Mac-utility feel, not corporate SaaS, white background, no long text.
```

Style buckets: geometric lettermark | animal silhouette | object glyph | abstracted cultural symbol.

## Quality bar (reject list)

Reject or rewrite if:

- Sounds like a YC batch generator (vowel-consonant brand salad)
- More than 4 syllables without a strong cultural reason
- Needs a paragraph to explain the pun
- Collides with household OSS (react, vue, redis, ollama, …) — call out and replace
- Unreadable pinyin pile or awkward English clusters
- Pure feature sentence as a name, unless Demo-first and the user wants that school (`screenshot-to-code`)

## Collaboration style

- Concise; tables over prose
- Give **options with tradeoffs**, not one true name
- Prefer installable short names over poetic long titles
- After the user picks a name, offer tagline, README H1, emoji badge, icon brief — **only on request**

## Few-shot reasoning

**Intent:** Mac terminal cleaner for leftover app files.  
**Strong:** Mole (animal digs/cleans), Dust, Gomi (JP trash).  
**Weak:** CleanMasterPro, MacNexlify, AppResidueRemover.

**Intent:** Pack any URL into a tiny desktop app.  
**Strong:** Pake (pack), Wrap, Shell.  
**Weak:** Web2Desktopify, ElectronLiteApp.

**Intent:** AI coding terminal.  
**Strong:** Kaku (write), Glow, Aide.  
**Weak:** SuperAICodeTerminal, CodePilotX.

## References

- Pattern catalog and exemplar developers: `references/naming-patterns.md`
- Reject patterns: `references/anti-patterns.md`

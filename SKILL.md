---
name: namebrew
description: >
  Brew short, memorable project/product names in the style of indie open-source
  developers (tw93, charmbracelet, louislam, sharkdp, antfu). Produces scored
  name tables with live collision checks, product-line families, and logo-ready
  imagery notes — not corporate SaaS brand decks. Use when the user wants project
  naming, product naming, open-source naming, indie naming, repo/package names,
  起名, 项目名, 产品命名, or runs /namebrew. Prefer this over generic brand-name
  generators when the vibe is personal tools, CLI, desktop utilities, or
  solo/small-team OSS.
metadata:
  short-description: "Brew short indie OSS project names"
---

# Namebrew

**Namebrew** generates **personal-developer** project names: short, speakable, drawable,
optionally family-consistent. Model after makers like tw93, charmbracelet, louislam,
sharkdp, jesseduffield, antfu — **not** enterprise brand systems (Looka / Namelix
corporate tone).

Load `references/naming-patterns.md` for the pattern catalog and exemplar tables.
Load `references/anti-patterns.md` when the user keeps picking weak names.
Load `references/collision-check.md` for live availability checks.

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
8. **Search before you ship** — do **not** recommend Top names on memory alone; run live collision checks (web + GitHub + registries)

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

Score 1–5 on each dimension (Availability starts as a **pre-check estimate** only):

| Dimension | 5 means |
|-----------|---------|
| Length | ≤2 syllables, clean spelling |
| Speak | No ambiguity in EN (and CN if relevant) |
| Fit | Story matches intent |
| Draw | Obvious simple icon |
| Availability | Later: filled from live search (step 4) |
| Install | Good package / binary name |

Keep a **shortlist of 10–16** quality names. Drop corporate, unreadable, or undrawable options.  
Do **not** finalize Top 5 until step 4 finishes.

### 4. Collision search (required)

**Always** run live checks before presenting Top recommendations. Memory/recall is not enough.

For each shortlist name (at least the top ~6–8 contenders — every Top 5 candidate must be fully checked), check:

| Check | How (prefer tools) | Hard fail if |
|-------|--------------------|--------------|
| **GitHub** | `gh search repos "<name>" --limit 10` and/or `gh api search/repositories?q=<name>+in:name` | Same/near-exact repo name with meaningful stars (≥~500) or famous owner in the same domain |
| **Web** | Web search: `"<name>"` open source / CLI / app / npm | Established product, SaaS, or well-known OSS with that exact brand |
| **npm** (if JS/TS likely) | `npm view <name> name` or registry search | Package exists with real downloads / same idea |
| **PyPI** (if Python likely) | `pip index versions <name>` or pypi.org search | Same |
| **crates.io** (if Rust likely) | crates.io search / `cargo search <name>` | Same |
| **Domain** (optional, if product/site) | Whois or search `<name>.dev` / `.com` mention | Skip unless user cares; note only |

Parallelize tool calls when possible. Use install id (lowercase) for registry checks.

#### Verdict labels (use these exact words)

| Label | Meaning |
|-------|---------|
| **Clear** | No meaningful collision found in checks run |
| **Crowded** | Name is a common word or many weak hits; usable with distinct positioning |
| **Taken** | Active project/product/package with same or confusingly similar name |
| **Risky** | Famous brand / trademark-adjacent; do not recommend for Top |

#### Ranking rules after search

1. Prefer **Clear** over **Crowded** over **Taken**
2. **Taken** or **Risky** → drop from Top 5 (may list under “Avoid / already used” with links)
3. If too many fail, **diverge again** (step 2) with alternate spellings or school shifts, then re-check
4. Be honest: short dictionary words are often **Crowded**, not truly free — say so
5. This is **not** legal trademark clearance; say “best-effort search” once in the deliverable
6. In **Collision notes**, state which checks actually ran for each Top name; a Top name with no checks listed is an invalid deliverable

Details and commands: `references/collision-check.md`.

### 5. Families (optional)

If the user wants a line (or ≥2 related tools), propose **1–2 mini-families** of 3 names sharing a world, e.g.:

- JP verb/noun set (write / craft / paper readings)
- `lazy*` set
- animal set under one author brand

Only use family members that passed collision search (Clear or acceptable Crowded).

### 6. Deliver

Use this structure (localize section titles only if the user writes in another language):

```markdown
## Direction
[1–2 sentences: schools chosen and why]

## Top 5
| Name | Reading | School | One-line story | Icon cue | Install id | Availability |
|------|---------|--------|----------------|----------|------------|--------------|
| … | … | … | … | … | … | Clear / Crowded |

## Collision notes
Brief per Top name: what was checked + notable hits (repo/url if any). Cite search results when available.

## Other candidates
[Clear/Crowded only; table of 5–7]

## Avoid / already used
| Name | Why | Evidence |
|------|-----|----------|
| … | Taken / Risky | link or package |

## Product line (if any)
[family + how names relate]

## Still verify manually
- [ ] Domain / social handles (if needed)
- [ ] Trademark skim (if commercial)
- [ ] Org-specific registry you use

## Logo / image prompts (optional)
One English image prompt each for Top 3 (flat app icon, 2 colors, drawable cue)
```

### 7. Logo handoff (only if asked)

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
- **Top 5 was built without live collision search** — invalid deliverable; go back to step 4

## Collaboration style

- Concise; tables over prose
- Give **options with tradeoffs**, not one true name
- Prefer installable short names over poetic long titles
- Always show **Availability** and evidence for Top picks
- After the user picks a name, offer tagline, README H1, emoji badge, icon brief — **only on request**

## Few-shot reasoning

These show strong/weak *shape*, not availability: **Mole** and **Pake** are real shipped projects, and a live run (step 4) would mark them **Taken** and replace them.

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
- Live collision checks: `references/collision-check.md`

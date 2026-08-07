# namebrew

**Brew short names for indie software — not SaaS brand salad.**

An [agent skill](./SKILL.md) that helps you name open-source tools the way makers like [tw93](https://github.com/tw93), [charmbracelet](https://github.com/charmbracelet), [louislam](https://github.com/louislam), [sharkdp](https://github.com/sharkdp), and [antfu](https://github.com/antfu) do: short, speakable, drawable, and installable.

It scores candidates, runs **live collision checks** (GitHub / web / registries), and can hand off logo prompts. It will not invent *Nexlify* for you.

[![skills.sh](https://skills.sh/b/robinv8/namebrew)](https://skills.sh/robinv8/namebrew)

```bash
npx skills add robinv8/namebrew
```

[Install](#install) · [Usage](#usage) · [Example](#example) · [How it works](#how-it-works) · [Schools](#naming-schools)

---

## Why

Most “AI name generators” optimize for startup pitch decks:

| Typical generators | namebrew |
|--------------------|----------|
| Syncora, Lyraflow, Packly | Mole, Pake, glow, yazi, fd |
| Long feature titles | 1–3 syllables |
| No collision check | GitHub + npm/PyPI/crates search |
| One “winning” name | Ranked options with tradeoffs |

If your README is 40 lines of Rust and one emoji, this is for you.

---

## Install

Default path: the [skills CLI](https://skills.sh) (`npx skills`). It discovers `SKILL.md` in this repo and installs into your coding agents (Claude Code, Codex, Cursor, Grok Build, and [many more](https://github.com/vercel-labs/skills#supported-agents)).

```bash
# Interactive: pick agents / scope
npx skills add robinv8/namebrew

# Global (user-level), non-interactive
npx skills add robinv8/namebrew -g -y

# Project-level only
npx skills add robinv8/namebrew -y

# Target specific agents
npx skills add robinv8/namebrew -a claude-code -a grok -g -y
```

Useful extras:

```bash
# List skills in this repo without installing
npx skills add robinv8/namebrew --list

# Try without installing (prompt only)
npx skills use robinv8/namebrew@namebrew

# Update later
npx skills update namebrew
```

Discover on [skills.sh](https://skills.sh/robinv8/namebrew).

### Manual / development only

You usually **do not** need this. Prefer `npx skills add` so the skill lands in each agent’s skills directory correctly.

```bash
# Contribute or hack on the skill
git clone https://github.com/robinv8/namebrew.git
cd namebrew
# optional: wire into one agent while developing
ln -sfn "$(pwd)" ~/.grok/skills/namebrew
# or
npx skills add ./namebrew -g -y
```

---

## Usage

### Slash or natural language

```text
/namebrew
Name an open-source CLI that cleans leftover Mac app files.
```

```text
Use namebrew: I need a name for a tool that rewrites my X posts to be punchier.
Prefer short English, animal or everyday-object vibe.
```

### What to tell it

| Input | Example |
|-------|---------|
| **Intent** | One line: what it does, for whom |
| **Surface** | CLI / library / desktop / web / agent skill |
| **Language** | Short English / pinyin / JP-reading / mixed |
| **Tone** | Minimal, animal, cultural, humor, abbrev, object… |
| **Constraints** | Avoid words, package rules, max syllables |
| **Family** | Standalone vs product line (e.g. Kaku–Waza–Kami) |

Skip fields you do not care about — the skill asks only for what is missing.

---

## Example

**You:** Mac terminal cleaner for leftover app files.

**You get (shape, abbreviated):**

| Name | Story | Install | Availability |
|------|-------|---------|--------------|
| Mole | Digs out buried junk | `mole` | Crowded / check |
| Dust | Lighter than “cleaner” | `dust` | Crowded |
| Gomi | JP ゴミ — trash | `gomi` | Clear-ish |

Plus collision notes, names to **avoid** (Taken/Risky), and optional logo prompts.

**Strong vs weak (built into the skill):**

```text
Intent: Pack any URL into a tiny desktop app.
Strong: Pake, Wrap, Shell
Weak:   Web2Desktopify, ElectronLiteApp, Packly
```

---

## How it works

```text
Frame → Diverge (16–24) → Score → Collision search → Top 5 + Avoid list
```

1. **Frame** intent, surface, tone schools  
2. **Diverge** across naming schools  
3. **Score** length, speak, fit, draw, install  
4. **Search** GitHub / web / npm · PyPI · crates (best-effort)  
5. **Deliver** ranked names with **Clear / Crowded / Taken / Risky** labels  

No Top 5 without live search. Short dictionary words are often *Crowded*, not free — the skill says so.

Details: [`references/collision-check.md`](./references/collision-check.md)

---

## Naming schools

| | School | Pattern | Exemplars |
|---|--------|---------|-----------|
| A | Cultural short | JP/CN readings | Kami, Kaku, Waza, kuma |
| B | Animal / nature | Creature or plant | Mole, bat, kitty, Maple |
| C | Life object / verb | Everyday word | gum, vhs, glow, just, dive |
| D | Lazy humor | Joke + domain | lazygit, k9s, noice |
| E | Ultra-short | 1–3 letters / 2 syllables | ni, fd, fnm, Noi |
| F | Pinyin brand | 2–3 syllable pinyin | yazi, MiaoYan |
| G | Domain compound | Clear blend | firecrawl, dayjs, zoxide |
| H | Nickname | Spoken diminutive | Maccy, heynote, aider |

Full catalog: [`references/naming-patterns.md`](./references/naming-patterns.md)  
Reject list: [`references/anti-patterns.md`](./references/anti-patterns.md)

---

## Principles

1. **Short** — prefer 1–3 syllables  
2. **Speakable** — easy in English (and Mandarin when relevant)  
3. **Drawable** — maps to a simple icon or emoji  
4. **One-line story** — name ↔ product in ≤12 words  
5. **Installable** — good as `npm` / binary / repo id  
6. **Search before ship** — memory is not availability  
7. **Families** — shared linguistic world, not prefix spam  

---

## Layout

```text
namebrew/
├── SKILL.md                 # Agent entry (frontmatter + process)
├── references/
│   ├── naming-patterns.md   # Schools + exemplar makers
│   ├── anti-patterns.md     # Hard/soft rejects
│   └── collision-check.md   # GitHub / web / registry playbook
├── CONTRIBUTING.md
├── LICENSE                  # MIT
└── README.md
```

---

## Not for

- Legal trademark clearance (search is best-effort; humans decide)  
- Enterprise brand systems and naming agencies  
- Guaranteeing `.com` / npm forever free  

---

## Contributing

PRs welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md).

Ideas that land well:

- Sharper few-shots (strong vs weak)  
- New schools that stay short / speakable / drawable  
- Better collision heuristics  
- Install notes for more agents  

Keep `SKILL.md` operational; put long catalogs under `references/`.

---

## License

[MIT](./LICENSE)

## Credits

Naming craft studied from these makers. Links go to their **GitHub profiles**. Style references only — **do not** copy trademarks or logos.

[tw93](https://github.com/tw93) ·
[charmbracelet](https://github.com/charmbracelet) ·
[louislam](https://github.com/louislam) ·
[sharkdp](https://github.com/sharkdp) ·
[jesseduffield](https://github.com/jesseduffield) ·
[junegunn](https://github.com/junegunn) ·
[antfu](https://github.com/antfu) ·
[sindresorhus](https://github.com/sindresorhus) ·
[sxyazi](https://github.com/sxyazi) ·
[DIYgod](https://github.com/DIYgod) ·
[lencx](https://github.com/lencx) ·
[iamkun](https://github.com/iamkun) ·
[exelban](https://github.com/exelban) ·
[p0deje](https://github.com/p0deje) ·
[casey](https://github.com/casey) ·
[ggerganov](https://github.com/ggerganov) ·
[karpathy](https://github.com/karpathy) ·
[folke](https://github.com/folke) ·
[pmndrs](https://github.com/pmndrs) ·
[derailed](https://github.com/derailed) ·
[wagoodman](https://github.com/wagoodman) ·
[jarun](https://github.com/jarun) ·
[chubin](https://github.com/chubin) ·
[heyman](https://github.com/heyman) ·
[emilkowalski](https://github.com/emilkowalski) ·
[fatedier](https://github.com/fatedier)

Signature names and schools: [`references/naming-patterns.md`](./references/naming-patterns.md).

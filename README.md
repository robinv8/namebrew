# namebrew

<p align="center">
  <img src="assets/logo.png" alt="namebrew logo" width="160" height="160" />
</p>

<p align="center">
  <strong>Brew short names for indie software — not SaaS brand salad.</strong>
</p>

An [agent skill](./SKILL.md) that helps you name open-source tools the way makers like [tw93](https://github.com/tw93), [charmbracelet](https://github.com/charmbracelet), [louislam](https://github.com/louislam), [sharkdp](https://github.com/sharkdp), and [antfu](https://github.com/antfu) do: short, speakable, drawable, and installable.

It scores candidates, runs **live collision checks** (GitHub / web / registries), and can hand off logo prompts. It will not invent *Nexlify* for you.

[![skills.sh](https://skills.sh/b/robinv8/namebrew)](https://skills.sh/robinv8/namebrew)

```bash
npx skills add robinv8/namebrew
```

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

Via the [skills CLI](https://skills.sh) — it discovers `SKILL.md` in this repo and installs into your coding agents (Claude Code, Codex, Cursor, Grok Build, and [many more](https://github.com/vercel-labs/skills#supported-agents)):

```bash
npx skills add robinv8/namebrew          # interactive: pick agents / scope
npx skills add robinv8/namebrew -g -y    # global, non-interactive
```

Extras: `--list` to preview without installing, `npx skills use robinv8/namebrew@namebrew` to try the prompt only, `npx skills update namebrew` to update later.

Hacking on the skill itself: see [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## Usage

```text
/namebrew
Name an open-source CLI that cleans leftover Mac app files.
```

Tell it whatever you have — **intent** (one line: what it does, for whom), **surface** (CLI / library / desktop / web), **language** (short English / pinyin / JP-reading), **tone**, **constraints**, **standalone vs product line**. Skip what you do not care about; the skill asks only for what is missing.

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

Strong vs weak, built into the skill:

```text
Intent: Pack any URL into a tiny desktop app.
Strong: Pake, Wrap, Shell
Weak:   Web2Desktopify, ElectronLiteApp, Packly
```

*(Pake itself is a real shipped project — style exemplar; a live run would mark it **Taken**.)*

---

## How it works

```text
Frame → Look, then name (12–16) → Score → Collision search → Top 5 + Avoid list
```

Ranked names carry **Clear / Crowded / Taken / Risky** labels from live GitHub / web / npm · PyPI · crates checks. No Top 5 without live search — short dictionary words are often *Crowded*, not free, and the skill says so.

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

Full catalog: [`references/naming-patterns.md`](./references/naming-patterns.md) · Reject list: [`references/anti-patterns.md`](./references/anti-patterns.md)

---

## Not for

- Legal trademark clearance (search is best-effort; humans decide)
- Enterprise brand systems and naming agencies
- Guaranteeing `.com` / npm forever free

---

## Contributing

PRs welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md). Keep `SKILL.md` operational; long catalogs go under `references/`.

## License

[MIT](./LICENSE)

## Credits

Naming craft studied from these makers (links go to their **GitHub profiles**; style references only — do **not** copy trademarks or logos):

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

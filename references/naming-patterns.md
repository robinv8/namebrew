# Indie naming patterns & exemplars

Reference for `namebrew`. Prefer schools that match the user's tone; cite exemplars as **style**, never copy trademarks as logos.

## Schools (detailed)

### A — Cultural short (JP / CN readings)

- Form: 1–2 syllable reading of a meaningful character/word
- Why it works: metaphor depth without long English compounds
- Exemplars: Kami (紙), Kaku (書く), Waza (技), kuma (熊 in uptime-kuma), yabai, iroiro (いろいろ), vitesse (FR)
- Logo cue: abstract paper, brush, craft mark — not literal kanji dump unless intentional

### B — Animal / nature

- Form: common animal or plant; optional pun
- Why: instant mascot, emoji-friendly README
- Exemplars: Mole, bat, kitty, llama(.cpp), Maple, openclaw
- Logo cue: simplified silhouette, 1 color fill

### C — Life object / verb

- Form: everyday noun or base verb
- Why: warm, non-enterprise, high recall
- Exemplars: glow, gum, vhs, melt, skate, pop, just, dive, hidden, stats
- Logo cue: object glyph (tape, gum, star, dive chevron)

### D — Lazy humor / meme

- Form: joke modifier + domain, or community meme
- Why: devtools shareability
- Exemplars: lazygit, lazydocker, k9s, noice, horcrux
- Logo cue: playful mark; keep still simple for favicon

### E — Ultra-short

- Form: 1–3 letters or crisp 2 syllables
- Why: typing speed, CLI muscle memory
- Exemplars: ni, fd, fnm, n, rg, Noi, Kap, Mos, jj, z
- Logo cue: lettermark or tiny symbol; often emoji in README is enough

### F — Pinyin brand

- Form: 2–3 syllable Mandarin pinyin, title or lower
- Why: CN makers, still global-typable
- Exemplars: yazi, MiaoYan, Luo
- Logo cue: meaning of the characters, not pinyin letters

### G — Domain compound

- Form: two clear stems blended
- Why: self-explanatory on first read
- Exemplars: firecrawl, dayjs, zoxide, markitdown, langflow
- Logo cue: one stem wins visually (fire OR crawl, not both crowded)

### H — Nickname / spoken

- Form: how a human would nickname the tool
- Why: desktop utilities, personal apps
- Exemplars: Maccy, heynote, aider, caprine
- Logo cue: friendly app icon, soft corners

## Product-line patterns

| Pattern | Example | Rule |
|---------|---------|------|
| Shared language world | Kaku / Waza / Kami | Same culture, different roles |
| Shared modifier | lazygit / lazydocker | Same joke, new domain |
| Shared aesthetic set | glow / gum / vhs / melt | Same "life object" school |
| Author brand only | tw93's mix of animals + JP | Different schools OK if README voice matches |

## Exemplar developers (follow methodology, not clones)

| Maker | Signature names | Primary schools |
|-------|-----------------|-----------------|
| tw93 | Mole, Pake, Kami, Kaku, Waza, MiaoYan, Maple | A B F C |
| charmbracelet | glow, gum, vhs, melt, skate, bubbletea, crush | C |
| louislam | uptime-kuma, dockge | A G |
| sharkdp | bat, fd, hyperfine, hexyl, vivid | B E G |
| jesseduffield | lazygit, lazydocker, horcrux | D |
| junegunn | fzf, goyo, limelight, seoul256 | E A |
| antfu | ni, vitesse, broz, iroiro | E A C |
| sindresorhus | ky, ora, meow, chalk, Gifski, Plash, Lungo | E C H |
| sxyazi | yazi | F |
| DIYgod | RSSHub, DPlayer, APlayer | G family |
| lencx | Noi | E |
| iamkun | dayjs | G |
| exelban | stats | E |
| p0deje | Maccy | H |
| casey | just | C |
| ggerganov | llama.cpp, whisper.cpp, ggml | B E |
| karpathy | nanoGPT, micrograd, makemore | G (scale-prefix) |
| folke | lazy.nvim, flash, noice, trouble | C D |
| pmndrs | zustand, jotai, valtio | A (loanwords) |
| derailed | k9s | D |
| wagoodman | dive | C |
| jarun | nnn, buku | E |
| chubin | cheat.sh, wttr.in | E (domain-as-name) |
| heyman | heynote | H |
| emilkowalski | sonner, vaul | E |
| fatedier | frp | E (abbrev infra) |

## Scoring rubric (copy into runs)

```text
Length  Speak  Fit  Draw  Availability  Install  | Total
  /5     /5    /5   /5        /5*          /5    | /30
```

\*Availability is filled **after** live collision search (`references/collision-check.md`), not from memory.

Ship candidates with total ≥ 22 when possible; explain any lower score kept for taste.

## README naming hygiene (indie)

- One emoji or mark + **Name** + one-line tagline
- Install id matches repo name when possible
- Avoid subtitle longer than the name
- Tagline pattern: verb phrase, not mission statement  
  Good: "Turn any webpage into a desktop app."  
  Weak: "Empowering developers to reimagine the future of…"

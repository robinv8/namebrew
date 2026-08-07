# indie-naming

Agent skill for crafting **short, memorable project names** in the style of indie open-source developers — [tw93](https://github.com/tw93), [charmbracelet](https://github.com/charmbracelet), [louislam](https://github.com/louislam), [sharkdp](https://github.com/sharkdp), [antfu](https://github.com/antfu), and similar makers.

Not a corporate brand-name generator. Produces scored name tables, optional product-line families, and logo-ready imagery notes.

## What you get

- **8 naming schools** — cultural short words, animals, life objects, lazy humor, ultra-short ids, pinyin brands, domain compounds, nicknames
- **A fixed process** — frame → diverge → score → top picks → manual availability checks
- **Anti-patterns** — reject SaaS salad (`Nexlify`, `Syncora`) and unreadable feature dumps
- **Logo handoff** — optional English image prompts for app icons (generate only when asked)

## Install

### Grok Build / local skills folder

```bash
# User-level (all projects)
git clone https://github.com/robinv8/indie-naming.git ~/.grok/skills/indie-naming

# Or symlink while developing
ln -sfn /path/to/indie-naming ~/.grok/skills/indie-naming
```

If your agent loads from `~/.agents/skills` or a project `.grok/skills`:

```bash
git clone https://github.com/robinv8/indie-naming.git ~/.agents/skills/indie-naming
# or
git clone https://github.com/robinv8/indie-naming.git .grok/skills/indie-naming
```

### Skills CLI

```bash
npx skills add robinv8/indie-naming -g -y
```

> Repo URL assumes GitHub user `robinv8`. Change the owner if you fork or rename.

## Usage

In a compatible agent (Grok, Claude Code, Codex, etc.):

```text
/indie-naming
Name an open-source CLI that cleans leftover Mac app files.
```

Or natural language:

```text
Use indie-naming: I need a name for a tool that rewrites my X posts to be punchier.
```

### What to provide

| Input | Example |
|-------|---------|
| Intent | One sentence: what it does, for whom |
| Surface | CLI / library / desktop / web / agent skill |
| Language | Short English / pinyin / JP-reading / mixed |
| Tone | Minimal, animal, cultural, humor, abbrev, object… |
| Constraints | Must include/avoid, package name rules |

### Output shape

1. Direction (schools chosen)
2. **Live collision search** (GitHub + web + registries) — required before Top picks
3. Top 5 table — name, story, install id, **Availability** (Clear / Crowded / Taken / Risky)
4. Collision notes + “Avoid / already used”
5. Other candidates
6. Optional product-line family
7. Optional logo prompts for Top 3

## Layout

```text
indie-naming/
├── SKILL.md                      # Agent instructions (entry point)
├── references/
│   ├── naming-patterns.md        # Schools + exemplar developers
│   └── anti-patterns.md          # Reject / rewrite rules
├── LICENSE
└── README.md
```

## Design principles (short)

1. Short wins (1–3 syllables)
2. Speakable in English (and Mandarin when relevant)
3. Drawable — maps to a simple icon/emoji
4. One-line story linking name ↔ product
5. Installable as a package/binary id
6. Optional product families share a *linguistic world*, not prefix spam

## Not for

- Full legal trademark clearance (skill runs best-effort web/GitHub/registry search; humans decide)
- Enterprise brand systems and naming agencies
- Guaranteeing domain/npm availability forever

## Contributing

PRs welcome for:

- New **schools** or sharper anti-patterns
- Exemplar makers with distinctive naming (methodology, not logo clones)
- Clearer scoring rubrics or few-shot examples
- Install docs for additional agents

Please keep `SKILL.md` actionable (agent prompt), not a long essay. Put deep catalogs in `references/`.

## License

[MIT](./LICENSE)

## Credits

Inspired by naming craft from the indie OSS community (tw93, charmbracelet, and many others). Exemplars are cited as **style references only** — do not copy trademarks or logos.

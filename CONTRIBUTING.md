# Contributing

Thanks for helping improve **namebrew**.

## Scope

This repo is an **agent skill**: instructions an LLM follows to *brew* short names for indie/OSS projects.

- Prefer small, focused PRs
- Keep `SKILL.md` short and operational
- Put long lists and catalogs in `references/`

## Good contributions

- Better few-shot examples (strong vs weak names)
- New naming schools that stay short, speakable, drawable
- Anti-patterns that catch AI brand-salad names
- Install docs for more agents / CLIs
- Typo and clarity fixes

## Please avoid

- Dumping huge brand-name word lists without process
- Encouraging trademark cloning (names/logos of famous products)
- Turning the skill into a full marketing brand framework

## Local use while developing

Prefer installing from the local checkout via the skills CLI (same path users take, minus the remote):

```bash
npx skills add . -g -y
# or symlink into one agent while iterating
ln -sfn "$(pwd)" ~/.grok/skills/namebrew
```

Then trigger `/namebrew` or ask for indie-style project names in your agent.

## PR checklist

- [ ] `SKILL.md` frontmatter `name` / `description` still accurate
- [ ] Relative paths to `references/` still work
- [ ] README install steps still match layout
- [ ] No secrets or personal tokens

# Collision check playbook

Required before finalizing Top recommendations in `namebrew`.

## Goal

Answer: *If someone installs or stars this name tomorrow, will they confuse it with an existing product?*

This is **best-effort discovery**, not trademark legal advice.

## Minimum checks (every shortlist name)

Run for the **install id** (usually lowercase, no spaces).

### 1. GitHub repositories

```bash
gh search repos "NAME in:name" --limit 10 --json fullName,stargazersCount,description,url
# or
gh api "search/repositories?q=NAME+in:name&per_page=10" --jq '.items[]|{full_name,stars:.stargazers_count,html_url,description}'
```

Also try exact user/org style hits:

```bash
gh api "search/repositories?q=NAME+in:name+sort:stars" --jq '.total_count'
```

**Interpret:**

| Signal | Verdict lean |
|--------|----------------|
| Exact name, ≥500 stars, similar domain | **Taken** |
| Exact name, tiny abandoned toy | **Crowded** (note it) |
| Only substring hits (`NAME` inside longer names) | Often **Clear** / mild **Crowded** |
| Famous org product | **Risky** or **Taken** |

### 2. Web search

Query ideas (use web_search or equivalent):

- `NAME open source`
- `NAME CLI` / `NAME app` / `NAME npm`
- `"NAME" github` 
- `NAME software` / `NAME tool`

**Interpret:**

| Signal | Verdict lean |
|--------|----------------|
| Active product site / docs / company with that brand | **Taken** or **Risky** |
| Dictionary word + generic blog noise | **Crowded** |
| Almost nothing relevant | **Clear** |

### 3. Language registries (match surface)

Only when the product language fits; skip others to save time.

```bash
# npm — existence
npm view NAME name version 2>/dev/null || echo "npm: free or missing"

# npm — real adoption (downloads, last month)
curl -s "https://api.npmjs.org/downloads/point/last-month/NAME"

# PyPI — 404 means free
curl -s -o /dev/null -w "%{http_code}\n" "https://pypi.org/pypi/NAME/json"

# crates.io — API requires a User-Agent header
curl -s -A "namebrew-collision-check" "https://crates.io/api/v1/crates?q=NAME&per_page=5"
# or
cargo search NAME --limit 5
```

**Interpret:** Same-name package with real adoption (not a zero-download placeholder) → **Taken** for that ecosystem. Missing / 404 → better for **Clear**; near-zero downloads → note as **Crowded**, not Taken.

### 4. Optional: domains & social

Only if user wants a product URL / handle:

- Search `NAME.dev`, `NAME.com`, `getNAME.com`
- Note if parked or owned by a known product

Do not block Top 5 solely on `.com` unavailability for OSS tools.

## Batching

1. Score quality first → shortlist 10–16  
2. Collision-check the top ~6–8 shortlist names in **parallel** tool calls (every Top 5 candidate must be checked; spot-check the rest)  
3. Assign **Clear / Crowded / Taken / Risky**  
4. Promote Top 5 only from Clear + acceptable Crowded  
5. List Taken/Risky under **Avoid / already used** with links  

If fewer than 5 Clear/Crowded remain, generate more names and re-check.

## Writing collision notes

One or two lines per Top name:

```text
nym — GitHub: several small repos, none dominant; npm: no package; web: linguistics term, no product brand. → Crowded (word) / near Clear
```

Link the strongest conflicting hit when Taken/Risky.

## Honesty rules

- Ultra-short names (`ni`, `fd`, `go`) are almost never fully free → default **Crowded**  
- Do not claim “100% available”  
- Say once: best-effort search, not legal clearance  
- Prefer a slightly longer **Clear** name over a perfect-sounding **Taken** one  

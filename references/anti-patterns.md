# Anti-patterns (reject or rewrite)

Use when candidates feel "AI brand generator" or enterprise deck.

## Hard rejects

| Pattern | Example smell | Why |
|---------|---------------|-----|
| SaaS salad | Nexlify, Syncora, Lyraflow | Meaningless vowels, no story |
| Feature dump title | SmartMacAppCleanerPro | Not a brand; unreadable install id |
| Mission statement name | EmpowerDevTools | Sounds like LinkedIn |
| Famous collision | ollama2, react-x, tiny-vue | Confusion + trademark risk |
| Unsayable cluster | Bxtrql, Vyrnk | Fails Speak score |
| Overlong pinyin | ZhuanyiGongjuXiaoshou | Fails Length |
| Forced -ify/-ly spam | Cleanify, Packly, Toolio | Startup costume |
| Random Unicode flex | tool✨name | Breaks installs/URLs |
| Copied mark metaphor | blue atom orbits, ship wheel | Trademark-adjacent logo story |

## Soft rejects (rewrite)

- Three-word English compounds → compress to 1–2 syllables or a metaphor
- Good story but undrawable → swap in a concrete noun/animal/object
- Cute but wrong domain (kawaii name for kernel tracer) → retone
- Only works as a Chinese joke, dead in English → dual-readability fix or mark "CN-first"

## Corporate vs indie quick test

Ask: *Would this look natural in a 30-line Rust README with one emoji?*

- Yes → keep scoring  
- No → rewrite toward schools A–H in `naming-patterns.md`

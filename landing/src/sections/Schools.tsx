const SCHOOLS = [
  { id: 'A', name: 'Cultural short', pattern: 'JP/CN readings', ex: 'Kami, Kaku, Waza, kuma' },
  { id: 'B', name: 'Animal / nature', pattern: 'Creature or plant', ex: 'Mole, bat, kitty, Maple' },
  { id: 'C', name: 'Life object / verb', pattern: 'Everyday word', ex: 'gum, vhs, glow, just, dive' },
  { id: 'D', name: 'Lazy humor', pattern: 'Joke + domain', ex: 'lazygit, k9s, noice' },
  { id: 'E', name: 'Ultra-short', pattern: '1–3 letters / 2 syllables', ex: 'ni, fd, fnm, Noi' },
  { id: 'F', name: 'Pinyin brand', pattern: '2–3 syllable pinyin', ex: 'yazi, MiaoYan' },
  { id: 'G', name: 'Domain compound', pattern: 'Clear blend', ex: 'firecrawl, dayjs, zoxide' },
  { id: 'H', name: 'Nickname', pattern: 'Spoken diminutive', ex: 'Maccy, heynote, aider' },
]

export default function Schools() {
  return (
    <section id="schools" className="border-y border-foreground/10 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono2 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(41_55%_42%)]">
          Naming schools
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Eight schools, studied from real makers.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Naming craft distilled from tw93, charmbracelet, louislam, sharkdp, antfu, sindresorhus
          and twenty more — style references only, never copied trademarks.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SCHOOLS.map((s) => (
            <div
              key={s.id}
              className="group rounded-2xl border border-foreground/10 bg-card p-5 transition-all hover:-translate-y-1 hover:border-[hsl(41_55%_46%/0.6)] hover:shadow-[0_16px_40px_-16px_hsl(30_12%_10%/0.35)]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(41_55%_46%/0.5)] bg-[hsl(41_55%_46%/0.1)] font-display text-base font-semibold text-[hsl(33_60%_30%)]">
                {s.id}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.pattern}</p>
              <p className="mt-3 border-t border-dashed border-foreground/15 pt-3 font-mono2 text-xs leading-relaxed text-foreground/70">
                {s.ex}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

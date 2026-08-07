const RESULTS = [
  { name: 'Mole', story: 'Digs out buried junk', install: 'mole', status: 'Crowded / check', tone: 'text-amber-600' },
  { name: 'Dust', story: 'Lighter than “cleaner”', install: 'dust', status: 'Crowded', tone: 'text-amber-600' },
  { name: 'Gomi', story: 'JP ゴミ — trash', install: 'gomi', status: 'Clear-ish', tone: 'text-emerald-600' },
]

const AVOID = ['Syncora', 'MacCleanifyPro', 'Nexlify']

export default function Example() {
  return (
    <section id="example" className="border-y border-foreground/10 bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono2 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(41_55%_60%)]">
          Example
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          One line in. Ranked names out.
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* prompt side */}
          <div className="rounded-2xl border border-background/15 bg-background/5 p-6">
            <p className="font-mono2 text-xs uppercase tracking-wider text-background/50">You say</p>
            <p className="mt-3 font-mono2 text-lg leading-relaxed">
              <span className="text-[hsl(41_55%_60%)]">›</span> Mac terminal cleaner for leftover app files.
            </p>
            <div className="mt-8 border-t border-background/10 pt-6">
              <p className="font-mono2 text-xs uppercase tracking-wider text-background/50">Also flagged — avoid</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {AVOID.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-red-400/40 bg-red-400/10 px-3 py-1 font-mono2 text-sm text-red-300 line-through"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-background/60">
                Plus collision notes and optional logo prompts. Short dictionary words are often{' '}
                <em>Crowded</em>, not free — the skill says so. No Top 5 without live search.
              </p>
            </div>
          </div>

          {/* results side */}
          <div className="overflow-hidden rounded-2xl border border-background/15 bg-background/[0.07]">
            <div className="flex items-center gap-1.5 border-b border-background/10 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono2 text-xs text-background/50">namebrew — top picks</span>
            </div>
            <div className="divide-y divide-background/10">
              {RESULTS.map((r, i) => (
                <div key={r.name} className="flex items-center gap-4 px-5 py-4">
                  <span className="font-mono2 text-xs text-background/40">0{i + 1}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-xl font-semibold">{r.name}</p>
                    <p className="truncate text-sm text-background/60">{r.story}</p>
                  </div>
                  <code className="hidden rounded-md bg-background/10 px-2 py-1 font-mono2 text-xs sm:block">
                    {r.install}
                  </code>
                  <span className={`font-mono2 text-xs font-medium ${r.tone}`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* strong vs weak */}
        <div className="mt-10 rounded-2xl border border-background/15 bg-background/5 p-6 font-mono2 text-sm leading-loose">
          <p className="text-background/50"># strong vs weak — built into the skill</p>
          <p><span className="text-[hsl(41_55%_60%)]">Intent:</span> Pack any URL into a tiny desktop app.</p>
          <p><span className="text-emerald-400">Strong:</span> Pake, Wrap, Shell</p>
          <p><span className="text-red-300">Weak:&nbsp;&nbsp;</span> Web2Desktopify, ElectronLiteApp, Packly</p>
        </div>
      </div>
    </section>
  )
}

const BREWS = [
  {
    intent: 'Turn a cooking video into steps you can follow with busy hands.',
    picks: [
      { name: 'Score', click: 'The video is a performance. This is the sheet.' },
      { name: 'Cue', click: 'The next move, while your hands are full.' },
      { name: 'Tab', click: 'The moves, written like tablature.' },
      { name: 'Rundown', click: 'The timing sheet behind the show.' },
    ],
  },
  {
    intent: 'Too many macOS windows. The system switcher cannot find the one.',
    picks: [
      { name: 'Pluck', click: 'Pull that one out of the pile.' },
      { name: 'Hail', click: 'Flag your ride in the traffic.' },
      { name: 'Whistle', click: 'Call it over. Don’t sort the rest.' },
      { name: 'Snag', click: 'Catch the right edge on the first pass.' },
    ],
  },
]

export default function Example() {
  return (
    <section id="example" className="border-y border-foreground/10 bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono2 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(41_55%_60%)]">
          Names it kept
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Not a cleaner. Not a window manager. The name clicks.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-background/60">
          One line in. It looks at that product only, then keeps the names that are unexpected, then obvious.
          Short dictionary words are often crowded — collision search still runs before you ship.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {BREWS.map((brew) => (
            <article
              key={brew.intent}
              className="overflow-hidden rounded-2xl border border-background/15 bg-background/[0.07]"
            >
              <div className="border-b border-background/10 px-5 py-5">
                <p className="font-mono2 text-xs uppercase tracking-wider text-background/50">You say</p>
                <p className="mt-2 font-mono2 text-base leading-relaxed">
                  <span className="text-[hsl(41_55%_60%)]">› </span>
                  {brew.intent}
                </p>
              </div>
              <ol className="divide-y divide-background/10">
                {brew.picks.map((pick, i) => (
                  <li key={pick.name} className="flex items-baseline gap-4 px-5 py-4">
                    <span className="font-mono2 text-xs text-background/40">0{i + 1}</span>
                    <p className="w-28 shrink-0 font-display text-2xl font-semibold tracking-tight">
                      {pick.name}
                    </p>
                    <p className="min-w-0 text-sm leading-snug text-background/70">{pick.click}</p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

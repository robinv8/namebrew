import { X, Check } from 'lucide-react'

const ROWS: { label: string; them: string; us: string }[] = [
  { label: 'Output', them: 'Syncora, Lyraflow, Packly', us: 'Mole, Pake, glow, yazi, fd' },
  { label: 'Length', them: 'Long feature titles', us: '1–3 syllables' },
  { label: 'Collision check', them: 'None — good luck', us: 'GitHub + npm / PyPI / crates search' },
  { label: 'Result', them: 'One “winning” name', us: 'Ranked options with tradeoffs' },
]

export default function Why() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="font-mono2 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(41_55%_42%)]">
        Why
      </p>
      <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
        Most “AI name generators” optimize for pitch decks.
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        namebrew optimizes for READMEs. If your README is 40 lines of Rust and one emoji, this is for you.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-sm">
        <div className="grid grid-cols-[0.8fr_1fr_1fr] border-b border-foreground/10 bg-secondary/60 font-mono2 text-xs font-medium uppercase tracking-wider text-muted-foreground md:grid-cols-[0.6fr_1fr_1fr]">
          <div className="px-4 py-3 md:px-6" />
          <div className="px-4 py-3 md:px-6">Typical generators</div>
          <div className="px-4 py-3 text-[hsl(33_60%_30%)] md:px-6">namebrew</div>
        </div>
        {ROWS.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[0.8fr_1fr_1fr] items-center border-b border-foreground/5 last:border-0 md:grid-cols-[0.6fr_1fr_1fr]"
          >
            <div className="px-4 py-4 font-mono2 text-xs uppercase tracking-wider text-muted-foreground md:px-6">
              {r.label}
            </div>
            <div className="flex items-start gap-2 px-4 py-4 text-sm text-muted-foreground md:px-6">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" />
              <span className="font-mono2">{r.them}</span>
            </div>
            <div className="flex items-start gap-2 px-4 py-4 text-sm font-medium md:px-6">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(41_60%_38%)]" />
              <span className="font-mono2">{r.us}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

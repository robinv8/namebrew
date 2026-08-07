import { Compass, Shuffle, BarChart3, SearchCheck, Trophy } from 'lucide-react'

const STEPS = [
  { icon: Compass, title: 'Frame', desc: 'Intent, surface, tone schools' },
  { icon: Shuffle, title: 'Diverge', desc: '16–24 candidates across naming schools' },
  { icon: BarChart3, title: 'Score', desc: 'Length, speak, fit, draw, install' },
  { icon: SearchCheck, title: 'Search', desc: 'GitHub / web / npm · PyPI · crates' },
  { icon: Trophy, title: 'Deliver', desc: 'Top 5 + Avoid list, Clear → Taken labels' },
]

export default function Process() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <p className="font-mono2 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(41_55%_42%)]">
        How it works
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
        A brew pipeline, not a slot machine.
      </h2>
      <p className="mt-4 max-w-2xl font-mono2 text-sm text-muted-foreground">
        Frame → Diverge (16–24) → Score → Collision search → Top 5 + Avoid list
      </p>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className="group relative rounded-2xl border border-foreground/10 bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_hsl(30_12%_10%/0.35)]"
          >
            <div className="flex items-center justify-between">
              <s.icon className="h-6 w-6 text-[hsl(41_55%_42%)]" />
              <span className="font-display text-3xl font-semibold text-foreground/15 transition-colors group-hover:text-[hsl(41_55%_46%/0.5)]">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            {i < STEPS.length - 1 && (
              <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[hsl(41_55%_46%)] lg:block">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

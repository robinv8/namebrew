const PRINCIPLES = [
  { k: 'Short', v: 'Prefer 1–3 syllables' },
  { k: 'Speakable', v: 'Easy in English (and Mandarin when relevant)' },
  { k: 'Drawable', v: 'Maps to a simple icon or emoji' },
  { k: 'One-line story', v: 'Name ↔ product in ≤12 words' },
  { k: 'Installable', v: 'Good as npm / binary / repo id' },
  { k: 'Search before ship', v: 'Memory is not availability' },
  { k: 'Families', v: 'Shared linguistic world, not prefix spam' },
]

export default function Principles() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <p className="font-mono2 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(41_55%_42%)]">
            Principles
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Seven house rules.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every candidate is scored against these before it reaches you. Memory is not
            availability — so the search always runs.
          </p>
        </div>
        <ol className="divide-y divide-foreground/10 border-y border-foreground/10">
          {PRINCIPLES.map((p, i) => (
            <li key={p.k} className="flex items-baseline gap-5 py-4">
              <span className="font-mono2 text-sm text-[hsl(41_55%_42%)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-display text-xl font-semibold">{p.k}</span>
                <span className="text-sm text-muted-foreground">— {p.v}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

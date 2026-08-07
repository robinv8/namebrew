import { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'

const EXEMPLARS = [
  'Mole', 'Pake', 'glow', 'yazi', 'fd', 'bat', 'gum', 'vhs', 'just', 'dive',
  'lazygit', 'k9s', 'noice', 'ni', 'fnm', 'Noi', 'MiaoYan', 'firecrawl',
  'dayjs', 'zoxide', 'Maccy', 'heynote', 'aider', 'Kaku', 'Waza', 'kuma',
]

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const cmd = 'npx skills add robinv8/namebrew'

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="top" className="paper-grain relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-16 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-[hsl(41_55%_46%/0.5)] bg-[hsl(41_55%_46%/0.12)] px-3.5 py-1 font-mono2 text-xs font-medium text-[hsl(33_60%_28%)]">
              <Terminal className="h-3.5 w-3.5" />
              an agent skill · MIT licensed
            </p>
            <h1
              className="reveal font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
              style={{ animationDelay: '80ms' }}
            >
              Brew short names for{' '}
              <em className="text-[hsl(41_55%_42%)]">indie software</em>.
            </h1>
            <p
              className="reveal mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              style={{ animationDelay: '160ms' }}
            >
              Not SaaS brand salad. namebrew names open-source tools the way makers like
              tw93, charmbracelet and antfu do — short, speakable, drawable, installable —
              with <strong className="font-semibold text-foreground">live collision checks</strong> on
              GitHub, npm, PyPI and crates before you ship.
            </p>
            <div
              className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: '240ms' }}
            >
              <button
                onClick={copy}
                className="group inline-flex items-center justify-between gap-4 rounded-xl border border-foreground/15 bg-foreground px-5 py-3.5 font-mono2 text-sm text-background shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <span>
                  <span className="mr-2 text-[hsl(41_55%_60%)]">$</span>
                  {cmd}
                </span>
                {copied ? (
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                )}
              </button>
              <a
                href="#example"
                className="inline-flex items-center justify-center rounded-xl border border-foreground/20 px-5 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                See it in action ↓
              </a>
            </div>
            <p className="reveal mt-5 text-sm text-muted-foreground" style={{ animationDelay: '320ms' }}>
              It will not invent <span className="font-mono2 line-through decoration-destructive/70">Nexlify</span> for you.
            </p>
          </div>

          <div className="reveal relative mx-auto hidden md:block" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-[radial-gradient(circle,hsl(41_55%_46%/0.22),transparent_65%)]" />
            <img
              src="./logo.png"
              alt="namebrew — hops mark"
              className="w-full max-w-sm rounded-full shadow-[0_24px_60px_-20px_hsl(30_12%_10%/0.45)] ring-1 ring-foreground/10"
            />
          </div>
        </div>
      </div>

      {/* marquee of exemplar names */}
      <div className="border-y border-foreground/10 bg-foreground py-3 text-background">
        <div className="flex w-max animate-marquee gap-0 whitespace-nowrap font-mono2 text-sm">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {EXEMPLARS.map((n) => (
                <span key={`${dup}-${n}`} className="flex items-center">
                  <span className="px-4">{n}</span>
                  <span className="text-[hsl(41_55%_55%)]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

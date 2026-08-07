import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const BLOCKS: { title: string; prompt?: string; lines: { c?: string; t: string }[] }[] = [
  {
    title: 'Install with the skills CLI',
    lines: [
      { c: '# interactive — pick agents / scope', t: 'npx skills add robinv8/namebrew' },
      { c: '# global, non-interactive', t: 'npx skills add robinv8/namebrew -g -y' },
      { c: '# project-level only', t: 'npx skills add robinv8/namebrew -y' },
      { c: '# target specific agents', t: 'npx skills add robinv8/namebrew -a claude-code -a grok -g -y' },
    ],
  },
  {
    title: 'Then just ask',
    prompt: '›',
    lines: [
      { t: '/namebrew' },
      { t: 'Name an open-source CLI that cleans leftover Mac app files.' },
      { c: '# or with taste constraints', t: 'Prefer short English, animal or everyday-object vibe.' },
    ],
  },
]

function CodeCard({ title, lines, prompt = '$' }: (typeof BLOCKS)[number] & { prompt?: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    const text = lines.filter((l) => l.t).map((l) => l.t).join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch { /* noop */ }
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground text-background shadow-[0_24px_60px_-24px_hsl(30_12%_10%/0.5)]">
      <div className="flex items-center justify-between border-b border-background/10 px-5 py-3">
        <span className="font-mono2 text-xs text-background/60">{title}</span>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md border border-background/15 px-2.5 py-1 font-mono2 text-xs text-background/70 transition-colors hover:bg-background/10"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'copied' : 'copy'}
        </button>
      </div>
      <div className="space-y-1.5 px-5 py-4 font-mono2 text-sm leading-relaxed">
        {lines.map((l, i) => (
          <div key={i}>
            {l.c && <p className="pt-2 text-background/40 first:pt-0">{l.c}</p>}
            <p>
              <span className="mr-2 select-none text-[hsl(41_55%_60%)]">{prompt}</span>
              {l.t}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Install() {
  return (
    <section id="install" className="paper-grain border-t border-foreground/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono2 text-xs font-medium uppercase tracking-[0.25em] text-[hsl(41_55%_42%)]">
            Install
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            One command. Every agent.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Works with Claude Code, Codex, Cursor, Grok Build and{' '}
            <a
              href="https://github.com/vercel-labs/skills#supported-agents"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[hsl(41_55%_46%)] underline-offset-4 hover:text-foreground"
            >
              many more
            </a>
            . Discover it on{' '}
            <a
              href="https://skills.sh/robinv8/namebrew"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[hsl(41_55%_46%)] underline-offset-4 hover:text-foreground"
            >
              skills.sh
            </a>
            .
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          {BLOCKS.map((b) => (
            <CodeCard key={b.title} {...b} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          Not for legal trademark clearance, enterprise brand systems, or guaranteeing{' '}
          <code className="font-mono2">.com</code> forever free. Search is best-effort; humans decide.
        </p>
      </div>
    </section>
  )
}

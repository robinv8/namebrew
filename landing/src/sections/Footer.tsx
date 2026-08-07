import { Github } from 'lucide-react'

const MAKERS = [
  'tw93', 'charmbracelet', 'louislam', 'sharkdp', 'jesseduffield', 'junegunn',
  'antfu', 'sindresorhus', 'sxyazi', 'DIYgod', 'lencx', 'iamkun', 'karpathy',
  'folke', 'pmndrs', 'derailed', 'ggerganov', 'casey',
]

export default function Footer() {
  return (
    <footer className="border-t border-background/10 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img src="./logo.png" alt="namebrew logo" className="h-11 w-11 rounded-full ring-1 ring-background/20" />
            <div>
              <p className="font-display text-xl font-semibold">namebrew</p>
              <p className="text-sm text-background/60">Brew short names for indie software.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/robinv8/namebrew"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </a>
            <a
              href="https://skills.sh/robinv8/namebrew"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-background/25 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-background/10"
            >
              skills.sh
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-background/10 pt-6 text-sm leading-relaxed text-background/50">
          Naming craft studied from{' '}
          {MAKERS.map((m, i) => (
            <span key={m}>
              <a
                href={`https://github.com/${m}`}
                target="_blank"
                rel="noreferrer"
                className="text-background/70 underline-offset-2 hover:text-[hsl(41_55%_60%)] hover:underline"
              >
                {m}
              </a>
              {i < MAKERS.length - 1 && ' · '}
            </span>
          ))}
          {' '}and more — style references only, do not copy trademarks or logos.
        </p>
        <p className="mt-4 font-mono2 text-xs text-background/40">
          MIT License · © namebrew contributors
        </p>
      </div>
    </footer>
  )
}

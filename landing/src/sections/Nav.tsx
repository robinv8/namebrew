import { Github } from 'lucide-react'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="./logo.png" alt="namebrew logo" className="h-9 w-9 rounded-full" />
          <span className="font-display text-xl font-semibold tracking-tight">namebrew</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#why" className="transition-colors hover:text-foreground">Why</a>
          <a href="#example" className="transition-colors hover:text-foreground">Example</a>
          <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
          <a href="#schools" className="transition-colors hover:text-foreground">Schools</a>
          <a href="#install" className="transition-colors hover:text-foreground">Install</a>
        </nav>
        <a
          href="https://github.com/robinv8/namebrew"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
        >
          <Github className="h-4 w-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  )
}

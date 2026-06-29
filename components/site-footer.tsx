import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div className="text-foreground">
          <Logo className="h-7" />
        </div>
        <p className="text-sm text-muted-foreground">
          Petra Vostřelová · Pardubice ·{' '}
          <a href="mailto:petra@aitobe.cz" className="underline-offset-4 hover:underline">
            petra@aitobe.cz
          </a>
        </p>
        <p className="text-sm text-muted-foreground">©2026 aiTOBE.cz</p>
      </div>
    </footer>
  )
}

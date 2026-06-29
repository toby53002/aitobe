'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Úvod', href: '#uvod' },
  { label: 'Setkání s AI', href: '#setkani' },
  { label: 'Pro 60+ a seniory', href: '#seniori' },
  { label: 'Pro firmy', href: '#firmy' },
  { label: 'Ceník', href: '#cenik' },
  { label: 'O mně', href: '#o-mne' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Header is always light/cream; gains a subtle border + blur once scrolled.
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-background/70 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a
          href="#uvod"
          aria-label="aiTOBE.cz — úvod"
          className="text-[color:var(--text-heading)]"
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavní navigace">
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-[color:var(--text-heading)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color:var(--green-dark)]"
          >
            Kontakt
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-[color:var(--text-heading)] transition-colors hover:bg-accent lg:hidden"
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background lg:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-0',
          'transition-all duration-300 ease-in-out',
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3"
          aria-label="Mobilní navigace"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base text-foreground transition-colors hover:bg-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

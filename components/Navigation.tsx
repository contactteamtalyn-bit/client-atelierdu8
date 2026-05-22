'use client'

import { useEffect, useState } from 'react'
import { useDemoModal } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: "L'Atelier", href: '#atelier' },
  { label: 'Sans formol', href: '#sans-formol' },
  { label: 'Expertises', href: '#services' },
  { label: 'Adresses', href: '#adresses' },
  { label: 'Avis', href: '#avis' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { open } = useDemoModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-11 z-[65] transition-all duration-500 md:top-9',
        scrolled ? 'border-b border-charbon/10 bg-lait/85 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="wrap-wide flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-charbon"
        >
          L&apos;Atelier du 8
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-sans text-[12px] uppercase tracking-[0.14em] text-charbon/70 transition-colors hover:text-charbon"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={open}
          className="bg-jade px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.16em] text-lait transition-colors hover:bg-charbon md:text-[12px]"
        >
          Réserver
        </button>
      </nav>
    </header>
  )
}

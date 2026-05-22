export function DemoBanner() {
  return (
    <a
      href="https://instagram.com/maison.talyn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 top-0 z-[70] flex h-11 items-center justify-center border-b border-jade bg-charbon px-3 text-lait transition-colors hover:bg-[#262626] md:h-9"
    >
      <span className="text-center font-sans text-[10px] uppercase leading-none tracking-[0.18em] sm:text-[11px]">
        Maquette démo · Réalisée par Maison Talyn pour L&apos;Atelier du 8 · Non finalisée ·{' '}
        <span className="text-terracotta">@maison.talyn</span>
      </span>
    </a>
  )
}

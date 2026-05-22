import { AlertTriangle } from 'lucide-react'
import { DemoCTA } from '@/components/DemoModal'

export function Footer() {
  return (
    <footer className="bg-charbon pt-20 text-lait">
      <div className="wrap grid gap-12 pb-16 md:grid-cols-4">
        {/* Col 1 — Marque */}
        <div>
          <p className="font-sans text-[16px] font-bold uppercase tracking-[0.14em]">L&apos;Atelier du 8</p>
          <p className="mt-3 font-display text-[14px] italic text-jade">
            Lissage brésilien · Coloration · Paris
          </p>
        </div>

        {/* Col 2 — Adresses */}
        <div>
          <p className="eyebrow text-lait/40">Adresses</p>
          <ul className="mt-4 space-y-2 font-sans text-[14px] font-light text-lait/75">
            <li>Champs-Élysées · Paris 8ᵉ</li>
            <li>Marais · Paris 4ᵉ</li>
            <li>Palais de l&apos;Élysée · Paris 8ᵉ</li>
            <li>Palais de l&apos;Élysée · II</li>
            <li>Marseille 8ᵉ</li>
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <p className="eyebrow text-lait/40">Contact</p>
          <ul className="mt-4 space-y-2 font-sans text-[14px] font-light text-lait/75">
            <li>
              <a href="tel:+33649762997" data-allow="true" className="transition-colors hover:text-lait">
                06 49 76 29 97
              </a>
            </li>
            <li>
              <DemoCTA className="link-underline font-sans text-[14px] font-light text-jade">
                Réserver en ligne
              </DemoCTA>
            </li>
          </ul>
        </div>

        {/* Col 4 — Suivez */}
        <div>
          <p className="eyebrow text-lait/40">Suivez</p>
          <ul className="mt-4 space-y-2 font-sans text-[14px] font-light text-lait/75">
            <li>
              <a
                href="https://instagram.com/latelierdu8"
                target="_blank"
                rel="noopener noreferrer"
                data-allow="true"
                className="transition-colors hover:text-lait"
              >
                @latelierdu8
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-allow="true"
                className="transition-colors hover:text-lait"
              >
                Facebook L&apos;Atelier du 8
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Encadré anti-vol */}
      <div className="border-t border-lait/10">
        <div className="wrap py-8">
          <div className="flex items-start gap-3 border border-jade/50 bg-[#161616] p-5">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-terracotta" strokeWidth={1.6} />
            <div className="font-sans text-[12px] leading-relaxed text-lait/70">
              <p className="font-semibold uppercase tracking-[0.12em] text-lait/90">
                Maquette démonstration non finale
              </p>
              <p className="mt-1">
                Site créé par Maison Talyn — <span className="text-terracotta">@maison.talyn</span>. Tous les
                contenus sont des placeholders. Contact pour publication :{' '}
                <a
                  href="https://instagram.com/maison.talyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-allow="true"
                  className="text-jade underline"
                >
                  @maison.talyn
                </a>
              </p>
            </div>
          </div>
          <p className="mt-6 text-center font-sans text-[11px] tracking-[0.14em] text-lait/30">
            © {new Date().getFullYear()} L&apos;Atelier du 8 · Maquette Maison Talyn · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  )
}

import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'
import { DemoCTA } from '@/components/DemoModal'

const lissageTarifs = [
  ['Cheveux courts', 'À partir de 159€'],
  ['Cheveux mi-longs', 'À partir de 199€'],
  ['Cheveux longs', 'À partir de 249€'],
]

const colorationTarifs = [
  ['Balayage', 'À partir de 109€'],
  ['Coloration globale', 'À partir de 130€'],
  ['Ombré hair', 'À partir de 150€'],
]

export function Services() {
  return (
    <section id="services" className="noise-layer relative overflow-hidden bg-lait py-24 md:py-32">
      <NoiseOverlay opacity={0.04} />
      <div className="wrap relative z-[2]">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-jade">Nos expertises</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-charbon" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.05 }}>
              Deux arts.
              <br />
              <em style={{ fontStyle: 'italic', color: '#2D6A5E' }}>Une maison.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {/* Lissage */}
          <Reveal>
            <article className="flex h-full flex-col bg-sable">
              <div className="relative aspect-[16/10] overflow-hidden">
                <SmartImage
                  src="/images/services/lissage.jpg"
                  alt="Lissage brésilien sans formol"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-5 top-5 bg-jade px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-lait">
                  Signature
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="font-display text-[36px] leading-tight text-charbon">Lissage Brésilien</h3>
                <p className="mt-3 max-w-md font-sans text-[15px] font-light leading-relaxed text-charbon/70">
                  Disciplinez vos cheveux durablement. Résultat garanti 3 à 6 mois. Sans formol, sans
                  agresser la fibre capillaire.
                </p>
                <ul className="mt-7 space-y-3 border-t border-charbon/10 pt-6">
                  {lissageTarifs.map(([k, v]) => (
                    <li key={k} className="flex items-baseline justify-between gap-4">
                      <span className="font-sans text-[14px] text-charbon">{k}</span>
                      <span className="font-sans text-[14px] font-medium text-jade">{v}</span>
                    </li>
                  ))}
                </ul>
                <DemoCTA
                  ariaLabel="Réserver un lissage"
                  className="link-underline mt-8 self-start font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-jade"
                >
                  Réserver un lissage →
                </DemoCTA>
              </div>
            </article>
          </Reveal>

          {/* Coloration */}
          <Reveal delay={120}>
            <article className="flex h-full flex-col bg-jade-clair">
              <div className="relative aspect-[16/10] overflow-hidden">
                <SmartImage
                  src="/images/services/coloration.jpg"
                  alt="Coloration sur-mesure : ombré, balayage, mèches"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute left-5 top-5 bg-terracotta px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-lait">
                  Couronné
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h3 className="font-display text-[36px] leading-tight text-charbon">Coloration</h3>
                <p className="mt-3 max-w-md font-sans text-[15px] font-light leading-relaxed text-charbon/70">
                  Ombré, balayage, tie and dye, mèches. Votre couleur idéale, réalisée par un styliste
                  dédié.
                </p>
                <ul className="mt-7 space-y-3 border-t border-charbon/10 pt-6">
                  {colorationTarifs.map(([k, v]) => (
                    <li key={k} className="flex items-baseline justify-between gap-4">
                      <span className="font-sans text-[14px] text-charbon">{k}</span>
                      <span className="font-sans text-[14px] font-medium text-terracotta">{v}</span>
                    </li>
                  ))}
                </ul>
                <DemoCTA
                  ariaLabel="Réserver une coloration"
                  className="link-underline mt-8 self-start font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-terracotta"
                >
                  Réserver une coloration →
                </DemoCTA>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

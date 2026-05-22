import type { CSSProperties } from 'react'
import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

export function LAtelier() {
  return (
    <section id="atelier" className="bg-lait py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-12 md:gap-16">
        {/* Image */}
        <Reveal className="md:col-span-6 lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-sable">
            <SmartImage
              src="/images/salons/ambiance.jpg"
              alt="Intérieur d'un salon L'Atelier du 8"
              fill
              sizes="(max-width:768px) 100vw, 55vw"
              className="object-cover"
            />
            {/* light leak terracotta coin bas-droite */}
            <div
              aria-hidden
              className="leak-terra pointer-events-none absolute inset-0 opacity-60"
              style={{ '--lx': '85%', '--ly': '82%' } as CSSProperties}
            />
            {/* badge EST. 2015 */}
            <span
              className="absolute left-6 top-6 inline-block border border-jade bg-sable px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-jade"
              style={{ transform: 'rotate(-8deg)' }}
            >
              Est. 2015
            </span>
          </div>
        </Reveal>

        {/* Texte */}
        <div className="md:col-span-6 lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-jade">— L&apos;Atelier</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-6 font-display text-charbon" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.05 }}>
              L&apos;excellence
              <br />
              <em style={{ fontStyle: 'italic', color: '#2D6A5E' }}>sans compromis.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 font-sans text-[17px] font-light leading-[1.7] text-charbon/80">
              Depuis plusieurs années, L&apos;Atelier du 8 a fait le choix radical du luxe
              accessible. Pas de compromis sur la qualité des produits. Pas d&apos;intermédiaire
              entre votre chevelure et notre expertise. Un styliste — le vôtre — du diagnostic
              jusqu&apos;à la finition.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 font-sans text-[17px] font-light leading-[1.7] text-charbon/80">
              Kevin Murphy. L&apos;Oréal. Olaplex. Nous travaillons avec les meilleures maisons du
              monde capillaire pour un résultat qui parle de lui-même.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <span className="my-8 block h-px w-[60px] bg-terracotta" aria-hidden />
            <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-jade">
              → Champs-Élysées · Marais · Élysée · Marseille
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

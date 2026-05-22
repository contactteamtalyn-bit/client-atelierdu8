import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

const resultats = [
  { img: 'resultat-01', caption: 'Lissage brésilien · Cheveux épais' },
  { img: 'resultat-02', caption: 'Coloration & soin · Cheveux longs' },
  { img: 'resultat-03', caption: 'Lissage lumière · Cheveux fins' },
]

export function Transformation() {
  return (
    <section className="overflow-hidden bg-charbon py-24 text-lait md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-jade">— Résultats</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.05 }}>
            Voir pour
            <br />
            <em style={{ fontStyle: 'italic', color: '#D4856B' }}>croire.</em>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="hscroll mt-14 gap-6 px-6 md:px-[max(24px,calc((100vw-1240px)/2+24px))]">
          {resultats.map((r) => (
            <figure key={r.img} className="w-[78vw] max-w-[420px] sm:w-[380px]">
              <div className="relative aspect-[3/4] overflow-hidden bg-charbon">
                <SmartImage
                  src={`/images/avant-apres/${r.img}.jpg`}
                  alt={r.caption}
                  fill
                  sizes="420px"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(45,106,94,0.32), transparent 55%)' }}
                />
              </div>
              <figcaption className="mt-4 font-sans text-[13px] font-light tracking-wide text-sable/80">
                {r.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

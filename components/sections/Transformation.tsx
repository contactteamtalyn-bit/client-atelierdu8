import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

const pairs = [
  { n: 1, caption: 'Lissage longue durée · Cheveux bouclés épais' },
  { n: 2, caption: 'Lissage & soin kératine · Cheveux méditerranéens' },
  { n: 3, caption: 'Lissage douceur · Cheveux fins colorés' },
]

function Tile({ src, alt, label, tint }: { src: string; alt: string; label: string; tint: 'terra' | 'jade' }) {
  return (
    <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-charbon">
      <SmartImage src={src} alt={alt} fill sizes="320px" className="object-cover" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            tint === 'terra'
              ? 'linear-gradient(to top, rgba(212,133,107,0.35), transparent 55%)'
              : 'linear-gradient(to top, rgba(45,106,94,0.35), transparent 55%)',
        }}
      />
      <span className="absolute left-3 top-3 font-sans text-[10px] uppercase tracking-[0.3em] text-lait/80">
        {label}
      </span>
    </div>
  )
}

export function Transformation() {
  return (
    <section className="overflow-hidden bg-charbon py-24 text-lait md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-jade">— Transformations</p>
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
          {pairs.map((p) => (
            <figure key={p.n} className="w-[86vw] max-w-[600px] sm:w-[560px]">
              <div className="flex gap-[2px] bg-jade">
                <Tile
                  src={`/images/avant-apres/avant-0${p.n}.jpg`}
                  alt={`Avant — ${p.caption}`}
                  label="Avant"
                  tint="terra"
                />
                <Tile
                  src={`/images/avant-apres/apres-0${p.n}.jpg`}
                  alt={`Après — ${p.caption}`}
                  label="Après"
                  tint="jade"
                />
              </div>
              <figcaption className="mt-4 font-sans text-[13px] font-light tracking-wide text-sable/80">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

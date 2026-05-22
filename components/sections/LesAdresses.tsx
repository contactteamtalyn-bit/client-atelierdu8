import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

const paris = [
  { num: '01', name: 'Champs-Élysées', zone: 'Paris 8ᵉ', img: 'champs-elysees' },
  { num: '02', name: 'Marais', zone: 'Paris 4ᵉ', img: 'marais' },
  { num: '03', name: "Palais de l'Élysée", zone: 'Paris 8ᵉ', img: 'elysee' },
  { num: '04', name: "Palais de l'Élysée · II", zone: 'Paris 8ᵉ', img: 'elysee-2' },
]

export function LesAdresses() {
  return (
    <>
      <section id="adresses" className="bg-lait py-24 md:py-32">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow text-jade">Nos maisons</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-charbon" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.05 }}>
              Paris.
              <br />
              <em style={{ fontStyle: 'italic', color: '#2D6A5E' }}>Et bientôt le monde.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[500px] font-sans text-[18px] font-light leading-relaxed text-charbon/60">
              4 adresses à Paris, 1 à Marseille. Et demain, Londres, Dubaï, Miami.
            </p>
          </Reveal>

          {/* 4 cards Paris */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {paris.map((s, i) => (
              <Reveal key={s.num} delay={(i % 2) * 100}>
                <article className="group relative aspect-[16/11] overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                  <SmartImage
                    src={`/images/salons/${s.img}.jpg`}
                    alt={`Salon L'Atelier du 8 — ${s.name}`}
                    fill
                    sizes="(max-width:640px) 100vw, 50vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(45,106,94,0.85) 0%, rgba(45,106,94,0.15) 45%, transparent 70%)' }}
                  />
                  <span
                    aria-hidden
                    className="absolute right-5 top-3 font-display italic leading-none text-lait opacity-15 transition-opacity duration-500 group-hover:opacity-30"
                    style={{ fontSize: '4rem' }}
                  >
                    {s.num}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-sans text-[16px] font-bold uppercase tracking-[0.12em] text-lait">{s.name}</h3>
                    <p className="mt-1 font-sans text-[13px] font-light text-lait/70">{s.zone}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bande Marseille */}
          <Reveal delay={120}>
            <div className="mt-5 grid items-stretch overflow-hidden bg-jade md:grid-cols-3">
              <div className="relative min-h-[220px]">
                <SmartImage
                  src="/images/salons/marseille.jpg"
                  alt="Salon L'Atelier du 8 — Marseille"
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-9">
                <h3 className="font-display text-[3rem] leading-none text-lait">Et Marseille.</h3>
                <p className="mt-4 font-sans text-[14px] font-light leading-relaxed text-lait/70">
                  Marseille 8ᵉ · Du mardi au samedi
                  <br />
                  Sur rendez-vous · Diagnostic offert
                </p>
              </div>
              <div className="flex items-center justify-center p-9 md:justify-end">
                <span className="bg-terracotta px-5 py-2 font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-lait">
                  Marseille 8e
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ambitions */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-charbon py-24 text-center">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center whitespace-nowrap font-display italic leading-none text-lait"
          style={{ fontSize: 'clamp(5rem,10vw,9rem)', opacity: 0.08 }}
        >
          Londres · Dubaï · Miami
        </span>
        <div className="wrap relative z-[2]">
          <Reveal>
            <p className="eyebrow text-jade">Prochainement</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-[560px] font-sans text-[18px] font-light leading-relaxed text-lait">
              L&apos;Atelier du 8 grandit. Vous pourrez bientôt nous retrouver hors de France —
              <em style={{ fontStyle: 'italic', color: '#D4856B' }}> Londres, Dubaï, Miami.</em>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

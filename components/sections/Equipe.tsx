import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

// Démarchage à froid : aucun portrait nominatif réel disponible.
// → Présentation par métier / engagement (collectif), sans faux mapping visage ↔ nom.
const metiers = [
  {
    img: 'atelier-01',
    title: 'Le lissage',
    role: 'Styliste dédié · Spécialiste sans formol',
    desc: "Votre expert lissage vous suit du diagnostic à la dernière mèche. Une seule main, une seule vision.",
  },
  {
    img: 'atelier-02',
    title: 'La couleur',
    role: 'Coloriste · Balayage & ombré',
    desc: 'Lecture de la lumière, équilibre des tons : votre coloriste compose la nuance qui vous ressemble.',
  },
  {
    img: 'atelier-03',
    title: 'Le diagnostic',
    role: 'Expert·e capillaire',
    desc: "Avant chaque soin, l'analyse de votre fibre — nature, porosité, historique — pour un protocole sur-mesure.",
  },
]

export function Equipe() {
  return (
    <section className="bg-sable py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-jade">L&apos;équipe</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-charbon" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.05 }}>
              Votre styliste.
              <br />
              <em style={{ fontStyle: 'italic', color: '#2D6A5E' }}>Rien que le vôtre.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 font-sans text-[17px] font-light leading-relaxed text-charbon/70">
              Un styliste dédié pour chaque cliente, du diagnostic à la finition. C&apos;est notre
              engagement depuis le premier jour.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metiers.map((m, i) => (
            <Reveal key={m.title} delay={i * 100}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-charbon/10">
                  <SmartImage
                    src={`/images/equipe/${m.img}.jpg`}
                    alt={`L'Atelier du 8 — ${m.title}`}
                    fill
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-jade opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
                <h3 className="mt-5 font-display text-[24px] italic text-charbon">{m.title}</h3>
                <p className="mt-1 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-jade">
                  {m.role}
                </p>
                <p className="mt-3 font-sans text-[14px] font-light leading-relaxed text-charbon/60">
                  {m.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

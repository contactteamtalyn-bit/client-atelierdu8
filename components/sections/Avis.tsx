import { Reveal } from '@/components/ui/Reveal'

const avis = [
  {
    text: "J'ai testé des dizaines de lissages à Paris. Celui de L'Atelier du 8 est le seul qui a tenu 6 mois sans abîmer mes cheveux. Le styliste dédié, c'est un vrai plus.",
    name: 'Amira S.',
  },
  {
    text: "Le diagnostic capillaire m'a rassurée tout de suite. Ils ne vendent pas de service, ils conseillent vraiment. Résultat bluffant sur cheveux naturels.",
    name: 'Laura M.',
  },
  {
    text: "Tarif très correct pour un résultat de haute gamme. L'adresse du Marais est magnifique. J'y retourne chaque saison.",
    name: 'Isabelle T.',
  },
]

export function Avis() {
  return (
    <section id="avis" className="bg-lait py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-jade">Elles témoignent</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-charbon" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.05 }}>
            440 avis.
            <br />
            <em style={{ fontStyle: 'italic', color: '#2D6A5E' }}>Une confiance.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {avis.map((a, i) => (
            <Reveal key={a.name} delay={i * 110}>
              <figure className="flex h-full flex-col">
                <span aria-hidden className="font-display leading-[0.6] text-jade" style={{ fontSize: '6rem' }}>
                  «
                </span>
                <blockquote className="-mt-4 font-sans text-[17px] font-light italic leading-[1.7] text-charbon/85">
                  {a.text}
                </blockquote>
                <span className="my-6 block h-px w-[40px] bg-terracotta" aria-hidden />
                <figcaption className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-charbon">
                  {a.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

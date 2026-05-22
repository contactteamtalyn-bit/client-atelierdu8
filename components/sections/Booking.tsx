import { Reveal } from '@/components/ui/Reveal'
import { OrganicBlob } from '@/components/ui/OrganicBlob'
import { DemoCTA } from '@/components/DemoModal'

export function Booking() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-jade py-24 text-center">
      <OrganicBlob shape="b" color="terra" opacity={0.08} spin className="left-[-10%] top-[-10%] h-[55vh] w-[55vh]" />
      <OrganicBlob shape="d" color="sable" opacity={0.06} className="bottom-[-12%] right-[-8%] h-[48vh] w-[48vh]" />

      <div className="wrap relative z-[2]">
        <Reveal>
          <p className="eyebrow text-sable">Votre prochaine séance</p>
        </Reveal>
        <Reveal delay={90}>
          <h2
            className="mx-auto mt-6 max-w-5xl font-display text-lait"
            style={{ fontSize: 'clamp(3rem,9vw,8rem)', lineHeight: 0.95 }}
          >
            Votre cheveu
            <br />
            <em style={{ fontStyle: 'italic' }}>vous attend.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-[440px] font-sans text-[18px] font-light leading-relaxed text-lait/70">
            Diagnostic gratuit. Styliste dédié. Résultat garanti 3 à 6 mois.
          </p>
        </Reveal>
        <Reveal delay={210}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <DemoCTA
              ariaLabel="Réserver maintenant"
              className="bg-lait px-11 py-[18px] font-sans text-[14px] font-semibold uppercase tracking-[0.16em] text-jade transition-colors duration-300 hover:bg-sable"
            >
              Réserver maintenant →
            </DemoCTA>
            <a
              href="tel:+33649762997"
              data-allow="true"
              className="link-underline font-sans text-[14px] font-light text-lait/70 transition-colors hover:text-lait"
            >
              Nous appeler · 06 49 76 29 97
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

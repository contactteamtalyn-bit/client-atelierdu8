import { ShieldCheck, Sparkles, Microscope } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { OrganicBlob } from '@/components/ui/OrganicBlob'

const engagements = [
  {
    numeral: 'I',
    Icon: ShieldCheck,
    title: 'Zéro formol',
    sub: 'Engagement santé',
    desc:
      "Nos lissages ne contiennent ni formaldéhyde ni acide glyoxylique. La kératine pure nourrit le cheveu au lieu de l'agresser. Votre santé n'est pas négociable.",
  },
  {
    numeral: 'II',
    Icon: Sparkles,
    title: 'Kératine pure',
    sub: 'Transmission totale',
    desc:
      "Le cheveu est constitué à 90% de kératine. Notre soin reconstitue cette structure naturelle de l'intérieur. Résultat : brillance, légèreté et douceur. Sans altérer la structure moléculaire du cheveu.",
  },
  {
    numeral: 'III',
    Icon: Microscope,
    title: 'Sur-mesure absolu',
    sub: 'Pour chaque cheveu',
    desc:
      'Cheveux européens, méditerranéens, bouclés, crépus — chaque nature est différente. Notre diagnostic capillaire précède chaque séance pour adapter le soin à votre réalité capillaire.',
  },
]

export function SansFormol() {
  return (
    <section
      id="sans-formol"
      className="cursor-drop relative overflow-hidden bg-charbon py-24 text-lait md:py-32"
    >
      <OrganicBlob shape="c" color="jade" opacity={0.07} className="left-[-8%] top-[10%] h-[44vh] w-[44vh]" />
      <OrganicBlob shape="e" color="terra" opacity={0.06} spin className="bottom-[-6%] right-[-6%] h-[40vh] w-[40vh]" />

      <div className="wrap relative z-[2]">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow text-terracotta">— Le Manifeste</p>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="mt-6 font-display text-lait"
              style={{ fontSize: 'clamp(2.8rem,8vw,7rem)', lineHeight: 0.95 }}
            >
              Sans formol.
              <br />
              <em style={{ fontStyle: 'italic', color: '#D4856B' }}>Sans compromis.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-7 max-w-[600px] font-sans text-[18px] font-light leading-relaxed text-sable">
              Il y a ce qu&apos;on vous promet et ce qu&apos;on ne vous dit pas. Chez L&apos;Atelier
              du 8, on a choisi la transparence absolue depuis le premier jour.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 h-px w-full max-w-5xl bg-jade/60" />

        {/* Engagements */}
        <div className="mx-auto mt-4 grid max-w-5xl md:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal
              key={e.numeral}
              delay={i * 120}
              className={i < 2 ? 'md:border-r md:border-jade/30' : ''}
            >
              <div className="relative overflow-hidden px-2 py-12 md:px-12">
                {/* numéro romain background */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-2 top-0 select-none font-display leading-none text-lait"
                  style={{ fontSize: '12rem', opacity: 0.04 }}
                >
                  {e.numeral}
                </span>

                <e.Icon size={48} className="relative text-jade" strokeWidth={1.4} />
                <h3 className="relative mt-7 font-display text-[32px] text-lait">{e.title}</h3>
                <p className="relative mt-2 font-sans text-[13px] font-medium uppercase tracking-[0.16em] text-terracotta">
                  {e.sub}
                </p>
                <p className="relative mt-5 font-sans text-[15px] font-light leading-[1.7] text-sable">
                  {e.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

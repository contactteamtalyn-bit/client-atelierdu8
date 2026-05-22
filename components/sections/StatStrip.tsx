import { CountUp } from '@/components/ui/CountUp'

const stats = [
  { end: 5, suffix: '', label: 'Villes · Paris & Marseille' },
  { end: 159, suffix: '€', label: 'Lissage dès' },
  { end: 0, suffix: '', label: 'Formol · Acide glyoxylique' },
  { end: 1, suffix: '', label: 'Styliste dédié par cliente' },
]

export function StatStrip() {
  return (
    <section className="bg-jade">
      <div className="wrap-wide grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-4 py-12 text-center lg:py-0 lg:min-h-[160px]"
            style={{
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
            }}
          >
            <CountUp
              end={s.end}
              suffix={s.suffix}
              className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-none text-lait"
            />
            <span
              className="mt-4 max-w-[160px] font-sans text-[11px] uppercase leading-snug tracking-[0.14em] text-lait/70"
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useRef, type CSSProperties } from 'react'
import { SmartImage } from '@/components/ui/SmartImage'
import { DemoCTA } from '@/components/DemoModal'

const EASE = [0.16, 1, 0.3, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
}
const item = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const leakRef = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent) {
    const el = sectionRef.current
    const leak = leakRef.current
    if (!el || !leak) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    leak.style.setProperty('--lx', `${x}%`)
    leak.style.setProperty('--ly', `${y}%`)
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-lait pb-16 pt-28 md:pt-24"
    >
      {/* ── Étage images ── */}
      <div className="absolute inset-0">
        {/* Avant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-0 top-0 h-full w-full md:w-[62%]"
        >
          <SmartImage
            src="/images/hero/avant.jpg"
            alt="Cheveux texturés avant transformation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: 'saturate(0.7) brightness(0.9)' }}
          />
        </motion.div>

        {/* Après (révélation clip-path droite → gauche) */}
        <motion.div
          initial={{ clipPath: 'inset(0 0 0 100%)' }}
          animate={{ clipPath: 'inset(0 0 0 0%)' }}
          transition={{ duration: 1.5, ease: EASE, delay: 0.3 }}
          className="absolute right-0 top-0 h-full w-full md:w-[62%]"
        >
          <SmartImage
            src="/images/hero/apres.jpg"
            alt="Cheveux lisses et lumineux après transformation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: 'brightness(1.05)' }}
          />
        </motion.div>

        {/* Blob jade animé */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[18%] top-[24%] z-[2] hidden h-[42vh] w-[42vh] animate-spin-slow md:block"
          style={{
            borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%',
            background: 'rgba(45,106,94,0.05)',
            filter: 'blur(8px)',
          }}
        />

        {/* Light leak qui suit la souris */}
        <div
          ref={leakRef}
          aria-hidden
          className="leak-jade pointer-events-none absolute inset-0 z-[2] opacity-70 transition-[background] duration-300"
          style={{ '--lx': '70%', '--ly': '28%' } as CSSProperties}
        />

        {/* Voile lait pour lisibilité (droite) */}
        <div
          aria-hidden
          className="absolute inset-0 z-[3]"
          style={{
            background:
              'linear-gradient(to left, rgba(250,249,247,0.96) 28%, rgba(250,249,247,0.55) 52%, rgba(250,249,247,0) 78%)',
          }}
        />
      </div>

      {/* ── Contenu ── */}
      <div className="wrap relative z-[5] w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="ml-auto max-w-[540px] rounded-[2px] bg-lait/55 p-7 backdrop-blur-md md:bg-transparent md:p-0 md:backdrop-blur-0"
        >
          <motion.p
            variants={item}
            className="eyebrow text-[10px] tracking-[0.32em] text-jade"
          >
            Spécialiste lissage brésilien · Paris
          </motion.p>

          <motion.span
            variants={item}
            className="my-6 block h-px w-10 bg-terracotta"
            aria-hidden
          />

          <motion.h1
            variants={item}
            className="font-display text-charbon"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 1.0 }}
          >
            Le cheveu
            <br />
            que vous
            <br />
            <em style={{ fontStyle: 'italic', color: '#2D6A5E' }}>méritez.</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-[340px] font-sans text-[17px] font-light leading-relaxed text-charbon/70"
          >
            Lissage brésilien sans formol. Coloration sur-mesure. Un styliste dédié. 4 adresses à
            Paris.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 font-sans text-[13px] tracking-wide text-jade"
          >
            4,7★ · 440 avis · À partir de 159€
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <DemoCTA
              ariaLabel="Réserver une séance"
              className="bg-jade px-8 py-4 font-sans text-[14px] font-medium uppercase tracking-[0.16em] text-lait transition-colors duration-300 hover:bg-charbon"
            >
              Réserver une séance
            </DemoCTA>
            <a
              href="#sans-formol"
              className="link-underline font-sans text-[14px] text-terracotta transition-transform duration-300 hover:translate-x-1"
            >
              Découvrir le sans-formol →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { LAtelier } from '@/components/sections/LAtelier'
import { SansFormol } from '@/components/sections/SansFormol'
import { Services } from '@/components/sections/Services'
import { Transformation } from '@/components/sections/Transformation'
import { LesAdresses } from '@/components/sections/LesAdresses'
import { Equipe } from '@/components/sections/Equipe'
import { Avis } from '@/components/sections/Avis'
import { Booking } from '@/components/sections/Booking'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatStrip />
      <LAtelier />
      <SansFormol />
      <Services />
      <Transformation />
      <LesAdresses />
      <Equipe />
      <Avis />
      <Booking />
      <Footer />
    </main>
  )
}

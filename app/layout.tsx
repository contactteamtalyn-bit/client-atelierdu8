import type { Metadata, Viewport } from 'next'
import { Gilda_Display, Raleway } from 'next/font/google'
import './globals.css'
import { DemoBanner } from '@/components/DemoBanner'
import { DemoModalProvider } from '@/components/DemoModal'
import { Navigation } from '@/components/Navigation'

const display = Gilda_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
})

const sans = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "L'Atelier du 8 — Lissage brésilien sans formol & Coloration · Paris",
  description:
    "Lissage brésilien sans formol, sans acide glyoxylique, kératine pure. Coloration sur-mesure. Un styliste dédié par cliente. 4 salons à Paris, 1 à Marseille. 4,7★ · 440 avis.",
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: "L'Atelier du 8 — Lissage brésilien sans formol · Paris",
    description:
      "Le luxe accessible. Lissage brésilien sans formol, coloration sur-mesure, styliste dédié. Paris · Marseille.",
    type: 'website',
    locale: 'fr_FR',
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%232D6A5E'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='Georgia,serif' font-size='38' fill='%23FAF9F7'%3E8%3C/text%3E%3C/svg%3E",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#1E1E1E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <DemoModalProvider>
          <DemoBanner />
          <Navigation />
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}

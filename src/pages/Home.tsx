import { Sparkle } from 'lucide-react'
import Hero from '../components/Hero'
import CalorieCalc from '../components/CalorieCalc'
import Pricing from '../components/Pricing'
import { useEffect } from 'react'

const tickerWords = ['Fuerza', 'Disciplina', 'Comunidad', 'Resultados', 'Constancia', 'Alicante']

function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-volt-deep/30 bg-volt py-4"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {tickerWords.map((word) => (
              <span key={`${copy}-${word}`} className="flex items-center">
                <span className="px-7 font-display text-sm font-bold uppercase tracking-[0.28em] text-ink">
                  {word}
                </span>
                <Sparkle className="h-3.5 w-3.5 text-ink/50" strokeWidth={3} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'Pulse Fitness Studio · Gimnasio urbano en Alicante'
  }, [])

  return (
    <>
      <Hero />
      <Ticker />
      <CalorieCalc />
      <Pricing />
    </>
  )
}

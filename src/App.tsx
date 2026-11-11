import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LegalPage from './components/LegalPage'
import Home from './pages/Home'
import Reservation from './pages/Reservation'
import { condiciones, cookies, privacidad } from './data/legalData'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const frame = requestAnimationFrame(() => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

function NotFound() {
  useEffect(() => {
    document.title = 'Página no encontrada · Pulse Fitness Studio'
  }, [])

  return (
    <section className="relative overflow-hidden pb-24 pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-[640px] -translate-x-1/2 rounded-full bg-volt/[0.07] blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>
      <div className="mx-auto max-w-xl px-5 text-center sm:px-8">
        <p className="font-display text-7xl font-extrabold text-volt">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white">
          Esta página no existe.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Puede que el enlace haya cambiado o que la página ya no esté disponible. Vuelve al inicio
          y sigue entrenando.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-volt px-6 py-3 text-sm font-semibold text-ink transition hover:bg-volt-soft"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden bg-ink">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/condiciones" element={<LegalPage document={condiciones} />} />
            <Route path="/privacidad" element={<LegalPage document={privacidad} />} />
            <Route path="/cookies" element={<LegalPage document={cookies} />} />
            <Route path="/reserva" element={<Reservation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

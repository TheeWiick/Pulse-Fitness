import { useEffect, useState } from 'react'
import { Activity, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Inicio', to: '/#inicio' },
  { label: 'Calculadora', to: '/#calculadora' },
  { label: 'Planes', to: '/#planes' },
  { label: 'Contacto', to: '/#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/#inicio" className="flex items-center gap-3" aria-label="Pulse Fitness Studio">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-volt text-ink shadow-glow">
            <Activity className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            PULSE<span className="text-volt">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/reserva"
          className="hidden rounded-full bg-volt px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-volt-soft md:inline-flex"
        >
          Prueba gratis
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-8 pt-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/reserva"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-volt px-5 py-3 text-center text-sm font-semibold text-ink transition hover:bg-volt-soft"
            >
              Prueba gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

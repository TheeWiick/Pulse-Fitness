import {
  Activity,
  ArrowUpRight,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const exploreLinks = [
  { label: 'Inicio', to: '/#inicio' },
  { label: 'Calculadora', to: '/#calculadora' },
  { label: 'Planes', to: '/#planes' },
  { label: 'Reserva tu semana', to: '/reserva' },
]

const legalLinks = [
  { label: 'Condiciones', to: '/condiciones' },
  { label: 'Privacidad', to: '/privacidad' },
  { label: 'Cookies', to: '/cookies' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
]

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 bg-ink"
    >
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-72 w-[720px] -translate-x-1/2 rounded-full bg-volt/[0.07] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-volt">
              Empieza hoy
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl">
              Tu primera semana
              <br />
              <span className="text-volt">corre de nuestra cuenta.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
              Pásate por el estudio, conoce al equipo y prueba la sala sin compromiso. Si no te
              engancha, no pagas nada.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/reserva"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-volt px-6 py-3.5 text-sm font-semibold text-ink shadow-glow transition hover:bg-volt-soft"
              >
                Reservar semana gratis
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:+34600000000"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                <Phone className="h-4 w-4 text-volt" />
                600 000 000
              </a>
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-ink-soft/70 p-6 shadow-card sm:p-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <MapPin className="h-4 w-4 text-volt" />
              Encuéntranos
            </div>

            <p className="mt-4 font-display text-xl font-bold text-white">
              Calle Castaños 12
            </p>
            <p className="text-sm text-zinc-400">03001 Alicante · Comunidad Valenciana</p>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                <div>
                  <p className="text-zinc-300">Lun–Vie · 06:00–23:00</p>
                  <p className="text-zinc-500">Sáb–Dom · 08:00–22:00</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-volt">
                    Acceso 24/7 con llave digital
                  </p>
                </div>
              </div>
              <a
                href="mailto:hola@pulsefitness.es"
                className="flex items-center gap-3 text-zinc-300 transition hover:text-volt"
              >
                <Mail className="h-4 w-4 shrink-0 text-volt" />
                hola@pulsefitness.es
              </a>
              <a
                href="tel:+34600000000"
                className="flex items-center gap-3 text-zinc-300 transition hover:text-volt"
              >
                <Phone className="h-4 w-4 shrink-0 text-volt" />
                600 000 000
              </a>
            </div>

            <a
              href="https://maps.google.com/?q=Calle+Castaños+12,+Alicante"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:border-volt/40 hover:text-volt"
            >
              Ver en Google Maps
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/#inicio"
              className="flex items-center gap-3"
              aria-label="Pulse Fitness Studio"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-volt text-ink">
                <Activity className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                PULSE<span className="text-volt">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">
              Gimnasio urbano de fuerza y comunidad en el centro de Alicante. Entrena mejor, vive
              mejor.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-volt/40 hover:text-volt"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Explorar
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-zinc-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Horario
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
              <li className="flex justify-between gap-4">
                <span>Lunes–Viernes</span>
                <span className="text-zinc-300">06–23</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sábado</span>
                <span className="text-zinc-300">08–22</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Domingo</span>
                <span className="text-zinc-300">08–22</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-zinc-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-xs text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Pulse Fitness Studio · Alicante</p>
          <p>Hecho con disciplina en Alicante.</p>
        </div>
      </div>
    </footer>
  )
}

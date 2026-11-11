import { ArrowUpRight, Clock, Flame, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '500+', label: 'socios activos' },
  { value: '24/7', label: 'acceso con llave digital' },
  { value: '4.9★', label: 'valoración media' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[540px] w-[840px] -translate-x-1/2 rounded-full bg-volt/10 blur-[150px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-[130px]" />
        <div className="absolute inset-0 bg-grid opacity-70" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-volt/20 bg-volt/5 px-4 py-1.5 text-xs font-medium tracking-wide text-volt">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-volt" />
            </span>
            Nuevo · Alicante Centro
          </span>

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Forja tu
            <br />
            <span className="bg-gradient-to-r from-volt via-volt-soft to-white bg-clip-text text-transparent">
              mejor versión.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-zinc-400 sm:text-lg">
            Gimnasio urbano en el corazón de Alicante. Fuerza, clases y comunidad real en un
            espacio diseñado para que entrenar sea lo mejor de tu día.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/reserva"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-volt px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition hover:bg-volt-soft"
            >
              Empieza gratis
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/#calculadora"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
            >
              <Flame className="h-4 w-4 text-volt" />
              Calcula tus calorías
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-ink-card shadow-card">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
              alt="Sala de entrenamiento de Pulse Fitness Studio en Alicante"
              className="h-[420px] w-full object-cover opacity-90 sm:h-[500px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-6">
              <div>
                <p className="font-display text-sm font-semibold text-white">Sala principal</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-400">
                  <MapPin className="h-3.5 w-3.5 text-volt" />
                  Calle Castaños 12 · Alicante
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink/70 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
                <Clock className="h-3.5 w-3.5 text-volt" />
                Abierto 24/7
              </span>
            </div>
          </div>

          <div className="absolute -left-4 top-8 hidden items-center gap-3 rounded-2xl border border-white/10 bg-ink-soft/90 p-4 shadow-card backdrop-blur sm:flex">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-volt/10 text-volt">
              <Star className="h-5 w-5 fill-volt" />
            </span>
            <div>
              <p className="font-display text-sm font-bold text-white">4.9 / 5</p>
              <p className="text-[11px] text-zinc-500">320 reseñas en Google</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-3 hidden rounded-2xl border border-volt/20 bg-volt px-5 py-4 shadow-glow sm:block">
            <p className="font-display text-2xl font-extrabold leading-none text-ink">1ª</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-ink/70">
              semana gratis
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock,
  Dumbbell,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { plans } from '../data/pricingData'

interface FormState {
  name: string
  email: string
  phone: string
  plan: string
  date: string
  goal: string
  message: string
  privacy: boolean
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  plan: 'pro',
  date: '',
  goal: '',
  message: '',
  privacy: false,
}

const goalOptions = [
  'Perder grasa',
  'Ganar masa muscular',
  'Mejorar mi condición física',
  'Recuperarme de una lesión',
  'Aún no lo tengo claro',
]

const includes = [
  'Acceso completo a la sala durante 7 días',
  'Una clase colectiva de tu elección',
  'Evaluación inicial con un entrenador',
  'Sin matrícula, sin permanencia y sin compromiso',
]

const inputClass =
  'w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition focus:bg-white/[0.05]'

const today = new Date().toISOString().slice(0, 10)

interface FieldProps {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  children: ReactNode
}

function Field({ label, htmlFor, required, error, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500"
      >
        {label}
        {required && <span className="text-volt">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[11px] font-medium text-red-400">{error}</p>}
    </div>
  )
}

export default function Reservation() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const planLabel = plans.find((plan) => plan.id === form.plan)?.name ?? 'Aún no lo sé'

  useEffect(() => {
    document.title = 'Reserva tu semana gratis · Pulse Fitness Studio'
  }, [])

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      update(field, event.target.value)
    }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}

    if (form.name.trim().length < 2) {
      next.name = 'Dinos cómo te llamas.'
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = 'Introduce un email válido.'
    }
    if (!/^[+()\d\s.-]{6,}$/.test(form.phone.trim()) || form.phone.replace(/\D/g, '').length < 6) {
      next.phone = 'Introduce un teléfono de contacto válido.'
    }
    if (!form.privacy) {
      next.privacy = 'Debes aceptar la política de privacidad.'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validate()) {
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (submitted) {
    return (
      <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-volt/10 blur-[150px]" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>

        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <div className="rounded-4xl border border-volt/25 bg-gradient-to-b from-volt/[0.08] to-ink-soft p-8 text-center shadow-card sm:p-12">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-volt text-ink shadow-glow">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              ¡Nos vemos en PULSE{form.name ? `, ${form.name.split(' ')[0]}` : ''}!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Hemos recibido tu solicitud para la semana gratis. Te escribiremos a{' '}
              <span className="font-medium text-white">{form.email}</span> en menos de 24 horas para
              confirmar día y hora.
            </p>

            <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-ink/40 p-5 text-left text-sm sm:grid-cols-2">
              <div className="flex items-center gap-3 text-zinc-400">
                <Dumbbell className="h-4 w-4 shrink-0 text-volt" />
                Plan de interés: <span className="font-medium text-white">{planLabel}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Clock className="h-4 w-4 shrink-0 text-volt" />
                Respuesta en &lt; 24 h
              </div>
              <div className="flex items-center gap-3 text-zinc-400 sm:col-span-2">
                <MapPin className="h-4 w-4 shrink-0 text-volt" />
                Calle Castaños 12 · 03001 Alicante
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-volt px-6 py-3 text-sm font-semibold text-ink transition hover:bg-volt-soft"
              >
                Volver al inicio
              </Link>
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm)
                  setErrors({})
                  setSubmitted(false)
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                Hacer otra reserva
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[440px] w-[780px] -translate-x-1/2 rounded-full bg-volt/[0.07] blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="mt-8 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-volt/20 bg-volt/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-volt">
            <Sparkles className="h-3.5 w-3.5" />
            Semana gratis
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Reserva tu primera semana.
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-zinc-400">
            Rellena el formulario y te contactamos en menos de 24 horas. Sin matrícula, sin
            permanencia y sin sorpresas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-4xl border border-white/10 bg-ink-soft/70 p-6 shadow-card backdrop-blur sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label="Nombre y apellidos" htmlFor="name" required error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange('name')}
                    className={`${inputClass} ${
                      errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-volt/50'
                    }`}
                  />
                </Field>
              </div>

              <Field label="Email" htmlFor="email" required error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange('email')}
                  className={`${inputClass} ${
                    errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-volt/50'
                  }`}
                />
              </Field>

              <Field label="Teléfono" htmlFor="phone" required error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="600 000 000"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  className={`${inputClass} ${
                    errors.phone ? 'border-red-500/60' : 'border-white/10 focus:border-volt/50'
                  }`}
                />
              </Field>

              <Field label="Plan de interés" htmlFor="plan">
                <select
                  id="plan"
                  name="plan"
                  value={form.plan}
                  onChange={handleChange('plan')}
                  className={`${inputClass} border-white/10 focus:border-volt/50 [color-scheme:dark]`}
                >
                  {plans.map((plan) => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} · {plan.monthly}€/mes
                    </option>
                  ))}
                  <option value="aun-no-lo-se">Aún no lo sé</option>
                </select>
              </Field>

              <Field label="Día preferido" htmlFor="date">
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={handleChange('date')}
                  className={`${inputClass} border-white/10 focus:border-volt/50 [color-scheme:dark]`}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Tu objetivo" htmlFor="goal">
                  <select
                    id="goal"
                    name="goal"
                    value={form.goal}
                    onChange={handleChange('goal')}
                    className={`${inputClass} border-white/10 focus:border-volt/50 [color-scheme:dark]`}
                  >
                    <option value="">Selecciona una opción</option>
                    {goalOptions.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="sm:col-span-2">
                <Field label="¿Algo que debamos saber?" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Lesiones, horarios, dudas…"
                    value={form.message}
                    onChange={handleChange('message')}
                    className={`${inputClass} resize-none border-white/10 focus:border-volt/50`}
                  />
                </Field>
              </div>
            </div>

            <div className="mt-6">
              <label className="flex cursor-pointer items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={form.privacy}
                  onChange={(event) => update('privacy', event.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-volt"
                />
                <span className="leading-relaxed text-zinc-400">
                  He leído y acepto la{' '}
                  <Link to="/privacidad" className="font-medium text-volt hover:underline">
                    política de privacidad
                  </Link>{' '}
                  y el tratamiento de mis datos para gestionar esta reserva.
                </span>
              </label>
              {errors.privacy && (
                <p className="mt-1.5 text-[11px] font-medium text-red-400">{errors.privacy}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-volt px-6 py-3.5 text-sm font-semibold text-ink shadow-glow transition hover:bg-volt-soft"
            >
              Reservar mi semana gratis
            </button>

            <p className="mt-3 text-center text-[11px] text-zinc-600">
              Sin coste ni tarjeta. Solo usamos tus datos para contactarte.
            </p>
          </form>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-4xl border border-volt/20 bg-gradient-to-b from-volt/[0.08] to-ink-soft p-6 sm:p-7">
              <h2 className="font-display text-lg font-bold text-white">Qué incluye</h2>
              <ul className="mt-4 space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-volt/15 text-volt">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-4xl border border-white/10 bg-ink-soft/70 p-6 sm:p-7">
              <h2 className="font-display text-base font-bold text-white">¿Prefieres hablar?</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+34600000000"
                    className="flex items-center gap-3 text-zinc-400 transition hover:text-volt"
                  >
                    <Phone className="h-4 w-4 text-volt" />
                    600 000 000
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@pulsefitness.es"
                    className="flex items-center gap-3 text-zinc-400 transition hover:text-volt"
                  >
                    <Mail className="h-4 w-4 text-volt" />
                    hola@pulsefitness.es
                  </a>
                </li>
                <li className="flex items-start gap-3 text-zinc-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                  Calle Castaños 12, 03001 Alicante
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-zinc-500">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
              Tus datos se tratan conforme al RGPD y solo se utilizan para gestionar tu solicitud.
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

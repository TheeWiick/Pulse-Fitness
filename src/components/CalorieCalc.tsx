import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import {
  Flame,
  Info,
  Minus,
  Plus,
  Ruler,
  Scale,
  Target,
  TrendingDown,
  TrendingUp,
  User,
  Zap,
} from 'lucide-react'
import type { ActivityLevel, Goal, Sex } from '../types'
import { calculateCalories } from '../utils/calorieCalc'

const activityOptions: { id: ActivityLevel; label: string; hint: string }[] = [
  { id: 'sedentary', label: 'Sedentario', hint: 'Poco o nada de ejercicio' },
  { id: 'light', label: 'Ligero', hint: '1–2 días por semana' },
  { id: 'moderate', label: 'Moderado', hint: '3–4 días por semana' },
  { id: 'intense', label: 'Intenso', hint: '5 o más días por semana' },
]

const goalOptions: { id: Goal; label: string; icon: typeof Target }[] = [
  { id: 'cut', label: 'Perder grasa', icon: TrendingDown },
  { id: 'maintain', label: 'Mantener', icon: Target },
  { id: 'bulk', label: 'Ganar músculo', icon: TrendingUp },
]

const goalLabel: Record<Goal, string> = {
  cut: 'Déficit',
  maintain: 'Mantenimiento',
  bulk: 'Superávit',
}

interface StatInputProps {
  label: string
  unit: string
  icon: ReactNode
  value: number
  step: number
  onChange: (value: number) => void
}

function StatInput({ label, unit, icon, value, step, onChange }: StatInputProps) {
  const [draft, setDraft] = useState(() => String(value))
  const [focused, setFocused] = useState(false)
  const valueRef = useRef(value)
  const holdRef = useRef<number | null>(null)

  /** Mantiene el borrador sincronizado con el valor real, salvo mientras se escribe. */
  useEffect(() => {
    valueRef.current = value
    const parsed = Number(draft.replace(',', '.'))
    if (!focused || !Number.isFinite(parsed) || parsed !== value) {
      setDraft(String(value))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const clearHold = () => {
    if (holdRef.current !== null) {
      window.clearTimeout(holdRef.current)
      holdRef.current = null
    }
  }

  useEffect(() => clearHold, [])

  const applyValue = (next: number) => {
    if (!Number.isFinite(next) || next < 0) return
    valueRef.current = next
    onChange(next)
  }

  const applyStep = (direction: 1 | -1) => {
    applyValue(Math.max(0, Number((valueRef.current + direction * step).toFixed(2))))
  }

  /** Aplica un paso inmediato y repite mientras se mantiene pulsado, acelerando. */
  const startHold = (direction: 1 | -1) => {
    clearHold()
    applyStep(direction)

    let delay = 400
    let ticks = 0
    const repeat = () => {
      applyStep(direction)
      ticks += 1
      if (ticks >= 6) delay = Math.max(45, Math.round(delay * 0.72))
      holdRef.current = window.setTimeout(repeat, delay)
    }
    holdRef.current = window.setTimeout(repeat, delay)
  }

  const handleInput = (raw: string) => {
    setDraft(raw)
    const parsed = Number(raw.replace(',', '.'))
    if (raw.trim() !== '' && Number.isFinite(parsed) && parsed >= 0) {
      valueRef.current = parsed
      onChange(parsed)
    }
  }

  const handleBlur = () => {
    setFocused(false)
    setDraft(String(valueRef.current))
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition focus-within:border-volt/40">
      <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
        {icon}
        {label}
      </div>
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onPointerDown={(event) => {
            if (event.pointerType === 'mouse' && event.button !== 0) return
            event.currentTarget.setPointerCapture(event.pointerId)
            startHold(-1)
          }}
          onPointerUp={clearHold}
          onPointerCancel={clearHold}
          onLostPointerCapture={clearHold}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              applyStep(-1)
            }
          }}
          onContextMenu={(event) => event.preventDefault()}
          aria-label={`Restar ${label}`}
          className="grid h-8 w-8 shrink-0 touch-none select-none place-items-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white active:bg-white/10"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>

        <div className="flex min-w-0 items-baseline justify-center gap-1">
          <input
            type="text"
            inputMode="decimal"
            autoComplete="off"
            spellCheck={false}
            value={draft}
            onChange={(event) => handleInput(event.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            aria-label={label}
            className="w-full min-w-0 bg-transparent text-center font-display text-2xl font-bold text-white outline-none"
          />
          <span className="text-xs font-medium text-zinc-500">{unit}</span>
        </div>

        <button
          type="button"
          onPointerDown={(event) => {
            if (event.pointerType === 'mouse' && event.button !== 0) return
            event.currentTarget.setPointerCapture(event.pointerId)
            startHold(1)
          }}
          onPointerUp={clearHold}
          onPointerCancel={clearHold}
          onLostPointerCapture={clearHold}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              applyStep(1)
            }
          }}
          onContextMenu={(event) => event.preventDefault()}
          aria-label={`Sumar ${label}`}
          className="grid h-8 w-8 shrink-0 touch-none select-none place-items-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/25 hover:text-white active:bg-white/10"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

export default function CalorieCalc() {
  const [sex, setSex] = useState<Sex>('male')
  const [age, setAge] = useState(28)
  const [weight, setWeight] = useState(75)
  const [height, setHeight] = useState(178)
  const [activity, setActivity] = useState<ActivityLevel>('moderate')
  const [goal, setGoal] = useState<Goal>('maintain')

  const result = useMemo(
    () =>
      calculateCalories({
        sex,
        age,
        weightKg: weight,
        heightCm: height,
        activity,
        goal,
      }),
    [sex, age, weight, height, activity, goal],
  )

  const deltaPercent = Math.round((result.target / result.maintenance - 1) * 100)
  const macros = result.macros
  const macroCalories = macros.protein * 4 + macros.fat * 9 + macros.carbs * 4 || 1

  const macroRows = [
    {
      label: 'Proteína',
      grams: macros.protein,
      kcal: macros.protein * 4,
      color: 'bg-volt',
    },
    {
      label: 'Grasas',
      grams: macros.fat,
      kcal: macros.fat * 9,
      color: 'bg-orange-400',
    },
    {
      label: 'Carbohidratos',
      grams: macros.carbs,
      kcal: macros.carbs * 4,
      color: 'bg-sky-400',
    },
  ]

  return (
    <section id="calculadora" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-volt/[0.04] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-volt">
            Calculadora
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Tu cuerpo, en números.
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-zinc-400">
            Calcula tus calorías diarias y el reparto de macronutrientes con la fórmula
            Mifflin-St Jeor. Ajusta tu objetivo y descubre cuánto necesitas comer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-4xl border border-white/10 bg-ink-soft/70 p-6 shadow-card backdrop-blur sm:p-8">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-volt/10 text-volt">
                <Zap className="h-4 w-4" />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">Tus datos</h3>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Sexo biológico
              </p>
              <div className="grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-1.5">
                {(
                  [
                    { id: 'male', label: 'Hombre' },
                    { id: 'female', label: 'Mujer' },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSex(option.id)}
                    aria-pressed={sex === option.id}
                    className={`rounded-xl py-2.5 text-sm font-semibold transition ${
                      sex === option.id
                        ? 'bg-volt text-ink'
                        : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <StatInput
                label="Edad"
                unit="años"
                icon={<User className="h-3.5 w-3.5" />}
                value={age}
                step={1}
                onChange={setAge}
              />
              <StatInput
                label="Peso"
                unit="kg"
                icon={<Scale className="h-3.5 w-3.5" />}
                value={weight}
                step={0.5}
                onChange={setWeight}
              />
              <StatInput
                label="Altura"
                unit="cm"
                icon={<Ruler className="h-3.5 w-3.5" />}
                value={height}
                step={1}
                onChange={setHeight}
              />
            </div>

            <div className="mt-6">
              <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                <Zap className="h-3.5 w-3.5" />
                Nivel de actividad
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {activityOptions.map((option) => {
                  const active = activity === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setActivity(option.id)}
                      aria-pressed={active}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        active
                          ? 'border-volt/50 bg-volt/10'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04]'
                      }`}
                    >
                      <span
                        className={`block text-sm font-semibold ${
                          active ? 'text-volt' : 'text-white'
                        }`}
                      >
                        {option.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-zinc-500">{option.hint}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Objetivo
              </p>
              <div className="grid gap-2 sm:grid-cols-3">
                {goalOptions.map((option) => {
                  const Icon = option.icon
                  const active = goal === option.id
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setGoal(option.id)}
                      aria-pressed={active}
                      className={`flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                        active
                          ? 'border-volt/50 bg-volt/10 text-volt'
                          : 'border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {option.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-4xl border border-volt/20 bg-gradient-to-b from-volt/[0.08] via-ink-soft to-ink-soft shadow-card">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                    Tu objetivo diario
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-volt/10 text-volt">
                    <Flame className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-4 flex items-end gap-2">
                  <span className="font-display text-5xl font-extrabold leading-none tracking-tight text-white sm:text-6xl">
                    {result.target.toLocaleString('es-ES')}
                  </span>
                  <span className="pb-1 text-sm font-medium text-zinc-400">kcal / día</span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-volt px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                    {goalLabel[goal]}
                  </span>
                  {deltaPercent !== 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-zinc-400">
                      {deltaPercent > 0 ? (
                        <TrendingUp className="h-3 w-3 text-emerald-400" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-orange-400" />
                      )}
                      {deltaPercent > 0 ? '+' : ''}
                      {deltaPercent}% vs. mantenimiento
                    </span>
                  )}
                </div>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Metabolismo basal</span>
                    <span className="font-semibold text-zinc-300">
                      {result.bmr.toLocaleString('es-ES')} kcal
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500">Gasto de mantenimiento</span>
                    <span className="font-semibold text-zinc-300">
                      {result.maintenance.toLocaleString('es-ES')} kcal
                    </span>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                    Reparto de macros
                  </p>
                  <div className="mt-4 space-y-4">
                    {macroRows.map((macro) => (
                      <div key={macro.label}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="text-zinc-300">{macro.label}</span>
                          <span className="font-semibold text-white">{macro.grams} g</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full rounded-full ${macro.color} transition-all duration-500`}
                            style={{
                              width: `${Math.min(
                                100,
                                Math.round((macro.kcal / macroCalories) * 100),
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 border-t border-white/10 bg-ink/40 px-6 py-4 sm:px-8">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" />
                <p className="text-[11px] leading-relaxed text-zinc-500">
                  Estimación orientativa basada en Mifflin-St Jeor. No sustituye el consejo de un
                  nutricionista o médico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

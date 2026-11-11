import { useState } from 'react'
import { ArrowRight, Check, ShieldCheck, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { planPerks, plans } from '../data/pricingData'
import type { BillingCycle } from '../types'

export default function Pricing() {
  const [billing, setBilling] = useState<BillingCycle>('monthly')

  return (
    <section id="planes" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-volt/[0.06] blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-volt">
            Planes
          </span>
          <h2 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Elige cómo entrenas.
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-zinc-400">
            Sin matrícula ni permanencia. Empieza con una semana gratis y cambia o cancela cuando
            quieras.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              aria-pressed={billing === 'monthly'}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                billing === 'monthly'
                  ? 'bg-white text-ink'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              aria-pressed={billing === 'annual'}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                billing === 'annual'
                  ? 'bg-volt text-ink'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Anual
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  billing === 'annual' ? 'bg-ink/15 text-ink' : 'bg-volt/15 text-volt'
                }`}
              >
                −2 meses
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = billing === 'monthly' ? plan.monthly : plan.annual

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-4xl border p-6 sm:p-7 ${
                  plan.highlighted
                    ? 'border-volt/40 bg-gradient-to-b from-volt/[0.09] via-ink-soft to-ink-soft shadow-glow lg:-mt-4 lg:pb-9'
                    : 'border-white/10 bg-ink-soft/60'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-volt px-4 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{plan.tagline}</p>
                </div>

                <div className="mt-6 flex items-end gap-1.5">
                  <span className="font-display text-5xl font-extrabold leading-none tracking-tight text-white">
                    {price}€
                  </span>
                  <span className="pb-1 text-sm text-zinc-500">/ mes</span>
                </div>
                <p className="mt-2 h-4 text-[11px] text-zinc-500">
                  {billing === 'annual' ? 'Facturado anualmente' : 'Facturación mensual'}
                </p>

                <Link
                  to="/reserva"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? 'bg-volt text-ink hover:bg-volt-soft'
                      : 'border border-white/15 bg-white/[0.03] text-white hover:border-white/30 hover:bg-white/[0.07]'
                  }`}
                >
                  Empezar gratis
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.label}
                      className={`flex items-start gap-2.5 ${
                        feature.included ? 'text-zinc-300' : 'text-zinc-600'
                      }`}
                    >
                      {feature.included ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" strokeWidth={3} />
                      ) : (
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-zinc-700" />
                      )}
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500">
          {planPerks.map((perk) => (
            <span key={perk} className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-volt" />
              {perk}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

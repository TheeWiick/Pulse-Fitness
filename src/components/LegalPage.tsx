import { useEffect } from 'react'
import { ArrowLeft, CalendarDays, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { LegalDocument } from '../types'

interface LegalPageProps {
  document: LegalDocument
}

export default function LegalPage({ document: doc }: LegalPageProps) {
  useEffect(() => {
    document.title = `${doc.title} · Pulse Fitness Studio`
  }, [doc])

  return (
    <div className="relative overflow-hidden pb-24 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-volt/[0.07] blur-[150px]" />
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

        <header className="mt-8 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-volt/20 bg-volt/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-volt">
            <ShieldCheck className="h-3.5 w-3.5" />
            Legal
          </span>
          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-zinc-400">{doc.intro}</p>
          <p className="mt-5 inline-flex items-center gap-2 text-xs text-zinc-500">
            <CalendarDays className="h-3.5 w-3.5" />
            Última actualización: {doc.updatedAt}
          </p>
        </header>

        <div className="mt-12 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <nav aria-label="Índice del documento" className="sticky top-28">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                En esta página
              </p>
              <ul className="mt-4 space-y-2 border-l border-white/10 pl-4 text-sm">
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => {
                        window.document
                          .getElementById(section.id)
                          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }}
                      className="block text-left text-zinc-500 transition hover:text-volt"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="max-w-3xl space-y-10">
            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-volt" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-white/[0.03]">
                          {section.table.headers.map((header) => (
                            <th
                              key={header}
                              className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join('-')} className="border-t border-white/5">
                            {row.map((cell, index) => (
                              <td
                                key={cell}
                                className={`px-4 py-3 ${
                                  index === 0 ? 'font-medium text-zinc-200' : 'text-zinc-400'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            <div className="rounded-3xl border border-white/10 bg-ink-soft/70 p-6 text-sm leading-relaxed text-zinc-400">
              <p className="font-display text-base font-semibold text-white">
                ¿Tienes alguna duda?
              </p>
              <p className="mt-2">
                Escríbenos a{' '}
                <a href="mailto:hola@pulsefitness.es" className="text-volt hover:underline">
                  hola@pulsefitness.es
                </a>{' '}
                o pásate por Calle Castaños 12, 03001 Alicante. También puedes consultar nuestra{' '}
                <Link to="/privacidad" className="text-volt hover:underline">
                  política de privacidad
                </Link>{' '}
                y nuestra{' '}
                <Link to="/cookies" className="text-volt hover:underline">
                  política de cookies
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

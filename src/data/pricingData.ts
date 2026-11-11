import type { Plan } from '../types'

export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    tagline: 'Para empezar a moverse.',
    monthly: 29,
    annual: 24,
    features: [
      { label: 'Acceso a sala de musculación', included: true },
      { label: 'Zona cardio y peso libre', included: true },
      { label: 'App con rutinas básicas', included: true },
      { label: 'Clases colectivas', included: false },
      { label: 'Entrenador personal', included: false },
      { label: 'Acceso 24/7', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'El equilibrio perfecto.',
    monthly: 49,
    annual: 39,
    highlighted: true,
    badge: 'Más popular',
    features: [
      { label: 'Todo lo del plan Básico', included: true },
      { label: 'Clases colectivas ilimitadas', included: true },
      { label: 'Acceso 24/7 con llave digital', included: true },
      { label: 'Plan de entrenamiento trimestral', included: true },
      { label: 'Invitado gratis 1 día al mes', included: true },
      { label: 'Entrenador personal', included: false },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    tagline: 'Sin límites, sin excusas.',
    monthly: 79,
    annual: 63,
    features: [
      { label: 'Todo lo del plan Pro', included: true },
      { label: '2 sesiones de entrenador personal/mes', included: true },
      { label: 'Asesoramiento nutricional', included: true },
      { label: 'Análisis de composición corporal', included: true },
      { label: 'Acceso a todas las sedes', included: true },
      { label: 'Zona de recuperación y sauna', included: true },
    ],
  },
]

export const planPerks = [
  'Sin matrícula',
  'Cancela cuando quieras',
  'Primera semana gratis',
]

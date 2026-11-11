import type { ActivityLevel, CalorieInput, CalorieResult, Goal } from '../types'

/** Factores de actividad física (Mifflin-St Jeor). */
export const ACTIVITY_FACTORS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  intense: 1.725,
}

/** Ajuste calórico según el objetivo. */
export const GOAL_DELTA: Record<Goal, number> = {
  cut: -0.2,
  maintain: 0,
  bulk: 0.1,
}

/** Gramos de proteína por kilo de peso corporal según el objetivo. */
const PROTEIN_PER_KG: Record<Goal, number> = {
  cut: 2.2,
  maintain: 2,
  bulk: 1.8,
}

const FAT_PER_KG = 0.8

/** Redondea al múltiplo de 10 más cercano, para mostrar cifras limpias. */
const roundToTen = (value: number) => Math.round(value / 10) * 10

/**
 * Calcula el metabolismo basal con la fórmula de Mifflin-St Jeor:
 *   hombres: (10 × peso) + (6.25 × altura) − (5 × edad) + 5
 *   mujeres: (10 × peso) + (6.25 × altura) − (5 × edad) − 161
 */
export function calcBMR(input: Pick<CalorieInput, 'sex' | 'age' | 'weightKg' | 'heightCm'>): number {
  const base = 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age
  return base + (input.sex === 'male' ? 5 : -161)
}

/** Gasto energético total diario (TDEE) sin aplicar el objetivo. */
export function calcMaintenance(input: CalorieInput): number {
  return calcBMR(input) * ACTIVITY_FACTORS[input.activity]
}

/**
 * Devuelve el objetivo calórico diario junto con el reparto de macros.
 * Las calorías objetivo se redondean a 10 y los macros se derivan de ellas.
 */
export function calculateCalories(input: CalorieInput): CalorieResult {
  const maintenanceRaw = calcMaintenance(input)
  const targetRaw = maintenanceRaw * (1 + GOAL_DELTA[input.goal])

  const target = roundToTen(targetRaw)
  const maintenance = roundToTen(maintenanceRaw)

  const protein = Math.round(input.weightKg * PROTEIN_PER_KG[input.goal])
  const fat = Math.round(input.weightKg * FAT_PER_KG)
  const carbs = Math.max(Math.round((target - protein * 4 - fat * 9) / 4), 0)

  return {
    bmr: roundToTen(calcBMR(input)),
    maintenance,
    target,
    macros: { protein, fat, carbs },
  }
}

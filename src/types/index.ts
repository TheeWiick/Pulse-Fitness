export type Sex = 'male' | 'female'

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'intense'

export type Goal = 'cut' | 'maintain' | 'bulk'

export interface CalorieInput {
  sex: Sex
  age: number
  weightKg: number
  heightCm: number
  activity: ActivityLevel
  goal: Goal
}

export interface MacroSplit {
  protein: number
  fat: number
  carbs: number
}

export interface CalorieResult {
  bmr: number
  maintenance: number
  target: number
  macros: MacroSplit
}

export interface PlanFeature {
  label: string
  included: boolean
}

export interface Plan {
  id: string
  name: string
  tagline: string
  monthly: number
  annual: number
  highlighted?: boolean
  badge?: string
  features: PlanFeature[]
}

export type BillingCycle = 'monthly' | 'annual'

export interface LegalSection {
  id: string
  title: string
  paragraphs?: string[]
  bullets?: string[]
  table?: {
    headers: string[]
    rows: string[][]
  }
}

export interface LegalDocument {
  slug: 'condiciones' | 'privacidad' | 'cookies'
  title: string
  intro: string
  updatedAt: string
  sections: LegalSection[]
}


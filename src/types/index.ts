/**
 * Shared TypeScript types for Tech Soul.
 * Mirrors the approved Firestore schema.
 */

// ─── Enums / Literals ──────────────────────────────────────────────────────

export type UserRole = 'user' | 'editor' | 'admin'
export type ExperienceLevel = 'beginner' | 'intermediate' | 'professional'
export type Platform = 'windows' | 'macos' | 'linux' | 'web' | 'ios'
export type ResourceType = 'article' | 'video' | 'cheatsheet' | 'course'
export type BookmarkEntityType = 'software' | 'comparison' | 'stack' | 'resource'
export type PricingModel = 'subscription' | 'one-time' | 'freemium' | 'free' | 'open-source'

// ─── Core Entities ─────────────────────────────────────────────────────────

export interface User {
  uid: string
  email: string
  displayName: string
  createdAt: Date
  role: UserRole
  photoURL?: string
  bio?: string
  industryId?: string
  experienceLevel?: ExperienceLevel
  platform?: Platform
  priorities?: string[]
  activeBlueprintId?: string
  savedBlueprintIds?: string[]
  onboardingComplete?: boolean
  lastLoginAt?: Date
}

export interface SoftwarePricing {
  model: PricingModel
  startingPrice?: number
  currency?: string
  hasFree: boolean
}

export interface Software {
  id: string
  name: string
  tagline: string
  categoryIds: string[]
  industryIds: string[]
  publishedAt: Date
  isPublished: boolean
  logoURL?: string
  websiteURL?: string
  pricing?: SoftwarePricing
  platforms?: Platform[]
  techSoulScore?: number
  reviewCount?: number
  avgRating?: number
  tags?: string[]
  aiFeatures?: boolean
  alternativeIds?: string[]
  comparisonIds?: string[]
  screenshotURLs?: string[]
  description?: string
  prosList?: string[]
  consList?: string[]
  bestFor?: string[]
  aiTags?: string[]
  updatedAt?: Date
}

export interface Category {
  id: string
  name: string
  icon: string
  description?: string
  softwareCount?: number
  parentCategoryId?: string
}

export interface Industry {
  id: string
  name: string
  heroImageURL: string
  description?: string
  icon?: string
  softwareCount?: number
  blueprintCount?: number
  careerPaths?: string[]
  featuredStackId?: string
}

export interface ComparisonMetric {
  label: string
  scoreA: number
  scoreB: number
  winner: string
}

export interface ComparisonPersona {
  title: string
  icon: string
  recommendedSoftwareId: string
}

export interface Comparison {
  id: string
  softwareAId: string
  softwareBId: string
  title: string
  publishedAt: Date
  isPublished: boolean
  verdict?: string
  winnerFor?: Record<string, string>
  metrics?: ComparisonMetric[]
  personas?: ComparisonPersona[]
  industryIds?: string[]
  viewCount?: number
  updatedAt?: Date
}

export interface Stack {
  id: string
  title: string
  industryId: string
  softwareIds: string[]
  isPublished: boolean
  description?: string
  targetLevel?: ExperienceLevel
  estimatedMonthlyCost?: number
  heroImageURL?: string
  highlights?: string[]
  alternativeStackIds?: string[]
  viewCount?: number
}

export interface RoadmapWeek {
  week: number
  title: string
  description: string
}

export interface Blueprint {
  id: string
  userId: string
  createdAt: Date
  wizardInputs: Record<string, unknown>
  title?: string
  industryId?: string
  experienceLevel?: ExperienceLevel
  platform?: Platform
  priorities?: string[]
  recommendedSoftwareIds?: string[]
  stackId?: string
  weeklyRoadmap?: RoadmapWeek[]
  score?: number
  isShared?: boolean
  shareToken?: string
  updatedAt?: Date
}

export interface Review {
  id: string
  userId: string
  rating: number
  createdAt: Date
  title?: string
  body?: string
  pros?: string[]
  cons?: string[]
  experienceLevel?: ExperienceLevel
  platform?: Platform
  isVerified?: boolean
  helpfulCount?: number
  isPublished?: boolean
}

export interface Bookmark {
  id: string
  entityId: string
  entityType: BookmarkEntityType
  savedAt: Date
  displayName?: string
  displayImage?: string
  notes?: string
}

export interface Resource {
  id: string
  title: string
  type: ResourceType
  isPublished: boolean
  publishedAt: Date
  description?: string
  contentURL?: string
  thumbnailURL?: string
  softwareIds?: string[]
  industryIds?: string[]
  difficultyLevel?: ExperienceLevel
  durationMinutes?: number
  tags?: string[]
  viewCount?: number
}

// ─── UI / Component Types ──────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'error' | 'neutral'

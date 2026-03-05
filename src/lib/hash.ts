import type { ProjectFilters } from '@/src/content/projects'

export type HashRoute = 'home' | 'work' | 'case' | 'about' | 'education' | 'experience' | 'skills'

/**
 * Get the current route from the URL hash
 */
export const getHashRoute = (): HashRoute => {
  if (typeof window === 'undefined') return 'home'
  
  const hash = window.location.hash
  if (!hash) return 'home'
  
  // Remove the # and get the first part
  const route = hash.slice(1).split('/')[0].split('?')[0]
  
  // Valid routes
  const validRoutes: HashRoute[] = ['home', 'work', 'case', 'about', 'education', 'experience', 'skills']
  
  return validRoutes.includes(route as HashRoute) ? (route as HashRoute) : 'home'
}

/**
 * Get case study slug from hash like #case/ai-honeypot
 */
export const getCaseSlugFromHash = (): string | null => {
  if (typeof window === 'undefined') return null
  
  const hash = window.location.hash
  const match = hash.match(/^#case\/(.+)$/)
  
  return match ? match[1] : null
}

/**
 * Set case study in hash: #case/slug
 */
export const setCaseSlugInHash = (slug: string): void => {
  if (typeof window === 'undefined') return
  
  const newHash = `#case/${slug}`
  window.history.pushState({}, '', newHash)
  
  // Dispatch a custom event for components to listen to
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

/**
 * Clear case study from hash, return to work section
 */
export const clearCaseFromHash = (): void => {
  if (typeof window === 'undefined') return
  
  window.history.pushState({}, '', '#work')
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}

/**
 * Read filters from URL search params
 */
export const readFiltersFromHash = (): Partial<ProjectFilters> => {
  if (typeof window === 'undefined') return {}
  
  const url = new URL(window.location.href)
  const filters: Partial<ProjectFilters> = {}
  
  const category = url.searchParams.get('cat')
  const year = url.searchParams.get('year')
  const search = url.searchParams.get('q')
  
  if (category) filters.category = category as ProjectFilters['category']
  if (year) filters.year = parseInt(year, 10)
  if (search) filters.search = search
  
  return filters
}

/**
 * Write filters to URL search params
 */
export const writeFiltersToHash = (filters: ProjectFilters): void => {
  if (typeof window === 'undefined') return
  
  const url = new URL(window.location.href)
  
  // Clear existing filter params
  url.searchParams.delete('cat')
  url.searchParams.delete('year')
  url.searchParams.delete('q')
  
  // Set new filter params
  if (filters.category && filters.category !== 'All') {
    url.searchParams.set('cat', filters.category)
  }
  if (filters.year) {
    url.searchParams.set('year', filters.year.toString())
  }
  if (filters.search) {
    url.searchParams.set('q', filters.search)
  }
  
  // Update URL without triggering navigation
  window.history.replaceState({}, '', url.toString())
}

/**
 * Navigate to a specific section
 */
export const navigateToSection = (section: string): void => {
  if (typeof window === 'undefined') return
  
  window.location.hash = section
}

/**
 * Scroll to element with smooth behavior
 */
export const scrollToElement = (elementId: string): void => {
  if (typeof window === 'undefined') return
  
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Add hash change listener
 */
export const addHashChangeListener = (callback: () => void): (() => void) => {
  if (typeof window === 'undefined') return () => {}
  
  const handleHashChange = () => {
    callback()
  }
  
  window.addEventListener('hashchange', handleHashChange)
  
  return () => {
    window.removeEventListener('hashchange', handleHashChange)
  }
}
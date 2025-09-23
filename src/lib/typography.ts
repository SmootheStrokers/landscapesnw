/**
 * Typography System - Semantic Type Utilities
 * 
 * Provides consistent typography classes using the design token system.
 * All classes use semantic color tokens and responsive sizing.
 */

export const type = {
  // Heading Hierarchy
  h1: 'text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-fg',
  h2: 'text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight text-fg',
  h3: 'text-2xl sm:text-3xl lg:text-4xl font-display font-bold leading-tight text-fg',
  h4: 'text-xl sm:text-2xl lg:text-3xl font-display font-semibold leading-tight text-fg',
  h5: 'text-lg sm:text-xl lg:text-2xl font-display font-semibold leading-tight text-fg',
  h6: 'text-base sm:text-lg lg:text-xl font-display font-semibold leading-tight text-fg',
  
  // Body Text Hierarchy
  body: 'text-base font-body leading-relaxed text-muted',
  lead: 'text-lg sm:text-xl font-body leading-relaxed text-fg',
  caption: 'text-sm font-body leading-relaxed text-muted',
  
  // Interactive Elements
  button: 'font-accent font-semibold',
  label: 'text-sm font-accent font-medium text-fg',
  
  // Specialized Typography
  hero: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-fg',
  'hero-subtitle': 'text-xl sm:text-2xl text-surface/90 leading-relaxed font-body',
  'section-title': 'text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-fg text-center mb-6',
  'section-subtitle': 'text-lg sm:text-xl text-muted text-center max-w-3xl mx-auto mb-12 leading-relaxed font-body',
  
  // Accent Text
  accent: 'text-accent-secondary font-accent font-semibold',
  'accent-large': 'text-lg sm:text-xl text-accent-secondary font-accent font-semibold',
  
  // Links
  'link-primary': 'text-accent hover:text-accent-hover font-accent font-medium transition-colors duration-300',
  'link-secondary': 'text-muted hover:text-accent font-body transition-colors duration-300',
  
  // Meta Text
  meta: 'text-xs text-muted font-accent uppercase tracking-wide',
} as const;

/**
 * Typography utility function for combining type styles
 * @param base - Base typography class
 * @param modifiers - Additional modifier classes
 * @returns Combined className string
 */
export function typeClass(base: keyof typeof type, ...modifiers: string[]): string {
  return [type[base], ...modifiers].filter(Boolean).join(' ');
}

/**
 * Common typography combinations for specific use cases
 */
export const typeCombinations = {
  // Hero section
  heroTitle: typeClass('hero', 'text-balance'),
  heroSubtitle: typeClass('hero-subtitle', 'text-pretty'),
  
  // Section headers
  sectionTitle: typeClass('section-title'),
  sectionSubtitle: typeClass('section-subtitle'),
  
  // Card content
  cardTitle: typeClass('h3'),
  cardDescription: typeClass('body'),
  
  // Form elements
  formLabel: typeClass('label'),
  formError: 'text-sm text-error',
  formHelper: 'text-sm text-muted',
  
  // Navigation
  navLink: typeClass('link-primary'),
  navLinkActive: typeClass('link-primary', 'text-accent bg-surface-muted'),
  
  // Buttons
  buttonText: typeClass('button'),
  
  // Trust indicators
  trustText: typeClass('accent'),
  trustNumber: typeClass('h2', 'text-accent-secondary'),
} as const;

export default type;
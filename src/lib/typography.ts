/**
 * Typography Standardization Utility
 * Ensures consistent typography across all components
 */

export const typography = {
  // Hero Typography
  hero: {
    title: 'hero-text text-pure-white',
    subtitle: 'hero-subtitle',
  },

  // Section Typography
  section: {
    title: 'section-title',
    subtitle: 'section-subtitle',
  },

  // Heading Hierarchy
  headings: {
    h1: 'heading-1',
    h2: 'heading-2',
    h3: 'heading-3',
    h4: 'heading-4',
    h5: 'heading-5',
    h6: 'heading-6',
  },

  // Body Text
  body: {
    large: 'body-large',
    regular: 'body-regular',
    small: 'body-small',
    xs: 'body-xs',
  },

  // Accent Text
  accent: {
    primary: 'accent-text',
    large: 'accent-text-large',
  },

  // Links
  links: {
    primary: 'link-primary',
    secondary: 'link-secondary',
  },

  // Meta Text
  meta: {
    caption: 'caption',
    meta: 'meta-text',
  },
} as const;

export const colors = {
  // Text Colors
  text: {
    primary: 'text-pacific-evergreen',
    secondary: 'text-gray-600',
    tertiary: 'text-gray-500',
    muted: 'text-gray-400',
    white: 'text-pure-white',
    accent: 'text-sunset-gold',
  },

  // Background Colors
  background: {
    primary: 'bg-pacific-evergreen',
    secondary: 'bg-forest-sage',
    accent: 'bg-mountain-moss',
    light: 'bg-morning-mist',
    white: 'bg-pure-white',
    gold: 'bg-sunset-gold',
    blue: 'bg-rain-blue',
  },

  // Hover States
  hover: {
    primary: 'hover:text-mountain-moss',
    secondary: 'hover:text-forest-sage',
    background: 'hover:bg-mountain-moss',
    scale: 'hover:scale-105',
  },
} as const;

export const spacing = {
  // Section Padding
  section: {
    standard: 'section-padding',
    small: 'section-padding-sm',
    large: 'section-padding-lg',
  },

  // Container Widths
  container: {
    standard: 'container-custom',
    narrow: 'container-narrow',
    wide: 'container-wide',
  },
} as const;

export const animations = {
  // Standard Transitions
  transition: 'transition-all duration-300',
  colors: 'transition-colors duration-300',
  
  // Hover Effects
  hover: {
    scale: 'hover:scale-105',
    translate: 'hover:-translate-y-2',
    glow: 'hover:shadow-glow',
  },

  // Focus States
  focus: {
    primary: 'focus:outline-none focus:ring-4 focus:ring-forest-sage/20',
    secondary: 'focus:outline-none focus:ring-4 focus:ring-sunset-gold/20',
  },
} as const;

/**
 * Utility function to combine typography classes
 */
export function combineTypography(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Utility function to create consistent button classes
 */
export function createButtonClasses(
  variant: 'primary' | 'secondary' | 'outline' = 'primary',
  size: 'sm' | 'md' | 'lg' = 'md'
): string {
  const baseClasses = 'font-accent font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-4';
  
  const variants = {
    primary: 'bg-forest-sage hover:bg-mountain-moss text-pure-white focus:ring-forest-sage/20',
    secondary: 'bg-sunset-gold hover:bg-rain-blue text-pure-white focus:ring-sunset-gold/20',
    outline: 'border-2 border-forest-sage text-forest-sage hover:bg-forest-sage hover:text-pure-white focus:ring-forest-sage/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-36px',
    md: 'px-8 py-4 text-base min-h-48px',
    lg: 'px-12 py-6 text-lg min-h-56px',
  };

  return `${baseClasses} ${variants[variant]} ${sizes[size]}`;
}

/**
 * Utility function to create consistent link classes
 */
export function createLinkClasses(variant: 'primary' | 'secondary' = 'primary'): string {
  const variants = {
    primary: 'link-primary',
    secondary: 'link-secondary',
  };

  return variants[variant];
}

/**
 * Utility function to create consistent card classes
 */
export function createCardClasses(hover: boolean = true): string {
  const baseClasses = 'bg-pure-white rounded-xl shadow-card border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-premium hover:-translate-y-2' : '';
  
  return `${baseClasses} ${hoverClasses} transition-all duration-300`;
}

/**
 * Typography validation function
 */
export function validateTypography(element: string, classes: string): boolean {
  // Define expected patterns for each element type
  const patterns = {
    h1: /heading-1|hero-text/,
    h2: /heading-2|section-title/,
    h3: /heading-3/,
    h4: /heading-4/,
    h5: /heading-5/,
    h6: /heading-6/,
    p: /body-(large|regular|small|xs)|hero-subtitle|section-subtitle/,
    a: /link-(primary|secondary)/,
    button: /btn-(primary|secondary|outline)|font-accent/,
  };

  const pattern = patterns[element as keyof typeof patterns];
  return pattern ? pattern.test(classes) : true;
}

/**
 * Color validation function
 */
export function validateColors(classes: string): boolean {
  // Check for proper color usage
  const hasProperTextColor = /text-(pacific-evergreen|gray-[45667]00|pure-white|sunset-gold)/.test(classes);
  const hasProperBackgroundColor = /bg-(pacific-evergreen|forest-sage|mountain-moss|morning-mist|pure-white|sunset-gold|rain-blue)/.test(classes);
  
  return hasProperTextColor || hasProperBackgroundColor;
}

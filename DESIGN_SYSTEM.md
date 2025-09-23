# NW Landscape Management - Design System

## 🎨 Color Palette

### Primary Colors (Pacific Northwest Theme)
```css
/* Core Brand Colors */
--pacific-evergreen: #1B3B0D    /* Primary dark green - Headings, primary text */
--forest-sage: #2D5016          /* Secondary green - Buttons, links, accents */
--mountain-moss: #4A7C59        /* Accent green - Hover states, secondary buttons */
--cedar-bark: #8B4513           /* Brown accent - Rarely used, earthy tones */
--morning-mist: #F8F9FA         /* Light background - Page backgrounds */
--stone-gray: #6C757D           /* Text gray - Secondary text */
--pure-white: #FFFFFF           /* White - Text on dark backgrounds, cards */
--sunset-gold: #DAA520          /* Gold accent - Highlights, CTAs, awards */
--rain-blue: #5A9FD4            /* Blue accent - Links, secondary highlights */
```

### Usage Guidelines
- **Headings**: Always use `text-pacific-evergreen` for h1-h6
- **Body Text**: Use `text-gray-600` for primary body text, `text-gray-700` for emphasis
- **Links**: Use `text-forest-sage` with `hover:text-mountain-moss`
- **CTAs**: Use `bg-forest-sage` with `hover:bg-mountain-moss`
- **Accents**: Use `text-sunset-gold` for highlights and awards
- **Backgrounds**: Use `bg-morning-mist` for light sections, `bg-pacific-evergreen` for dark sections

## 🔤 Typography System

### Font Families
```css
/* Display Font - Headings */
font-display: 'Playfair Display', serif

/* Body Font - Content */
font-body: 'Inter', sans-serif

/* Accent Font - Buttons, labels, CTAs */
font-accent: 'Montserrat', sans-serif
```

### Typography Hierarchy

#### Hero Text
```css
.hero-text {
  font-family: Playfair Display;
  font-size: 4xl → 7xl (responsive);
  font-weight: 700;
  color: pacific-evergreen;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-family: Inter;
  font-size: xl → 2xl (responsive);
  color: pure-white/90;
  line-height: 1.6;
}
```

#### Section Typography
```css
.section-title {
  font-family: Playfair Display;
  font-size: 3xl → 5xl (responsive);
  font-weight: 700;
  color: pacific-evergreen;
  text-align: center;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.section-subtitle {
  font-family: Inter;
  font-size: lg → xl (responsive);
  color: gray-600;
  text-align: center;
  line-height: 1.6;
}
```

#### Heading Hierarchy
```css
.heading-1 → .heading-6 {
  font-family: Playfair Display;
  font-weight: 600-700;
  color: pacific-evergreen;
  line-height: 1.1-1.5;
  letter-spacing: -0.02em to -0.01em;
}
```

#### Body Text
```css
.body-large {
  font-family: Inter;
  font-size: lg → xl;
  color: gray-700;
  line-height: 1.6;
}

.body-regular {
  font-family: Inter;
  font-size: base;
  color: gray-600;
  line-height: 1.6;
}

.body-small {
  font-family: Inter;
  font-size: sm;
  color: gray-500;
  line-height: 1.6;
}
```

#### Accent Text
```css
.accent-text {
  font-family: Montserrat;
  font-weight: 600;
  color: sunset-gold;
}

.accent-text-large {
  font-family: Montserrat;
  font-size: lg → xl;
  font-weight: 600;
  color: sunset-gold;
}
```

## 🎯 Component Standards

### Buttons
```css
.btn-primary {
  background: forest-sage;
  hover: mountain-moss;
  color: pure-white;
  font-family: Montserrat;
  font-weight: 600;
  padding: 2rem 2rem;
  border-radius: 0.5rem;
  transition: all 300ms;
  min-height: 48px;
}

.btn-secondary {
  background: sunset-gold;
  hover: rain-blue;
  color: pure-white;
  /* same structure as primary */
}

.btn-outline {
  border: 2px solid forest-sage;
  color: forest-sage;
  hover: background forest-sage, color pure-white;
  /* same structure as primary */
}
```

### Cards
```css
.card {
  background: pure-white;
  border-radius: 0.75rem;
  box-shadow: card;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 300ms;
  hover: shadow-premium, transform -translate-y-2;
}
```

### Links
```css
.link-primary {
  color: forest-sage;
  hover: mountain-moss;
  font-family: Montserrat;
  font-weight: 500;
  transition: colors 300ms;
}

.link-secondary {
  color: gray-600;
  hover: forest-sage;
  font-family: Inter;
  transition: colors 300ms;
}
```

## 📱 Responsive Design

### Breakpoints
```css
xs: 475px      /* Small phones */
sm: 640px      /* Large phones */
md: 768px      /* Tablets */
lg: 1024px     /* Small desktops */
xl: 1280px     /* Large desktops */
2xl: 1536px    /* Extra large screens */
3xl: 1600px    /* Custom large */
4xl: 1920px    /* Ultra wide */
```

### Typography Scaling
- **Mobile First**: Start with smallest sizes
- **Progressive Enhancement**: Scale up for larger screens
- **Consistent Ratios**: Maintain proportional scaling
- **Readability**: Ensure minimum 16px base font size

## 🎨 Layout Standards

### Spacing System
```css
/* Consistent spacing scale */
py-16 = 4rem (64px)     /* Standard section padding */
py-24 = 6rem (96px)     /* Large section padding */
gap-8 = 2rem (32px)     /* Standard grid gap */
gap-12 = 3rem (48px)    /* Large grid gap */
```

### Container Widths
```css
.container-custom = max-width: 7xl (80rem)
.container-narrow = max-width: 4xl (56rem)
.container-wide = max-width: 8xl (88rem)
```

## ✨ Animation Standards

### Transitions
```css
/* Standard transition timing */
transition: all 300ms ease;

/* Hover effects */
hover:scale-105 = transform: scale(1.05);
hover:-translate-y-2 = transform: translateY(-0.5rem);

/* Focus states */
focus:ring-4 focus:ring-forest-sage/20;
```

### Motion Design
- **Duration**: 300ms for micro-interactions, 600-800ms for page transitions
- **Easing**: ease-out for entrances, ease-in for exits
- **Stagger**: 100ms delays for sequential animations
- **Performance**: Use transform and opacity for smooth animations

## 🔍 Accessibility Standards

### Color Contrast
- **AA Compliance**: Minimum 4.5:1 ratio for normal text
- **AAA Compliance**: Minimum 7:1 ratio for enhanced accessibility
- **Focus States**: Clear visual indicators with 2px outlines

### Typography
- **Font Sizes**: Minimum 16px for body text
- **Line Height**: 1.5-1.6 for optimal readability
- **Letter Spacing**: -0.02em to -0.01em for headings only

## 📋 Implementation Checklist

### Before Publishing
- [ ] All headings use `font-display` and `text-pacific-evergreen`
- [ ] All body text uses `font-body` and appropriate gray colors
- [ ] All buttons use `font-accent` and standard button classes
- [ ] All links follow `link-primary` or `link-secondary` patterns
- [ ] Color contrast meets WCAG AA standards
- [ ] Typography scales properly across all breakpoints
- [ ] Animations are smooth and performant
- [ ] Focus states are clearly visible
- [ ] Loading states are consistent across components

### Quality Assurance
- [ ] Visual consistency across all pages
- [ ] Brand colors used consistently
- [ ] Typography hierarchy is clear and logical
- [ ] Interactive elements provide clear feedback
- [ ] Mobile experience matches desktop quality
- [ ] Performance is optimized (no layout shifts)

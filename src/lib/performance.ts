export const performanceMetrics = {
  // Core Web Vitals thresholds
  LCP: {
    good: 2500, // 2.5 seconds
    needsImprovement: 4000, // 4 seconds
    poor: 4000, // 4+ seconds
  },
  FID: {
    good: 100, // 100ms
    needsImprovement: 300, // 300ms
    poor: 300, // 300+ ms
  },
  CLS: {
    good: 0.1, // 0.1
    needsImprovement: 0.25, // 0.25
    poor: 0.25, // 0.25+
  },
  FCP: {
    good: 1800, // 1.8 seconds
    needsImprovement: 3000, // 3 seconds
    poor: 3000, // 3+ seconds
  },
  TTFB: {
    good: 800, // 800ms
    needsImprovement: 1800, // 1.8 seconds
    poor: 1800, // 1.8+ seconds
  },
} as const;

export const performanceGoals = {
  // Target performance metrics
  targetLCP: 2000, // 2 seconds
  targetFID: 50, // 50ms
  targetCLS: 0.05, // 0.05
  targetFCP: 1500, // 1.5 seconds
  targetTTFB: 600, // 600ms
  targetLoadTime: 2000, // 2 seconds
  targetFirstByte: 500, // 500ms
  targetDOMContentLoaded: 1000, // 1 second
  targetWindowLoad: 2000, // 2 seconds
} as const;

export const performanceOptimizations = {
  // Image optimization
  imageFormats: {
    webp: 'image/webp',
    avif: 'image/avif',
    jpeg: 'image/jpeg',
    png: 'image/png',
  },
  imageSizes: {
    hero: '1920x1080',
    card: '400x300',
    thumbnail: '200x150',
    icon: '64x64',
    logo: '200x200',
  },
  imageQuality: {
    high: 90,
    medium: 80,
    low: 70,
    thumbnail: 60,
  },
  // Font optimization
  fontDisplay: 'swap',
  fontPreload: [
    'Playfair Display',
    'Inter',
    'Montserrat',
  ],
  // Resource hints
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],
  dnsPrefetch: [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com',
  ],
  // Critical resources
  criticalCSS: [
    'base',
    'components',
    'utilities',
  ],
  criticalJS: [
    'navigation',
    'hero',
    'cta',
  ],
  // Lazy loading
  lazyLoadThreshold: 0.1,
  lazyLoadRootMargin: '50px',
  // Caching
  cacheStrategy: {
    static: 'cache-first',
    dynamic: 'network-first',
    api: 'stale-while-revalidate',
  },
  // Compression
  compressionLevel: 6,
  minification: true,
  // Bundle splitting
  chunkSize: 244000, // 244KB
  maxChunks: 10,
} as const;

export const performanceMonitoring = {
  // Metrics to track
  metrics: [
    'LCP',
    'FID',
    'CLS',
    'FCP',
    'TTFB',
    'loadTime',
    'firstByte',
    'DOMContentLoaded',
    'windowLoad',
  ],
  // Sampling rate
  samplingRate: 0.1, // 10% of users
  // Reporting interval
  reportingInterval: 30000, // 30 seconds
  // Error tracking
  errorTracking: true,
  // Performance budgets
  budgets: {
    js: 244000, // 244KB
    css: 50000, // 50KB
    images: 1000000, // 1MB
    fonts: 100000, // 100KB
    total: 2000000, // 2MB
  },
} as const;

export const performanceTools = {
  // Lighthouse configuration
  lighthouse: {
    categories: ['performance', 'accessibility', 'best-practices', 'seo'],
    thresholds: {
      performance: 90,
      accessibility: 90,
      'best-practices': 90,
      seo: 90,
    },
  },
  // WebPageTest configuration
  webPageTest: {
    location: 'Dulles:Chrome',
    runs: 3,
    firstViewOnly: false,
    video: true,
    screenshot: true,
  },
  // GTmetrix configuration
  gtmetrix: {
    location: 'Vancouver, Canada',
    browser: 'Chrome',
    connection: 'Cable',
  },
} as const;

export const performanceAlerts = {
  // Alert thresholds
  thresholds: {
    LCP: 3000, // 3 seconds
    FID: 200, // 200ms
    CLS: 0.2, // 0.2
    FCP: 2500, // 2.5 seconds
    TTFB: 1500, // 1.5 seconds
    loadTime: 3000, // 3 seconds
  },
  // Alert channels
  channels: [
    'console',
    'analytics',
    'monitoring',
  ],
  // Alert frequency
  frequency: 'immediate',
} as const;

export const performanceReports = {
  // Report frequency
  frequency: 'weekly',
  // Report format
  format: 'json',
  // Report recipients
  recipients: [
    'dev@nwlandscape.com',
    'admin@nwlandscape.com',
  ],
  // Report metrics
  metrics: [
    'LCP',
    'FID',
    'CLS',
    'FCP',
    'TTFB',
    'loadTime',
    'firstByte',
    'DOMContentLoaded',
    'windowLoad',
  ],
  // Report sections
  sections: [
    'overview',
    'core-web-vitals',
    'performance-metrics',
    'recommendations',
    'trends',
  ],
} as const;

export const performanceRecommendations = {
  // Image optimization
  images: [
    'Use WebP format for better compression',
    'Implement responsive images with srcset',
    'Lazy load images below the fold',
    'Optimize image dimensions',
    'Use appropriate image quality settings',
  ],
  // Font optimization
  fonts: [
    'Preload critical fonts',
    'Use font-display: swap',
    'Subset fonts to reduce size',
    'Use system fonts when possible',
  ],
  // CSS optimization
  css: [
    'Minify CSS files',
    'Remove unused CSS',
    'Inline critical CSS',
    'Use CSS containment',
    'Optimize CSS selectors',
  ],
  // JavaScript optimization
  javascript: [
    'Minify JavaScript files',
    'Remove unused code',
    'Use code splitting',
    'Implement lazy loading',
    'Optimize bundle size',
  ],
  // Network optimization
  network: [
    'Use HTTP/2',
    'Enable compression',
    'Implement caching strategies',
    'Use CDN for static assets',
    'Optimize resource loading',
  ],
  // Rendering optimization
  rendering: [
    'Optimize critical rendering path',
    'Minimize layout shifts',
    'Use efficient selectors',
    'Avoid expensive operations',
    'Optimize animations',
  ],
} as const;

export const performanceTesting = {
  // Test scenarios
  scenarios: [
    'homepage-load',
    'service-page-load',
    'quote-form-submission',
    'image-gallery-load',
    'mobile-performance',
    'slow-connection',
  ],
  // Test devices
  devices: [
    'desktop',
    'tablet',
    'mobile',
  ],
  // Test connections
  connections: [
    'fast-3g',
    'slow-3g',
    '4g',
    'wifi',
  ],
  // Test browsers
  browsers: [
    'chrome',
    'firefox',
    'safari',
    'edge',
  ],
} as const;

export const performanceMetrics = {
  // Performance score calculation
  calculateScore: (metrics: Record<string, number>) => {
    const weights = {
      LCP: 0.25,
      FID: 0.25,
      CLS: 0.25,
      FCP: 0.15,
      TTFB: 0.10,
    };
    
    let score = 0;
    for (const [metric, value] of Object.entries(metrics)) {
      if (weights[metric as keyof typeof weights]) {
        const threshold = performanceMetrics[metric as keyof typeof performanceMetrics];
        const metricScore = Math.max(0, 100 - (value / threshold.good) * 100);
        score += metricScore * weights[metric as keyof typeof weights];
      }
    }
    
    return Math.round(score);
  },
  // Performance grade
  getGrade: (score: number) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  },
  // Performance status
  getStatus: (score: number) => {
    if (score >= 90) return 'excellent';
    if (score >= 80) return 'good';
    if (score >= 70) return 'needs-improvement';
    return 'poor';
  },
} as const;

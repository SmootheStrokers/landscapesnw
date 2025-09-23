export const config = {
  // Application configuration
  app: {
    name: 'NW Landscape Management',
    version: '1.0.0',
    description: 'Award-winning landscape design and maintenance services',
    url: 'https://nwlandscape.com',
    email: 'info@nwlandscape.com',
    phone: '(253) 123-4567',
  },
  // Environment configuration
  env: {
    development: {
      api: 'http://localhost:3000/api',
      cdn: 'http://localhost:3000',
      debug: true,
    },
    production: {
      api: 'https://nwlandscape.com/api',
      cdn: 'https://cdn.nwlandscape.com',
      debug: false,
    },
  },
  // Feature flags
  features: {
    analytics: true,
    monitoring: true,
    errorTracking: true,
    performanceTracking: true,
    accessibility: true,
    seo: true,
    security: true,
    testing: true,
    documentation: true,
    deployment: true,
    monitoring: true,
    security: true,
    analytics: true,
    i18n: true,
  },
} as const;

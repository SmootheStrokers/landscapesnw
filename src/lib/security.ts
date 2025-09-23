export const security = {
  // Security headers
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
  },
  // Security policies
  policies: {
    password: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSymbols: true,
    },
    session: {
      timeout: 3600000, // 1 hour
      maxAge: 86400000, // 24 hours
    },
  },
  // Security measures
  measures: {
    rateLimiting: true,
    csrfProtection: true,
    xssProtection: true,
    sqlInjectionProtection: true,
    inputValidation: true,
    outputEncoding: true,
  },
} as const;

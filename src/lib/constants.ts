export const constants = {
  // Application constants
  APP_NAME: 'NW Landscape Management',
  APP_VERSION: '1.0.0',
  APP_URL: 'https://nwlandscape.com',
  APP_EMAIL: 'info@nwlandscape.com',
  APP_PHONE: '(253) 123-4567',
  
  // Business constants
  BUSINESS_YEARS: 25,
  PROJECTS_COMPLETED: 500,
  CUSTOMER_SATISFACTION: 98,
  SERVICE_AREAS: 18,
  
  // Service constants
  MAINTENANCE_STARTING_PRICE: 325,
  CONSULTATION_FREE: true,
  RESPONSE_TIME_HOURS: 24,
  
  // Technical constants
  MAX_FILE_SIZE: 10485760, // 10MB
  MAX_IMAGE_SIZE: 5242880, // 5MB
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  SUPPORTED_DOCUMENT_TYPES: ['application/pdf', 'application/msword'],
  
  // Performance constants
  TARGET_LCP: 2000,
  TARGET_FID: 50,
  TARGET_CLS: 0.05,
  TARGET_FCP: 1500,
  TARGET_TTFB: 600,
  
  // Security constants
  SESSION_TIMEOUT: 3600000, // 1 hour
  MAX_LOGIN_ATTEMPTS: 5,
  PASSWORD_MIN_LENGTH: 8,
  
  // Analytics constants
  GOOGLE_ANALYTICS_ID: 'GA-XXXXXXXXX',
  GOOGLE_TAG_MANAGER_ID: 'GTM-XXXXXXX',
  FACEBOOK_PIXEL_ID: 'XXXXXXXXX',
  
  // Social media constants
  FACEBOOK_URL: 'https://facebook.com/nwlandscape',
  INSTAGRAM_URL: 'https://instagram.com/nwlandscape',
  YOUTUBE_URL: 'https://youtube.com/nwlandscape',
  LINKEDIN_URL: 'https://linkedin.com/company/nwlandscape',
  
  // Contact constants
  OFFICE_HOURS: 'Mon-Fri: 7AM-6PM',
  EMERGENCY_SERVICE: true,
  SERVICE_RADIUS: 50, // miles
  
  // SEO constants
  DEFAULT_META_TITLE: 'NW Landscape Management | Award-Winning Landscaping Services',
  DEFAULT_META_DESCRIPTION: 'Award-winning landscape design and maintenance services for Federal Way, Tacoma, and the South Sound area. 25+ years of excellence.',
  DEFAULT_META_KEYWORDS: 'landscaping, landscape maintenance, Federal Way, Tacoma, Kent, Auburn, landscape design, irrigation, hardscaping, patio installation, landscape lighting',
  
  // API constants
  API_BASE_URL: '/api',
  API_TIMEOUT: 30000, // 30 seconds
  API_RETRY_ATTEMPTS: 3,
  API_RETRY_DELAY: 1000, // 1 second
  
  // Cache constants
  CACHE_TTL: 3600, // 1 hour
  CACHE_MAX_SIZE: 100, // 100 items
  CACHE_CLEANUP_INTERVAL: 300000, // 5 minutes
  
  // Error constants
  MAX_ERROR_RETRIES: 3,
  ERROR_RETRY_DELAY: 1000, // 1 second
  ERROR_LOG_RETENTION: 30, // 30 days
  
  // Monitoring constants
  HEALTH_CHECK_INTERVAL: 60000, // 1 minute
  METRICS_COLLECTION_INTERVAL: 300000, // 5 minutes
  ALERT_THRESHOLD: 0.05, // 5%
  
  // Testing constants
  TEST_TIMEOUT: 30000, // 30 seconds
  TEST_RETRY_ATTEMPTS: 3,
  TEST_COVERAGE_THRESHOLD: 80,
  
  // Deployment constants
  DEPLOYMENT_TIMEOUT: 600000, // 10 minutes
  ROLLBACK_TIMEOUT: 300000, // 5 minutes
  HEALTH_CHECK_TIMEOUT: 30000, // 30 seconds
  
  // Security constants
  CSRF_TOKEN_LENGTH: 32,
  SESSION_ID_LENGTH: 64,
  API_KEY_LENGTH: 64,
  PASSWORD_HASH_ROUNDS: 12,
  
  // Analytics constants
  EVENT_BATCH_SIZE: 100,
  EVENT_FLUSH_INTERVAL: 30000, // 30 seconds
  USER_PROPERTY_MAX_LENGTH: 100,
  EVENT_PROPERTY_MAX_LENGTH: 100,
  
  // Internationalization constants
  DEFAULT_LOCALE: 'en',
  SUPPORTED_LOCALES: ['en', 'es', 'fr'],
  LOCALE_DETECTION: true,
  LOCALE_FALLBACK: 'en',
  
  // Configuration constants
  CONFIG_CACHE_TTL: 3600000, // 1 hour
  CONFIG_RELOAD_INTERVAL: 300000, // 5 minutes
  CONFIG_VALIDATION: true,
  CONFIG_ENCRYPTION: true,
} as const;

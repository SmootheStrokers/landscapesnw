export const api = {
  // API endpoints
  endpoints: {
    services: '/api/services',
    quote: '/api/quote',
    contact: '/api/contact',
    newsletter: '/api/newsletter',
    auth: '/api/auth',
    profile: '/api/profile',
    upload: '/api/upload',
    analytics: '/api/analytics',
    monitoring: '/api/monitoring',
    health: '/api/health',
  },
  // HTTP methods
  methods: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
  },
  // Status codes
  statusCodes: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
  },
  // Content types
  contentTypes: {
    JSON: 'application/json',
    FORM: 'application/x-www-form-urlencoded',
    MULTIPART: 'multipart/form-data',
    TEXT: 'text/plain',
    HTML: 'text/html',
    XML: 'application/xml',
    CSV: 'text/csv',
    PDF: 'application/pdf',
    IMAGE: 'image/*',
    VIDEO: 'video/*',
    AUDIO: 'audio/*',
  },
  // Headers
  headers: {
    CONTENT_TYPE: 'Content-Type',
    AUTHORIZATION: 'Authorization',
    ACCEPT: 'Accept',
    USER_AGENT: 'User-Agent',
    CACHE_CONTROL: 'Cache-Control',
    ETAG: 'ETag',
    LAST_MODIFIED: 'Last-Modified',
    IF_NONE_MATCH: 'If-None-Match',
    IF_MODIFIED_SINCE: 'If-Modified-Since',
  },
  // Timeouts
  timeouts: {
    DEFAULT: 30000, // 30 seconds
    SHORT: 10000, // 10 seconds
    LONG: 60000, // 1 minute
    VERY_LONG: 300000, // 5 minutes
  },
  // Retry configuration
  retry: {
    MAX_ATTEMPTS: 3,
    DELAY: 1000, // 1 second
    BACKOFF: 2,
    MAX_DELAY: 10000, // 10 seconds
  },
  // Rate limiting
  rateLimit: {
    WINDOW_MS: 900000, // 15 minutes
    MAX_REQUESTS: 100,
    SKIP_SUCCESSFUL_REQUESTS: false,
    SKIP_FAILED_REQUESTS: false,
  },
  // Caching
  cache: {
    TTL: 3600, // 1 hour
    MAX_SIZE: 100, // 100 items
    CLEANUP_INTERVAL: 300000, // 5 minutes
  },
  // Security
  security: {
    CSRF_PROTECTION: true,
    XSS_PROTECTION: true,
    CONTENT_SECURITY_POLICY: true,
    STRICT_TRANSPORT_SECURITY: true,
    X_FRAME_OPTIONS: true,
    X_CONTENT_TYPE_OPTIONS: true,
  },
  // Analytics
  analytics: {
    ENABLED: true,
    EVENT_TRACKING: true,
    USER_TRACKING: true,
    PAGE_TRACKING: true,
    CONVERSION_TRACKING: true,
  },
  // Validation
  validation: {
    ENABLED: true,
    STRICT_MODE: true,
    SANITIZATION: true,
    ESCAPING: true,
    NORMALIZATION: true,
  },
  // Serialization
  serialization: {
    FORMAT: 'json',
    COMPRESSION: true,
    ENCRYPTION: false,
    SIGNING: false,
    VERIFICATION: false,
  },
  // Deserialization
  deserialization: {
    FORMAT: 'json',
    COMPRESSION: true,
    ENCRYPTION: false,
    SIGNING: false,
    VERIFICATION: false,
  },
  // Transformation
  transformation: {
    ENABLED: true,
    NORMALIZATION: true,
    SANITIZATION: true,
    VALIDATION: true,
    ESCAPING: true,
  },
  // Error handling
  errorHandling: {
    ENABLED: true,
    LOGGING: true,
    REPORTING: true,
    RECOVERY: true,
    FALLBACK: true,
  },
  // Recovery
  recovery: {
    ENABLED: true,
    STRATEGY: 'retry',
    MAX_ATTEMPTS: 3,
    DELAY: 1000,
    BACKOFF: 2,
    MAX_DELAY: 10000,
  },
  // Fallback
  fallback: {
    ENABLED: true,
    STRATEGY: 'cache',
    TTL: 3600,
    MAX_SIZE: 100,
  },
  // Circuit breaker
  circuitBreaker: {
    ENABLED: true,
    FAILURE_THRESHOLD: 5,
    TIMEOUT: 60000,
    RESET_TIMEOUT: 300000,
  },
  // Load balancing
  loadBalancing: {
    ENABLED: true,
    STRATEGY: 'round-robin',
    HEALTH_CHECKS: true,
    FAILOVER: true,
  },
  // Service discovery
  serviceDiscovery: {
    ENABLED: true,
    PROVIDER: 'consul',
    HEALTH_CHECKS: true,
    FAILOVER: true,
  },
  // Configuration
  configuration: {
    ENABLED: true,
    PROVIDER: 'file',
    HOT_RELOAD: true,
    VALIDATION: true,
  },
  // Feature flags
  featureFlags: {
    ENABLED: true,
    PROVIDER: 'file',
    HOT_RELOAD: true,
    VALIDATION: true,
  },
  // A/B testing
  abTesting: {
    ENABLED: true,
    PROVIDER: 'file',
    HOT_RELOAD: true,
    VALIDATION: true,
  },
  // Personalization
  personalization: {
    ENABLED: true,
    PROVIDER: 'file',
    HOT_RELOAD: true,
    VALIDATION: true,
  },
  // Recommendations
  recommendations: {
    ENABLED: true,
    PROVIDER: 'file',
    HOT_RELOAD: true,
    VALIDATION: true,
  },
  // Search
  search: {
    ENABLED: true,
    PROVIDER: 'elasticsearch',
    INDEXING: true,
    QUERYING: true,
  },
  // Notifications
  notifications: {
    ENABLED: true,
    PROVIDER: 'email',
    CHANNELS: ['email', 'sms', 'push'],
    TEMPLATES: true,
  },
  // Messaging
  messaging: {
    ENABLED: true,
    PROVIDER: 'rabbitmq',
    QUEUES: true,
    WORKERS: true,
  },
  // Scheduling
  scheduling: {
    ENABLED: true,
    PROVIDER: 'cron',
    JOBS: true,
    WORKERS: true,
  },
  // Background jobs
  backgroundJobs: {
    ENABLED: true,
    PROVIDER: 'bull',
    QUEUES: true,
    WORKERS: true,
  },
  // Webhooks
  webhooks: {
    ENABLED: true,
    PROVIDER: 'file',
    VALIDATION: true,
    SIGNING: true,
  },
  // Integrations
  integrations: {
    ENABLED: true,
    PROVIDER: 'file',
    VALIDATION: true,
    TESTING: true,
  },
  // Testing
  testing: {
    ENABLED: true,
    PROVIDER: 'jest',
    COVERAGE: true,
    MOCKING: true,
  },
  // Documentation
  documentation: {
    ENABLED: true,
    PROVIDER: 'swagger',
    GENERATION: true,
    VALIDATION: true,
  },
  // Versioning
  versioning: {
    ENABLED: true,
    STRATEGY: 'header',
    DEFAULT_VERSION: 'v1',
    SUPPORTED_VERSIONS: ['v1', 'v2'],
  },
  // Deprecation
  deprecation: {
    ENABLED: true,
    NOTICE_PERIOD: 90, // days
    SUNSET_DATE: null,
    MIGRATION_GUIDE: true,
  },
  // Migration
  migration: {
    ENABLED: true,
    STRATEGY: 'blue-green',
    ROLLBACK: true,
    TESTING: true,
  },
  // Deployment
  deployment: {
    ENABLED: true,
    STRATEGY: 'blue-green',
    ROLLBACK: true,
    TESTING: true,
  },
  // Monitoring
  monitoring: {
    ENABLED: true,
    PROVIDER: 'prometheus',
    METRICS: true,
    ALERTS: true,
  },
  // Alerting
  alerting: {
    ENABLED: true,
    PROVIDER: 'alertmanager',
    CHANNELS: ['email', 'sms', 'slack'],
    RULES: true,
  },
  // Logging
  logging: {
    ENABLED: true,
    PROVIDER: 'elasticsearch',
    INDEXING: true,
    SEARCH: true,
  },
  // Tracing
  tracing: {
    ENABLED: true,
    PROVIDER: 'jaeger',
    SAMPLING: true,
    CORRELATION: true,
  },
  // Profiling
  profiling: {
    ENABLED: true,
    PROVIDER: 'pprof',
    SAMPLING: true,
    ANALYSIS: true,
  },
  // Debugging
  debugging: {
    ENABLED: true,
    PROVIDER: 'delve',
    BREAKPOINTS: true,
    STEPPING: true,
  },
} as const;

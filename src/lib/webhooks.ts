export const webhooks = {
  // Webhook types
  types: {
    INCOMING: 'incoming',
    OUTGOING: 'outgoing',
    BIDIRECTIONAL: 'bidirectional',
  },
  // Webhook events
  events: {
    QUOTE_REQUESTED: 'quote-requested',
    QUOTE_RECEIVED: 'quote-received',
    APPOINTMENT_SCHEDULED: 'appointment-scheduled',
    APPOINTMENT_CANCELLED: 'appointment-cancelled',
    PAYMENT_RECEIVED: 'payment-received',
    PAYMENT_FAILED: 'payment-failed',
    SERVICE_STARTED: 'service-started',
    SERVICE_COMPLETED: 'service-completed',
    CUSTOMER_CREATED: 'customer-created',
    CUSTOMER_UPDATED: 'customer-updated',
    CUSTOMER_DELETED: 'customer-deleted',
  },
  // Webhook statuses
  statuses: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    PENDING: 'pending',
    FAILED: 'failed',
    CANCELLED: 'cancelled',
  },
  // Webhook operations
  operations: {
    CREATE: 'create',
    UPDATE: 'update',
    DELETE: 'delete',
    TEST: 'test',
    RESET: 'reset',
  },
  // Webhook configurations
  configurations: {
    url: 'https://nwlandscape.com/webhooks',
    secret: 'webhook-secret',
    timeout: 30000, // 30 seconds
    maxRetries: 3,
    retryDelay: 1000, // 1 second
  },
  // Webhook limits
  limits: {
    MAX_RETRIES: 3,
    MAX_TIMEOUT: 30000, // 30 seconds
    MAX_PAYLOAD_SIZE: 1048576, // 1MB
    MAX_EVENTS_PER_SECOND: 100,
  },
  // Webhook timeouts
  timeouts: {
    SHORT: 5000, // 5 seconds
    MEDIUM: 15000, // 15 seconds
    LONG: 30000, // 30 seconds
    VERY_LONG: 60000, // 1 minute
  },
  // Webhook retries
  retries: {
    NONE: 0,
    LOW: 3,
    MEDIUM: 5,
    HIGH: 10,
    UNLIMITED: -1,
  },
  // Webhook delays
  delays: {
    NONE: 0,
    SHORT: 1000, // 1 second
    MEDIUM: 5000, // 5 seconds
    LONG: 30000, // 30 seconds
    VERY_LONG: 300000, // 5 minutes
  },
  // Webhook backoff
  backoff: {
    NONE: 1,
    LINEAR: 1,
    EXPONENTIAL: 2,
    FIBONACCI: 1.618,
  },
  // Webhook monitoring
  monitoring: {
    ENABLED: true,
    METRICS: true,
    ALERTS: true,
    HEALTH_CHECKS: true,
  },
  // Webhook performance
  performance: {
    ENABLED: true,
    PROFILING: true,
    OPTIMIZATION: true,
    BENCHMARKING: true,
  },
  // Webhook security
  security: {
    ENABLED: true,
    AUTHENTICATION: true,
    AUTHORIZATION: true,
    ENCRYPTION: true,
    AUDITING: true,
  },
  // Webhook maintenance
  maintenance: {
    ENABLED: true,
    CLEANUP: true,
    COMPACTION: true,
    DEFRAGMENTATION: true,
  },
  // Webhook testing
  testing: {
    ENABLED: true,
    MOCKING: true,
    FIXTURES: true,
    COVERAGE: true,
  },
  // Webhook documentation
  documentation: {
    ENABLED: true,
    GENERATION: true,
    VALIDATION: true,
    EXAMPLES: true,
  },
} as const;

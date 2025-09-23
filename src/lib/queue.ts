export const queue = {
  // Queue types
  types: {
    REDIS: 'redis',
    RABBITMQ: 'rabbitmq',
    SQS: 'sqs',
    KAFKA: 'kafka',
    MEMORY: 'memory',
  },
  // Queue configurations
  configurations: {
    redis: {
      host: 'localhost',
      port: 6379,
      password: null,
      db: 0,
      maxRetries: 3,
      retryDelay: 1000,
    },
    rabbitmq: {
      host: 'localhost',
      port: 5672,
      username: 'guest',
      password: 'guest',
      vhost: '/',
      maxRetries: 3,
      retryDelay: 1000,
    },
    sqs: {
      region: 'us-west-2',
      accessKeyId: null,
      secretAccessKey: null,
      maxRetries: 3,
      retryDelay: 1000,
    },
    kafka: {
      brokers: ['localhost:9092'],
      clientId: 'nwlandscape',
      maxRetries: 3,
      retryDelay: 1000,
    },
    memory: {
      maxSize: 1000,
      ttl: 3600, // 1 hour
      cleanupInterval: 300000, // 5 minutes
    },
  },
  // Queue names
  names: {
    EMAIL: 'email',
    SMS: 'sms',
    PUSH: 'push',
    WEBHOOK: 'webhook',
    ANALYTICS: 'analytics',
    MONITORING: 'monitoring',
    LOGGING: 'logging',
    BACKUP: 'backup',
    CLEANUP: 'cleanup',
    MAINTENANCE: 'maintenance',
  },
  // Queue priorities
  priorities: {
    LOW: 1,
    NORMAL: 5,
    HIGH: 10,
    CRITICAL: 20,
  },
  // Queue statuses
  statuses: {
    PENDING: 'pending',
    PROCESSING: 'processing',
    COMPLETED: 'completed',
    FAILED: 'failed',
    CANCELLED: 'cancelled',
    RETRYING: 'retrying',
  },
  // Queue operations
  operations: {
    ADD: 'add',
    PROCESS: 'process',
    REMOVE: 'remove',
    CLEAR: 'clear',
    PAUSE: 'pause',
    RESUME: 'resume',
    RETRY: 'retry',
  },
  // Queue workers
  workers: {
    EMAIL: 'email-worker',
    SMS: 'sms-worker',
    PUSH: 'push-worker',
    WEBHOOK: 'webhook-worker',
    ANALYTICS: 'analytics-worker',
    MONITORING: 'monitoring-worker',
    LOGGING: 'logging-worker',
    BACKUP: 'backup-worker',
    CLEANUP: 'cleanup-worker',
    MAINTENANCE: 'maintenance-worker',
  },
  // Queue concurrency
  concurrency: {
    LOW: 1,
    MEDIUM: 5,
    HIGH: 10,
    VERY_HIGH: 20,
  },
  // Queue timeouts
  timeouts: {
    SHORT: 30000, // 30 seconds
    MEDIUM: 300000, // 5 minutes
    LONG: 1800000, // 30 minutes
    VERY_LONG: 3600000, // 1 hour
  },
  // Queue retries
  retries: {
    NONE: 0,
    LOW: 3,
    MEDIUM: 5,
    HIGH: 10,
    UNLIMITED: -1,
  },
  // Queue delays
  delays: {
    NONE: 0,
    SHORT: 1000, // 1 second
    MEDIUM: 5000, // 5 seconds
    LONG: 30000, // 30 seconds
    VERY_LONG: 300000, // 5 minutes
  },
  // Queue backoff
  backoff: {
    NONE: 1,
    LINEAR: 1,
    EXPONENTIAL: 2,
    FIBONACCI: 1.618,
  },
  // Queue monitoring
  monitoring: {
    ENABLED: true,
    METRICS: true,
    ALERTS: true,
    HEALTH_CHECKS: true,
  },
  // Queue performance
  performance: {
    ENABLED: true,
    PROFILING: true,
    OPTIMIZATION: true,
    BENCHMARKING: true,
  },
  // Queue security
  security: {
    ENABLED: true,
    AUTHENTICATION: true,
    AUTHORIZATION: true,
    ENCRYPTION: false,
    AUDITING: true,
  },
  // Queue maintenance
  maintenance: {
    ENABLED: true,
    CLEANUP: true,
    COMPACTION: true,
    DEFRAGMENTATION: true,
  },
  // Queue testing
  testing: {
    ENABLED: true,
    MOCKING: true,
    FIXTURES: true,
    COVERAGE: true,
  },
  // Queue documentation
  documentation: {
    ENABLED: true,
    GENERATION: true,
    VALIDATION: true,
    EXAMPLES: true,
  },
} as const;

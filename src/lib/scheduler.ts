export const scheduler = {
  // Scheduler types
  types: {
    CRON: 'cron',
    INTERVAL: 'interval',
    TIMEOUT: 'timeout',
    IMMEDIATE: 'immediate',
  },
  // Scheduler configurations
  configurations: {
    cron: {
      timezone: 'UTC',
      maxRetries: 3,
      retryDelay: 1000,
    },
    interval: {
      maxRetries: 3,
      retryDelay: 1000,
    },
    timeout: {
      maxRetries: 3,
      retryDelay: 1000,
    },
    immediate: {
      maxRetries: 3,
      retryDelay: 1000,
    },
  },
  // Scheduler names
  names: {
    BACKUP: 'backup',
    CLEANUP: 'cleanup',
    MAINTENANCE: 'maintenance',
    MONITORING: 'monitoring',
    ANALYTICS: 'analytics',
    LOGGING: 'logging',
    HEALTH_CHECK: 'health-check',
    METRICS: 'metrics',
    ALERTS: 'alerts',
    REPORTS: 'reports',
  },
  // Scheduler schedules
  schedules: {
    EVERY_MINUTE: '0 * * * * *',
    EVERY_5_MINUTES: '0 */5 * * * *',
    EVERY_10_MINUTES: '0 */10 * * * *',
    EVERY_15_MINUTES: '0 */15 * * * *',
    EVERY_30_MINUTES: '0 */30 * * * *',
    EVERY_HOUR: '0 0 * * * *',
    EVERY_2_HOURS: '0 0 */2 * * *',
    EVERY_4_HOURS: '0 0 */4 * * *',
    EVERY_6_HOURS: '0 0 */6 * * *',
    EVERY_12_HOURS: '0 0 */12 * * *',
    EVERY_DAY: '0 0 0 * * *',
    EVERY_WEEK: '0 0 0 * * 0',
    EVERY_MONTH: '0 0 0 1 * *',
    EVERY_QUARTER: '0 0 0 1 */3 *',
    EVERY_YEAR: '0 0 0 1 1 *',
  },
  // Scheduler priorities
  priorities: {
    LOW: 1,
    NORMAL: 5,
    HIGH: 10,
    CRITICAL: 20,
  },
  // Scheduler statuses
  statuses: {
    SCHEDULED: 'scheduled',
    RUNNING: 'running',
    COMPLETED: 'completed',
    FAILED: 'failed',
    CANCELLED: 'cancelled',
    PAUSED: 'paused',
  },
  // Scheduler operations
  operations: {
    SCHEDULE: 'schedule',
    UNSCHEDULE: 'unschedule',
    PAUSE: 'pause',
    RESUME: 'resume',
    TRIGGER: 'trigger',
    CANCEL: 'cancel',
  },
  // Scheduler workers
  workers: {
    BACKUP: 'backup-worker',
    CLEANUP: 'cleanup-worker',
    MAINTENANCE: 'maintenance-worker',
    MONITORING: 'monitoring-worker',
    ANALYTICS: 'analytics-worker',
    LOGGING: 'logging-worker',
    HEALTH_CHECK: 'health-check-worker',
    METRICS: 'metrics-worker',
    ALERTS: 'alerts-worker',
    REPORTS: 'reports-worker',
  },
  // Scheduler concurrency
  concurrency: {
    LOW: 1,
    MEDIUM: 5,
    HIGH: 10,
    VERY_HIGH: 20,
  },
  // Scheduler timeouts
  timeouts: {
    SHORT: 30000, // 30 seconds
    MEDIUM: 300000, // 5 minutes
    LONG: 1800000, // 30 minutes
    VERY_LONG: 3600000, // 1 hour
  },
  // Scheduler retries
  retries: {
    NONE: 0,
    LOW: 3,
    MEDIUM: 5,
    HIGH: 10,
    UNLIMITED: -1,
  },
  // Scheduler delays
  delays: {
    NONE: 0,
    SHORT: 1000, // 1 second
    MEDIUM: 5000, // 5 seconds
    LONG: 30000, // 30 seconds
    VERY_LONG: 300000, // 5 minutes
  },
  // Scheduler backoff
  backoff: {
    NONE: 1,
    LINEAR: 1,
    EXPONENTIAL: 2,
    FIBONACCI: 1.618,
  },
  // Scheduler monitoring
  monitoring: {
    ENABLED: true,
    METRICS: true,
    ALERTS: true,
    HEALTH_CHECKS: true,
  },
  // Scheduler performance
  performance: {
    ENABLED: true,
    PROFILING: true,
    OPTIMIZATION: true,
    BENCHMARKING: true,
  },
  // Scheduler security
  security: {
    ENABLED: true,
    AUTHENTICATION: true,
    AUTHORIZATION: true,
    ENCRYPTION: false,
    AUDITING: true,
  },
  // Scheduler maintenance
  maintenance: {
    ENABLED: true,
    CLEANUP: true,
    COMPACTION: true,
    DEFRAGMENTATION: true,
  },
  // Scheduler testing
  testing: {
    ENABLED: true,
    MOCKING: true,
    FIXTURES: true,
    COVERAGE: true,
  },
  // Scheduler documentation
  documentation: {
    ENABLED: true,
    GENERATION: true,
    VALIDATION: true,
    EXAMPLES: true,
  },
} as const;

export const integrations = {
  // Integration types
  types: {
    API: 'api',
    WEBHOOK: 'webhook',
    SDK: 'sdk',
    PLUGIN: 'plugin',
    EXTENSION: 'extension',
  },
  // Integration channels
  channels: {
    EMAIL: 'email',
    SMS: 'sms',
    PUSH: 'push',
    WEBHOOK: 'webhook',
    IN_APP: 'in-app',
    SLACK: 'slack',
    DISCORD: 'discord',
    TEAMS: 'teams',
  },
  // Integration priorities
  priorities: {
    LOW: 1,
    NORMAL: 5,
    HIGH: 10,
    CRITICAL: 20,
  },
  // Integration statuses
  statuses: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    PENDING: 'pending',
    FAILED: 'failed',
    CANCELLED: 'cancelled',
  },
  // Integration operations
  operations: {
    CONNECT: 'connect',
    DISCONNECT: 'disconnect',
    SYNC: 'sync',
    TEST: 'test',
    RESET: 'reset',
  },
  // Integration providers
  providers: {
    EMAIL: {
      SENDGRID: 'sendgrid',
      MAILGUN: 'mailgun',
      SES: 'ses',
      SMTP: 'smtp',
    },
    SMS: {
      TWILIO: 'twilio',
      AWS_SNS: 'aws-sns',
      VONAGE: 'vonage',
    },
    PUSH: {
      FCM: 'fcm',
      APNS: 'apns',
      WEB_PUSH: 'web-push',
    },
    WEBHOOK: {
      CUSTOM: 'custom',
      ZAPIER: 'zapier',
      IFTTT: 'ifttt',
    },
  },
  // Integration configurations
  configurations: {
    email: {
      from: 'noreply@nwlandscape.com',
      replyTo: 'info@nwlandscape.com',
      maxRetries: 3,
      retryDelay: 1000,
    },
    sms: {
      from: '+12531234567',
      maxRetries: 3,
      retryDelay: 1000,
    },
    push: {
      maxRetries: 3,
      retryDelay: 1000,
    },
    webhook: {
      maxRetries: 3,
      retryDelay: 1000,
    },
  },
  // Integration limits
  limits: {
    EMAIL_PER_HOUR: 1000,
    SMS_PER_HOUR: 100,
    PUSH_PER_HOUR: 10000,
    WEBHOOK_PER_HOUR: 1000,
  },
  // Integration timeouts
  timeouts: {
    EMAIL: 30000, // 30 seconds
    SMS: 10000, // 10 seconds
    PUSH: 5000, // 5 seconds
    WEBHOOK: 30000, // 30 seconds
  },
  // Integration retries
  retries: {
    EMAIL: 3,
    SMS: 3,
    PUSH: 3,
    WEBHOOK: 3,
  },
  // Integration delays
  delays: {
    EMAIL: 0,
    SMS: 0,
    PUSH: 0,
    WEBHOOK: 0,
  },
  // Integration backoff
  backoff: {
    EMAIL: 2,
    SMS: 2,
    PUSH: 2,
    WEBHOOK: 2,
  },
  // Integration monitoring
  monitoring: {
    ENABLED: true,
    METRICS: true,
    ALERTS: true,
    HEALTH_CHECKS: true,
  },
  // Integration performance
  performance: {
    ENABLED: true,
    PROFILING: true,
    OPTIMIZATION: true,
    BENCHMARKING: true,
  },
  // Integration security
  security: {
    ENABLED: true,
    AUTHENTICATION: true,
    AUTHORIZATION: true,
    ENCRYPTION: true,
    AUDITING: true,
  },
  // Integration maintenance
  maintenance: {
    ENABLED: true,
    CLEANUP: true,
    COMPACTION: true,
    DEFRAGMENTATION: true,
  },
  // Integration testing
  testing: {
    ENABLED: true,
    MOCKING: true,
    FIXTURES: true,
    COVERAGE: true,
  },
  // Integration documentation
  documentation: {
    ENABLED: true,
    GENERATION: true,
    VALIDATION: true,
    EXAMPLES: true,
  },
} as const;

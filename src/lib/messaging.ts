export const messaging = {
  // Messaging types
  types: {
    EMAIL: 'email',
    SMS: 'sms',
    PUSH: 'push',
    WEBHOOK: 'webhook',
    IN_APP: 'in-app',
    SLACK: 'slack',
    DISCORD: 'discord',
    TEAMS: 'teams',
  },
  // Messaging channels
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
  // Messaging priorities
  priorities: {
    LOW: 1,
    NORMAL: 5,
    HIGH: 10,
    CRITICAL: 20,
  },
  // Messaging statuses
  statuses: {
    PENDING: 'pending',
    SENT: 'sent',
    DELIVERED: 'delivered',
    FAILED: 'failed',
    CANCELLED: 'cancelled',
  },
  // Messaging operations
  operations: {
    SEND: 'send',
    SCHEDULE: 'schedule',
    CANCEL: 'cancel',
    RETRY: 'retry',
    RESEND: 'resend',
  },
  // Messaging templates
  templates: {
    WELCOME: 'welcome',
    QUOTE_REQUEST: 'quote-request',
    QUOTE_RECEIVED: 'quote-received',
    APPOINTMENT_SCHEDULED: 'appointment-scheduled',
    APPOINTMENT_REMINDER: 'appointment-reminder',
    PAYMENT_RECEIVED: 'payment-received',
    PAYMENT_DUE: 'payment-due',
    SERVICE_COMPLETED: 'service-completed',
    FOLLOW_UP: 'follow-up',
    MARKETING: 'marketing',
  },
  // Messaging providers
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
  // Messaging configurations
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
  // Messaging limits
  limits: {
    EMAIL_PER_HOUR: 1000,
    SMS_PER_HOUR: 100,
    PUSH_PER_HOUR: 10000,
    WEBHOOK_PER_HOUR: 1000,
  },
  // Messaging timeouts
  timeouts: {
    EMAIL: 30000, // 30 seconds
    SMS: 10000, // 10 seconds
    PUSH: 5000, // 5 seconds
    WEBHOOK: 30000, // 30 seconds
  },
  // Messaging retries
  retries: {
    EMAIL: 3,
    SMS: 3,
    PUSH: 3,
    WEBHOOK: 3,
  },
  // Messaging delays
  delays: {
    EMAIL: 0,
    SMS: 0,
    PUSH: 0,
    WEBHOOK: 0,
  },
  // Messaging backoff
  backoff: {
    EMAIL: 2,
    SMS: 2,
    PUSH: 2,
    WEBHOOK: 2,
  },
  // Messaging monitoring
  monitoring: {
    ENABLED: true,
    METRICS: true,
    ALERTS: true,
    HEALTH_CHECKS: true,
  },
  // Messaging performance
  performance: {
    ENABLED: true,
    PROFILING: true,
    OPTIMIZATION: true,
    BENCHMARKING: true,
  },
  // Messaging security
  security: {
    ENABLED: true,
    AUTHENTICATION: true,
    AUTHORIZATION: true,
    ENCRYPTION: true,
    AUDITING: true,
  },
  // Messaging maintenance
  maintenance: {
    ENABLED: true,
    CLEANUP: true,
    COMPACTION: true,
    DEFRAGMENTATION: true,
  },
  // Messaging testing
  testing: {
    ENABLED: true,
    MOCKING: true,
    FIXTURES: true,
    COVERAGE: true,
  },
  // Messaging documentation
  documentation: {
    ENABLED: true,
    GENERATION: true,
    VALIDATION: true,
    EXAMPLES: true,
  },
} as const;

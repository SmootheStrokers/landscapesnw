export const errorTypes = {
  // Client-side errors
  CLIENT_ERROR: 'CLIENT_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const;

export const errorMessages = {
  // Generic error messages
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection and try again.',
  VALIDATION: 'Please check your input and try again.',
  AUTHENTICATION: 'Authentication failed. Please log in again.',
  AUTHORIZATION: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER: 'Server error. Please try again later.',
  TIMEOUT: 'Request timed out. Please try again.',
  UNKNOWN: 'An unknown error occurred. Please try again.',
  
  // Specific error messages
  FORM_VALIDATION: 'Please fill in all required fields correctly.',
  EMAIL_INVALID: 'Please enter a valid email address.',
  PHONE_INVALID: 'Please enter a valid phone number.',
  REQUIRED_FIELD: 'This field is required.',
  MIN_LENGTH: 'Please enter at least {min} characters.',
  MAX_LENGTH: 'Please enter no more than {max} characters.',
  INVALID_URL: 'Please enter a valid URL.',
  INVALID_DATE: 'Please enter a valid date.',
  INVALID_NUMBER: 'Please enter a valid number.',
  INVALID_PASSWORD: 'Password must be at least 8 characters long.',
  PASSWORDS_DONT_MATCH: 'Passwords do not match.',
  EMAIL_ALREADY_EXISTS: 'This email address is already registered.',
  USER_NOT_FOUND: 'User not found.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  ACCOUNT_LOCKED: 'Your account has been locked. Please contact support.',
  ACCOUNT_DISABLED: 'Your account has been disabled. Please contact support.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please try again later.',
  FILE_TOO_LARGE: 'File is too large. Please choose a smaller file.',
  INVALID_FILE_TYPE: 'Invalid file type. Please choose a valid file.',
  UPLOAD_FAILED: 'File upload failed. Please try again.',
  DOWNLOAD_FAILED: 'File download failed. Please try again.',
  PAYMENT_FAILED: 'Payment failed. Please try again.',
  PAYMENT_CANCELLED: 'Payment was cancelled.',
  PAYMENT_PROCESSING: 'Payment is being processed. Please wait.',
  SUBSCRIPTION_EXPIRED: 'Your subscription has expired.',
  SUBSCRIPTION_CANCELLED: 'Your subscription has been cancelled.',
  FEATURE_UNAVAILABLE: 'This feature is currently unavailable.',
  MAINTENANCE_MODE: 'The system is currently under maintenance.',
  SERVICE_UNAVAILABLE: 'Service is temporarily unavailable.',
  QUOTA_EXCEEDED: 'You have exceeded your quota.',
  STORAGE_FULL: 'Storage is full. Please free up space.',
  PERMISSION_DENIED: 'Permission denied.',
  ACCESS_DENIED: 'Access denied.',
  RESOURCE_LOCKED: 'Resource is locked by another user.',
  CONFLICT: 'Resource conflict. Please refresh and try again.',
  DEPENDENCY_MISSING: 'Required dependency is missing.',
  CONFIGURATION_ERROR: 'Configuration error.',
  ENVIRONMENT_ERROR: 'Environment error.',
  DATABASE_ERROR: 'Database error.',
  CACHE_ERROR: 'Cache error.',
  QUEUE_ERROR: 'Queue error.',
  SCHEDULER_ERROR: 'Scheduler error.',
  NOTIFICATION_ERROR: 'Notification error.',
  EMAIL_ERROR: 'Email error.',
  SMS_ERROR: 'SMS error.',
  PUSH_ERROR: 'Push notification error.',
  WEBHOOK_ERROR: 'Webhook error.',
  API_ERROR: 'API error.',
  INTEGRATION_ERROR: 'Integration error.',
  THIRD_PARTY_ERROR: 'Third-party service error.',
  EXTERNAL_SERVICE_ERROR: 'External service error.',
  CONNECTION_TIMEOUT: 'Connection timed out.',
  READ_TIMEOUT: 'Read timed out.',
  WRITE_TIMEOUT: 'Write timed out.',
  DNS_ERROR: 'DNS error.',
  SSL_ERROR: 'SSL error.',
  CERTIFICATE_ERROR: 'Certificate error.',
  PROXY_ERROR: 'Proxy error.',
  FIREWALL_ERROR: 'Firewall error.',
  ROUTING_ERROR: 'Routing error.',
  LOAD_BALANCER_ERROR: 'Load balancer error.',
  CDN_ERROR: 'CDN error.',
} as const;

export const errorHandling = {
  // Error handling strategies
  strategies: {
    RETRY: 'retry',
    FALLBACK: 'fallback',
    IGNORE: 'ignore',
    LOG: 'log',
    ALERT: 'alert',
    RECOVER: 'recover',
    ABORT: 'abort',
  },
  // Error severity levels
  severity: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
    CRITICAL: 'critical',
  },
  // Error categories
  categories: {
    USER: 'user',
    SYSTEM: 'system',
    NETWORK: 'network',
    DATABASE: 'database',
    AUTHENTICATION: 'authentication',
    AUTHORIZATION: 'authorization',
    VALIDATION: 'validation',
    BUSINESS: 'business',
    TECHNICAL: 'technical',
  },
  // Error actions
  actions: {
    RETRY: 'retry',
    FALLBACK: 'fallback',
    IGNORE: 'ignore',
    LOG: 'log',
    ALERT: 'alert',
    RECOVER: 'recover',
    ABORT: 'abort',
    NOTIFY: 'notify',
    ESCALATE: 'escalate',
    RESOLVE: 'resolve',
  },
} as const;

export const errorReporting = {
  // Reporting levels
  levels: {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    FATAL: 'fatal',
  },
  // Reporting channels
  channels: {
    CONSOLE: 'console',
    FILE: 'file',
    DATABASE: 'database',
    EMAIL: 'email',
    SMS: 'sms',
    PUSH: 'push',
    WEBHOOK: 'webhook',
    API: 'api',
  },
  // Reporting formats
  formats: {
    JSON: 'json',
    XML: 'xml',
    CSV: 'csv',
    TSV: 'tsv',
    LOG: 'log',
    TEXT: 'text',
    HTML: 'html',
  },
} as const;

export const errorRecovery = {
  // Recovery strategies
  strategies: {
    RETRY: 'retry',
    FALLBACK: 'fallback',
    IGNORE: 'ignore',
    LOG: 'log',
    ALERT: 'alert',
    RECOVER: 'recover',
    ABORT: 'abort',
    NOTIFY: 'notify',
    ESCALATE: 'escalate',
    RESOLVE: 'resolve',
  },
  // Recovery actions
  actions: {
    RETRY: 'retry',
    FALLBACK: 'fallback',
    IGNORE: 'ignore',
    LOG: 'log',
    ALERT: 'alert',
    RECOVER: 'recover',
    ABORT: 'abort',
    NOTIFY: 'notify',
    ESCALATE: 'escalate',
    RESOLVE: 'resolve',
  },
  // Recovery timeouts
  timeouts: {
    IMMEDIATE: 0,
    SHORT: 1000, // 1 second
    MEDIUM: 5000, // 5 seconds
    LONG: 30000, // 30 seconds
    VERY_LONG: 300000, // 5 minutes
  },
  // Recovery limits
  limits: {
    MAX_RETRIES: 3,
    MAX_ATTEMPTS: 5,
    MAX_DURATION: 300000, // 5 minutes
    MAX_ERRORS: 10,
    MAX_WARNINGS: 50,
    MAX_LOGS: 1000,
  },
} as const;

export const errorLogging = {
  // Log levels
  levels: {
    DEBUG: 'debug',
    INFO: 'info',
    WARN: 'warn',
    ERROR: 'error',
    FATAL: 'fatal',
  },
  // Log formats
  formats: {
    JSON: 'json',
    XML: 'xml',
    CSV: 'csv',
    TSV: 'tsv',
    LOG: 'log',
    TEXT: 'text',
    HTML: 'html',
  },
  // Log destinations
  destinations: {
    CONSOLE: 'console',
    FILE: 'file',
    DATABASE: 'database',
    EMAIL: 'email',
    SMS: 'sms',
    PUSH: 'push',
    WEBHOOK: 'webhook',
    API: 'api',
  },
} as const;
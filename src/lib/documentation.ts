export const documentation = {
  // Documentation types
  types: {
    API: 'api',
    USER: 'user',
    DEVELOPER: 'developer',
    ADMIN: 'admin',
    TECHNICAL: 'technical',
    BUSINESS: 'business',
  },
  // Documentation formats
  formats: {
    MARKDOWN: 'markdown',
    HTML: 'html',
    PDF: 'pdf',
    WORD: 'word',
    POWERPOINT: 'powerpoint',
    EXCEL: 'excel',
    JSON: 'json',
    XML: 'xml',
    YAML: 'yaml',
    TOML: 'toml',
  },
  // Documentation languages
  languages: {
    ENGLISH: 'en',
    SPANISH: 'es',
    FRENCH: 'fr',
    GERMAN: 'de',
    ITALIAN: 'it',
    PORTUGUESE: 'pt',
    RUSSIAN: 'ru',
    JAPANESE: 'ja',
    KOREAN: 'ko',
    CHINESE: 'zh',
  },
  // Documentation sections
  sections: {
    OVERVIEW: 'overview',
    GETTING_STARTED: 'getting-started',
    API_REFERENCE: 'api-reference',
    EXAMPLES: 'examples',
    TUTORIALS: 'tutorials',
    FAQ: 'faq',
    TROUBLESHOOTING: 'troubleshooting',
    CHANGELOG: 'changelog',
    CONTRIBUTING: 'contributing',
    LICENSE: 'license',
  },
  // Documentation priorities
  priorities: {
    LOW: 1,
    NORMAL: 5,
    HIGH: 10,
    CRITICAL: 20,
  },
  // Documentation statuses
  statuses: {
    DRAFT: 'draft',
    REVIEW: 'review',
    APPROVED: 'approved',
    PUBLISHED: 'published',
    ARCHIVED: 'archived',
  },
  // Documentation operations
  operations: {
    CREATE: 'create',
    READ: 'read',
    UPDATE: 'update',
    DELETE: 'delete',
    PUBLISH: 'publish',
    ARCHIVE: 'archive',
  },
  // Documentation configurations
  configurations: {
    title: 'NW Landscape Management Documentation',
    description: 'Comprehensive documentation for NW Landscape Management',
    version: '1.0.0',
    author: 'NW Landscape Management',
    license: 'MIT',
    repository: 'https://github.com/nwlandscape/documentation',
    website: 'https://nwlandscape.com',
  },
  // Documentation limits
  limits: {
    MAX_PAGE_SIZE: 1048576, // 1MB
    MAX_IMAGES: 100,
    MAX_ATTACHMENTS: 50,
    MAX_VERSIONS: 100,
  },
  // Documentation timeouts
  timeouts: {
    SHORT: 5000, // 5 seconds
    MEDIUM: 15000, // 15 seconds
    LONG: 30000, // 30 seconds
    VERY_LONG: 60000, // 1 minute
  },
  // Documentation retries
  retries: {
    NONE: 0,
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
    UNLIMITED: -1,
  },
  // Documentation delays
  delays: {
    NONE: 0,
    SHORT: 100, // 100ms
    MEDIUM: 500, // 500ms
    LONG: 1000, // 1 second
    VERY_LONG: 5000, // 5 seconds
  },
  // Documentation backoff
  backoff: {
    NONE: 1,
    LINEAR: 1,
    EXPONENTIAL: 2,
    FIBONACCI: 1.618,
  },
  // Documentation monitoring
  monitoring: {
    ENABLED: true,
    METRICS: true,
    ALERTS: true,
    HEALTH_CHECKS: true,
  },
  // Documentation performance
  performance: {
    ENABLED: true,
    PROFILING: true,
    OPTIMIZATION: true,
    BENCHMARKING: true,
  },
  // Documentation security
  security: {
    ENABLED: true,
    AUTHENTICATION: true,
    AUTHORIZATION: true,
    ENCRYPTION: true,
    AUDITING: true,
  },
  // Documentation maintenance
  maintenance: {
    ENABLED: true,
    CLEANUP: true,
    COMPACTION: true,
    DEFRAGMENTATION: true,
  },
  // Documentation testing
  testing: {
    ENABLED: true,
    MOCKING: true,
    FIXTURES: true,
    COVERAGE: true,
  },
} as const;
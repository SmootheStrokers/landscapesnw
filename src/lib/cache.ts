export const cache = {
  // Cache types
  types: {
    MEMORY: 'memory',
    REDIS: 'redis',
    MEMCACHED: 'memcached',
    FILE: 'file',
    DATABASE: 'database',
  },
  // Cache configurations
  configurations: {
    memory: {
      maxSize: 100,
      ttl: 3600, // 1 hour
      cleanupInterval: 300000, // 5 minutes
    },
    redis: {
      host: 'localhost',
      port: 6379,
      password: null,
      db: 0,
      ttl: 3600, // 1 hour
      maxRetries: 3,
      retryDelay: 1000,
    },
    memcached: {
      servers: ['localhost:11211'],
      ttl: 3600, // 1 hour
      maxRetries: 3,
      retryDelay: 1000,
    },
    file: {
      directory: './cache',
      ttl: 3600, // 1 hour
      maxSize: 1000000000, // 1GB
    },
    database: {
      table: 'cache',
      ttl: 3600, // 1 hour
      cleanupInterval: 300000, // 5 minutes
    },
  },
  // Cache strategies
  strategies: {
    LRU: 'lru',
    LFU: 'lfu',
    FIFO: 'fifo',
    TTL: 'ttl',
  },
  // Cache levels
  levels: {
    L1: 'l1',
    L2: 'l2',
    L3: 'l3',
  },
  // Cache operations
  operations: {
    GET: 'get',
    SET: 'set',
    DELETE: 'delete',
    CLEAR: 'clear',
    EXISTS: 'exists',
    EXPIRE: 'expire',
    TTL: 'ttl',
  },
  // Cache keys
  keys: {
    USER: 'user',
    SESSION: 'session',
    CONFIG: 'config',
    DATA: 'data',
    TEMP: 'temp',
  },
  // Cache prefixes
  prefixes: {
    USER: 'user:',
    SESSION: 'session:',
    CONFIG: 'config:',
    DATA: 'data:',
    TEMP: 'temp:',
  },
  // Cache TTL
  ttl: {
    SHORT: 300, // 5 minutes
    MEDIUM: 3600, // 1 hour
    LONG: 86400, // 1 day
    VERY_LONG: 604800, // 1 week
  },
  // Cache sizes
  sizes: {
    SMALL: 1024, // 1KB
    MEDIUM: 10240, // 10KB
    LARGE: 102400, // 100KB
    VERY_LARGE: 1048576, // 1MB
  },
  // Cache compression
  compression: {
    ENABLED: true,
    ALGORITHM: 'gzip',
    LEVEL: 6,
    THRESHOLD: 1024, // 1KB
  },
  // Cache encryption
  encryption: {
    ENABLED: false,
    ALGORITHM: 'aes-256-gcm',
    KEY: null,
  },
  // Cache serialization
  serialization: {
    FORMAT: 'json',
    COMPRESSION: true,
    ENCRYPTION: false,
  },
  // Cache deserialization
  deserialization: {
    FORMAT: 'json',
    COMPRESSION: true,
    ENCRYPTION: false,
  },
  // Cache validation
  validation: {
    ENABLED: true,
    SCHEMA: true,
    TYPES: true,
    RANGES: true,
  },
  // Cache monitoring
  monitoring: {
    ENABLED: true,
    METRICS: true,
    ALERTS: true,
    HEALTH_CHECKS: true,
  },
  // Cache performance
  performance: {
    ENABLED: true,
    PROFILING: true,
    OPTIMIZATION: true,
    BENCHMARKING: true,
  },
  // Cache security
  security: {
    ENABLED: true,
    AUTHENTICATION: true,
    AUTHORIZATION: true,
    ENCRYPTION: false,
    AUDITING: true,
  },
  // Cache maintenance
  maintenance: {
    ENABLED: true,
    CLEANUP: true,
    COMPACTION: true,
    DEFRAGMENTATION: true,
  },
  // Cache testing
  testing: {
    ENABLED: true,
    MOCKING: true,
    FIxtures: true,
    COVERAGE: true,
  },
  // Cache documentation
  documentation: {
    ENABLED: true,
    GENERATION: true,
    VALIDATION: true,
    EXAMPLES: true,
  },
} as const;

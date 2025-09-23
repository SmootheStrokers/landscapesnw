export const testing = {
  // Testing types
  types: {
    UNIT: 'unit',
    INTEGRATION: 'integration',
    E2E: 'e2e',
    PERFORMANCE: 'performance',
    ACCESSIBILITY: 'accessibility',
    VISUAL: 'visual',
    SECURITY: 'security',
    LOAD: 'load',
    STRESS: 'stress',
    SMOKE: 'smoke',
    REGRESSION: 'regression',
  },
  // Testing frameworks
  frameworks: {
    JEST: 'jest',
    VITEST: 'vitest',
    PLAYWRIGHT: 'playwright',
    CYPRESS: 'cypress',
    TESTING_LIBRARY: 'testing-library',
  },
  // Testing environments
  environments: {
    DEVELOPMENT: 'development',
    STAGING: 'staging',
    PRODUCTION: 'production',
    TESTING: 'testing',
  },
  // Testing configurations
  configurations: {
    jest: {
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
    },
    vitest: {
      testEnvironment: 'jsdom',
      setupFiles: ['<rootDir>/src/setupTests.ts'],
      alias: {
        '@': '<rootDir>/src',
      },
    },
    playwright: {
      testDir: './tests',
      timeout: 30000,
      retries: 2,
    },
    cypress: {
      baseUrl: 'http://localhost:3000',
      viewportWidth: 1280,
      viewportHeight: 720,
    },
  },
  // Testing coverage
  coverage: {
    statements: 80,
    branches: 80,
    functions: 80,
    lines: 80,
  },
  // Testing limits
  limits: {
    MAX_TEST_DURATION: 30000, // 30 seconds
    MAX_RETRIES: 3,
    MAX_CONCURRENT_TESTS: 5,
    MAX_MEMORY_USAGE: 1073741824, // 1GB
  },
  // Testing timeouts
  timeouts: {
    SHORT: 5000, // 5 seconds
    MEDIUM: 15000, // 15 seconds
    LONG: 30000, // 30 seconds
    VERY_LONG: 60000, // 1 minute
  },
  // Testing retries
  retries: {
    NONE: 0,
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
    UNLIMITED: -1,
  },
  // Testing delays
  delays: {
    NONE: 0,
    SHORT: 100, // 100ms
    MEDIUM: 500, // 500ms
    LONG: 1000, // 1 second
    VERY_LONG: 5000, // 5 seconds
  },
  // Testing backoff
  backoff: {
    NONE: 1,
    LINEAR: 1,
    EXPONENTIAL: 2,
    FIBONACCI: 1.618,
  },
  // Testing monitoring
  monitoring: {
    ENABLED: true,
    METRICS: true,
    ALERTS: true,
    HEALTH_CHECKS: true,
  },
  // Testing performance
  performance: {
    ENABLED: true,
    PROFILING: true,
    OPTIMIZATION: true,
    BENCHMARKING: true,
  },
  // Testing security
  security: {
    ENABLED: true,
    AUTHENTICATION: true,
    AUTHORIZATION: true,
    ENCRYPTION: true,
    AUDITING: true,
  },
  // Testing maintenance
  maintenance: {
    ENABLED: true,
    CLEANUP: true,
    COMPACTION: true,
    DEFRAGMENTATION: true,
  },
  // Testing documentation
  documentation: {
    ENABLED: true,
    GENERATION: true,
    VALIDATION: true,
    EXAMPLES: true,
  },
} as const;
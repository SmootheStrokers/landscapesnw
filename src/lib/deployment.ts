export const deployment = {
  // Deployment environments
  environments: {
    development: {
      url: 'http://localhost:3000',
      api: 'http://localhost:3000/api',
      cdn: 'http://localhost:3000',
    },
    staging: {
      url: 'https://staging.nwlandscape.com',
      api: 'https://staging.nwlandscape.com/api',
      cdn: 'https://staging-cdn.nwlandscape.com',
    },
    production: {
      url: 'https://nwlandscape.com',
      api: 'https://nwlandscape.com/api',
      cdn: 'https://cdn.nwlandscape.com',
    },
  },
  // Build configurations
  build: {
    output: 'dist',
    public: 'public',
    static: 'static',
    assets: 'assets',
  },
  // Deployment strategies
  strategies: {
    blueGreen: 'blue-green',
    rolling: 'rolling',
    canary: 'canary',
    recreate: 'recreate',
  },
  // Health checks
  healthChecks: {
    liveness: '/health/live',
    readiness: '/health/ready',
    startup: '/health/startup',
  },
} as const;

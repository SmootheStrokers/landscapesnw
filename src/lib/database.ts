export const database = {
  // Database types
  types: {
    POSTGRESQL: 'postgresql',
    MYSQL: 'mysql',
    SQLITE: 'sqlite',
    MONGODB: 'mongodb',
    REDIS: 'redis',
    ELASTICSEARCH: 'elasticsearch',
  },
  // Connection configurations
  connections: {
    development: {
      host: 'localhost',
      port: 5432,
      database: 'nwlandscape_dev',
      username: 'postgres',
      password: 'password',
      ssl: false,
    },
    staging: {
      host: 'staging-db.nwlandscape.com',
      port: 5432,
      database: 'nwlandscape_staging',
      username: 'postgres',
      password: 'staging_password',
      ssl: true,
    },
    production: {
      host: 'prod-db.nwlandscape.com',
      port: 5432,
      database: 'nwlandscape_prod',
      username: 'postgres',
      password: 'prod_password',
      ssl: true,
    },
  },
  // Pool configurations
  pool: {
    min: 2,
    max: 10,
    acquireTimeoutMillis: 30000,
    createTimeoutMillis: 30000,
    destroyTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 200,
  },
  // Migration configurations
  migrations: {
    directory: './migrations',
    tableName: 'migrations',
    extension: 'sql',
  },
  // Seed configurations
  seeds: {
    directory: './seeds',
    extension: 'sql',
  },
  // Backup configurations
  backup: {
    enabled: true,
    schedule: '0 2 * * *', // Daily at 2 AM
    retention: 30, // 30 days
    compression: true,
    encryption: true,
  },
  // Replication configurations
  replication: {
    enabled: true,
    master: 'master-db.nwlandscape.com',
    slaves: [
      'slave1-db.nwlandscape.com',
      'slave2-db.nwlandscape.com',
    ],
    loadBalancing: 'round-robin',
  },
  // Clustering configurations
  clustering: {
    enabled: true,
    nodes: [
      'node1-db.nwlandscape.com',
      'node2-db.nwlandscape.com',
      'node3-db.nwlandscape.com',
    ],
    sharding: true,
    consistency: 'eventual',
  },
  // Monitoring configurations
  monitoring: {
    enabled: true,
    metrics: true,
    alerts: true,
    healthChecks: true,
  },
  // Security configurations
  security: {
    encryption: true,
    ssl: true,
    authentication: true,
    authorization: true,
    auditing: true,
  },
  // Performance configurations
  performance: {
    indexing: true,
    caching: true,
    queryOptimization: true,
    connectionPooling: true,
  },
  // Maintenance configurations
  maintenance: {
    enabled: true,
    schedule: '0 3 * * 0', // Weekly on Sunday at 3 AM
    vacuum: true,
    analyze: true,
    reindex: true,
  },
  // Testing configurations
  testing: {
    enabled: true,
    database: 'nwlandscape_test',
    fixtures: true,
    migrations: true,
    seeds: true,
  },
  // Development configurations
  development: {
    enabled: true,
    database: 'nwlandscape_dev',
    fixtures: true,
    migrations: true,
    seeds: true,
    logging: true,
  },
  // Staging configurations
  staging: {
    enabled: true,
    database: 'nwlandscape_staging',
    fixtures: false,
    migrations: true,
    seeds: true,
    logging: true,
  },
  // Production configurations
  production: {
    enabled: true,
    database: 'nwlandscape_prod',
    fixtures: false,
    migrations: true,
    seeds: false,
    logging: false,
  },
} as const;

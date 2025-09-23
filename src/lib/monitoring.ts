export const monitoring = {
  // Metrics to track
  metrics: {
    performance: ['LCP', 'FID', 'CLS', 'FCP', 'TTFB'],
    business: ['conversions', 'revenue', 'leads', 'quotes'],
    technical: ['errors', 'uptime', 'response_time', 'throughput'],
  },
  // Alert thresholds
  thresholds: {
    LCP: 3000,
    FID: 200,
    CLS: 0.2,
    errorRate: 0.05,
    responseTime: 2000,
  },
  // Monitoring tools
  tools: {
    analytics: 'Google Analytics',
    performance: 'Lighthouse',
    errors: 'Sentry',
    uptime: 'UptimeRobot',
  },
} as const;

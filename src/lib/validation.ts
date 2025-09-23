export const validation = {
  // Email validation
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  // Phone validation
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number',
  },
  // Password validation
  password: {
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    message: 'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character',
  },
  // Name validation
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: 'Name must be 2-50 characters long and contain only letters and spaces',
  },
  // Address validation
  address: {
    minLength: 5,
    maxLength: 200,
    message: 'Address must be 5-200 characters long',
  },
  // City validation
  city: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: 'City must be 2-50 characters long and contain only letters and spaces',
  },
  // ZIP code validation
  zipCode: {
    pattern: /^\d{5}(-\d{4})?$/,
    message: 'Please enter a valid ZIP code',
  },
  // Message validation
  message: {
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be 10-1000 characters long',
  },
  // File validation
  file: {
    maxSize: 10485760, // 10MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
    message: 'File must be less than 10MB and be a valid image or PDF',
  },
  // Image validation
  image: {
    maxSize: 5242880, // 5MB
    allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
    message: 'Image must be less than 5MB and be a valid image format',
  },
  // URL validation
  url: {
    pattern: /^https?:\/\/.+/,
    message: 'Please enter a valid URL',
  },
  // Number validation
  number: {
    pattern: /^\d+$/,
    message: 'Please enter a valid number',
  },
  // Decimal validation
  decimal: {
    pattern: /^\d+\.?\d*$/,
    message: 'Please enter a valid decimal number',
  },
  // Currency validation
  currency: {
    pattern: /^\$?\d+(\.\d{2})?$/,
    message: 'Please enter a valid currency amount',
  },
  // Date validation
  date: {
    pattern: /^\d{4}-\d{2}-\d{2}$/,
    message: 'Please enter a valid date in YYYY-MM-DD format',
  },
  // Time validation
  time: {
    pattern: /^\d{2}:\d{2}$/,
    message: 'Please enter a valid time in HH:MM format',
  },
  // Color validation
  color: {
    pattern: /^#[0-9A-Fa-f]{6}$/,
    message: 'Please enter a valid hex color code',
  },
  // UUID validation
  uuid: {
    pattern: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
    message: 'Please enter a valid UUID',
  },
  // IP address validation
  ip: {
    pattern: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    message: 'Please enter a valid IP address',
  },
  // Credit card validation
  creditCard: {
    pattern: /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/,
    message: 'Please enter a valid credit card number',
  },
  // Social security number validation
  ssn: {
    pattern: /^\d{3}-\d{2}-\d{4}$/,
    message: 'Please enter a valid Social Security Number',
  },
  // Driver's license validation
  driversLicense: {
    pattern: /^[A-Z]\d{7}$/,
    message: 'Please enter a valid Driver\'s License number',
  },
  // Passport validation
  passport: {
    pattern: /^[A-Z]{2}\d{7}$/,
    message: 'Please enter a valid Passport number',
  },
  // Tax ID validation
  taxId: {
    pattern: /^\d{2}-\d{7}$/,
    message: 'Please enter a valid Tax ID number',
  },
  // Business license validation
  businessLicense: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Business License number',
  },
  // Insurance policy validation
  insurancePolicy: {
    pattern: /^[A-Z]{2}\d{8}$/,
    message: 'Please enter a valid Insurance Policy number',
  },
  // Contract number validation
  contractNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Contract number',
  },
  // Invoice number validation
  invoiceNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Invoice number',
  },
  // Purchase order validation
  purchaseOrder: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Purchase Order number',
  },
  // Work order validation
  workOrder: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Work Order number',
  },
  // Service order validation
  serviceOrder: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Service Order number',
  },
  // Quote number validation
  quoteNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Quote number',
  },
  // Estimate number validation
  estimateNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Estimate number',
  },
  // Proposal number validation
  proposalNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Proposal number',
  },
  // Bid number validation
  bidNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Bid number',
  },
  // Tender number validation
  tenderNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid Tender number',
  },
  // RFP number validation
  rfpNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFP number',
  },
  // RFQ number validation
  rfqNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFQ number',
  },
  // RFI number validation
  rfiNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFI number',
  },
  // RFT number validation
  rftNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFT number',
  },
  // RFS number validation
  rfsNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFS number',
  },
  // RFU number validation
  rfuNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFU number',
  },
  // RFV number validation
  rfvNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFV number',
  },
  // RFW number validation
  rfwNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFW number',
  },
  // RFX number validation
  rfxNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFX number',
  },
  // RFY number validation
  rfyNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFY number',
  },
  // RFZ number validation
  rfzNumber: {
    pattern: /^[A-Z]{2}\d{6}$/,
    message: 'Please enter a valid RFZ number',
  },
} as const;

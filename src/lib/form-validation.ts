export const formValidation = {
  // Quote form validation
  quote: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Name must be 2-50 characters long and contain only letters and spaces',
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
    phone: {
      required: true,
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
      message: 'Please enter a valid phone number',
    },
    address: {
      required: true,
      minLength: 5,
      maxLength: 200,
      message: 'Address must be 5-200 characters long',
    },
    city: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'City must be 2-50 characters long and contain only letters and spaces',
    },
    zipCode: {
      required: true,
      pattern: /^\d{5}(-\d{4})?$/,
      message: 'Please enter a valid ZIP code',
    },
    service: {
      required: true,
      message: 'Please select a service',
    },
    propertySize: {
      required: true,
      message: 'Please select property size',
    },
    timeline: {
      required: true,
      message: 'Please select timeline',
    },
    budget: {
      required: true,
      message: 'Please select budget range',
    },
    message: {
      required: false,
      minLength: 10,
      maxLength: 1000,
      message: 'Message must be 10-1000 characters long',
    },
  },
  // Contact form validation
  contact: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Name must be 2-50 characters long and contain only letters and spaces',
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
    phone: {
      required: false,
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
      message: 'Please enter a valid phone number',
    },
    subject: {
      required: true,
      minLength: 5,
      maxLength: 100,
      message: 'Subject must be 5-100 characters long',
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
      message: 'Message must be 10-1000 characters long',
    },
  },
  // Newsletter form validation
  newsletter: {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
  },
  // Login form validation
  login: {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
    password: {
      required: true,
      minLength: 8,
      message: 'Password must be at least 8 characters long',
    },
  },
  // Registration form validation
  registration: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Name must be 2-50 characters long and contain only letters and spaces',
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
    phone: {
      required: true,
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
      message: 'Please enter a valid phone number',
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      message: 'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character',
    },
    confirmPassword: {
      required: true,
      message: 'Please confirm your password',
    },
  },
  // Profile form validation
  profile: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'Name must be 2-50 characters long and contain only letters and spaces',
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
    phone: {
      required: true,
      pattern: /^[\+]?[1-9][\d]{0,15}$/,
      message: 'Please enter a valid phone number',
    },
    address: {
      required: false,
      minLength: 5,
      maxLength: 200,
      message: 'Address must be 5-200 characters long',
    },
    city: {
      required: false,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s]+$/,
      message: 'City must be 2-50 characters long and contain only letters and spaces',
    },
    zipCode: {
      required: false,
      pattern: /^\d{5}(-\d{4})?$/,
      message: 'Please enter a valid ZIP code',
    },
  },
  // Password reset form validation
  passwordReset: {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
  },
  // Password change form validation
  passwordChange: {
    currentPassword: {
      required: true,
      message: 'Please enter your current password',
    },
    newPassword: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      message: 'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character',
    },
    confirmPassword: {
      required: true,
      message: 'Please confirm your new password',
    },
  },
  // File upload validation
  fileUpload: {
    file: {
      required: true,
      maxSize: 10485760, // 10MB
      allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'],
      message: 'File must be less than 10MB and be a valid image or PDF',
    },
  },
  // Image upload validation
  imageUpload: {
    image: {
      required: true,
      maxSize: 5242880, // 5MB
      allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
      message: 'Image must be less than 5MB and be a valid image format',
    },
  },
} as const;

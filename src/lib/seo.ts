export const metaTags = {
  title: {
    default: 'NW Landscape Management | Award-Winning Landscaping Services | Federal Way, Tacoma, South Sound',
    maintenance: 'Landscape Maintenance Services | $325/month | Federal Way, Tacoma, WA',
    design: 'Landscape Design & Installation | Custom Solutions | Federal Way, Tacoma, WA',
    hardscape: 'Paver & Flagstone Patios | Hardscaping Services | Federal Way, Tacoma, WA',
    irrigation: 'Irrigation Systems | Smart Watering Solutions | Federal Way, Tacoma, WA',
    lighting: 'Landscape Lighting | Safety & Aesthetics | Federal Way, Tacoma, WA',
    lawn: 'Lawn Installation | Professional Sod Service | Federal Way, Tacoma, WA',
    quote: 'Get Free Quote | Professional Landscaping Services | Federal Way, Tacoma, WA',
    contact: 'Contact Us | Professional Landscaping Services | Federal Way, Tacoma, WA',
    about: 'About NW Landscape Management | 25+ Years Experience | Federal Way, Tacoma, WA',
    portfolio: 'Portfolio | Award-Winning Landscape Projects | Federal Way, Tacoma, WA',
    serviceAreas: 'Service Areas | Landscaping Coverage | Federal Way, Tacoma, South Sound',
  },
  description: {
    default: 'Award-winning landscape design and maintenance services for Federal Way, Tacoma, and the South Sound area. 25+ years of excellence. Starting at $325/month for maintenance.',
    maintenance: 'Professional landscape maintenance services starting at $325/month. Weekly year-round service for Federal Way, Tacoma, and South Sound area.',
    design: 'Custom landscape design and installation services. Transform your property with our award-winning designs. Serving Federal Way, Tacoma, and South Sound.',
    hardscape: 'Premium hardscape installation including patios, fire pits, and outdoor kitchens. Built to last in Pacific Northwest weather.',
    irrigation: 'Smart irrigation systems with programmable controllers and winterization service. Water conservation and efficiency for your landscape.',
    lighting: 'Low voltage landscape lighting for safety, security, and aesthetics. Extend your outdoor living hours with professional lighting.',
    lawn: 'Professional sod installation with Greensmix base. Functional lawn in 30 days with proper establishment. Serving Federal Way, Tacoma, and South Sound.',
    quote: 'Get your free landscaping quote from NW Landscape Management. Professional design, maintenance, and installation services for Federal Way, Tacoma, and South Sound area.',
    contact: 'Contact NW Landscape Management for professional landscaping services. Call (253) 661-5824 or email info@nwlandscape.com. Serving Federal Way, Tacoma, and South Sound.',
    about: 'Learn about NW Landscape Management, a 25+ year established landscaping company serving Federal Way, Tacoma, and the South Sound area with award-winning services.',
    portfolio: 'View our portfolio of award-winning landscape projects. Before and after photos of residential and commercial landscaping in Federal Way, Tacoma, and South Sound.',
    serviceAreas: 'NW Landscape Management serves 18+ cities in the South Sound area including Federal Way, Tacoma, Kent, Auburn, and more. Check if we serve your area.',
  },
  keywords: {
    default: 'landscaping, landscape maintenance, Federal Way, Tacoma, Kent, Auburn, landscape design, irrigation, hardscaping, patio installation, landscape lighting',
    maintenance: 'landscape maintenance, lawn care, weekly service, Federal Way landscaping, Tacoma landscaping, Kent landscaping, Auburn landscaping, $325 month',
    design: 'landscape design, custom landscaping, installation, Federal Way landscape design, Tacoma landscape design, Kent landscape design, Auburn landscape design',
    hardscape: 'hardscaping, patio installation, paver patios, flagstone, fire pits, outdoor kitchens, Federal Way hardscaping, Tacoma hardscaping, Kent hardscaping',
    irrigation: 'irrigation systems, sprinkler systems, smart irrigation, water conservation, Federal Way irrigation, Tacoma irrigation, Kent irrigation, Auburn irrigation',
    lighting: 'landscape lighting, outdoor lighting, security lighting, low voltage lighting, Federal Way lighting, Tacoma lighting, Kent lighting, Auburn lighting',
    lawn: 'lawn installation, sod installation, grass installation, lawn replacement, Federal Way lawn, Tacoma lawn, Kent lawn, Auburn lawn',
    quote: 'landscaping quote, free quote, landscape consultation, Federal Way quote, Tacoma quote, Kent quote, Auburn quote, landscaping estimate',
    contact: 'landscaping contact, landscape company, Federal Way landscaper, Tacoma landscaper, Kent landscaper, Auburn landscaper, landscaping phone number',
    about: 'landscaping company, landscape contractor, Federal Way landscaper, Tacoma landscaper, Kent landscaper, Auburn landscaper, 25 years experience',
    portfolio: 'landscape portfolio, landscaping projects, before after, Federal Way projects, Tacoma projects, Kent projects, Auburn projects, landscape gallery',
    serviceAreas: 'service areas, landscaping coverage, Federal Way, Tacoma, Kent, Auburn, Renton, Des Moines, Covington, Maple Valley, Sumner, Bonney Lake',
  },
} as const;

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NW Landscape Management',
    url: 'https://nwlandscape.com',
    logo: 'https://nwlandscape.com/images/logo.png',
    description: 'Award-winning landscape design and maintenance services for the Pacific Northwest',
    foundingDate: '1998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Federal Way',
      addressRegion: 'WA',
      postalCode: '98003',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(253) 123-4567',
      contactType: 'customer service',
      availableLanguage: 'English'
    }
  },
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'NW Landscape Management',
    description: 'Award-winning landscape design and maintenance services for Federal Way, Tacoma, and the South Sound area. 25+ years of excellence.',
    url: 'https://nwlandscape.com',
    telephone: '(253) 123-4567',
    email: 'info@nwlandscape.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Federal Way',
      addressRegion: 'WA',
      postalCode: '98003',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '47.3223',
      longitude: '-122.3126'
    },
    openingHours: 'Mo-Fr 07:00-18:00',
    priceRange: '$$',
    paymentAccepted: 'Cash, Check, Credit Card',
    currenciesAccepted: 'USD',
    areaServed: [
      {
        '@type': 'City',
        name: 'Federal Way',
        containedInPlace: {
          '@type': 'State',
          name: 'Washington'
        }
      },
      {
        '@type': 'City',
        name: 'Tacoma',
        containedInPlace: {
          '@type': 'State',
          name: 'Washington'
        }
      },
      {
        '@type': 'City',
        name: 'Kent',
        containedInPlace: {
          '@type': 'State',
          name: 'Washington'
        }
      },
      {
        '@type': 'City',
        name: 'Auburn',
        containedInPlace: {
          '@type': 'State',
          name: 'Washington'
        }
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '47.3223',
        longitude: '-122.3126'
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscape Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Maintenance',
            description: 'Weekly year-round maintenance service starting at $325/month'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Design & Installation',
            description: 'Custom landscape design and full installation services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hardscaping & Patios',
            description: 'Premium hardscape installation including patios, fire pits, and outdoor kitchens'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Irrigation Systems',
            description: 'Smart irrigation systems with programmable controllers and winterization service'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landscape Lighting',
            description: 'Low voltage landscape lighting for safety, security, and aesthetics'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lawn Installation',
            description: 'Professional sod installation with Greensmix base'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    foundingDate: '1998',
    numberOfEmployees: '12',
    slogan: 'Transform Your Pacific Northwest Landscape',
    logo: 'https://nwlandscape.com/images/logo.png',
    image: 'https://nwlandscape.com/images/hero-image.jpg',
    sameAs: [
      'https://www.facebook.com/nwlandscape',
      'https://www.instagram.com/nwlandscape',
      'https://www.youtube.com/nwlandscape'
    ]
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve Federal Way, Tacoma, Kent, Auburn, Renton, Des Moines, Covington, Maple Valley, Sumner, Bonney Lake, Lake Tapps, Puyallup, Milton, Fife, Edgewood, University Place, Fircrest, Lakewood, and surrounding South Sound areas.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does landscape maintenance cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our weekly landscape maintenance service starts at $325/month for year-round service. This includes lawn mowing, pruning, mulching, leaf removal, and snow removal.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long have you been in business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We\'ve been serving the Pacific Northwest since 1998, with over 25 years of experience in landscape design and maintenance.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are you licensed and insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we are fully licensed, bonded, and insured for your peace of mind. We maintain all required business licenses and comprehensive insurance coverage.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer free consultations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide free consultations and quotes for all our services. There\'s no obligation, and we\'ll provide detailed information about your project.'
        }
      }
    ]
  }
} as const;

export const openGraph = {
  default: {
    title: 'NW Landscape Management | Award-Winning Landscaping Services',
    description: 'Transform your Pacific Northwest landscape with our award-winning design and maintenance services. 25+ years of excellence serving Federal Way, Tacoma, and South Sound.',
    url: 'https://nwlandscape.com',
    siteName: 'NW Landscape Management',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NW Landscape Management - Award-Winning Landscaping Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  maintenance: {
    title: 'Landscape Maintenance Services | $325/month | Federal Way, Tacoma, WA',
    description: 'Professional landscape maintenance services starting at $325/month. Weekly year-round service for Federal Way, Tacoma, and South Sound area.',
    url: 'https://nwlandscape.com/services/landscape-maintenance',
    siteName: 'NW Landscape Management',
    images: [
      {
        url: '/images/og-maintenance.jpg',
        width: 1200,
        height: 630,
        alt: 'Landscape Maintenance Services - NW Landscape Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  design: {
    title: 'Landscape Design & Installation | Custom Solutions | Federal Way, Tacoma, WA',
    description: 'Custom landscape design and installation services. Transform your property with our award-winning designs. Serving Federal Way, Tacoma, and South Sound.',
    url: 'https://nwlandscape.com/services/landscape-design',
    siteName: 'NW Landscape Management',
    images: [
      {
        url: '/images/og-design.jpg',
        width: 1200,
        height: 630,
        alt: 'Landscape Design & Installation - NW Landscape Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
} as const;

export const twitter = {
  default: {
    card: 'summary_large_image',
    title: 'NW Landscape Management | Award-Winning Landscaping Services',
    description: 'Transform your Pacific Northwest landscape with our award-winning design and maintenance services.',
    images: ['/images/twitter-image.jpg'],
  },
  maintenance: {
    card: 'summary_large_image',
    title: 'Landscape Maintenance Services | $325/month | Federal Way, Tacoma, WA',
    description: 'Professional landscape maintenance services starting at $325/month. Weekly year-round service for Federal Way, Tacoma, and South Sound area.',
    images: ['/images/twitter-maintenance.jpg'],
  },
  design: {
    card: 'summary_large_image',
    title: 'Landscape Design & Installation | Custom Solutions | Federal Way, Tacoma, WA',
    description: 'Custom landscape design and installation services. Transform your property with our award-winning designs. Serving Federal Way, Tacoma, and South Sound.',
    images: ['/images/twitter-design.jpg'],
  },
} as const;

export const robots = {
  index: 'index, follow',
  noindex: 'noindex, nofollow',
  noarchive: 'noarchive',
  nosnippet: 'nosnippet',
  noimageindex: 'noimageindex',
  notranslate: 'notranslate',
} as const;

export const canonical = {
  base: 'https://nwlandscape.com',
  maintenance: 'https://nwlandscape.com/services/landscape-maintenance',
  design: 'https://nwlandscape.com/services/landscape-design',
  hardscape: 'https://nwlandscape.com/services/hardscaping-patio',
  irrigation: 'https://nwlandscape.com/services/irrigation-systems',
  lighting: 'https://nwlandscape.com/services/landscape-lighting',
  lawn: 'https://nwlandscape.com/services/lawn-installation',
  quote: 'https://nwlandscape.com/quote',
  contact: 'https://nwlandscape.com/contact',
  about: 'https://nwlandscape.com/about',
  portfolio: 'https://nwlandscape.com/portfolio',
  serviceAreas: 'https://nwlandscape.com/service-areas',
} as const;

export const sitemap = {
  priority: {
    home: '1.0',
    services: '0.9',
    quote: '0.8',
    contact: '0.8',
    about: '0.7',
    portfolio: '0.7',
    serviceAreas: '0.6',
    blog: '0.5',
  },
  changefreq: {
    home: 'weekly',
    services: 'monthly',
    quote: 'monthly',
    contact: 'monthly',
    about: 'monthly',
    portfolio: 'weekly',
    serviceAreas: 'monthly',
    blog: 'weekly',
  },
} as const;

export const breadcrumbs = {
  home: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nwlandscape.com'
      }
    ]
  },
  services: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nwlandscape.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://nwlandscape.com/services'
      }
    ]
  },
  maintenance: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nwlandscape.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://nwlandscape.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Landscape Maintenance',
        item: 'https://nwlandscape.com/services/landscape-maintenance'
      }
    ]
  },
} as const;

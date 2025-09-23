export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NW Landscape Management",
  "description": "Award-winning landscape design and maintenance services for Federal Way, Tacoma, and the South Sound area. 29+ years of excellence.",
  "url": "https://nwlandscape.com",
  "telephone": "(253) 661-5824",
  "email": "info@nwlandscape.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Federal Way",
    "addressRegion": "WA",
    "postalCode": "98003",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.3223",
    "longitude": "-122.3126"
  },
  "openingHours": "Mo-Fr 07:00-18:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Check, Credit Card",
  "currenciesAccepted": "USD",
  "areaServed": [
    {
      "@type": "City",
      "name": "Federal Way",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    },
    {
      "@type": "City", 
      "name": "Tacoma",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    },
    {
      "@type": "City",
      "name": "Kent",
      "containedInPlace": {
        "@type": "State", 
        "name": "Washington"
      }
    },
    {
      "@type": "City",
      "name": "Auburn",
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "47.3223",
      "longitude": "-122.3126"
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Landscape Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landscape Maintenance",
          "description": "Weekly year-round maintenance service starting at $325/month"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Landscape Design & Installation",
          "description": "Custom landscape design and full installation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Hardscaping & Patios",
          "description": "Premium hardscape installation including patios, fire pits, and outdoor kitchens"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Irrigation Systems", 
          "description": "Smart irrigation systems with programmable controllers and winterization service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landscape Lighting",
          "description": "Low voltage landscape lighting for safety, security, and aesthetics"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lawn Installation", 
          "description": "Professional sod installation with Greensmix base"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "foundingDate": "1995",
  "numberOfEmployees": "15",
  "slogan": "Transform Your Pacific Northwest Landscape",
  "logo": "https://nwlandscape.com/images/logo.png",
  "image": "https://nwlandscape.com/images/hero-image.jpg",
  "sameAs": [
    "https://www.facebook.com/nwlandscape",
    "https://www.instagram.com/nwlandscape", 
    "https://www.youtube.com/nwlandscape"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NW Landscape Management",
  "url": "https://nwlandscape.com",
  "logo": "https://nwlandscape.com/images/logo.png",
  "description": "Award-winning landscape design and maintenance services for the Pacific Northwest",
  "foundingDate": "1995",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "Federal Way", 
    "addressRegion": "WA",
    "postalCode": "98003",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(253) 661-5824",
    "contactType": "customer service",
    "availableLanguage": "English"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We serve Federal Way, Tacoma, Kent, Auburn, Renton, Des Moines, Covington, Maple Valley, Sumner, Bonney Lake, Lake Tapps, Puyallup, Milton, Fife, Edgewood, University Place, Fircrest, Lakewood, and surrounding South Sound areas."
      }
    },
    {
      "@type": "Question", 
      "name": "How much does landscape maintenance cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our weekly landscape maintenance service starts at $325/month for year-round service. This includes lawn mowing, pruning, mulching, leaf removal, and snow removal."
      }
    },
    {
      "@type": "Question",
      "name": "How long have you been in business?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "We've been serving the Pacific Northwest since 1995, with over 29 years of experience in landscape design and maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "Are you licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are fully licensed, bonded, and insured for your peace of mind. We maintain all required business licenses and comprehensive insurance coverage."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide free consultations and quotes for all our services. There's no obligation, and we'll provide detailed information about your project."
      }
    }
  ]
};

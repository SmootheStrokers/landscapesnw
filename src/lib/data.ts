import { Service, Testimonial, Project, ServiceArea, CompanyStats, Award } from './types';

export const companyStats: CompanyStats = {
  yearsInBusiness: 29,
  projectsCompleted: 1000,
  customerSatisfaction: 98,
  serviceAreas: 21,
  teamMembers: 15
};

export const services: Service[] = [
  {
    id: 'maintenance',
    title: 'Landscape Maintenance',
    description: 'Weekly year-round maintenance service starting at $325/month. Complete care for your property with 29+ years of experience.',
    price: 'Starting at $325/month',
    features: [
      'Weekly lawn mowing and edging',
      'Spring and summer season pruning',
      'Dormant pruning of plants and trees',
      'Comprehensive weed control programs',
      'Regular fertilizer applications',
      'Mole and wasp nest removal'
    ],
    image: '/images/Landscape-Maintenance-88.jpg',
    slug: 'landscape-maintenance',
    category: 'maintenance'
  },
  {
    id: 'design',
    title: 'Landscape Design & Installation',
    description: 'Free on-site consultation with experienced designers. Problem-solving expertise for drainage, slopes, and privacy creation.',
    price: 'Free consultation',
    features: [
      'Free on-site consultation',
      'Drainage problem solutions',
      'Sloped area management',
      'Privacy screening with plantings',
      'Pacific Northwest plant specialists',
      'Award-winning designs'
    ],
    image: '/images/Landscape-Design-28.jpg',
    slug: 'landscape-design',
    category: 'design'
  },
  {
    id: 'hardscape',
    title: 'Paver & Flagstone Patios',
    description: 'Premium hardscape installation including patios, fire pits, and outdoor kitchens. Built to last in Pacific Northwest weather.',
    price: 'Custom pricing',
    features: [
      'Paver patios and walkways',
      'Flagstone installations',
      'Fire pits and outdoor fireplaces',
      'Outdoor kitchens',
      'Retaining walls',
      'Drainage integration'
    ],
    image: '/images/Paver-and-Flagstone-Patios.jpeg',
    slug: 'hardscaping-patio',
    category: 'hardscape'
  },
  {
    id: 'irrigation',
    title: 'Irrigation & Sprinkler Systems',
    description: 'Commercial-grade sprinkler systems with 2-year warranty. Spring start-up $225, winterization $195 (6 zones or less).',
    price: '2-year warranty',
    features: [
      'Commercial-grade components',
      '2-year installation warranty',
      'Spring start-up service',
      'Winterization service',
      'System audits and repairs',
      'Rain sensors and drip systems'
    ],
    image: '/images/Sprinkler-System-Installation (2).jpg',
    slug: 'irrigation-systems',
    category: 'irrigation'
  },
  {
    id: 'lighting',
    title: 'Landscape Lighting',
    description: 'Low voltage landscape lighting for safety, security, and aesthetics. Extend your outdoor living hours.',
    price: 'Custom design',
    features: [
      'Path and step lighting',
      'Accent lighting',
      'Security lighting',
      'Low voltage systems',
      'LED technology',
      'Timer and sensor controls'
    ],
    image: '/images/Landscape-Lighting-36.jpg',
    slug: 'landscape-lighting',
    category: 'lighting'
  },
  {
    id: 'lawn',
    title: 'Lawn Installation & Restoration',
    description: 'Locally sourced sod with Pacific Northwest grass varieties. Functional lawn in 30 days with Greensmix base.',
    price: '30-day guarantee',
    features: [
      'Locally sourced sod',
      'Greensmix sandy-soil base',
      '30-day functional lawn promise',
      'Old lawn removal included',
      'Pacific Northwest grass varieties',
      'Professional installation'
    ],
    image: '/images/Lawn-Installation-52 (1).jpg',
    slug: 'lawn-installation',
    category: 'lawn'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Federal Way, WA',
    rating: 5,
    text: 'NW Landscape has maintained our property for over 15 years. Their attention to detail and reliability is unmatched. They truly care about our property as if it were their own.',
    image: '/images/Landscape-Maintenance-38.jpg',
    projectType: '15+ Year Client'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Tacoma, WA',
    rating: 5,
    text: 'The patio installation exceeded our expectations. The team was professional, on-time, and the quality is outstanding. Our outdoor space is now our favorite part of the home.',
    image: '/images/Patio-and-Hardscape-Installation.jpg',
    projectType: 'Hardscaping'
  },
  {
    id: '3',
    name: 'Jennifer Martinez',
    location: 'Kent, WA',
    rating: 5,
    text: 'From design to completion, the process was seamless. They solved our drainage issues and created a beautiful landscape that thrives in our climate. Highly recommended!',
    image: '/images/Landscape-Installation-24.jpg',
    projectType: 'Design & Installation'
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Auburn, WA',
    rating: 5,
    text: 'The irrigation system they installed has saved us water and money. The smart controller is easy to use and the winterization service gives us peace of mind.',
    image: '/images/Sprinkler-Systems-Federal-Way-WA.jpg',
    projectType: 'Irrigation'
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    location: 'Puyallup, WA',
    rating: 5,
    text: 'The landscape lighting transformed our backyard. It\'s beautiful, functional, and adds so much value to our home. The installation was clean and professional.',
    image: '/images/Landscape-Lighting-1 (1).jpg',
    projectType: 'Lighting'
  },
  {
    id: '6',
    name: 'Robert & Margaret Williams',
    location: 'Federal Way, WA',
    rating: 5,
    text: 'We\'ve been clients since 1998 - over 25 years! NW Landscape has grown with us, from our first home to our current property. Their consistency and quality is remarkable.',
    image: '/images/Landscape-Maintenance-88.jpg',
    projectType: '25+ Year Client'
  },
  {
    id: '7',
    name: 'Jennifer & David Park',
    location: 'Kent, WA',
    rating: 5,
    text: 'When we moved to Kent 20 years ago, NW Landscape was recommended by our neighbors. We\'ve never looked back. They handle everything from maintenance to major projects.',
    image: '/images/Landscape-Installation-24.jpg',
    projectType: '20+ Year Client'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Federal Way Estate Transformation',
    description: 'Complete landscape renovation including drainage solutions, privacy screening, and outdoor living space.',
    beforeImage: '/images/Landscaping-Plants.jpg',
    afterImage: '/images/Landscape-Design-28.jpg',
    location: 'Federal Way, WA',
    serviceType: 'Design & Installation',
    completionDate: '2023',
    testimonial: testimonials[0]
  },
  {
    id: '2',
    title: 'Tacoma Waterfront Patio',
    description: 'Premium paver patio with fire pit and outdoor kitchen overlooking Puget Sound.',
    beforeImage: '/images/Lawn-Maintenance-35.jpg',
    afterImage: '/images/Patio-and-Hardscape-Installation.jpg',
    location: 'Tacoma, WA',
    serviceType: 'Hardscaping',
    completionDate: '2023',
    testimonial: testimonials[1]
  },
  {
    id: '3',
    title: 'Kent Hillside Garden',
    description: 'Slope stabilization with native plants and irrigation system for challenging terrain.',
    beforeImage: '/images/New-Lawn-Installation-60.jpg',
    afterImage: '/images/Landscape-Installation-24.jpg',
    location: 'Kent, WA',
    serviceType: 'Design & Installation',
    completionDate: '2023',
    testimonial: testimonials[2]
  }
];

export const serviceAreas: ServiceArea[] = [
  { city: 'Federal Way', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Kent', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Renton', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Auburn', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Des Moines', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Covington', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Maple Valley', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Sumner', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Bonney Lake', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Lake Tapps', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Puyallup', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Milton', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Fife', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Edgewood', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'University Place', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Fircrest', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Lakewood', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Tacoma', state: 'WA', services: ['Maintenance', 'Design', 'Installation'], coverage: 'both' },
  { city: 'Normandy Park', state: 'WA', services: ['Design', 'Installation'], coverage: 'installation' },
  { city: 'Black Diamond', state: 'WA', services: ['Design', 'Installation'], coverage: 'installation' },
  { city: 'Gig Harbor', state: 'WA', services: ['Design', 'Installation'], coverage: 'installation' }
];

export const awards: Award[] = [
  {
    title: 'Federal Way Symphony Garden Tours',
    year: '2023',
    organization: 'Federal Way Symphony',
    description: 'Featured property in annual garden tour showcasing exceptional landscape design',
    image: '/images/landscape-design-slider1-1024x768 (1).png'
  },
  {
    title: 'Best of Federal Way',
    year: '2022',
    organization: 'Federal Way Mirror',
    description: 'Reader\'s choice award for best landscaping company in Federal Way',
    image: '/images/NW-Tree-Farm.jpg'
  },
  {
    title: 'Excellence in Customer Service',
    year: '2021',
    organization: 'South Sound Business Association',
    description: 'Recognition for outstanding customer service and client retention',
    image: '/images/Lawn-Installation-5.jpg'
  }
];

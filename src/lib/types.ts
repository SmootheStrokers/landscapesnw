export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  slug: string;
  category: 'maintenance' | 'design' | 'hardscape' | 'irrigation' | 'lighting' | 'lawn';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  projectType: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  location: string;
  serviceType: string;
  completionDate: string;
  testimonial?: Testimonial;
}

export interface ServiceArea {
  city: string;
  state: string;
  services: string[];
  coverage: 'maintenance' | 'installation' | 'both';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertySize: string;
  timeline: string;
  budget: string;
  message: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface CompanyStats {
  yearsInBusiness: number;
  projectsCompleted: number;
  customerSatisfaction: number;
  serviceAreas: number;
  teamMembers: number;
}

export interface Award {
  title: string;
  year: string;
  organization: string;
  description: string;
  image: string;
}

import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import PortfolioGallery from '@/components/PortfolioGallery';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesShowcase />
      <PortfolioGallery />
      <TestimonialsCarousel />
      <ContactSection />
    </main>
  );
}

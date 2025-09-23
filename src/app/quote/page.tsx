import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Free Quote | NW Landscape Management | Professional Landscaping Services',
  description: 'Get your free landscaping quote from NW Landscape Management. Professional design, maintenance, and installation services for Federal Way, Tacoma, and South Sound area.',
  keywords: 'landscaping quote, free consultation, landscape design quote, maintenance quote, Federal Way landscaping, Tacoma landscaping',
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-morning-mist">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-sage to-mountain-moss text-pure-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Get Your Free Quote
          </h1>
          <p className="text-xl sm:text-2xl text-pure-white/90 max-w-3xl mx-auto mb-8">
            Transform your landscape with our award-winning services. 
            Get a detailed quote tailored to your property and vision.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-pure-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sunset-gold rounded-full"></div>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sunset-gold rounded-full"></div>
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sunset-gold rounded-full"></div>
              <span>24-hour response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding-sm">
        <div className="container-custom">
          <QuoteForm />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-pure-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-forest-sage">25+</span>
              </div>
              <h3 className="text-xl font-display font-bold text-pacific-evergreen mb-2">
                Years Experience
              </h3>
              <p className="text-gray-600">
                Established in 1998, serving the South Sound area with excellence
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-forest-sage">500+</span>
              </div>
              <h3 className="text-xl font-display font-bold text-pacific-evergreen mb-2">
                Projects Completed
              </h3>
              <p className="text-gray-600">
                From small residential to large commercial projects
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-forest-sage">98%</span>
              </div>
              <h3 className="text-xl font-display font-bold text-pacific-evergreen mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Consistently high ratings from our satisfied customers
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

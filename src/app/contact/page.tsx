'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, Shield, Users, CheckCircle, Star } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function ContactPage() {
  const serviceAreas = [
    'Federal Way', 'Kent', 'Renton', 'Auburn', 'Des Moines', 'Covington',
    'Maple Valley', 'Sumner', 'Bonney Lake', 'Lake Tapps', 'Puyallup',
    'Milton', 'Fife', 'Edgewood', 'University Place', 'Fircrest',
    'Lakewood', 'Tacoma', 'Normandy Park', 'Black Diamond', 'Gig Harbor'
  ];

  const trustIndicators = [
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Featured in Federal Way Symphony Garden Tours',
      color: 'text-sunset-gold'
    },
    {
      icon: Clock,
      title: '29+ Years',
      description: 'Established in 1995 with continuous excellence',
      color: 'text-forest-sage'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured',
      color: 'text-rain-blue'
    },
    {
      icon: Users,
      title: '1000+ Projects',
      description: 'Successful projects across the Pacific Northwest',
      color: 'text-mountain-moss'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      primary: '(253) 661-5824',
      secondary: '(253) 336-8686',
      action: 'tel:2536615824',
      buttonText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your project details',
      primary: 'info@nwlandscape.com',
      secondary: 'We respond within 24 hours',
      action: 'mailto:info@nwlandscape.com',
      buttonText: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      description: 'We serve 21+ cities',
      primary: 'South Sound Area',
      secondary: 'Federal Way to Gig Harbor',
      action: '/service-areas',
      buttonText: 'View Areas'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Contact Us',
      description: 'Call, email, or submit our online quote form. We respond within 24 hours.',
      icon: '📞'
    },
    {
      step: '2',
      title: 'Free Consultation',
      description: 'We visit your property for a complimentary on-site assessment and consultation.',
      icon: '🏡'
    },
    {
      step: '3',
      title: 'Detailed Quote',
      description: 'Receive a comprehensive quote with timeline and project details.',
      icon: '📋'
    },
    {
      step: '4',
      title: 'Project Start',
      description: 'We begin work with your approval, keeping you informed throughout.',
      icon: '🚀'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pacific-evergreen via-forest-sage to-mountain-moss text-pure-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="hero-text text-pure-white mb-6">
              Get Your Free
              <span className="block text-sunset-gold">Landscape Quote</span>
            </h1>
            <p className="hero-subtitle mb-8">
              Ready to transform your Pacific Northwest landscape? Get a free consultation 
              and detailed quote from our award-winning team. No obligation, just expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2536615824" className="btn-primary text-lg px-8 py-4">
                Call (253) 661-5824
              </a>
              <a href="#quote-form" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                Get Online Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-pure-white rounded-xl p-6 shadow-card"
              >
                <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <indicator.icon className={`w-8 h-8 ${indicator.color}`} />
                </div>
                <h3 className="font-display font-bold text-pacific-evergreen mb-2">
                  {indicator.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {indicator.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Multiple Ways to Reach Us
            </h2>
            <p className="section-subtitle">
              Choose the contact method that works best for you. We're here to help 
              with all your landscape needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-pure-white rounded-xl p-8 shadow-card text-center"
              >
                <div className="w-16 h-16 bg-forest-sage rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="font-accent font-semibold text-forest-sage">
                    {method.primary}
                  </div>
                  <div className="text-sm text-gray-600">
                    {method.secondary}
                  </div>
                </div>
                <a
                  href={method.action}
                  className="btn-primary w-full"
                >
                  {method.buttonText}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="section-title">
                Request Your Free Quote
              </h2>
              <p className="section-subtitle">
                Complete our detailed quote form to get a personalized estimate for your landscape project. 
                Free consultation included with every quote.
              </p>
            </div>

            <div className="bg-pure-white rounded-2xl p-8 lg:p-12 shadow-premium">
              <QuoteForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our Simple Process
            </h2>
            <p className="section-subtitle">
              From initial contact to project completion, we make it easy to work with us. 
              Here's what you can expect.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-forest-sage rounded-full flex items-center justify-center mx-auto text-pure-white font-display font-bold text-2xl">
                    {step.step}
                  </div>
                  <div className="text-4xl absolute -top-2 -right-2">{step.icon}</div>
                </div>
                <h3 className="text-xl font-display font-bold text-pacific-evergreen mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-gradient-to-r from-forest-sage to-mountain-moss text-pure-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              We Serve Your Area
            </h2>
            <p className="text-xl text-pure-white/90 max-w-3xl mx-auto">
              Proudly serving 21+ cities across the South Sound area. Whether you're in Federal Way, 
              Tacoma, Kent, or any of our other service areas, we're ready to help.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
          >
            {serviceAreas.map((city, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 text-pure-white/90"
              >
                <CheckCircle className="w-4 h-4 text-sunset-gold flex-shrink-0" />
                <span className="font-accent text-sm">{city}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-pure-white/80 mb-6">
              <strong>Not sure if we serve your area?</strong> Give us a call and we'll let you know 
              what services are available in your location.
            </p>
            <a
              href="tel:2536615824"
              className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-forest-sage"
            >
              Call (253) 661-5824
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-pure-white rounded-2xl p-8 lg:p-12 shadow-premium">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-sunset-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl font-display italic text-pacific-evergreen mb-6">
                  "NW Landscape has maintained our property for over 15 years. Their attention to detail 
                  and reliability is unmatched. They truly care about our property as if it were their own."
                </blockquote>
                <div className="font-accent font-semibold text-forest-sage text-lg">
                  — Sarah Johnson, Federal Way
                </div>
                <div className="text-gray-600">
                  15+ Year Client
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pacific-evergreen to-forest-sage rounded-2xl p-8 lg:p-12 text-pure-white text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-pure-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need weekly maintenance or a complete landscape transformation, 
              we're here to help. Get your free quote today and join hundreds of satisfied clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2536615824" className="btn-primary text-lg px-8 py-4">
                Call (253) 661-5824
              </a>
              <a href="#quote-form" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                Get Online Quote
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-pure-white/20">
              <p className="text-pure-white/80">
                <strong>Response Time:</strong> We respond to all inquiries within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

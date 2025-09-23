'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Award, Clock, Shield, Users, MapPin } from 'lucide-react';
import { services } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
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
              Complete Landscape
              <span className="block text-sunset-gold">Services</span>
            </h1>
            <p className="hero-subtitle mb-8">
              From weekly maintenance to complete landscape transformations, we provide 
              comprehensive solutions for your Pacific Northwest property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link href="/projects" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                View Our Work
              </Link>
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
                className="text-center"
              >
                <div className="w-16 h-16 bg-pure-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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

      {/* Services Grid */}
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
              Our Services
            </h2>
            <p className="section-subtitle">
              Professional landscape services tailored for the Pacific Northwest climate. 
              Each service is backed by our 29+ years of experience and commitment to quality.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="card group cursor-pointer overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pacific-evergreen/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-pure-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-2xl font-display font-bold mb-2">{service.title}</div>
                    <div className="text-lg font-accent text-sunset-gold font-semibold">{service.price}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-forest-sage flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-forest-sage font-accent font-semibold hover:text-mountain-moss transition-colors duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
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
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Serving the Pacific Northwest
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-3xl mx-auto">
              We proudly serve 21+ cities across the South Sound area, bringing our 
              29+ years of expertise to your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/service-areas" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-forest-sage">
                View Service Areas
              </Link>
              <Link href="/contact" className="btn-primary bg-pure-white text-forest-sage hover:bg-gray-100">
                Get Quote for Your Area
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our Process
            </h2>
            <p className="section-subtitle">
              From initial consultation to project completion, we follow a proven process 
              that ensures exceptional results every time.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'We start with a complimentary on-site consultation to understand your vision and assess your property.',
                icon: '📞'
              },
              {
                step: '02',
                title: 'Custom Design',
                description: 'Our experienced designers create a tailored plan that maximizes your property\'s potential.',
                icon: '🎨'
              },
              {
                step: '03',
                title: 'Professional Installation',
                description: 'Our skilled team brings your vision to life with quality craftsmanship and attention to detail.',
                icon: '🔨'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-20 h-20 bg-forest-sage rounded-full flex items-center justify-center mx-auto mb-6 text-pure-white font-display font-bold text-2xl">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
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

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pacific-evergreen to-forest-sage rounded-2xl p-8 lg:p-12 text-pure-white text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Landscape?
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need weekly maintenance or a complete landscape transformation, 
              we're here to help. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link href="tel:2536615824" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                Call (253) 661-5824
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
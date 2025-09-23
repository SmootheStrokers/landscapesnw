'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calendar, DollarSign, Shield, Clock, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function LandscapeMaintenancePage() {
  const seasonalServices = [
    {
      season: 'Spring',
      months: 'March - May',
      services: [
        'Lawn aeration and overseeding',
        'Fertilization and weed control',
        'Pruning and trimming',
        'Mulch application',
        'Drainage system check'
      ],
      color: 'bg-green-500'
    },
    {
      season: 'Summer',
      months: 'June - August',
      services: [
        'Weekly lawn mowing',
        'Hedge trimming',
        'Flower bed maintenance',
        'Irrigation monitoring',
        'Pest control'
      ],
      color: 'bg-yellow-500'
    },
    {
      season: 'Fall',
      months: 'September - November',
      services: [
        'Leaf removal and cleanup',
        'Fall fertilization',
        'Tree and shrub pruning',
        'Gutter cleaning',
        'Winter preparation'
      ],
      color: 'bg-orange-500'
    },
    {
      season: 'Winter',
      months: 'December - February',
      services: [
        'Snow removal service',
        'Tree maintenance',
        'Equipment winterization',
        'Planning for spring',
        'Emergency services'
      ],
      color: 'bg-blue-500'
    }
  ];

  const maintenanceFeatures = [
    'Weekly lawn mowing and edging',
    'Seasonal pruning and trimming',
    'Mulch and bed maintenance',
    'Fertilization and pest control',
    'Leaf removal and cleanup',
    'Snow removal (winter)',
    'Irrigation system maintenance',
    'Plant health monitoring'
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest-sage to-mountain-moss">
        <div className="absolute inset-0">
          <Image
            src="/images/services/maintenance-hero.jpg"
            alt="Professional landscape maintenance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-pacific-evergreen/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-pure-white mb-6"
          >
            Professional Landscape
            <span className="block text-sunset-gold">Maintenance</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-pure-white/90 mb-8 max-w-3xl mx-auto"
          >
            Weekly year-round maintenance service starting at $325/month. 
            Complete care for your property with our experienced team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-5"
            >
              Get Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-lg px-10 py-5 border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen"
            >
              <Phone className="w-5 h-5 mr-2 inline" />
              Call (253) 661-5824
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-pacific-evergreen mb-6">
                Why Choose Our Maintenance Service?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Many of our first clients from 25+ years ago are still with us today. 
                Our commitment to excellence and attention to detail has created lasting 
                relationships built on trust and results.
              </p>
              
              <div className="space-y-4">
                {maintenanceFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-forest-sage flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-display font-bold text-forest-sage mb-2">$325</div>
                  <div className="text-gray-600">per month minimum</div>
                  <div className="text-sm text-gray-600 mt-2">Weekly year-round service</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Weekly lawn mowing</span>
                    <span className="font-semibold text-pacific-evergreen">Included</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Seasonal pruning</span>
                    <span className="font-semibold text-pacific-evergreen">Included</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Mulch maintenance</span>
                    <span className="font-semibold text-pacific-evergreen">Included</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Leaf removal</span>
                    <span className="font-semibold text-pacific-evergreen">Included</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Snow removal</span>
                    <span className="font-semibold text-pacific-evergreen">Included</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full mt-6"
                >
                  Get Your Free Quote
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section className="section-padding bg-pure-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Year-Round Service Calendar</h2>
            <p className="section-subtitle">
              Our maintenance program adapts to the Pacific Northwest seasons, 
              ensuring your landscape thrives year-round.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasonalServices.map((season, index) => (
              <motion.div
                key={season.season}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:shadow-premium transition-all duration-300"
              >
                <div className={`w-full h-2 ${season.color} rounded-t-xl`}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                    {season.season}
                  </h3>
                  <div className="text-gray-600 mb-4">{season.months}</div>
                  
                  <ul className="space-y-2">
                    {season.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-forest-sage mt-0.5 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className="section-padding bg-gradient-to-br from-forest-sage to-mountain-moss text-pure-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-sunset-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-sunset-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">25+ Years Experience</h3>
              <p className="text-pure-white/80">
                Established in 1998, we've been serving the South Sound area 
                with consistent, reliable service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-sunset-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-sunset-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Licensed & Insured</h3>
              <p className="text-pure-white/80">
                Fully licensed, bonded, and insured for your peace of mind. 
                Professional standards you can trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-sunset-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-sunset-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">98% Satisfaction</h3>
              <p className="text-pure-white/80">
                Our customers consistently rate us highly for quality, 
                reliability, and customer service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-pacific-evergreen mb-6">
              Ready to Transform Your Landscape?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust NW Landscape Management 
              for their property maintenance needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-5"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-lg px-10 py-5"
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Email Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

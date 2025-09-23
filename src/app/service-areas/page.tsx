'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle, Award, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export default function ServiceAreasPage() {
  const serviceAreas = {
    maintenance: [
      'Federal Way', 'Kent', 'Renton', 'Auburn', 'Des Moines', 'Covington',
      'Maple Valley', 'Sumner', 'Bonney Lake', 'Lake Tapps', 'Puyallup',
      'Milton', 'Fife', 'Edgewood', 'University Place', 'Fircrest',
      'Lakewood', 'Tacoma'
    ],
    installation: [
      'Federal Way', 'Kent', 'Renton', 'Auburn', 'Des Moines', 'Covington',
      'Maple Valley', 'Sumner', 'Bonney Lake', 'Lake Tapps', 'Puyallup',
      'Milton', 'Fife', 'Edgewood', 'University Place', 'Fircrest',
      'Lakewood', 'Tacoma', 'Normandy Park', 'Black Diamond', 'Gig Harbor'
    ]
  };

  const featuredCities = [
    {
      name: 'Federal Way',
      description: 'Our home base and longest-serving area with 29+ years of local expertise.',
      services: ['Maintenance', 'Design', 'Installation'],
      population: '101,000+',
      featured: true
    },
    {
      name: 'Tacoma',
      description: 'Major metropolitan area with diverse landscape challenges and opportunities.',
      services: ['Maintenance', 'Design', 'Installation'],
      population: '220,000+',
      featured: true
    },
    {
      name: 'Kent',
      description: 'Growing community with mix of residential and commercial properties.',
      services: ['Maintenance', 'Design', 'Installation'],
      population: '130,000+',
      featured: true
    },
    {
      name: 'Auburn',
      description: 'Historic city with unique Pacific Northwest landscape requirements.',
      services: ['Maintenance', 'Design', 'Installation'],
      population: '87,000+',
      featured: true
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep knowledge of Pacific Northwest climate, soil, and plant requirements for each service area.'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Local presence means faster response times and more reliable service schedules.'
    },
    {
      icon: Award,
      title: 'Community Focused',
      description: 'Active in local communities with award-winning projects featured in garden tours.'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed to operate in all service areas with comprehensive insurance coverage.'
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
              Service Areas
              <span className="block text-sunset-gold">Pacific Northwest</span>
            </h1>
            <p className="hero-subtitle mb-8">
              Proudly serving 21+ cities across the South Sound area with 29+ years of 
              Pacific Northwest landscape expertise. From weekly maintenance to complete transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Quote for Your Area
              </Link>
              <Link href="tel:2536615824" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                Call (253) 661-5824
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Coverage */}
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
              Our Service Coverage
            </h2>
            <p className="section-subtitle">
              We provide comprehensive landscape services across the greater Puget Sound area, 
              with different service levels based on your location.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="bg-pure-white rounded-xl p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-forest-sage rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-pure-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen">
                  Maintenance Service Areas
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Weekly year-round maintenance service available in these 18 cities:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {serviceAreas.maintenance.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-forest-sage" />
                    <span className="font-accent text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-pure-white rounded-xl p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-mountain-moss rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-pure-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen">
                  Installation Service Areas
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Complete design and installation services in these 21+ cities:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {serviceAreas.installation.slice(0, 18).map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-forest-sage" />
                    <span className="font-accent text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-2">Additional installation-only areas:</p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.installation.slice(18).map((city) => (
                    <span key={city} className="bg-mountain-moss/10 text-mountain-moss px-2 py-1 rounded text-xs font-accent">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cities */}
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
              Featured Service Areas
            </h2>
            <p className="section-subtitle">
              Our primary service areas where we have the deepest local expertise and longest-standing relationships.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredCities.map((city, index) => (
              <motion.div
                key={city.name}
                variants={itemVariants}
                className="bg-morning-mist rounded-xl p-8 shadow-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-pacific-evergreen">
                    {city.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-forest-sage" />
                    <span className="text-sm font-accent text-gray-600">{city.population}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {city.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-forest-sage" />
                    <span className="font-accent font-medium">Available Services:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-7">
                    {city.services.map((service) => (
                      <span key={service} className="bg-forest-sage/10 text-forest-sage px-3 py-1 rounded-full text-sm font-accent">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href={`/contact?city=${city.name.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center gap-2 text-forest-sage font-accent font-semibold hover:text-mountain-moss transition-colors duration-300"
                  >
                    Get Quote for {city.name}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Local Benefits */}
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
              Why Choose a Local Landscape Company?
            </h2>
            <p className="text-xl text-pure-white/90 max-w-3xl mx-auto">
              Our local presence in the Pacific Northwest gives us unique advantages 
              that benefit your landscape project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pure-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-pure-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Cities List */}
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
              Complete Service Area List
            </h2>
            <p className="section-subtitle">
              All cities and communities where NW Landscape Management provides professional landscape services.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="bg-pure-white rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-6">
                Maintenance Service Cities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceAreas.maintenance.map((city) => (
                  <div key={city} className="flex items-center gap-3 py-2">
                    <MapPin className="w-4 h-4 text-forest-sage flex-shrink-0" />
                    <span className="font-accent text-gray-700">{city}, WA</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Weekly maintenance service starting at $325/month + sales tax
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-pure-white rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-6">
                Installation Service Cities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceAreas.installation.map((city) => (
                  <div key={city} className="flex items-center gap-3 py-2">
                    <Award className="w-4 h-4 text-mountain-moss flex-shrink-0" />
                    <span className="font-accent text-gray-700">{city}, WA</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Complete design and installation services with free consultation
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
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
              Ready to Get Started in Your Area?
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're in Federal Way, Tacoma, Kent, or any of our other service areas, 
              we're ready to bring our 29+ years of expertise to your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Quote
              </Link>
              <Link href="tel:2536615824" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                Call (253) 661-5824
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-pure-white/20">
              <p className="text-pure-white/80">
                <strong>Not sure if we serve your area?</strong> Give us a call and we'll let you know 
                what services are available in your location.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

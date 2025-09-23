'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Clock, DollarSign, Shield, Users, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LawnCarePage() {
  const features = [
    'Weekly lawn mowing and edging',
    'Spring and summer season pruning',
    'Dormant pruning of plants and trees',
    'Comprehensive weed control programs',
    'Regular fertilizer applications',
    'Mole and wasp nest removal',
    'Leaf removal and cleanup',
    'Blowing off hard surfaces',
    'Mulch and bed maintenance',
    'Snow removal (winter)',
    'Customer satisfaction guaranteed',
    'No need for multiple contractors'
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Starting at $325/month',
      description: 'Affordable weekly maintenance for average tract homes'
    },
    {
      icon: Clock,
      title: 'Weekly Service',
      description: 'Consistent, reliable year-round maintenance'
    },
    {
      icon: Shield,
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with quality guarantees'
    },
    {
      icon: Users,
      title: '29+ Years Experience',
      description: 'Proven track record with long-term client relationships'
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
      <section className="relative bg-gradient-to-br from-forest-sage to-mountain-moss text-pure-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="hero-text text-pure-white mb-6">
                Lawn Care &
                <span className="block text-sunset-gold">Maintenance</span>
              </h1>
              <p className="hero-subtitle mb-8">
                Weekly year-round maintenance service starting at $325/month. Complete care 
                for your property with our experienced team and 29+ years of expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Free Quote
                </Link>
                <Link href="tel:2536615824" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-forest-sage text-lg px-8 py-4">
                  Call (253) 661-5824
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/Landscape-Maintenance-88.jpg"
                alt="Professional lawn care and maintenance services"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
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
                className="text-center bg-pure-white rounded-xl p-6 shadow-card"
              >
                <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-forest-sage" />
                </div>
                <h3 className="font-display font-bold text-pacific-evergreen mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="section-title text-left mb-6">
                What's Included in Our Maintenance Service
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our comprehensive weekly maintenance service covers all aspects of your 
                landscape care. No need for multiple contractors - we handle everything 
                from lawn care to seasonal cleanup.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-sage flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/Landscape-Maintenance-38.jpg"
                alt="Landscape maintenance services"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Simple, Transparent Pricing
            </h2>
            <p className="section-subtitle">
              No hidden fees, no surprises. Our maintenance service pricing is straightforward 
              and includes everything you need for a beautiful, healthy landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-pure-white rounded-2xl p-8 shadow-premium">
              <div className="text-center mb-8">
                <div className="text-4xl font-display font-bold text-forest-sage mb-2">
                  $325-400/month
                </div>
                <div className="text-gray-600">+ sales tax</div>
                <div className="text-sm text-gray-500 mt-2">For average tract homes</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-accent font-medium">Weekly Service</span>
                  <span className="text-forest-sage font-semibold">Included</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-accent font-medium">Lawn Mowing & Edging</span>
                  <span className="text-forest-sage font-semibold">Included</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-accent font-medium">Seasonal Pruning</span>
                  <span className="text-forest-sage font-semibold">Included</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-accent font-medium">Fertilization & Pest Control</span>
                  <span className="text-forest-sage font-semibold">Included</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-accent font-medium">Snow Removal (Winter)</span>
                  <span className="text-forest-sage font-semibold">Included</span>
                </div>
              </div>

              <div className="text-center">
                <Link href="/contact" className="btn-primary w-full">
                  Get Your Free Quote
                </Link>
              </div>
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
              How It Works
            </h2>
            <p className="section-subtitle">
              Getting started with our maintenance service is simple and straightforward.
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
                step: '1',
                title: 'Free Consultation',
                description: 'We visit your property to assess your landscape needs and provide a detailed quote.'
              },
              {
                step: '2',
                title: 'Service Agreement',
                description: 'Review and sign our service agreement with clear expectations and pricing.'
              },
              {
                step: '3',
                title: 'Weekly Service',
                description: 'Our team arrives weekly to maintain your landscape with professional care.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-forest-sage rounded-full flex items-center justify-center mx-auto mb-6 text-pure-white font-display font-bold text-2xl">
                  {step.step}
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

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-pure-white/90 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our maintenance clients 
              have to say about our service.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                name: 'Sarah Johnson',
                location: 'Federal Way, WA',
                text: 'NW Landscape has maintained our property for over 15 years. Their attention to detail and reliability is unmatched.',
                rating: 5
              },
              {
                name: 'Robert & Margaret Williams',
                location: 'Federal Way, WA',
                text: 'We\'ve been clients since 1998 - over 25 years! Their consistency and quality is remarkable.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-pure-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sunset-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-pure-white/90 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="font-accent font-semibold text-pure-white">
                  — {testimonial.name}
                </div>
                <div className="text-pure-white/70 text-sm">
                  {testimonial.location}
                </div>
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
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-pure-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust NW Landscape Management 
              for their weekly maintenance needs.
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

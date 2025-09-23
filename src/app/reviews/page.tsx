'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Award, Users, Clock, MapPin, CheckCircle } from 'lucide-react';
import { testimonials } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ReviewsPage() {
  const reviewStats = [
    {
      number: '4.9',
      label: 'Average Rating',
      description: 'Based on 150+ reviews',
      icon: Star
    },
    {
      number: '98%',
      label: 'Customer Satisfaction',
      description: 'Clients who would recommend us',
      icon: Users
    },
    {
      number: '29+',
      label: 'Years of Service',
      description: 'Established in 1995',
      icon: Clock
    },
    {
      number: '1000+',
      label: 'Projects Completed',
      description: 'Across the Pacific Northwest',
      icon: Award
    }
  ];

  const featuredReviews = [
    {
      name: 'Sarah Johnson',
      location: 'Federal Way, WA',
      rating: 5,
      text: 'NW Landscape has maintained our property for over 15 years. Their attention to detail and reliability is unmatched. They truly care about our property as if it were their own.',
      service: 'Maintenance',
      duration: '15+ Year Client',
      image: '/images/Landscape-Maintenance-38.jpg'
    },
    {
      name: 'Robert & Margaret Williams',
      location: 'Federal Way, WA',
      rating: 5,
      text: 'We\'ve been clients since 1998 - over 25 years! NW Landscape has grown with us, from our first home to our current property. Their consistency and quality is remarkable.',
      service: 'Complete Service',
      duration: '25+ Year Client',
      image: '/images/Landscape-Maintenance-88.jpg'
    },
    {
      name: 'Michael Chen',
      location: 'Tacoma, WA',
      rating: 5,
      text: 'The patio installation exceeded our expectations. The team was professional, on-time, and the quality is outstanding. Our outdoor space is now our favorite part of the home.',
      service: 'Hardscaping',
      duration: '3 Years',
      image: '/images/Patio-and-Hardscape-Installation.jpg'
    },
    {
      name: 'Jennifer & David Park',
      location: 'Kent, WA',
      rating: 5,
      text: 'When we moved to Kent 20 years ago, NW Landscape was recommended by our neighbors. We\'ve never looked back. They handle everything from maintenance to major projects.',
      service: 'Complete Service',
      duration: '20+ Year Client',
      image: '/images/Landscape-Installation-24.jpg'
    },
    {
      name: 'David Thompson',
      location: 'Auburn, WA',
      rating: 5,
      text: 'The irrigation system they installed has saved us water and money. The smart controller is easy to use and the winterization service gives us peace of mind.',
      service: 'Irrigation',
      duration: '5 Years',
      image: '/images/Sprinkler-Systems-Federal-Way-WA.jpg'
    },
    {
      name: 'Lisa Anderson',
      location: 'Puyallup, WA',
      rating: 5,
      text: 'The landscape lighting transformed our backyard. It\'s beautiful, functional, and adds so much value to our home. The installation was clean and professional.',
      service: 'Lighting',
      duration: '2 Years',
      image: '/images/Landscape-Lighting-1 (1).jpg'
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
              Client Reviews &
              <span className="block text-sunset-gold">Testimonials</span>
            </h1>
            <p className="hero-subtitle mb-8">
              Don't just take our word for it. Read what our satisfied clients have to say 
              about our award-winning landscape services and long-term relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Join Our Happy Clients
              </Link>
              <Link href="/projects" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {reviewStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-pure-white rounded-xl p-6 shadow-card"
              >
                <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-forest-sage" />
                </div>
                <div className="text-4xl font-display font-bold text-forest-sage mb-2">
                  {stat.number}
                </div>
                <h3 className="font-display font-bold text-pacific-evergreen mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Reviews */}
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
              What Our Clients Say
            </h2>
            <p className="section-subtitle">
              Real testimonials from satisfied clients across our service areas. 
              Many have been with us for 20+ years, proving our commitment to quality and service.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredReviews.map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-pure-white rounded-xl p-6 shadow-card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-sunset-gold fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  <Quote className="w-4 h-4 text-forest-sage" />
                </div>
                
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  "{review.text}"
                </blockquote>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-forest-sage/10 rounded-full flex items-center justify-center">
                      <span className="text-forest-sage font-accent font-bold text-sm">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-accent font-semibold text-pacific-evergreen">
                        {review.name}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="bg-forest-sage/10 text-forest-sage px-2 py-1 rounded">
                      {review.service}
                    </span>
                    <span className="font-accent">
                      {review.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Long-term Relationships */}
      <section className="section-padding bg-gradient-to-r from-forest-sage to-mountain-moss text-pure-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Building Lasting Relationships
            </h2>
            <p className="text-xl text-pure-white/90 mb-12 leading-relaxed">
              Our success isn't measured just by the landscapes we create, but by the relationships we build. 
              Many of our original clients from 25+ years ago still choose us for their landscape needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-sunset-gold mb-2">25+</div>
                <div className="font-accent font-semibold mb-2">Years with Original Clients</div>
                <div className="text-pure-white/80 text-sm">
                  Many clients have been with us since 1998
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-sunset-gold mb-2">98%</div>
                <div className="font-accent font-semibold mb-2">Client Retention Rate</div>
                <div className="text-pure-white/80 text-sm">
                  Clients who stay with us year after year
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-bold text-sunset-gold mb-2">1000+</div>
                <div className="font-accent font-semibold mb-2">Successful Projects</div>
                <div className="text-pure-white/80 text-sm">
                  Across the Pacific Northwest
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service-Specific Reviews */}
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
              Reviews by Service
            </h2>
            <p className="section-subtitle">
              See what our clients say about specific services we provide.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {[
              {
                service: 'Landscape Maintenance',
                reviews: [
                  {
                    name: 'Sarah Johnson',
                    location: 'Federal Way, WA',
                    text: '15+ years of reliable weekly service. They never miss a visit and always do quality work.',
                    rating: 5
                  },
                  {
                    name: 'Robert & Margaret Williams',
                    location: 'Federal Way, WA',
                    text: 'Their consistency over 25 years has been remarkable. We trust them completely.',
                    rating: 5
                  }
                ]
              },
              {
                service: 'Hardscaping & Patios',
                reviews: [
                  {
                    name: 'Michael Chen',
                    location: 'Tacoma, WA',
                    text: 'The patio installation exceeded our expectations. Professional team and outstanding quality.',
                    rating: 5
                  },
                  {
                    name: 'Jennifer & David Park',
                    location: 'Kent, WA',
                    text: 'They handled our major hardscape project perfectly. Great communication throughout.',
                    rating: 5
                  }
                ]
              },
              {
                service: 'Irrigation Systems',
                reviews: [
                  {
                    name: 'David Thompson',
                    location: 'Auburn, WA',
                    text: 'The irrigation system has saved us water and money. Smart controller is easy to use.',
                    rating: 5
                  }
                ]
              }
            ].map((serviceGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                variants={itemVariants}
                className="bg-pure-white rounded-xl p-8 shadow-card"
              >
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-6">
                  {serviceGroup.service}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceGroup.reviews.map((review, reviewIndex) => (
                    <div key={reviewIndex} className="border-l-4 border-forest-sage pl-4">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-sunset-gold fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                        "{review.text}"
                      </blockquote>
                      <div className="font-accent font-semibold text-forest-sage">
                        — {review.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {review.location}
                      </div>
                    </div>
                  ))}
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
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Ready to Join Our Satisfied Clients?
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto">
              Experience the quality and service that has kept our clients coming back for 29+ years. 
              Get your free quote today and see why we're the trusted choice.
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
              <div className="flex items-center justify-center gap-8 text-pure-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sunset-gold" />
                  <span className="font-accent">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sunset-gold" />
                  <span className="font-accent">29+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sunset-gold" />
                  <span className="font-accent">Award-Winning Service</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

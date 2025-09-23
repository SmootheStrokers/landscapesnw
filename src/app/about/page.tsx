'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users, Clock, MapPin, Star, CheckCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    {
      number: '29+',
      label: 'Years in Business',
      description: 'Established in 1995'
    },
    {
      number: '1000+',
      label: 'Projects Completed',
      description: 'Across the Pacific Northwest'
    },
    {
      number: '21+',
      label: 'Cities Served',
      description: 'South Sound area coverage'
    },
    {
      number: '98%',
      label: 'Customer Satisfaction',
      description: 'Proven by long-term clients'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for award-winning results in every project, maintaining the highest standards of quality and craftsmanship.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our clients are at the heart of everything we do. We build lasting relationships through exceptional service.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Licensed, bonded, and insured with 29+ years of consistent service. You can trust us with your property.'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Deep knowledge of Pacific Northwest climate, plants, and soil conditions ensures optimal results.'
    }
  ];

  const certifications = [
    {
      name: 'Licensed Landscape Contractor',
      description: 'Fully licensed by the State of Washington',
      icon: '📋'
    },
    {
      name: 'Bonded & Insured',
      description: 'Comprehensive insurance coverage for your protection',
      icon: '🛡️'
    },
    {
      name: 'Award-Winning Design',
      description: 'Featured in Federal Way Symphony Garden Tours',
      icon: '🏆'
    },
    {
      name: '29+ Years Experience',
      description: 'Established track record since 1995',
      icon: '⭐'
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="hero-text text-pure-white mb-6">
                About NW
                <span className="block text-sunset-gold">Landscape Management</span>
              </h1>
              <p className="hero-subtitle mb-8">
                For over 29 years, we've been transforming Pacific Northwest landscapes with 
                award-winning designs, exceptional craftsmanship, and unwavering commitment to customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Free Quote
                </Link>
                <Link href="/projects" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/landscape-design-slider1-1024x768 (1).png"
                alt="NW Landscape Management team and projects"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-pure-white rounded-xl p-6 shadow-card"
              >
                <div className="text-4xl sm:text-5xl font-display font-bold text-forest-sage mb-2">
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

      {/* Our Story */}
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
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1995, NW Landscape Management began with a simple mission: to provide 
                  exceptional landscape services that enhance the natural beauty of the Pacific Northwest. 
                  What started as a small local business has grown into an award-winning company serving 
                  over 21 cities across the South Sound area.
                </p>
                <p>
                  Our commitment to excellence has earned us recognition in the Federal Way Symphony 
                  Garden Tours and numerous industry awards. But what truly sets us apart is our 
                  dedication to building lasting relationships with our clients. Many of our original 
                  clients from 25+ years ago still choose us for their landscape needs.
                </p>
                <p>
                  As landscape contractors that put the customer first, we've built our reputation 
                  on quality craftsmanship, professional service, and exceeding customer expectations. 
                  Every project reflects our 29+ years of Pacific Northwest expertise and our passion 
                  for creating outdoor spaces that thrive in our unique climate.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/NW-Tree-Farm.jpg"
                alt="NW Landscape Management company history"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="section-subtitle">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-pure-white rounded-xl p-8 shadow-card"
              >
                <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-forest-sage" />
                </div>
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Licensing */}
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
              Certifications & Licensing
            </h2>
            <p className="section-subtitle">
              Your peace of mind is our priority. We maintain all required licenses, 
              insurance, and certifications to protect you and your property.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-morning-mist rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-display font-bold text-pacific-evergreen mb-3">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Philosophy */}
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
              Our Service Philosophy
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 leading-relaxed">
              "Landscape contractors that put the customer first" - This isn't just our tagline, 
              it's our commitment to every client we serve.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-pure-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">Dedicated Office Staff</h3>
                <p className="text-pure-white/80 text-sm">
                  Professional customer communication and support
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pure-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">Experienced Consultants</h3>
                <p className="text-pure-white/80 text-sm">
                  Expert landscape designers for every project
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pure-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">Quality Standards</h3>
                <p className="text-pure-white/80 text-sm">
                  Commercial-grade materials and professional equipment
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long-term Relationships */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/Lawn-Installation-5.jpg"
                alt="Long-term client relationships"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="section-title text-left mb-6">
                Building Lasting Relationships
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our success is measured not just by the landscapes we create, but by the 
                  relationships we build. Many of our original clients from 25+ years ago 
                  still choose us for their landscape needs, a testament to our commitment 
                  to quality and service.
                </p>
                <p>
                  We understand that your landscape is an investment in your property and 
                  your family's enjoyment. That's why we approach every project with the 
                  same care and attention to detail, whether it's weekly maintenance or 
                  a complete landscape transformation.
                </p>
                <div className="bg-pure-white rounded-lg p-6 shadow-card">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-sunset-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-3">
                    "We've been clients since 1998 - over 25 years! NW Landscape has grown 
                    with us, from our first home to our current property. Their consistency 
                    and quality is remarkable."
                  </blockquote>
                  <div className="font-accent font-semibold text-forest-sage">
                    — Robert & Margaret Williams, Federal Way
                  </div>
                </div>
              </div>
            </div>
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
              Ready to Experience the NW Landscape Difference?
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust our 29+ years of experience 
              and award-winning service for their landscape needs.
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

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Shield, Award } from 'lucide-react';
import { services } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-padding bg-morning-mist">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Complete Landscape Solutions
          </h2>
          <p className="section-subtitle">
            From weekly maintenance starting at $325/month to award-winning landscape transformations, 
            we provide comprehensive solutions for your Pacific Northwest property.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
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
                <h3 className="text-xl font-display font-bold text-pacific-evergreen mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-forest-sage rounded-full" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-gray-600 font-medium">
                      +{service.features.length - 3} more features
                    </div>
                  )}
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

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-forest-sage" />
            </div>
            <h3 className="font-display font-bold text-pacific-evergreen mb-2">Award-Winning</h3>
            <p className="text-gray-600 text-sm">Featured in Federal Way Symphony Garden Tours</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-forest-sage" />
            </div>
            <h3 className="font-display font-bold text-pacific-evergreen mb-2">29+ Years</h3>
            <p className="text-gray-600 text-sm">Established in 1995 with continuous excellence</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-forest-sage" />
            </div>
            <h3 className="font-display font-bold text-pacific-evergreen mb-2">Licensed & Insured</h3>
            <p className="text-gray-600 text-sm">Fully licensed, bonded, and insured</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-forest-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-forest-sage" />
            </div>
            <h3 className="font-display font-bold text-pacific-evergreen mb-2">98% Satisfaction</h3>
            <p className="text-gray-600 text-sm">Customer satisfaction rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

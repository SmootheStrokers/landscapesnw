'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, Shield, Users } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function ContactSection() {
  const serviceAreas = [
    'Federal Way', 'Kent', 'Renton', 'Auburn', 'Des Moines', 'Covington',
    'Maple Valley', 'Sumner', 'Bonney Lake', 'Lake Tapps', 'Puyallup',
    'Milton', 'Fife', 'Edgewood', 'University Place', 'Fircrest',
    'Lakewood', 'Tacoma', 'Normandy Park', 'Black Diamond', 'Gig Harbor'
  ];

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
            Get Your Free Quote Today
          </h2>
          <p className="section-subtitle">
            Ready to transform your Pacific Northwest landscape? Contact us for a free consultation 
            and detailed quote. We serve 21+ cities across the South Sound area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest-sage rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-pure-white" />
                  </div>
                  <div>
                    <div className="font-accent font-semibold text-pacific-evergreen">Primary Phone</div>
                    <div className="text-lg font-accent text-forest-sage">(253) 661-5824</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest-sage rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-pure-white" />
                  </div>
                  <div>
                    <div className="font-accent font-semibold text-pacific-evergreen">Secondary Phone</div>
                    <div className="text-lg font-accent text-forest-sage">(253) 336-8686</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest-sage rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pure-white" />
                  </div>
                  <div>
                    <div className="font-accent font-semibold text-pacific-evergreen">Email</div>
                    <div className="text-lg font-accent text-forest-sage">info@nwlandscape.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest-sage rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pure-white" />
                  </div>
                  <div>
                    <div className="font-accent font-semibold text-pacific-evergreen">Service Area</div>
                    <div className="text-lg font-accent text-forest-sage">21+ Cities in South Sound</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest-sage rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-pure-white" />
                  </div>
                  <div>
                    <div className="font-accent font-semibold text-pacific-evergreen">Response Time</div>
                    <div className="text-lg font-accent text-forest-sage">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="bg-pure-white rounded-xl p-6 shadow-card">
              <h4 className="font-display font-bold text-pacific-evergreen mb-4">
                Why Choose NW Landscape Management?
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-sunset-gold" />
                  <span className="font-accent text-gray-700">29+ years in business (established 1995)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-sunset-gold" />
                  <span className="font-accent text-gray-700">Licensed, bonded, and insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-sunset-gold" />
                  <span className="font-accent text-gray-700">Many original clients from 25+ years ago</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-sunset-gold" />
                  <span className="font-accent text-gray-700">Featured in Federal Way Symphony Garden Tours</span>
                </div>
              </div>
            </motion.div>

            {/* Service Areas */}
            <motion.div variants={itemVariants} className="bg-pure-white rounded-xl p-6 shadow-card">
              <h4 className="font-display font-bold text-pacific-evergreen mb-4">
                Service Areas
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {serviceAreas.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-forest-sage rounded-full" />
                    <span className="font-accent text-gray-600">{city}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div variants={itemVariants} className="bg-pure-white rounded-xl p-6 shadow-card">
              <h4 className="font-display font-bold text-pacific-evergreen mb-4">
                Service Area Map
              </h4>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.1234567890!2d-122.1234567890!3d47.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFederal%20Way%2C%20WA!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NW Landscape Management Service Area"
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                We proudly serve the greater Puget Sound area including Federal Way, Tacoma, Kent, and surrounding communities.
              </p>
            </motion.div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-pure-white rounded-2xl p-8 shadow-premium"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                Request Free Quote
              </h3>
              <p className="text-gray-600">
                Get a detailed quote for your landscape project. Free consultation included.
              </p>
            </div>
            <QuoteForm />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-forest-sage to-mountain-moss rounded-2xl p-8 text-pure-white">
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-6 text-pure-white/90">
              Whether large or small, we're happy to help. The sooner you call, the sooner we can get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:2536615824"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-forest-sage"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call (253) 661-5824
              </motion.a>
              <motion.a
                href="mailto:info@nwlandscape.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-forest-sage"
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Email Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

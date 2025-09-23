'use client';

import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Users, Clock } from 'lucide-react';
import { serviceAreas } from '@/lib/data';

export default function ServiceAreasMap() {
  const maintenanceAreas = serviceAreas.filter(area => area.coverage === 'both' || area.coverage === 'maintenance');
  const installationAreas = serviceAreas.filter(area => area.coverage === 'both' || area.coverage === 'installation');

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
            Serving the South Sound Area
          </h2>
          <p className="section-subtitle">
            We proudly serve 18+ cities across the Pacific Northwest with 
            comprehensive landscape services tailored to our local climate.
          </p>
        </motion.div>

        {/* Service Coverage Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Maintenance Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-forest-sage/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-forest-sage" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen">
                  Weekly Maintenance
                </h3>
                <p className="text-gray-600">Year-round service starting at $325/month</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {maintenanceAreas.slice(0, 12).map((area, index) => (
                <motion.div
                  key={area.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-forest-sage flex-shrink-0" />
                  <span className="text-gray-600">{area.city}</span>
                </motion.div>
              ))}
            </div>

            {maintenanceAreas.length > 12 && (
              <div className="mt-4 text-sm text-gray-600">
                +{maintenanceAreas.length - 12} more areas
              </div>
            )}
          </motion.div>

          {/* Installation Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sunset-gold/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-sunset-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen">
                  Design & Installation
                </h3>
                <p className="text-gray-600">Custom projects and transformations</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {installationAreas.slice(0, 12).map((area, index) => (
                <motion.div
                  key={area.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-sunset-gold flex-shrink-0" />
                  <span className="text-gray-600">{area.city}</span>
                </motion.div>
              ))}
            </div>

            {installationAreas.length > 12 && (
              <div className="mt-4 text-sm text-gray-600">
                +{installationAreas.length - 12} more areas
              </div>
            )}
          </motion.div>
        </div>

        {/* Interactive Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-forest-sage to-mountain-moss rounded-2xl p-8 text-center text-pure-white"
        >
          <div className="max-w-2xl mx-auto">
            <MapPin className="w-16 h-16 mx-auto mb-6 text-sunset-gold" />
            <h3 className="text-3xl font-display font-bold mb-4">
              Interactive Service Area Map
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Click on any city to see our service coverage, recent projects, 
              and local testimonials from your area.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Explore Service Areas
            </motion.button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-4">
            Don't See Your City Listed?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always expanding our service areas. Contact us to discuss 
            bringing our award-winning landscape services to your neighborhood.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Request Service Area Expansion
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

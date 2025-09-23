'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Award, Shield, Star } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Lawn Care & Maintenance', href: '/services/lawn-care' },
      { name: 'Landscape Design & Build', href: '/services/design-build' },
      { name: 'Hardscapes & Patios', href: '/services/hardscapes' },
      { name: 'Irrigation & Drainage', href: '/services/irrigation' },
      { name: 'Seasonal Cleanups', href: '/services/seasonal' },
      { name: 'Landscape Lighting', href: '/services/lighting' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Service Areas', href: '/service-areas' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Get Free Quote', href: '/contact' },
      { name: 'Service Schedule', href: '/schedule' },
      { name: 'Maintenance Tips', href: '/resources' },
      { name: 'Seasonal Guide', href: '/resources' },
      { name: 'FAQ', href: '/resources' },
      { name: 'Emergency Service', href: '/contact' },
    ]
  };

  return (
    <footer className="bg-pacific-evergreen text-pure-white rounded-t-2xl mt-16 shadow-2xl">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-forest-sage rounded-lg flex items-center justify-center">
                  <span className="text-pure-white font-display font-bold text-xl">NW</span>
                </div>
                <div>
                  <div className="font-display font-bold text-xl">NW Landscape</div>
                  <div className="text-sm text-pure-white/80">Management</div>
                </div>
              </div>
              
              <p className="text-pure-white/80 mb-6 leading-relaxed">
                Award-winning landscape design and maintenance services for the 
                Pacific Northwest. Creating outdoor spaces that thrive in our climate.
              </p>

              {/* Trust Badges */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-sunset-gold" />
                  <span>29+ Years in Business</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-sunset-gold" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-sunset-gold" />
                  <span>98% Customer Satisfaction</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-xl mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-pure-white/80 hover:text-sunset-gold transition-colors duration-300 group flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-sunset-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-xl mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-pure-white/80 hover:text-sunset-gold transition-colors duration-300 group flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-sunset-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-xl mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 text-sunset-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <a 
                      href="tel:2536615824"
                      className="font-accent font-semibold hover:text-sunset-gold transition-colors duration-300"
                    >
                      (253) 661-5824
                    </a>
                    <div className="text-sm text-pure-white/80">Call or Text</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 text-sunset-gold mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <a 
                      href="mailto:info@nwlandscape.com"
                      className="font-accent font-semibold hover:text-sunset-gold transition-colors duration-300"
                    >
                      info@nwlandscape.com
                    </a>
                    <div className="text-sm text-pure-white/80">Email Us</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sunset-gold mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-accent font-semibold">Federal Way, WA</div>
                    <div className="text-sm text-pure-white/80">Serving South Sound</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sunset-gold mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-accent font-semibold">Mon-Fri: 7AM-6PM</div>
                    <div className="text-sm text-pure-white/80">Emergency Service Available</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-accent font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-pure-white/10 hover:bg-sunset-gold rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pure-white/10 hover:bg-sunset-gold rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-pure-white/10 hover:bg-sunset-gold rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-pure-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-pure-white/60 text-sm">
                © {currentYear} NW Landscape Management. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy" className="text-pure-white/60 hover:text-sunset-gold transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-pure-white/60 hover:text-sunset-gold transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link href="/sitemap" className="text-pure-white/60 hover:text-sunset-gold transition-colors duration-300">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
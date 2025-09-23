'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Award, Shield, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    {
      name: 'Lawn Care & Maintenance',
      href: '/services/lawn-care',
      description: 'Weekly maintenance starting at $325/month',
      icon: '🌱'
    },
    {
      name: 'Landscape Design & Build',
      href: '/services/design-build',
      description: 'Custom designs with free consultation',
      icon: '🏡'
    },
    {
      name: 'Hardscapes & Patios',
      href: '/services/hardscapes',
      description: 'Fire pits, patios, outdoor kitchens',
      icon: '🔥'
    },
    {
      name: 'Irrigation & Drainage',
      href: '/services/irrigation',
      description: '2-year warranty on all systems',
      icon: '💧'
    },
    {
      name: 'Seasonal Cleanups',
      href: '/services/seasonal',
      description: 'Spring & fall property preparation',
      icon: '🍂'
    }
  ];

  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Resources', href: '/resources' }
  ];

  const trustIndicators = [
    { icon: Award, text: 'Award-Winning', color: 'text-accent-secondary' },
    { icon: Clock, text: '29+ Years', color: 'text-accent' },
    { icon: Shield, text: 'Licensed & Insured', color: 'text-accent-secondary-hover' },
    { icon: Users, text: '1000+ Projects', color: 'text-accent-hover' }
  ];

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar with Trust Indicators */}
      <div className="bg-fg text-surface py-2 text-sm">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
            {/* Contact Information */}
            <div className="flex flex-wrap items-center gap-4 text-xs lg:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:2536615824" className="hover:text-accent-secondary transition-colors">
                  (253) 661-5824
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@nwlandscape.com" className="hover:text-accent-secondary transition-colors">
                  info@nwlandscape.com
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="hidden md:flex items-center gap-4">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-1">
                  <indicator.icon className={`w-3 h-3 ${indicator.color}`} />
                  <span className="text-xs">{indicator.text}</span>
                </div>
              ))}
            </div>

            {/* Service Area */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-xs lg:text-sm">Serving Federal Way, Tacoma & South Sound</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-surface/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-fg/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent-hover transition-colors duration-300">
                <span className="text-surface font-display font-bold text-xl">NW</span>
              </div>
              <div className={`transition-colors duration-300 ${
                scrolled ? 'text-fg' : 'text-surface'
              }`}>
                <div className="font-display font-bold text-xl">NW Landscape</div>
                <div className="text-sm font-accent">Management</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 font-accent font-medium transition-colors duration-300 rounded-lg hover:bg-gray-100 ${
                          scrolled ? 'text-fg' : 'text-surface'
                        } ${isActivePath(item.href) ? 'text-accent' : ''}`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-surface rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          >
                            <div className="p-4">
                              <div className="grid gap-3">
                                {services.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                                      {service.icon}
                                    </span>
                                    <div>
                                      <div className="font-accent font-semibold text-fg group-hover:text-accent transition-colors">
                                        {service.name}
                                      </div>
                                      <div className="text-sm text-gray-600">
                                        {service.description}
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-4 pt-4 border-t border-gray-100">
                                <Link
                                  href="/services"
                                  className="flex items-center justify-center gap-2 text-accent font-accent font-semibold hover:text-accent-hover transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  View All Services
                                  <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 font-accent font-medium transition-colors duration-300 rounded-lg hover:bg-gray-100 ${
                        scrolled ? 'text-fg' : 'text-surface'
                      } ${isActivePath(item.href) ? 'text-accent bg-gray-100' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <motion.div
                className="ml-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="btn-primary text-sm px-6 py-2.5 shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 rounded-lg ${
                scrolled ? 'text-fg hover:bg-gray-100' : 'text-surface hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-surface shadow-lg border-t border-gray-100"
            >
              <div className="container-custom py-4">
                <div className="space-y-2">
                  {mainNavItems.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <div className="font-accent font-semibold text-fg py-2 px-4 text-lg">
                            {item.name}
                          </div>
                          <div className="ml-4 space-y-1">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 py-2 px-4 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors duration-200"
                              >
                                <span className="text-lg">{service.icon}</span>
                                <div>
                                  <div className="font-accent text-sm font-medium">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-3 px-4 font-accent font-medium transition-colors duration-300 rounded-lg ${
                            isActivePath(item.href)
                              ? 'text-accent bg-gray-100'
                              : 'text-fg hover:text-accent hover:bg-gray-50'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="btn-primary w-full text-center block"
                      >
                        Get Free Quote
                      </Link>
                    </motion.div>
                  </div>

                  {/* Mobile Trust Indicators */}
                  <div className="pt-4 border-t border-gray-100 mt-4">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {trustIndicators.map((indicator, index) => (
                        <div key={index} className="flex items-center gap-2 py-1">
                          <indicator.icon className={`w-3 h-3 ${indicator.color}`} />
                          <span className="text-gray-600">{indicator.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
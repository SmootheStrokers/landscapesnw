'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, Star, Award, Users, MapPin } from 'lucide-react';
import { companyStats } from '@/lib/data';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const heroImages = [
    '/images/bam55_a_true_to_life_image_of_a_front_walkway_of_a_nice_yard_--_ec11600a-4625-4aa8-9487-b5ab1e485dd6.png',
    '/images/everbearing_services_closeup_of_a_residential_garden_bed_with_a_9f60b09d-56b0-4184-a8a2-57d90919b7b6.png',
    '/images/jimpix1912_landscaping_with_curb_appeal_--ar_43_--profile_bxz9v_32acb9e6-3996-4efe-afd0-a2d16878730e.png',
    '/images/u2162952137_minimalist_front_yard_garden._Linear_Elegance_--ar__d621e842-29c9-4ec0-ae6e-861d9ec9d2b3.png',
    '/images/u6311348464_editorial_a_well_landscaped_backyard_with_neatly_tr_c9c743ff-b399-46ab-ae19-864b0e2a5be0.png'
  ];

  useEffect(() => {
    // Preload all images
    heroImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Rotate images every 5 seconds (only when not hovered)
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rotating Background Images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((imageSrc, index) => (
          <motion.div
            key={imageSrc}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${imageSrc}')`
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0 
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut" 
            }}
          />
        ))}
        <div className="absolute inset-0 bg-pacific-evergreen/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-sunset-gold/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-rain-blue/20 rounded-full blur-xl"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-mountain-moss/20 rounded-full blur-xl"
          animate={{ y: [0, -10, 0], x: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-8 text-pure-white/90"
        >
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-sunset-gold" />
            <span className="font-accent font-semibold">29+ Years</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sunset-gold" />
            <span className="font-accent font-semibold">Award-Winning</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-sunset-gold" />
            <span className="font-accent font-semibold">1000+ Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-sunset-gold" />
            <span className="font-accent font-semibold">21+ Cities</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hero-text text-pure-white mb-6 text-balance"
        >
          Transform Your
          <span className="block text-gradient">Pacific Northwest</span>
          <span className="block">Landscape</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-subtitle mb-8 max-w-3xl mx-auto text-pretty"
        >
          Landscape contractors that put the customer first. 29+ years of Pacific Northwest expertise 
          serving Federal Way, Tacoma, and the South Sound area. Award-winning designs that exceed expectations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-5 shadow-glow"
          >
            Request Free Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline text-lg px-10 py-5 border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen"
          >
            <Play className="w-5 h-5 mr-2 inline" />
            View Portfolio
          </motion.button>
        </motion.div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-4xl sm:text-5xl font-display font-bold text-sunset-gold mb-2"
            >
              {companyStats.yearsInBusiness}+
            </motion.div>
            <div className="text-pure-white/80 font-accent">Years in Business</div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-4xl sm:text-5xl font-display font-bold text-sunset-gold mb-2"
            >
              {companyStats.projectsCompleted}+
            </motion.div>
            <div className="text-pure-white/80 font-accent">Successful Projects</div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-4xl sm:text-5xl font-display font-bold text-sunset-gold mb-2"
            >
              {companyStats.customerSatisfaction}%
            </motion.div>
            <div className="text-pure-white/80 font-accent">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="text-4xl sm:text-5xl font-display font-bold text-sunset-gold mb-2"
            >
              {companyStats.serviceAreas}+
            </motion.div>
            <div className="text-pure-white/80 font-accent">Service Areas</div>
          </div>
        </motion.div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-sunset-gold scale-125' 
                : 'bg-pure-white/50 hover:bg-pure-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-pure-white/70"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}

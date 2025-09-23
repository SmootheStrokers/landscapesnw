'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import Image from 'next/image';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    ));
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="section-padding bg-pacific-evergreen">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-pure-white mb-4">
            Long-Term Client Relationships
          </h2>
          <p className="text-lg sm:text-xl text-pure-white/80 max-w-3xl mx-auto">
            Many original clients from 25+ years ago still choose us for their landscape needs. 
            Here's what our satisfied customers say about their experience with NW Landscape Management.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-pure-white rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8"
              >
                {/* Customer Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <Quote className="w-8 h-8 text-forest-sage" />
                  </div>
                  
                  <blockquote className="text-lg text-gray-600 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="flex justify-center lg:justify-start items-center gap-2 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-sunset-gold text-sunset-gold" />
                    ))}
                  </div>

                  <div>
                    <div className="font-display font-bold text-pacific-evergreen text-xl">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].location} • {testimonials[currentIndex].projectType}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pure-white/90 hover:bg-pure-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-pacific-evergreen" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pure-white/90 hover:bg-pure-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-pacific-evergreen" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-sunset-gold scale-125' 
                    : 'bg-pure-white/50 hover:bg-pure-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 rounded-full text-sm font-accent font-medium transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-sunset-gold text-pure-white'
                : 'bg-pure-white/20 text-pure-white hover:bg-pure-white/30'
            }`}
          >
            {isAutoPlaying ? 'Pause' : 'Resume'} Auto-play
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Filter, Eye, MapPin, Calendar, Star } from 'lucide-react';
import { projects } from '@/lib/data';
import Image from 'next/image';

type FilterType = 'all' | 'Design & Installation' | 'Hardscaping' | 'Irrigation' | 'Lighting';

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters: { label: string; value: FilterType }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Design & Installation', value: 'Design & Installation' },
    { label: 'Hardscaping', value: 'Hardscaping' },
    { label: 'Irrigation', value: 'Irrigation' },
    { label: 'Lighting', value: 'Lighting' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.serviceType === activeFilter
  );

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
    <section className="section-padding bg-pure-white">
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
            Award-Winning Portfolio
          </h2>
          <p className="section-subtitle">
            Featured properties from Federal Way Symphony Garden Tours and award-winning 
            landscape transformations across the Pacific Northwest.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-3 rounded-full font-accent font-semibold transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-forest-sage text-pure-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-forest-sage/10 hover:text-forest-sage'
              }`}
            >
              <Filter className="w-4 h-4 mr-2 inline" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Before/After Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.afterImage}
                  alt={`${project.title} - After`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pacific-evergreen/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-pure-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-sunset-gold" />
                    <span className="font-accent text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-sunset-gold" />
                    <span className="font-accent text-sm">{project.completionDate}</span>
                  </div>
                  <div className="text-xl font-display font-bold mb-2">{project.title}</div>
                  <div className="text-lg font-accent text-sunset-gold font-semibold">{project.serviceType}</div>
                </div>

                {/* View Project Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-pure-white/20 backdrop-blur-sm rounded-full p-2">
                    <Eye className="w-5 h-5 text-pure-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-pacific-evergreen mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-forest-sage" />
                    <span className="text-sm text-gray-600">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-sunset-gold" />
                    <span className="text-sm text-gray-600">{project.serviceType}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Project Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forest-sage to-mountain-moss rounded-2xl p-8 text-pure-white text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-4">
              Featured in Federal Way Symphony Garden Tours
            </h3>
            <p className="text-xl mb-6 text-pure-white/90">
              Our award-winning landscape designs have been featured in prestigious garden tours, 
              showcasing our expertise in creating exceptional outdoor spaces.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-forest-sage"
            >
              View All Featured Projects
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-pure-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-pacific-evergreen">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-forest-sage" />
                        <span className="text-gray-600">{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-forest-sage" />
                        <span className="text-gray-600">{selectedProject.completionDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-sunset-gold" />
                        <span className="text-gray-600">{selectedProject.serviceType}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Before/After Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <h4 className="font-accent font-semibold text-forest-sage">Before</h4>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.beforeImage}
                        alt={`${selectedProject.title} - Before`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-accent font-semibold text-forest-sage">After</h4>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.afterImage}
                        alt={`${selectedProject.title} - After`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                {selectedProject.testimonial && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(selectedProject.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-sunset-gold fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{selectedProject.testimonial.text}"
                    </blockquote>
                    <div className="font-accent font-semibold text-forest-sage">
                      — {selectedProject.testimonial.name}, {selectedProject.testimonial.location}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

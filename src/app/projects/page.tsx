'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Filter, Eye, MapPin, Calendar, Star, Award, Users } from 'lucide-react';
import { projects } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

type FilterType = 'all' | 'Design & Installation' | 'Hardscaping' | 'Irrigation' | 'Lighting';

export default function ProjectsPage() {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Design & Installation', value: 'Design & Installation' },
    { label: 'Hardscaping', value: 'Hardscaping' },
    { label: 'Irrigation', value: 'Irrigation' },
    { label: 'Lighting', value: 'Lighting' }
  ];

  const featuredProjects = [
    {
      id: 'featured-1',
      title: 'Federal Way Estate Transformation',
      description: 'Complete landscape renovation featuring drainage solutions, privacy screening, and outdoor living space. This award-winning project was featured in the Federal Way Symphony Garden Tours.',
      beforeImage: '/images/Landscaping-Plants.jpg',
      afterImage: '/images/Landscape-Design-28.jpg',
      location: 'Federal Way, WA',
      serviceType: 'Design & Installation',
      completionDate: '2023',
      awards: ['Federal Way Symphony Garden Tours'],
      testimonial: {
        name: 'Sarah Johnson',
        text: 'The transformation exceeded our expectations. They solved our drainage issues and created a beautiful landscape that thrives in our climate.'
      }
    },
    {
      id: 'featured-2',
      title: 'Tacoma Waterfront Patio',
      description: 'Premium paver patio with custom fire pit and outdoor kitchen overlooking Puget Sound. Built to withstand Pacific Northwest weather with commercial-grade materials.',
      beforeImage: '/images/Lawn-Maintenance-35.jpg',
      afterImage: '/images/Patio-and-Hardscape-Installation.jpg',
      location: 'Tacoma, WA',
      serviceType: 'Hardscaping',
      completionDate: '2023',
      awards: [],
      testimonial: {
        name: 'Michael Chen',
        text: 'The patio installation exceeded our expectations. The team was professional, on-time, and the quality is outstanding.'
      }
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
              Award-Winning
              <span className="block text-sunset-gold">Landscape Projects</span>
            </h1>
            <p className="hero-subtitle mb-8">
              Explore our portfolio of award-winning landscape transformations across the Pacific Northwest. 
              Featured in Federal Way Symphony Garden Tours and recognized for excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </Link>
              <Link href="#gallery" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
              Awards & Recognition
            </h2>
            <p className="section-subtitle">
              Our commitment to excellence has been recognized by industry peers and featured in prestigious garden tours.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Award,
                title: 'Federal Way Symphony Garden Tours',
                year: '2023',
                description: 'Featured property showcasing exceptional landscape design and Pacific Northwest plant expertise'
              },
              {
                icon: Star,
                title: 'Best of Federal Way',
                year: '2022',
                description: 'Reader\'s choice award for best landscaping company in Federal Way'
              },
              {
                icon: Users,
                title: 'Excellence in Customer Service',
                year: '2021',
                description: 'Recognition for outstanding customer service and client retention'
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-pure-white rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-16 h-16 bg-sunset-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <award.icon className="w-8 h-8 text-sunset-gold" />
                </div>
                <h3 className="font-display font-bold text-pacific-evergreen mb-2">
                  {award.title}
                </h3>
                <div className="text-sunset-gold font-accent font-semibold mb-3">
                  {award.year}
                </div>
                <p className="text-gray-600 text-sm">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured Projects
            </h2>
            <p className="section-subtitle">
              Award-winning landscape transformations that showcase our expertise in Pacific Northwest design.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
                    {project.awards.length > 0 && (
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-sunset-gold" />
                        <span className="text-sm font-accent text-sunset-gold">Award-Winning</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-forest-sage" />
                      <span className="text-sm font-accent text-gray-600">{project.location}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-pacific-evergreen mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-forest-sage" />
                      <span className="font-accent font-medium">Completed: {project.completionDate}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-forest-sage" />
                      <span className="font-accent font-medium">Service: {project.serviceType}</span>
                    </div>
                  </div>
                  <blockquote className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 italic mb-2">
                      "{project.testimonial.text}"
                    </p>
                    <div className="font-accent font-semibold text-forest-sage">
                      — {project.testimonial.name}
                    </div>
                  </blockquote>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-forest-sage font-accent font-semibold hover:text-mountain-moss transition-colors duration-300"
                  >
                    View Project Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="gallery" className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Project Gallery
            </h2>
            <p className="section-subtitle">
              Browse our complete portfolio of landscape transformations across the Pacific Northwest.
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
                className="px-6 py-3 rounded-full font-accent font-semibold transition-all duration-300 bg-pure-white text-gray-600 hover:bg-forest-sage hover:text-pure-white shadow-card"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="card group cursor-pointer overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.afterImage}
                    alt={`${project.title} - After`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pacific-evergreen/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-pure-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xl font-display font-bold mb-1">{project.title}</div>
                    <div className="text-sm font-accent text-sunset-gold">{project.location}</div>
                  </div>
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
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-pure-white">
              Ready to Create Your Own Award-Winning Landscape?
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto">
              Let our 29+ years of experience and award-winning designs transform your property. 
              Free consultation included with every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
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

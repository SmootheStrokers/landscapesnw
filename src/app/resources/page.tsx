'use client';

import { motion } from 'framer-motion';
import { BookOpen, HelpCircle, Image, FileText, ArrowRight, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesPage() {
  const guides = [
    {
      title: 'Pacific Northwest Plant Selection Guide',
      description: 'Learn which plants thrive in our climate and soil conditions. Expert recommendations from 29+ years of experience.',
      category: 'Plant Care',
      readTime: '8 min read',
      icon: '🌱',
      featured: true
    },
    {
      title: 'Seasonal Lawn Maintenance Calendar',
      description: 'Year-round lawn care schedule optimized for Pacific Northwest weather patterns and growing seasons.',
      category: 'Lawn Care',
      readTime: '6 min read',
      icon: '📅',
      featured: true
    },
    {
      title: 'Irrigation System Winterization Guide',
      description: 'Step-by-step instructions for protecting your irrigation system during Pacific Northwest winters.',
      category: 'Irrigation',
      readTime: '5 min read',
      icon: '💧',
      featured: false
    },
    {
      title: 'Drainage Solutions for Sloped Properties',
      description: 'Expert advice on managing water runoff and preventing erosion in challenging terrain.',
      category: 'Drainage',
      readTime: '7 min read',
      icon: '🌊',
      featured: false
    },
    {
      title: 'Landscape Lighting Design Tips',
      description: 'How to create beautiful, functional lighting that enhances your outdoor space safely.',
      category: 'Lighting',
      readTime: '6 min read',
      icon: '💡',
      featured: false
    },
    {
      title: 'Hardscape Material Selection Guide',
      description: 'Choosing the right materials for patios, walkways, and retaining walls in our climate.',
      category: 'Hardscaping',
      readTime: '9 min read',
      icon: '🧱',
      featured: false
    }
  ];

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer: 'We serve 21+ cities across the South Sound area including Federal Way, Tacoma, Kent, Auburn, Renton, Des Moines, Covington, Maple Valley, Sumner, Bonney Lake, Lake Tapps, Puyallup, Milton, Fife, Edgewood, University Place, Fircrest, Lakewood, Normandy Park, Black Diamond, and Gig Harbor.'
    },
    {
      question: 'How much does landscape maintenance cost?',
      answer: 'Our weekly landscape maintenance service starts at $325/month + sales tax for average tract homes. This includes lawn mowing, pruning, fertilization, weed control, and seasonal cleanup.'
    },
    {
      question: 'How long have you been in business?',
      answer: 'We\'ve been serving the Pacific Northwest since 1995, with over 29 years of experience in landscape design and maintenance. Many of our original clients from 25+ years ago still choose us for their landscape needs.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed, bonded, and insured for your peace of mind. We maintain all required business licenses and comprehensive insurance coverage.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we provide free on-site consultations and quotes for all our services. There\'s no obligation, and we\'ll provide detailed information about your project and timeline.'
    },
    {
      question: 'What makes your company different?',
      answer: 'Our 29+ years of Pacific Northwest expertise, award-winning designs featured in Federal Way Symphony Garden Tours, and many long-term client relationships prove our commitment to quality and service.'
    },
    {
      question: 'Do you handle both residential and commercial properties?',
      answer: 'Yes, we provide landscape services for both residential and commercial properties. Our team has experience with properties of all sizes and can customize our services to meet your specific needs.'
    },
    {
      question: 'What is your warranty policy?',
      answer: 'We offer a 2-year warranty on irrigation system installations and stand behind all our work with quality guarantees. We\'re committed to your satisfaction and will address any concerns promptly.'
    }
  ];

  const seasonalTips = [
    {
      season: 'Spring',
      months: 'March - May',
      tips: [
        'Clean up winter debris and prepare beds for new growth',
        'Apply spring fertilizer to promote healthy lawn growth',
        'Prune dormant plants before new growth begins',
        'Check irrigation systems and make necessary repairs',
        'Plan and install new plantings'
      ],
      color: 'bg-green-500'
    },
    {
      season: 'Summer',
      months: 'June - August',
      tips: [
        'Maintain consistent watering schedule during dry periods',
        'Monitor for pest and disease issues',
        'Keep up with regular mowing and edging',
        'Deadhead flowers to encourage continued blooming',
        'Apply summer fertilizer as needed'
      ],
      color: 'bg-yellow-500'
    },
    {
      season: 'Fall',
      months: 'September - November',
      tips: [
        'Rake and remove fallen leaves regularly',
        'Apply fall fertilizer to strengthen roots',
        'Plant bulbs for spring color',
        'Clean and winterize irrigation systems',
        'Protect tender plants from early frost'
      ],
      color: 'bg-orange-500'
    },
    {
      season: 'Winter',
      months: 'December - February',
      tips: [
        'Continue removing debris and keeping beds clean',
        'Protect plants from heavy snow and ice damage',
        'Plan next season\'s landscape improvements',
        'Service and maintain equipment',
        'Prune trees and shrubs during dormancy'
      ],
      color: 'bg-blue-500'
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
              Landscape Resources
              <span className="block text-sunset-gold">& Expert Guides</span>
            </h1>
            <p className="hero-subtitle mb-8">
              Expert advice, tips, and resources from our 29+ years of Pacific Northwest 
              landscaping experience. Learn how to care for your landscape like a pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#guides" className="btn-primary text-lg px-8 py-4">
                Browse Guides
              </Link>
              <Link href="#faqs" className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-pacific-evergreen text-lg px-8 py-4">
                View FAQs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-morning-mist">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { number: '29+', label: 'Years of Expertise', icon: '📚' },
              { number: '6+', label: 'Expert Guides', icon: '📖' },
              { number: '8', label: 'FAQ Categories', icon: '❓' },
              { number: '4', label: 'Seasonal Guides', icon: '🗓️' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center bg-pure-white rounded-xl p-6 shadow-card"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-display font-bold text-forest-sage mb-2">
                  {stat.number}
                </div>
                <div className="font-accent font-semibold text-pacific-evergreen">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expert Guides */}
      <section id="guides" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Expert Landscape Guides
            </h2>
            <p className="section-subtitle">
              Professional tips and advice from our 29+ years of Pacific Northwest landscaping experience. 
              Learn the secrets to maintaining a beautiful landscape in our unique climate.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`card group cursor-pointer overflow-hidden ${
                  guide.featured ? 'lg:col-span-1 md:col-span-2' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{guide.icon}</div>
                    <div>
                      <span className="bg-forest-sage/10 text-forest-sage px-3 py-1 rounded-full text-sm font-accent font-semibold">
                        {guide.category}
                      </span>
                      {guide.featured && (
                        <span className="bg-sunset-gold/10 text-sunset-gold px-3 py-1 rounded-full text-sm font-accent font-semibold ml-2">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-pacific-evergreen mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-accent">
                      {guide.readTime}
                    </span>
                    <div className="flex items-center gap-2 text-forest-sage font-accent font-semibold group-hover:text-mountain-moss transition-colors">
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seasonal Tips */}
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
              Seasonal Landscape Tips
            </h2>
            <p className="section-subtitle">
              Pacific Northwest-specific advice for each season to keep your landscape 
              healthy and beautiful year-round.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {seasonalTips.map((season, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-pure-white rounded-xl p-6 shadow-card"
              >
                <div className={`w-16 h-16 ${season.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-pure-white font-display font-bold text-xl">
                    {season.season[0]}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                  {season.season}
                </h3>
                <div className="text-sm text-gray-600 mb-4 font-accent">
                  {season.months}
                </div>
                <ul className="space-y-2">
                  {season.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-forest-sage rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle">
              Common questions about our landscape services, processes, and policies. 
              Can't find what you're looking for? Contact us for personalized answers.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-pure-white rounded-xl p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-forest-sage/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <HelpCircle className="w-4 h-4 text-forest-sage" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold text-pacific-evergreen mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Resources */}
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
              Download Our Free Resources
            </h2>
            <p className="text-xl text-pure-white/90 mb-12 leading-relaxed">
              Get instant access to our comprehensive landscape guides and seasonal checklists. 
              Perfect for DIY enthusiasts and property managers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-pure-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 bg-pure-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  Complete Maintenance Checklist
                </h3>
                <p className="text-pure-white/80 mb-4">
                  Year-round maintenance schedule optimized for Pacific Northwest conditions.
                </p>
                <button className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-forest-sage">
                  Download PDF
                </button>
              </div>
              
              <div className="bg-pure-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 bg-pure-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-pure-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  Plant Selection Guide
                </h3>
                <p className="text-pure-white/80 mb-4">
                  Expert recommendations for plants that thrive in our climate and soil.
                </p>
                <button className="btn-outline border-pure-white text-pure-white hover:bg-pure-white hover:text-forest-sage">
                  Download PDF
                </button>
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
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-pure-white">
              Need Personalized Landscape Advice?
            </h2>
            <p className="text-xl text-pure-white/90 mb-8 max-w-2xl mx-auto">
              Our experienced consultants provide personalized advice for your specific property and needs. 
              Get expert guidance from our 29+ years of Pacific Northwest experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Free Consultation
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

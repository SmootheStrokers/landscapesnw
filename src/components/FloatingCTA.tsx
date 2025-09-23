'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    // Show CTA after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    // Handle escape key to close popup
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showExitIntent) {
        setShowExitIntent(false);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showExitIntent]);

  return (
    <>
      {/* Floating CTA Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 bg-forest-sage hover:bg-mountain-moss text-pure-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowExitIntent(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-pure-white rounded-2xl p-8 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-pacific-evergreen transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
                title="Close popup"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                  Wait! Get Your Free Quote
                </h3>
                <p className="text-gray-600">
                  Don't miss out on transforming your landscape. Get a free consultation 
                  and quote for your property.
                </p>
              </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call (253) 123-4567
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-outline"
                >
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Email Quote Request
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-secondary"
                >
                  <MessageCircle className="w-5 h-5 mr-2 inline" />
                  Live Chat
                </motion.button>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                * Free consultation • No obligation • Licensed & insured
              </p>
              
              <button
                onClick={() => setShowExitIntent(false)}
                className="text-sm text-gray-500 hover:text-gray-700 mt-3 underline transition-colors duration-200"
              >
                No thanks, I'll browse for now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Phone, Mail, MapPin, Calendar, DollarSign, MessageSquare, CheckCircle } from 'lucide-react';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  zipCode: z.string().min(5, 'ZIP code is required'),
  service: z.string().min(1, 'Please select a service'),
  propertySize: z.string().min(1, 'Please select property size'),
  timeline: z.string().min(1, 'Please select timeline'),
  budget: z.string().min(1, 'Please select budget range'),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const services = [
    'Landscape Maintenance',
    'Design & Installation',
    'Hardscaping & Patios',
    'Irrigation & Sprinkler Systems',
    'Landscape Lighting',
    'Lawn Installation & Restoration',
    'Drainage Solutions',
    'Complete Renovation',
    'Other'
  ];

  const propertySizes = [
    'Under 1,000 sq ft',
    '1,000 - 2,500 sq ft',
    '2,500 - 5,000 sq ft',
    '5,000 - 10,000 sq ft',
    'Over 10,000 sq ft'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just getting ideas'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not sure yet'
  ];

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8"
      >
        <div className="w-16 h-16 bg-forest-sage rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-pure-white" />
        </div>
        <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-4">
          Quote Request Submitted!
        </h3>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in our award-winning landscaping services. We'll contact you within 24 hours to discuss 
          your project and schedule a free on-site consultation.
        </p>
        <div className="text-sm text-gray-600">
          <p>Next steps:</p>
          <ul className="mt-2 space-y-1">
            <li>• We'll review your requirements</li>
            <li>• Schedule a free on-site consultation</li>
            <li>• Provide detailed quote with 29+ years expertise</li>
            <li>• No obligation to proceed</li>
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-accent text-gray-600">Step {currentStep} of 5</span>
          <span className="text-sm font-accent text-gray-600">{Math.round((currentStep / 5) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-forest-sage h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Step 1: Contact Information */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600">Let's start with your basic information.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent"
                  placeholder="(253) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Property Details */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                Property Details
              </h3>
              <p className="text-gray-600">Tell us about your property location.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                  Property Address *
                </label>
                <input
                  {...register('address')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent"
                  placeholder="123 Main Street"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                    City *
                  </label>
                  <input
                    {...register('city')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent"
                    placeholder="Federal Way"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                    ZIP Code *
                  </label>
                  <input
                    {...register('zipCode')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent"
                    placeholder="98003"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Service Selection */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                Service Selection
              </h3>
              <p className="text-gray-600">What services are you interested in?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service) => (
                <label
                  key={service}
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    watch('service') === service
                      ? 'border-forest-sage bg-forest-sage/5'
                      : 'border-gray-300 hover:border-forest-sage/50'
                  }`}
                >
                  <input
                    type="radio"
                    {...register('service')}
                    value={service}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    watch('service') === service
                      ? 'border-forest-sage bg-forest-sage'
                      : 'border-gray-300'
                  }`}>
                    {watch('service') === service && (
                      <div className="w-2 h-2 bg-pure-white rounded-full m-0.5" />
                    )}
                  </div>
                  <span className="font-accent">{service}</span>
                </label>
              ))}
            </div>
            {errors.service && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </motion.div>
        )}

        {/* Step 4: Project Details */}
        {currentStep === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                Project Details
              </h3>
              <p className="text-gray-600">Help us understand your project better.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                  Property Size *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {propertySizes.map((size) => (
                    <label
                      key={size}
                      className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        watch('propertySize') === size
                          ? 'border-forest-sage bg-forest-sage/5'
                          : 'border-gray-300 hover:border-forest-sage/50'
                      }`}
                    >
                      <input
                        type="radio"
                        {...register('propertySize')}
                        value={size}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        watch('propertySize') === size
                          ? 'border-forest-sage bg-forest-sage'
                          : 'border-gray-300'
                      }`}>
                        {watch('propertySize') === size && (
                          <div className="w-2 h-2 bg-pure-white rounded-full m-0.5" />
                        )}
                      </div>
                      <span className="font-accent">{size}</span>
                    </label>
                  ))}
                </div>
                {errors.propertySize && (
                  <p className="text-red-500 text-sm">{errors.propertySize.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                  Timeline *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {timelines.map((timeline) => (
                    <label
                      key={timeline}
                      className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        watch('timeline') === timeline
                          ? 'border-forest-sage bg-forest-sage/5'
                          : 'border-gray-300 hover:border-forest-sage/50'
                      }`}
                    >
                      <input
                        type="radio"
                        {...register('timeline')}
                        value={timeline}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        watch('timeline') === timeline
                          ? 'border-forest-sage bg-forest-sage'
                          : 'border-gray-300'
                      }`}>
                        {watch('timeline') === timeline && (
                          <div className="w-2 h-2 bg-pure-white rounded-full m-0.5" />
                        )}
                      </div>
                      <span className="font-accent">{timeline}</span>
                    </label>
                  ))}
                </div>
                {errors.timeline && (
                  <p className="text-red-500 text-sm">{errors.timeline.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                  Budget Range *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {budgetRanges.map((budget) => (
                    <label
                      key={budget}
                      className={`flex items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        watch('budget') === budget
                          ? 'border-forest-sage bg-forest-sage/5'
                          : 'border-gray-300 hover:border-forest-sage/50'
                      }`}
                    >
                      <input
                        type="radio"
                        {...register('budget')}
                        value={budget}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        watch('budget') === budget
                          ? 'border-forest-sage bg-forest-sage'
                          : 'border-gray-300'
                      }`}>
                        {watch('budget') === budget && (
                          <div className="w-2 h-2 bg-pure-white rounded-full m-0.5" />
                        )}
                      </div>
                      <span className="font-accent">{budget}</span>
                    </label>
                  ))}
                </div>
                {errors.budget && (
                  <p className="text-red-500 text-sm">{errors.budget.message}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 5: Additional Information */}
        {currentStep === 5 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-pacific-evergreen mb-2">
                Additional Information
              </h3>
              <p className="text-gray-600">Any specific requirements or questions?</p>
            </div>

            <div>
              <label className="block text-sm font-accent font-medium text-pacific-evergreen mb-2">
                Project Description
              </label>
              <textarea
                {...register('message')}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-sage focus:border-transparent"
                placeholder="Tell us about your vision, any specific challenges, or questions you have..."
              />
            </div>

            <div className="bg-morning-mist p-4 rounded-lg">
              <h4 className="font-accent font-semibold text-pacific-evergreen mb-2">
                What happens next?
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• We'll review your requirements within 24 hours</li>
                <li>• Schedule a free on-site consultation</li>
                <li>• Provide detailed quote and timeline</li>
                <li>• No obligation to proceed</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-accent font-medium transition-all duration-300 ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-pacific-evergreen hover:bg-gray-100'
            }`}
          >
            Previous
          </button>

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary"
            >
              Next Step
            </button>
          ) : (
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
            </motion.button>
          )}
        </div>
      </form>
    </div>
  );
}

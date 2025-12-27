import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Starter Website',
    price: '$299',
    period: 'one-time',
    description: 'Perfect for getting your business online quickly',
    features: [
      'Single page website',
      'Mobile-responsive design',
      'Contact information',
      'Google Maps integration',
      'WhatsApp & phone integration',
      'Basic SEO setup',
    ],
    highlighted: false,
  },
  {
    name: 'Business Website',
    price: '$599',
    period: 'one-time',
    description: 'Comprehensive solution for growing businesses',
    features: [
      'Multi-page website (up to 5 pages)',
      'Professional design',
      'Mobile-responsive',
      'Google Maps integration',
      'WhatsApp & phone integration',
      'Contact form',
      'Gallery/portfolio section',
      'Advanced SEO optimization',
      '1 month free support',
    ],
    highlighted: true,
  },
  {
    name: 'Monthly Support Plan',
    price: '$49',
    period: 'per month',
    description: 'Keep your website updated and running smoothly',
    features: [
      'Content updates (text & images)',
      'Technical support',
      'Performance monitoring',
      'Security updates',
      'Backup & maintenance',
      'Priority support',
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">
            Choose the plan that fits your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? 'bg-teal-500/10 border-2 border-teal-500 relative'
                  : 'bg-gray-900 border border-gray-800'
              }`}
            >
              {plan.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-500 text-white text-sm rounded-full"
                >
                  Most Popular
                </motion.div>
              )}
              
              <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="text-teal-400 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`block w-full py-3 text-center rounded-lg transition-colors ${
                  plan.highlighted
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
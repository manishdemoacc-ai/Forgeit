import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Share Your Business Details',
    description: 'Tell us about your business, what you do, and what you need on your website.',
  },
  {
    number: '02',
    title: 'We Build Your Website',
    description: 'Our team creates a professional, mobile-friendly website tailored to your business.',
  },
  {
    number: '03',
    title: 'Your Business Goes Online',
    description: 'Launch your website and start attracting more customers. We handle all the technical details.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Getting online is as easy as 1, 2, 3
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="relative bg-gray-950 border border-gray-800 rounded-xl p-6 lg:p-8 hover:border-teal-500 transition-colors"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center border-2 border-teal-500"
                    >
                      <span className="text-2xl text-teal-400">{step.number}</span>
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-white mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-400">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-8 top-full w-0.5 h-8 bg-gray-800" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
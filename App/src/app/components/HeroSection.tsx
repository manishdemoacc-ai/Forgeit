import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-20 lg:pb-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-teal-400 mb-6"
          >
            Built strong. Built online.
          </motion.p>

          {/* Value Statement */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            We help local businesses build a strong online presence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Simple, affordable websites for shops, restaurants, clinics, salons, and local service providers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 group"
            >
              Get Your Website
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#demo"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-700 text-gray-300 rounded-lg hover:border-teal-500 hover:text-teal-400 transition-colors"
            >
              View Demo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-gray-700 text-gray-300 rounded-lg hover:border-teal-500 hover:text-teal-400 transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
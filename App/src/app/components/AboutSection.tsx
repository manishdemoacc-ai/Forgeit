import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
          >
            About Forgeit
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-400"
          >
            <p>
              At Forgeit, we specialize in helping <span className="text-teal-400">local businesses</span> establish 
              and grow their online presence. We understand that small business owners have enough on their 
              plate—that's why we make going online simple and stress-free.
            </p>
            <p>
              Our mission is to provide <span className="text-teal-400">simple, reliable, and affordable</span> web 
              solutions tailored to the needs of shops, restaurants, clinics, salons, and local service providers.
            </p>
            <p>
              No technical hassle. No complicated jargon. Just a professional website that helps you attract 
              more customers and grow your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
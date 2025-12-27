import { Globe, MapPin, MessageCircle, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Beautiful, mobile-first websites built specifically for your business needs.',
  },
  {
    icon: MapPin,
    title: 'Google Maps & Local Presence',
    description: 'Get found by local customers with proper business listings and map integration.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp & Call Integration',
    description: 'Make it easy for customers to reach you with one-click WhatsApp and phone integration.',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance & Updates',
    description: 'Ongoing support to keep your website running smoothly with regular updates.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to succeed online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 lg:p-8 hover:border-teal-500 transition-colors group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors"
                >
                  <Icon className="text-teal-400" size={24} />
                </motion.div>
                <h3 className="text-xl text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
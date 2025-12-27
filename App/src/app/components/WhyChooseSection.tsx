import { Check, Zap, Clock, IndianRupee, Smartphone, Users } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Users,
    title: 'Built for Local Businesses',
    description: 'Designed specifically for small business owners who need a strong online presence.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Quality websites at prices that make sense for small businesses.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your website up and running quickly—no long waiting periods.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Design',
    description: 'Your customers browse on their phones. Your website will look great on any device.',
  },
  {
    icon: Clock,
    title: 'Ongoing Support',
    description: 'We are here to help you succeed with continuous support and updates.',
  },
  {
    icon: Check,
    title: 'Easy Communication',
    description: 'No confusing technical talk. We keep things simple and clear.',
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Why Choose Forgeit
          </h2>
          <p className="text-xl text-gray-400">
            We make your online success our priority
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-teal-500 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-teal-500/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    <Icon className="text-teal-400" size={20} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
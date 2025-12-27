import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const demoSites = [
  {
    title: 'Restaurant Website',
    description: 'Modern design with menu, location, and online ordering integration.',
    image: 'https://images.unsplash.com/photo-1613274554329-70f997f5789f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzY2NzMyNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Restaurant',
  },
  {
    title: 'Local Store Website',
    description: 'Showcase products, services, and make it easy for customers to find you.',
    image: 'https://images.unsplash.com/photo-1578303106101-56e5d0788a21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGxvY2FsJTIwc2hvcHxlbnwxfHx8fDE3NjY4MzIwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Retail Store',
  },
  {
    title: 'Clinic Website',
    description: 'Professional design with appointment booking and service information.',
    image: 'https://images.unsplash.com/photo-1755190121589-ee9ef0aaa5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwb2ZmaWNlfGVufDF8fHx8MTc2NjgzMjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'Medical Clinic',
  },
];

export function DemoSection() {
  return (
    <section id="demo" className="py-20 lg:py-32 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Demo Websites
          </h2>
          <p className="text-xl text-gray-400">
            See what your business website could look like
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoSites.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-teal-500 transition-colors group"
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-teal-400 mb-2">{demo.type}</div>
                <h3 className="text-xl text-white mb-2">{demo.title}</h3>
                <p className="text-gray-400 mb-4">{demo.description}</p>
                <button className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors group/btn">
                  View Demo
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
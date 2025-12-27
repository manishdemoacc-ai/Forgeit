import { useState } from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      business: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400">
            Ready to take your business online? Let's talk!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 border border-gray-800 rounded-xl p-6 lg:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="+91 9876543201"
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-gray-300 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="Your Business"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Have questions? We're here to help. Reach out via any of these channels:
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/918610336533"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-950 border border-gray-800 rounded-xl hover:border-teal-500 transition-colors group"
              >
                <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <MessageCircle className="text-teal-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">WhatsApp</div>
                  <div className="text-white">+91 8610336533</div>
                </div>
              </a>

              <a
                href="tel:+918610336533"
                className="flex items-center gap-4 p-4 bg-gray-950 border border-gray-800 rounded-xl hover:border-teal-500 transition-colors group"
              >
                <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <Phone className="text-teal-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Phone</div>
                  <div className="text-white">+91 8610336533</div>
                </div>
              </a>

              <a
                href="mailto:hello@forgeit.com"
                className="flex items-center gap-4 p-4 bg-gray-950 border border-gray-800 rounded-xl hover:border-teal-500 transition-colors group"
              >
                <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                  <Mail className="text-teal-400" size={24} />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white">hello@forgeit.com</div>
                </div>
              </a>
            </div>

            <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl p-6">
              <p className="text-gray-300">
                <span className="text-teal-400">Office Hours:</span><br />
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
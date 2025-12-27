import logo from 'figma:asset/19271aaaaca150418a4c41ca5494640694270b99.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Demo', href: '#demo' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'facebook.com' },
    { name: 'Instagram', href: 'instagram.com' },
    { name: 'Twitter', href: 'x.com' },
    { name: 'LinkedIn', href: 'in.linked.com' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Forgeit" className="h-10 w-auto mb-4" />
            <p className="text-gray-400 mb-4 max-w-md">
              Built strong. Built online.
            </p>
            <p className="text-gray-500 text-sm">
              Helping local businesses establish a strong online presence with simple, 
              affordable websites and digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white mb-4">Connect</h3>
            <div className="space-y-2 mb-6">
              <p className="text-gray-400">hello@forgeit.com</p>
              <p className="text-gray-400">+91 8610336533</p>
            </div>
            <h4 className="text-white mb-3">Follow Us</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Forgeit. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
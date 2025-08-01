'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Portfolio', href: '/portfolio' },
  ];

  const services = [
    { name: 'Energy Solutions', href: '/services#energy' },
    { name: 'Construction', href: '/services#construction' },
    { name: 'Technology', href: '/services#technology' },
    { name: 'Financial Services', href: '/services#finance' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pathmark Advisory</h3>
                <p className="text-sm text-gray-400">Co. Ltd</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Path to Bringing Your Vision to Life. We provide comprehensive consulting 
              and project execution services across multiple industries.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-sm">D'Mayors Estate, Games Village, Abuja</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span className="text-sm">+234000000000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <span className="text-sm">contact@pathmarkadvisory.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/team"
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers"
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services#consulting"
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  General Consulting
                </Link>
              </li>
              <li>
                <Link 
                  href="/services#lobbying"
                  className="text-gray-300 hover:text-accent transition-colors duration-300"
                >
                  Government Relations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <p className="text-gray-300 mb-6">
              Stay updated with our latest projects and insights.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
            <Link href="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Pathmark Advisory Co. Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
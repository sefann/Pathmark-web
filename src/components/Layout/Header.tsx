'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Our Values', href: '/about#values' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Energy Solutions', href: '/services/energy' },
        { name: 'Construction', href: '/services/construction' },
        { name: 'Technology', href: '/services/technology' },
        { name: 'Finance', href: '/services/finance' },
        { name: 'Government Relations', href: '/services/government' },
        { name: 'Consulting', href: '/services/consulting' },
        { name: 'Warehousing & Logistics', href: '/services/warehousing-logistics' }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      dropdown: [
        { name: 'Energy & Mining', href: '/industries#energy' },
        { name: 'Construction & Infrastructure', href: '/industries#construction' },
        { name: 'Technology & Digital', href: '/industries#technology' },
        { name: 'Financial Services', href: '/industries#finance' },
        { name: 'Government & Public Sector', href: '/industries#government' }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
  ];

  const isActive = (href: string) => pathname === href;

  const handleDropdownOpen = (itemName: string) => {
    setOpenDropdown(itemName);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-14 lg:h-16">
                               {/* Logo */}
                                           <Link href="/" className="flex items-center">
              <div className="w-32 h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                               <img 
                  src="/logo.svg" 
                  alt="Pathmark Advisory Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => handleDropdownOpen(item.name)}
                    onMouseLeave={handleDropdownClose}
                  >
                    <button
                      className={`flex items-center space-x-1 font-medium transition-colors duration-300 text-sm ${
                        isActive(item.href)
                          ? 'text-primary'
                          : isScrolled
                          ? 'text-gray-700 hover:text-primary'
                          : 'text-white hover:text-accent'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={handleDropdownClose}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary-50 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative font-medium transition-colors duration-300 text-sm ${
                      isActive(item.href)
                        ? 'text-primary'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-white hover:text-accent'
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-sm px-4 py-2">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                                                 <button
                           onClick={() => handleDropdownOpen(item.name)}
                           className={`w-full text-left px-4 py-2 font-medium transition-colors flex items-center justify-between ${
                             isActive(item.href)
                               ? 'text-primary bg-primary-50'
                               : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                           }`}
                         >
                          <span>{item.name}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                  className="block px-8 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 font-medium transition-colors text-sm ${
                          isActive(item.href)
                            ? 'text-primary bg-primary-50'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link href="/contact" className="btn-primary w-full text-center block text-sm">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  Zap, 
  Building, 
  Cpu, 
  DollarSign, 
  Users, 
  ArrowRight,
  Target,
  Award,
  Globe
} from 'lucide-react';

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Zap,
      title: 'Energy',
      description: 'Comprehensive energy solutions and renewable energy consulting',
      href: '/services#energy',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Infrastructure development and construction project management',
      href: '/services#construction',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Cpu,
      title: 'Technology',
      description: 'Digital transformation and technology implementation services',
      href: '/services#technology',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'Financial consulting and investment advisory services',
      href: '/services#finance',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic business consulting and organizational development',
      href: '/services#consulting',
      color: 'from-indigo-400 to-blue-500'
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'We help you define and execute your long-term strategic goals with precision and clarity.'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Our track record of successful project delivery speaks to our commitment to excellence.'
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Deep understanding of the Nigerian market with international best practices.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned professionals with decades of combined experience across industries.'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '5', label: 'Industries Served' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-accent opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              The Path to Bringing Your{' '}
              <span className="text-accent">Vision</span> to Life
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional consulting and project execution services across Energy, 
              Construction, Technology, Finance, and Government Relations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Request Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                View Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions across multiple industries, 
              helping businesses achieve their goals through expert consulting and execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <div className="bg-white rounded-xl shadow-lg p-8 card-hover group cursor-pointer h-full">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 flex items-center text-primary group-hover:text-accent transition-colors">
                        <span className="font-semibold">Learn More</span>
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-primary-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Choose Pathmark Advisory?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with international best practices to deliver 
              exceptional results for our clients across Nigeria and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
                             Let&apos;s discuss how we can help you achieve your business goals 
               with our comprehensive consulting and project execution services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

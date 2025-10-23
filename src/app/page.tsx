'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import StatisticsSection from '@/components/StatisticsSection';
import { useState, useEffect } from 'react';
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
  // const [statsRef, statsInView] = useInView({ threshold: 0.1 }); // Unused for now
  const [partnersRef, partnersInView] = useInView({ threshold: 0.1 });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Debug video loading
  useEffect(() => {
    console.log('Video state:', { videoLoaded, videoError });
  }, [videoLoaded, videoError]);
  
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const servicesList = ['Energy', 'Construction', 'Technology', 'Finance', 'Government Relations'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % servicesList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [servicesList.length]);

  const services = [
    {
      icon: Zap,
      title: 'Energy',
      description: 'Comprehensive energy solutions including mining, oil & gas, and renewable energy',
      href: '/services/energy',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Infrastructure development and construction project management',
      href: '/services/construction',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Cpu,
      title: 'Technology',
      description: 'Digital transformation and technology implementation services',
      href: '/services/technology',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'Financial consulting and investment advisory services',
      href: '/services/finance',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Strategic business consulting and organizational development',
      href: '/services/consulting',
      color: 'from-indigo-400 to-blue-500'
    }
  ];

  // Added Warehousing & Logistics service to home grid
  services.push({
    icon: Building,
    title: 'Warehousing & Logistics',
    description: 'Storage, distribution, trucking, and heavy equipment moving solutions',
    href: '/services/warehousing-logistics',
    color: 'from-amber-500 to-rose-500'
  });

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
    { number: '100+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '5', label: 'Industries Served', icon: Building }
  ];

  const trustedPartners = [
    { name: 'Dangote Group', logo: '/logos/dangote.svg' },
    { name: 'First Bank', logo: '/logos/firstbank.svg' },
    { name: 'Intavalto', logo: '/logos/intavalto.svg' },
    { name: 'Intavalto Luxe', logo: '/logos/intavaltoluxe.svg' },
    { name: 'Mama Mia', logo: '/logos/mamamia.svg' },
    { name: 'New Age', logo: '/logos/newage.svg' },
    { name: 'VG Energy', logo: '/logos/vgenergy.svg' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center' }}
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          onError={(e) => {
            console.error('Video loading error:', e);
            setVideoError(true);
          }}
          onEnded={(e) => {
            // Force restart if loop fails
            const video = e.target as HTMLVideoElement;
            video.currentTime = 0;
            video.play().catch(console.error);
          }}
        >
          <source src="/videos/home-banner.mp4?v=2" type="video/mp4" />
        </video>
        
        {/* Fallback background image only if video fails to load */}
        {videoError && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}
          ></div>
        )}
        <div className="absolute inset-0 bg-black/70"></div>
        
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
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed text-center">
              Professional consulting and project execution services across{' '}
              <span className="inline-block min-w-[400px] text-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentServiceIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl"
                  >
                    {servicesList[currentServiceIndex].split('').map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ 
                          duration: 0.1, 
                          delay: index * 0.1,
                          ease: "easeIn"
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                </AnimatePresence>
              </span>
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-center text-white font-semibold">
              Investment Opportunities Available for Local & International Clients
            </p>
            <div className="flex justify-center items-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Explore Investment Opportunities
                <ArrowRight className="ml-2" size={20} />
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
      <section ref={servicesRef} className="section-padding relative overflow-hidden">
        {/* Background with gradient and spiral/web design */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50"></div>
        <div className="absolute inset-0 opacity-30">
          {/* Spiral/Web pattern */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Spiral lines */}
              <path d="M100,100 Q300,50 500,150 Q700,100 900,200 Q1100,150 1200,300" stroke="url(#spiralGradient1)" strokeWidth="2" fill="none" opacity="0.4"/>
              <path d="M50,200 Q250,150 450,250 Q650,200 850,300 Q1050,250 1200,400" stroke="url(#spiralGradient2)" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M0,300 Q200,250 400,350 Q600,300 800,400 Q1000,350 1200,500" stroke="url(#spiralGradient3)" strokeWidth="2" fill="none" opacity="0.4"/>
              
              {/* Web-like connecting lines */}
              <line x1="200" y1="100" x2="400" y2="300" stroke="url(#webGradient1)" strokeWidth="1" opacity="0.2"/>
              <line x1="600" y1="150" x2="800" y2="350" stroke="url(#webGradient2)" strokeWidth="1" opacity="0.2"/>
              <line x1="300" y1="250" x2="700" y2="450" stroke="url(#webGradient3)" strokeWidth="1" opacity="0.2"/>
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="spiralGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="spiralGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5"/>
                </linearGradient>
                <linearGradient id="spiralGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#EF4444" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="webGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="webGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                </linearGradient>
                <linearGradient id="webGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Additional subtle overlay patterns */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-radial from-red-200/20 to-transparent rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-purple-200/20 to-transparent rounded-full blur-lg"></div>
        </div>
        
        <div className="container-custom relative z-10">
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

      {/* Investment Opportunities Section */}
      <section className="section-padding text-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/investment.png')`
          }}
        ></div>
        
        {/* Darker overlay with reduced transparency for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Investment Opportunities
            </h2>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              We offer exclusive investment opportunities across all our service areas for both local and international clients. 
              Partner with us to access high-growth sectors and strategic projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
            >
              <h3 className="text-sm font-bold mb-2">Energy & Mining</h3>
              <p className="text-primary-100 text-xs leading-relaxed">
                Mining operations, renewable energy, and infrastructure development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
            >
              <h3 className="text-sm font-bold mb-2">Construction</h3>
              <p className="text-primary-100 text-xs leading-relaxed">
                Infrastructure projects, real estate, and construction ventures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
            >
              <h3 className="text-sm font-bold mb-2">Technology</h3>
              <p className="text-primary-100 text-xs leading-relaxed">
                Digital transformation, fintech, and technology startups.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
            >
              <h3 className="text-sm font-bold mb-2">Finance</h3>
              <p className="text-primary-100 text-xs leading-relaxed">
                Banking, insurance, and financial technology sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
            >
              <h3 className="text-sm font-bold mb-2">Government</h3>
              <p className="text-primary-100 text-xs leading-relaxed">
                Public-private partnerships and government projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
            >
              <h3 className="text-2xl font-bold mb-2">Global</h3>
              <p className="text-primary-100 text-xs leading-relaxed">
                International partnerships and cross-border opportunities.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="/contact" className="bg-white text-primary hover:bg-primary-100 transition-all duration-300 text-lg sm:text-xl font-bold px-6 sm:px-12 py-4 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl border-2 border-white/20 backdrop-blur-sm">
                <span className="block sm:inline">Start Your Investment</span>
                <span className="block sm:inline sm:ml-1">Journey</span>
                <ArrowRight className="ml-2 sm:ml-3 inline" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatisticsSection 
        stats={stats}
      />

      {/* Why Choose Us Section */}
      <section ref={whyRef} className="section-padding bg-white text-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
              Why Choose Pathmark Advisory?
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
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
                  <h3 className="text-xl font-bold text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section ref={partnersRef} className="py-12 lg:py-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-lg"
            />
            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-32 right-1/3 w-28 h-28 bg-gradient-to-r from-indigo-200/25 to-purple-200/25 rounded-full blur-lg"
            />
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px"
              }}
            />
          </div>

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
              className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 relative">
              <span className="relative z-10">Trusted by Industry Leaders</span>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-lg blur-xl"
              />
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto relative z-10">
              We work with leading companies across various sectors, building lasting partnerships 
              that drive mutual success and growth.
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-12 items-center"
            >
              {/* Duplicate logos for seamless loop */}
              {[...trustedPartners, ...trustedPartners].map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={partnersInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex-shrink-0 w-72 h-48 flex items-center justify-center"
                >
                     <img
                       src={partner.logo}
                       alt={partner.name}
                       className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                       onError={(e) => {
                         console.error(`Failed to load logo: ${partner.logo}`);
                         e.currentTarget.style.display = 'none';
                       }}
                     />
                </motion.div>
              ))}
            </motion.div>
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
            <div className="flex justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

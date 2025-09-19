'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  HardHat, 
  Truck, 
  Users, 
  Leaf,
  Settings,
  ArrowRight,
  CheckCircle,
  Diamond,
  Zap,
  Mountain,
  Gem
} from 'lucide-react';

export default function MiningPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [capabilitiesRef, capabilitiesInView] = useInView({ threshold: 0.1 });
  const [mineralsRef, mineralsInView] = useInView({ threshold: 0.1 });

  const capabilities = [
    {
      icon: MapPin,
      title: 'Exploration & Geological Surveys',
      description: 'We conduct comprehensive mineral exploration programs, including geological mapping, geochemical sampling, geophysical surveys, and core drilling. Our expert team uses cutting-edge tools and data analytics to evaluate mineral deposits and assess commercial viability, laying the foundation for informed decision-making and successful project planning.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: HardHat,
      title: 'Mine Planning & Development',
      description: 'Pathmark offers full-spectrum mine development services, from conceptual design to construction and operation planning. We develop optimized mine layouts, access roads, pit designs, ventilation plans, and tailings management systems. Our team ensures compliance with safety and environmental standards while maximizing operational efficiency and resource recovery.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Truck,
      title: 'Procurement & Project Management',
      description: 'We manage the sourcing and delivery of mining equipment, construction materials, and support services. Our procurement solutions focus on cost efficiency, quality assurance, and timely delivery. From feasibility through execution, we coordinate contractors, manage timelines, monitor budgets, and ensure the successful execution of mining infrastructure and production projects.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Leaf,
      title: 'Environmental & Community Impact Advisory',
      description: 'Pathmark integrates sustainability into mining operations by conducting Environmental and Social Impact Assessments (ESIA), community engagement, and regulatory compliance advisory. We help clients develop Environmental Management Plans (EMP) and community benefit schemes to maintain strong relationships with host communities and regulators.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Operational Support & Workforce Deployment',
      description: 'We provide skilled manpower and technical support to enhance day-to-day mining operations. Our services include equipment operators, field engineers, safety officers, maintenance personnel, and logistics coordinators. We also offer remote site support, workforce training, and productivity optimization to ensure smooth, compliant, and safe operations.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const minerals = [
    {
      name: 'Gold',
      image: '/images/gold.png',
      description: 'Precious metal mining and processing'
    },
    {
      name: 'Tin',
      image: '/images/Tin.png',
      description: 'Industrial tin mining'
    },
    {
      name: 'Limestone',
      image: '/images/Limestone.png',
      description: 'Construction and industrial limestone'
    },
    {
      name: 'Coal',
      image: '/images/coal.png',
      description: 'Thermal and metallurgical coal'
    },
    {
      name: 'Gypsum',
      image: '/images/Gypsum.png',
      description: 'Construction gypsum mining'
    },
    {
      name: 'Feldspar',
      image: '/images/Feldspar.png',
      description: 'Ceramic and glass feldspar'
    },
    {
      name: 'Quarrying',
      image: '/images/quarrying.png',
      description: 'Aggregate and construction materials'
    },
    {
      name: 'Industrial Minerals',
      image: '/images/industrial minerals.png',
      description: 'Specialized industrial minerals'
    },
    {
      name: 'Quartz',
      image: '/images/Quartz.png',
      description: 'High-purity quartz extraction'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Mining Scene */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/mining-banner.png')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-primary/80"></div>
        
        {/* Animated Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full opacity-60"
              animate={{
                x: [0, Math.random() * 1000],
                y: [0, Math.random() * 800],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Mining
              <span className="block text-accent">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive mining solutions from exploration to production, 
              delivering sustainable value through expert geological surveys, 
              mine planning, and operational excellence.
            </p>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-full text-lg font-semibold">
                Discover Our Mining Capabilities
              </div>
            </motion.div>
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

             {/* Mining Capabilities */}
       <section ref={capabilitiesRef} className="section-padding relative overflow-hidden">
         {/* Animated Background */}
         <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
           {/* Floating Elements */}
           <div className="absolute inset-0 overflow-hidden">
             {[...Array(15)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute w-4 h-4 bg-accent/10 rounded-full"
                 animate={{
                   x: [0, Math.random() * 200 - 100],
                   y: [0, Math.random() * 200 - 100],
                   scale: [1, 1.5, 1],
                   opacity: [0.1, 0.3, 0.1],
                 }}
                 transition={{
                   duration: Math.random() * 10 + 15,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: Math.random() * 5,
                 }}
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                 }}
               />
             ))}
           </div>
           
           {/* Geometric Patterns */}
           <div className="absolute inset-0 opacity-5">
             <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
             <div className="absolute top-20 right-20 w-24 h-24 border-2 border-accent transform rotate-45"></div>
             <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-primary rounded-full"></div>
             <div className="absolute bottom-10 right-1/3 w-16 h-16 border-2 border-accent transform rotate-12"></div>
           </div>
         </div>
         
         <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Mining Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From exploration to production, we provide end-to-end mining solutions 
              that combine technical expertise with sustainable practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent/20 hover:scale-105">
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={40} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {capability.description}
                    </p>
                    
                    
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minerals We Support */}
      <section ref={mineralsRef} className="section-padding bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mineralsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Minerals We Support
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive mining expertise across a wide range of valuable minerals 
              and industrial materials, each with specialized extraction and processing capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {minerals.map((mineral, index) => (
              <motion.div
                key={mineral.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={mineralsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={mineral.image}
                      alt={mineral.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{mineral.name}</h3>
                    </div>
                  </div>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    {mineral.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Unlock Your Mining Potential?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Let's discuss how our comprehensive mining capabilities can help you 
              achieve your extraction goals with safety, efficiency, and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Your Mining Project
                <ArrowRight className="ml-2 inline" size={20} />
              </button>
                             <a 
                 href="/brochures/mining-brochure.pdf" 
                 download="Pathmark-Mining-Services-Brochure.pdf"
                 className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 inline-block"
               >
                 Download Mining Brochure
               </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Sun, 
  Wind, 
  Zap, 
  Leaf, 
  Battery,
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

export default function RenewableEnergyPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1 });

  const renewableServices = [
    {
      icon: Sun,
      title: 'Solar Energy Solutions',
      description: 'Comprehensive solar power systems including photovoltaic installations, solar thermal systems, and solar farm development. We provide end-to-end solutions from feasibility studies to installation and maintenance.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Wind,
      title: 'Wind Energy Projects',
      description: 'Wind farm development and wind turbine installations for both onshore and offshore applications. Our expertise includes site assessment, turbine selection, grid integration, and operational optimization.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Battery,
      title: 'Energy Storage Systems',
      description: 'Advanced battery storage solutions and energy management systems to optimize renewable energy utilization. We implement smart grid technologies and energy storage for grid stability and peak demand management.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Leaf,
      title: 'Biomass & Bioenergy',
      description: 'Sustainable biomass energy solutions including biogas production, waste-to-energy facilities, and biofuel processing. We help clients convert organic waste into valuable energy resources.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Hydroelectric Power',
      description: 'Small-scale and micro-hydroelectric power systems for communities and industrial applications. Our solutions include dam design, turbine installation, and water resource management.',
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: Globe,
      title: 'Energy Efficiency Consulting',
      description: 'Comprehensive energy efficiency audits and optimization strategies to reduce energy consumption and costs. We help organizations implement sustainable energy practices and achieve carbon reduction goals.',
      color: 'from-teal-400 to-green-500'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Significant reduction in energy costs through renewable sources and improved efficiency.'
    },
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Reduce carbon footprint and contribute to a sustainable future for generations to come.'
    },
    {
      icon: CheckCircle,
      title: 'Energy Independence',
      description: 'Reduce dependence on fossil fuels and achieve greater energy security and stability.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Access to cutting-edge renewable energy technologies and sustainable solutions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Renewable Energy */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/50 to-primary/80"></div>
        
        {/* Animated Energy Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-green-400 rounded-full opacity-70"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 200 - 100],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '0%',
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
            <div className="mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Sun size={48} className="text-white" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              Renewable
              <span className="block text-green-400">Energy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Sustainable energy solutions that power the future while preserving our planet. 
              From solar and wind to biomass and energy storage, we deliver comprehensive 
              renewable energy systems for a cleaner, greener tomorrow.
            </p>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold">
                Explore Renewable Solutions
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

      {/* Renewable Energy Services */}
      <section ref={servicesRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Renewable Energy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive renewable energy solutions designed to meet your sustainability 
              goals while delivering reliable, cost-effective power generation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renewableServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-green-600 group-hover:text-green-700 transition-colors">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="section-padding bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Benefits of Renewable Energy
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover the advantages of transitioning to renewable energy solutions 
              and how they can transform your business and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-green-100 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Solar Installations' },
              { number: '50+', label: 'Wind Projects' },
              { number: '100+', label: 'Energy Storage Systems' },
              { number: '30%', label: 'Average Cost Reduction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
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
              Ready to Go Green?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Let's discuss how renewable energy solutions can reduce your costs, 
              improve your sustainability, and contribute to a cleaner future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
                Start Your Energy Project
                <ArrowRight className="ml-2 inline" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Get Energy Audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
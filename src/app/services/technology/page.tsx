'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  Cpu, 
  Shield, 
  Cloud, 
  Home, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Globe,
  Users,
  Award,
  Target,
  BarChart3,
  Clock,
  Database,
  Server,
  Lock,
  Wifi,
  Smartphone,
  Monitor,
  Zap,
  Settings,
  Network,
  Key,
  Eye,
  AlertTriangle
} from 'lucide-react';

export default function TechnologyPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });

  const technologyServices = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Tailored cybersecurity solutions that reduce risk, ensure compliance, and safeguard data across cloud and on-premise systems.',
      overview: 'We help organizations protect their digital infrastructure with comprehensive security measures and regulatory compliance.',
      features: [
        'Security audits & risk assessments',
        'Network and infrastructure security',
        'Cloud security implementation',
        'Endpoint protection',
        'Identity & access management (IAM)',
        'Data encryption & privacy controls',
        'Regulatory compliance (NDPR, ISO 27001)',
        'Incident response and recovery',
        'Security awareness training'
      ],
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Cloud,
      title: 'Enterprise IT Infrastructure & Cloud Solutions',
      description: 'Planning, development, deployment, and management of IT environments supporting modern business operations.',
      overview: 'Comprehensive solutions for both on-premise data centres and cloud-based platforms to optimize business operations.',
      features: [
        'Data centre development & management',
        'Cloud architecture & migration',
        'SaaS, PaaS deployment',
        'Hybrid & multi-cloud strategy',
        'Backup & disaster recovery',
        'ERP implementation',
        'API integration',
        'Monitoring & security'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Home,
      title: 'Smart Home Solutions',
      description: 'Intelligent automation systems that integrate lighting, security, energy management, and smart appliances.',
      overview: 'We offer comprehensive smart home services that create seamless, automated living environments.',
      features: [
        'Design and configuration of smart environments',
        'Installation of automated lighting and climate systems',
        'Integrated security systems with motion sensors',
        'Voice and mobile-controlled devices',
        'Smart metering and energy optimization',
        'Remote access and monitoring',
        'Single ecosystem integration'
      ],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const infrastructureServices = [
    {
      icon: Database,
      title: 'Data Centre Development & Management',
      description: 'Complete data centre solutions from design to operations',
      services: [
        'Architecture of secure, scalable, and energy-efficient data centres',
        'Physical infrastructure setup (power, cooling, racks, servers)',
        'Implementation of physical and cyber security controls',
        'Ongoing monitoring, maintenance, and uptime assurance',
        'Energy use reduction, capacity planning, and performance tuning'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud services and migration support',
      services: [
        'Planning and executing transitions to cloud platforms (AWS, Azure, Google Cloud)',
        'SaaS, PaaS deployment tailored to business needs',
        'Hybrid & multi-cloud strategy for flexibility and redundancy',
        'Cloud-based data protection and disaster recovery',
        'Real-time system performance tracking and threat detection'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Settings,
      title: 'Enterprise Solutions',
      description: 'Business-focused technology implementations',
      services: [
        'ERP system implementation and optimization',
        'API integration and development',
        'Business process automation',
        'Legacy system modernization',
        'Digital transformation consulting'
      ],
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Assessment & Planning',
      description: 'Comprehensive technology needs analysis and strategic planning',
      duration: '2-4 weeks'
    },
    {
      icon: BarChart3,
      title: 'Design & Architecture',
      description: 'Technical architecture design and solution planning',
      duration: '3-6 weeks'
    },
    {
      icon: Shield,
      title: 'Implementation',
      description: 'Secure deployment with testing and quality assurance',
      duration: '4-12 weeks'
    },
    {
      icon: Clock,
      title: 'Support & Optimization',
      description: 'Ongoing support, monitoring, and performance optimization',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      title: 'Banking Cybersecurity Implementation - Lagos',
      description: 'Comprehensive cybersecurity overhaul for a major Nigerian bank, including NDPR compliance and ISO 27001 certification.',
      results: ['100% NDPR compliance', 'ISO 27001 certification achieved', 'Zero security breaches', 'Enhanced customer trust'],
      category: 'Cybersecurity'
    },
    {
      title: 'Cloud Migration - Manufacturing Company',
      description: 'Successful migration of enterprise systems to cloud platform, improving efficiency and reducing costs.',
      results: ['40% cost reduction', '99.9% uptime achieved', 'Improved scalability', 'Enhanced disaster recovery'],
      category: 'Cloud Solutions'
    },
    {
      title: 'Smart Home Complex - Abuja',
      description: 'Complete smart home automation for a luxury residential complex with integrated security and energy management.',
      results: ['50 smart homes automated', '30% energy savings', 'Enhanced security', 'Premium market positioning'],
      category: 'Smart Home'
    }
  ];

  const stats = [
    { number: '200+', label: 'Technology Projects', icon: Cpu },
    { number: '99.9%', label: 'System Uptime', icon: Clock },
    { number: '50+', label: 'Client Partnerships', icon: Users },
    { number: '100%', label: 'Security Compliance', icon: Shield }
  ];

  return (
    <div className="pt-16">
             {/* Hero Section */}
       <section 
         ref={heroRef}
         className="relative min-h-screen flex items-center justify-center overflow-hidden"
       >
         {/* Background Image with Animation */}
         <div className="absolute inset-0 bg-black/50"></div>
         <div className="absolute inset-0">
           <div 
             className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
             style={{
               backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
             }}
           ></div>
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-blue-800/60"></div>
           
           {/* Animated Technology Elements */}
           <div className="absolute inset-0 overflow-hidden">
             {[...Array(12)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70"
                 animate={{
                   x: [0, Math.random() * 300 - 150],
                   y: [0, Math.random() * 300 - 150],
                   opacity: [0.7, 0, 0.7],
                 }}
                 transition={{
                   duration: Math.random() * 10 + 8,
                   repeat: Infinity,
                   ease: "linear",
                   delay: Math.random() * 4,
                 }}
                 style={{
                   left: `${Math.random() * 100}%`,
                   top: `${Math.random() * 100}%`,
                 }}
               />
             ))}
           </div>
         </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology services spanning cybersecurity, cloud solutions, and smart home automation. 
              Driving digital transformation across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Technology Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="#services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Driving Digital Transformation
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We help organizations protect their digital infrastructure with tailored cybersecurity solutions, 
                optimize operations with cloud technology, and enhance lifestyles with smart home automation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From enterprise IT infrastructure to personal smart home solutions, we deliver cutting-edge 
                technology that drives efficiency, security, and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600">Technology Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-gray-600">System Uptime</div>
                </div>
              </div>
            </motion.div>
                         <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="relative overflow-hidden rounded-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                   alt="Technology Infrastructure" 
                   className="w-full h-64 object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 right-4">
                   <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                       <Shield size={32} className="text-red-500 mx-auto mb-2" />
                       <div className="font-semibold text-gray-800">Cybersecurity</div>
                     </div>
                     <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                       <Cloud size={32} className="text-blue-500 mx-auto mb-2" />
                       <div className="font-semibold text-gray-800">Cloud Solutions</div>
                     </div>
                     <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                       <Home size={32} className="text-purple-500 mx-auto mb-2" />
                       <div className="font-semibold text-gray-800">Smart Home</div>
                     </div>
                     <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                       <Database size={32} className="text-green-500 mx-auto mb-2" />
                       <div className="font-semibold text-gray-800">Infrastructure</div>
                     </div>
                   </div>
                 </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" ref={servicesRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your specific needs and drive digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {technologyServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                                     <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                     <div className="relative h-48 overflow-hidden">
                       <img 
                         src={
                           service.title === 'Cybersecurity' 
                             ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                             : service.title === 'Enterprise IT Infrastructure & Cloud Solutions'
                             ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
                             : 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                         }
                         alt={service.title}
                         className="w-full h-full object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                       <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                         <Icon size={32} className="text-white" />
                       </div>
                     </div>
                     <div className="p-8">
                       <h3 className="text-2xl font-bold text-primary mb-4">
                         {service.title}
                       </h3>
                       <p className="text-gray-600 mb-6 leading-relaxed">
                         {service.description}
                       </p>
                       <p className="text-gray-700 mb-6 leading-relaxed">
                         {service.overview}
                       </p>
                       <ul className="space-y-2">
                         {service.features.map((feature, idx) => (
                           <li key={idx} className="flex items-center space-x-2">
                             <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                             <span className="text-gray-700 text-sm">{feature}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                </motion.div>
              );
            })}
          </div>

          {/* Infrastructure Sub-services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Enterprise IT Infrastructure Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {infrastructureServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                                       <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                     <div className="relative h-32 overflow-hidden">
                       <img 
                         src={
                           service.title === 'Data Centre Development & Management'
                             ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
                             : service.title === 'Cloud Solutions'
                             ? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
                             : 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                         }
                         alt={service.title}
                         className="w-full h-full object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                       <div className={`absolute top-3 right-3 w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                         <Icon size={24} className="text-white" />
                       </div>
                     </div>
                     <div className="p-6">
                       <h4 className="text-xl font-bold text-primary mb-3">
                         {service.title}
                       </h4>
                       <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                         {service.description}
                       </p>
                       <ul className="space-y-1">
                         {service.services.map((item, idx) => (
                           <li key={idx} className="flex items-center space-x-2">
                             <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                             <span className="text-gray-700 text-xs">{item}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
                   </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Technology Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering successful technology projects from assessment to optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-block bg-primary-50 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    {step.duration}
                  </div>
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
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon size={48} className="text-accent mx-auto mb-4" />
                  <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg text-primary-100">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects delivering real results for our clients across Nigeria's technology sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                   <div className="relative h-48 overflow-hidden">
                     <img 
                       src={
                         study.category === 'Cybersecurity'
                           ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                           : study.category === 'Cloud Solutions'
                           ? 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
                           : 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                       }
                       alt={study.title}
                       className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                     <div className="absolute top-4 right-4">
                       {study.category === 'Cybersecurity' && <Shield size={48} className="text-white drop-shadow-lg" />}
                       {study.category === 'Cloud Solutions' && <Cloud size={48} className="text-white drop-shadow-lg" />}
                       {study.category === 'Smart Home' && <Home size={48} className="text-white drop-shadow-lg" />}
                     </div>
                   </div>
                  <div className="p-6">
                    <div className="inline-block bg-primary-50 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {study.category}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

             {/* CTA Section */}
       <section className="section-padding relative text-white overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-800"></div>
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
         <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive technology solutions can help you enhance security, 
              optimize operations, and drive digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Technology Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Technology Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
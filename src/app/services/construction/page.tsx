'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  Building, 
  Home, 
  Settings, 
  Palette, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Globe,
  Users,
  Award,
  Target,
  BarChart3,
  Shield,
  Clock,
  Hammer,
  MapPin,
  FileText,
  Users2,
  Monitor,
  Speaker,
  Camera,
  Wrench,
  Truck,
  HardHat
} from 'lucide-react';

export default function ConstructionPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });

  const constructionServices = [
    {
      icon: Building,
      title: 'General Construction',
      description: 'High-quality residential, commercial, and civil infrastructure projects through our trusted network of construction partners.',
      overview: 'We provide end-to-end construction management handling every phase from initial concept and design to full project execution and final delivery.',
      features: [
        'Coordination of architectural and engineering designs',
        'Project planning, scheduling, and timeline control',
        'Building construction (residential homes, office complexes, warehouses)',
        'Development of roads, drainage, and essential utility infrastructure',
        'Quality assurance, compliance monitoring, and on-site safety implementation'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Home,
      title: 'Real Estate Development',
      description: 'Comprehensive real estate solutions spanning development, investment advisory, and asset management.',
      overview: 'We cater to individuals, developers, investors, and institutional clients with end-to-end real estate services.',
      features: [
        'Property acquisition and due diligence',
        'Real estate investment advisory',
        'Residential and commercial project development',
        'Urban planning and master plan support',
        'Property marketing and sales coordination',
        'Lease and tenancy management',
        'Real estate market research and feasibility studies'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'Full-spectrum project management services for real estate and infrastructure developments.',
      overview: 'We work closely with clients, contractors, and consultants to manage complexity, reduce risk, and maintain full control over scope, resources, and outcomes.',
      features: [
        'Project initiation, scope definition, and planning',
        'Budget control and resource management',
        'Procurement and contractor coordination',
        'Site supervision and progress reporting',
        'Risk mitigation and change management',
        'Post-construction audits and project close-out'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Palette,
      title: 'Interior Decoration Services',
      description: 'Professional interior decoration services tailored for individuals, corporate organizations, and private enterprises.',
      overview: 'We focus on creating functional, elegant, and personalized spaces that reflect style and purpose.',
      features: [
        'Modern home interior design and decoration',
        'Executive office and commercial space design',
        'Audio-Visual (AV) Systems integration',
        'Home Cinema installations',
        'Brand image enhancement through interior design',
        'Seamless technology integration for immersive experiences'
      ],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const constructionTypes = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential complexes',
      examples: ['Single-family homes', 'Multi-family units', 'Luxury residences', 'Gated communities'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial facilities',
      examples: ['Office complexes', 'Shopping centers', 'Warehouses', 'Industrial facilities'],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Truck,
      title: 'Infrastructure Development',
      description: 'Civil engineering and public infrastructure projects',
      examples: ['Roads and highways', 'Bridges and tunnels', 'Drainage systems', 'Utility infrastructure'],
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Planning & Design',
      description: 'Comprehensive project planning, architectural design, and feasibility studies',
      duration: '4-8 weeks'
    },
    {
      icon: BarChart3,
      title: 'Pre-Construction',
      description: 'Permits, contractor selection, material procurement, and site preparation',
      duration: '6-12 weeks'
    },
    {
      icon: Shield,
      title: 'Construction',
      description: 'Project execution with quality control, safety monitoring, and progress tracking',
      duration: '12-52 weeks'
    },
    {
      icon: Clock,
      title: 'Completion',
      description: 'Final inspections, punch list completion, and project handover',
      duration: '2-4 weeks'
    }
  ];

  const caseStudies = [
    {
      title: 'Luxury Residential Complex - Abuja',
      description: 'End-to-end development of a 50-unit luxury residential complex with modern amenities and sustainable design.',
      results: ['50 luxury units completed', 'On-time delivery', '15% under budget', 'Premium market positioning'],
      category: 'Residential'
    },
    {
      title: 'Commercial Office Tower - Lagos',
      description: '20-story commercial office tower with state-of-the-art facilities and LEED certification.',
      results: ['20 floors completed', 'LEED Gold certification', '100% occupancy rate', 'Award-winning design'],
      category: 'Commercial'
    },
    {
      title: 'Infrastructure Development - Port Harcourt',
      description: 'Major road network and drainage system development improving urban connectivity.',
      results: ['10km road network', 'Improved drainage', 'Reduced flooding', 'Enhanced accessibility'],
      category: 'Infrastructure'
    }
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed', icon: Building },
    { number: '95%', label: 'On-Time Delivery', icon: Clock },
    { number: '50+', label: 'Client Partnerships', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Grid Images */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 grid grid-cols-3 gap-0">
          {/* Residential Construction Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-blue-800/60"></div>
          </div>
          
          {/* Commercial Construction Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/60 to-green-800/60"></div>
          </div>
          
          {/* Infrastructure Development Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/60 to-orange-800/60"></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building size={48} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Construction & Infrastructure
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction and real estate development services. 
              From concept to completion, we build Nigeria's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Project
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
                Building Nigeria's Infrastructure
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Through our trusted network of construction partners, Pathmark delivers high-quality 
                residential, commercial, and civil infrastructure projects across Nigeria.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our expertise ensures that all projects meet regulatory standards, safety protocols, 
                and client expectations for time, budget, and quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-gray-600">On-Time Delivery</div>
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
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Building size={32} className="text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Construction</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Home size={32} className="text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Real Estate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Settings size={32} className="text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Management</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Palette size={32} className="text-purple-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Interior Design</div>
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
              Our Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction and real estate solutions designed to meet your specific needs 
              and deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {constructionServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                      <Icon size={32} className="text-white" />
                    </div>
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
                </motion.div>
              );
            })}
          </div>

          {/* Construction Types */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Construction Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {constructionTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
                      <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-3">
                        {type.title}
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {type.description}
                      </p>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700 text-xs">{example}</span>
                          </li>
                        ))}
                      </ul>
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
              Our Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering successful construction projects from concept to completion.
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
              Real projects delivering real results for our clients across Nigeria's construction sector.
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
                  <div className={`h-48 flex items-center justify-center ${
                    study.category === 'Residential' ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                    study.category === 'Commercial' ? 'bg-gradient-to-br from-green-100 to-green-200' :
                    'bg-gradient-to-br from-orange-100 to-orange-200'
                  }`}>
                    {study.category === 'Residential' && <Home size={64} className="text-blue-500" />}
                    {study.category === 'Commercial' && <Building size={64} className="text-green-500" />}
                    {study.category === 'Infrastructure' && <Truck size={64} className="text-orange-500" />}
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
      <section className="section-padding bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive construction and real estate services can help you 
              bring your project to life with quality, efficiency, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Construction Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Construction Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
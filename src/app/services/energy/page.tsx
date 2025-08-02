'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  Zap, 
  Sun, 
  Wind, 
  Battery, 
  TrendingUp, 
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
  Drill,
  PenLine,
  Factory,
  MapPin,
  FileText,
  Users2,
  Settings,
  Fuel
} from 'lucide-react';

export default function EnergyPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });

  const energyServices = [
    {
      icon: Drill,
      title: 'Mining Services',
      description: 'Comprehensive, end-to-end support for mineral exploration and development projects across Nigeria and resource-rich regions.',
      overview: 'Our mining advisory services guide clients through every stage of the mining lifecycle from early-stage geological investigations to full project execution and regulatory compliance.',
      features: [
        'Detailed geological assessments and resource evaluations',
        'Feasibility studies and economic viability analysis',
        'Exploration and mining license acquisition',
        'Regulatory compliance and ESG standards alignment',
        'Stakeholder engagement and community relations',
        'Risk mitigation and resource optimization'
      ],
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: Fuel,
      title: 'Oil & Gas Services',
      description: 'Support for upstream, midstream, and downstream oil and gas companies across the entire value chain.',
      overview: 'We help clients navigate complex regulatory environments, manage operational challenges, and execute strategic project plans to maximize efficiency and ensure compliance.',
      features: [
        'Licensing support and DPR (NUPRC) compliance',
        'Joint Venture (JV) structuring and investment facilitation',
        'Site development and pipeline infrastructure advisory',
        'Environmental impact assessments and stakeholder engagement',
        'Strategic sourcing and vendor management',
        'Operational optimization and risk reduction'
      ],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Sun,
      title: 'Renewable Energy Solutions',
      description: 'Design, engineering, and deployment of customized solar power solutions for various applications.',
      overview: 'From initial site assessment to system installation and maintenance, we deliver end-to-end, turnkey solutions tailored to each client\'s energy profile and goals.',
      features: [
        'Solar energy needs assessment and on-site surveys',
        'Feasibility studies and engineering design for solar farms',
        'Rooftop, off-grid and mini-grid installations',
        'Hybrid energy systems and power storage solutions',
        'Maintenance, monitoring, and performance optimization',
        'Financing models and regulatory compliance support'
      ],
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const oilGasServices = [
    {
      icon: Drill,
      title: 'Upstream Services',
      description: 'Support for oil and gas companies in the early stages of energy development',
      services: [
        'Licensing and DPR/NUPRC compliance',
        'Exploration project advisory and feasibility studies',
        'Joint Venture (JV) structuring and investment facilitation',
        'Site assessment and acquisition support',
        'Environmental Impact Assessments (EIA) and stakeholder engagement',
        'Vendor sourcing for drilling and exploration equipment'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: Fuel,
      title: 'Midstream Services',
      description: 'Solutions that facilitate the safe and efficient movement of crude oil and natural gas',
      services: [
        'Pipeline routing and development advisory',
        'Terminal and storage facility planning',
        'Right-of-way (RoW) acquisition and regulatory guidance',
        'Logistics coordination for transportation and product handling',
        'Infrastructure security and monitoring support'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Factory,
      title: 'Downstream Services',
      description: 'Assistance for downstream operators in optimizing operations and regulatory compliance',
      services: [
        'Refinery advisory and technical consulting',
        'Distribution and supply chain planning',
        'Strategic sourcing and vendor management for oilfield equipment',
        'Marketing and retail network development support',
        'Environmental compliance and sustainability integration'
      ],
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Assessment & Planning',
      description: 'Comprehensive energy needs analysis and strategic planning',
      duration: '2-4 weeks'
    },
    {
      icon: BarChart3,
      title: 'Feasibility Study',
      description: 'Technical and financial feasibility analysis with detailed cost projections',
      duration: '4-6 weeks'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Navigating permits, licenses, and regulatory requirements',
      duration: '6-8 weeks'
    },
    {
      icon: Clock,
      title: 'Implementation',
      description: 'Project execution with quality control and timeline management',
      duration: '12-24 weeks'
    }
  ];

  const caseStudies = [
    {
      title: 'Mineral Exploration Project - Northern Nigeria',
      description: 'Comprehensive mining advisory for a major mineral exploration project, including geological assessments, regulatory compliance, and stakeholder engagement.',
      results: ['Successful license acquisition', 'Community relations established', 'ESG standards compliance achieved', 'Project feasibility confirmed'],
      category: 'Mining'
    },
    {
      title: 'Oil & Gas Joint Venture - Niger Delta',
      description: 'Facilitated complex JV structuring and regulatory compliance for upstream oil and gas operations in the Niger Delta region.',
      results: ['DPR compliance achieved', 'JV successfully structured', 'Environmental approvals secured', 'Operational efficiency improved'],
      category: 'Oil & Gas'
    },
    {
      title: 'Solar Farm Development - Rural Electrification',
      description: 'End-to-end solar farm development providing clean energy to underserved communities while supporting sustainable development goals.',
      results: ['500KW solar farm installed', '1000+ households powered', 'Local jobs created', 'Carbon footprint reduced'],
      category: 'Renewable Energy'
    }
  ];

  const stats = [
    { number: '50+', label: 'Energy Projects', icon: Zap },
    { number: '100%', label: 'Regulatory Compliance', icon: Shield },
    { number: '25+', label: 'Client Partnerships', icon: Users },
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
          {/* Mining Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/60 to-orange-800/60"></div>
          </div>
          
          {/* Oil & Gas Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-cyan-800/60"></div>
          </div>
          
          {/* Renewable Energy Image */}
          <div className="relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/60 to-orange-600/60"></div>
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
              <Zap size={48} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Energy Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive energy solutions spanning mining, oil & gas, and renewable energy. 
              From exploration to execution, we power Nigeria's energy future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Energy Consultation
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
                Powering Nigeria's Energy Future
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Pathmark provides comprehensive, end-to-end support for energy projects across Nigeria and other resource-rich regions. 
                Our expertise spans the entire energy value chain.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From mineral exploration and oil & gas operations to renewable energy solutions, we help clients navigate complex 
                regulatory environments, optimize operations, and achieve sustainable outcomes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Energy Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">100%</div>
                  <div className="text-gray-600">Compliance Rate</div>
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
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Drill size={32} className="text-amber-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Mining</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Fuel size={32} className="text-blue-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Oil & Gas</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Sun size={32} className="text-yellow-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Renewable</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Shield size={32} className="text-green-500 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Compliance</div>
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
              Our Energy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive energy solutions designed to meet your specific needs and drive sustainable growth across all sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {energyServices.map((service, index) => {
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

          {/* Oil & Gas Sub-services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Oil & Gas Value Chain Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {oilGasServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 h-full">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                        <Icon size={24} className="text-white" />
                      </div>
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering successful energy projects from concept to completion.
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
              Real projects delivering real results for our clients across Nigeria's energy sector.
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
                    study.category === 'Mining' ? 'bg-gradient-to-br from-amber-100 to-orange-100' :
                    study.category === 'Oil & Gas' ? 'bg-gradient-to-br from-blue-100 to-cyan-100' :
                    'bg-gradient-to-br from-yellow-100 to-orange-100'
                  }`}>
                    {study.category === 'Mining' && <Drill size={64} className="text-amber-500" />}
                    {study.category === 'Oil & Gas' && <Fuel size={64} className="text-blue-500" />}
                    {study.category === 'Renewable Energy' && <Sun size={64} className="text-yellow-500" />}
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
              Ready to Power Your Energy Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive energy services can help you navigate complex 
              regulatory environments, optimize operations, and achieve sustainable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Energy Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Energy Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
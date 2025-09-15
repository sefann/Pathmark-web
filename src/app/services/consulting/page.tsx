'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  Briefcase, 
  RefreshCw, 
  Truck, 
  FileText, 
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
  Shield,
  Lock,
  PieChart,
  CreditCard,
  Building,
  Monitor,
  Zap,
  Settings,
  Network,
  Key,
  Eye,
  AlertTriangle,
  Search,
  TrendingUp,
  Gauge,
  ClipboardList
} from 'lucide-react';
import Banner from '@/components/Banner';
import StatisticsSection from '@/components/StatisticsSection';

export default function ConsultingPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });

  const consultingServices = [
    {
      icon: RefreshCw,
      title: 'Business Restructuring & Transformation',
      description: 'Comprehensive organizational transformation and restructuring solutions.',
      overview: 'We help organizations adapt to changing market conditions through strategic restructuring and transformation initiatives.',
      features: [
        'Organizational design and leadership realignment',
        'Process reengineering',
        'Change management and turnaround strategies',
        'Performance optimization',
        'Cultural transformation'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Truck,
      title: 'Procurement & Supply Chain Solutions',
      description: 'End-to-end procurement and supply chain optimization services.',
      overview: 'We optimize procurement processes and supply chain operations to reduce costs and improve efficiency.',
      features: [
        'Vendor management and bidding advisory',
        'Sourcing strategy and cost negotiation',
        'End-to-end procurement execution',
        'Supply chain optimization',
        'Risk management and compliance'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: FileText,
      title: 'Policy & Regulatory Advisory',
      description: 'Comprehensive policy development and regulatory compliance support.',
      overview: 'We help organizations navigate complex regulatory environments and develop effective policies.',
      features: [
        'Legislative and compliance support',
        'Regulatory risk assessments',
        'Policy drafting and stakeholder engagement',
        'Compliance monitoring and reporting',
        'Regulatory strategy development'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Search,
      title: 'Feasibility Studies & Market Research',
      description: 'Comprehensive market analysis and feasibility assessments.',
      overview: 'We provide data-driven insights to support strategic decision-making and investment planning.',
      features: [
        'Industry trend and competitor analysis',
        'Consumer behavior and demand forecasts',
        'Economic and technical viability assessments',
        'Market entry strategy development',
        'Investment opportunity evaluation'
      ],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of current state and challenges',
      duration: '1-2 weeks'
    },
    {
      icon: BarChart3,
      title: 'Strategy Development',
      description: 'Custom solution design and implementation planning',
      duration: '2-4 weeks'
    },
    {
      icon: RefreshCw,
      title: 'Implementation',
      description: 'Execution with change management and monitoring',
      duration: '4-12 weeks'
    },
    {
      icon: Clock,
      title: 'Optimization',
      description: 'Continuous improvement and performance monitoring',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      title: 'Business Transformation - Manufacturing Company',
      description: 'Comprehensive restructuring of a struggling manufacturing company, resulting in 40% cost reduction and improved profitability.',
      results: ['40% cost reduction', 'Improved profitability', 'Enhanced efficiency', 'Successful turnaround'],
      category: 'Transformation'
    },
    {
      title: 'Supply Chain Optimization - Retail Chain',
      description: 'End-to-end supply chain optimization for a national retail chain, reducing procurement costs by 25%.',
      results: ['25% cost reduction', 'Improved supplier relationships', 'Enhanced efficiency', 'Better inventory management'],
      category: 'Procurement'
    },
    {
      title: 'Market Entry Strategy - Tech Startup',
      description: 'Comprehensive market research and feasibility study that guided successful market entry for a fintech startup.',
      results: ['Successful market entry', 'Clear competitive positioning', 'Optimized pricing strategy', 'Enhanced market share'],
      category: 'Research'
    }
  ];

  const stats = [
    { number: '200+', label: 'Consulting Projects', icon: Briefcase },
    { number: '95%', label: 'Client Satisfaction', icon: TrendingUp },
    { number: '50+', label: 'Industry Sectors', icon: Building },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Banner
        title="General Consulting"
        subtitle="Strategic business consulting and organizational development services to drive your business growth."
        imagePath="/images/consulting-banner.png"
      />

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
                Driving Strategic Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We provide comprehensive consulting services that help organizations transform, optimize operations, 
                navigate regulatory challenges, and make data-driven strategic decisions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From business restructuring to market research, we deliver solutions that drive 
                organizational success, operational efficiency, and sustainable growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-gray-600">Consulting Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Consulting Services" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <RefreshCw size={32} className="text-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Transformation</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Truck size={32} className="text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Procurement</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <FileText size={32} className="text-purple-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Policy</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Search size={32} className="text-orange-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Research</div>
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
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to transform your organization and drive sustainable success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {consultingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img 
                        src={
                          service.title === 'Business Restructuring & Transformation' 
                            ? '/consulting/two.png'
                            : service.title === 'Procurement & Supply Chain Solutions'
                            ? '/consulting/one.png'
                            : service.title === 'Policy & Regulatory Advisory'
                            ? '/consulting/three.png'
                            : '/consulting/four.png'
                        }
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
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
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering successful consulting solutions from discovery to optimization.
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
      <StatisticsSection 
        stats={stats}
      />

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
              Real projects delivering real results for our clients across Nigeria's consulting sector.
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
                        study.category === 'Transformation'
                          ? 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                          : study.category === 'Procurement'
                          ? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                          : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                      }
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      {study.category === 'Transformation' && <RefreshCw size={48} className="text-white drop-shadow-lg" />}
                      {study.category === 'Procurement' && <Truck size={48} className="text-white drop-shadow-lg" />}
                      {study.category === 'Research' && <Search size={48} className="text-white drop-shadow-lg" />}
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive consulting services can help you restructure, 
              optimize operations, and drive sustainable organizational success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Consulting Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Consulting Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
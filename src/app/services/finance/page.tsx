'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  DollarSign, 
  Calculator, 
  TrendingUp, 
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
  Briefcase,
  ChartBar
} from 'lucide-react';

export default function FinancePage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });

  const financeServices = [
    {
      icon: Calculator,
      title: 'Cost Analysis & Audits',
      description: 'Detailed cost analysis to help businesses control spending and improve efficiency.',
      overview: 'We conduct comprehensive audits to identify cost-saving opportunities and ensure financial transparency.',
      features: [
        'Expenditure audits',
        'Cost-benefit analysis of operations',
        'Internal control reviews',
        'Compliance audits and financial health checks'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Budget Preparation',
      description: 'Strategic and operational budget creation for businesses and government entities.',
      overview: 'We work with organizations to create comprehensive budgets that drive financial success.',
      features: [
        'Annual and quarterly budgeting',
        'Expense tracking tools',
        'Budget variance analysis',
        'Multi-department coordination'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Excess Bank Charges Recovery',
      description: 'Audit business accounts for excessive or unauthorized bank fees and recover overcharges.',
      overview: 'We identify hidden charges and work with financial institutions to recover your money.',
      features: [
        'Detailed transaction analysis',
        'Identification of hidden or unlawful deductions',
        'Documentation and recovery facilitation',
        'Client representation in bank disputes',
        'Preventive strategies to avoid future overcharges'
      ],
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Building,
      title: 'Business Model & Plan Development',
      description: 'Investor-ready and operation-focused business models for startups and expanding businesses.',
      overview: 'We build comprehensive business plans that attract investors and guide successful execution.',
      features: [
        'Market and competitive research',
        'Revenue model structuring',
        'Operational planning and execution strategy',
        'Financial forecasts and funding roadmaps',
        'Investor pitch deck creation'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Financial Accounting & Bookkeeping',
      description: 'Accounting services ensuring transparency, compliance, and insight-driven decision-making.',
      overview: 'Comprehensive financial management services that keep your business compliant and informed.',
      features: [
        'Bookkeeping and financial statements preparation',
        'Payroll, invoicing, and accounts reconciliation',
        'Compliance with local and international standards',
        'Periodic financial reporting for stakeholders'
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: ChartBar,
      title: 'Financial Modelling',
      description: 'Dynamic and accurate financial models for startups, investors, and corporate entities.',
      overview: 'We create sophisticated financial models that drive strategic decision-making and investment success.',
      features: [
        'Investment analysis and ROI projections',
        'Scenario and sensitivity analysis',
        'Valuation models',
        'Mergers and acquisitions modelling'
      ],
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Assessment & Analysis',
      description: 'Comprehensive financial review and needs assessment',
      duration: '1-2 weeks'
    },
    {
      icon: BarChart3,
      title: 'Strategy Development',
      description: 'Custom financial strategy and solution planning',
      duration: '2-4 weeks'
    },
    {
      icon: Shield,
      title: 'Implementation',
      description: 'Execution with monitoring and quality assurance',
      duration: '4-8 weeks'
    },
    {
      icon: Clock,
      title: 'Ongoing Support',
      description: 'Continuous monitoring, reporting, and optimization',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      title: 'Bank Charges Recovery - Manufacturing Company',
      description: 'Successfully recovered ₦15 million in excess bank charges for a major manufacturing company through detailed audit and negotiation.',
      results: ['₦15 million recovered', '100% success rate', 'Preventive measures implemented', 'Enhanced banking relationship'],
      category: 'Recovery'
    },
    {
      title: 'Business Plan Development - Tech Startup',
      description: 'Comprehensive business plan and financial model that secured ₦50 million in funding for a Lagos-based tech startup.',
      results: ['₦50 million funding secured', 'Investor-ready documentation', 'Clear growth roadmap', 'Successful market entry'],
      category: 'Planning'
    },
    {
      title: 'Cost Analysis - Retail Chain',
      description: 'Comprehensive cost analysis and audit that identified ₦25 million in annual savings for a national retail chain.',
      results: ['₦25 million annual savings', 'Improved efficiency', 'Enhanced profitability', 'Streamlined operations'],
      category: 'Analysis'
    }
  ];

  const stats = [
    { number: '₦500M+', label: 'Recovered for Clients', icon: DollarSign },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '100+', label: 'Business Plans', icon: FileText },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 opacity-90"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-20"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign size={48} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Financial Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial solutions spanning cost analysis, budget preparation, bank charge recovery, 
              and business planning. Driving financial success across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Financial Consultation
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
                Driving Financial Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We provide comprehensive financial services that help businesses control costs, optimize budgets, 
                recover overcharges, and develop strategic business plans for growth and success.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From cost analysis and audits to financial modeling and business planning, we deliver 
                solutions that drive transparency, compliance, and profitability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">₦500M+</div>
                  <div className="text-gray-600">Recovered for Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Financial Services" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Calculator size={32} className="text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Cost Analysis</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <TrendingUp size={32} className="text-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Budget Planning</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Shield size={32} className="text-red-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Recovery</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Building size={32} className="text-purple-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Business Plans</div>
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
              Our Financial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to optimize your business performance and drive sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {financeServices.map((service, index) => {
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
                          service.title === 'Cost Analysis & Audits' 
                            ? 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                            : service.title === 'Budget Preparation'
                            ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                            : service.title === 'Excess Bank Charges Recovery'
                            ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                            : service.title === 'Business Model & Plan Development'
                            ? 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                            : service.title === 'Financial Accounting & Bookkeeping'
                            ? 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                            : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
              Our Financial Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering successful financial solutions from assessment to optimization.
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
              Real projects delivering real results for our clients across Nigeria's financial sector.
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
                        study.category === 'Recovery'
                          ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                          : study.category === 'Planning'
                          ? 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                          : 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                      }
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      {study.category === 'Recovery' && <Shield size={48} className="text-white drop-shadow-lg" />}
                      {study.category === 'Planning' && <Building size={48} className="text-white drop-shadow-lg" />}
                      {study.category === 'Analysis' && <Calculator size={48} className="text-white drop-shadow-lg" />}
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your Finances?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive financial services can help you control costs, 
              recover overcharges, and drive sustainable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Financial Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Financial Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
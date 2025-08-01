'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Building, 
  Cpu, 
  DollarSign, 
  Users, 
  Scale,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [activeService, setActiveService] = useState('energy');

  const services = [
    {
      id: 'energy',
      title: 'Energy Solutions',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      description: 'Comprehensive energy consulting and renewable energy solutions for sustainable development.',
      overview: 'We provide end-to-end energy consulting services, from feasibility studies to project implementation, helping clients navigate the complex energy landscape in Nigeria and West Africa.',
      offerings: [
        'Renewable Energy Project Development',
        'Energy Efficiency Audits',
        'Power Purchase Agreement (PPA) Negotiation',
        'Grid Integration Studies',
        'Energy Policy and Regulatory Consulting',
        'Solar and Wind Farm Development',
        'Energy Storage Solutions',
        'Carbon Credit Development'
      ],
      benefits: [
        'Reduced energy costs and carbon footprint',
        'Compliance with environmental regulations',
        'Access to green financing opportunities',
        'Enhanced energy security and reliability'
      ],
      caseStudy: {
        title: '50MW Solar Farm Development',
        description: 'Successfully developed a 50MW solar farm in Northern Nigeria, providing clean energy to over 100,000 households while creating 200+ local jobs.'
      }
    },
    {
      id: 'construction',
      title: 'Construction & Infrastructure',
      icon: Building,
      color: 'from-gray-400 to-gray-600',
      description: 'Infrastructure development and construction project management services.',
      overview: 'Our construction and infrastructure practice delivers complex projects from conception to completion, ensuring quality, safety, and timely delivery across various sectors.',
      offerings: [
        'Project Management and Supervision',
        'Construction Planning and Scheduling',
        'Quality Assurance and Control',
        'Cost Estimation and Budget Management',
        'Risk Assessment and Mitigation',
        'Contractor Selection and Management',
        'Infrastructure Development Consulting',
        'Green Building Certification'
      ],
      benefits: [
        'On-time and on-budget project delivery',
        'Enhanced project quality and safety',
        'Reduced construction risks and delays',
        'Compliance with international standards'
      ],
      caseStudy: {
        title: 'Multi-billion Naira Commercial Complex',
        description: 'Managed the construction of a 40-story commercial complex in Abuja, completed 6 months ahead of schedule and 15% under budget.'
      }
    },
    {
      id: 'technology',
      title: 'Technology Solutions',
      icon: Cpu,
      color: 'from-blue-400 to-purple-500',
      description: 'Digital transformation and technology implementation services.',
      overview: 'We help organizations leverage technology to improve efficiency, reduce costs, and gain competitive advantage through strategic digital transformation initiatives.',
      offerings: [
        'Digital Strategy Development',
        'Enterprise Software Implementation',
        'Business Process Automation',
        'Data Analytics and Business Intelligence',
        'Cybersecurity Consulting',
        'Cloud Migration Services',
        'Mobile App Development',
        'IoT and Smart Systems Integration'
      ],
      benefits: [
        'Improved operational efficiency',
        'Enhanced data-driven decision making',
        'Reduced operational costs',
        'Better customer experience and engagement'
      ],
      caseStudy: {
        title: 'Banking Digital Transformation',
        description: 'Led the digital transformation of a major Nigerian bank, implementing core banking systems that improved transaction processing by 300%.'
      }
    },
    {
      id: 'finance',
      title: 'Financial Services',
      icon: DollarSign,
      color: 'from-green-400 to-emerald-500',
      description: 'Financial consulting and investment advisory services.',
      overview: 'Our financial services practice provides comprehensive financial advisory, helping clients optimize their financial performance and access capital markets.',
      offerings: [
        'Financial Planning and Analysis',
        'Investment Advisory Services',
        'Merger and Acquisition Support',
        'Capital Raising and Fundraising',
        'Financial Risk Management',
        'Corporate Finance Consulting',
        'Treasury Management',
        'Financial Restructuring'
      ],
      benefits: [
        'Optimized financial performance',
        'Access to diverse funding sources',
        'Improved financial risk management',
        'Strategic financial decision support'
      ],
      caseStudy: {
        title: '$50M Capital Raise',
        description: 'Successfully raised $50 million in Series B funding for a Nigerian fintech startup, enabling expansion across 5 African countries.'
      }
    },
    {
      id: 'consulting',
      title: 'General Consulting',
      icon: Users,
      color: 'from-indigo-400 to-blue-500',
      description: 'Strategic business consulting and organizational development.',
      overview: 'Our general consulting practice helps organizations improve performance, solve complex problems, and achieve sustainable growth through strategic advisory services.',
      offerings: [
        'Strategic Planning and Execution',
        'Organizational Development',
        'Change Management',
        'Performance Improvement',
        'Market Entry Strategy',
        'Business Model Innovation',
        'Operational Excellence',
        'Leadership Development'
      ],
      benefits: [
        'Clear strategic direction and focus',
        'Improved organizational effectiveness',
        'Enhanced competitive positioning',
        'Sustainable growth and profitability'
      ],
      caseStudy: {
        title: 'Manufacturing Company Turnaround',
        description: 'Transformed a struggling manufacturing company, improving profitability by 250% and expanding market share from 15% to 35% within 18 months.'
      }
    },
    {
      id: 'government',
      title: 'Lobbying & Government Relations',
      icon: Scale,
      color: 'from-purple-400 to-pink-500',
      description: 'Government relations and regulatory advocacy services.',
      overview: 'We help clients navigate complex regulatory environments and build effective relationships with government stakeholders across West Africa.',
      offerings: [
        'Government Relations Strategy',
        'Regulatory Compliance Consulting',
        'Policy Analysis and Advocacy',
        'Stakeholder Engagement',
        'Public Affairs Management',
        'Legislative Monitoring',
        'Crisis Communication',
        'Public-Private Partnership Development'
      ],
      benefits: [
        'Improved regulatory compliance',
        'Enhanced government relationships',
        'Reduced regulatory risks',
        'Access to government opportunities'
      ],
      caseStudy: {
        title: 'Telecommunications License Acquisition',
        description: 'Successfully secured telecommunications operating licenses for a major international operator, facilitating $200M investment in Nigerian infrastructure.'
      }
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService) || services[0];
  const ActiveIcon = activeServiceData.icon;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive consulting and project execution services across six key areas, 
              designed to help you achieve your business objectives and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Service Content */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Service Header */}
              <div className="text-center mb-16">
                <div className={`w-24 h-24 bg-gradient-to-r ${activeServiceData.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <ActiveIcon size={48} className="text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                  {activeServiceData.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {activeServiceData.overview}
                </p>
              </div>

              {/* Service Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* What We Offer */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Briefcase className="text-primary" size={24} />
                    <h3 className="text-2xl font-bold text-primary">What We Offer</h3>
                  </div>
                  <ul className="space-y-3">
                    {activeServiceData.offerings.map((offering, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{offering}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Target className="text-accent" size={24} />
                    <h3 className="text-2xl font-bold text-primary">Key Benefits</h3>
                  </div>
                  <ul className="space-y-4">
                    {activeServiceData.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 mb-16">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-primary">Success Story</h3>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {activeServiceData.caseStudy.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {activeServiceData.caseStudy.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our {activeServiceData.title.toLowerCase()} can help 
              drive your business forward and achieve your strategic objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Request Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
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
  ShoppingCart,
  Truck,
  Home,
  Heart,
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function IndustriesPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [selectedIndustry, setSelectedIndustry] = useState('energy');

  const industries = [
    {
      id: 'energy',
      title: 'Energy & Natural Resources',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-900/20 to-orange-900/20',
      description: 'Powering Africa\'s future through sustainable energy solutions and natural resource development.',
      overview: 'We work with energy companies, government agencies, and international organizations to develop comprehensive energy strategies that balance economic growth with environmental sustainability.',
      expertise: [
        'Renewable Energy Development',
        'Oil & Gas Project Management',
        'Power Generation & Distribution',
        'Energy Policy & Regulation',
        'Carbon Trading & Sustainability',
        'Mining & Mineral Resources'
      ],
      challenges: [
        'Energy access and affordability',
        'Grid infrastructure development',
        'Regulatory compliance',
        'Environmental sustainability',
        'Technology integration'
      ],
      solutions: [
        'Comprehensive feasibility studies',
        'Stakeholder engagement strategies',
        'Financial structuring and funding',
        'Technology implementation',
        'Regulatory compliance support'
      ],
      caseStudy: {
        title: '50MW Solar Farm Development',
        result: 'Clean energy for 100,000+ households'
      }
    },
    {
      id: 'construction',
      title: 'Construction & Infrastructure',
      icon: Building,
      color: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-900/20 to-slate-900/20',
      description: 'Building the foundation for Africa\'s economic growth through world-class infrastructure projects.',
      overview: 'Our construction and infrastructure practice delivers complex projects across residential, commercial, and public sectors, ensuring quality, safety, and timely completion.',
      expertise: [
        'Project Management & Supervision',
        'Infrastructure Development',
        'Real Estate Development',
        'Public-Private Partnerships',
        'Construction Technology',
        'Quality Assurance & Safety'
      ],
      challenges: [
        'Project financing and funding',
        'Skilled labor shortage',
        'Material sourcing and logistics',
        'Regulatory approvals',
        'Quality control standards'
      ],
      solutions: [
        'Comprehensive project planning',
        'Contractor vetting and management',
        'Supply chain optimization',
        'Quality management systems',
        'Risk mitigation strategies'
      ],
      caseStudy: {
        title: '40-Story Commercial Complex',
        result: '6 months ahead of schedule, 15% under budget'
      }
    },
    {
      id: 'technology',
      title: 'Technology',
      icon: Cpu,
      color: 'from-blue-400 to-purple-500',
      bgGradient: 'from-blue-900/20 to-purple-900/20',
      description: 'Driving digital transformation across Africa through innovative technology solutions.',
      overview: 'We help organizations leverage cutting-edge technology to improve efficiency, reduce costs, and gain competitive advantage in the digital economy.',
      expertise: [
        'Digital Strategy & Transformation',
        'Enterprise Software Solutions',
        'Fintech & Digital Payments',
        'Cybersecurity & Data Protection',
        'Cloud Computing & Infrastructure',
        'AI & Machine Learning'
      ],
      challenges: [
        'Digital skills gap',
        'Legacy system integration',
        'Cybersecurity threats',
        'Infrastructure limitations',
        'Regulatory compliance'
      ],
      solutions: [
        'Comprehensive digital strategies',
        'Technology implementation roadmaps',
        'Staff training and development',
        'Security framework implementation',
        'Change management support'
      ],
      caseStudy: {
        title: 'Banking Digital Transformation',
        result: '300% improvement in transaction processing'
      }
    },
    {
      id: 'finance',
      title: 'Financial Services',
      icon: DollarSign,
      color: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-900/20 to-emerald-900/20',
      description: 'Enabling financial inclusion and economic growth through innovative financial solutions.',
      overview: 'Our financial services practice works with banks, fintech companies, and investment firms to develop strategies that drive growth and improve financial access.',
      expertise: [
        'Banking & Financial Institutions',
        'Fintech & Digital Banking',
        'Investment & Capital Markets',
        'Insurance & Risk Management',
        'Microfinance & Financial Inclusion',
        'Regulatory Compliance'
      ],
      challenges: [
        'Financial inclusion gaps',
        'Regulatory compliance',
        'Digital transformation needs',
        'Risk management',
        'Capital adequacy requirements'
      ],
      solutions: [
        'Strategic financial planning',
        'Digital transformation strategies',
        'Risk management frameworks',
        'Compliance solutions',
        'Capital raising support'
      ],
      caseStudy: {
        title: 'Fintech Series B Funding',
        result: '$50M raised for pan-African expansion'
      }
    },
    {
      id: 'public',
      title: 'Public & Private Enterprises',
      icon: Users,
      color: 'from-indigo-400 to-blue-500',
      bgGradient: 'from-indigo-900/20 to-blue-900/20',
      description: 'Strengthening institutions and enterprises for sustainable economic development.',
      overview: 'We work with government agencies, parastatals, and private enterprises to improve operational efficiency and service delivery.',
      expertise: [
        'Public Sector Reform',
        'Privatization & PPP Advisory',
        'Institutional Strengthening',
        'Performance Management',
        'Strategic Planning',
        'Change Management'
      ],
      challenges: [
        'Bureaucratic inefficiencies',
        'Limited resources',
        'Stakeholder alignment',
        'Change resistance',
        'Performance measurement'
      ],
      solutions: [
        'Organizational restructuring',
        'Process optimization',
        'Performance management systems',
        'Stakeholder engagement',
        'Capacity building programs'
      ],
      caseStudy: {
        title: 'Government Agency Reform',
        result: '40% improvement in service delivery'
      }
    },
    {
      id: 'consumer',
      title: 'Consumer Goods',
      icon: ShoppingCart,
      color: 'from-pink-400 to-red-500',
      bgGradient: 'from-pink-900/20 to-red-900/20',
      description: 'Helping consumer brands thrive in Africa\'s dynamic and growing markets.',
      overview: 'Our consumer goods practice helps brands navigate complex market dynamics, build distribution networks, and connect with African consumers.',
      expertise: [
        'Market Entry Strategy',
        'Brand Development & Marketing',
        'Distribution & Supply Chain',
        'Consumer Research & Insights',
        'Retail Strategy',
        'Product Innovation'
      ],
      challenges: [
        'Market fragmentation',
        'Distribution challenges',
        'Consumer behavior diversity',
        'Brand positioning',
        'Supply chain complexity'
      ],
      solutions: [
        'Market research and analysis',
        'Go-to-market strategies',
        'Distribution network development',
        'Brand positioning strategies',
        'Supply chain optimization'
      ],
      caseStudy: {
        title: 'FMCG Market Expansion',
        result: '300% increase in market penetration'
      }
    },
    {
      id: 'transportation',
      title: 'Transportation',
      icon: Truck,
      color: 'from-amber-400 to-orange-500',
      bgGradient: 'from-amber-900/20 to-orange-900/20',
      description: 'Connecting Africa through efficient and sustainable transportation solutions.',
      overview: 'We help transportation companies, logistics providers, and government agencies develop integrated transport systems that support economic growth.',
      expertise: [
        'Transport Infrastructure Planning',
        'Logistics & Supply Chain',
        'Public Transportation Systems',
        'Aviation & Maritime Services',
        'Smart Mobility Solutions',
        'Regulatory Framework Development'
      ],
      challenges: [
        'Infrastructure deficits',
        'Regulatory fragmentation',
        'Technology adoption',
        'Safety and security',
        'Environmental impact'
      ],
      solutions: [
        'Infrastructure development planning',
        'Regulatory harmonization',
        'Technology integration strategies',
        'Safety management systems',
        'Sustainable transport solutions'
      ],
      caseStudy: {
        title: 'Regional Transport Hub',
        result: '50% reduction in logistics costs'
      }
    },
    {
      id: 'realestate',
      title: 'Real Estate',
      icon: Home,
      color: 'from-teal-400 to-cyan-500',
      bgGradient: 'from-teal-900/20 to-cyan-900/20',
      description: 'Developing sustainable communities and commercial spaces across Africa.',
      overview: 'Our real estate practice provides comprehensive advisory services for residential, commercial, and mixed-use developments across urban and emerging markets.',
      expertise: [
        'Property Development Advisory',
        'Real Estate Investment',
        'Urban Planning & Design',
        'Property Management',
        'Real Estate Finance',
        'Market Analysis & Valuation'
      ],
      challenges: [
        'Land acquisition and titling',
        'Infrastructure development',
        'Financing and funding',
        'Regulatory approvals',
        'Market volatility'
      ],
      solutions: [
        'Due diligence and feasibility studies',
        'Financial structuring and funding',
        'Regulatory compliance support',
        'Project management services',
        'Market analysis and positioning'
      ],
      caseStudy: {
        title: 'Mixed-Use Development',
        result: '2,000 housing units delivered'
      }
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: Heart,
      color: 'from-rose-400 to-pink-500',
      bgGradient: 'from-rose-900/20 to-pink-900/20',
      description: 'Improving healthcare delivery and access across African communities.',
      overview: 'We work with healthcare providers, pharmaceutical companies, and government agencies to strengthen health systems and improve patient outcomes.',
      expertise: [
        'Healthcare System Strengthening',
        'Hospital & Clinic Development',
        'Health Technology Integration',
        'Pharmaceutical Supply Chain',
        'Health Insurance & Financing',
        'Public Health Policy'
      ],
      challenges: [
        'Healthcare access gaps',
        'Infrastructure limitations',
        'Skilled workforce shortage',
        'Funding constraints',
        'Technology adoption'
      ],
      solutions: [
        'Health system assessments',
        'Infrastructure development planning',
        'Workforce development programs',
        'Technology implementation',
        'Financing and funding strategies'
      ],
      caseStudy: {
        title: 'Regional Medical Center',
        result: 'Healthcare access for 500,000+ people'
      }
    },
    {
      id: 'social',
      title: 'Social Impact',
      icon: Globe,
      color: 'from-purple-400 to-indigo-500',
      bgGradient: 'from-purple-900/20 to-indigo-900/20',
      description: 'Creating positive social impact through sustainable development initiatives.',
      overview: 'Our social impact practice works with NGOs, development organizations, and social enterprises to design and implement programs that create lasting positive change.',
      expertise: [
        'Social Impact Assessment',
        'Community Development',
        'Education & Skills Development',
        'Environmental Sustainability',
        'Gender Equality & Inclusion',
        'Impact Measurement & Evaluation'
      ],
      challenges: [
        'Sustainable funding models',
        'Community engagement',
        'Impact measurement',
        'Stakeholder alignment',
        'Scale and sustainability'
      ],
      solutions: [
        'Impact strategy development',
        'Community engagement frameworks',
        'Monitoring and evaluation systems',
        'Partnership development',
        'Capacity building programs'
      ],
      caseStudy: {
        title: 'Youth Skills Development',
        result: '10,000+ youth trained and employed'
      }
    }
  ];

  const activeIndustry = industries.find(industry => industry.id === selectedIndustry) || industries[0];
  const ActiveIcon = activeIndustry.icon;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-800 opacity-90"></div>
        <div className="relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Delivering specialized expertise across diverse sectors to drive growth, 
              innovation, and sustainable development throughout Africa.
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Industry Selector */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary hover:shadow-md'
                  }`}
                >
                  <Icon size={32} className="mx-auto mb-2" />
                  <h3 className="font-semibold text-sm">{industry.title}</h3>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Industry Content */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Industry Header */}
              <div className={`relative rounded-2xl p-12 mb-16 bg-gradient-to-r ${activeIndustry.bgGradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
                <div className="relative z-10 text-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${activeIndustry.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <ActiveIcon size={48} className="text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                    {activeIndustry.title}
                  </h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    {activeIndustry.description}
                  </p>
                </div>
              </div>

              {/* Industry Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-primary mb-6">Industry Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {activeIndustry.overview}
                  </p>

                  {/* Case Study Highlight */}
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <TrendingUp className="text-primary" size={24} />
                      <h4 className="text-xl font-bold text-primary">Recent Success</h4>
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">{activeIndustry.caseStudy.title}</h5>
                    <p className="text-gray-700">{activeIndustry.caseStudy.result}</p>
                  </div>
                </div>

                {/* Our Expertise */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Our Expertise</h3>
                  <ul className="space-y-3">
                    {activeIndustry.expertise.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Key Challenges */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Key Challenges</h3>
                  <ul className="space-y-4">
                    {activeIndustry.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Our Solutions */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Our Solutions</h3>
                  <ul className="space-y-4">
                    {activeIndustry.solutions.map((solution, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
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
              Partner With Industry Experts
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to tackle your industry-specific challenges? Let&apos;s discuss how our 
              specialized expertise can drive your success in the {activeIndustry.title.toLowerCase()} sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Industry Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Banner from '@/components/Banner';
import StatisticsSection from '@/components/StatisticsSection';
import { 
  Building2, 
  FileText, 
  Eye, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Globe,
  Award,
  Target,
  BarChart3,
  Clock,
  Shield,
  Lock,
  Handshake,
  Megaphone,
  Scale,
  Network,
  Key,
  AlertTriangle,
  Search,
  TrendingUp,
  Gauge,
  ClipboardList,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star
} from 'lucide-react';

export default function GovernmentPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });

  const governmentServices = [
    {
      icon: FileText,
      title: 'Policy Influence & Advocacy',
      description: 'Strategic engagement with government stakeholders to influence policy outcomes.',
      overview: 'We help clients effectively engage with ministries, legislators, and regulatory agencies to shape policy decisions.',
      features: [
        'Strategic engagement with ministries, legislators, and regulatory agencies',
        'Preparation of position papers, legislative memos, and policy briefs',
        'Representation in public hearings, government consultations, and forums',
        'Policy analysis and strategic recommendations',
        'Stakeholder mapping and engagement planning'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Legislative & Regulatory Monitoring',
      description: 'Comprehensive tracking of legislative and regulatory developments.',
      overview: 'We provide ongoing monitoring and analysis of government actions that may impact your business.',
      features: [
        'Ongoing tracking of bills, regulatory changes, and budget provisions',
        'Risk analysis and early alerts on proposed laws or administrative actions',
        'Advisory on legal compliance and regulatory alignment',
        'Impact assessment and strategic response planning',
        'Regular reporting and stakeholder briefings'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Users,
      title: 'Stakeholder Engagement Strategy',
      description: 'Strategic relationship building with key government decision-makers.',
      overview: 'We facilitate meaningful connections between clients and government stakeholders.',
      features: [
        'Mapping of key decision-makers, influencers, and institutional allies',
        'Facilitation of high-level meetings, briefings, and technical roundtables',
        'Relationship-building between clients and government actors',
        'Strategic communication and messaging development',
        'Long-term relationship management and maintenance'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Public Sector Opportunity Facilitation',
      description: 'Access to government contracts and public-private partnerships.',
      overview: 'We help clients identify and secure public sector opportunities and partnerships.',
      features: [
        'Identification and pursuit of government contracts and PPPs',
        'Guidance through procurement processes and bidding frameworks',
        'Support for donor, NGO, and development partner engagement',
        'Partnership structuring and negotiation support',
        'Compliance and documentation assistance'
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Handshake,
      title: 'Coalition Building & Public Campaigns',
      description: 'Strategic alliance building and public advocacy campaigns.',
      overview: 'We help build powerful coalitions and execute effective public campaigns.',
      features: [
        'Building strategic alliances with industry groups, advocacy coalitions, and civil society organizations',
        'Development of grassroots campaigns and public support initiatives',
        'Media and strategic communications advisory',
        'Campaign strategy and execution support',
        'Stakeholder mobilization and engagement'
      ],
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Shield,
      title: 'Ethical Compliance & Anti-Corruption Advisory',
      description: 'Ensuring ethical engagement and compliance with anti-corruption standards.',
      overview: 'We help clients maintain the highest standards of ethical engagement with government.',
      features: [
        'Ensuring full adherence to Nigerian laws, public service codes, and anti-bribery conventions',
        'Training and internal audits for clients engaging with public officials',
        'Structuring lobbying engagements that meet international best practices',
        'Compliance monitoring and reporting systems',
        'Ethical guidelines and policy development'
      ],
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  const processSteps = [
    {
      icon: Target,
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of government landscape and strategic planning',
      duration: '2-4 weeks'
    },
    {
      icon: Network,
      title: 'Stakeholder Mapping',
      description: 'Identification and engagement with key government decision-makers',
      duration: '3-6 weeks'
    },
    {
      icon: FileText,
      title: 'Policy Advocacy',
      description: 'Strategic engagement and policy influence activities',
      duration: 'Ongoing'
    },
    {
      icon: Clock,
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring and relationship maintenance',
      duration: 'Ongoing'
    }
  ];

  const caseStudies = [
    {
      title: 'Energy Policy Advocacy - Oil & Gas Sector',
      description: 'Successfully influenced key energy policy reforms, resulting in improved regulatory framework for oil and gas operations.',
      results: ['Policy reforms implemented', 'Regulatory clarity achieved', 'Industry standards improved', 'Stakeholder alignment secured'],
      category: 'Policy'
    },
    {
      title: 'PPP Facilitation - Infrastructure Development',
      description: 'Facilitated successful public-private partnership for major infrastructure project worth ₦50 billion.',
      results: ['₦50 billion PPP secured', 'Multi-stakeholder agreement', 'Project implementation started', 'Economic impact achieved'],
      category: 'PPP'
    },
    {
      title: 'Regulatory Compliance - Financial Services',
      description: 'Comprehensive regulatory monitoring and compliance support for major financial institution.',
      results: ['100% compliance achieved', 'Risk mitigation implemented', 'Regulatory relationships strengthened', 'Operational efficiency improved'],
      category: 'Compliance'
    }
  ];

  const stats = [
    { number: '100+', label: 'Policy Engagements', icon: FileText },
    { number: '95%', label: 'Success Rate', icon: TrendingUp },
    { number: '25+', label: 'Government Sectors', icon: Building2 },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];

  const whyPathmark = [
    {
      icon: Globe,
      title: 'Cross-sector Expertise',
      description: 'Deep knowledge across Energy, Finance, Construction, and Technology sectors'
    },
    {
      icon: Network,
      title: 'Trusted Network',
      description: 'Extensive network of policy experts, advisors, and former public officials'
    },
    {
      icon: Scale,
      title: 'Local + Global Standards',
      description: 'Local understanding combined with international best practices in policy advocacy'
    },
    {
      icon: Shield,
      title: 'Ethical Commitment',
      description: 'Unwavering commitment to ethical engagement and transparency'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Banner
        title="Lobbying & Government Relations"
        subtitle="Strategic engagement with public sector stakeholders to influence policy, navigate government systems, and secure access to public-sector opportunities with integrity, intelligence, and impact."
        imagePath="/images/government-banner.png"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
            Get Government Relations Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link href="#services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
            Explore Services
          </Link>
        </div>
      </Banner>

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
                Navigating Government with Integrity
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At Pathmark Advisory Co. Limited, we recognize that successful outcomes in today's complex environment 
                often depend on strategic engagement with public sector stakeholders.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether supporting a public-private partnership, shaping legislation, or facilitating institutional relationships, 
                we serve as trusted advisors and advocates for our clients' long-term interests.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-gray-600">Policy Engagements</div>
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
                  alt="Government Relations" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <FileText size={32} className="text-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Policy</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Users size={32} className="text-green-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Stakeholders</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Briefcase size={32} className="text-purple-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Opportunities</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <Shield size={32} className="text-orange-500 mx-auto mb-2" />
                      <div className="font-semibold text-gray-800">Compliance</div>
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
              Our Government Relations Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive lobbying and government relations solutions designed to influence policy and secure opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {governmentServices.map((service, index) => {
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
                          service.title === 'Policy Influence & Advocacy' 
                            ? 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                            : service.title === 'Legislative & Regulatory Monitoring'
                            ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                            : service.title === 'Stakeholder Engagement Strategy'
                            ? 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                            : service.title === 'Public Sector Opportunity Facilitation'
                            ? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                            : service.title === 'Coalition Building & Public Campaigns'
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

      {/* Why Pathmark Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Pathmark for Lobbying Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique combination of expertise, network, and ethical standards sets us apart in government relations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPathmark.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Government Relations Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to successful government engagement and policy influence.
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
      <section className="section-padding bg-white">
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
              Real projects delivering real results for our clients across Nigeria's government relations sector.
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
                <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={
                        study.category === 'Policy'
                          ? 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
                          : study.category === 'PPP'
                          ? 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                          : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                      }
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      {study.category === 'Policy' && <FileText size={48} className="text-white drop-shadow-lg" />}
                      {study.category === 'PPP' && <Briefcase size={48} className="text-white drop-shadow-lg" />}
                      {study.category === 'Compliance' && <Shield size={48} className="text-white drop-shadow-lg" />}
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
              Ready to Navigate Government Relations?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive government relations services can help you influence policy, 
              secure opportunities, and build strategic relationships with integrity and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Government Relations Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                View Government Relations Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Banner from '@/components/Banner';
import StatisticsSection from '@/components/StatisticsSection';
import { 
  Filter,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  ExternalLink,
  X,
  Zap,
  Building,
  Cpu,
  Scale,
  Briefcase,
  Award
} from 'lucide-react';

export default function PortfolioPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = [
    'All',
    'Energy',
    'Construction',
    'Technology',
    'Finance',
    'Government Relations',
    'General Consulting'
  ];

  const projects = [
    {
      id: 1,
      title: '50MW Solar Farm Development',
      category: 'Energy',
      client: 'Green Energy Nigeria Ltd',
      location: 'Kano State, Nigeria',
      year: '2023',
      value: '$75 Million',
      duration: '18 months',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      description: 'Led the development of a 50MW solar photovoltaic farm, providing clean energy to over 100,000 households while creating 200+ local jobs.',
      scope: [
        'Feasibility study and site assessment',
        'Environmental impact assessment',
        'Financial modeling and investor relations',
        'Grid integration and power purchase agreement',
        'Project management and execution',
        'Community engagement and stakeholder management'
      ],
      results: [
        '50MW of clean energy capacity added to the grid',
        '200+ direct jobs created during construction',
        '50+ permanent operational jobs',
        '15% reduction in local electricity costs',
        'Carbon emission reduction of 45,000 tons CO2/year'
      ],
      testimonial: {
        quote: "Pathmark Advisory's expertise was instrumental in bringing this project to life. Their comprehensive approach and deep understanding of the Nigerian energy sector made all the difference.",
        author: "Dr. Aminu Hassan, CEO, Green Energy Nigeria Ltd"
      }
    },
    {
      id: 2,
      title: 'Abuja Commercial Complex',
      category: 'Construction',
      client: 'Metropolitan Development Corp',
      location: 'Abuja, Nigeria',
      year: '2022',
      value: '₦15 Billion',
      duration: '24 months',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      description: 'Managed the construction of a 40-story mixed-use commercial complex featuring offices, retail spaces, and a hotel.',
      scope: [
        'Project planning and design coordination',
        'Contractor selection and management',
        'Quality assurance and safety management',
        'Budget control and cost optimization',
        'Timeline management and milestone tracking',
        'Stakeholder communication and reporting'
      ],
      results: [
        'Completed 6 months ahead of schedule',
        '15% under budget delivery',
        'Zero major safety incidents',
        'LEED Gold certification achieved',
        '2,000+ jobs created during construction'
      ],
      testimonial: {
        quote: "The project management expertise demonstrated by Pathmark Advisory was exceptional. They delivered a world-class facility on time and under budget.",
        author: "Engr. Folake Adebayo, Project Director, Metropolitan Development Corp"
      }
    },
    {
      id: 3,
      title: 'Banking Digital Transformation',
      category: 'Technology',
      client: 'Unity Bank Nigeria',
      location: 'Lagos, Nigeria',
      year: '2023',
      value: '$12 Million',
      duration: '12 months',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      description: 'Led comprehensive digital transformation initiative, implementing new core banking systems and mobile banking platform.',
      scope: [
        'Digital strategy development',
        'Core banking system implementation',
        'Mobile banking app development',
        'Staff training and change management',
        'Security and compliance framework',
        'Customer migration and support'
      ],
      results: [
        '300% improvement in transaction processing speed',
        '85% customer adoption of digital channels',
        '40% reduction in operational costs',
        '99.9% system uptime achieved',
        'Enhanced cybersecurity posture'
      ],
      testimonial: {
        quote: "Pathmark Advisory transformed our operations completely. We now offer world-class digital banking services that rival international standards.",
        author: "Mrs. Kemi Adeosun, MD/CEO, Unity Bank Nigeria"
      }
    },
    {
      id: 4,
      title: 'Fintech Series B Capital Raise',
      category: 'Finance',
      client: 'PayAfrica Technologies',
      location: 'Nigeria & Ghana',
      year: '2023',
      value: '$50 Million',
      duration: '8 months',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      description: 'Successfully raised $50 million in Series B funding for a leading African fintech company, enabling expansion across 5 countries.',
      scope: [
        'Investment strategy and positioning',
        'Financial modeling and valuation',
        'Investor identification and outreach',
        'Due diligence coordination',
        'Term sheet negotiation',
        'Legal and regulatory compliance'
      ],
      results: [
        '$50M Series B funding secured',
        'Expansion to 5 African countries',
        '200% increase in company valuation',
        'Strategic partnerships established',
        '500+ new jobs created across markets'
      ],
      testimonial: {
        quote: "The capital raising expertise of Pathmark Advisory was crucial to our success. They helped us secure funding that will fuel our pan-African expansion.",
        author: "Mr. Tunde Kehinde, Co-founder & CEO, PayAfrica Technologies"
      }
    },
    {
      id: 5,
      title: 'Manufacturing Company Turnaround',
      category: 'General Consulting',
      client: 'Nigerian Textiles Ltd',
      location: 'Kano, Nigeria',
      year: '2022',
      value: '₦2 Billion',
      duration: '18 months',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      description: 'Transformed a struggling textile manufacturing company, improving profitability by 250% and expanding market share significantly.',
      scope: [
        'Operational efficiency assessment',
        'Strategic restructuring plan',
        'Supply chain optimization',
        'Technology modernization',
        'Workforce development',
        'Market expansion strategy'
      ],
      results: [
        '250% improvement in profitability',
        'Market share increased from 15% to 35%',
        '1,200 jobs preserved and enhanced',
        '60% reduction in production costs',
        'New export markets established'
      ],
      testimonial: {
        quote: "Pathmark Advisory saved our company. Their strategic approach and hands-on support transformed us from near-bankruptcy to market leadership.",
        author: "Alhaji Musa Ibrahim, Chairman, Nigerian Textiles Ltd"
      }
    },
    {
      id: 6,
      title: 'Telecommunications License Acquisition',
      category: 'Government Relations',
      client: 'AfriTel Communications',
      location: 'Nigeria',
      year: '2022',
      value: '$200 Million',
      duration: '15 months',
      status: 'Completed',
      image: '/api/placeholder/600/400',
      description: 'Successfully secured telecommunications operating licenses for a major international operator, facilitating significant infrastructure investment.',
      scope: [
        'Regulatory landscape analysis',
        'License application preparation',
        'Stakeholder engagement strategy',
        'Government relations management',
        'Compliance framework development',
        'Public affairs coordination'
      ],
      results: [
        'Full telecommunications license secured',
        '$200M infrastructure investment facilitated',
        '5,000+ direct and indirect jobs created',
        'Enhanced telecommunications coverage',
        'Improved competition in telecom sector'
      ],
      testimonial: {
        quote: "The government relations expertise of Pathmark Advisory was invaluable. They navigated complex regulatory requirements seamlessly.",
        author: "Dr. James Mitchell, Regional Director, AfriTel Communications"
      }
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Energy': return Zap;
      case 'Construction': return Building;
      case 'Technology': return Cpu;
      case 'Finance': return DollarSign;
      case 'Government Relations': return Scale;
      case 'General Consulting': return Briefcase;
      default: return Award;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Banner
        title="Our Portfolio"
        subtitle="Explore our successful projects and transformational initiatives across multiple industries and sectors throughout Africa."
        imagePath="/images/portfolio-banner.png"
      />

      {/* Portfolio Stats */}
      <StatisticsSection 
        stats={[
          { number: '50+', label: 'Projects Completed' },
          { number: '₦2B+', label: 'Total Project Value' },
          { number: '25+', label: 'Happy Clients' },
          { number: '1,000+', label: 'Jobs Created' }
        ]}
        className="bg-gray-50"
      />

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">Featured Projects</h2>
            <div className="text-sm text-gray-600">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary'
                }`}
              >
                {category !== 'All' && (
                  <span className="w-4 h-4">
                    {(() => {
                      const Icon = getCategoryIcon(category);
                      return <Icon size={16} />;
                    })()}
                  </span>
                )}
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CategoryIcon size={48} className="text-primary opacity-50" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users size={14} />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={14} />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Calendar size={14} />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign size={14} />
                            <span className="font-semibold text-primary">{project.value}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{project.duration}</span>
                        <div className="flex items-center text-primary hover:text-accent transition-colors">
                          <span className="text-sm font-medium">View Details</span>
                          <ExternalLink size={14} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{selectedProject.title}</h3>
                  <p className="text-accent font-semibold text-lg">{selectedProject.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-6">
                    {(() => {
                      const Icon = getCategoryIcon(selectedProject.category);
                      return <Icon size={80} className="text-primary opacity-50" />;
                    })()}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedProject.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Project Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Client:</span>
                        <span className="font-medium">{selectedProject.client}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-medium">{selectedProject.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Year:</span>
                        <span className="font-medium">{selectedProject.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Value:</span>
                        <span className="font-medium text-primary">{selectedProject.value}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Status:</span>
                        <span className={`font-medium ${
                          selectedProject.status === 'Completed' ? 'text-green-600' : 'text-blue-600'
                        }`}>
                          {selectedProject.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">Project Scope</h4>
                  <ul className="space-y-2">
                    {selectedProject.scope.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-primary mb-4">Key Results</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Award size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {selectedProject.testimonial && (
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">Client Testimonial</h4>
                  <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed">
                    "{selectedProject.testimonial.quote}"
                  </blockquote>
                  <cite className="text-primary font-semibold">
                    — {selectedProject.testimonial.author}
                  </cite>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our portfolio of successful clients and let us help you achieve 
              your business objectives with our proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Start Your Project
              </a>
              <a href="/services" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
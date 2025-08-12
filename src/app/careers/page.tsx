'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Upload,
  Send,
  CheckCircle,
  Award,
  Target,
  Heart,
  TrendingUp,
  Globe
} from 'lucide-react';

export default function CareersPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    cv: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Energy Consultant',
      department: 'Energy Solutions',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2024-01-15',
      description: 'Lead energy sector consulting projects, develop renewable energy strategies, and manage client relationships across West Africa.',
      responsibilities: [
        'Lead energy sector consulting engagements',
        'Develop renewable energy project strategies',
        'Conduct feasibility studies and market analysis',
        'Manage client relationships and project delivery',
        'Mentor junior consultants and analysts',
        'Present findings to senior stakeholders'
      ],
      requirements: [
        'Master\'s degree in Engineering, Economics, or related field',
        '5+ years experience in energy sector consulting',
        'Strong analytical and problem-solving skills',
        'Excellent written and verbal communication',
        'Experience with renewable energy projects preferred',
        'Proficiency in financial modeling and analysis'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health insurance',
        'Professional development opportunities',
        'Flexible working arrangements',
        'Annual leave and travel allowances'
      ]
    },
    {
      id: 2,
      title: 'Construction Project Manager',
      department: 'Construction & Infrastructure',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '7+ years',
      posted: '2024-01-10',
      description: 'Oversee large-scale construction projects from planning to completion, ensuring quality, safety, and timely delivery.',
      responsibilities: [
        'Manage construction projects from inception to completion',
        'Coordinate with contractors, suppliers, and stakeholders',
        'Ensure compliance with safety and quality standards',
        'Monitor project budgets and timelines',
        'Prepare progress reports and presentations',
        'Resolve project issues and conflicts'
      ],
      requirements: [
        'Bachelor\'s degree in Civil Engineering or Construction Management',
        '7+ years experience in construction project management',
        'PMP certification preferred',
        'Strong leadership and team management skills',
        'Knowledge of construction laws and regulations',
        'Proficiency in project management software'
      ],
      benefits: [
        'Competitive salary package',
        'Health and life insurance',
        'Professional certification support',
        'Career advancement opportunities',
        'Project completion bonuses'
      ]
    },
    {
      id: 3,
      title: 'Digital Transformation Analyst',
      department: 'Technology Solutions',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '3+ years',
      posted: '2024-01-08',
      description: 'Support digital transformation initiatives for clients across various industries, focusing on process optimization and technology implementation.',
      responsibilities: [
        'Analyze current business processes and systems',
        'Develop digital transformation roadmaps',
        'Support technology implementation projects',
        'Conduct stakeholder interviews and workshops',
        'Prepare detailed analysis and recommendations',
        'Assist in change management activities'
      ],
      requirements: [
        'Bachelor\'s degree in Information Technology, Business, or related field',
        '3+ years experience in business analysis or consulting',
        'Knowledge of digital technologies and trends',
        'Strong analytical and problem-solving abilities',
        'Excellent presentation and communication skills',
        'Experience with process mapping and documentation'
      ],
      benefits: [
        'Competitive starting salary',
        'Training and certification opportunities',
        'Mentorship from senior consultants',
        'Health insurance coverage',
        'Performance-based incentives'
      ]
    },
    {
      id: 4,
      title: 'Financial Advisory Associate',
      department: 'Financial Services',
      location: 'Lagos, Nigeria',
      type: 'Full-time',
      experience: '2+ years',
      posted: '2024-01-05',
      description: 'Support financial advisory engagements including M&A transactions, capital raising, and financial restructuring projects.',
      responsibilities: [
        'Conduct financial analysis and modeling',
        'Prepare investment memorandums and presentations',
        'Support due diligence processes',
        'Research market trends and comparable transactions',
        'Assist in client meetings and presentations',
        'Maintain financial databases and models'
      ],
      requirements: [
        'Bachelor\'s degree in Finance, Economics, or Accounting',
        '2+ years experience in investment banking or corporate finance',
        'Strong financial modeling and analytical skills',
        'Proficiency in Excel, PowerPoint, and financial software',
        'CFA or similar certification preferred',
        'Excellent attention to detail'
      ],
      benefits: [
        'Competitive compensation package',
        'Performance bonuses',
        'Professional development support',
        'Health and dental insurance',
        'Flexible work arrangements'
      ]
    },
    {
      id: 5,
      title: 'Government Relations Specialist',
      department: 'Government Relations',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '4+ years',
      posted: '2024-01-03',
      description: 'Manage government relations activities, regulatory compliance, and stakeholder engagement for clients across various sectors.',
      responsibilities: [
        'Develop and maintain government relationships',
        'Monitor regulatory developments and policy changes',
        'Support license applications and regulatory approvals',
        'Coordinate stakeholder engagement activities',
        'Prepare regulatory compliance reports',
        'Represent clients in government meetings'
      ],
      requirements: [
        'Bachelor\'s degree in Law, Political Science, or Public Administration',
        '4+ years experience in government relations or public policy',
        'Strong understanding of Nigerian regulatory environment',
        'Excellent networking and relationship-building skills',
        'Strong written and verbal communication abilities',
        'Knowledge of regulatory processes and procedures'
      ],
      benefits: [
        'Attractive salary and allowances',
        'Government relations training',
        'Networking opportunities',
        'Health insurance coverage',
        'Professional development support'
      ]
    },
    {
      id: 6,
      title: 'Management Consultant - Entry Level',
      department: 'General Consulting',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '0-2 years',
      posted: '2024-01-01',
      description: 'Join our graduate program and develop consulting skills while working on diverse client engagements across multiple industries.',
      responsibilities: [
        'Support senior consultants on client engagements',
        'Conduct research and analysis',
        'Prepare presentations and reports',
        'Participate in client meetings and workshops',
        'Develop industry knowledge and expertise',
        'Complete structured training program'
      ],
      requirements: [
        'Bachelor\'s degree with excellent academic record',
        'Strong analytical and problem-solving skills',
        'Excellent communication and presentation abilities',
        'Proficiency in Microsoft Office suite',
        'Willingness to travel and work flexible hours',
        'Interest in business strategy and operations'
      ],
      benefits: [
        'Comprehensive graduate training program',
        'Mentorship from senior consultants',
        'Rapid career progression opportunities',
        'Competitive graduate salary',
        'Health insurance and benefits package'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparent communication.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in teamwork and the power of diverse perspectives to solve complex challenges.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We are committed to continuous learning and professional development for all team members.'
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Comprehensive health insurance',
    'Professional development and training',
    'Flexible working arrangements',
    'Annual leave and travel allowances',
    'Mentorship and career guidance',
    'Modern office environment',
    'Team building and social events'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData(prev => ({
      ...prev,
      cv: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        cv: null
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative section-padding text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/careers-banner.png')`
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
              Join Our Team
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Build your career with Africa&apos;s leading consulting firm. We&apos;re looking for 
              talented professionals who share our passion for excellence and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings" className="btn-secondary text-lg px-8 py-4">
                View Open Positions
              </a>
              <a href="#application" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Submit Application
              </a>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team of exceptional professionals working on impactful projects 
              that shape the future of business across Africa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
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
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Benefits Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across our practice areas and 
              find the perfect role to advance your professional journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
                    <p className="text-accent font-semibold">{job.department}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <Briefcase size={16} />
                    <span>{job.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <Clock size={16} />
                    <span>Posted {new Date(job.posted).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="btn-outline flex-1"
                  >
                    View Details
                  </button>
                  <a href="#application" className="btn-primary flex-1 text-center">
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Submit Your Application
              </h2>
              <p className="text-xl text-gray-600">
                Ready to join our team? Submit your application and we&apos;ll get back to you soon.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you! Your application has been submitted successfully. We&apos;ll review it and get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Sorry, there was an error submitting your application. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={applicationData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={applicationData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                      <option value="other">Other / General Application</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload CV/Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                    />
                    <label htmlFor="cv" className="cursor-pointer">
                      <span className="text-primary font-semibold">Click to upload</span>
                      <span className="text-gray-500"> or drag and drop</span>
                      <p className="text-sm text-gray-400 mt-2">PDF, DOC, DOCX (max 5MB)</p>
                    </label>
                    {applicationData.cv && (
                      <p className="text-sm text-green-600 mt-2">
                        Selected: {applicationData.cv.name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
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
                  <h3 className="text-3xl font-bold text-primary mb-2">{selectedJob.title}</h3>
                  <p className="text-accent font-semibold text-lg">{selectedJob.department}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-8">{selectedJob.description}</p>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-4">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((item: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-primary mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((item: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Job Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-medium">{selectedJob.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Type:</span>
                        <span className="font-medium">{selectedJob.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Experience:</span>
                        <span className="font-medium">{selectedJob.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Posted:</span>
                        <span className="font-medium">{new Date(selectedJob.posted).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Benefits & Perks</h4>
                    <ul className="space-y-2 text-sm">
                      {selectedJob.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Award size={14} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="#application" className="btn-primary w-full text-center block">
                    Apply for This Position
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
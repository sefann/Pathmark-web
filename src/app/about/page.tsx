'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe,
  CheckCircle,
  User,
  Quote,
  ChevronDown,
  ChevronUp,
  Mail,
  Linkedin
} from 'lucide-react';
import Banner from '@/components/Banner';
import StatisticsSection from '@/components/StatisticsSection';

export default function AboutPage() {
  // const [heroRef, heroInView] = useInView({ threshold: 0.1 }); // Unused for now
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const [expandedLeader, setExpandedLeader] = useState<string | null>(null);

  const leadership = [
    {
      id: 'leadership-1',
      name: 'Aisha A. Adamu',
      title: 'Lead Managing Partner',
      yearsExperience: '10+ years',
      bio: 'Strategic consulting and project management expert specializing in energy sector development and policy advisory across Africa.',
      detailedBio: 'Aisha is a visionary leader who has transformed the consulting landscape in West Africa. Her expertise spans across multiple sectors, with particular focus on energy policy development and implementation. She has successfully advised governments and private sector clients on major infrastructure projects, regulatory frameworks, and strategic partnerships. Her leadership has been instrumental in establishing Pathmark Advisory as a trusted partner for complex, high-impact projects.',
      briefExpertise: ['Energy Policy', 'Strategic Planning', 'Government Relations'],
      fullExpertise: ['Energy Policy', 'Strategic Planning', 'Government Relations', 'Project Finance', 'Infrastructure Development', 'Policy Advisory', 'Regulatory Compliance', 'Stakeholder Management'],
      quote: 'Our success is measured not just by the projects we complete, but by the lasting impact we create for our clients and communities.',
      email: 'aisha.adamu@pathmarkadvisory.com',
      linkedin: '#'
    },
    {
      id: 'leadership-2',
      name: 'Sulaimon A. Ajishafe',
      title: 'Executive Partner',
      yearsExperience: '15+ years',
      bio: 'Technology and finance executive driving digital transformation initiatives across West Africa for major banks and fintech companies.',
      detailedBio: 'Sulaimon is a technology innovator and strategic thinker who has revolutionized how African businesses approach digital transformation. His deep understanding of both technology and business processes has enabled him to bridge the gap between technical solutions and business outcomes. He has led numerous successful digital transformation projects, helping organizations modernize their operations, improve efficiency, and gain competitive advantages in the digital economy.',
      briefExpertise: ['Digital Transformation', 'Fintech', 'Business Process Automation'],
      fullExpertise: ['Digital Transformation', 'Fintech', 'Business Process Automation', 'Data Analytics', 'Enterprise Architecture', 'Strategic Technology Planning', 'Cloud Computing', 'AI/ML Integration'],
      quote: 'Technology is not just about innovation; it\'s about creating solutions that solve real problems and improve lives.',
      email: 'sulaimon.ajishafe@pathmarkadvisory.com',
      linkedin: '#'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Kemi Ogundimu',
      title: 'Senior Consultant - Energy',
      department: 'Energy Solutions',
      yearsExperience: '8+ years',
      bio: 'Renewable energy project development specialist with experience managing over $200M in clean energy investments across Nigeria.',
      detailedBio: 'Kemi is a passionate energy consultant with deep expertise in renewable energy systems and sustainable development. She has successfully led numerous solar energy projects across Nigeria, helping communities transition to clean energy solutions. Her work has not only reduced energy costs but also contributed to environmental sustainability and economic development in rural areas. Kemi is known for her innovative approach to energy project management and her commitment to delivering lasting impact.',
      briefExpertise: ['Solar Energy', 'Project Development', 'Environmental Assessment'],
      fullExpertise: ['Solar Energy', 'Project Development', 'Environmental Impact Assessment', 'Renewable Energy Policy', 'Grid Integration', 'Energy Storage', 'Rural Electrification', 'Sustainability Planning'],
      email: 'kemi.ogundimu@pathmarkadvisory.com',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Chinedu Okwu',
      title: 'Principal Consultant - Construction',
      department: 'Construction & Infrastructure',
      yearsExperience: '10+ years',
      bio: 'Construction project management expert with experience overseeing infrastructure projects worth over ₦50 billion across Nigeria.',
      detailedBio: 'Chinedu is a seasoned construction professional who has revolutionized infrastructure development in Nigeria. His expertise spans from road construction to major building projects, with a focus on quality, safety, and timely delivery. He has successfully managed complex projects involving multiple stakeholders and has developed innovative approaches to project optimization. Chinedu\'s leadership has been instrumental in establishing best practices in construction management across the region.',
      briefExpertise: ['Project Management', 'Quality Control', 'Infrastructure Planning'],
      fullExpertise: ['Project Management', 'Quality Control', 'Risk Assessment', 'Infrastructure Planning', 'Contract Management', 'Safety Management', 'Cost Optimization', 'Stakeholder Coordination'],
      email: 'chinedu.okwu@pathmarkadvisory.com',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Fatima Al-Hassan',
      title: 'Technology Lead',
      department: 'Technology Solutions',
      yearsExperience: '6+ years',
      bio: 'Technology practice leader specializing in enterprise software implementation and digital strategy for African businesses.',
      detailedBio: 'Fatima is a technology visionary who has been at the forefront of digital transformation in Africa. Her expertise in enterprise architecture and cloud computing has enabled numerous businesses to modernize their operations and gain competitive advantages. She has successfully implemented complex technology solutions for financial institutions, manufacturing companies, and government agencies. Fatima is passionate about leveraging technology to solve real business challenges and drive innovation.',
      briefExpertise: ['Enterprise Architecture', 'Cloud Computing', 'Digital Transformation'],
      fullExpertise: ['Enterprise Architecture', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'AI/ML Integration', 'Data Analytics', 'Software Development', 'IT Strategy'],
      email: 'fatima.alhassan@pathmarkadvisory.com',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Olumide Adebayo',
      title: 'Financial Advisory Director',
      department: 'Financial Services',
      yearsExperience: '7+ years',
      bio: 'Investment banking and corporate finance expert with experience closing deals worth over $500M across West Africa.',
      detailedBio: 'Olumide is a financial expert with a proven track record in investment banking and corporate finance. His deep understanding of capital markets and financial modeling has enabled him to structure complex deals and raise significant capital for businesses across West Africa. He has advised on major mergers and acquisitions, helping companies achieve their strategic objectives. Olumide\'s expertise in financial advisory has made him a trusted partner for both local and international investors.',
      briefExpertise: ['Investment Banking', 'M&A', 'Corporate Finance'],
      fullExpertise: ['Investment Banking', 'M&A', 'Capital Markets', 'Corporate Finance', 'Financial Modeling', 'Due Diligence', 'Valuation', 'Deal Structuring'],
      email: 'olumide.adebayo@pathmarkadvisory.com',
      linkedin: '#'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering results that exceed expectations and create lasting value for our clients.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership, working closely with our clients to achieve shared goals and mutual success.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace innovative solutions and cutting-edge approaches to solve complex business challenges.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Banner
        title="About Pathmark Advisory"
        subtitle="Your trusted partner in bringing visions to life through strategic consulting and expert project execution across multiple industries."
        imagePath="/images/about-banner.png"
      />

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Pathmark Advisory Co. Ltd is a leading consulting firm based in Abuja, Nigeria, 
                specializing in comprehensive business solutions across Energy, Construction, 
                Technology, Finance, and Government Relations.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our establishment, we have been committed to helping organizations 
                navigate complex challenges, capitalize on opportunities, and achieve 
                sustainable growth through strategic planning and expert execution.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our multidisciplinary approach combines deep industry knowledge with 
                innovative methodologies, ensuring that our clients receive tailored 
                solutions that drive real results.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <StatisticsSection 
                stats={[
                  { number: '100+', label: 'Projects Completed' },
                  { number: '50+', label: 'Happy Clients' },
                  { number: '10+', label: 'Years Experience' },
                  { number: '5', label: 'Industries Served' }
                ]}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower organizations with strategic insights and expert execution 
                that transform challenges into opportunities and visions into reality.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading consulting firm in West Africa, recognized for our 
                innovative solutions, ethical practices, and transformational impact.
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                We combine local expertise with international best practices, 
                delivering customized solutions that drive sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every 
              relationship we build with our clients and partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section ref={timelineRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive our success and deliver 
              exceptional results for our clients across Africa.
            </p>
          </motion.div>

          {/* Leadership Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              Leadership Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team combines decades of experience with a passion for 
              delivering transformational results across multiple industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {leadership.map((leader, index) => {
              const isExpanded = expandedLeader === leader.id;
              return (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <User size={80} className="text-primary opacity-50" />
                    </div>
                  </div>
                  <div className="p-8">
                                         <div className="flex justify-between items-start mb-4">
                       <div>
                         <h3 className="text-2xl font-bold text-primary mb-2">{leader.name}</h3>
                         <p className="text-accent font-semibold mb-1">{leader.title}</p>
                         <p className="text-sm text-gray-500 mb-4">{leader.yearsExperience} experience</p>
                       </div>
                       <button
                         onClick={() => setExpandedLeader(isExpanded ? null : leader.id)}
                         className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                       >
                         {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                       </button>
                     </div>
                     
                     <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
                     
                     <div className="mb-6">
                       <div className="flex items-center space-x-2 mb-3">
                         <Quote className="text-accent" size={20} />
                         <span className="font-semibold text-gray-900">Leadership Quote</span>
                       </div>
                       <p className="text-gray-600 italic leading-relaxed">&ldquo;{leader.quote}&rdquo;</p>
                     </div>

                     <div className="flex flex-wrap gap-2 mb-4">
                       {leader.briefExpertise.map((skill) => (
                         <span key={skill} className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">
                           {skill}
                         </span>
                       ))}
                     </div>

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                                             <div className="border-t border-gray-100 pt-6">
                         <div className="mb-6">
                           <h4 className="font-semibold text-gray-900 mb-3">Detailed Background</h4>
                           <p className="text-gray-600 text-sm leading-relaxed">
                             {leader.detailedBio}
                           </p>
                         </div>

                         <div className="mb-6">
                           <h4 className="font-semibold text-gray-900 mb-3">Full Expertise</h4>
                           <div className="flex flex-wrap gap-2">
                             {leader.fullExpertise.map((skill) => (
                               <span key={skill} className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">
                                 {skill}
                               </span>
                             ))}
                           </div>
                         </div>

                         <div className="flex space-x-3">
                           <a 
                             href={`mailto:${leader.email}`}
                             className="flex items-center space-x-1 text-primary hover:text-accent transition-colors text-sm"
                           >
                             <Mail size={16} />
                             <span>Email</span>
                           </a>
                           <a 
                             href={leader.linkedin}
                             className="flex items-center space-x-1 text-primary hover:text-accent transition-colors text-sm"
                           >
                             <Linkedin size={16} />
                             <span>LinkedIn</span>
                           </a>
                         </div>
                       </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Team Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              Our Expert Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals across all our service areas, committed to 
              delivering excellence in every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => {
              const isExpanded = expandedMember === member.id;
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                >
                                     {/* Card Header */}
                   <div className="p-6">
                     <div className="flex justify-between items-start mb-4">
                       <div>
                         <h3 className="text-xl font-bold text-primary mb-2">
                           {member.name}
                         </h3>
                         <p className="text-accent font-semibold mb-1">{member.title}</p>
                         <p className="text-sm text-gray-500 mb-1">{member.department}</p>
                         <p className="text-xs text-gray-400">{member.yearsExperience} experience</p>
                       </div>
                       <button
                         onClick={() => setExpandedMember(isExpanded ? null : member.id)}
                         className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                       >
                         {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                       </button>
                     </div>
                     
                     <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                       {member.bio}
                     </p>
                     
                     <div className="flex flex-wrap gap-1 mb-4">
                       {member.briefExpertise.map((skill) => (
                         <span key={skill} className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">
                           {skill}
                         </span>
                       ))}
                     </div>
                   </div>

                                     {/* Expanded Content */}
                   <motion.div
                     initial={false}
                     animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                     transition={{ duration: 0.3, ease: 'easeInOut' }}
                     className="overflow-hidden"
                   >
                                           <div className="px-6 pb-6 border-t border-gray-100">
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Detailed Background</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {member.detailedBio}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Full Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.fullExpertise.map((skill) => (
                              <span key={skill} className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="flex space-x-3">
                          <a 
                            href={`mailto:${member.email}`}
                            className="flex items-center space-x-1 text-primary hover:text-accent transition-colors text-xs"
                          >
                            <Mail size={14} />
                            <span>Email</span>
                          </a>
                          <a 
                            href={member.linkedin}
                            className="flex items-center space-x-1 text-primary hover:text-accent transition-colors text-xs"
                          >
                            <Linkedin size={14} />
                            <span>LinkedIn</span>
                          </a>
                        </div>
                      </div>
                   </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  User, 
  Mail, 
  Linkedin, 
  Twitter,
  Award,
  GraduationCap,
  Briefcase,
  X,
  Quote
} from 'lucide-react';

export default function TeamPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const leadership = [
    {
      id: 1,
      name: 'Aisha A. Adamu',
      title: 'Lead Managing Partner',
      image: '/api/placeholder/400/400',
      bio: 'Aisha brings over 15 years of experience in strategic consulting and project management across Africa. She has led transformational projects for Fortune 500 companies and government agencies, specializing in energy sector development and policy advisory.',
      education: [
        'MBA, Harvard Business School',
        'MSc Development Economics, London School of Economics',
        'BSc Economics, University of Lagos'
      ],
      experience: [
        'Former Senior Manager, McKinsey & Company',
        'Ex-Director of Policy, Nigerian Ministry of Power',
        'Board Member, West African Energy Association'
      ],
      expertise: ['Energy Policy', 'Strategic Planning', 'Government Relations', 'Project Finance'],
      quote: 'Our success is measured not just by the projects we complete, but by the lasting impact we create for our clients and communities.',
      email: 'aisha.adamu@pathmarkadvisory.com',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 2,
      name: 'Sulaimon A. Ajishafe',
      title: 'Executive Partner',
      image: '/api/placeholder/400/400',
      bio: 'Sulaimon is a seasoned technology and finance executive with over 12 years of experience driving digital transformation initiatives across West Africa. He has successfully led technology implementations for major banks and fintech companies.',
      education: [
        'MSc Computer Science, Stanford University',
        'BSc Mathematics, University of Ibadan',
        'Certified Project Management Professional (PMP)'
      ],
      experience: [
        'Former CTO, Access Bank Nigeria',
        'Ex-Senior Consultant, Deloitte Digital',
        'Founder, TechAfrica Initiative'
      ],
      expertise: ['Digital Transformation', 'Fintech', 'Business Process Automation', 'Data Analytics'],
      quote: 'Technology is not just about innovation; it&apos;s about creating solutions that solve real problems and improve lives.',
      email: 'sulaimon.ajishafe@pathmarkadvisory.com',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const teamMembers = [
    {
      id: 3,
      name: 'Kemi Ogundimu',
      title: 'Senior Consultant - Energy',
      department: 'Energy Solutions',
      image: '/api/placeholder/300/300',
      bio: 'Kemi specializes in renewable energy project development and has managed over $200M in clean energy investments across Nigeria.',
      expertise: ['Solar Energy', 'Project Development', 'Environmental Impact Assessment'],
      email: 'kemi.ogundimu@pathmarkadvisory.com'
    },
    {
      id: 4,
      name: 'Chinedu Okwu',
      title: 'Principal Consultant - Construction',
      department: 'Construction & Infrastructure',
      image: '/api/placeholder/300/300',
      bio: 'Chinedu brings 10+ years of construction project management experience, having overseen infrastructure projects worth over ₦50 billion.',
      expertise: ['Project Management', 'Quality Control', 'Risk Assessment'],
      email: 'chinedu.okwu@pathmarkadvisory.com'
    },
    {
      id: 5,
      name: 'Fatima Al-Hassan',
      title: 'Technology Lead',
      department: 'Technology Solutions',
      image: '/api/placeholder/300/300',
      bio: 'Fatima leads our technology practice, specializing in enterprise software implementation and digital strategy for African businesses.',
      expertise: ['Enterprise Architecture', 'Cloud Computing', 'Cybersecurity'],
      email: 'fatima.alhassan@pathmarkadvisory.com'
    },
    {
      id: 6,
      name: 'Olumide Adebayo',
      title: 'Financial Advisory Director',
      department: 'Financial Services',
      image: '/api/placeholder/300/300',
      bio: 'Olumide has extensive experience in investment banking and corporate finance, having closed deals worth over $500M across West Africa.',
      expertise: ['Investment Banking', 'M&A', 'Capital Markets'],
      email: 'olumide.adebayo@pathmarkadvisory.com'
    },
    {
      id: 7,
      name: 'Amina Yusuf',
      title: 'Senior Associate - Strategy',
      department: 'General Consulting',
      image: '/api/placeholder/300/300',
      bio: 'Amina focuses on organizational development and change management, helping companies navigate complex business transformations.',
      expertise: ['Change Management', 'Organizational Design', 'Performance Improvement'],
      email: 'amina.yusuf@pathmarkadvisory.com'
    },
    {
      id: 8,
      name: 'Ibrahim Musa',
      title: 'Government Relations Manager',
      department: 'Government Relations',
      image: '/api/placeholder/300/300',
      bio: 'Ibrahim has deep expertise in Nigerian policy landscape and has successfully managed regulatory compliance for multinational corporations.',
      expertise: ['Policy Analysis', 'Regulatory Affairs', 'Stakeholder Management'],
      email: 'ibrahim.musa@pathmarkadvisory.com'
    }
  ];

  const departments = [
    'All',
    'Energy Solutions',
    'Construction & Infrastructure',
    'Technology Solutions',
    'Financial Services',
    'General Consulting',
    'Government Relations'
  ];

  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredTeamMembers = selectedDepartment === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === selectedDepartment);

  const openModal = (member: any) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

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
              Our Team
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced professionals who drive our success and deliver 
              exceptional results for our clients across Africa.
            </p>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Leadership Section */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team combines decades of experience with a passion for 
              delivering transformational results across multiple industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User size={80} className="text-primary opacity-50" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{leader.name}</h3>
                  <p className="text-accent font-semibold mb-4">{leader.title}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Quote className="text-accent" size={20} />
                      <span className="font-semibold text-gray-900">Leadership Quote</span>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">"{leader.quote}"</p>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => openModal(leader)}
                      className="btn-primary flex-1"
                    >
                      View Full Profile
                    </button>
                    <div className="flex space-x-2">
                      <a href={`mailto:${leader.email}`} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <Mail size={18} />
                      </a>
                      <a href={leader.linkedin} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Talented professionals across all our service areas, committed to 
              delivering excellence in every project.
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDepartment === dept
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group cursor-pointer"
                onClick={() => openModal(member)}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User size={48} className="text-gray-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-gray-500 mb-4">{member.department}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.slice(0, 2).map((skill) => (
                      <span key={skill} className="bg-primary-100 text-primary px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="text-gray-400 text-xs">+{member.expertise.length - 2} more</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{selectedMember.name}</h3>
                  <p className="text-accent font-semibold text-lg">{selectedMember.title}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="aspect-square w-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-6">
                <User size={48} className="text-primary opacity-50" />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{selectedMember.bio}</p>

              {selectedMember.education && (
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <GraduationCap className="text-primary" size={20} />
                    <h4 className="font-semibold text-gray-900">Education</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedMember.education.map((edu: string, index: number) => (
                      <li key={index} className="text-gray-600 text-sm">{edu}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedMember.experience && (
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Briefcase className="text-primary" size={20} />
                    <h4 className="font-semibold text-gray-900">Experience</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedMember.experience.map((exp: string, index: number) => (
                      <li key={index} className="text-gray-600 text-sm">{exp}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="text-primary" size={20} />
                  <h4 className="font-semibold text-gray-900">Expertise</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise.map((skill: string) => (
                    <span key={skill} className="bg-primary-100 text-primary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {selectedMember.quote && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Quote className="text-accent" size={18} />
                    <span className="font-semibold text-gray-900">Quote</span>
                  </div>
                  <p className="text-gray-600 italic">"{selectedMember.quote}"</p>
                </div>
              )}

              <div className="flex space-x-4">
                <a href={`mailto:${selectedMember.email}`} className="btn-primary flex-1 text-center">
                  <Mail className="inline mr-2" size={18} />
                  Contact
                </a>
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} className="btn-outline flex-1 text-center">
                    <Linkedin className="inline mr-2" size={18} />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented professionals who share our passion 
              for excellence and commitment to making a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/careers" className="btn-secondary text-lg px-8 py-4">
                View Open Positions
              </a>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
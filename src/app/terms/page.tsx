'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Scale, Shield, AlertTriangle, Users, Building, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        {
          subtitle: 'Agreement to Terms',
          text: 'By accessing and using the services of Pathmark Advisory Co. Ltd, engaging our consulting services, or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.'
        },
        {
          subtitle: 'Modifications',
          text: 'We reserve the right to modify these terms at any time without prior notice. Your continued use of our services after any such changes constitutes your acceptance of the new terms. We recommend reviewing these terms periodically.'
        },
        {
          subtitle: 'Scope of Agreement',
          text: 'These terms apply to all users of our website and clients of our consulting services, including but not limited to energy solutions, construction management, technology implementation, financial advisory, and government relations services.'
        }
      ]
    },
    {
      icon: Building,
      title: 'Services Description',
      content: [
        {
          subtitle: 'Consulting Services',
          text: 'Pathmark Advisory provides professional consulting services across multiple sectors including Energy (mining, oil & gas, renewable energy), Construction & Infrastructure, Technology Solutions, Financial Services, General Business Consulting, and Government Relations & Lobbying services.'
        },
        {
          subtitle: 'Service Delivery',
          text: 'Our services are provided on a project basis or through ongoing consulting arrangements as agreed upon in separate service agreements. All specific project terms, deliverables, timelines, and compensation will be outlined in individual contracts or statements of work.'
        },
        {
          subtitle: 'Professional Standards',
          text: 'We provide our services in accordance with professional consulting standards and applicable Nigerian laws and regulations. Our team maintains appropriate professional qualifications and adheres to ethical business practices.'
        }
      ]
    },
    {
      icon: Scale,
      title: 'Client Responsibilities',
      content: [
        {
          subtitle: 'Information Accuracy',
          text: 'Clients are responsible for providing accurate, complete, and timely information necessary for the delivery of our services. Any delays or additional costs resulting from incomplete or inaccurate information provided by the client may result in additional charges.'
        },
        {
          subtitle: 'Cooperation',
          text: 'Clients agree to cooperate fully with our team, provide necessary access to personnel and facilities, and respond promptly to requests for information or approvals required for project completion.'
        },
        {
          subtitle: 'Compliance',
          text: 'Clients are responsible for ensuring compliance with all applicable laws, regulations, and industry standards in their respective sectors and jurisdictions, and for implementing our recommendations in accordance with such requirements.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Intellectual Property Rights',
      content: [
        {
          subtitle: 'Pathmark Advisory IP',
          text: 'All methodologies, frameworks, templates, and proprietary knowledge developed by Pathmark Advisory remain our exclusive intellectual property. Clients receive a non-exclusive license to use deliverables for their internal business purposes only.'
        },
        {
          subtitle: 'Client IP',
          text: 'We respect and protect our clients\' intellectual property rights. Any confidential information, trade secrets, or proprietary data shared by clients will be handled in accordance with our confidentiality agreements and professional standards.'
        },
        {
          subtitle: 'Third-Party IP',
          text: 'We ensure that any third-party intellectual property used in our services is properly licensed or used with appropriate permissions. Clients are responsible for obtaining necessary licenses for any third-party materials they request us to incorporate.'
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: [
        {
          subtitle: 'Professional Services',
          text: 'Our services are provided as professional advice and recommendations. Implementation of our recommendations and the results achieved are ultimately the responsibility of the client. We do not guarantee specific business outcomes or financial results.'
        },
        {
          subtitle: 'Liability Limits',
          text: 'To the maximum extent permitted by Nigerian law, our total liability for any claims arising from our services shall not exceed the total fees paid by the client for the specific project or service giving rise to the claim.'
        },
        {
          subtitle: 'Consequential Damages',
          text: 'Under no circumstances shall Pathmark Advisory be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Confidentiality and Data Protection',
      content: [
        {
          subtitle: 'Confidential Information',
          text: 'We maintain strict confidentiality regarding all client information, business data, and proprietary details shared during the course of our engagement. Our team members sign comprehensive confidentiality agreements.'
        },
        {
          subtitle: 'Data Security',
          text: 'We implement appropriate technical and organizational measures to protect client data against unauthorized access, disclosure, alteration, or destruction. Our data handling practices comply with applicable Nigerian data protection regulations.'
        },
        {
          subtitle: 'Information Retention',
          text: 'Client information is retained only for as long as necessary to fulfill our service obligations and comply with legal and regulatory requirements, typically for a period of seven years after project completion.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Payment Terms and Conditions',
      content: [
        {
          subtitle: 'Fee Structure',
          text: 'Our fees are based on project scope, complexity, duration, and resource requirements as outlined in individual service agreements. All fees are quoted in Nigerian Naira unless otherwise specified.'
        },
        {
          subtitle: 'Payment Schedule',
          text: 'Payment terms are typically net 30 days from invoice date unless otherwise agreed in writing. For long-term projects, we may require milestone-based payments or monthly retainers as specified in the service agreement.'
        },
        {
          subtitle: 'Late Payments',
          text: 'Late payments may incur interest charges at the rate of 2% per month or the maximum rate permitted by law, whichever is lower. We reserve the right to suspend services for accounts that are more than 60 days overdue.'
        }
      ]
    },
    {
      icon: Scale,
      title: 'Termination and Cancellation',
      content: [
        {
          subtitle: 'Termination Rights',
          text: 'Either party may terminate a service agreement with 30 days written notice, unless otherwise specified in the individual service contract. Termination does not relieve either party of obligations incurred prior to the termination date.'
        },
        {
          subtitle: 'Effect of Termination',
          text: 'Upon termination, clients remain responsible for payment of all fees for services rendered up to the termination date. We will provide all completed deliverables and return client materials within 30 days of termination.'
        },
        {
          subtitle: 'Survival of Terms',
          text: 'Provisions relating to confidentiality, intellectual property rights, limitation of liability, and payment obligations shall survive termination of any service agreement.'
        }
      ]
    }
  ];

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
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText size={40} className="text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              These terms govern the use of our website and consulting services. Please read them carefully 
              before engaging with Pathmark Advisory Co. Ltd.
            </p>
            <p className="text-lg text-primary-100">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Introduction</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to Pathmark Advisory Co. Ltd. These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding 
                agreement between you and Pathmark Advisory Co. Ltd (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) regarding your 
                use of our website, services, and any related applications or platforms.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Pathmark Advisory is a leading consulting firm based in Abuja, Nigeria, providing comprehensive 
                business solutions across Energy, Construction, Technology, Finance, and Government Relations sectors. 
                We serve clients locally in Nigeria and internationally, helping organizations achieve their strategic 
                objectives through expert consulting and project execution services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These Terms apply to all visitors, users, clients, and others who access or use our services. 
                By accessing our website or engaging our services, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section ref={contentRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-4 border-primary-200 pl-6">
                        <h3 className="text-xl font-semibold text-primary mb-3">{item.subtitle}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governing Law and Dispute Resolution */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <Scale size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Governing Law and Dispute Resolution</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Governing Law</h3>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. 
                    Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Abuja, Nigeria.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Dispute Resolution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We encourage clients to contact us directly to resolve any disputes or concerns. For formal disputes, 
                    we prefer mediation or arbitration as specified in individual service agreements. Any arbitration shall 
                    be conducted in accordance with the rules of the Nigerian Institute of Chartered Arbitrators.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-200 pl-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Severability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited 
                    or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Questions About These Terms?</h2>
              <p className="text-xl mb-8 text-primary-100">
                If you have any questions about these Terms of Service or need clarification on any provisions, 
                please contact our legal team.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail size={18} className="text-accent-200" />
                      <span>contact@pathmarkadvisory.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={18} className="text-accent-200" />
                      <span>+2347079993916</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Office Address</h3>
                  <p className="text-primary-100">
                    Pathmark Advisory Co. Ltd<br />
                    T007, PLOT 1248 ORJI UZOR KALU CLOSE<br />
                    MABUSHI, ABUJA FCT, Nigeria
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-primary-100">
                  For legal matters and contract negotiations, please allow 5-7 business days for response. 
                  For urgent matters, please call our office directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agreement Acknowledgment */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Agreement Acknowledgment</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                By using our website or engaging our services, you acknowledge that you have read these Terms of Service, 
                understand them, and agree to be bound by them. These Terms constitute the entire agreement between you 
                and Pathmark Advisory Co. Ltd regarding the use of our services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We reserve the right to update these Terms at any time. Continued use of our services after any 
                modifications indicates your acceptance of the updated Terms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <Link href="/privacy" className="btn-outline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


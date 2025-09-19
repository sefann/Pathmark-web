'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Eye, Lock, Database, Users, FileText, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ threshold: 0.1 });

  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect personal information that you provide directly to us, including but not limited to your name, email address, phone number, company name, job title, and business address when you contact us, request our services, or subscribe to our newsletter.'
        },
        {
          subtitle: 'Business Information',
          text: 'For our consulting services, we may collect information about your business, including financial data, operational details, project requirements, and strategic objectives necessary to provide our professional services.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect certain technical information when you visit our website, including IP address, browser type, operating system, referring URLs, and pages visited to improve our website performance and user experience.'
        }
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your information to provide our consulting services, including energy solutions, construction management, technology implementation, financial advisory, and government relations services.'
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to respond to your inquiries, provide project updates, send service-related communications, and share relevant industry insights and opportunities.'
        },
        {
          subtitle: 'Business Development',
          text: 'We may use your information to identify potential business opportunities, develop customized service offerings, and maintain our client relationships in accordance with professional consulting standards.'
        }
      ]
    },
    {
      icon: Lock,
      title: 'Information Sharing and Disclosure',
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with trusted third-party service providers who assist us in delivering our services, such as legal advisors, technical consultants, and project partners, under strict confidentiality agreements.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by Nigerian law, court order, or government regulation, or to protect our legal rights, prevent fraud, or ensure the safety of our clients and employees.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, with appropriate notice and protection measures in place.'
        }
      ]
    },
    {
      icon: Database,
      title: 'Data Security and Protection',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction, including encryption, access controls, and secure data storage.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements, typically for a period of 7 years after the conclusion of our business relationship.'
        },
        {
          subtitle: 'International Transfers',
          text: 'Your information may be transferred to and processed in countries outside Nigeria for legitimate business purposes, with appropriate safeguards in place to ensure the protection of your personal data.'
        }
      ]
    },
    {
      icon: Users,
      title: 'Your Rights and Choices',
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, correct, or update your personal information held by us. You may request a copy of your personal data or ask us to correct any inaccuracies.'
        },
        {
          subtitle: 'Data Portability',
          text: 'Where applicable, you have the right to receive your personal data in a structured, commonly used format and to transmit that data to another service provider.'
        },
        {
          subtitle: 'Withdrawal of Consent',
          text: 'You may withdraw your consent for certain processing activities at any time, though this may affect our ability to provide certain services to you.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Cookies and Tracking Technologies',
      content: [
        {
          subtitle: 'Cookie Usage',
          text: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences.'
        },
        {
          subtitle: 'Analytics',
          text: 'We use web analytics services to understand how visitors interact with our website, which helps us improve our services and user experience. This information is collected in aggregate form and does not identify individual users.'
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
              <Shield size={40} className="text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how Pathmark Advisory Co. Ltd 
              collects, uses, and protects your personal information.
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
                Pathmark Advisory Co. Ltd (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting and respecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website, engage our consulting services, or otherwise interact with us.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As a leading consulting firm providing services across Energy, Construction, Technology, Finance, and 
                Government Relations sectors in Nigeria and beyond, we understand the importance of maintaining the 
                confidentiality and security of your personal and business information.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By using our services or website, you consent to the data practices described in this policy. 
                If you do not agree with this policy, please do not use our services or website.
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

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Us About Privacy</h2>
              <p className="text-xl mb-8 text-primary-100">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please don&apos;t hesitate to contact us.
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
                    T007, PLOT 1248 ORJI UZOR KALU CLOSE<br />
                    MABUSHI, ABUJA FCT, Nigeria
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-primary-100">
                  We will respond to your privacy-related inquiries within 30 days of receipt. 
                  For urgent matters, please call our office directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Updates */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">Policy Updates</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material changes 
                by posting the updated policy on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We encourage you to review this Privacy Policy periodically to stay informed about how 
                we protect your information.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <Link href="/terms" className="btn-outline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


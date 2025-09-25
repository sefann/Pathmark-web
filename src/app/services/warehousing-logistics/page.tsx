"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { CheckCircle, MoveRight } from 'lucide-react';
import { useCallback } from 'react';

export default function WarehousingLogisticsPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ threshold: 0.1 });
  const [facilitiesRef, facilitiesInView] = useInView({ threshold: 0.1 });
  const [logisticsRef, logisticsInView] = useInView({ threshold: 0.1 });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const getInitialSrc = useCallback((name: string) => `/images/${name}.png`, []);
  const handleImgFallback = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.dataset.tried === 'png') {
      img.src = img.src.replace(/\.png$/i, '.jpg');
      img.dataset.tried = 'jpg';
    } else if (img.dataset.tried === 'jpg') {
      img.src = img.src.replace(/\.jpg$/i, '.jpeg');
      img.dataset.tried = 'jpeg';
    } else {
      img.style.display = 'none';
    }
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section with image banner */}
      <section ref={heroRef} className="section-padding relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/warelogistics.png')` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Warehousing & Logistics</h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Pathmark Advisory Co. provides comprehensive warehousing and logistics solutions to support businesses in Nigeria and beyond.
              Our services simplify supply chain challenges, enhance efficiency, and ensure the smooth, timely movement of goods and equipment.
            </p>
          </motion.div>
        </div>
        {/* hidden image tag to trigger fallback chain if png missing */}
        <img
          src={getInitialSrc('warelogistics')}
          data-tried="png"
          onError={handleImgFallback}
          alt="warehousing logistics banner preload"
          className="hidden"
        />
      </section>

      {/* Overview Section: left content, right image */}
      <section ref={overviewRef} className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                We deliver tailored warehousing and logistics services that integrate storage, distribution, trucking, and heavy equipment movement.
                With a reliable partner network and operational rigor, we help businesses scale while maintaining safety, timeliness, and cost efficiency.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 mt-6 text-black">
                <h3 className="text-xl font-semibold text-black mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2"><CheckCircle size={16} className="text-green-600" /><span className="text-black">Reliable third-party logistics network</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle size={16} className="text-green-600" /><span className="text-black">Flexible and scalable solutions</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle size={16} className="text-green-600" /><span className="text-black">Expertise in sensitive and heavy cargo</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle size={16} className="text-green-600" /><span className="text-black">Commitment to timeliness, safety, and cost efficiency</span></li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <img
                src={getInitialSrc('warelogistics')}
                data-tried="png"
                onError={handleImgFallback}
                alt="Warehousing and logistics"
                className="w-full h-80 object-cover rounded-xl shadow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities: left content, right small gallery */}
      <section ref={facilitiesRef} className="section-padding bg-white">
        <div className="container-custom">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Facilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our warehousing facilities provide secure, organized, and scalable spaces that cater to both short-term and long-term storage needs. Strategically located in Abuja, Nasarawa, and other parts of Nigeria, they are designed to support businesses with reliable access points across key regions. The images shown here highlight our facilities in Abuja, offering a glimpse into the high standards we uphold throughout all our warehouse operations nationwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Equipped with modern handling equipment and advanced inventory management systems, our warehouses ensure accuracy, efficiency, and complete visibility for clients. From structured shelving and labeling to digital tracking and controlled access, businesses can depend on safe, flexible storage solutions that adapt to seasonal demands, project-specific requirements, or long-term growth, making our facilities a strategic asset for supply chain reliability and expansion across Nigeria.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {['warehouse', 'warehouseone', 'warehousetwo', 'warehousethree'].map((name) => (
                  <img
                    key={name}
                    src={getInitialSrc(name)}
                    data-tried="png"
                    onError={handleImgFallback}
                    alt={name}
                    className="w-full h-40 object-cover rounded-lg shadow"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logistics Solutions: left content, right trucking image */}
      <section ref={logisticsRef} className="section-padding bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="container-custom">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={logisticsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Logistics Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow p-6">
                  <h4 className="font-semibold mb-2">1. Storage Solutions</h4>
                  <p className="text-gray-700 text-sm">Secure, scalable storage for short-term and long-term needs, tailored to your business.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                  <h4 className="font-semibold mb-2">2. Trucking & Transport</h4>
                  <p className="text-gray-700 text-sm">Managed last-mile delivery and long-distance haulage through trusted partner networks.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                  <h4 className="font-semibold mb-2">3. Heavy Equipment Moving</h4>
                  <p className="text-gray-700 text-sm">Specialized movement of large or sensitive industrial equipment with compliance.</p>
                </div>
                <div className="bg-white rounded-xl shadow p-6">
                  <h4 className="font-semibold mb-2">4. Distribution Services</h4>
                  <p className="text-gray-700 text-sm">End-to-end management from handling to market distribution for on-time delivery.</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={getInitialSrc('trucking')}
                data-tried="png"
                onError={handleImgFallback}
                alt="Trucking logistics"
                className="w-full h-80 object-cover rounded-xl shadow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section ref={ctaRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Ready to optimize your supply chain?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Talk to our team to scope your warehousing and logistics needs and craft a tailored solution.
            </p>
            <Link href="/contact" className="btn-secondary inline-flex items-center">
              Contact Us <MoveRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



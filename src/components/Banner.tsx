import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BannerProps {
  title: string;
  subtitle?: string;
  imagePath: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Banner({ 
  title, 
  subtitle, 
  imagePath, 
  children,
  className = ""
}: BannerProps) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className={`relative section-padding text-white overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imagePath}')`
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-800 opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

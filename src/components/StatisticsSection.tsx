'use client';

import { LucideIcon } from 'lucide-react';
import { forwardRef } from 'react';
import CountingNumber from './CountingNumber';

interface StatItem {
  number: string;
  label: string;
  icon?: LucideIcon;
}

interface StatisticsSectionProps {
  stats: StatItem[];
  className?: string;
  title?: string;
  subtitle?: string;
}

const StatisticsSection = forwardRef<HTMLElement, StatisticsSectionProps>(({ 
  stats, 
  className = "",
  title,
  subtitle 
}, ref) => {
  const parseNumber = (numberStr: string): { value: number; prefix: string; suffix: string } => {
    // Handle currency symbols and special formats
    const currencyMatch = numberStr.match(/^([₦$€£¥]?)(\d+)(.*)$/);
    if (currencyMatch) {
      return {
        value: parseInt(currencyMatch[2]),
        prefix: currencyMatch[1] || '',
        suffix: currencyMatch[3] || ''
      };
    }
    return { value: 0, prefix: '', suffix: '' };
  };

  return (
    <section ref={ref} className={`py-16 bg-gradient-to-r from-primary to-primary-800 ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { value, prefix, suffix } = parseNumber(stat.number);
            const Icon = stat.icon;
            
            return (
              <div key={index} className="text-center">
                {Icon && (
                  <div className="flex justify-center mb-4">
                    <Icon size={48} className="text-white/80" />
                  </div>
                )}
                <div className="mb-2">
                  <CountingNumber 
                    target={value}
                    prefix={prefix}
                    suffix={suffix}
                    className="text-4xl lg:text-5xl font-bold text-white"
                    duration={2500}
                  />
                </div>
                <div className="text-white/80 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

StatisticsSection.displayName = 'StatisticsSection';

export default StatisticsSection;

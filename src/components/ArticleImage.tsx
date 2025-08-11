'use client';

import { useState } from 'react';
import { ImageIcon, Newspaper, Building2, Zap, Cpu, Hammer, DollarSign, Shield, Mountain, Globe, Users } from 'lucide-react';

interface ArticleImageProps {
  src?: string;
  alt: string;
  category: string;
  source: string;
  className?: string;
}

export default function ArticleImage({ 
  src, 
  alt, 
  category, 
  source, 
  className = "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
}: ArticleImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  // Get category icon and color
  const getCategoryStyle = (category: string) => {
    const styles = {
      'Energy': { icon: Zap, bgColor: 'bg-green-600', textColor: 'text-green-100' },
      'Technology': { icon: Cpu, bgColor: 'bg-blue-600', textColor: 'text-blue-100' },
      'Construction': { icon: Hammer, bgColor: 'bg-yellow-600', textColor: 'text-yellow-100' },
      'Finance': { icon: DollarSign, bgColor: 'bg-indigo-600', textColor: 'text-indigo-100' },
      'Public Sector': { icon: Building2, bgColor: 'bg-purple-600', textColor: 'text-purple-100' },
      'Mining': { icon: Mountain, bgColor: 'bg-gray-600', textColor: 'text-gray-100' },
      'Investment Africa': { icon: Globe, bgColor: 'bg-red-600', textColor: 'text-red-100' },
      'Nigerian News': { icon: Users, bgColor: 'bg-primary', textColor: 'text-white' },
    };
    return styles[category as keyof typeof styles] || { icon: Newspaper, bgColor: 'bg-gray-600', textColor: 'text-gray-100' };
  };

  const categoryStyle = getCategoryStyle(category);
  const CategoryIcon = categoryStyle.icon;

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <ImageIcon size={24} className="text-gray-400" />
        </div>
      )}
      
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div className={`w-full h-full ${categoryStyle.bgColor} flex flex-col items-center justify-center p-4`}>
          <CategoryIcon size={48} className={`${categoryStyle.textColor} mb-3`} />
          <div className="text-center">
            <p className={`${categoryStyle.textColor} font-semibold text-sm mb-1`}>
              {category}
            </p>
            <p className={`${categoryStyle.textColor} text-xs opacity-80`}>
              {source}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

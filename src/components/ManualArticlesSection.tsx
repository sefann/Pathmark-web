'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, User, ArrowRight, Star, BookOpen } from 'lucide-react';
import { Article } from '@/types/insights';
import ArticleImage from './ArticleImage';

interface ManualArticlesSectionProps {
  articles: Article[];
}

export default function ManualArticlesSection({ articles }: ManualArticlesSectionProps) {
  const featuredArticles = articles.filter(article => article.featured);
  const regularManualArticles = articles.filter(article => !article.featured);

  // Don't render anything if there are no manual articles
  if (articles.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="py-8 bg-gradient-to-br from-primary to-primary-800 text-white">
      <div className="container-custom">
                 <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-8"
         >
          <div className="flex items-center justify-center mb-2">
            <Star className="text-white mr-2" size={20} />
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Pathmark Expert Insights
            </h2>
            <Star className="text-white ml-2" size={20} />
          </div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Exclusive analysis and strategic insights from our team of industry specialists
          </p>
        </motion.div>

                          {/* Featured Articles */}
         {featuredArticles.length > 0 && (
           <div className="mb-8">
             <h3 className="text-xl font-semibold text-white mb-4 text-center">
               Featured Insights
             </h3>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                                 <motion.article
                   key={article.id}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: index * 0.2 }}
                   viewport={{ once: true }}
                   className="bg-white rounded-lg shadow-lg overflow-hidden card-hover group border-2 border-white/30"
                 >
                  <div className="aspect-video bg-gradient-to-br from-primary to-primary-800 relative overflow-hidden">
                    <ArticleImage
                      src={article.image}
                      alt={article.title}
                      category={article.category}
                      source={article.source}
                    />
                    {/* Featured Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <Star size={12} className="mr-1" />
                        Featured
                      </div>
                    </div>
                    {/* Source badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-medium">
                        {article.source}
                      </div>
                    </div>
                  </div>
                                     <div className="p-4">
                     <div className="flex items-center mb-2">
                       <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                         {article.category}
                       </span>
                     </div>
                     <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                       {article.title}
                     </h3>
                     <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                       {article.description}
                     </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1" />
                          {formatDate(article.pubDate)}
                        </div>
                        {article.author && (
                          <div className="flex items-center">
                            <User size={12} className="mr-1" />
                            <span className="text-xs text-gray-600">{article.author}</span>
                          </div>
                        )}
                      </div>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

                          {/* Regular Manual Articles */}
         {regularManualArticles.length > 0 && (
           <div>
             <h3 className="text-xl font-semibold text-white mb-4 text-center">
               Latest Insights
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {regularManualArticles.map((article, index) => (
                                 <motion.article
                   key={article.id}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: index * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-white rounded-lg shadow-md overflow-hidden card-hover group border border-white/20"
                 >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <ArticleImage
                      src={article.image}
                      alt={article.title}
                      category={article.category}
                      source={article.source}
                    />
                    {/* Source badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs font-medium">
                        {article.source}
                      </div>
                    </div>
                  </div>
                                     <div className="p-3">
                     <div className="flex items-center mb-1">
                       <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs font-medium">
                         {article.category}
                       </span>
                     </div>
                     <h3 className="text-sm font-bold mb-1 text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                       {article.title}
                     </h3>
                     <p className="text-gray-600 mb-2 text-xs line-clamp-2">
                       {article.description}
                     </p>
                                         <div className="flex items-center justify-between">
                       <div className="flex items-center text-xs text-gray-500">
                         <Calendar size={8} className="mr-1" />
                         <span className="text-xs">{formatDate(article.pubDate)}</span>
                       </div>
                       <a
                         href={article.link}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-flex items-center text-primary hover:text-primary-700 font-medium text-xs group-hover:translate-x-1 transition-transform"
                       >
                         Read
                         <ArrowRight size={10} className="ml-1" />
                       </a>
                     </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

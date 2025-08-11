'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Star,
  Calendar,
  User,
  FileText,
  LogOut,
  Shield
} from 'lucide-react';
import { Article } from '@/types/insights';
import { AdminUser } from '@/lib/auth';

interface FormData {
  title: string;
  description: string;
  category: string;
  author: string;
  link: string;
  image: string;
  featured: boolean;
}

const categories = [
  'Energy',
  'Technology', 
  'Construction',
  'Finance',
  'Public Sector',
  'Mining',
  'Investment Africa',
  'Nigerian News'
];

export default function ManualArticlesAdmin() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    category: 'Investment Africa',
    author: 'Pathmark Team',
    link: '',
    image: '',
    featured: false
  });
  const router = useRouter();

  // Load current user and articles
  useEffect(() => {
    const loadData = async () => {
      try {
        // Get session token from localStorage
        const sessionToken = localStorage.getItem('adminSession');
        
        if (!sessionToken) {
          router.push('/admin/login');
          return;
        }

        // Fetch articles
        const response = await fetch('/api/manual-articles', {
          headers: {
            'Authorization': `Bearer ${sessionToken}`
          }
        });
        
        if (response.status === 401) {
          // Session expired, redirect to login
          localStorage.removeItem('adminSession');
          router.push('/admin/login');
          return;
        }

        const data = await response.json();
        if (data.success) {
          setArticles(data.articles);
          setCurrentUser(data.user);
        }
      } catch (error) {
        console.error('Error loading data:', error);
        router.push('/admin/login');
      }
    };
    
    loadData();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const sessionToken = localStorage.getItem('adminSession');
      const url = editingId ? '/api/manual-articles' : '/api/manual-articles';
      const method = editingId ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify({
          ...formData,
          ...(editingId && { id: editingId })
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Refresh articles list
        const refreshResponse = await fetch('/api/manual-articles', {
          headers: {
            'Authorization': `Bearer ${sessionToken}`
          }
        });
        const refreshData = await refreshResponse.json();
        if (refreshData.success) {
          setArticles(refreshData.articles);
        }
        resetForm();
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error saving article:', error);
      alert('Failed to save article');
    }
  };

  const handleEdit = (article: Article) => {
    setEditingId(article.id);
    setFormData({
      title: article.title,
      description: article.description,
      category: article.category,
      author: article.author || 'Pathmark Team',
      link: article.link,
      image: article.image || '',
      featured: article.featured || false
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      try {
        const sessionToken = localStorage.getItem('adminSession');
        const response = await fetch(`/api/manual-articles?id=${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${sessionToken}`
          }
        });

        const data = await response.json();
        
        if (data.success) {
          setArticles(prev => prev.filter(article => article.id !== id));
        } else {
          alert('Error: ' + data.error);
        }
      } catch (error) {
        console.error('Error deleting article:', error);
        alert('Failed to delete article');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    router.push('/admin/login');
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'Investment Africa',
      author: 'Pathmark Team',
      link: '',
      image: '',
      featured: false
    });
    setEditingId(null);
    setShowForm(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Manual Articles Management
              </h1>
              <p className="text-gray-600">
                Add and manage Pathmark-authored articles for the insights page
              </p>
            </div>
            {currentUser && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-primary/10 px-3 py-2 rounded-lg">
                  <Shield size={16} className="text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {currentUser.name} ({currentUser.role})
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <LogOut size={16} />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Add New Article Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>Add New Article</span>
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8 relative"
          >
                         {/* Logout Button - Top Right */}
             <button
               onClick={handleLogout}
               className="absolute top-4 right-4 flex items-center space-x-2 px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg transition-colors text-sm font-medium shadow-lg z-10"
               title="Logout"
             >
               <LogOut size={16} />
               <span>Logout</span>
             </button>

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                {editingId ? 'Edit Article' : 'Add New Article'}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                                     <input
                     type="text"
                     required
                     value={formData.title}
                     onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 bg-white"
                     placeholder="Enter article title"
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                                     <select
                     required
                     value={formData.category}
                     onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 bg-white"
                   >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author
                  </label>
                                     <input
                     type="text"
                     value={formData.author}
                     onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 bg-white"
                     placeholder="Enter author name"
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Link *
                  </label>
                                     <input
                     type="url"
                     required
                     value={formData.link}
                     onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 bg-white"
                     placeholder="Enter article URL"
                   />
                </div>
              </div>

                             <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                   Banner Image
                 </label>
                 <div className="space-y-3">
                   {/* File Upload */}
                   <div className="flex items-center space-x-3">
                     <input
                       type="file"
                       accept="image/*"
                       onChange={(e) => {
                         const file = e.target.files?.[0];
                         if (file) {
                           // Convert to base64 for preview and storage
                           const reader = new FileReader();
                           reader.onload = (event) => {
                             const base64 = event.target?.result as string;
                             setFormData(prev => ({ ...prev, image: base64 }));
                           };
                           reader.readAsDataURL(file);
                         }
                       }}
                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-800 file:cursor-pointer cursor-pointer"
                     />
                   </div>
                   
                   {/* URL Input (Alternative) */}
                   <div className="flex items-center space-x-2">
                     <span className="text-sm text-gray-500">Or enter URL:</span>
                     <input
                       type="url"
                       value={formData.image && formData.image.startsWith('http') ? formData.image : ''}
                       onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                       className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 bg-white text-sm"
                       placeholder="https://example.com/image.jpg"
                     />
                   </div>
                   
                   {/* Image Preview */}
                   {formData.image && (
                     <div className="mt-3">
                       <div className="flex items-center justify-between mb-2">
                         <p className="text-xs text-gray-600">Preview:</p>
                         <button
                           type="button"
                           onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                           className="text-xs text-red-600 hover:text-red-800"
                         >
                           Remove Image
                         </button>
                       </div>
                       <div className="w-full h-32 bg-gray-100 rounded-md overflow-hidden">
                         <img
                           src={formData.image}
                           alt="Banner preview"
                           className="w-full h-full object-cover"
                           onError={(e) => {
                             e.currentTarget.style.display = 'none';
                             const errorDiv = e.currentTarget.nextElementSibling as HTMLElement;
                             if (errorDiv) errorDiv.style.display = 'flex';
                           }}
                         />
                         <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm" style={{ display: 'none' }}>
                           Invalid image
                         </div>
                       </div>
                     </div>
                   )}
                   
                   <p className="text-xs text-gray-500">
                     Upload an image or enter URL. Leave empty to use category placeholder image.
                   </p>
                 </div>
               </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                                 <textarea
                   required
                   rows={4}
                   value={formData.description}
                   onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 bg-white"
                   placeholder="Enter article description"
                 />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  Featured Article (will appear in featured section)
                </label>
              </div>

              <div className="flex items-center space-x-3 pt-4">
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2"
                >
                  <Save size={16} />
                  <span>{editingId ? 'Update Article' : 'Add Article'}</span>
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Articles List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Current Articles ({articles.length})
            </h3>
          </div>

          <div className="divide-y divide-gray-200">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 hover:bg-gray-50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {article.title}
                      </h4>
                      {article.featured && (
                        <Star size={16} className="text-yellow-500 fill-current" />
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FileText size={14} />
                        <span>{article.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{formatDate(article.pubDate)}</span>
                      </div>
                      {article.image && (
                        <div className="flex items-center space-x-1">
                          <span>📷 Has image</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(article)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                      title="Edit article"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md"
                      title="Delete article"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {articles.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              <FileText size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No manual articles yet. Add your first article to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

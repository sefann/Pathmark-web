'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

interface StudioWrapperProps {
  children: React.ReactNode;
}

export default function StudioWrapper({ children }: StudioWrapperProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    try {
      // Call logout API
      await fetch('/api/auth/logout', {qqq
        method: 'POST',
      });
      
      // Clear client-side cookies as well
      document.cookie = 'studio-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'studio-timestamp=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      
      // Redirect to login page
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="relative text-gray-800">
      {/* Logout Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-xl">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors disabled:opacity-50 shadow-lg"
          >
            <LogOut size={16} />
            <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
          </button>
        </div>
      </div>
      
      {/* Studio Content */}
      {children}
    </div>
  );
}

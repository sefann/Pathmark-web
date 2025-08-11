// Simple authentication system for admin access
// In production, you'd want to use a proper auth service like NextAuth.js

export interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'editor';
  name: string;
}

// In production, these would be stored in a database with hashed passwords
const ADMIN_USERS: Record<string, { password: string; user: AdminUser }> = {
  'socialmedia': {
    password: '@socialmedia.COM01', // Updated password
    user: {
      id: '1',
      username: 'socialmedia',
      role: 'editor',
      name: 'Social Media Manager'
    }
  },
  'admin': {
    password: '@admin.COM01', // Updated password
    user: {
      id: '2',
      username: 'admin',
      role: 'admin',
      name: 'System Administrator'
    }
  }
};

export function validateCredentials(username: string, password: string): AdminUser | null {
  const userData = ADMIN_USERS[username];
  
  if (userData && userData.password === password) {
    return userData.user;
  }
  
  return null;
}

export function getUserByUsername(username: string): AdminUser | null {
  const userData = ADMIN_USERS[username];
  return userData ? userData.user : null;
}

// Session management (in production, use proper session management)
export function createSession(user: AdminUser): string {
  // Simple session token - in production, use JWT or proper session management
  const sessionData = {
    userId: user.id,
    username: user.username,
    role: user.role,
    name: user.name,
    timestamp: Date.now()
  };
  
  return Buffer.from(JSON.stringify(sessionData)).toString('base64');
}

export function validateSession(sessionToken: string): AdminUser | null {
  try {
    const sessionData = JSON.parse(Buffer.from(sessionToken, 'base64').toString());
    
    // Check if session is not expired (24 hours)
    if (Date.now() - sessionData.timestamp > 24 * 60 * 60 * 1000) {
      return null;
    }
    
    return {
      id: sessionData.userId,
      username: sessionData.username,
      role: sessionData.role,
      name: sessionData.name
    };
  } catch {
    return null;
  }
}

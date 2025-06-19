"use client";

// context/AuthContext.js
{
  /**
  "use client"

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user on initial load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/user');
        const data = await response.json();
        if (response.ok) {
          setUser(data.user);
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = async (credentials) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (res.ok) setUser(data.user);
    return data;
  };

  const logout = async () => {
    await fetch('/api/auth/logout');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} */
}

// context/AuthContext.js

import { createContext, useContext, useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const { data: session, status, update } = useSession();

  const value = {
    user: session?.user || null,
    loading: status === "loading",
    isAuthenticated: status === "authenticated",
    login: (credentials) =>
    signIn("credentials", { redirect: false, ...credentials }),
    logout: () => signOut({ redirect: false }),
    updateSession: async (newUserData) => {
      await update({
        ...session,
        user: {
          ...session.user,
          ...newUserData,
        },
      });
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

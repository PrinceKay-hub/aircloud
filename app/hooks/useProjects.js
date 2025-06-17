// hooks/useProjects.js
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.id) return;
    
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/projects');
        
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
        console.error("Fetch projects error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [user?.id]); // Refetch when user ID changes

  return { projects, loading, error, refetch: () => {
    // Trigger refetch by changing dependency
    setProjects([]);
    setLoading(true);
  }};
}
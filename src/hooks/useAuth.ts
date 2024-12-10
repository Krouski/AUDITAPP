import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { LoginCredentials } from '../types/auth';
import { useAuthStore } from '../store/authStore';
import api from '../lib/axios';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await api.post('/auth/login', credentials);
      setAuth(response.data.user, response.data.token);
      navigate('/', { replace: true });
      toast.success('Welcome back!');
    } catch (error) {
      toast.error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
  };
}
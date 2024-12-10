import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { login, isLoading } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to SecureAudit
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your credentials to access the dashboard
          </p>
        </div>

        <LoginForm onSubmit={login} isLoading={isLoading} />
      </div>
    </div>
  );
}
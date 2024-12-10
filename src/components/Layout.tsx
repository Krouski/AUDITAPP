import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import NavigationLink from './navigation/NavigationLink';
import { mainNavigation, adminNavigation } from './navigation/NavigationConfig';

export default function Layout() {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const isAdmin = user?.role === 'admin';
  const fullNavigation = isAdmin ? [...mainNavigation, ...adminNavigation] : mainNavigation;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-xl font-bold text-gray-900">SecureAudit</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {fullNavigation.map((item) => (
                  <NavigationLink
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    icon={item.icon}
                    isActive={location.pathname === item.href}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => logout()}
                className="text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

interface NavigationLinkProps {
  name: string;
  href: string;
  icon: IconType;
  isActive: boolean;
}

export default function NavigationLink({ name, href, icon: Icon, isActive }: NavigationLinkProps) {
  return (
    <Link
      to={href}
      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
        isActive
          ? 'border-b-2 border-indigo-500 text-gray-900'
          : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
      }`}
    >
      <Icon className="h-5 w-5 mr-1" />
      {name}
    </Link>
  );
}
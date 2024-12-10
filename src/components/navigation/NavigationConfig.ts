import { HomeIcon, ClipboardDocumentListIcon, ChartPieIcon, Cog6ToothIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const mainNavigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Audit Review', href: '/audit', icon: ClipboardDocumentListIcon },
  { name: 'Remediation', href: '/remediation', icon: ChartPieIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export const adminNavigation = [
  { name: 'User Management', href: '/admin', icon: UserGroupIcon },
];
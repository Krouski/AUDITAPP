import { Vulnerability, Task, User } from '../types';

export const mockVulnerabilities: Vulnerability[] = [
  {
    id: '1',
    name: 'SQL Injection Vulnerability',
    description: 'Critical SQL injection vulnerability in login form',
    severity: 'Critical',
    status: 'In Progress',
    deadline: '2023-12-31',
    affectedSystems: ['Authentication Service', 'User Database'],
    createdAt: '2023-07-01',
    updatedAt: '2023-07-15'
  },
  {
    id: '2',
    name: 'Outdated SSL Certificate',
    description: 'SSL certificate needs to be renewed',
    severity: 'High',
    status: 'Unresolved',
    deadline: '2023-11-30',
    affectedSystems: ['Web Server'],
    createdAt: '2023-07-10',
    updatedAt: '2023-07-10'
  },
  {
    id: '3',
    name: 'Weak Password Policy',
    description: 'Password policy does not meet security standards',
    severity: 'Moderate',
    status: 'Resolved',
    deadline: '2023-10-15',
    affectedSystems: ['User Management'],
    createdAt: '2023-06-15',
    updatedAt: '2023-07-20'
  },
  {
    id: '4',
    name: 'Unencrypted Data Storage',
    description: 'Customer data stored without encryption',
    severity: 'Critical',
    status: 'In Progress',
    deadline: '2023-09-30',
    affectedSystems: ['Database', 'Storage Service'],
    createdAt: '2023-07-05',
    updatedAt: '2023-07-18'
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Implement SQL Parameterization',
    description: 'Update login form to use parameterized queries',
    vulnerabilityId: '1',
    assignedTeam: 'Backend Team',
    status: 'In Progress',
    dueDate: '2023-12-15',
    createdAt: '2023-07-01',
    updatedAt: '2023-07-15'
  },
  {
    id: '2',
    title: 'Renew SSL Certificate',
    description: 'Purchase and install new SSL certificate',
    vulnerabilityId: '2',
    assignedTeam: 'DevOps Team',
    status: 'To Do',
    dueDate: '2023-11-15',
    createdAt: '2023-07-10',
    updatedAt: '2023-07-10'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01'
  },
  {
    id: '2',
    username: 'user1',
    email: 'user1@example.com',
    role: 'user',
    status: 'active',
    createdAt: '2023-01-02',
    updatedAt: '2023-01-02'
  },
  {
    id: '3',
    username: 'viewer1',
    email: 'viewer1@example.com',
    role: 'viewer',
    status: 'inactive',
    createdAt: '2023-01-03',
    updatedAt: '2023-01-03'
  }
];
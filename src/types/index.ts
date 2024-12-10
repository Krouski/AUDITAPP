export type Severity = 'Critical' | 'High' | 'Moderate' | 'Low';
export type Status = 'Resolved' | 'In Progress' | 'Unresolved';
export type UserRole = 'admin' | 'user' | 'viewer';
export type UserStatus = 'active' | 'inactive';

export interface Vulnerability {
  id: string;
  name: string;
  description: string;
  severity: Severity;
  status: Status;
  deadline: string;
  affectedSystems: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  vulnerabilityId: string;
  assignedTeam: string;
  status: 'To Do' | 'In Progress' | 'Completed';
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
}
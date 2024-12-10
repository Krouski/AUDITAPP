import { useQuery } from '@tanstack/react-query';
import { mockUsers } from '../lib/mockData';
import { User } from '../types';

export function useUsers() {
  return useQuery<User[]>(['users'], async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUsers;
  });
}
import { useQuery } from '@tanstack/react-query';
import { mockVulnerabilities } from '../lib/mockData';
import { Vulnerability } from '../types';

export function useVulnerabilities() {
  return useQuery<Vulnerability[]>(['vulnerabilities'], async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockVulnerabilities;
  });
}
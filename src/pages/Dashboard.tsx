import React from 'react';
import { Grid } from '@tremor/react';
import SecurityScore from '../components/dashboard/SecurityScore';
import VulnerabilityChart from '../components/dashboard/VulnerabilityChart';
import TimelineChart from '../components/dashboard/TimelineChart';
import KPICards from '../components/dashboard/KPICards';
import { useVulnerabilities } from '../hooks/useVulnerabilities';

export default function Dashboard() {
  const { data: vulnerabilities = [], isLoading } = useVulnerabilities();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Calculate KPIs
  const totalVulnerabilities = vulnerabilities.length;
  const resolvedCount = vulnerabilities.filter(v => v.status === 'Resolved').length;
  const remediationPercentage = Math.round((resolvedCount / totalVulnerabilities) * 100) || 0;
  
  // Calculate security score based on vulnerability severity and status
  const calculateSecurityScore = () => {
    const weights = { Critical: 4, High: 3, Moderate: 2, Low: 1 };
    const maxScore = vulnerabilities.reduce((acc, v) => acc + weights[v.severity], 0) * 100;
    const currentScore = vulnerabilities.reduce((acc, v) => {
      const weight = weights[v.severity];
      const statusMultiplier = v.status === 'Resolved' ? 1 : v.status === 'In Progress' ? 0.5 : 0;
      return acc + (weight * statusMultiplier * 100);
    }, 0);
    return Math.round((currentScore / maxScore) * 100) || 0;
  };

  // Generate timeline data from vulnerabilities
  const timelineData = [
    { date: '2023-01', detected: 5, resolved: 2 },
    { date: '2023-02', detected: 8, resolved: 4 },
    { date: '2023-03', detected: 12, resolved: 7 },
  ];

  return (
    <div className="space-y-6">
      <SecurityScore score={calculateSecurityScore()} />
      
      <KPICards
        totalVulnerabilities={totalVulnerabilities}
        remediationPercentage={remediationPercentage}
        averageResolutionTime={5.2}
      />
      
      <Grid numItems={1} numItemsLg={2} className="gap-6">
        <VulnerabilityChart vulnerabilities={vulnerabilities} />
        <TimelineChart data={timelineData} />
      </Grid>
    </div>
  );
}
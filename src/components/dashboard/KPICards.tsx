import React from 'react';
import { Card, Text, Metric, Grid } from '@tremor/react';

interface KPICardsProps {
  totalVulnerabilities: number;
  remediationPercentage: number;
  averageResolutionTime: number;
}

export default function KPICards({
  totalVulnerabilities,
  remediationPercentage,
  averageResolutionTime,
}: KPICardsProps) {
  return (
    <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4">
      <Card>
        <Text>Total Vulnerabilities</Text>
        <Metric>{totalVulnerabilities}</Metric>
      </Card>
      <Card>
        <Text>Remediation Completed</Text>
        <Metric>{remediationPercentage}%</Metric>
      </Card>
      <Card>
        <Text>Avg. Resolution Time (days)</Text>
        <Metric>{averageResolutionTime}</Metric>
      </Card>
    </Grid>
  );
}
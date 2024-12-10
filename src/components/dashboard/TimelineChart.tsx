import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';
import { format } from 'date-fns';

interface TimelineData {
  date: string;
  detected: number;
  resolved: number;
}

interface TimelineChartProps {
  data: TimelineData[];
}

export default function TimelineChart({ data }: TimelineChartProps) {
  return (
    <Card>
      <Title>Vulnerability Timeline</Title>
      <AreaChart
        data={data}
        index="date"
        categories={['detected', 'resolved']}
        colors={['red', 'green']}
        className="mt-6"
      />
    </Card>
  );
}
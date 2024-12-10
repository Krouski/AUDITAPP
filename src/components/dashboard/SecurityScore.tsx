import React from 'react';
import { Card, Text, Metric } from '@tremor/react';

interface SecurityScoreProps {
  score: number;
}

export default function SecurityScore({ score }: SecurityScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <Card className="max-w-xs mx-auto">
      <Text>Global Security Score</Text>
      <Metric className={getScoreColor(score)}>{score}/100</Metric>
    </Card>
  );
}
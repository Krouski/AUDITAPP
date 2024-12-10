import React from 'react';
import { Badge } from '@tremor/react';
import { UserStatus } from '../../types';

interface UserStatusBadgeProps {
  status: UserStatus;
}

export default function UserStatusBadge({ status }: UserStatusBadgeProps) {
  return (
    <Badge color={status === 'active' ? 'green' : 'gray'}>
      {status}
    </Badge>
  );
}
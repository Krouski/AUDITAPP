import React from 'react';
import { Card, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Badge } from '@tremor/react';
import { Switch } from '@headlessui/react';
import { User } from '../../types';
import UserActions from './UserActions';
import UserStatusBadge from './UserStatusBadge';

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: boolean) => void;
}

export default function UserTable({ users, onEdit, onDelete, onStatusChange }: UserTableProps) {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Username</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge color={user.role === 'admin' ? 'red' : user.role === 'user' ? 'blue' : 'gray'}>
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>
                <Switch
                  checked={user.status === 'active'}
                  onChange={(checked) => onStatusChange(user.id, checked)}
                  className={`${
                    user.status === 'active' ? 'bg-indigo-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Toggle user status</span>
                  <span
                    className={`${
                      user.status === 'active' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </TableCell>
              <TableCell>
                <UserActions user={user} onEdit={onEdit} onDelete={onDelete} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
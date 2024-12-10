import React from 'react';
import { User } from '../../types';

interface UserActionsProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

export default function UserActions({ user, onEdit, onDelete }: UserActionsProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onEdit(user)}
        className="text-blue-600 hover:text-blue-800"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(user.id)}
        className="text-red-600 hover:text-red-800"
      >
        Delete
      </button>
    </div>
  );
}
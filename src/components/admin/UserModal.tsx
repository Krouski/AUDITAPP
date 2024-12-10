import React from 'react';
import { Dialog } from '@headlessui/react';
import { User } from '../../types';
import UserForm from './UserForm';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<User>) => void;
  user?: User;
}

export default function UserModal({
  isOpen,
  onClose,
  onSubmit,
  user,
}: UserModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-lg rounded bg-white p-6">
          <Dialog.Title className="text-lg font-medium mb-4">
            {user ? 'Edit User' : 'Add New User'}
          </Dialog.Title>

          <UserForm onSubmit={onSubmit} user={user} />
          
          <button
            type="button"
            onClick={onClose}
            className="mt-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
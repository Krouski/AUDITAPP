import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import UserTable from '../components/admin/UserTable';
import UserModal from '../components/admin/UserModal';
import { User } from '../types';
import { useUsers } from '../hooks/useUsers';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Admin() {
  const { data: users = [], isLoading } = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>();

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        // In a real app, you would call an API here
        toast.success('User deleted successfully');
      } catch (error) {
        toast.error('Failed to delete user');
      }
    }
  };

  const handleStatusChange = async (id: string, status: boolean) => {
    try {
      // In a real app, you would call an API here
      toast.success('User status updated successfully');
    } catch (error) {
      toast.error('Failed to update user status');
    }
  };

  const handleSubmit = async (data: Partial<User>) => {
    try {
      // In a real app, you would call an API here
      toast.success(
        selectedUser
          ? 'User updated successfully'
          : 'User created successfully'
      );
      setIsModalOpen(false);
      setSelectedUser(undefined);
    } catch (error) {
      toast.error('Failed to save user');
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add User
        </button>
      </div>

      <UserTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />

      <UserModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(undefined);
        }}
        onSubmit={handleSubmit}
        user={selectedUser}
      />
    </div>
  );
}
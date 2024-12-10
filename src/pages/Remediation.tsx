import React from 'react';
import KanbanBoard from '../components/remediation/KanbanBoard';
import { mockTasks } from '../lib/mockData';
import { toast } from 'react-hot-toast';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Remediation() {
  const handleTaskMove = async (taskId: string, newStatus: string) => {
    try {
      // In a real app, you would call an API here
      toast.success('Task status updated successfully');
    } catch (error) {
      toast.error('Failed to update task status');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Remediation Tracking</h1>
        <button
          onClick={() => toast.success('Coming soon!')}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add Task
        </button>
      </div>

      <KanbanBoard tasks={mockTasks} onTaskMove={handleTaskMove} />
    </div>
  );
}
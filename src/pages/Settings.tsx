import React from 'react';
import { Card } from '@tremor/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  emailAddress: string;
}

export default function Settings() {
  const { register, handleSubmit } = useForm<NotificationSettings>({
    defaultValues: {
      emailNotifications: true,
      pushNotifications: false,
      emailAddress: '',
    },
  });

  const onSubmit = async (data: NotificationSettings) => {
    try {
      // In a real app, you would call an API here
      toast.success('Settings saved successfully');
    } catch (error) {
      toast.error('Failed to save settings');
    }
  };

  const handleExport = () => {
    // In a real app, this would trigger a file download
    toast.success('Export started');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <Card>
        <h2 className="text-lg font-medium mb-4">Notification Preferences</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('emailNotifications')}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Email Notifications</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register('pushNotifications')}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span>Push Notifications</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              {...register('emailAddress')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Save Settings
          </button>
        </form>
      </Card>

      <Card>
        <h2 className="text-lg font-medium mb-4">Data Management</h2>
        <div className="space-y-4">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Export Data (CSV)
          </button>
        </div>
      </Card>
    </div>
  );
}
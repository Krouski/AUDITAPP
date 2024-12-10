import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import VulnerabilityTable from '../components/audit/VulnerabilityTable';
import VulnerabilityModal from '../components/audit/VulnerabilityModal';
import { useVulnerabilities } from '../hooks/useVulnerabilities';
import { Vulnerability } from '../types';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AuditReview() {
  const { data: vulnerabilities = [], isLoading } = useVulnerabilities();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVulnerability, setSelectedVulnerability] = useState<Vulnerability | undefined>();

  const handleEdit = (vulnerability: Vulnerability) => {
    setSelectedVulnerability(vulnerability);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this vulnerability?')) {
      try {
        // In a real app, you would call an API here
        toast.success('Vulnerability deleted successfully');
      } catch (error) {
        toast.error('Failed to delete vulnerability');
      }
    }
  };

  const handleSubmit = async (data: Partial<Vulnerability>) => {
    try {
      // In a real app, you would call an API here
      toast.success(
        selectedVulnerability
          ? 'Vulnerability updated successfully'
          : 'Vulnerability created successfully'
      );
      setIsModalOpen(false);
      setSelectedVulnerability(undefined);
    } catch (error) {
      toast.error('Failed to save vulnerability');
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Audit Review</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add Vulnerability
        </button>
      </div>

      <VulnerabilityTable
        vulnerabilities={vulnerabilities}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <VulnerabilityModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedVulnerability(undefined);
        }}
        onSubmit={handleSubmit}
        vulnerability={selectedVulnerability}
      />
    </div>
  );
}
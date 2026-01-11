'use client';

import { factChecks, VerificationStatus, ConfidenceLevel } from '@/data/factChecks';
import VerificationBadge from './VerificationBadge';
import { useState } from 'react';

export default function FactCheckingDashboard() {
  const [statusFilter, setStatusFilter] = useState<VerificationStatus | 'All'>('All');
  const [confidenceFilter, setConfidenceFilter] = useState<ConfidenceLevel | 'All'>('All');

  const filteredFactChecks = factChecks.filter((fact) => {
    const statusMatch = statusFilter === 'All' || fact.verification_status === statusFilter;
    const confidenceMatch = confidenceFilter === 'All' || fact.confidence_level === confidenceFilter;
    return statusMatch && confidenceMatch;
  });

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="status-filter" className="block text-sm font-medium text-slate-700 mb-2">
            Filter by Status
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as VerificationStatus | 'All')}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="All">All Statuses</option>
            <option value="Verified">Verified</option>
            <option value="Partially Verified">Partially Verified</option>
            <option value="Not Verified">Not Verified</option>
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="confidence-filter" className="block text-sm font-medium text-slate-700 mb-2">
            Filter by Confidence
          </label>
          <select
            id="confidence-filter"
            value={confidenceFilter}
            onChange={(e) => setConfidenceFilter(e.target.value as ConfidenceLevel | 'All')}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="All">All Confidence Levels</option>
            <option value="High">High Confidence</option>
            <option value="Medium">Medium Confidence</option>
            <option value="Low">Low Confidence</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-slate-600">
        Showing {filteredFactChecks.length} of {factChecks.length} claims
      </div>

      {/* Fact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFactChecks.map((fact) => (
          <div
            key={fact.id}
            className="bg-white rounded-lg shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <VerificationBadge 
                status={fact.verification_status} 
                confidence={fact.confidence_level}
                showConfidence={true}
              />
            </div>

            <h3 className="text-lg font-semibold text-slate-800 mb-3">
              {fact.claim}
            </h3>

            {fact.details && (
              <p className="text-sm text-slate-600 mb-4">
                {fact.details}
              </p>
            )}

            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                Sources:
              </p>
              <div className="flex flex-wrap gap-2">
                {fact.sources.map((source, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-1 rounded text-xs bg-slate-100 text-slate-700"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFactChecks.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No claims match the selected filters.
        </div>
      )}
    </div>
  );
}

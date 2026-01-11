import { factChecks } from '@/data/factChecks';
import VerificationBadge from '@/components/VerificationBadge';

export default function KeyFactsPage() {
  const verifiedFacts = factChecks.filter(fact => fact.verification_status === 'Verified');
  const partiallyVerified = factChecks.filter(fact => fact.verification_status === 'Partially Verified');
  const notVerified = factChecks.filter(fact => fact.verification_status === 'Not Verified');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Key Facts and Claims
        </h1>
        <p className="text-slate-600 mb-8">
          A comprehensive list of verified claims about the incident with links to credible sources. 
          Each fact includes reliability indicators showing verification status and confidence level.
        </p>

        {/* Verified Facts */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            Verified Facts ({verifiedFacts.length})
          </h2>
          <div className="space-y-6">
            {verifiedFacts.map((fact) => (
              <div 
                key={fact.id}
                className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500"
              >
                <div className="mb-3">
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
                  <p className="text-slate-600 mb-4">
                    {fact.details}
                  </p>
                )}
                <div className="pt-3 border-t border-green-200">
                  <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                    Sources:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fact.sources.map((source, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded text-sm bg-white text-slate-700 border border-green-300"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partially Verified Facts */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            Partially Verified ({partiallyVerified.length})
          </h2>
          <div className="space-y-6">
            {partiallyVerified.map((fact) => (
              <div 
                key={fact.id}
                className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500"
              >
                <div className="mb-3">
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
                  <p className="text-slate-600 mb-4">
                    {fact.details}
                  </p>
                )}
                <div className="pt-3 border-t border-yellow-200">
                  <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                    Sources:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fact.sources.map((source, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded text-sm bg-white text-slate-700 border border-yellow-300"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Not Verified Facts */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            Not Verified ({notVerified.length})
          </h2>
          <div className="space-y-6">
            {notVerified.map((fact) => (
              <div 
                key={fact.id}
                className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500"
              >
                <div className="mb-3">
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
                  <p className="text-slate-600 mb-4">
                    {fact.details}
                  </p>
                )}
                <div className="pt-3 border-t border-red-200">
                  <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                    Sources:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fact.sources.map((source, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded text-sm bg-white text-slate-700 border border-red-300"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

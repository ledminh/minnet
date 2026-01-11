import FactCheckingDashboard from '@/components/FactCheckingDashboard';

export default function FactCheckingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Fact-Checking Dashboard
        </h1>
        <p className="text-slate-600 mb-8">
          Interactive dashboard displaying verification statuses and confidence level indicators 
          for each claim. Use the filters below to explore specific categories of information.
        </p>

        <div className="mb-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Understanding the Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-700 mb-3">Verification Status:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-300">
                    Verified
                  </span>
                  <span className="text-slate-600">Confirmed by multiple reliable sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 border border-yellow-300">
                    Partially Verified
                  </span>
                  <span className="text-slate-600">Some evidence supports the claim</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-800 border border-red-300">
                    Not Verified
                  </span>
                  <span className="text-slate-600">Insufficient evidence to confirm</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700 mb-3">Confidence Level:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-300">
                    High
                  </span>
                  <span className="text-slate-600">Strong evidence from credible sources</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800 border border-orange-300">
                    Medium
                  </span>
                  <span className="text-slate-600">Some corroboration needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 border border-gray-300">
                    Low
                  </span>
                  <span className="text-slate-600">Limited or conflicting evidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FactCheckingDashboard />
      </div>
    </div>
  );
}

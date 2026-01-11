import { officialStatements } from '@/data/statements';

export default function StatementsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Official Statements
        </h1>
        <p className="text-slate-600 mb-8">
          Summary of statements from local officials, ICE, and law enforcement regarding the incident. 
          Links to full articles and official sources are provided.
        </p>

        <div className="space-y-6">
          {officialStatements.map((statement) => (
            <div 
              key={statement.id}
              className="bg-white rounded-lg border-2 border-slate-200 hover:border-blue-300 transition-colors p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {statement.source}
                    </span>
                    <span className="text-sm text-slate-500">
                      {new Date(statement.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800 mb-3">
                    {statement.title}
                  </h2>
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">
                {statement.summary}
              </p>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href={statement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline"
                >
                  Read Full Statement
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Note on Official Statements
          </h2>
          <p className="text-slate-600 text-sm">
            These statements represent the official positions and responses from various 
            government entities and officials. They may reflect different perspectives on 
            the incident and should be considered as part of the broader context of information 
            available about this event.
          </p>
        </div>
      </div>
    </div>
  );
}

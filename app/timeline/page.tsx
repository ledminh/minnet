import Timeline from '@/components/Timeline';
import { events } from '@/data/events';

export default function TimelinePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Timeline of Events
        </h1>
        <p className="text-slate-600 mb-8">
          A chronological view of key events related to the Minnesota ICE shooting incident. 
          Click on any event to view detailed information and sources.
        </p>
        
        <Timeline />

        <div className="mt-12 pt-8 border-t border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            All Events
          </h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {event.description}
                    </h3>
                    {event.details && (
                      <p className="text-slate-600">
                        {event.details}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200 mt-4">
                  <p className="text-xs font-semibold text-slate-600 uppercase mb-2">
                    Sources:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {event.sources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {source.name} →
                      </a>
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

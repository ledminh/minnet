'use client';

import { events } from '@/data/events';
import { useState, useRef, useEffect } from 'react';

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to center on mount
    if (timelineRef.current) {
      const scrollWidth = timelineRef.current.scrollWidth;
      const clientWidth = timelineRef.current.clientWidth;
      timelineRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="w-full">
      {/* Timeline Container */}
      <div 
        ref={timelineRef}
        className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200"
        role="region"
        aria-label="Interactive timeline of events"
      >
        <div className="inline-flex min-w-full px-4 py-8 space-x-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="flex flex-col items-center min-w-[250px]"
            >
              {/* Event Dot and Line */}
              <div className="relative">
                <button
                  onClick={() => setSelectedEvent(index === selectedEvent ? null : index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    selectedEvent === index
                      ? 'bg-blue-600 scale-150'
                      : 'bg-slate-400 hover:bg-blue-400 hover:scale-125'
                  }`}
                  aria-expanded={selectedEvent === index}
                  aria-label={`View details for event on ${formatDate(event.date)}`}
                />
                {index < events.length - 1 && (
                  <div className="absolute top-2 left-4 w-[234px] h-0.5 bg-slate-300" />
                )}
              </div>

              {/* Date */}
              <div className="mt-4 text-sm font-semibold text-slate-700 text-center">
                {formatDate(event.date)}
              </div>

              {/* Event Title */}
              <div className="mt-2 text-center text-sm text-slate-600 px-2">
                {event.description}
              </div>

              {/* Expanded Details */}
              {selectedEvent === index && (
                <div className="mt-4 p-4 bg-white rounded-lg shadow-lg border border-slate-200 max-w-xs">
                  <p className="text-sm text-slate-700 mb-3">
                    {event.details || event.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-600 uppercase">Sources:</p>
                    {event.sources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {source.name} →
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center text-sm text-slate-500 mt-4">
        Click on any event to view details and sources
      </div>
    </div>
  );
}

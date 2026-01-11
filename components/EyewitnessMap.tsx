'use client';

import { eyewitnessAccounts } from '@/data/eyewitness';
import { useState } from 'react';

export default function EyewitnessMap() {
  const [selectedWitness, setSelectedWitness] = useState<number | null>(null);

  // Center coordinates (average of all witness locations)
  const centerLat = 44.9479;
  const centerLng = -93.2650;

  return (
    <div className="w-full">
      {/* Simple Map Representation */}
      <div className="bg-slate-100 rounded-lg p-8 mb-6 relative min-h-[400px] border-2 border-slate-300">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-slate-700">
            South Minneapolis - Incident Area
          </h3>
          <p className="text-sm text-slate-500">
            Click on witness markers to view their accounts
          </p>
        </div>

        {/* Witness Markers */}
        <div className="relative w-full h-80">
          {eyewitnessAccounts.map((witness, index) => {
            // Calculate relative positions (simplified 2D representation)
            const relativeX = ((witness.location.lng - centerLng) * 10000) + 50;
            const relativeY = 50 - ((witness.location.lat - centerLat) * 10000);
            
            return (
              <div
                key={witness.id}
                className="absolute"
                style={{
                  left: `${relativeX}%`,
                  top: `${relativeY}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <button
                  onClick={() => setSelectedWitness(index === selectedWitness ? null : index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all ${
                    selectedWitness === index
                      ? 'bg-blue-600 scale-125 shadow-lg'
                      : 'bg-red-500 hover:bg-red-600 hover:scale-110'
                  }`}
                  aria-label={`View testimony from ${witness.name}`}
                >
                  {index + 1}
                </button>
              </div>
            );
          })}

          {/* Center marker for incident location */}
          <div
            className="absolute"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg" 
                 title="Incident Location"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-black rounded-full border-2 border-white" />
            <span>Incident Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full" />
            <span>Witness Locations</span>
          </div>
        </div>
      </div>

      {/* Witness Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eyewitnessAccounts.map((witness, index) => (
          <div
            key={witness.id}
            className={`bg-white rounded-lg shadow-md border-2 p-6 transition-all ${
              selectedWitness === index
                ? 'border-blue-500 shadow-lg'
                : 'border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{witness.name}</h3>
                  <p className="text-xs text-slate-500">{witness.date}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-3 italic">
              &quot;{witness.testimony}&quot;
            </p>

            <div className="pt-3 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                <span className="font-semibold">Location:</span> {witness.location.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

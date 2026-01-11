import EyewitnessMap from '@/components/EyewitnessMap';

export default function EyewitnessPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Eyewitness Accounts
        </h1>
        <p className="text-slate-600 mb-8">
          Testimonials from individuals who witnessed the incident or its aftermath. 
          The interactive map shows the approximate locations of eyewitnesses relative to the incident.
        </p>

        <div className="mb-8 bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h2 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Important Note
          </h2>
          <p className="text-slate-700 text-sm">
            Eyewitness accounts represent individual perspectives and may contain subjective 
            observations. These testimonies are presented as reported and should be considered 
            alongside other verified information and official statements. Names have been 
            anonymized to protect witness privacy.
          </p>
        </div>

        <EyewitnessMap />

        <div className="mt-12 bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Context and Reliability
          </h2>
          <p className="text-slate-600 text-sm mb-3">
            The eyewitness accounts presented here have been reported through various news 
            sources. While they provide valuable perspectives on the incident, it&apos;s important 
            to note:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
            <li>Witness accounts may vary based on viewing angle and distance from the incident</li>
            <li>Memory and perception can be influenced by stress and time elapsed</li>
            <li>Multiple perspectives help create a more complete picture of events</li>
            <li>Official investigations are ongoing to verify all accounts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

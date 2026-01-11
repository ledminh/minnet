export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Contact & Feedback
        </h1>
        <p className="text-slate-600 mb-8">
          This page provides information about how to submit feedback and access community 
          resources related to the Minnesota ICE shooting incident.
        </p>

        {/* Community Resources */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Community Resources
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-semibold text-slate-800 mb-2">
                Immigration Rights Organizations
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Organizations providing support and legal assistance to immigrant communities.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.aclu.org/immigrant-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    ACLU - Immigrants&apos; Rights
                  </a>
                </li>
                <li>
                  <a href="https://www.immigrantlaw.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    National Immigration Law Center
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-semibold text-slate-800 mb-2">
                Local Community Support
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Minneapolis-area organizations providing community support and advocacy.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.minneapolismn.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    City of Minneapolis - Official Website
                  </a>
                </li>
                <li>
                  <a href="https://mn.gov/governor/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Office of Minnesota Governor
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="font-semibold text-slate-800 mb-2">
                Legal Aid and Advocacy
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                Resources for those seeking legal assistance or wanting to get involved in advocacy.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.aila.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    American Immigration Lawyers Association
                  </a>
                </li>
                <li>
                  <a href="https://www.nilc.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    National Immigration Law Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            Provide Feedback
          </h2>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <p className="text-slate-600 text-sm mb-4">
              This website is designed to provide factual, verified information about the 
              Minnesota ICE shooting incident. If you have:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-4">
              <li>Corrections or updates to the information presented</li>
              <li>Additional verified sources that should be included</li>
              <li>Suggestions for improving the website&apos;s usability or accessibility</li>
              <li>Questions about the information presented</li>
            </ul>
            <p className="text-slate-600 text-sm">
              Please contact the relevant news organizations or community advocacy groups 
              listed above, as they can help ensure accurate information reaches the appropriate 
              channels.
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
          <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Important Notice
          </h3>
          <p className="text-slate-700 text-sm">
            This website is an informational resource and does not provide legal advice or 
            represent any official government position. For official statements, please refer 
            to the appropriate government agencies. For legal assistance, please contact qualified 
            legal professionals or the organizations listed above.
          </p>
        </div>

        {/* Website Purpose */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            About This Website
          </h2>
          <p className="text-slate-600 text-sm mb-3">
            This website was created to provide a comprehensive, centralized source of verified 
            information about the Minnesota ICE shooting incident. Our goals are to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
            <li>Present facts from credible, verified sources</li>
            <li>Provide context through multiple perspectives</li>
            <li>Ensure information is accessible and easy to understand</li>
            <li>Distinguish between verified facts and unconfirmed claims</li>
            <li>Support informed public discourse through transparent information sharing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

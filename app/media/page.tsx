'use client';

import { mediaArticles } from '@/data/media';
import { useState } from 'react';

export default function MediaPage() {
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Local' | 'National' | 'International'>('All');

  const filteredArticles = categoryFilter === 'All' 
    ? mediaArticles 
    : mediaArticles.filter(article => article.category === categoryFilter);

  const localCount = mediaArticles.filter(a => a.category === 'Local').length;
  const nationalCount = mediaArticles.filter(a => a.category === 'National').length;
  const internationalCount = mediaArticles.filter(a => a.category === 'International').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          Media Coverage Summary
        </h1>
        <p className="text-slate-600 mb-8">
          Collection of news articles categorized by source, providing different perspectives 
          on the incident. Articles are grouped by local, national, and international coverage.
        </p>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setCategoryFilter('All')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                categoryFilter === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Articles ({mediaArticles.length})
            </button>
            <button
              onClick={() => setCategoryFilter('Local')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                categoryFilter === 'Local'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Local ({localCount})
            </button>
            <button
              onClick={() => setCategoryFilter('National')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                categoryFilter === 'National'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              National ({nationalCount})
            </button>
            <button
              onClick={() => setCategoryFilter('International')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                categoryFilter === 'International'
                  ? 'bg-orange-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              International ({internationalCount})
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {filteredArticles.map((article) => (
            <div 
              key={article.id}
              className="bg-white rounded-lg border-2 border-slate-200 hover:border-blue-300 transition-all p-6 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      article.category === 'Local' 
                        ? 'bg-green-100 text-green-800'
                        : article.category === 'National'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm mb-1">
                    {article.source}
                  </h3>
                </div>
              </div>

              <h2 className="text-lg font-semibold text-slate-800 mb-3">
                {article.title}
              </h2>

              <p className="text-sm text-slate-600 mb-3">
                {article.summary}
              </p>

              <div className="mb-4 pt-3 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-600 uppercase mb-1">
                  Perspective:
                </p>
                <p className="text-sm text-slate-700 italic">
                  {article.perspective}
                </p>
              </div>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline"
              >
                Read Article
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
          ))}
        </div>

        {/* Analysis Section */}
        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Understanding Media Perspectives
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            Different news sources may emphasize different aspects of the incident based on 
            their audience, geographic location, and editorial focus. When reviewing media 
            coverage, consider:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
            <li><strong>Local sources</strong> often focus on community impact and local government response</li>
            <li><strong>National sources</strong> typically examine broader policy implications and federal actions</li>
            <li><strong>International sources</strong> may provide external perspectives on US immigration policy</li>
            <li>Multiple sources help create a more comprehensive understanding of the event</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

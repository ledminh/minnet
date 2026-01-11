import Link from 'next/link';
import Timeline from '@/components/Timeline';
import { events } from '@/data/events';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Minnesota ICE Shooting Incident
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          Comprehensive Information Portal
        </p>
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-semibold text-slate-700 mb-3">
            Executive Summary
          </h2>
          <p className="text-slate-600 mb-4">
            On January 7, 2026, an ICE agent shot and killed 37-year-old Renee Nicole Good 
            in Minneapolis, sparking controversy and public outcry. Eyewitness accounts 
            contradict the federal narrative, suggesting Good posed no threat at the time 
            of the shooting. Local officials, including Governor Tim Walz, have publicly 
            disputed the federal account and demanded transparency.
          </p>
          <p className="text-slate-600 mb-4">
            New video evidence has emerged showing the incident from the perspective of 
            the ICE agent, which adds complexity to the situation. Public sentiment is 
            increasingly critical of federal immigration enforcement practices, revealing 
            underlying tensions between federal and local authorities.
          </p>
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-slate-800 mb-6">
          Interactive Timeline of Events
        </h2>
        <Timeline />
      </div>

      {/* Quick Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Link 
          href="/key-facts"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Key Facts
          </h3>
          <p className="text-slate-600 text-sm">
            Verified claims with reliability indicators and source links
          </p>
        </Link>

        <Link 
          href="/fact-checking"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Fact-Checking Dashboard
          </h3>
          <p className="text-slate-600 text-sm">
            Interactive dashboard with verification statuses and confidence levels
          </p>
        </Link>

        <Link 
          href="/statements"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Official Statements
          </h3>
          <p className="text-slate-600 text-sm">
            Statements from local officials, ICE, and law enforcement
          </p>
        </Link>

        <Link 
          href="/eyewitness"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-red-500"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Eyewitness Accounts
          </h3>
          <p className="text-slate-600 text-sm">
            Testimonials with interactive map showing witness locations
          </p>
        </Link>

        <Link 
          href="/media"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Media Coverage
          </h3>
          <p className="text-slate-600 text-sm">
            Collection of news articles from local, national, and international sources
          </p>
        </Link>

        <Link 
          href="/contact"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-slate-500"
        >
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Contact & Feedback
          </h3>
          <p className="text-slate-600 text-sm">
            Provide input and access community resources
          </p>
        </Link>
      </div>

      {/* Key Statistics */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-semibold mb-6">
          Information Overview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{events.length}</div>
            <div className="text-sm text-slate-300">Timeline Events</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">8</div>
            <div className="text-sm text-slate-300">Verified Facts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">4</div>
            <div className="text-sm text-slate-300">Eyewitnesses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-sm text-slate-300">Media Sources</div>
          </div>
        </div>
      </div>
    </div>
  );
}

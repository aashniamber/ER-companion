'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { terminology, searchTerms } from '@/data/terminology';
import { Search, ChevronLeft } from 'lucide-react';

export default function DictionaryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const results = searchQuery.trim() ? searchTerms(searchQuery) : terminology;

  return (
    <div className="bg-gradient-to-br from-cream via-lavender-50 to-sky-50 min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-lavender-600 font-semibold mb-4 hover:underline">
              <ChevronLeft size={20} />
              Back
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
            <span className="text-5xl">📚</span>
            Medical Dictionary
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Confused by medical terminology? Search our glossary to understand the words you hear in the ER.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search medical terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-lavender-200 focus:border-lavender-400 focus:outline-none text-gray-800 text-lg"
            />
          </div>
        </div>

        {/* Terms List */}
        <div className="space-y-4">
          {results.map((term) => (
            <div key={term.id} id={term.id} className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{term.icon}</div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{term.term}</h3>
                    {term.pronunciation && (
                      <p className="text-sm text-gray-500 italic">Pronounced: {term.pronunciation}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Definition:</h4>
                      <p className="text-gray-600">{term.definition}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">In Simple Terms:</h4>
                      <p className="text-gray-600">{term.simpleExplanation}</p>
                    </div>

                    <div className="bg-lavender-50 rounded-lg p-3 border-l-4 border-lavender-400">
                      <h4 className="font-semibold text-gray-700 mb-1">Example:</h4>
                      <p className="text-gray-600 italic">&quot;{term.exampleUsage}&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No terms found matching &quot;{searchQuery}&quot;</p>
            <p className="text-gray-500 mt-2">Try searching for common ER terms like &quot;triage&quot;, &quot;labs&quot;, or &quot;admission&quot;</p>
          </div>
        )}

        {/* Tip */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
          <p className="text-sm text-blue-900">
            <strong>💡 Tip:</strong> Don&rsquo;t hesitate to ask your care team to explain any term you don&rsquo;t understand. Good
            communication is part of good care.
          </p>
        </div>
      </div>
    </div>
  );
}

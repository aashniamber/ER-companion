'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { tests } from '@/data/tests';
import ModuleCard from '@/components/ModuleCard';
import { Search, ChevronLeft } from 'lucide-react';

export default function TestsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTests = tests.filter((test) =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-cream via-sky-50 to-lavender-50 min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-sky-600 font-semibold mb-4 hover:underline">
              <ChevronLeft size={20} />
              Back
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
            <span className="text-5xl">🧪</span>
            Tests & Scans
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Learn about the different tests and imaging procedures you might experience in the ER.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-sky-200 focus:border-sky-400 focus:outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTests.map((test) => (
            <div key={test.id} id={test.id}>
              <ModuleCard
                icon={test.icon}
                title={test.name}
                description={test.description}
                content={[
                  { label: 'What It Is', items: [test.whatItIs] },
                  {
                    label: 'Why It Is Used',
                    items: test.whyItIsUsed.slice(0, 3),
                  },
                  {
                    label: 'What to Expect',
                    items: test.whatToExpect.slice(0, 2),
                  },
                  {
                    label: 'Common Concerns',
                    items: test.commonConcerns.slice(0, 2),
                  },
                  { label: 'Duration', items: [test.duration] },
                ]}
                color="bg-sky-50 border-sky-200"
              />
            </div>
          ))}
        </div>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No tests found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> This information is for education only. Always ask your healthcare provider about
            specific test results and what they mean for your care.
          </p>
        </div>
      </div>
    </div>
  );
}

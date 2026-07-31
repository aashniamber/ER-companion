'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { procedures } from '@/data/procedures';
import ModuleCard from '@/components/ModuleCard';
import { Search, ChevronLeft } from 'lucide-react';

export default function ProceduresPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProcedures = procedures.filter((proc) =>
    proc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-cream via-sage-50 to-sky-50 min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-sage-600 font-semibold mb-4 hover:underline">
              <ChevronLeft size={20} />
              Back
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
            <span className="text-5xl">🩹</span>
            Procedures
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Understand common procedures you might experience during your ER visit.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search procedures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-sage-200 focus:border-sage-400 focus:outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProcedures.map((proc) => (
            <div key={proc.id} id={proc.id}>
              <ModuleCard
                icon={proc.icon}
                title={proc.name}
                description={proc.description}
                content={[
                  { label: 'What It Is', items: [proc.whatItIs] },
                  {
                    label: 'Why It Is Done',
                    items: proc.whyItIsDone.slice(0, 3),
                  },
                  {
                    label: 'What to Expect',
                    items: proc.whatToExpect.slice(0, 2),
                  },
                  {
                    label: 'What You May Hear',
                    items: proc.whatYouMayHear.slice(0, 2),
                  },
                  { label: 'Duration', items: [proc.duration] },
                ]}
                color="bg-sage-50 border-sage-200"
              />
            </div>
          ))}
        </div>

        {filteredProcedures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No procedures found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
          <p className="text-sm text-green-900">
            <strong>Note:</strong> Every person&rsquo;s experience is different. Talk to your care team about what to expect
            before any procedure.
          </p>
        </div>
      </div>
    </div>
  );
}

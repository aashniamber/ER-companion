'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { medications } from '@/data/medications';
import ModuleCard from '@/components/ModuleCard';
import { Search, ChevronLeft } from 'lucide-react';

export default function MedicationsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMeds = medications.filter((med) =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    med.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-cream via-lavender-50 to-peach-50 min-h-screen pb-12">
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
            <span className="text-5xl">💊</span>
            Medications & Treatments
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Learn about common medications and treatments used in the emergency department.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search medications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-lavender-200 focus:border-lavender-400 focus:outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Medications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredMeds.map((med) => (
            <div key={med.id} id={med.id}>
              <ModuleCard
                icon={med.icon}
                title={med.name}
                description={med.description}
                content={[
                  { label: 'General Purpose', items: [med.generalPurpose] },
                  {
                    label: 'Common Uses',
                    items: med.commonUses.slice(0, 3),
                  },
                  {
                    label: 'What You May Hear',
                    items: med.whatYouMayHear.slice(0, 2),
                  },
                  {
                    label: 'Common Concerns',
                    items: med.commonConcerns.slice(0, 2),
                  },
                ]}
                color="bg-lavender-50 border-lavender-200"
              />
            </div>
          ))}
        </div>

        {filteredMeds.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No medications found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}

        {/* Important Note */}
        <div className="mt-12 bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
          <p className="text-sm text-orange-900 mb-2">
            <strong>Important:</strong> This information is for education only. We do NOT provide:
          </p>
          <ul className="text-sm text-orange-900 space-y-1 ml-4">
            <li>• Dosage information</li>
            <li>• Medication recommendations</li>
            <li>• Interaction warnings</li>
          </ul>
          <p className="text-sm text-orange-900 mt-2">Always follow your doctor&rsquo;s directions and ask questions about any medication.</p>
        </div>
      </div>
    </div>
  );
}

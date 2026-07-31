'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import JourneyTimeline from '@/components/JourneyTimeline';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<string>('arrival-checkin');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('erCompanion_currentStep');
    if (saved) {
      setCurrentStep(saved);
    }
    setIsLoading(false);
  }, []);

  const handleSelectStep = (stepId: string) => {
    setCurrentStep(stepId);
    localStorage.setItem('erCompanion_currentStep', stepId);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cream via-sage-50 to-sage-100">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-pulse">🏥</div>
          <p className="text-gray-600">Loading ER Companion...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-cream via-sage-50 to-sage-100 min-h-screen">
      <div className="fixed left-0 top-0 w-40 h-full bg-gradient-to-r from-sage-100 to-transparent opacity-20 pointer-events-none" />
      <div className="fixed right-0 top-0 w-40 h-full bg-gradient-to-l from-teal-100 to-transparent opacity-20 pointer-events-none" />

      <div className="relative z-10">
        {/* TOP HEADER */}
        <section className="py-6 px-4 text-center border-b-2 border-gray-200">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-2">
            ER Companion
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This app will help you understand what&rsquo;s happening around you and answer questions about tests.
          </p>
        </section>

        {/* TWO COLUMN LAYOUT */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* LEFT COLUMN - Timeline */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Where Are You in Your ER Visit?
              </h2>
              <JourneyTimeline
                currentStep={currentStep}
                onSelectStep={handleSelectStep}
              />
            </div>

            {/* RIGHT COLUMN - Topics */}
            <div className="space-y-15">
              {/* Tests */}
              <Link href="/tests">
                <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-teal-200 hover:border-teal-400 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">🧪</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    Tests & Scans
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn about blood tests, X-rays, CT scans, ultrasounds, and more.
                  </p>
                </div>
              </Link>

              {/* Procedures */}
              <Link href="/procedures">
                <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-sage-200 hover:border-sage-400 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">🩹</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    Procedures
                  </h4>
                  <p className="text-sm text-gray-600">
                    Understand IV placement, stitches, splinting, wound care, and more.
                  </p>
                </div>
              </Link>

              {/* Medications */}
              <Link href="/medications">
                <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-rose-200 hover:border-rose-400 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">💊</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    Medications
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn about IV fluids, pain medications, antibiotics, and other treatments.
                  </p>
                </div>
              </Link>

              {/* Dictionary */}
              <Link href="/dictionary">
                <div className="bg-gradient-to-br from-sage-100 to-teal-100 rounded-2xl p-6 border-2 border-sage-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="text-4xl mb-3">📚</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    Medical Dictionary
                  </h4>
                  <p className="text-sm text-gray-600">
                    Search our glossary to understand terminology you hear in the ER.
                  </p>
                </div>
              </Link>

              {/* AI Chat */}
              <Link href="/chat">
                <div className="bg-gradient-to-br from-sage-100 to-cream rounded-2xl p-6 border-2 border-sage-300 hover:shadow-lg transition-all cursor-pointer">
                  <div className="text-4xl mb-3">🤖</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    Ask ER Companion
                  </h4>
                  <p className="text-sm text-gray-600">
                    Ask questions about tests, procedures, or medical terms.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-4 bg-orange-50 border-t-2 border-orange-200 mt-8">
          <div className="max-w-4xl mx-auto flex gap-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h3 className="font-bold text-lg text-orange-900 mb-2">
                Important Disclaimer
              </h3>
              <p className="text-sm text-orange-800">
                <strong>ER Companion is for educational purposes only.</strong> It does not replace medical advice from healthcare professionals.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import JourneyTimeline from '@/components/JourneyTimeline';
import { journeySteps } from '@/data/journeySteps';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<string>('arrival-checkin');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load from localStorage
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
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cream via-sage-50 to-lavender-50">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-pulse">🏥</div>
          <p className="text-gray-600">Loading ER Companion...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-cream via-sage-50 to-lavender-50 min-h-screen">
      {/* Left decorative gradient */}
      <div className="fixed left-0 top-0 w-40 h-full bg-gradient-to-r from-sage-100 to-transparent opacity-20 pointer-events-none" />

      {/* Right decorative gradient */}
      <div className="fixed right-0 top-0 w-40 h-full bg-gradient-to-l from-teal-100 to-transparent opacity-20 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-fade-in">
            Where Are You in Your ER Visit?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Select your current stage below. This app will help you understand what&rsquo;s happening around you
            and answer questions about tests, procedures, and medical terms.
          </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <JourneyTimeline currentStep={currentStep} onSelectStep={handleSelectStep} />
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Learn About ER Topics</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/tests">
              <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-sky-200 hover:border-sky-400 transition-all cursor-pointer card-hover">
                <div className="text-4xl mb-3">🧪</div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Tests & Scans</h4>
                <p className="text-sm text-gray-600">Learn about blood tests, X-rays, CT scans, ultrasounds, and more.</p>
              </div>
            </Link>

            <Link href="/procedures">
              <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-sage-200 hover:border-sage-400 transition-all cursor-pointer card-hover">
                <div className="text-4xl mb-3">🩹</div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Procedures</h4>
                <p className="text-sm text-gray-600">Understand IV placement, stitches, splinting, wound care, and more.</p>
              </div>
            </Link>

            <Link href="/medications">
              <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-lavender-200 hover:border-lavender-400 transition-all cursor-pointer card-hover">
                <div className="text-4xl mb-3">💊</div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">Medications</h4>
                <p className="text-sm text-gray-600">Learn about IV fluids, pain meds, antibiotics, and other treatments.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Dictionary Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/dictionary">
            <div className="bg-gradient-to-br from-lavender-100 to-sky-100 rounded-3xl p-8 border-2 border-lavender-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-5xl">📚</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Medical Dictionary</h3>
                  <p className="text-gray-600">
                    Confused by medical terms? Search our glossary to understand terminology you hear in the ER.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* AI Chat CTA */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/chat">
            <div className="bg-gradient-to-br from-sage-100 to-peach-50 rounded-3xl p-8 border-2 border-sage-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">🤖</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">Ask ER Companion</h3>
                    <p className="text-gray-600">
                      Have a question about what&rsquo;s happening? Ask our AI to explain tests, procedures, or medical terms.
                    </p>
                  </div>
                </div>
                <div className="text-3xl flex-shrink-0">→</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-orange-50 border-t-2 border-orange-200 mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">⚠️</div>
            <div>
              <h3 className="font-bold text-lg text-orange-900 mb-2">Important Disclaimer</h3>
              <p className="text-sm text-orange-800 mb-2">
                <strong>ER Companion is for educational purposes only.</strong> It is not medical advice and does not replace
                guidance from healthcare professionals.
              </p>
              <p className="text-sm text-orange-800">
                If you are experiencing a medical emergency (severe chest pain, difficulty breathing, severe bleeding, or loss of
                consciousness), <strong>please alert a nurse or medical staff member immediately.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

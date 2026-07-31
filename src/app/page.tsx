"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<string>("arrival-checkin");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("erCompanion_currentStep");

    if (saved) {
      setCurrentStep(saved);
    }

    setIsLoading(false);
  }, []);

  const handleSelectStep = (stepId: string) => {
    setCurrentStep(stepId);
    localStorage.setItem("erCompanion_currentStep", stepId);
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

        {/* Hero */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-fade-in">
              Where Are You in Your ER Visit?
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Select your current stage below. This app will help you understand
              what&apos;s happening around you and answer questions about tests,
              procedures, and medical terms.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-2 px-4">
          <div className="max-w-4xl mx-auto">
            <JourneyTimeline
              currentStep={currentStep}
              onSelectStep={handleSelectStep}
            />
          </div>
        </section>

        {/* Topics */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Learn About ER Topics
            </h3>

            <div className="grid md:grid-cols-3 gap-4">

              <Link href="/tests">
                <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-teal-200 hover:border-teal-400 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">🧪</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    Tests & Scans
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn about blood tests, X-rays, CT scans, ultrasounds,
                    and more.
                  </p>
                </div>
              </Link>

              <Link href="/procedures">
                <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-sage-200 hover:border-sage-400 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">🩹</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    Procedures
                  </h4>
                  <p className="text-sm text-gray-600">
                    Understand IV placement, stitches, splinting, wound care,
                    and more.
                  </p>
                </div>
              </Link>

              <Link href="/medications">
                <div className="bg-white/80 hover:bg-white rounded-2xl p-6 border-2 border-rose-200 hover:border-rose-400 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">💊</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    Medications
                  </h4>
                  <p className="text-sm text-gray-600">
                    Learn about IV fluids, pain medications, antibiotics,
                    and other treatments.
                  </p>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Dictionary */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/dictionary">
              <div className="bg-gradient-to-br from-sage-100 to-teal-100 rounded-3xl p-8 border-2 border-sage-300 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">📚</div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Medical Dictionary
                    </h3>
                    <p className="text-gray-600">
                      Confused by medical terms? Search our glossary to
                      understand terminology you hear in the ER.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* AI Chat */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/chat">
              <div className="bg-gradient-to-br from-sage-100 to-cream rounded-3xl p-8 border-2 border-sage-300 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">🤖</div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        Ask ER Companion
                      </h3>
                      <p className="text-gray-600">
                        Ask questions about tests, procedures, or medical
                        terms.
                      </p>
                    </div>
                  </div>

                  <div className="text-3xl">→</div>
                </div>
              </div>
            </Link>
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
                <strong>ER Companion is for educational purposes only.</strong>{" "}
                It does not replace medical advice from healthcare
                professionals.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

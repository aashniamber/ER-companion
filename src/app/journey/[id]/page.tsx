'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getJourneyStep, journeySteps } from '@/data/journeySteps';
import { getTest } from '@/data/tests';
import { getProcedure } from '@/data/procedures';
import { getMedication } from '@/data/medications';
import { getTerminology } from '@/data/terminology';
import ProgressTracker from '@/components/ProgressTracker';
import ModuleCard from '@/components/ModuleCard';
import { ChevronLeft, ChevronRight, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function JourneyStage({ params }: { params: { id: string } }) {
  const step = getJourneyStep(params.id);
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // Update current step in localStorage
    localStorage.setItem('erCompanion_currentStep', params.id);
  }, [params.id]);

  if (!step) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream to-lavender-50 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Stage not found</p>
          <Link href="/" className="text-lavender-600 font-semibold hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = journeySteps.findIndex((s) => s.id === step.id);
  const prevStep = currentIndex > 0 ? journeySteps[currentIndex - 1] : null;
  const nextStep = currentIndex < journeySteps.length - 1 ? journeySteps[currentIndex + 1] : null;

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <div className="bg-gradient-to-br from-cream via-sage-50 to-lavender-50 min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Tracker */}
        <ProgressTracker currentStepId={step.id} />

        {/* Main Content */}
        <div className="bg-white rounded-3xl shadow-md border-2 border-gray-100 p-8 mb-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-6xl">{step.icon}</span>
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                  {step.number}. {step.title}
                </h1>
                <p className="text-xl text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>

          {/* What Happens */}
          <div className="mb-8 pb-8 border-b-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What Happens During This Stage</h2>
            <ul className="space-y-3">
              {step.whatHappens.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-lavender-500 font-bold text-lg flex-shrink-0">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why It Happens */}
          <div className="mb-8 pb-8 border-b-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why This Happens</h2>
            <div className="bg-gradient-to-br from-lavender-50 to-sky-50 rounded-2xl p-6 border-2 border-lavender-200">
              <p className="text-gray-700 leading-relaxed">{step.whyItHappens}</p>
            </div>
          </div>

          {/* Common Wonders */}
          <div className="mb-8 pb-8 border-b-2 border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What Patients Often Wonder</h2>
            <div className="space-y-3">
              {step.commonWonders.map((wonder, idx) => (
                <div key={idx} className="bg-peach-50 rounded-xl p-4 border-l-4 border-orange-400">
                  <p className="text-gray-700 italic">{wonder}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Questions to Ask */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions You Can Ask Your Care Team</h2>
            <div className="space-y-2">
              {step.questionsToAsk.map((question, idx) => (
                <div key={idx} className="flex gap-3 bg-sky-50 rounded-xl p-4 border-2 border-sky-200">
                  <span className="text-sky-600 font-bold flex-shrink-0">Q:</span>
                  <p className="text-gray-700">{question}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Resources */}
          {Object.values(step.relatedResources).some((arr) => arr && arr.length > 0) && (
            <div className="mb-8 pb-8 border-b-2 border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {step.relatedResources.tests && step.relatedResources.tests.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <span>🧪</span> Tests
                    </h3>
                    <div className="space-y-2">
                      {step.relatedResources.tests.map((testId) => {
                        const test = getTest(testId);
                        return test ? (
                          <Link key={testId} href={`/tests#${testId}`}>
                            <div className="p-2 bg-sky-50 rounded-lg text-sky-700 hover:bg-sky-100 transition-colors text-sm">
                              {test.name}
                            </div>
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                {step.relatedResources.procedures && step.relatedResources.procedures.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <span>🩹</span> Procedures
                    </h3>
                    <div className="space-y-2">
                      {step.relatedResources.procedures.map((procId) => {
                        const proc = getProcedure(procId);
                        return proc ? (
                          <Link key={procId} href={`/procedures#${procId}`}>
                            <div className="p-2 bg-sage-50 rounded-lg text-sage-700 hover:bg-sage-100 transition-colors text-sm">
                              {proc.name}
                            </div>
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                {step.relatedResources.medications && step.relatedResources.medications.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <span>💊</span> Medications
                    </h3>
                    <div className="space-y-2">
                      {step.relatedResources.medications.map((medId) => {
                        const med = getMedication(medId);
                        return med ? (
                          <Link key={medId} href={`/medications#${medId}`}>
                            <div className="p-2 bg-lavender-50 rounded-lg text-lavender-700 hover:bg-lavender-100 transition-colors text-sm">
                              {med.name}
                            </div>
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                {step.relatedResources.terms && step.relatedResources.terms.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <span>📚</span> Terms
                    </h3>
                    <div className="space-y-2">
                      {step.relatedResources.terms.map((termId) => {
                        const term = getTerminology(termId);
                        return term ? (
                          <Link key={termId} href={`/dictionary#${termId}`}>
                            <div className="p-2 bg-peach-50 rounded-lg text-orange-700 hover:bg-peach-100 transition-colors text-sm">
                              {term.term}
                            </div>
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Feedback */}
          <div className="pt-8">
            <p className="text-gray-600 mb-4">Was this explanation helpful?</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleFeedback('helpful')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  feedback === 'helpful'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-50'
                }`}
              >
                <ThumbsUp size={20} />
                Yes
              </button>
              <button
                onClick={() => handleFeedback('not-helpful')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  feedback === 'not-helpful'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-red-50'
                }`}
              >
                <ThumbsDown size={20} />
                No
              </button>
            </div>
            {showThankYou && (
              <p className="text-green-600 font-semibold mt-3 animate-fade-in">Thank you for your feedback!</p>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 justify-between items-center">
          {prevStep ? (
            <Link href={`/journey/${prevStep.id}`}>
              <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border-2 border-gray-300 font-semibold hover:bg-gray-50 transition-all">
                <ChevronLeft size={20} />
                Previous: {prevStep.title}
              </button>
            </Link>
          ) : (
            <div />
          )}

          <Link href="/">
            <button className="px-6 py-3 bg-lavender-500 text-white rounded-lg font-semibold hover:bg-lavender-600 transition-all">
              Back to Home
            </button>
          </Link>

          {nextStep ? (
            <Link href={`/journey/${nextStep.id}`}>
              <button className="flex items-center gap-2 px-6 py-3 bg-lavender-500 text-white rounded-lg font-semibold hover:bg-lavender-600 transition-all">
                Next: {nextStep.title}
                <ChevronRight size={20} />
              </button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { journeySteps } from '@/data/journeySteps';

interface ProgressTrackerProps {
  currentStepId: string;
}

export default function ProgressTracker({ currentStepId }: ProgressTrackerProps) {
  const currentIndex = journeySteps.findIndex((step) => step.id === currentStepId);
  const progress = ((currentIndex + 1) / journeySteps.length) * 100;

  const currentStep = journeySteps[currentIndex];

  return (
    <div className="w-full bg-gradient-to-r from-sage-50 to-lavender-50 p-4 rounded-lg mb-6 border-2 border-sage-200">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-semibold text-gray-600">Your Current Stage</p>
          <p className="text-lg font-bold text-lavender-700">{currentStep?.title}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-lavender-600">{currentIndex + 1}</p>
          <p className="text-xs text-gray-600">of {journeySteps.length}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-lavender-400 to-sky-400 h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mini Timeline */}
      <div className="flex gap-2 mt-4 justify-between">
        {journeySteps.map((step, idx) => {
          const isComplete = idx < currentIndex;
          const isCurrent = idx === currentIndex;

          return (
            <div
              key={step.id}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                isCurrent
                  ? 'bg-gradient-to-r from-lavender-400 to-sky-400'
                  : isComplete
                    ? 'bg-sage-300'
                    : 'bg-gray-200'
              }`}
              title={step.title}
            />
          );
        })}
      </div>
    </div>
  );
}

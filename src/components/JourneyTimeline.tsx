'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { journeySteps } from '@/data/journeySteps';
import { ChevronRight, CheckCircle } from 'lucide-react';

interface JourneyTimelineProps {
  currentStep?: string;
  onSelectStep?: (stepId: string) => void;
  interactive?: boolean;
}

export default function JourneyTimeline({
  currentStep,
  onSelectStep,
  interactive = true,
}: JourneyTimelineProps) {
  const handleStepClick = (stepId: string) => {
    if (interactive && onSelectStep) {
      onSelectStep(stepId);
    }
  };

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-sage-300 via-lavender-300 to-sky-300" />

          {/* Steps */}
          <div className="space-y-6">
            {journeySteps.map((step, index) => {
              const isCurrentStep = step.id === currentStep;
              const isCompleted = currentStep && journeySteps.findIndex((s) => s.id === currentStep) > index;

              return (
                <div
                  key={step.id}
                  className="relative animate-fade-in"
                  onClick={() => handleStepClick(step.id)}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-12 h-12 flex items-center justify-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 cursor-pointer ${
                        isCurrentStep
                          ? 'bg-gradient-to-br from-lavender-400 to-sky-400 text-white scale-110 shadow-lg shadow-lavender-300'
                          : isCompleted
                            ? 'bg-sage-400 text-white'
                            : 'bg-white border-3 border-sage-300 text-sage-600'
                      }`}
                    >
                      {isCompleted ? <CheckCircle size={24} /> : step.number}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-20 mb-2">
                    <Link href={`/journey/${step.id}`}>
                      <div
                        className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer transform hover:scale-102 ${
                          isCurrentStep
                            ? 'bg-gradient-to-br from-lavender-50 to-sky-50 border-2 border-lavender-300 shadow-lg'
                            : 'bg-white border-2 border-gray-100 hover:border-sage-200 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3
                              className={`text-lg font-semibold flex items-center gap-2 ${
                                isCurrentStep ? 'text-lavender-700' : 'text-gray-700'
                              }`}
                            >
                              <span className="text-2xl">{step.icon}</span>
                              {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{step.description}</p>

                            {isCurrentStep && (
                              <div className="mt-3 pt-3 border-t border-lavender-200">
                                <div className="space-y-2">
                                  <div>
                                    <h4 className="font-semibold text-sm text-lavender-700">
                                      What Happens:
                                    </h4>
                                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                      {step.whatHappens.slice(0, 2).map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                          <span>•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                      {step.whatHappens.length > 2 && (
                                        <li className="text-lavender-600 font-medium">
                                          +{step.whatHappens.length - 2} more steps...
                                        </li>
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          <ChevronRight
                            size={20}
                            className={`text-sage-400 mt-1 flex-shrink-0 ${isCurrentStep ? 'text-lavender-400' : ''}`}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

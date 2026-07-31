"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import JourneyTimeline from "@/components/JourneyTimeline";

export default function Home() {
  const [currentStep, setCurrentStep] = useState("arrival-checkin");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedStep = localStorage.getItem("erCompanion_currentStep");

    if (savedStep) {
      setCurrentStep(savedStep);
    }

    setIsLoading(false);
  }, []);

  const handleSelectStep = (stepId: string) => {
    setCurrentStep(stepId);
    localStorage.setItem("erCompanion_currentStep", stepId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-pulse">🏥</div>
          <p className="text-gray-600">Loading ER Companion...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cream via-sage-50 to-sage-100">

      {/* Background decorations */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-sage-100 to-transparent opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-teal-100 to-transparent opacity-20 pointer-events-none" />

      <div className="relative z-10">

        {/* Hero */}
        <section className="px-4 pt-10 pb-4">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-fade-in">
              Where Are You in Your ER Visit?
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your current stage below. ER Companion helps you understand
              what&apos;s happening around you and explains tests, procedures,
              and medical terms.
            </p>

          </div>
        </section>


        {/* Timeline */}
        <section className="px-4">
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

            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Learn About ER Topics
            </h3>

            <div className="grid md:grid-cols-3 gap-4">

              <TopicCard
                href="/tests"
                icon="🧪"
                title="Tests & Scans"
                description="Learn about blood tests, X-rays, CT scans, ultrasounds, and more."
                border="border-teal-200 hover:border-teal-400"
              />

              <TopicCard
                href="/procedures"
                icon="🩹"
                title="Procedures"
                description="Understand IV placement, stitches, splinting, wound care, and more."
                border="border-sage-200 hover:border-sage-400"
              />

              <TopicCard
                href="/medications"
                icon="💊"
                title="Medications"
                description="Learn about IV fluids, pain medications, antibiotics, and other treatments."
                border="border-rose-200 hover:border-rose-400"
              />

            </div>
          </div>
        </section>


        {/* Dictionary */}
        <section className="px-4 pb-8">
          <div className="max-w-4xl mx-auto">

            <Link href="/dictionary" className="block">
              <div className="bg-gradient-to-br from-sage-100 to-teal-100 rounded-3xl p-8 border-2 border-sage-300 hover:shadow-lg transition">

                <div className="flex items-center gap-4">

                  <div className="text-5xl">
                    📚
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Medical Dictionary
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Search medical terms and understand terminology you hear
                      in the ER.
                    </p>
                  </div>

                </div>

              </div>
            </Link>

          </div>
        </section>


        {/* AI */}
        <section className="px-4 pb-8">
          <div className="max-w-4xl mx-auto">

            <Link href="/chat" className="block">
              <div className="bg-gradient-to-br from-sage-100 to-cream rounded-3xl p-8 border-2 border-sage-300 hover:shadow-lg transition">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="text-5xl">
                      🤖
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        Ask ER Companion
                      </h3>

                      <p className="text-gray-600">
                        Ask questions about tests, procedures, or medical terms.
                      </p>
                    </div>

                  </div>

                  <span className="text-3xl">
                    →
                  </span>

                </div>

              </div>
            </Link>

          </div>
        </section>


        {/* Disclaimer */}
        <section className="px-4 py-8 bg-orange-50 border-t-2 border-orange-200">

          <div className="max-w-4xl mx-auto flex gap-4">

            <div className="text-3xl">
              ⚠️
            </div>

            <div>

              <h3 className="font-bold text-lg text-orange-900">
                Important Disclaimer
              </h3>

              <p className="text-sm text-orange-800 mt-2">
                <strong>ER Companion is for educational purposes only.</strong>{" "}
                It does not replace medical advice from healthcare professionals.
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}


function TopicCard({
  href,
  icon,
  title,
  description,
  border,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
  border: string;
}) {
  return (
    <Link href={href} className="block">
      <div
        className={`bg-white/80 hover:bg-white rounded-2xl p-6 border-2 ${border} transition-all cursor-pointer`}
      >
        <div className="text-4xl mb-3">{icon}</div>
        <h4 className="font-bold text-lg text-gray-800 mb-2">
          {title}
        </h4>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </Link>
  );
}

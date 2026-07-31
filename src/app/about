'use client';

import Link from 'next/link';
import { ChevronLeft, Heart, Brain, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-cream via-sage-50 to-sage-100 min-h-screen">
      <div className="fixed left-0 top-0 w-40 h-full bg-gradient-to-r from-sage-100 to-transparent opacity-20 pointer-events-none" />
      <div className="fixed right-0 top-0 w-40 h-full bg-gradient-to-l from-teal-100 to-transparent opacity-20 pointer-events-none" />

      <div className="relative z-10">
        {/* Back Button */}
        <div className="py-4 px-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-sage-600 font-semibold hover:text-sage-700 transition-colors">
              <ChevronLeft size={20} />
              Back to Home
            </button>
          </Link>
        </div>

        {/* Header */}
        <section className="py-12 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            About ER Companion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering patients to understand their emergency care journey with confidence and clarity.
          </p>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Mission */}
            <div className="bg-white/80 rounded-3xl p-8 border-2 border-sage-200">
              <div className="flex items-start gap-4 mb-4">
                <Brain className="text-sage-600 flex-shrink-0" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                ER Companion exists to reduce anxiety and confusion during emergency department visits. We believe that patients who understand what's happening around them make better decisions, communicate more effectively with their care team, and experience less stress during an already difficult time.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>We don't replace doctors. We empower patients.</strong> Our platform is designed to complement—not substitute—medical care by providing clear, accessible education about ER processes, tests, procedures, and medical terminology.
              </p>
            </div>

            {/* The Problem */}
            <div className="bg-white/80 rounded-3xl p-8 border-2 border-teal-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Problem We Solve</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">😰</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">ER Anxiety is Real</h3>
                    <p className="text-gray-600">Many patients experience significant anxiety during ER visits due to confusion, fear, and lack of understanding.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">❓</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Information Gaps</h3>
                    <p className="text-gray-600">Patients often don't understand why tests are being done, what procedures involve, or what medical terms mean.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl flex-shrink-0">⏳</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Waiting is the Hardest Part</h3>
                    <p className="text-gray-600">Long waits and uncertainty about the process create unnecessary stress and poor patient satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-white/80 rounded-3xl p-8 border-2 border-rose-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Solution</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                ER Companion provides a patient-centered digital companion that guides you through your emergency department visit with:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-sky-50 to-transparent rounded-2xl p-6 border border-sky-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">📍</span> Clear Navigation
                  </h3>
                  <p className="text-gray-600">An interactive timeline showing the 7 stages of an ER visit, so you know exactly where you are and what's next.</p>
                </div>

                <div className="bg-gradient-to-br from-sage-50 to-transparent rounded-2xl p-6 border border-sage-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🧠</span> Education
                  </h3>
                  <p className="text-gray-600">Comprehensive, easy-to-understand information about tests, procedures, medications, and medical terminology.</p>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-transparent rounded-2xl p-6 border border-rose-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💬</span> AI Companion
                  </h3>
                  <p className="text-gray-600">Ask questions about what's happening. Get immediate, educational responses (within safety guardrails).</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-transparent rounded-2xl p-6 border border-teal-200">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🤝</span> Better Communication
                  </h3>
                  <p className="text-gray-600">Prompts with suggested questions to ask your care team, leading to better understanding and outcomes.</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white/80 rounded-3xl p-8 border-2 border-lavender-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Features</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-bold text-gray-800">No Login Required</h3>
                    <p className="text-gray-600">Start immediately. No registration, no passwords, no hassle.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-bold text-gray-800">100% Private</h3>
                    <p className="text-gray-600">We collect zero personal health information. All data is stored locally on your device.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-bold text-gray-800">Mobile-First Design</h3>
                    <p className="text-gray-600">Optimized for phones—perfect for using while in the ER waiting room.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-bold text-gray-800">Educational Only</h3>
                    <p className="text-gray-600">We never diagnose, interpret symptoms, or recommend treatments. We educate.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-2xl">✅</span>
                  <div>
                    <h3 className="font-bold text-gray-800">Safety First</h3>
                    <p className="text-gray-600">Built-in safeguards ensure responsible AI interactions. Emergency alerts when needed.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-br from-sage-100 to-teal-100 rounded-3xl p-8 border-2 border-sage-300">
              <div className="flex items-start gap-4 mb-4">
                <Heart className="text-sage-600 flex-shrink-0" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Why It Matters</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Research shows that patient anxiety directly impacts health outcomes. Patients who understand their care are more likely to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="text-gray-700">✓ Follow discharge instructions more carefully</li>
                <li className="text-gray-700">✓ Ask better questions about their care</li>
                <li className="text-gray-700">✓ Experience less stress and anxiety</li>
                <li className="text-gray-700">✓ Have higher satisfaction with their care</li>
                <li className="text-gray-700">✓ Achieve better health outcomes</li>
              </ul>
            </div>

            {/* Our Commitment */}
            <div className="bg-white/80 rounded-3xl p-8 border-2 border-blue-200">
              <div className="flex items-start gap-4 mb-4">
                <Users className="text-blue-600 flex-shrink-0" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">Our Commitment</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="text-gray-700"><strong>Accuracy:</strong> All medical information is fact-checked and based on evidence-based practices.</li>
                <li className="text-gray-700"><strong>Accessibility:</strong> Simple language, no jargon, accessible design for all users.</li>
                <li className="text-gray-700"><strong>Privacy:</strong> Zero data collection. Your health information stays with you.</li>
                <li className="text-gray-700"><strong>Responsibility:</strong> Clear boundaries about what we can and cannot do. Safety always comes first.</li>
                <li className="text-gray-700"><strong>Continuous Improvement:</strong> Regular updates based on user feedback and new medical information.</li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-300 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Have Questions?</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                We'd love to hear from you. Whether you have feedback, suggestions, or just want to learn more about ER Companion, reach out to us.
              </p>
              <a href="mailto:hello@ercompanion.app" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Contact Us
              </a>
            </div>

            {/* Legal */}
            <div className="bg-orange-50 rounded-3xl p-8 border-2 border-orange-200">
              <h2 className="text-2xl font-bold text-orange-900 mb-4">Important Legal Notice</h2>
              <p className="text-orange-900 text-sm leading-relaxed">
                <strong>ER Companion is for educational purposes only.</strong> It is not a medical device, does not provide medical advice, and does not replace guidance from healthcare professionals. Always follow the instructions of your care team. If you are experiencing a medical emergency, please alert a nurse or medical staff member immediately.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

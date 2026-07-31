'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { journeySteps } from '@/data/journeySteps';
import { checkUserInput, generateEducationalResponse } from '@/lib/safetyPrompt';
import { Send, AlertCircle, ChevronLeft } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isAlert?: boolean;
}

export default function ChatPage() {
  const [currentStep, setCurrentStep] = useState<string>('arrival-checkin');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "Hi! I'm ER Companion. I'm here to help you understand what's happening during your ER visit. I can explain tests, procedures, and medical terms. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load current step from localStorage
    const saved = localStorage.getItem('erCompanion_currentStep');
    if (saved) {
      setCurrentStep(saved);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check input safety
    const safety = checkUserInput(input);

    if (!safety.isSafe) {
      const alertMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: safety.message || 'I cannot provide that information.',
        isAlert: true,
      };
      setMessages((prev) => [...prev, alertMessage]);
      setIsLoading(false);
      return;
    }

    // Simulate AI response with educational content
    const currentStepInfo = journeySteps.find((s) => s.id === currentStep);
    const topicLower = input.toLowerCase();

    let response = '';

    // Handle specific topics
    if (
      topicLower.includes('ekg') ||
      topicLower.includes('electrocardiogram') ||
      topicLower.includes('heart test')
    ) {
      response =
        'An EKG (electrocardiogram) records your heart\'s electrical signals. It\'s a painless test that only takes a few minutes. You\'ll have small stickers (electrodes) placed on your chest, and the machine records for about 10 seconds. It helps doctors check if your heart is beating normally and working well. Is there anything specific about EKGs you\'d like to know?';
    } else if (
      topicLower.includes('blood test') ||
      topicLower.includes('lab')
    ) {
      response =
        'Blood tests are one of the most common ER tests. A small needle is used to draw blood from a vein in your arm. The blood is sent to the lab for analysis. Results usually come back within an hour or two. Blood tests can show infections, check organ function, measure glucose, and much more. The needle pinch is usually very brief. What else would you like to know about blood tests?';
    } else if (topicLower.includes('why am i waiting')) {
      response =
        'ER patients are prioritized by urgency, not by arrival time. This is called triage. The sickest patients are seen first to ensure critical conditions get immediate attention. Even if someone arrived after you, they may be more urgent. Waiting can be frustrating, but it means the most critical patients get lifesaving care first. Your care team wants to see you as soon as possible!';
    } else if (
      topicLower.includes('iv') ||
      topicLower.includes('intravenous')
    ) {
      response =
        'An IV is a small plastic tube placed in a vein, usually in your arm or hand. It allows fluids and medications to get into your bloodstream quickly. Placement takes just a few seconds and feels like a small pinch. Once placed, you won\'t feel the tube. IVs can stay in place comfortably while you\'re waiting or being treated. Do you have concerns about IV placement?';
    } else if (topicLower.includes('triage')) {
      response =
        'Triage is the process where a nurse quickly assesses your condition when you first arrive. They ask about your symptoms, take your vital signs (temperature, blood pressure, heart rate, breathing rate), and may ask you to rate your pain. Based on this quick assessment, they assign you an urgency level (usually 1-5). This helps the ER prioritize who needs to be seen first. Triage happens for every patient to ensure the sickest people get care immediately.';
    } else if (
      topicLower.includes('x-ray') ||
      topicLower.includes('ct scan') ||
      topicLower.includes('imaging')
    ) {
      response =
        'Imaging tests like X-rays and CT scans help doctors see inside your body without surgery. X-rays are quick and painless—you stand in front of a machine for just a second. CT scans are more detailed; you lie on a table that slides into a machine that takes many pictures from different angles. Both use radiation, but the amount is safe. Results usually come back within 30-60 minutes. These tests help diagnose many conditions. Would you like to know more about a specific imaging test?';
    } else if (topicLower.includes('nervous') || topicLower.includes('anxiety')) {
      response =
        'It\'s completely normal to feel nervous in the ER. Many people do. Taking a few deep breaths can help. Knowing what to expect helps reduce anxiety—which is exactly why I\'m here! Feel free to ask your care team questions too. They\'re used to explaining things. The more you understand, the less scary it becomes. What specific part worries you most?';
    } else {
      response = generateEducationalResponse(input, currentStep);
    }

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: 'assistant',
        content: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gradient-to-br from-cream via-sage-50 to-lavender-50 min-h-screen flex flex-col">
      <div className="max-w-2xl w-full mx-auto flex flex-col h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-sage-600 via-lavender-600 to-sky-600 text-white p-4 flex items-center justify-between rounded-b-2xl">
          <div>
            <h1 className="text-2xl font-bold">Ask ER Companion</h1>
            <p className="text-xs opacity-90">
              Current Stage: {journeySteps.find((s) => s.id === currentStep)?.title}
            </p>
          </div>
          <Link href="/">
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg transition-all">
              <ChevronLeft size={20} />
              Back
            </button>
          </Link>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-lavender-500 text-white rounded-br-none'
                    : message.isAlert
                      ? 'bg-orange-100 text-orange-900 border-2 border-orange-300 rounded-bl-none flex gap-2'
                      : 'bg-white text-gray-800 border-2 border-gray-200 rounded-bl-none'
                }`}
              >
                {message.isAlert && <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />}
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border-2 border-gray-200 rounded-2xl rounded-bl-none px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-gray-200 bg-white/80 backdrop-blur">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tests, procedures, medical terms..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-full border-2 border-lavender-200 focus:border-lavender-400 focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-lavender-500 hover:bg-lavender-600 disabled:opacity-50 text-white rounded-full p-3 transition-all flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </form>

          {/* Safety Notice */}
          <div className="mt-3 text-xs text-gray-600 text-center px-2">
            <p>
              💡 <strong>I can help with:</strong> Explaining tests, procedures, medical terms, and ER processes.
            </p>
            <p className="mt-1">
              ⚠️ <strong>I cannot:</strong> Diagnose, interpret symptoms, or provide medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

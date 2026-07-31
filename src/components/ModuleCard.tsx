'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ModuleCardProps {
  icon: string;
  title: string;
  description?: string;
  content: {
    label: string;
    items: string[];
  }[];
  expanded?: boolean;
  onClick?: () => void;
  color?: string;
}

export default function ModuleCard({
  icon,
  title,
  description,
  content,
  expanded: initialExpanded = false,
  onClick,
  color = 'bg-sky-50 border-sky-200',
}: ModuleCardProps) {
  const [expanded, setExpanded] = useState(initialExpanded);

  const handleToggle = () => {
    setExpanded(!expanded);
    if (onClick) onClick();
  };

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden animate-fade-in ${color}`}
      onClick={handleToggle}
    >
      {/* Header */}
      <div className="p-4 cursor-pointer hover:opacity-90 transition-opacity">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <span className="text-3xl flex-shrink-0">{icon}</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">{title}</h3>
              {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
            </div>
          </div>
          <ChevronDown
            size={20}
            className={`text-gray-400 flex-shrink-0 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="px-4 pb-4 pt-0 border-t-2 border-opacity-20 animate-slide-up">
          <div className="space-y-3">
            {content.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-sm text-gray-700 mb-2">{section.label}</h4>
                <ul className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-lavender-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

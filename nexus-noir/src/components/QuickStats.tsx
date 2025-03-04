'use client';

import React, { JSX } from 'react';
import {
  BookOpenIcon,
  FireIcon,
  LightBulbIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

interface StatItem {
  label: string;
  value: string | number;
  icon?: JSX.Element; // optional icon
}

interface QuickStatsProps {
  stats: StatItem[];
}

export default function QuickStats({ stats }: QuickStatsProps) {
  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#1A1624] rounded p-4 flex flex-col items-center justify-center text-center shadow hover:shadow-lg transition-shadow transform hover:scale-105"
          >
            {/* Icon or fallback */}
            <div className="mb-2">
              {stat.icon ? (
                stat.icon
              ) : (
                <LightBulbIcon className="h-6 w-6 text-gray-400" />
              )}
            </div>

            <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
              {stat.value}
            </span>

            {/* Label */}
            <span className="text-sm text-gray-300 mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { BoltIcon, MapIcon } from '@heroicons/react/24/outline';
import { DailyEntry } from './types';

interface RecentWorkoutsProps {
  dailyData: DailyEntry[];
}

export default function RecentWorkouts({ dailyData }: RecentWorkoutsProps) {
  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md">
      <h2 className="text-lg font-medium mb-4">Recent Workouts</h2>
      {/* Note the "styled-scrollbar" class for custom scroll styling */}
      <ul className="styled-scrollbar space-y-4 max-h-64 overflow-auto pr-2">
        {dailyData.map((entry) => {
          // Determine day of the week (e.g., "Monday")
          const dayOfWeek = new Date(entry.date).toLocaleDateString('en-US', {
            weekday: 'long',
          });

          // If "walk" appears in the workout string => use walking icon
          const isWalking = entry.workouts.toLowerCase().includes('walk');

          return (
            <li
              key={entry.date}
              className="bg-[#1A1624] rounded-md p-3 shadow hover:shadow-lg transition-shadow"
            >
              {/* Day of Week (no date) */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold">{dayOfWeek}</span>
              </div>

              {/* Workout Icon & Description */}
              <div className="flex items-center gap-2">
                {isWalking ? (
                  <MapIcon className="h-5 w-5 text-green-400" />
                ) : (
                  <BoltIcon className="h-5 w-5 text-yellow-400" />
                )}
                <p className="text-sm text-gray-300">{entry.workouts}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

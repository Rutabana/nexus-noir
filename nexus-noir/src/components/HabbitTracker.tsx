'use client';

import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface Habit {
  id: string;
  name: string;
  target: string; // e.g. "6 days/week"
  completions: boolean[]; // one for each day of the week
}

export default function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>([
    { id: 'walk', name: 'Daily Walk', target: '6 days/week', completions: [false, false, false, false, false, false, false] },
    { id: 'workout', name: 'Gym Workout', target: '3 days/week', completions: [false, false, false, false, false, false, false] },
    { id: 'reading', name: 'Reading', target: '10 min/day', completions: [false, false, false, false, false, false, false] },
    { id: 'prayer', name: 'Prayer', target: '20 min/day', completions: [false, false, false, false, false, false, false] },
  ]);

  const toggleCompletion = (habitId: string, dayIndex: number) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id === habitId) {
          const updated = [...habit.completions];
          updated[dayIndex] = !updated[dayIndex];
          return { ...habit, completions: updated };
        }
        return habit;
      })
    );
  };

  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md">
      <h2 className="text-lg font-medium mb-4">Habit Tracker</h2>

      <div className="space-y-4">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="bg-[#1A1624] rounded p-4 shadow hover:shadow-lg transition-shadow"
          >
            {/* Habit Title & Target */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold">{habit.name}</h3>
                <p className="text-xs text-gray-400">{habit.target}</p>
              </div>
            </div>

            {/* Day Squares */}
            <div className="grid grid-cols-7 gap-2">
              {daysOfWeek.map((day, dayIndex) => {
                const completed = habit.completions[dayIndex];
                return (
                  <div
                    key={day}
                    onClick={() => toggleCompletion(habit.id, dayIndex)}
                    className={`cursor-pointer h-10 flex items-center justify-center rounded transition-colors ${
                      completed
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {completed ? <CheckIcon className="h-5 w-5" /> : <span className="text-xs font-semibold">{day}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

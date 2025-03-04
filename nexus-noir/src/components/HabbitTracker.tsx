'use client';

import React, { useState } from 'react';

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface Habit {
  id: string;
  name: string;
  target: string; // description of target frequency/duration
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
    setHabits(prev =>
      prev.map(habit => {
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
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-300">
          <thead className="text-xs uppercase bg-gray-700">
            <tr>
              <th className="px-4 py-2">Habit</th>
              {daysOfWeek.map(day => (
                <th key={day} className="px-4 py-2">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map(habit => (
              <tr key={habit.id} className="border-b border-gray-600">
                <td className="px-4 py-2 font-semibold">
                  {habit.name} <span className="text-xs text-gray-400">({habit.target})</span>
                </td>
                {habit.completions.map((completed, index) => (
                  <td key={index} className="px-4 py-2 text-center">
                    <div
                      className={`w-6 h-6 rounded-full cursor-pointer transition-colors ${
                        completed ? 'bg-green-500' : 'bg-gray-800'
                      }`}
                      onClick={() => toggleCompletion(habit.id, index)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

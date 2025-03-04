'use client';

import React, { useState } from 'react';
import WeightChart from '@/components/WeightChart';
import CaloriesBarChart from '@/components/CaloriesBarChart';
import MacrosDonutChart from '@/components/MacrosDonutChart';
import RecentWorkouts from '@/components/RecentWorkouts';
import GoalProgress from '@/components/GoalProgress';
import HabitTracker from '@/components/HabbitTracker';
import ReadingProgress from '@/components/ReadingProgress';
import BlogPreview from '@/components/BlogPreview';
import { DailyEntry } from '@/components/types';

export default function DashboardPage() {
  // Mock data stored in state
  const [dailyData] = useState<DailyEntry[]>([
    {
      date: '2025-03-04',
      weight: 273.8,
      workouts: 'Strength training + short run',
      caloriesIn: 1650,
      caloriesOut: 3577,
      macros: { protein: 130, carbs: 150, fat: 50 },
    },
    {
      date: '2025-03-05',
      weight: 274.0,
      workouts: 'Ran 10km',
      caloriesIn: 1800,
      caloriesOut: 3725,
      macros: { protein: 140, carbs: 180, fat: 60 },
    },
    {
      date: '2025-03-06',
      weight: 275.0,
      workouts: 'Yoga session',
      caloriesIn: 1970,
      caloriesOut: 3700,
      macros: { protein: 130, carbs: 124, fat: 51 },
    },
  ]);


  // The most recent entry for the macros donut chart
  const lastEntry = dailyData[dailyData.length - 1];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6 text-white">
      {/* Heading & Add Entry Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Daily Dashboard</h1>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition font-semibold"
          onClick={() => alert('Open form or modal to add entries here!')}
        >
          Add Entry
        </button>
      </div>

      {/* Top Row: Weight Chart & Calories Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeightChart dailyData={dailyData} />
        <CaloriesBarChart dailyData={dailyData} />
      </div>

      <BlogPreview
        coverImage="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbnjevgo1az84ffnugk3y.jpg"
        title="Project Nairobi Update: Progress, Pitfalls, and Lessons Learned"
        authorName="Loïc Rutabana"
        authorPic="/images/me.jpg"
        previewText="In my previous post, I introduced Project Nairobi, a distributed analytics platform I’m building on AWS..."
      />

      {/* Bottom Row: Macros & Workouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MacrosDonutChart lastEntry={lastEntry} />
        <RecentWorkouts dailyData={dailyData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GoalProgress
          startingWeight={275}
          currentWeight={dailyData[dailyData.length - 1].weight}
          targetWeight={185}
          previousWeight={dailyData[dailyData.length - 2].weight}
        />

        <div className='md:col-span-2'>
          <ReadingProgress
            currentBook={{
              title: 'Harry Potter and the Goblet of Fire',
              author: 'JK Rowling',
              progress: 45,
              lastRead: '2025-03-03',
              coverImage: 'https://www.bigw.com.au/medias/sys_master/images/images/hb3/hb4/32806100238366.jpg',
            }}
          />
        </div>

      </div>

      <HabitTracker />
    </div>
  );
}

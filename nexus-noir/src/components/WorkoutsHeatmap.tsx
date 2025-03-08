'use client';

import React, { useEffect, useState } from 'react';
import ActivityHeatmap from '@/components/ActivityHeatmap';
import { workoutsBlue } from '@/lib/colorMappings';

export default function WorkoutHeatmap() {
  const DAYS = 500;
  const [workoutData, setWorkoutData] = useState<{ [date: string]: number }>({});

  useEffect(() => {
    // Generate mock data for the last 500 days
    const mock: { [date: string]: number } = {};
    const now = new Date();
    for (let i = 0; i < DAYS; i++) {
      const day = new Date(now.getTime() - i * 86400000);
      const dateStr = day.toISOString().split('T')[0];
      const rand = Math.random();
      if (rand < 0.3) mock[dateStr] = 0;
      else if (rand < 0.5) mock[dateStr] = 1;
      else if (rand < 0.7) mock[dateStr] = 2;
      else if (rand < 0.9) mock[dateStr] = 3;
      else mock[dateStr] = 4;
    }
    setWorkoutData(mock);
  }, [DAYS]);

  return (
    <ActivityHeatmap
      label="Workouts"
      data={workoutData}
      colorFn={workoutsBlue}
      days={DAYS}
    />
  );
}

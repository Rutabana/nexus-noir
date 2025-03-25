'use client';

import React, { useState, useEffect } from 'react';
import ActivityHeatmap from '@/components/ActivityHeatmap';
import { readingRed } from '@/lib/colorMappings';

export default function ReadingHeatMap() {
  const DAYS = 500;
  const [calorieData, setCalorieData] = useState<{ [date: string]: number }>({});

  useEffect(() => {
    // Generate the last 500 days in ascending order and assign random deficit intensities (0-4)
    const mock: { [date: string]: number } = {};
    const now = new Date();
    for (let i = 0; i < DAYS; i++) {
      const day = new Date(now.getTime() - i * 86400000);
      const dateStr = day.toISOString().split('T')[0];
      const rand = Math.random();
      if (rand < 0.4) {
        mock[dateStr] = 0; // no deficit ~40%
      } else if (rand < 0.6) {
        mock[dateStr] = 1; // light ~20%
      } else if (rand < 0.75) {
        mock[dateStr] = 2; // moderate ~15%
      } else if (rand < 0.9) {
        mock[dateStr] = 3; // strong ~15%
      } else {
        mock[dateStr] = 4; // intense ~10%
      }
    }
    setCalorieData(mock);
  }, []);

  return (
    <ActivityHeatmap
      label="Reading"
      data={calorieData}
      colorFn={readingRed}
      days={DAYS}
    />
  );
}

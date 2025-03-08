'use client';

import React, { useEffect, useRef, useState } from 'react';
import { format, subDays } from 'date-fns';

export interface ActivityHeatmapProps {
  label: string;
  data: { [date: string]: number }; // date => intensity
  colorFn: (intensity: number) => string;
  days?: number; // how many days to display, default 365
}

export default function ActivityHeatmap({
  label,
  data,
  colorFn,
  days = 500,
}: ActivityHeatmapProps) {
  const [dates, setDates] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate last X days in ascending order
    const tempDates: string[] = [];
    let current = new Date();
    for (let i = 0; i < days; i++) {
      tempDates.unshift(format(current, 'yyyy-MM-dd'));
      current = subDays(current, 1);
    }
    setDates(tempDates);
  }, [days]);

  // Group the dates into weeks (each column is 7 days)
  const weeks = [];
  const numWeeks = Math.ceil(dates.length / 7);
  for (let i = 0; i < numWeeks; i++) {
    weeks.push(dates.slice(i * 7, i * 7 + 7));
  }

  // Auto-scroll to the far right once weeks are determined
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [weeks]);

  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md styled-scrollbar">
      <h2 className="text-lg font-medium mb-4">{label}</h2>

      {/* Scrollable container */}
      <div ref={containerRef} className="overflow-x-auto pb-2">
        {/* 
          Use `style={{ width: 'max-content' }}` so columns 
          don’t shrink to fit, ensuring we have horizontal overflow.
        */}
        <div className="flex gap-1" style={{ width: 'max-content' }}>
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((date) => {
                const intensity = data[date] || 0;
                const displayDate = format(new Date(date), 'MMM d');
                const colorClass = colorFn(intensity);

                return (
                  <div
                    key={date}
                    title={`${displayDate} - ${
                      intensity > 0 ? `Intensity ${intensity}` : 'No activity'
                    }`}
                    className={`w-3 h-3 rounded ${colorClass} hover:opacity-80 cursor-pointer`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
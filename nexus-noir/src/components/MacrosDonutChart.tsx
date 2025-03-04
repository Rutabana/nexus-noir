'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { DailyEntry } from './types';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

interface MacrosDonutChartProps {
  lastEntry: DailyEntry;
}

export default function MacrosDonutChart({ lastEntry }: MacrosDonutChartProps) {
  const macrosData = {
    labels: ['Protein', 'Carbs', 'Fat'],
    datasets: [
      {
        data: [
          lastEntry.macros.protein,
          lastEntry.macros.carbs,
          lastEntry.macros.fat
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',   // Protein
          'rgba(255, 205, 86, 0.6)',   // Carbs
          'rgba(255, 99, 132, 0.6)',   // Fat
        ],
      },
    ],
  };

  const macrosOptions = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      title: {
        display: true,
        text: `Latest Day Macros (${lastEntry.date})`,
      },
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md h-[350px]">
      <div className="relative w-full h-full">
        <Doughnut data={macrosData} options={macrosOptions} />
      </div>
    </div>
  );
}

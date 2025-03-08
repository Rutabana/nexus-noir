'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { DailyEntry } from '../lib/types';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

interface WeightChartProps {
  dailyData: DailyEntry[];
}

export default function WeightChart({ dailyData }: WeightChartProps) {
  const weightLineData = {
    labels: dailyData.map((entry) => entry.date),
    datasets: [
      {
        label: 'Weight (lbs)',
        data: dailyData.map((entry) => entry.weight),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.2,
        fill: true,
      },
    ],
  };

  const weightLineOptions = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      title: {
        display: true,
        text: 'Weight Over Time',
        color: '#fff', // optional if you want the title in white
      },
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#fff' },
      },
      y: {
        ticks: { color: '#fff' },
        beginAtZero: false,
        // Adjust these to "zoom out" your chart
        suggestedMin: 265,
        suggestedMax: 280,
      },
    },
  };

  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md h-[350px]">
      <div className="relative w-full h-full">
        <Line data={weightLineData} options={weightLineOptions} />
      </div>
    </div>
  );
}

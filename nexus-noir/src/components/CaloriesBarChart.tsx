'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { DailyEntry } from './types';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface CaloriesBarChartProps {
  dailyData: DailyEntry[];
}

export default function CaloriesBarChart({ dailyData }: CaloriesBarChartProps) {
  const calsBarData = {
    labels: dailyData.map((entry) => entry.date),
    datasets: [
      {
        label: 'Calories In',
        data: dailyData.map((entry) => entry.caloriesIn),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Calories Out',
        data: dailyData.map((entry) => entry.caloriesOut),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const calsBarOptions = {
    responsive: true,
    maintainAspectRatio: false as const,
    plugins: {
      title: {
        display: true,
        text: 'Calories In vs. Calories Out',
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
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md h-[350px]">
      <div className="relative w-full h-full">
        <Bar data={calsBarData} options={calsBarOptions} />
      </div>
    </div>
  );
}

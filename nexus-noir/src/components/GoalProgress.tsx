'use client';

import React from 'react';

interface GoalProgressProps {
  startingWeight: number;
  currentWeight: number;
  targetWeight: number;
  previousWeight: number; // the weight from the previous day/entry
}

export default function GoalProgress({
  startingWeight,
  currentWeight,
  targetWeight,
  previousWeight,
}: GoalProgressProps) {
  // Calculate total weight to lose, how much lost so far, and progress %
  const totalLossNeeded = startingWeight - targetWeight;
  const lossAchieved = startingWeight - currentWeight;
  let progressPercentage = (lossAchieved / totalLossNeeded) * 100;
  if (progressPercentage < 0) progressPercentage = 0;
  if (progressPercentage > 100) progressPercentage = 100;

  // Determine daily change arrow/color
  const difference = currentWeight - previousWeight; // + = gained, - = lost
  let weightChangeIndicator = null;

  if (difference > 0) {
    // Gained weight
    weightChangeIndicator = (
      <div className="absolute top-2 right-2 flex items-center space-x-1">
        {/* Upward Triangle (red) */}
        <div className="w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-b-8 border-b-red-500"></div>
        <span className="text-red-500 text-sm font-bold">
          {difference.toFixed(1)} lbs
        </span>
      </div>
    );
  } else if (difference < 0) {
    // Lost weight
    weightChangeIndicator = (
      <div className="absolute top-2 right-2 flex items-center space-x-1">
        {/* Downward Triangle (green) */}
        <div className="w-0 h-0 border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-8 border-t-green-500"></div>
        <span className="text-green-500 text-sm font-bold">
            {Math.abs(difference).toFixed(1)} lbs
        </span>
      </div>
    );
  }
  // If difference == 0, we display no arrow.

  return (
    <div className="relative bg-[#2A2336] rounded-md p-4 shadow-md">
      {weightChangeIndicator /* The arrow & text in the top-right corner */}

      <h2 className="text-lg font-medium mb-2">Weight Loss Goal: {targetWeight} lbs</h2>
      <p className="text-sm mb-2">
        Current: {currentWeight} lbs
      </p>
      <p className="text-sm mb-2">
        Progress: {progressPercentage.toFixed(1)}%
      </p>
      <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

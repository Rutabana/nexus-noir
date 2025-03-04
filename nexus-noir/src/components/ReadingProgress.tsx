'use client';

import React from 'react';

interface BookReading {
  title: string;
  author: string;
  progress: number; // 0 to 100 percent
  lastRead: string; // date string, e.g., '2025-03-06'
  coverImage?: string; // optional URL for the cover image
}

interface ReadingProgressProps {
  currentBook: BookReading;
}

// Helper function to compute relative time
function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffYears > 0) {
    return `${diffYears} year${diffYears === 1 ? '' : 's'} ago`;
  }
  if (diffMonths > 0) {
    return `${diffMonths} month${diffMonths === 1 ? '' : 's'} ago`;
  }
  if (diffDays > 1) {
    return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
  }
  return 'today';
}

export default function ReadingProgress({ currentBook }: ReadingProgressProps) {
  const { title, author, progress, lastRead, coverImage } = currentBook;
  const lastReadRelative = timeAgo(lastRead);

  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md flex items-center space-x-4">
      {coverImage && (
        <img
          src={coverImage}
          alt={`${title} cover`}
          className="w-20 h-28 object-cover rounded"
        />
      )}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-300">by {author}</p>
        <div className="mt-2">
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm mt-1">Progress: {progress}%</p>
        </div>
        <p className="text-xs text-gray-400 mt-2">Last read: {lastReadRelative}</p>
      </div>
    </div>
  );
}

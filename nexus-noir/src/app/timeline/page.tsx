'use client';

import React from 'react';
import { timelineEvents } from '@/lib/mock-data';
import Image from 'next/image';

export default function TimelinePage() {
  return (
    <div className="min-h-screen text-white">
      {/* Banner Section */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image 
          src="/images/library.png"
          alt="Timeline Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold">Timeline</h1>
        </div>
      </div>

      {/* Timeline Content (no solid background) */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative border-l-2 border-gray-700">
          {timelineEvents.map((event, index) => (
            <div key={index} className="mb-8 ml-4">
              <div className="absolute -left-3 top-1.5 w-6 h-6 bg-blue-600 rounded-full border-2 border-gray-700"></div>
              <p className="text-sm text-gray-300">{event.date}</p>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-200">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { JSX } from 'react';

interface FocusItem {
  title: string;
  description: string;
  icon?: JSX.Element;
  backgroundImage: string; // URL for the background image
}

interface FocusAreasProps {
  areas: FocusItem[];
}

export default function FocusAreas({ areas }: FocusAreasProps) {
  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Focus & Passions</h2>

      {/* 2x2 grid on md+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {areas.map((area, idx) => (
          <div
            key={idx}
            className="relative h-48 rounded overflow-hidden shadow hover:shadow-lg transition-shadow transform hover:scale-105"
            style={{
              backgroundImage: `url('${area.backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-75"></div>

            {/* Content on top */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 text-center">
              {/* Optional icon */}
              {area.icon && <div className="mb-2">{area.icon}</div>}

              {/* Title & Description */}
              <h3 className="text-lg font-bold mb-1">{area.title}</h3>
              <p className="text-sm text-gray-300">{area.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

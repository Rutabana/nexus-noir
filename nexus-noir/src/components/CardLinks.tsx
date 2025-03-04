'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface CardLink {
  title: string;
  description: string;
  href: string;
}

interface CardLinksProps {
  links: CardLink[];
}

export default function CardLinks({ links }: CardLinksProps) {
  const router = useRouter();

  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <div
            key={link.href}
            className="bg-[#1A1624] rounded p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => router.push(link.href)}
          >
            <h3 className="text-lg font-bold mb-1">{link.title}</h3>
            <p className="text-sm text-gray-300">{link.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

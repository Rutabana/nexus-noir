'use client';

import React from 'react';

interface FeaturedBlogProps {
  coverImage: string;
  title: string;
  snippet: string;
  link: string;
}

export default function FeaturedBlog({
  coverImage,
  title,
  snippet,
  link,
}: FeaturedBlogProps) {
  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md flex flex-col md:flex-row gap-4">
      <img
        src={coverImage}
        alt={title}
        className="w-full md:w-1/3 h-48 object-cover rounded-md"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{snippet}...</p>
        <a
          href={link}
          className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition font-semibold text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

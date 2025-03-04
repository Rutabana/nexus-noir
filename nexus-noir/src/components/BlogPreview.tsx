'use client';

import React from 'react';

interface BlogPreviewProps {
  coverImage: string;
  title: string;
  authorName: string;
  authorPic: string;
  previewText: string;
}

export default function BlogPreview({
  coverImage,
  title,
  authorName,
  authorPic,
  previewText,
}: BlogPreviewProps) {
  return (
    <div className="bg-[#2A2336] rounded-md p-4 shadow-md w-full">
      {/* Cover image in a relative container so the profile pic can overlap */}
      <div className="relative mb-8">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-56 object-cover rounded-md"
        />
        {/* Profile picture overlapping bottom edge of cover image */}
        <img
          src={authorPic}
          alt={authorName}
          className="w-16 h-16 rounded-full border-2 border-white object-cover absolute bottom-0 left-4 transform translate-y-1/2"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mb-1">{title}</h2>

      {/* Author name below the cover image and avatar */}
      <div className="mb-4">
        <span className="text-sm text-gray-300">{authorName}</span>
      </div>

      {/* Short Preview Text */}
      <p className="text-sm text-gray-300">
        {previewText}...
      </p>
    </div>
  );
}

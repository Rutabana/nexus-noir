'use client';

import React from 'react';
import Link from 'next/link';

// Define the Tag interface (matching your tags object structure)
interface Tag {
  area: string;
  label: string;
  color: string;
}

interface BlogPreviewProps {
  slug: string;              // The unique identifier or slug for this post
  coverImage: string;
  title: string;
  authorName: string;
  authorPic: string;
  previewText: string;
  tags?: Tag[];              // optional array of tags
}

export default function BlogPreview({
  slug,
  coverImage,
  title,
  authorName,
  authorPic,
  previewText,
  tags,
}: BlogPreviewProps) {
  return (
    <Link href={`/journal/${slug}`} className="block group">
      <div className="bg-[#2A2336] rounded-md p-4 shadow-md w-full hover:cursor-pointer group-hover:shadow-lg transition-shadow">
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
        <p className="text-sm text-gray-300 mb-2">
          {previewText}...
        </p>

        {/* Tags (optional) */}
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 justify-end">
            {tags.map((tag) => (
              <span
                key={tag.label}
                style={{ color: tag.color }}
                className="text-xs font-medium"
              >
                #{tag.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

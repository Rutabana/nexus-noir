'use client';

import React from 'react';
import BlogPreview from '@/components/BlogPreview';
import { mockPosts } from '@/lib/mock-data';

export default function JournalPage() {

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Journal</h1>
      {mockPosts.map((post) => (
        <BlogPreview
          key={post.id}
          slug={post.slug}
          coverImage={post.coverImage}
          title={post.title}
          authorName={post.authorName}
          authorPic={post.authorPic}
          previewText={post.previewText}
          tags={post.tags} // Pass the tags here
        />
      ))}
    </div>
  );
}

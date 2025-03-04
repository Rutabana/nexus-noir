'use client';

import React from 'react';
import BlogPreview from '@/components/BlogPreview';

export default function JournalPage() {
  // Mock data for a blog post
  const mockPosts = [
    {
      id: 1,
      coverImage: '/images/richard-horvath-patterns.jpg', // Ensure this image exists in public/images
      title: 'Project Nairobi: Building a Distributed Analytics Platform on AWS',
      authorName: 'Loïc Rutabana',
      authorPic: '/images/me.jpg', // Your profile picture
      previewText:
        'This is a preview of my first blog post. I have a lot to share about my journey in coding, fitness, and life. Stay tuned for more insights...',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Journal</h1>
      {mockPosts.map((post) => (
        <BlogPreview
          key={post.id}
          coverImage={post.coverImage}
          title={post.title}
          authorName={post.authorName}
          authorPic={post.authorPic}
          previewText={post.previewText}
        />
      ))}
    </div>
  );
}

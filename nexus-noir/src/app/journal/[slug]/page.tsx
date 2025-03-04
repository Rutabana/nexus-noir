'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { mockPosts } from '@/lib/mock-data';

export default function BlogPostPage() {
  const { slug } = useParams() as { slug: string };
  const post = mockPosts.find((p) => p.slug === slug);

  // We'll fetch the markdown file and store its text here
  const [mdContent, setMdContent] = useState('');

  // Fetch the .md file when the component mounts
  useEffect(() => {
    if (post && post.contentPath) {
      fetch(post.contentPath)
        .then((res) => res.text())
        .then((text) => setMdContent(text))
        .catch((err) => console.error('Error loading markdown:', err));
    }
  }, [post]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <div className="mb-4">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-56 object-cover rounded-md"
        />
      </div>

      <div className="mb-4 text-gray-300">By {post.authorName}</div>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{mdContent}</ReactMarkdown>
      </div>
    </div>
  );
}

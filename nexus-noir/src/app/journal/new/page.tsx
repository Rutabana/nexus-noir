'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setBannerFile(null);
      return;
    }
    setBannerFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your API call to create a new post, including file upload logic
    console.log({
      title,
      content,
      bannerFile,
    });
    // After publishing, redirect back to the Journal page
    router.push('/journal');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">New Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 bg-[#1A1624] text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Banner Image Upload */}
        <div>
          <label htmlFor="banner" className="block text-sm font-medium mb-1">
            Banner Image (optional)
          </label>
          <input
            id="banner"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-300
                       file:mr-4 file:py-2 file:px-4
                       file:rounded file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-600 file:text-white
                       hover:file:bg-blue-500
                       focus:outline-none"
          />
          {bannerFile && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(bannerFile)}
                alt="Banner Preview"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        {/* Content & Tabs for Editor/Preview */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="content" className="block text-sm font-medium">
              Content (Markdown)
            </label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setActiveTab('editor')}
                className={`px-3 py-1 rounded transition text-sm border border-gray-300 ${
                  activeTab === 'editor'
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#1A1624] text-gray-300 hover:bg-gray-700'
                }`}
              >
                Editor
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1 rounded transition text-sm border border-gray-300 ${
                  activeTab === 'preview'
                    ? 'bg-blue-600 text-white'
                    : 'bg-[#1A1624] text-gray-300 hover:bg-gray-700'
                }`}
              >
                Preview
              </button>
            </div>
          </div>
          {activeTab === 'editor' && (
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 bg-[#1A1624] text-white rounded border border-gray-700 focus:outline-none focus:border-blue-500"
              rows={10}
              required
            />
          )}
          {activeTab === 'preview' && (
            <div className="bg-[#1A1624] p-2 rounded border border-gray-700 text-white">
              <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        {/* Publish Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition font-semibold"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
}

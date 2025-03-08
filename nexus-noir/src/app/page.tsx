import Image from 'next/image';
import QuickStats from '@/components/QuickStats';
import FeaturedBlog from '@/components/FeaturedBlog';
import FocusAreas from '@/components/FocusAreas';
import CardLinks from '@/components/CardLinks';
import {
  CodeBracketIcon,
  BookOpenIcon,
  FireIcon,
  TrophyIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { mockPosts } from '@/lib/mock-data'; // <-- import your mock data

export default function HomePage() {
  // Grab the last post from mockPosts
  const lastPost = mockPosts[mockPosts.length - 1];

  return (
    <div className="min-h-screen bg-[#1A1624] text-white">
      {/* Banner Section */}
      <div
        className="relative h-40 md:h-48 lg:h-56 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/spiderman.jpg')" }}
      >
        {/* Edit Profile Button */}
        <button className="absolute top-4 right-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition font-semibold">
          Edit Profile
        </button>

        {/* Profile Picture - dev.to-style overlap */}
        <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden left-1/2 transform -translate-x-1/2 -bottom-16">
          <Image
            src="/images/me.jpg"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Profile Info (below the banner & avatar) */}
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Loïc Rutabana</h1>
        <p className="mt-1 opacity-80 text-center max-w-md">
          Just a guy trying to get his life in order. I like software development and the concept of self-actualization
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Quick Stats */}
        <QuickStats
          stats={[
            {
              label: 'Blog Posts',
              value: mockPosts.length,
              icon: <BookOpenIcon className="h-6 w-6 text-gray-400" />,
            },
            {
              label: 'Workouts This Month',
              value: 1,
              icon: <FireIcon className="h-6 w-6 text-gray-400" />,
            },
            {
              label: 'Books Read',
              value: 0,
            },
            {
              label: 'Total Weight Lost (lbs)',
              value: 0,
              icon: <TrophyIcon className="h-6 w-6 text-gray-400" />,
            },
          ]}
        />

        {/* Featured Blog (using the last post) */}
        {lastPost && (
          <FeaturedBlog
            coverImage={lastPost.coverImage}
            title={lastPost.title}
            snippet={lastPost.previewText}
            link={`/journal/${lastPost.slug}`} // or an external link if you prefer
          />
        )}

        {/* Focus & Passions */}
        <FocusAreas
          areas={[
            {
              title: 'Coding',
              description: 'Low-level programming, custom builds, and tooling.',
              icon: <CodeBracketIcon className="h-8 w-8 text-blue-400" />,
              backgroundImage: '/images/coding.jpg',
            },
            {
              title: 'Fitness',
              description: 'Strength training, running, and healthy living.',
              icon: <FireIcon className="h-8 w-8 text-red-400" />,
              backgroundImage: '/images/fitness.jpeg',
            },
            {
              title: 'Reading',
              description: 'Fiction, tech books, and more—always learning.',
              icon: <BookOpenIcon className="h-8 w-8 text-green-400" />,
              backgroundImage: '/images/reading.jpg',
            },
            {
              title: 'Creativity',
              description: 'Exploring new ideas, projects, and designs.',
              icon: <SparklesIcon className="h-8 w-8 text-yellow-400" />,
              backgroundImage: '/images/creativity.jpg',
            },
          ]}
        />
      </div>
    </div>
  );
}

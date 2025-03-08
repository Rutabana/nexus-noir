import { tags } from '@/util/tags';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  category?: string; // optional, can be used for color coding
}

export const mockPosts = [
  {
    id: 1,
    slug: 'project-nairobi-building-a-distributed-analytics-platform-on-aws',
    coverImage: '/images/milad-fakurian patterns.jpg',
    title: 'Project Nairobi: Building a Distributed Analytics Platform on AWS',
    authorName: 'Loïc Rutabana',
    tags: [tags.PersonalProjects, tags.AWS, tags.DistributedSystems],
    authorPic: '/images/me.jpg',
    previewText:
      'This is a preview of my first blog post. I have a lot to share about my journey in coding, fitness, and life. Stay tuned for more insights...',
    contentPath: '/blogs/first.md',
  },
  {
    id: 2,
    slug: 'project-nairobi-update-progress-pitfalls-and-lessons-learned',
    coverImage: '/images/dusk-skyline-veil.jpg',
    title: 'Project Nairobi Update: Progress, Pitfalls, and Lessons Learned',
    authorName: 'Loïc Rutabana',
    tags: [tags.PersonalProjects, tags.AWS, tags.DistributedSystems],
    authorPic: '/images/me.jpg',
    previewText:
      'In my previous post, I introduced Project Nairobi, a distributed analytics platform I’m building on AWS to handle IoT data at scale...',
    contentPath: '/blogs/second.md',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    date: '2025-03-01',
    title: 'Started New Workout Regimen',
    description: 'Began a new plan with strength training and cardio.',
    category: 'Fitness',
  },
  {
    date: '2025-03-05',
    title: 'Launched Project Nairobi',
    description:
      'Started building a distributed analytics platform on AWS, exploring cloud scalability and distributed systems.',
    category: 'Coding',
  },
  {
    date: '2025-03-10',
    title: 'Published First Blog Post',
    description:
      'Shared my journey in coding, fitness, and personal growth in my first blog post.',
    category: 'Journal',
  },
];
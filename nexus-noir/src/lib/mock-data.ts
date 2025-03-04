import { tags } from '@/util/tags';

export const mockPosts = [
  {
    id: 1,
    slug: 'project-nairobi-building-a-distributed-analytics-platform-on-aws',
    coverImage: '/images/richard-horvath-patterns.jpg',
    title: 'Project Nairobi: Building a Distributed Analytics Platform on AWS',
    authorName: 'Loïc Rutabana',
    tags: [tags.PersonalProjects, tags.AWS, tags.DistributedSystems],
    authorPic: '/images/me.jpg',
    previewText:
      'This is a preview of my first blog post. I have a lot to share about my journey in coding, fitness, and life. Stay tuned for more insights...',
    // The path to your MD file in the public folder:
    contentPath: '/blogs/first.md',
  },
];
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from './motion-components';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  tags?: string[]; // Add tags prop
  index?: number;
  onTagClick?: (tag: string) => void; // Add onTagClick prop
}

const BlogCard = ({ id, title, excerpt, coverImage, date, author, tags, index = 0, onTagClick }: BlogCardProps) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm transition-all duration-300"
    >
      <Link href={`/blog/${id}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center mb-2">
            <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{author.name} • {date}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 transition-colors duration-300">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3 transition-colors duration-300">{excerpt}</p>
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigating to blog post
                    e.stopPropagation(); // Stop event bubbling
                    onTagClick?.(tag);
                  }}
                  className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
          <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 transition-colors duration-300">
            <span className="text-sm font-medium">Read more</span>
            <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
};

export default BlogCard;

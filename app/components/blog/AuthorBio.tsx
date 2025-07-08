import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../../data/blogData';

interface AuthorBioProps {
  author: BlogPost['author'];
  postsByAuthorCount: number;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author, postsByAuthorCount }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-16 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center mb-6">
        <div className="relative h-20 w-20 rounded-full overflow-hidden mr-6 flex-shrink-0">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            About {author.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {postsByAuthorCount} {postsByAuthorCount === 1 ? 'post' : 'posts'}
          </p>
        </div>
      </div>
      {author.bio && (
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {author.bio}
        </p>
      )}
      <Link
        href={`/blog/author/${encodeURIComponent(author.name)}`}
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-300"
      >
        View all posts by {author.name}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </Link>
    </div>
  );
};

export default AuthorBio;

'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostById, getRelatedPosts } from '../../utils/blogData';
import { MotionDiv } from '../../components/motion-components';
import BlogCard from '../../components/BlogCard';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostById(params.id);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedPosts(params.id);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // This ensures we use the client component with the useEffect hook
  useEffect(() => {
    // We could add actual side effects here if needed
  }, []);

  return (
    <MotionDiv
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-900 transition-colors duration-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header section */}
      <MotionDiv variants={itemVariants} className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors duration-300">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Blog
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{post.title}</h1>
        
        <div className="flex items-center mb-8">
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-sm">
            <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">{post.author.name}</p>
            <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{post.date} · {Math.ceil(post.content.length / 1000)} min read</p>
          </div>
        </div>
      </MotionDiv>

      {/* Featured image */}
      <MotionDiv
        variants={itemVariants}
        className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12"
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </MotionDiv>

      {/* Article content */}
      <MotionDiv variants={itemVariants} className="prose prose-lg dark:prose-invert max-w-none transition-colors duration-300">
        <div className="markdown-content whitespace-pre-line">
          {post.content}
        </div>
      </MotionDiv>

      {/* Tags */}
      <MotionDiv variants={itemVariants} className="mt-12 mb-16">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </MotionDiv>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <MotionDiv variants={itemVariants} className="border-t border-gray-200 dark:border-gray-800 pt-12 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard
                key={relatedPost.id}
                id={relatedPost.id}
                title={relatedPost.title}
                excerpt={relatedPost.excerpt}
                coverImage={relatedPost.coverImage}
                date={relatedPost.date}
                author={relatedPost.author}
                index={index}
              />
            ))}
          </div>
        </MotionDiv>
      )}
    </MotionDiv>
  );
}

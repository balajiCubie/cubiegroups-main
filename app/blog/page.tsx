'use client';
import Link from 'next/link';
import React, { useState, useEffect, useMemo } from 'react';
import { blogPosts } from '../data/blogData';
import BlogCard from '../components/shared/BlogCard';
import BlogCardSkeleton from '../components/shared/BlogCardSkeleton';

// Custom hook for debouncing
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => categories.add(tag));
    });
    return ['All', ...Array.from(categories).sort()];
  }, []);

  const filteredAndSearchedPosts = useMemo(() => {
    const lowercasedSearchTerm = debouncedSearchTerm.toLowerCase();
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(lowercasedSearchTerm) ||
                            post.excerpt.toLowerCase().includes(lowercasedSearchTerm);
      const matchesCategory = selectedCategory === 'All' || post.tags.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [debouncedSearchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredAndSearchedPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredAndSearchedPosts.slice(startIndex, endIndex);
  }, [currentPage, filteredAndSearchedPosts]);

  useEffect(() => {
    // Simulate loading for demonstration
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setCurrentPage(1); // Reset to first page when search term or category changes
    }, 500); // Simulate 0.5 second loading time

    return () => clearTimeout(timer);
  }, [debouncedSearchTerm, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTagClick = (tag: string) => {
    setSelectedCategory(tag);
    setSearchTerm(''); // Clear search term when a tag is clicked
    setCurrentPage(1); // Reset to first page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 transition-colors duration-300">
              Our Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8 transition-colors duration-300">
              Read the latest articles on web development, design, and technology
            </p>
          </div>
        </div>
      </div>

      {/* Filter & Search Section */}
      <div className="mb-10 max-w-xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 transition-colors duration-300"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Category Filter */}
        <div className="mt-4">
          <label htmlFor="category-filter" className="sr-only">Filter by category</label>
          <select
            id="category-filter"
            className="block w-full p-3 text-sm text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-600 dark:focus:border-blue-600 transition-colors duration-300"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
        {isLoading ? (
          // Render skeletons when loading
          Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))
        ) : (
          // Render actual posts when not loading
          paginatedPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              index={index}
              onTagClick={handleTagClick}
            />
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === page
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
              } transition-colors duration-300`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

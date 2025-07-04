'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MotionDiv } from './motion-components';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Dummy data for suggestions
  const allContent = [
    'Investor Relations Hub', 'Annual Reports', 'Quarterly Reports', 'Governance Policies', 'Ethics Guidelines',
    'Board Committee Structures', 'ESG Initiatives', 'Sustainability Metrics', 'Proxy Statements', 'SEC Filings',
    'Investor Contact', 'Innovation Lab', 'R&D Milestones', 'Open Challenges', 'Hackathons', 'Patents',
    'Licensing Opportunities', 'Tech Transfer Models', 'Partner Success Stories', 'Case Studies',
    'Collaboration Inquiry Form', 'Newsroom & Media Hub', 'Press Releases', 'Featured Articles',
    'Thought Leadership', 'Executive Interviews', 'Event Calendars', 'Speaking Engagements', 'Media Kit',
    'PR Teams Contact', 'Social Feed', 'Careers & Culture', 'Employer Branding Video', 'Employee Testimonials',
    'Culture', 'Diversity', 'Inclusion', 'Internships', 'Early Career Pathways', 'Benefits', 'Perks',
    'Job Listings', 'Talent Community', 'Online Application Form', 'Global Contact Hub', 'Office Map',
    'Local Offices', 'Click-to-Call', 'WhatsApp Integration', 'WeChat Integration', 'Inquiry Routing',
    'Meeting Scheduling', 'Technology Sector', 'Finance Sector', 'Healthcare Sector', 'Manufacturing Sector',
    'Consumer Goods', 'Energy Sector', 'Real Estate Sector', 'Logistics Sector', 'About Us', 'Contact Us', 'Blog'
  ];

  useEffect(() => {
    if (query.length > 1) {
      const filteredSuggestions = allContent.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (item: string) => {
    setQuery(item);
    setIsFocused(false);
    // In a real app, navigate to the relevant page or perform a search
    console.log('Searching for:', item);
    // Example: window.location.href = `/search?q=${encodeURIComponent(item)}`;
  };

  return (
    <MotionDiv className="relative w-full max-w-md mx-auto" ref={searchRef}>
      <input
        type="text"
        placeholder="Search Cubie Group..."
        className="w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white transition-colors"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
      />
      {isFocused && suggestions.length > 0 && (
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
              onClick={() => handleSearch(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </MotionDiv>
      )}
    </MotionDiv>
  );
};

export default SearchBar;

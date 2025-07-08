import React from 'react';

const SectionSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 animate-pulse transition-colors duration-300">
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto mb-8"></div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default SectionSkeleton;

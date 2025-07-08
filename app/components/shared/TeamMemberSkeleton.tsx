import React from 'react';

const TeamMemberSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden animate-pulse transition-colors duration-300">
      <div className="relative h-60 w-full bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-6">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="mt-4 flex space-x-3">
          <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="h-6 w-6 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSkeleton;

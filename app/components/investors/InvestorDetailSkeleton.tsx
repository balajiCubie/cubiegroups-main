import React from 'react';

const InvestorDetailSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 animate-pulse">
      <div className="rounded-lg shadow-lg p-8 mb-12 bg-white dark:bg-gray-800">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mb-6 md:mb-0 md:mr-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <div className="text-center md:text-left flex-1">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4 mx-auto md:mx-0"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4 mx-auto md:mx-0"></div>
            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mx-auto md:mx-0"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          </div>
          <div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          </div>
        </div>

        <div className="mb-10">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            </div>
            <div className="p-4 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="h-12 bg-blue-600 rounded-full w-1/2 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDetailSkeleton;

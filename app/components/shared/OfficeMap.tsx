import React from 'react';

const OfficeMap = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Interactive Office Map</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {/* Placeholder for an interactive map (e.g., Google Maps embed) */}
        <div className="aspect-video w-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center rounded-lg">
          <p className="text-gray-600 dark:text-gray-400">Map Placeholder with Region Filters</p>
        </div>
      </div>
    </section>
  );
};

export default OfficeMap;

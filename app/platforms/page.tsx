import React from 'react';

const PlatformsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Our Platforms</h1>
        <p className="text-xl text-silver">Detailed information about each platform will go here.</p>
        <div className="mt-8">
          {/* Placeholder for platform specific links or content */}
          <p className="text-gray-400">Explore our AI-powered solutions for finance.</p>
        </div>
      </div>
    </div>
  );
};

export default PlatformsPage;

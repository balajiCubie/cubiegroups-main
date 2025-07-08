import React from 'react';

const MediaKit = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Media Kit</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="mb-4">Download our official media kit, including logos, leadership bios, and high-resolution photos.</p>
        <a href="/cubie-group-media-kit.zip" download className="text-blue-500 hover:underline">Download Media Kit (.zip)</a>
      </div>
    </section>
  );
};

export default MediaKit;

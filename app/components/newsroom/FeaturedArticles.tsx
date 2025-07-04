import React from 'react';

const FeaturedArticles = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Featured Articles & Thought Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Forbes: The Future of Conglomerates</h3>
          <p>An analysis of Cubie Group's innovative business model.</p>
          <a href="#" className="text-blue-500 hover:underline">Read the Article</a>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">CEO's Corner: Leading Through Disruption</h3>
          <p>Our CEO shares insights on navigating the new economy.</p>
          <a href="#" className="text-blue-500 hover:underline">Read on LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;

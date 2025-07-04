import React from 'react';

const OpenChallenges = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Open Challenges & Hackathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Hackathon: AI for Good</h3>
          <p>Join us in developing AI solutions for global challenges.
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Challenge: Sustainable Urban Mobility</h3>
          <p>Submit your innovative ideas for the future of transportation.
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenChallenges;

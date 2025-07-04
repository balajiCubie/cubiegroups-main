import React from 'react';

const PressReleases = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Latest Press Releases</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Cubie Group Announces Record Q2 Earnings</h3>
          <p className="text-sm text-gray-500">July 15, 2025</p>
          <a href="#" className="text-blue-500 hover:underline">Read More</a>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Strategic Partnership with QuantumLeap Inc. to Revolutionize AI</h3>
          <p className="text-sm text-gray-500">June 28, 2025</p>
          <a href="#" className="text-blue-500 hover:underline">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default PressReleases;

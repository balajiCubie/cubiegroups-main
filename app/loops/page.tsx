import React from 'react';
import { LoopsPhilosophy } from '../components/home/LoopsPhilosophy'; // Re-use the component

const LoopsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <LoopsPhilosophy />
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Deep Dive into Our Loops</h2>
        <p className="text-lg text-silver max-w-3xl mx-auto">
          Here you can find more detailed explanations, case studies, and visuals for each of our core growth loops.
        </p>
        {/* Additional content for each loop can be added here */}
      </div>
    </div>
  );
};

export default LoopsPage;

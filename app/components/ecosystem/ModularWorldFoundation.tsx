import React from 'react';
import { Lightbulb, Puzzle, Handshake, Brain } from 'lucide-react'; // Import Lucide icons

export const ModularWorldFoundation = () => {
  const principles = [
    { icon: <Lightbulb className="w-12 h-12 text-blue-400" />, title: 'Innovation', description: 'Driving progress through creative solutions and forward-thinking approaches.' },
    { icon: <Puzzle className="w-12 h-12 text-purple-400" />, title: 'Modularity', description: 'Building adaptable systems with interconnected, independent components.' },
    { icon: <Handshake className="w-12 h-12 text-green-400" />, title: 'Synergy', description: 'Achieving greater outcomes through collaborative efforts and integrated strengths.' },
    { icon: <Brain className="w-12 h-12 text-yellow-400" />, title: 'Intelligence', description: 'Leveraging data and insights for informed decisions and strategic growth.' },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Subtle background animation for modular network feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white leading-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Modular World</span> Foundation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-8 text-center border border-blue-700 border-opacity-30 hover:border-blue-500 hover:border-opacity-50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 shadow-lg hover:shadow-blue-500/30"
            >
              <div className="text-6xl mb-6 transition-transform duration-300 ease-in-out hover:scale-110">{principle.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{principle.title}</h3>
              <p className="text-gray-300 text-lg">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import { MotionDiv } from './motion-components';
import { Zap, Scaling, Infinity, BrainCircuit } from 'lucide-react';

const values = [
  {
    name: 'Innovation',
    description: 'The relentless pursuit of groundbreaking ideas that redefine industries and form the building blocks of the future.',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-400',
  },
  {
    name: 'Modularity',
    description: 'The power of flexible, interconnected systems. We design adaptable blocks that create resilient and scalable solutions.',
    icon: <Scaling className="w-8 h-8" />,
    color: 'text-purple-400',
    borderColor: 'hover:border-purple-400',
  },
  {
    name: 'Synergy',
    description: 'Our strength lies in seamless collaboration. We connect our blocks to create a collective impact far greater than the sum of its parts.',
    icon: <Infinity className="w-8 h-8" />,
    color: 'text-green-400',
    borderColor: 'hover:border-green-400',
  },
  {
    name: 'Intelligence',
    description: 'Embedding intelligence into every block, from our products to our processes, to build a smarter, more intuitive world.',
    icon: <BrainCircuit className="w-8 h-8" />,
    color: 'text-yellow-400',
    borderColor: 'hover:border-yellow-400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export function CoreValues() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Foundation of Our Modular World</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            These principles are the code behind our culture, guiding how we build, connect, and innovate.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <MotionDiv
              key={value.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -10, scale: 1.03 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-transparent flex flex-col items-center text-center transition-all duration-300 ${value.borderColor}`}
            >
              <div className={`p-4 rounded-full mb-6 transition-colors duration-300 ${value.color}`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{value.name}</h3>
              <p className="text-gray-400">{value.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}

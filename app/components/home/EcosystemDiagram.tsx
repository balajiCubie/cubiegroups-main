"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons'; // Assuming you might use react-icons for loop icons
import { FaBrain, FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa'; // Example icons

interface LoopCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay: number;
}

const LoopCard: React.FC<LoopCardProps> = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="glassmorphism p-8 rounded-xl border border-gray-700 hover:border-neon-cyan transition-all duration-300 flex flex-col items-center text-center"
  >
    <Icon className="text-neon-cyan text-5xl mb-4" />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-silver">{description}</p>
  </motion.div>
);

const EcosystemDiagram: React.FC = () => {
  const loops = [
    {
      title: "Knowledge Growth Loop",
      description: "Insights continuously refine our understanding of markets and opportunities.",
      icon: FaBrain,
    },
    {
      title: "Value Growth Loop",
      description: "Smart valuations and M&A advisory lead to optimized deal structures and capital appreciation.",
      icon: FaChartLine,
    },
    {
      title: "Innovation Loop",
      description: "Dedicated R&D fuels new financial products and capabilities, reinvesting in the future.",
      icon: FaLightbulb,
    },
    {
      title: "Growth Loop",
      description: "Asset management strategies ensure continuous capital growth and portfolio optimization.",
      icon: FaRocket,
    },
  ];

  return (
    <section className="py-20 bg-black text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          The Cubie Group Ecosystem: Our Interconnected Loops
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-silver mb-12 max-w-3xl mx-auto"
        >
          At the heart of Cubie Group lies a dynamic ecosystem designed for continuous advancement in private investment and banking.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {loops.map((loop, index) => (
            <LoopCard
              key={loop.title}
              title={loop.title}
              description={loop.description}
              icon={loop.icon}
              delay={0.4 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { EcosystemDiagram };

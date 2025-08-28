"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LoopCardProps {
  title: string;
  description: string;
  delay: number;
}

const LoopCard: React.FC<LoopCardProps> = ({ title, description, delay }) => {
  return (
    <motion.div
      className="glassmorphism p-8 rounded-lg text-center hover:border-neon-cyan transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-silver">{description}</p>
    </motion.div>
  );
};

const LoopsPhilosophy: React.FC = () => {
  const loopsData = [
    {
      title: "Knowledge Growth Loop",
      description: "Smarter valuations lead to more insights and better data.",
      delay: 0,
    },
    {
      title: "Value Growth Loop",
      description: "Better deals and optimized strategies lead to compounding returns.",
      delay: 0.1,
    },
    {
      title: "Innovation Loop",
      description: "AI-driven research combined with proprietary data creates a powerful flywheel.",
      delay: 0.2,
    },
    {
      title: "Growth Loop",
      description: "Continuous reinvestment of capital and intelligence scales impact.",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Loops Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-silver mb-12 max-w-3xl mx-auto"
        >
          At Cubie Group, we believe in compounding intelligence and capital through interconnected growth loops.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {loopsData.map((loop, index) => (
            <LoopCard key={index} {...loop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { LoopsPhilosophy };

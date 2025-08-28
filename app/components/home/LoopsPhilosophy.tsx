"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaSyncAlt, FaChartPie, FaLightbulb, FaRocket } from 'react-icons/fa'; // Icons for visual representation

interface LoopCardProps {
  title: string;
  description: string;
  icon: React.ElementType; // Use React.ElementType for icons
  delay: number;
}

const LoopCard: React.FC<LoopCardProps> = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      className="glassmorphism p-8 rounded-lg text-center hover:border-neon-cyan transition-all duration-300 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <Icon className="text-neon-cyan text-5xl mb-4" />
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-silver">{description}</p>
    </motion.div>
  );
};

const LoopsPhilosophy: React.FC = () => {
  const loopsData = [
    {
      title: "Knowledge Growth Loop",
      description: "Insights continuously refine our understanding of markets and opportunities, feeding back into our systems for smarter decisions.",
      icon: FaSyncAlt,
      delay: 0,
    },
    {
      title: "Value Growth Loop",
      description: "Optimized deal structures and M&A advisory lead to superior capital appreciation, generating more resources for reinvestment.",
      icon: FaChartPie,
      delay: 0.1,
    },
    {
      title: "Innovation Loop",
      description: "Dedicated R&D fuels new financial products and capabilities, creating a powerful flywheel of technological advancement.",
      icon: FaLightbulb,
      delay: 0.2,
    },
    {
      title: "Growth Loop",
      description: "Continuous reinvestment of capital and intelligence scales our impact, expanding our ecosystem and market reach.",
      icon: FaRocket,
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
          Our Loop-Based Philosophy: Compounding Intelligence & Capital
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-silver mb-12 max-w-3xl mx-auto"
        >
          Cubie Group's core philosophy is built on a dynamic system of interconnected loops, where each stage fuels the next, creating exponential growth in both knowledge and value.
        </motion.p>

        {/* Visual representation of the loops */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {loopsData.map((loop, index) => (
            <LoopCard key={index} {...loop} />
          ))}
          {/* Optional: Add SVG or abstract lines to visually connect the loops */}
          {/* This could be a complex SVG overlay or simpler CSS lines */}
        </div>
      </div>
    </section>
  );
};

export { LoopsPhilosophy };

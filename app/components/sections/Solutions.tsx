"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaBuilding, FaChartLine, FaShieldAlt, FaMicroscope } from 'react-icons/fa'; // Example icons for solutions

interface SolutionCardProps {
  title: string;
  description: string;
  icon: IconType;
  delay: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, icon: Icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="glassmorphism p-8 rounded-lg border border-gray-700 hover:border-finance-blue transition-all duration-300 flex flex-col items-center text-center"
    >
      <Icon className="text-finance-blue text-5xl mb-4" />
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-silver">{description}</p>
    </motion.div>
  );
};

const Solutions: React.FC = () => {
  const solutionData = [
    {
      title: "Private Equity",
      description: "Optimize deal sourcing, valuation, and portfolio management for private equity firms.",
      icon: FaBuilding,
    },
    {
      title: "Asset Management",
      description: "Enhance investment strategies and risk management for asset managers with insights.",
      icon: FaChartLine,
    },
    {
      title: "Risk & Compliance",
      description: "Leverage real-time risk assessment and regulatory compliance in complex financial landscapes.",
      icon: FaShieldAlt,
    },
    {
      title: "Quant Research",
      description: "Accelerate quantitative research and model development with powerful data analytics and tools.",
      icon: FaMicroscope,
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
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Solutions for Leading Financial Institutions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionData.map((solution, index) => (
            <SolutionCard key={index} {...solution} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Solutions };
